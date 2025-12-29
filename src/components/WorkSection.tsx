import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Lumina Dashboard",
    category: "Web App",
    description: "A comprehensive analytics dashboard for SaaS businesses with real-time data visualization.",
    color: "#F59E0B",
  },
  {
    title: "Bloom E-commerce",
    category: "E-commerce",
    description: "Modern online store with seamless checkout experience and inventory management.",
    color: "#10B981",
  },
  {
    title: "Pulse Health",
    category: "Mobile App",
    description: "Health tracking application with personalized insights and wellness recommendations.",
    color: "#6366F1",
  },
  {
    title: "Nova Brand Identity",
    category: "Branding",
    description: "Complete brand redesign for a tech startup including logo, guidelines, and collateral.",
    color: "#EC4899",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-4">
              Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
              Projects I'm proud of
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
