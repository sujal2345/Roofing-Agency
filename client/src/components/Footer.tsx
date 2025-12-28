import { Link } from "wouter";
import { Hammer, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-secondary p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-heading text-white tracking-wider">
                ROOF<span className="text-secondary">PRO</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the industry with over 20 years of experience in residential and commercial roofing solutions. Quality, integrity, and safety are our core values.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/5 p-2 rounded-full hover:bg-secondary transition-colors text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services/roof-building" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Roof Building",
                "Roof Repairing",
                "Roof Checking",
                "Gutter Installation",
                "Waterproofing",
                "Maintenance"
              ].map((service) => (
                <li key={service}>
                  <Link href="/services/roof-building" className="text-gray-400 hover:text-secondary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="h-6 w-6 text-secondary shrink-0" />
                <span>123 Construction Ave,<br />Builder City, ST 12345</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="h-6 w-6 text-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="h-6 w-6 text-secondary shrink-0" />
                <span>contact@roofpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RoofPro Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
