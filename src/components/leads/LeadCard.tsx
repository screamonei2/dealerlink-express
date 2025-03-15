
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, MessageSquare, Calendar, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { LeadData } from "./LeadForm";

interface LeadCardProps {
  lead: LeadData;
  onEdit?: () => void;
  onDelete?: () => void;
  onContact?: () => void;
  carName?: string;
}

export default function LeadCard({ lead, onEdit, onDelete, onContact, carName }: LeadCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "scheduled":
        return "bg-purple-100 text-purple-800";
      case "sold":
        return "bg-green-100 text-green-800";
      case "lost":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{lead.name}</h3>
          <Badge className={getStatusColor(lead.status)}>
            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
          </Badge>
        </div>
        
        <div className="mt-3 space-y-2 text-sm">
          <p className="flex items-center">
            <span className="font-semibold mr-2">Email:</span>
            <span>{lead.email}</span>
          </p>
          <p className="flex items-center">
            <span className="font-semibold mr-2">Phone:</span>
            <span>{lead.phone}</span>
          </p>
          {carName && (
            <p className="flex items-center">
              <span className="font-semibold mr-2">Interested in:</span>
              <span>{carName}</span>
            </p>
          )}
          {lead.scheduledVisit && (
            <p className="flex items-center">
              <span className="font-semibold mr-2">Visit:</span>
              <span>{format(new Date(lead.scheduledVisit), "PPP")}</span>
            </p>
          )}
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{lead.message}</p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1" onClick={onEdit}>
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
          
          <Button variant="outline" size="sm" className="flex-1" onClick={onContact}>
            <MessageSquare className="h-4 w-4 mr-1" />
            Contact
          </Button>
          
          <Button variant="outline" size="sm" className="flex-1 text-destructive hover:text-destructive" onClick={onDelete}>
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
