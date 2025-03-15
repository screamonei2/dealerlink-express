
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogFooter 
} from "@/components/ui/dialog";
import { Plus, Filter, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarListingForm from "@/components/cars/CarListingForm";
import CarSearch from "@/components/cars/CarSearch";

// Mock data for demonstration
const mockCars = [
  {
    id: "car-1",
    brand: "Toyota",
    model: "Corolla",
    year: "2022",
    price: "120000",
    description: "Well-maintained Toyota Corolla with excellent fuel economy.",
    color: "Silver",
    mileage: "15000",
    fuel: "flex",
    transmission: "automatic",
    photos: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "car-2",
    brand: "Honda",
    model: "Civic",
    year: "2021",
    price: "110000",
    description: "Sporty Honda Civic in excellent condition. Low mileage.",
    color: "Black",
    mileage: "22000",
    fuel: "flex",
    transmission: "automatic",
    photos: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "car-3",
    brand: "Volkswagen",
    model: "Golf",
    year: "2020",
    price: "95000",
    description: "Volkswagen Golf with great handling and comfort.",
    color: "White",
    mileage: "35000",
    fuel: "flex",
    transmission: "manual",
    photos: [
      "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "car-4",
    brand: "Ford",
    model: "Ranger",
    year: "2021",
    price: "180000",
    description: "Powerful Ford Ranger for work and leisure.",
    color: "Blue",
    mileage: "18000",
    fuel: "diesel",
    transmission: "automatic",
    photos: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    ]
  }
];

export default function Inventory() {
  const [cars, setCars] = useState(mockCars);
  const [filteredCars, setFilteredCars] = useState(mockCars);
  const [addCarDialogOpen, setAddCarDialogOpen] = useState(false);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredCars(cars);
    } else if (activeTab === "active") {
      setFilteredCars(cars.filter(car => true)); // In a real app, filter by active status
    } else if (activeTab === "sold") {
      setFilteredCars(cars.filter(car => false)); // In a real app, filter by sold status
    }
  }, [activeTab, cars]);

  const handleAddCar = (carData: any) => {
    const newCar = {
      id: `car-${cars.length + 1}`,
      ...carData,
    };
    setCars([newCar, ...cars]);
    setAddCarDialogOpen(false);
  };

  const handleSearchChange = (filters: any) => {
    console.log("Search filters:", filters);
    // In a real app, this would filter the cars based on the search filters
    // For now, just log the filters
  };

  return (
    <div className="h-full flex flex-col">
      <div className="container py-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setFilterDialogOpen(true)}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" onClick={() => setAddCarDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Vehicle
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Vehicles</TabsTrigger>
            <TabsTrigger value="active">Active Listings</TabsTrigger>
            <TabsTrigger value="sold">Sold</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCars.map(car => (
                  <Link key={car.id} to={`/inventory/${car.id}`} className="block">
                    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        {car.photos && car.photos.length > 0 ? (
                          <img 
                            src={car.photos[0]} 
                            alt={`${car.brand} ${car.model}`} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{car.brand} {car.model}</h3>
                        <div className="flex justify-between mt-2">
                          <span className="text-muted-foreground">Year: {car.year}</span>
                          <span className="font-medium">
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(parseInt(car.price))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No vehicles found.</p>
                <Button onClick={() => setAddCarDialogOpen(true)}>Add Your First Vehicle</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {/* Content for active vehicles */}
            <div className="text-center py-12">
              <p className="text-muted-foreground">No active listings found.</p>
            </div>
          </TabsContent>

          <TabsContent value="sold" className="space-y-4">
            {/* Content for sold vehicles */}
            <div className="text-center py-12">
              <p className="text-muted-foreground">No sold vehicles found.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add Car Dialog */}
      <Dialog open={addCarDialogOpen} onOpenChange={setAddCarDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Add New Vehicle</DialogTitle>
            <DialogDescription>
              Enter the details of the vehicle you want to list.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 px-1">
            <CarListingForm onSubmit={handleAddCar} />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Filter Dialog */}
      <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Filter Vehicles</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4" 
              onClick={() => setFilterDialogOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="py-4">
            <CarSearch onSearch={() => {}} onSearchChange={handleSearchChange} />
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setFilterDialogOpen(false)}>Apply Filters</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
