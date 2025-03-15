
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Edit, Trash, Calendar } from "lucide-react";

export default function InventoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would be fetched from Supabase in real implementation
  const carDetails = {
    id: id,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 120000,
    kilometers: 15000,
    fuel: "Flex",
    transmission: "Automatic",
    description: "Toyota Corolla XEI 2.0 Flex, único dono, completo com teto solar, rodas de liga leve 17 polegadas, sistema de som premium, bancos em couro, câmera de ré, sensores de estacionamento dianteiros e traseiros, sistema de navegação integrado.",
    features: [
      "Ar condicionado digital", 
      "Direção elétrica", 
      "Vidros elétricos", 
      "Travas elétricas",
      "Airbags frontais e laterais",
      "Freios ABS",
      "Controle de estabilidade",
      "Controle de tração",
      "Start/stop automático",
      "Controle de cruzeiro adaptativo"
    ],
    images: [
      "https://placehold.co/800x600?text=Toyota+Corolla+1",
      "https://placehold.co/800x600?text=Toyota+Corolla+2", 
      "https://placehold.co/800x600?text=Toyota+Corolla+3"
    ],
    status: "available",
    createdAt: "2023-06-15",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => navigate("/inventory")}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Inventory
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {carDetails.brand} {carDetails.model}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="rounded-lg overflow-hidden bg-black mb-4">
            <img
              src={carDetails.images[0]}
              alt={`${carDetails.brand} ${carDetails.model}`}
              className="w-full h-[400px] object-contain"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {carDetails.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border cursor-pointer">
                <img
                  src={image}
                  alt={`${carDetails.brand} ${carDetails.model} view ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-primary">
                  R$ {carDetails.price.toLocaleString('pt-BR')}
                </h2>
              </div>
              
              <div className="grid grid-cols-2 gap-y-2 text-sm mb-6">
                <div className="font-medium">Year</div>
                <div>{carDetails.year}</div>
                <div className="font-medium">Kilometers</div>
                <div>{carDetails.kilometers.toLocaleString('pt-BR')} km</div>
                <div className="font-medium">Fuel</div>
                <div>{carDetails.fuel}</div>
                <div className="font-medium">Transmission</div>
                <div>{carDetails.transmission}</div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full" onClick={() => {}}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Visit
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={() => navigate(`/inventory/${id}/edit`)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="p-4 border rounded-lg">
          <p>{carDetails.description}</p>
        </TabsContent>
        <TabsContent value="features" className="p-4 border rounded-lg">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {carDetails.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
