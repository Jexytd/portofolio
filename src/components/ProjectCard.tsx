import { ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  color: string;
  index: number;
}

const ProjectCard = ({
  title,
  category,
  description,
  color,
  index,
}: ProjectCardProps) => {
  return (
    <TiltCard
      className="cursor-pointer"
      tiltStrength={12}
      glareEnabled={true}
    >
      <article
        className="group relative rounded-2xl overflow-hidden"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div
          className="aspect-[4/3] w-full"
          style={{
            background: `linear-gradient(145deg, ${color}15 0%, ${color}05 100%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <div className="p-8 w-full">
            <p className="text-primary text-sm font-body uppercase tracking-wider mb-2">
              {category}
            </p>
            <h3 className="font-heading text-2xl text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground font-body text-sm mb-4">
              {description}
            </p>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-body group-hover:gap-3 transition-all">
              View Project <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </article>
    </TiltCard>
  );
};

export default ProjectCard;
