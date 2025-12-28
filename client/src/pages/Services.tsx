import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ContactForm";
import { Hammer, CheckCircle2, ArrowRight } from "lucide-react";
import { useFaqs } from "@/hooks/use-resources";
import { Button } from "@/components/ui/button";

export default function Services() {
  const params = useParams();
  // In a real app, use the ID to fetch specific service details
  const serviceSlug = params.slug || "roof-building";
  const serviceTitle = serviceSlug.replace(/-/g, " ");

  const { data: faqs } = useFaqs();

  // Filter FAQs for this service (mock logic)
  const serviceFaqs = faqs?.filter(f => 
    f.category.toLowerCase().includes(serviceSlug.split('-')[0]) || 
    f.category === 'General'
  ) || [];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* HEADER */}
      <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-heading uppercase tracking-widest"
          >
            {serviceTitle}
          </motion.h1>
          <div className="mt-4 flex justify-center items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <span className="text-secondary">Services</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Service Form */}
            <ContactForm service={serviceTitle} variant="card" className="border-t-4 border-secondary" />

            {/* Service Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold font-heading text-primary mb-6 uppercase">
                Premium {serviceTitle} Solutions
              </h2>
              <img 
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&auto=format&fit=crop"
                alt={serviceTitle}
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  When it comes to <strong>{serviceTitle}</strong>, you need a team you can trust. At RoofPro, we combine decades of experience with top-quality materials to deliver results that stand the test of time. Our comprehensive approach ensures every aspect of your roof is handled with precision and care.
                </p>
                <p className="mb-6">
                  We understand that your roof is your home's first line of defense against the elements. That's why we don't cut corners. From the initial inspection to the final cleanup, our team is dedicated to providing superior workmanship and exceptional customer service.
                </p>

                <h3 className="text-xl font-bold text-primary mb-4 uppercase">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Comprehensive assessment and planning",
                    "High-quality material selection",
                    "Expert installation by certified pros",
                    "Safety-first protocols",
                    "Timely project completion",
                    "Extended warranties available"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold font-heading text-primary mb-6 uppercase">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {serviceFaqs.length > 0 ? (
                  serviceFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                      <AccordionTrigger className="text-left font-bold text-primary hover:text-secondary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  // Fallback FAQs
                  [1, 2, 3].map((i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-bold text-primary hover:text-secondary">
                        How long does a typical project take?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        Most residential projects are completed within 1-3 days, depending on the size and weather conditions.
                      </AccordionContent>
                    </AccordionItem>
                  ))
                )}
              </Accordion>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            {/* Service Navigation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold font-heading text-primary mb-6 uppercase border-b pb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Roof Building", slug: "roof-building" },
                  { name: "Roof Repairing", slug: "roof-repairing" },
                  { name: "Roof Checking", slug: "roof-checking" },
                  { name: "Gutter Services", slug: "gutter-services" },
                ].map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className={`flex items-center justify-between p-3 rounded transition-colors ${
                      serviceSlug === s.slug ? "bg-secondary text-white" : "hover:bg-gray-100 text-gray-700"
                    }`}>
                      <span className="font-medium">{s.name}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brochure Widget */}
            <div className="bg-primary text-white rounded-xl shadow-lg p-8 text-center relative overflow-hidden">
              <div className="relative z-10">
                <Hammer className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-heading uppercase mb-2">Download Brochure</h3>
                <p className="text-gray-300 text-sm mb-6">Get detailed information about our materials and pricing.</p>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary uppercase font-bold">
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
