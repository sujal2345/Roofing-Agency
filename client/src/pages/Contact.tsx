import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Contact Us" 
            subtitle="Get In Touch" 
            light={true} 
            centered={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold font-heading text-primary mb-8 uppercase">
              We're Here To Help
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Have a roofing emergency or planning a new project? Reach out to us for a free consultation and estimate.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Our Location", text: "123 Construction Ave, Builder City, ST 12345" },
                { icon: Phone, title: "Phone Number", text: "+1 (555) 123-4567" },
                { icon: Mail, title: "Email Address", text: "contact@roofpro.com" },
                { icon: Clock, title: "Working Hours", text: "Mon - Sat: 8:00 AM - 6:00 PM" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-lg shadow-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-primary uppercase mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-gray-500 font-bold">
              [Google Map Integration Would Go Here]
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm className="border-t-4 border-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
