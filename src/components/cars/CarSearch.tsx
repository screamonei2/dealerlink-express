
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search } from "lucide-react";

interface CarSearchProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  brand: string;
  model: string;
  priceRange: [number, number];
  year: string;
}

const carBrands = [
  "Any", "Toyota", "Honda", "Ford", "Chevrolet", "Volkswagen", "BMW", "Mercedes-Benz", 
  "Audi", "Hyundai", "Kia", "Nissan", "Fiat", "Jeep", "Renault"
];

const currentYear = new Date().getFullYear();
const years = ["Any", ...Array.from({ length: 20 }, (_, i) => String(currentYear - i))];

export default function CarSearch({ onSearch }: CarSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    brand: "Any",
    model: "",
    priceRange: [0, 500000],
    year: "Any",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handlePriceRangeChange = (value: number[]) => {
    setFilters({ ...filters, priceRange: [value[0], value[1]] });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Select 
                value={filters.brand}
                onValueChange={(value) => setFilters({ ...filters, brand: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any Brand" />
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
                placeholder="Any Model"
                value={filters.model}
                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Select 
                value={filters.year}
                onValueChange={(value) => setFilters({ ...filters, year: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Price Range (R$)</Label>
                <span className="text-sm text-muted-foreground">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                  }).format(filters.priceRange[0])} - 
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                  }).format(filters.priceRange[1])}
                </span>
              </div>
              <Slider
                defaultValue={[0, 500000]}
                max={500000}
                step={10000}
                value={[filters.priceRange[0], filters.priceRange[1]]}
                onValueChange={handlePriceRangeChange}
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full mt-6">
            <Search className="h-4 w-4 mr-2" />
            Search Vehicles
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
