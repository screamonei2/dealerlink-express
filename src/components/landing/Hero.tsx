
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
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
  );
}
