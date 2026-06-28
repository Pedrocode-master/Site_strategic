import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Código limpo e moderno" },
  { icon: Rocket, label: "Entrega rápida e eficiente" },
  { icon: Users, label: "Foco total no cliente" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">01. Sobre mim</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Quem está por trás do código
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou Pedro Lopes, desenvolvedor full stack especializado em
                transformar problemas reais de negócio em software que funciona.
                Já construí desde landing pages de alta conversão até sistemas
                completos com autenticação, banco de dados e painel de gestão.
              </p>
              <p>
                Trabalho com pequenas e médias empresas que precisam de
                tecnologia séria sem pagar preço de agência grande. Cada
                projeto começa pelo <span className="text-foreground font-medium">problema do cliente</span>,
                não pela tecnologia.
              </p>
              <p>
                Atendo 100% remoto, com comunicação direta — você fala comigo,
                não com um intermediário.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-4 rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}

              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
