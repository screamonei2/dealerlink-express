
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface CarListingFormProps {
  onSave: (carData: CarData) => void;
  initialData?: CarData;
  isEditing?: boolean;
}

export interface CarData {
  id?: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  color: string;
  mileage: string;
  transmission: string;
  fuel: string;
  description: string;
  photos: string[];
}

const carBrands = [
  "Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen", "BMW", "Mercedes-Benz", 
  "Audi", "Hyundai", "Kia", "Nissan", "Fiat", "Jeep", "Renault"
];

export default function CarListingForm({ onSave, initialData, isEditing = false }: CarListingFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState<CarData>(
    initialData || {
      brand: "",
      model: "",
      year: "",
      price: "",
      color: "",
      mileage: "",
      transmission: "",
      fuel: "",
      description: "",
      photos: [],
    }
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // In a real implementation, this would send data to Supabase
      onSave(formData);
      
      toast({
        title: "Success!",
        description: isEditing 
          ? "Vehicle listing has been updated." 
          : "New vehicle has been added to your inventory.",
      });
    } catch (error) {
      console.error("Error saving car listing:", error);
      toast({
        title: "Error",
        description: "There was a problem saving your vehicle listing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: keyof CarData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // This would be replaced with actual file upload functionality in a real implementation
  const handlePhotoUpload = () => {
    const mockPhotoUrl = `https://source.unsplash.com/random/800x600/?car,${formData.brand}`;
    setFormData({ ...formData, photos: [...formData.photos, mockPhotoUrl] });
    
    toast({
      title: "Photo added",
      description: "Your photo has been uploaded successfully.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Vehicle" : "Add New Vehicle"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Select 
                onValueChange={(value) => handleSelectChange("brand", value)}
                defaultValue={formData.brand}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent>
                  {carBrands.map((brand) => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input 
                id="model" 
                name="model"
                placeholder="e.g., Corolla" 
                value={formData.model}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input 
                id="year" 
                name="year"
                placeholder="e.g., 2023" 
                value={formData.year}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price">Price (R$)</Label>
              <Input 
                id="price" 
                name="price"
                placeholder="e.g., 85000" 
                value={formData.price}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <Input 
                id="color" 
                name="color"
                placeholder="e.g., White" 
                value={formData.color}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mileage">Mileage (km)</Label>
              <Input 
                id="mileage" 
                name="mileage"
                placeholder="e.g., 15000" 
                value={formData.mileage}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="transmission">Transmission</Label>
              <Select 
                onValueChange={(value) => handleSelectChange("transmission", value)}
                defaultValue={formData.transmission}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="cvt">CVT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fuel">Fuel Type</Label>
              <Select 
                onValueChange={(value) => handleSelectChange("fuel", value)}
                defaultValue={formData.fuel}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gasoline">Gasoline</SelectItem>
                  <SelectItem value="ethanol">Ethanol</SelectItem>
                  <SelectItem value="flex">Flex (Gasoline/Ethanol)</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              name="description"
              placeholder="Describe the vehicle, including its features, condition, etc." 
              value={formData.description}
              onChange={handleChange}
              rows={5}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label>Photos</Label>
            <div className="grid grid-cols-3 gap-2">
              {formData.photos.map((photo, index) => (
                <div key={index} className="relative aspect-video bg-gray-100 rounded-md overflow-hidden">
                  <img src={photo} alt={`Vehicle ${index + 1}`} className="object-cover w-full h-full" />
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                className="aspect-video flex flex-col items-center justify-center text-muted-foreground"
                onClick={handlePhotoUpload}
              >
                <span className="text-2xl">+</span>
                <span className="text-xs">Add Photo</span>
              </Button>
            </div>
          </div>
          
          <CardFooter className="px-0 pt-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Saving..." : isEditing ? "Update Vehicle" : "Add Vehicle"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
