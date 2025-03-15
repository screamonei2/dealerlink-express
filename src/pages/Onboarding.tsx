
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function Onboarding() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    dealershipName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    website: "",
    description: "",
    logoUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real implementation, this would send data to Supabase
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(currentStep + 1);
      
      if (currentStep === 2) {
        toast({
          title: "Setup complete!",
          description: "Your dealership has been set up successfully.",
        });
        navigate("/dashboard");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle>
              {currentStep === 1 && "Dealership Information"}
              {currentStep === 2 && "Almost Done!"}
              {currentStep === 3 && "Setup Complete!"}
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of 3
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-primary text-white" : "bg-gray-200"}`}>
                {currentStep > 1 ? <CheckCircle2 className="w-5 h-5" /> : "1"}
              </div>
              <div className={`h-1 w-16 ${currentStep >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-primary text-white" : "bg-gray-200"}`}>
                {currentStep > 2 ? <CheckCircle2 className="w-5 h-5" /> : "2"}
              </div>
              <div className={`h-1 w-16 ${currentStep >= 3 ? "bg-primary" : "bg-gray-200"}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-primary text-white" : "bg-gray-200"}`}>
                3
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          {currentStep === 1 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dealershipName">Dealership Name</Label>
                <Input 
                  id="dealershipName" 
                  name="dealershipName"
                  value={formData.dealershipName} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  name="address"
                  value={formData.address} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city" 
                    name="city"
                    value={formData.city} 
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input 
                    id="state" 
                    name="state"
                    value={formData.state} 
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP/Postal Code</Label>
                <Input 
                  id="zip" 
                  name="zip"
                  value={formData.zip} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  value={formData.phone} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <CardFooter className="px-0 pt-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Continue"}
                </Button>
              </CardFooter>
            </form>
          )}
          
          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input 
                  id="website" 
                  name="website"
                  value={formData.website} 
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Dealership Description</Label>
                <Textarea 
                  id="description" 
                  name="description"
                  value={formData.description} 
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="logoUrl">Upload Logo (Optional)</Label>
                <div className="flex items-center gap-4">
                  <Button type="button" variant="outline">
                    Choose File
                  </Button>
                  <span className="text-sm text-muted-foreground">No file chosen</span>
                </div>
              </div>
              
              <CardFooter className="px-0 pt-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Finishing Setup..." : "Complete Setup"}
                </Button>
              </CardFooter>
            </form>
          )}
          
          {currentStep === 3 && (
            <div className="text-center py-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Setup Complete!</h3>
              <p className="text-muted-foreground mb-6">
                Your dealership is now ready to use DealerLink Express.
              </p>
              <Button 
                className="w-full" 
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
