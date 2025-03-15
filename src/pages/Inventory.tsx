
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CarSearch from "@/components/cars/CarSearch";
import CarCard from "@/components/cars/CarCard";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface CarData {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  kilometers: number;
  fuel: string;
  transmission: string;
  description: string;
  images: string[];
}

export default function Inventory() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    query: "",
    brand: "",
    minPrice: "",
    maxPrice: "",
  });

  // This is mock data - would be replaced with Supabase query in real implementation
  const mockCars: CarData[] = [
    {
      id: "1",
      brand: "Toyota",
      model: "Corolla",
      year: 2022,
      price: 120000,
      kilometers: 15000,
      fuel: "Flex",
      transmission: "Automatic",
      description: "Toyota Corolla XEI 2.0 Flex, único dono, completo.",
      images: ["https://placehold.co/600x400?text=Toyota+Corolla"],
    },
    {
      id: "2",
      brand: "Honda",
      model: "Civic",
      year: 2021,
      price: 130000,
      kilometers: 20000,
      fuel: "Flex",
      transmission: "Automatic",
      description: "Honda Civic Touring 1.5 Turbo, teto solar, couro.",
      images: ["https://placehold.co/600x400?text=Honda+Civic"],
    },
    {
      id: "3",
      brand: "Volkswagen",
      model: "Golf",
      year: 2020,
      price: 110000,
      kilometers: 25000,
      fuel: "Flex",
      transmission: "Automatic",
      description: "VW Golf GTI 2.0 Turbo, rodas 18\", som Fender.",
      images: ["https://placehold.co/600x400?text=VW+Golf"],
    },
    {
      id: "4",
      brand: "Fiat",
      model: "Pulse",
      year: 2023,
      price: 90000,
      kilometers: 5000,
      fuel: "Flex",
      transmission: "Automatic",
      description: "Fiat Pulse Impetus 1.0 Turbo, carro novo, completo.",
      images: ["https://placehold.co/600x400?text=Fiat+Pulse"],
    },
    {
      id: "5",
      brand: "Jeep",
      model: "Renegade",
      year: 2022,
      price: 115000,
      kilometers: 18000,
      fuel: "Flex",
      transmission: "Automatic",
      description: "Jeep Renegade Longitude 1.8, 4x2, completo.",
      images: ["https://placehold.co/600x400?text=Jeep+Renegade"],
    },
    {
      id: "6",
      brand: "Chevrolet",
      model: "Tracker",
      year: 2021,
      price: 105000,
      kilometers: 22000,
      fuel: "Flex",
      transmission: "Automatic",
      description: "Chevrolet Tracker Premier 1.2 Turbo, teto panorâmico.",
      images: ["https://placehold.co/600x400?text=Chevrolet+Tracker"],
    },
  ];

  // This would be filtered data from Supabase in real implementation
  const filteredCars = mockCars.filter((car) => {
    const matchesQuery =
      car.brand.toLowerCase().includes(searchParams.query.toLowerCase()) ||
      car.model.toLowerCase().includes(searchParams.query.toLowerCase()) ||
      car.description.toLowerCase().includes(searchParams.query.toLowerCase());

    const matchesBrand = searchParams.brand
      ? car.brand.toLowerCase() === searchParams.brand.toLowerCase()
      : true;

    const matchesMinPrice = searchParams.minPrice
      ? car.price >= parseInt(searchParams.minPrice)
      : true;

    const matchesMaxPrice = searchParams.maxPrice
      ? car.price <= parseInt(searchParams.maxPrice)
      : true;

    return matchesQuery && matchesBrand && matchesMinPrice && matchesMaxPrice;
  });

  const handleSearchChange = (params: any) => {
    setSearchParams({ ...searchParams, ...params });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
        <Button onClick={() => navigate("/inventory/add")}>
          <Plus className="mr-2 h-4 w-4" /> Add Vehicle
        </Button>
      </div>

      <CarSearch onSearchChange={handleSearchChange} />

      {filteredCars.length === 0 ? (
        <div className="text-center p-10 border rounded-lg">
          <h3 className="text-lg font-medium">No vehicles found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onView={() => navigate(`/inventory/${car.id}`)}
              onEdit={() => navigate(`/inventory/${car.id}/edit`)}
            />
          ))}
        </div>
      )}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
