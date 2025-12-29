import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orb - slow parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ y: y1, rotate: rotate1, scale: scale1 }}
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl"
        />
        
        {/* Secondary floating orb - faster parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{ y: y2, rotate: rotate2, scale: scale2 }}
          className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl"
        />
        
        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          style={{ y: y3 }}
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-2xl"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          style={{ y: y2, scale: scale1 }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl"
        />
        
        {/* Geometric accent lines */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ y: y1 }}
          className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ y: y3 }}
          className="absolute top-2/3 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-primary to-transparent"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-6"
        >
          Creative Developer & Designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8"
        >
          Gouangs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Crafting digital experiences that blend aesthetics with functionality.
          Based in San Francisco, working worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            onClick={() => {
              const element = document.getElementById("work");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            strength={0.4}
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            strength={0.4}
          >
            Let's Talk
          </MagneticButton>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
