
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LandingHeader from "@/components/layout/LandingHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Car, User, MessageSquare, Calendar } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Simplify Your Dealership Management with DealerLink Express
              </h1>
              <p className="text-xl text-muted-foreground">
                The all-in-one platform to manage your vehicle listings, customer leads, and boost sales through AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" asChild>
                  <Link to="/auth">Start your 14-day free trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">Learn more</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
        
        {/* Pricing Section */}
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
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge variant="outline" className="mb-2">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Trusted by Dealerships Across Brazil
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Hear what our customers have to say about DealerLink Express.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic">
                      "DealerLink Express has transformed how we manage our dealership. The AI chatbot has increased our lead conversion by 25%."
                    </blockquote>
                    <div>
                      <p className="font-semibold">Carlos Silva</p>
                      <p className="text-sm text-muted-foreground">AutoPrime São Paulo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic">
                      "The lead management system has made it so much easier to track potential customers. We're closing more deals than ever before."
                    </blockquote>
                    <div>
                      <p className="font-semibold">Ana Oliveira</p>
                      <p className="text-sm text-muted-foreground">Elite Motors Rio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic">
                      "The WhatsApp integration is a game-changer. Our customers love how quickly we respond, and it's all automated!"
                    </blockquote>
                    <div>
                      <p className="font-semibold">Ricardo Santos</p>
                      <p className="text-sm text-muted-foreground">Premium Auto Belo Horizonte</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-brand-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Dealership?
              </h2>
              <p className="text-xl opacity-90 max-w-[700px]">
                Join over 500 dealerships already using DealerLink Express to boost their sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/auth">Start Your Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <a href="#features">Learn More</a>
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-gray-50">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DealerLink</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">LGPD Compliance</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DealerLink Express. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
