import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  "React & TypeScript",
  "UI/UX Design",
  "Node.js",
  "Figma",
  "Tailwind CSS",
  "Motion Design",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-4">
                About Me
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
                Designing with purpose,{" "}
                <span className="text-gradient">developing with passion</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                <p>
                  I'm a creative developer with over 8 years of experience building
                  digital products that make an impact. My approach combines
                  strategic thinking with meticulous craftsmanship.
                </p>
                <p>
                  Previously, I've worked with startups and Fortune 500 companies
                  alike, helping them transform their ideas into compelling digital
                  experiences that users love.
                </p>
                <p>
                  When I'm not coding or pushing pixels, you'll find me exploring
                  new coffee shops, practicing photography, or contributing to
                  open-source projects.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <div
                  className="aspect-square rounded-2xl overflow-hidden"
                  style={{ background: "var(--gradient-card)" }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-heading text-4xl text-primary">
                          JD
                        </span>
                      </div>
                      <p className="text-muted-foreground font-body text-sm">
                        Available for projects
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 p-6 bg-background rounded-xl border border-border shadow-[var(--shadow-card)]"
                >
                  <p className="font-heading text-3xl text-primary mb-1">8+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </motion.div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-16">
                <p className="text-sm text-muted-foreground mb-4 font-body">
                  Technologies I work with
                </p>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full font-body"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
