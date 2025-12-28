import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { useProjects } from "@/hooks/use-resources";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Completed Projects" 
            subtitle="Portfolio" 
            light={true} 
            centered={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading Skeletons
            [1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
            ))
          ) : (
            (projects || []).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase px-3 py-1 rounded shadow-md">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-heading text-primary mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-4 border-t pt-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {project.location || "Location N/A"}
                    </span>
                    <button className="text-secondary font-bold text-sm uppercase flex items-center hover:underline">
                      Details <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Specialized Section: Projects with Different Roof Colors */}
        <div className="mt-24">
          <SectionHeader
            title="Projects By Roof Color"
            subtitle="Variety & Style"
            centered={true}
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { color: "Charcoal Black", img: "https://images.unsplash.com/photo-1628135805872-4d9302941656?w=600&auto=format&fit=crop" },
              { color: "Terra Cotta Red", img: "https://images.unsplash.com/photo-1520183106842-8c11d0801dc6?w=600&auto=format&fit=crop" },
              { color: "Slate Grey", img: "https://images.unsplash.com/photo-1596637562094-142823c9ca0d?w=600&auto=format&fit=crop" },
              { color: "Forest Green", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&auto=format&fit=crop" },
              { color: "Weathered Wood", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop" },
              { color: "Deep Blue", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format&fit=crop" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer shine-effect"
              >
                <img
                  src={item.img}
                  alt={item.color}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-lg font-bold font-heading uppercase tracking-wider text-shadow">
                    {item.color}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
