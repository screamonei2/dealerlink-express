
import React from "react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentLeads from "@/components/dashboard/RecentLeads";
import UpcomingVisits from "@/components/dashboard/UpcomingVisits";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { LeadData } from "@/components/leads/LeadForm";

export default function Dashboard() {
  const navigate = useNavigate();
  
  // This would be replaced with data from Supabase in a real implementation
  const mockLeads: LeadData[] = [
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@example.com",
      phone: "(11) 99999-8888",
      message: "Interested in the Toyota Corolla",
      status: "new",
    },
    {
      id: "2",
      name: "Maria Oliveira",
      email: "maria@example.com",
      phone: "(21) 98888-7777",
      message: "When can I test drive the Honda Civic?",
      status: "contacted",
      scheduledVisit: new Date(Date.now() + 86400000), // tomorrow
    },
    {
      id: "3",
      name: "Pedro Santos",
      email: "pedro@example.com",
      phone: "(31) 97777-6666",
      message: "Looking for financing options for the VW Golf",
      status: "scheduled",
      scheduledVisit: new Date(Date.now() + 86400000 * 2), // day after tomorrow
    },
    {
      id: "4",
      name: "Ana Costa",
      email: "ana@example.com",
      phone: "(41) 96666-5555",
      message: "Can you send me more details about the Jeep Renegade?",
      status: "new",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => navigate("/inventory/add")}>
            <Plus className="mr-2 h-4 w-4" /> Add Vehicle
          </Button>
          <Button onClick={() => navigate("/leads/add")}>
            <Plus className="mr-2 h-4 w-4" /> Add Lead
          </Button>
        </div>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <RecentLeads 
          leads={mockLeads} 
          onViewAll={() => navigate("/leads")} 
        />
        
        <UpcomingVisits 
          leads={mockLeads} 
          onViewAll={() => navigate("/calendar")} 
        />
      </div>
    </div>
  );
}
