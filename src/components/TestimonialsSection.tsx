import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Dono — Café & Sabor",
    text: "Precisava de um site profissional rápido e com orçamento limitado. O Pedro entregou em menos de duas semanas, com design que minha equipe adorou. Já recebi elogios de vários clientes.",
    stars: 5,
  },
  {
    name: "Rodrigo T.",
    role: "Gestor de Operações — LogOpti",
    text: "O sistema ficou exatamente como imaginávamos, mas melhor. A comunicação foi direta durante todo o projeto e ele sugeriu melhorias que não tínhamos pensado. Recomendo sem hesitar.",
    stars: 5,
  },
  {
    name: "Ana Paula S.",
    role: "Empreendedora",
    text: "Tentei duas agências antes do Pedro. Ele entendeu o que eu precisava na primeira conversa, foi transparente sobre prazos e entregou um sistema que realmente usa no dia a dia.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">05. Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Resultados reais de quem confiou no trabalho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col gap-4 rounded-xl border border-border p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star key={idx} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="pt-2 border-t border-border">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
