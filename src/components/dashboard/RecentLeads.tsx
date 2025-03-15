
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadData } from "../leads/LeadForm";

interface RecentLeadsProps {
  leads: LeadData[];
  onViewAll: () => void;
}

export default function RecentLeads({ leads, onViewAll }: RecentLeadsProps) {
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
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Leads</CardTitle>
        <Button variant="outline" size="sm" onClick={onViewAll}>
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {leads.map((lead) => (
            <div key={lead.id} className="flex items-center">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{lead.name}</p>
                <p className="text-sm text-muted-foreground">
                  {lead.email} • {lead.phone}
                </p>
              </div>
              <Badge className={getStatusColor(lead.status)}>
                {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
              </Badge>
            </div>
          ))}
          
          {leads.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted-foreground">No recent leads to display</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
