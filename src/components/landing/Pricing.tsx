
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-2">Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            Choose the plan that best fits your dealership needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-muted">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">R$ 0</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <CardDescription className="mt-2">
                Perfect for small dealerships just getting started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Up to 10 vehicle listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Basic lead management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <Link to="/auth">Sign Up for Free</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border-2 border-primary shadow-md relative">
            <Badge className="absolute -top-3 right-4 bg-primary">Popular</Badge>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">R$ 99</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <CardDescription className="mt-2">
                Everything you need to grow your dealership.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Unlimited vehicle listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Advanced lead management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>AI Chatbot & WhatsApp integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full" asChild>
                <Link to="/auth">Start 14-day Free Trial</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
