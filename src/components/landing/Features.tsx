
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Car, User, MessageSquare, Calendar } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-2">Features</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Everything You Need to Run Your Dealership
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            Our comprehensive solution helps you manage inventory, track leads, and automate communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Car className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Inventory Management</CardTitle>
              <CardDescription>
                Easily list and manage all your vehicle inventory in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Add unlimited vehicle listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Upload multiple photos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Detailed vehicle specifications</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <User className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Lead Management</CardTitle>
              <CardDescription>
                Track and manage all your customer interactions efficiently.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Centralized lead database</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Lead status tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Customer interaction history</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AI Chatbot</CardTitle>
              <CardDescription>
                Engage with customers 24/7 using our AI-powered chat system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Proactive customer engagement</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Automated lead qualification</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>WhatsApp integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Visit Scheduling</CardTitle>
              <CardDescription>
                Streamline the process of scheduling test drives and visits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Integrated calendar</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Automated reminders</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Visit tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
