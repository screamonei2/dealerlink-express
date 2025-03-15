
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function AuthForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dealershipName: "",
    phone: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (authMode === "login") {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        
        if (error) throw error;
        
        toast({
          title: "Success!",
          description: "You've been logged in successfully.",
        });
        navigate("/dashboard");
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              dealershipName: formData.dealershipName,
              phone: formData.phone,
            }
          }
        });
        
        if (error) throw error;
        
        toast({
          title: "Registration successful!",
          description: "Welcome to DealerLink Express. You're now logged in.",
        });
        navigate("/onboarding");
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast({
        title: "Authentication error",
        description: error.message || "There was a problem signing you in. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="w-full max-w-md">
      <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as "login" | "register")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        
        <CardHeader>
          <CardTitle>
            {authMode === "login" ? "Welcome Back" : "Create Your Account"}
          </CardTitle>
          <CardDescription>
            {authMode === "login" 
              ? "Sign in to manage your dealership." 
              : "Get started with DealerLink Express in less than 5 minutes."}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="dealership@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                name="password"
                type="password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            
            {authMode === "register" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="dealershipName">Dealership Name</Label>
                  <Input 
                    id="dealershipName" 
                    name="dealershipName"
                    placeholder="Your Dealership Name" 
                    value={formData.dealershipName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder="+55 (11) 99999-9999" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </>
            )}
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Please wait..." : authMode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground mt-2">
            {authMode === "login" ? "Don't have an account?" : "Already have an account?"}
            <Button 
              variant="link" 
              onClick={() => setAuthMode(authMode === "login" ? "register" : "login")}
              className="pl-1 underline"
            >
              {authMode === "login" ? "Sign up" : "Sign in"}
            </Button>
          </div>
        </CardFooter>
      </Tabs>
    </Card>
  );
}
