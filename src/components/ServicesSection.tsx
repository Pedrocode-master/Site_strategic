import { motion } from "framer-motion";
import { Globe, Layout, Settings, Zap, Wrench, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    desc: "Sites profissionais que transmitem credibilidade e ajudam seu negócio a ser encontrado online.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    desc: "Páginas focadas em conversão, ideais para campanhas de marketing e captação de leads.",
  },
  {
    icon: Settings,
    title: "Sistemas Simples",
    desc: "Sistemas web sob medida para organizar processos e facilitar o dia a dia do seu negócio.",
  },
  {
    icon: Zap,
    title: "Automação Básica",
    desc: "Automatize tarefas repetitivas e ganhe tempo para focar no que realmente importa.",
  },
  {
    icon: Wrench,
    title: "Manutenção de Sites",
    desc: "Atualizações, correções e melhorias contínuas para manter seu site sempre funcionando.",
  },
  {
    icon: MonitorSmartphone,
    title: "Design Responsivo",
    desc: "Seu site perfeito em qualquer dispositivo — computador, tablet ou celular.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">02. Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que posso fazer por você
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções digitais pensadas para quem quer começar ou melhorar sua presença online.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
