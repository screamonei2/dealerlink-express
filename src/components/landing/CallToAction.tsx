
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
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
              <Link to="/cars">Browse Available Cars</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
