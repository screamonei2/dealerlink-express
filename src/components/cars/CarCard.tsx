
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, MessageSquare } from "lucide-react";
import { CarData } from "./CarListingForm";

interface CarCardProps {
  car: CarData;
  onEdit?: () => void;
  onDelete?: () => void;
  onContact?: () => void;
  isManagement?: boolean;
}

export default function CarCard({ car, onEdit, onDelete, onContact, isManagement = false }: CarCardProps) {
  // Format price with R$ and thousands separator
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(car.price));

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="relative aspect-video bg-muted">
        {car.photos && car.photos.length > 0 ? (
          <img
            src={car.photos[0]}
            alt={`${car.brand} ${car.model}`}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image available
          </div>
        )}
        <Badge variant="secondary" className="absolute top-2 right-2">
          {car.year}
        </Badge>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <h3 className="text-lg font-bold">{car.brand} {car.model}</h3>
        <p className="text-xl font-semibold text-primary mt-1">
          {formattedPrice}
        </p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Mileage:</span>
            <span>{new Intl.NumberFormat('pt-BR').format(Number(car.mileage))} km</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fuel:</span>
            <span className="capitalize">{car.fuel}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Color:</span>
            <span>{car.color}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transmission:</span>
            <span className="capitalize">{car.transmission}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        {isManagement ? (
          <div className="flex gap-2 w-full">
            <Button variant="outline" size="sm" className="flex-1" onClick={onEdit}>
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
            <Button variant="outline" size="sm" className="flex-1 text-destructive hover:text-destructive" onClick={onDelete}>
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </div>
        ) : (
          <Button className="w-full" onClick={onContact}>
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Dealer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
