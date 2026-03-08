import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  desc: string;
  techs: string[];
  color: string;
  link?: string;
  image?: string; 
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
    >
      <a
        href={project.link ?? "#"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className="block relative"
      >
        {/* Imagem ou gradiente */}
        <div className={`h-40 flex items-center justify-center overflow-hidden rounded-t-xl`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <span className="font-mono text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                <ExternalLink size={16} />
                {project.link ? "Ver projeto" : "Em breve"}
              </span>
            </div>
          )}
        </div>

        {/* Hover overlay */}
        {project.link && (
          <span className="absolute inset-0 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
            <ExternalLink size={16} className="mr-1" />
            Ver projeto
          </span>
        )}
      </a>

      <div className="p-6">
        <p className="font-mono text-xs text-primary mb-1">{project.category}</p>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}