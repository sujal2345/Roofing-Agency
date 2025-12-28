import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
    >
      <span className={`block text-sm font-bold uppercase tracking-[0.2em] mb-3 ${light ? "text-secondary" : "text-secondary"}`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold font-heading uppercase ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-secondary ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
