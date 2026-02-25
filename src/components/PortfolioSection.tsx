import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Café & Sabor",
    category: "Site Institucional",
    desc: "Site completo para cafeteria com cardápio digital, localização e reservas online.",
    techs: ["React", "Tailwind CSS", "Node.js"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Dr. Silva - Consultório",
    category: "Landing Page",
    desc: "Landing page para consultório médico com agendamento via WhatsApp e informações de serviços.",
    techs: ["Next.js", "TypeScript"],
    color: "from-blue-500/20 to-cyan-500/20",
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
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* Gradient header */}
              <div
                className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}
              >
                <span className="font-mono text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <ExternalLink size={16} /> Ver projeto
                </span>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs text-primary mb-1">
                  {p.category}
                </p>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.techs.map((t) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
