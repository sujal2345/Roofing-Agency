import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="About RoofPro" 
            subtitle="Our Story" 
            light={true} 
            centered={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold font-heading text-primary mb-6 uppercase">Building Trust Since 2003</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded on the principles of integrity, quality, and safety, RoofPro has grown from a small family business into one of the region's most trusted roofing contractors.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our mission is simple: provide exceptional roofing solutions that protect what matters most to you. Whether it's a residential home or a large commercial complex, we approach every project with the same level of dedication and expertise.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Licensed & Insured", "Certified Experts", "Quality Materials", "Safety First"].map((item, i) => (
                <div key={i} className="flex items-center text-primary font-bold">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop" 
              alt="Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <SectionHeader title="Meet The Experts" subtitle="Our Team" centered={true} />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "John Smith", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop" },
              { name: "Sarah Johnson", role: "Project Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop" },
              { name: "Mike Williams", role: "Lead Contractor", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&auto=format&fit=crop" },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="h-80 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium uppercase tracking-wider text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
