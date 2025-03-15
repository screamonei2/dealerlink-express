
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Browse Cars", href: "/cars" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="border-b border-border sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">DealerLink</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/auth">Try for Free</Link>
            </Button>
          </div>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <span className="font-bold text-xl">DealerLink</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                
                <nav className="flex flex-col gap-4 mb-8">
                  {navItems.map((item) => (
                    item.href.startsWith("/") ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </nav>
                
                <div className="flex flex-col gap-2 mt-auto">
                  <Button variant="outline" asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Link to="/auth">Sign In</Link>
                  </Button>
                  <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Link to="/auth">Try for Free</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
