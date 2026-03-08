import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard.tsx";

const projects = [
  {
    title: "Café & Sabor",
    category: "Site Institucional",
    desc: "Site completo para cafeteria com cardápio digital, localização e reservas online.",
    techs: ["React", "Tailwind CSS", "Node.js"],
    color: "from-amber-500/20 to-orange-500/20",
    link: "https://coffee-store-murex.vercel.app/",
  },
  {
    title: "LogOpti",
    category: "Sistema web",
    desc: "Sistema web para otimização de logística com gerenciamento de rotas e análise de desempenho.",
    techs: ["React", "Vite", "Node.js", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://pedrocode-master-logistic-app-1.vercel.app/",
  },
  {
    title: "FitControl",
    category: "Sistema Web",
    desc: "Sistema de controle de alunos para academia com dashboard de frequência e pagamentos.",
    techs: ["React", "PostgreSQL", "Node.js"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Bella Estética",
    category: "Site + Agendamento",
    desc: "Site para estúdio de estética com galeria de trabalhos e sistema de agendamento integrado.",
    techs: ["React", "Tailwind CSS", "Supabase"],
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">03. Portfólio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Alguns dos projetos que desenvolvi para clientes e estudos pessoais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;