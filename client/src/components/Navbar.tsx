import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services/roof-building" }, // Points to first service
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-secondary p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-heading text-white tracking-wider">
              ROOF<span className="text-secondary">PRO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest hover:text-secondary transition-colors",
                  location === link.href ? "text-secondary" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="secondary"
              className="bg-secondary hover:bg-red-700 text-white font-bold uppercase tracking-wider gap-2"
              onClick={() => window.location.href = '/contact'}
            >
              <Phone className="h-4 w-4" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-xl absolute w-full border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-white hover:text-secondary py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                className="w-full bg-secondary hover:bg-red-700 text-white font-bold uppercase"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/contact';
                }}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
