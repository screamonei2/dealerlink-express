
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Car, User, DollarSign } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={`text-xs ${trend.isPositive ? "text-green-500" : "text-red-500"}`}>
            {trend.isPositive ? "+" : "-"}{trend.value}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Listings"
        value="12"
        icon={<Car className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 16, isPositive: true }}
      />
      <StatsCard
        title="Active Leads"
        value="24"
        icon={<User className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 5, isPositive: true }}
      />
      <StatsCard
        title="Scheduled Visits"
        value="7"
        icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 10, isPositive: true }}
      />
      <StatsCard
        title="Conversions"
        value="3"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: 12, isPositive: false }}
      />
    </div>
  );
}
