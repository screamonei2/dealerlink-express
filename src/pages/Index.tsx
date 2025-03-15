
import React from "react";
import LandingHeader from "@/components/layout/LandingHeader";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features"; 
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}
