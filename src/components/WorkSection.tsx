import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "ASKA",
    category: "Mobile App",
    description: "Kemudahan akses, satu aplikasi untuk semua kebutuhan layanan kesehatan",
    color: "#F59E0B",
  },
  {
    title: "Gouango",
    category: "E-commerce",
    description: "Toko online modern dengan pengalaman pembayaran yang lancar dan manajemen inventaris.",
    color: "#10B981",
  },
  {
    title: "GOH",
    category: "Lua",
    description: "Pusat roblox script yang susah dideteksi",
    color: "#6366F1",
  },
  {
    title: "---",
    category: "---",
    description: "---",
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
