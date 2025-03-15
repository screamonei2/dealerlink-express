
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Car,
  User,
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Inventory",
      icon: Car,
      path: "/inventory",
    },
    {
      title: "Leads",
      icon: User,
      path: "/leads",
    },
    {
      title: "Calendar",
      icon: Calendar,
      path: "/calendar",
    },
    {
      title: "Chat",
      icon: MessageSquare,
      path: "/chat",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex justify-center items-center p-4">
        <Link to="/dashboard" className="flex items-center">
          <h1 className="text-xl font-bold text-white">DealerLink</h1>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild>
                <Link
                  to={item.path}
                  className={cn(
                    location.pathname === item.path
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <Button
          variant="ghost"
          className="w-full text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          asChild
        >
          <Link to="/">
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
