
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { LeadData } from "../leads/LeadForm";
import { format } from "date-fns";

interface UpcomingVisitsProps {
  leads: LeadData[];
  onViewAll: () => void;
}

export default function UpcomingVisits({ leads, onViewAll }: UpcomingVisitsProps) {
  // Filter leads that have scheduled visits
  const scheduledLeads = leads.filter(
    (lead) => lead.scheduledVisit && lead.status === "scheduled"
  );

  // Get unique dates of scheduled visits
  const scheduledDates = scheduledLeads
    .map((lead) => lead.scheduledVisit)
    .filter((date): date is Date => date !== null && date !== undefined)
    .map((date) => new Date(date));

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Visits</CardTitle>
        <Button variant="outline" size="sm" onClick={onViewAll}>
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="default"
          className="rounded-md border"
          selected={scheduledDates}
          disabled={[
            {
              before: new Date(),
            },
          ]}
        />
        
        <div className="mt-4 space-y-4">
          {scheduledLeads.slice(0, 3).map((lead) => (
            <div key={lead.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{lead.name}</p>
                <p className="text-sm text-muted-foreground">
                  {lead.scheduledVisit && format(new Date(lead.scheduledVisit), "PPP")}
                </p>
              </div>
              <Button variant="ghost" size="sm">Details</Button>
            </div>
          ))}
          
          {scheduledLeads.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted-foreground">No upcoming visits</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
