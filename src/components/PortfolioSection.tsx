import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard.tsx";
import imgChevrolet from '../assets/Imagem chevrolet.png'; // Ajuste os pontos ".." conforme a estrutura de pastas

const projects = [
  {
    title: "Café & Sabor",
    category: "Site Institucional",
    desc: "Site completo para cafeteria com cardápio digital, localização e reservas online. Design focado em conversão e experiência mobile.",
    techs: ["React", "Tailwind CSS", "Node.js"],
    color: "from-amber-500/20 to-orange-500/20",
    link: "https://coffee-store-murex.vercel.app/",
    image: "https://coffee-store-murex.vercel.app/assets/hero-coffee-Dg4T07_u.jpg"
  },
  {
    title: "LogOpti",
    category: "Sistema Web",
    desc: "Sistema de otimização logística com gerenciamento de rotas em tempo real, análise de desempenho e dashboard de indicadores.",
    techs: ["React", "Vite", "Node.js", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
    link: "https://pedrocode-master-logistic-app-1.vercel.app/",
    image: "https://pedrocode-master-logistic-app-1.vercel.app/assets/logopti-logo-transparent-Cw1xX6dY.png"
  },
  {
    title: "SmartRout AI",
    category: "Sistema GPS + Backend",
    desc: "Sistema completo de rastreamento GPS com visualização de rotas em mapa, integração com OpenRouteService e API REST em Flask.",
    techs: ["Python", "Flask", "OpenLayers", "PostgreSQL"],
    color: "from-violet-500/20 to-purple-500/20",
    link: "https://github.com/Pedrocode-master/SmartRout-AI",
    image: "https://github.com/Pedrocode-master/SmartRout-AI/blob/main/assets/smartrout-logo.png?raw=true"
  },
  {
    title: "Logistica reversa Grupo Automec Chevrolet",
    category: "Sistema de gestão de Logistica Reversa Chevrolet",
    desc: "Plataforma desenvolvida para otimizar o processo de logística reversa do Grupo Automec Chevrolet.",
    techs: ["Python", "React", "Flask", "PostgreSQL"],
    color: "from-teal-500/20 to-green-500/20",
    link: "https://automec-frontend.onrender.com",
    image: imgChevrolet
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


//estou fazenod um comentário apra ver se recupero o controle do pc