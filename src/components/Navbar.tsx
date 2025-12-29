import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-heading text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          JD
        </button>
        <div className="hidden md:flex items-center gap-10">
          {["About", "Work", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
        <a
          href="mailto:hello@example.com"
          className="hidden md:block px-5 py-2.5 text-sm font-medium border border-primary/30 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
