import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "wouter";
import { ArrowRight, Hammer, Shield, Wrench, Star, Play, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useProjects, useTestimonials } from "@/hooks/use-resources";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const { data: projects } = useProjects();
  const { data: testimonials } = useTestimonials();

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Construction/Roofing hero image */}
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
            alt="Roofing Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <span className="inline-block bg-secondary px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-sm">
              Premium Roofing Services
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight uppercase text-shadow">
              Keep Your Home <br />
              <span className="text-secondary">Secure</span> & Your <br />
              Family Safe
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              With over 20 years of experience, RoofPro delivers top-tier residential and commercial roofing solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="h-14 px-8 text-lg font-bold uppercase bg-white text-primary hover:bg-gray-100">
                Explore Services
              </Button>
              <Button variant="outline" className="h-14 px-8 text-lg font-bold uppercase border-white text-white hover:bg-white/10 hover:text-white">
                View Projects
              </Button>
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <ContactForm className="max-w-md ml-auto" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Professional Services"
            subtitle="What We Do"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Roof Building",
                desc: "Complete roof installation for new constructions with premium materials.",
                img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&auto=format&fit=crop"
              },
              {
                icon: Wrench,
                title: "Roof Repair",
                desc: "Expert repair services for leaks, storm damage, and wear & tear.",
                img: "https://images.unsplash.com/photo-1628135805872-4d9302941656?w=800&auto=format&fit=crop"
              },
              {
                icon: Shield,
                title: "Roof Inspection",
                desc: "Comprehensive inspections to ensure your roof's integrity and safety.",
                img: "https://images.unsplash.com/photo-1596637562094-142823c9ca0d?w=800&auto=format&fit=crop"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-secondary p-3 rounded-lg shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.desc}
                  </p>
                  <Link href={`/services/roof-building`} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                title="Why Choose RoofPro?"
                subtitle="The Best In The Business"
                centered={false}
                light={true}
              />
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We take pride in our work and ensure every project meets our high standards of quality and safety. Our team of certified professionals is dedicated to your satisfaction.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Licensed and Insured Contractors",
                  "24/7 Emergency Services",
                  "Free Detailed Estimates",
                  "Premium Quality Materials",
                  "10-Year Workmanship Warranty"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-white"
                  >
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-3" />
                    <span className="text-lg font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold uppercase">
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                {/* Roofer working */}
                <img
                  src="https://pixabay.com/get/gff4bd0507a241aa4acf3b7e95bcd78d8158a615e9a5eece859e9fa725304fadf7fa867ae01a51388525812595326a939d6f18c3bf4afb04403a7cd26553dad24_1280.jpg"
                  alt="Worker"
                  className="w-full"
                />
              </div>
              
              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-secondary text-white p-8 rounded-lg shadow-xl"
              >
                <div className="text-5xl font-bold font-heading">20+</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-90">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 950, suffix: "+", label: "Completed Projects" },
              { number: 50, suffix: "k+", label: "Happy Customers" },
              { number: 120, suffix: "", label: "Expert Workers" },
              { number: 25, suffix: "+", label: "Awards Won" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                  <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-secondary">{stat.suffix}</span>
                </h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Recent Projects"
            subtitle="Portfolio"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {(projects?.slice(0, 6) || []).map((project, idx) => (
              <motion.div
                key={project.id || idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg shine-effect cursor-pointer"
              >
                <img
                  src={project.image || "https://images.unsplash.com/photo-1596522354195-e84e9c0a5d2e?w=800&auto=format&fit=crop"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold font-heading mb-2">
                    {project.title}
                  </h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <Link href={`/projects`} className="text-white font-bold text-sm uppercase flex items-center hover:text-secondary">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Fallback Static Projects if no data */}
            {!projects?.length && [1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative h-80 rounded-xl overflow-hidden shadow-lg shine-effect bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Project Image Placeholder
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold uppercase px-8">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIAL */}
      <section className="py-24 bg-primary relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white uppercase mb-8">
              See What Our Clients Say
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer bg-black">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&auto=format&fit=crop"
                alt="Video Thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white fill-current" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 text-left">
                <p className="text-white text-xl font-bold italic">"RoofPro saved our home during the storm season. Incredible service!"</p>
                <p className="text-secondary font-bold mt-2 uppercase">- John Doe, Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
