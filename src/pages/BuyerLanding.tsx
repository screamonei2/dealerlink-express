
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { CarSearch, SearchFilters } from "@/components/cars/CarSearch";
import CarCard from "@/components/cars/CarCard";
import LandingHeader from "@/components/layout/LandingHeader";
import { Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";

// Mock data for cars to display
const mockCars = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    year: "2022",
    price: 120000,
    mileage: 5000,
    fuel: "flex",
    color: "Silver",
    transmission: "automatic",
    photos: ["https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
    description: "Well-maintained Toyota Corolla with low mileage."
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    year: "2021",
    price: 110000,
    mileage: 15000,
    fuel: "flex",
    color: "Black",
    transmission: "automatic",
    photos: ["https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"],
    description: "Sporty Honda Civic in excellent condition."
  },
  {
    id: "3",
    brand: "Volkswagen",
    model: "Golf",
    year: "2020",
    price: 95000,
    mileage: 25000,
    fuel: "flex",
    color: "White",
    transmission: "manual",
    photos: ["https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"],
    description: "Volkswagen Golf with great fuel economy."
  },
  {
    id: "4",
    brand: "Ford",
    model: "Ranger",
    year: "2021",
    price: 180000,
    mileage: 10000,
    fuel: "diesel",
    color: "Blue",
    transmission: "automatic",
    photos: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
    description: "Powerful Ford Ranger for work and leisure."
  },
  {
    id: "5",
    brand: "Fiat",
    model: "Argo",
    year: "2022",
    price: 75000,
    mileage: 8000,
    fuel: "flex",
    color: "Red",
    transmission: "manual",
    photos: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
    description: "Compact and efficient Fiat Argo."
  },
  {
    id: "6",
    brand: "Jeep",
    model: "Renegade",
    year: "2020",
    price: 120000,
    mileage: 30000,
    fuel: "flex",
    color: "Green",
    transmission: "automatic",
    photos: ["https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
    description: "Versatile Jeep Renegade for city and off-road."
  }
];

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function BuyerLanding() {
  const [filteredCars, setFilteredCars] = useState(mockCars);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>();

  const handleSearch = (filters: SearchFilters) => {
    let results = [...mockCars];
    
    // Filter by brand
    if (filters.brand !== "Any") {
      results = results.filter(car => car.brand === filters.brand);
    }
    
    // Filter by model
    if (filters.model) {
      results = results.filter(car => 
        car.model.toLowerCase().includes(filters.model.toLowerCase())
      );
    }
    
    // Filter by year
    if (filters.year !== "Any") {
      results = results.filter(car => car.year === filters.year);
    }
    
    // Filter by price range
    results = results.filter(car => 
      car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );
    
    setFilteredCars(results);
  };

  const handleContactDealer = (car: any) => {
    setSelectedCar(car);
    setContactDialogOpen(true);
  };

  const onSubmitContact = (data: ContactFormValues) => {
    console.log("Contact form submitted:", { ...data, carId: selectedCar?.id });
    toast({
      title: "Message sent!",
      description: "The dealer will get back to you shortly.",
    });
    setContactDialogOpen(false);
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-black to-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Car dealership" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          <div className="container relative px-4 md:px-6 py-20 md:py-28 flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Find Your Perfect Car Today
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Browse our extensive collection of quality vehicles from trusted dealers across Brazil.
            </p>
            <Button size="lg" className="mt-4" asChild>
              <a href="#car-search">
                Start Searching
                <ChevronDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
        
        {/* Search Section */}
        <section id="car-search" className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Search for Your Ideal Vehicle
            </h2>
            <CarSearch onSearch={handleSearch} />
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Available Vehicles {filteredCars.length > 0 && `(${filteredCars.length})`}
            </h2>
            
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    onContact={() => handleContactDealer(car)} 
                  />
                ))}
              </div>
            ) : (
              <Card className="bg-muted">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-center text-muted-foreground mb-4">
                    No vehicles match your search criteria.
                  </p>
                  <Button variant="outline" onClick={() => setFilteredCars(mockCars)}>
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Buy Through DealerLink?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
                  <p className="text-muted-foreground">
                    Contact dealers directly without intermediaries.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                  <p className="text-muted-foreground">
                    All vehicles are verified by trusted dealerships.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Support Available</h3>
                  <p className="text-muted-foreground">
                    Our team is available to assist with your purchase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-gray-50">
        <div className="container px-4 md:px-6 py-8">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} DealerLink Express. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Dealer about {selectedCar?.brand} {selectedCar?.model}</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit(onSubmitContact)} className="space-y-4 mt-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <Input
                id="phone"
                {...register("phone", { required: "Phone is required" })}
                placeholder="Your phone number"
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                placeholder="I'm interested in this vehicle. Please contact me with more information."
                rows={4}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setContactDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Send Message</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
