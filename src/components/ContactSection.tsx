import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-4">
                Get in Touch
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
                Let's work together
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground font-body leading-relaxed mb-12">
                Have a project in mind? I'd love to hear about it. Drop me a
                message and let's create something amazing together.
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={0.3}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Email</p>
                    <a
                      href="mailto:naufalwavi@ymail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      naufalwavi@ymail.com
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Location</p>
                    <p className="text-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-secondary border ${
                    errors.name ? "border-destructive" : "border-border"
                  } rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-destructive">{errors.name}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-secondary border ${
                    errors.email ? "border-destructive" : "border-border"
                  } rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-destructive">{errors.email}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-5 py-4 bg-secondary border ${
                    errors.message ? "border-destructive" : "border-border"
                  } rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-destructive">{errors.message}</p>
                )}
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:shadow-[var(--shadow-glow)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
