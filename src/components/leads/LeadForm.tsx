
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { CarData } from "../cars/CarListingForm";

interface LeadFormProps {
  cars: CarData[];
  onSave: (leadData: LeadData) => void;
  initialData?: LeadData;
  isEditing?: boolean;
}

export interface LeadData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  interestedCarId?: string;
  message: string;
  scheduledVisit?: Date | null;
  status: "new" | "contacted" | "scheduled" | "sold" | "lost";
}

export default function LeadForm({ cars, onSave, initialData, isEditing = false }: LeadFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState<LeadData>(
    initialData || {
      name: "",
      email: "",
      phone: "",
      interestedCarId: undefined,
      message: "",
      scheduledVisit: null,
      status: "new",
    }
  );

  const [date, setDate] = useState<Date | undefined>(
    formData.scheduledVisit ? new Date(formData.scheduledVisit) : undefined
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // In a real implementation, this would send data to Supabase
      const updatedFormData = {
        ...formData,
        scheduledVisit: date,
      };
      onSave(updatedFormData);
      
      toast({
        title: "Success!",
        description: isEditing 
          ? "Lead has been updated successfully." 
          : "New lead has been created successfully.",
      });
    } catch (error) {
      console.error("Error saving lead:", error);
      toast({
        title: "Error",
        description: "There was a problem saving this lead. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: keyof LeadData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Lead" : "Add New Lead"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name"
                placeholder="Customer's full name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                placeholder="customer@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone"
                placeholder="+55 (11) 99999-9999" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select 
                onValueChange={(value) => handleSelectChange("status", value)}
                defaultValue={formData.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="scheduled">Visit Scheduled</SelectItem>
                  <SelectItem value="sold">Sold</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interestedCarId">Interested in</Label>
              <Select 
                onValueChange={(value) => handleSelectChange("interestedCarId", value)}
                value={formData.interestedCarId}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {cars.map((car) => (
                    <SelectItem key={car.id} value={car.id || ""}>
                      {car.brand} {car.model} ({car.year})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="scheduledVisit">Scheduled Visit</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message / Notes</Label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="Enter customer request or any relevant notes" 
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required 
            />
          </div>
          
          <CardFooter className="px-0 pt-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Saving..." : isEditing ? "Update Lead" : "Add Lead"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
