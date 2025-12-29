import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
  glareEnabled?: boolean;
}

const TiltCard = ({
  children,
  className = "",
  tiltStrength = 15,
  glareEnabled = true,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [0, 1], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(springX, [0, 1], [-tiltStrength, tiltStrength]);

  // Glare effect position
  const glareX = useTransform(springX, [0, 1], [0, 100]);
  const glareY = useTransform(springY, [0, 1], [0, 100]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width;
    const normalizedY = (e.clientY - rect.top) / rect.height;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
