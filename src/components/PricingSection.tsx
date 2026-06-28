import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "R$ 800",
    desc: "Ideal para campanhas, lançamentos e captação de leads.",
    features: [
      "Design responsivo (mobile + desktop)",
      "Seções: hero, benefícios, CTA, contato",
      "Formulário de contato ou link WhatsApp",
      "Otimização básica de velocidade",
      "Entrega em até 7 dias",
    ],
    highlight: false,
  },
  {
    name: "Site Completo",
    price: "R$ 1.800",
    desc: "Presença online profissional para empresas e autônomos.",
    features: [
      "Tudo do plano Landing Page",
      "Múltiplas páginas (até 5)",
      "Portfólio ou galeria de produtos",
      "Integração com Google Maps e redes sociais",
      "Domínio + hospedagem por 1 ano incluso",
      "Entrega em até 14 dias",
    ],
    highlight: true,
  },
  {
    name: "Sistema Web",
    price: "R$ 3.500",
    desc: "Para quem precisa automatizar processos e gerenciar dados.",
    features: [
      "Tudo do plano Site Completo",
      "Cadastro, login e controle de acesso",
      "Banco de dados e painel de gestão",
      "Relatórios e exportação de dados",
      "API REST integrada ao sistema",
      "Suporte por 30 dias após entrega",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">04. Investimento</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preços transparentes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Valores a partir de — projetos complexos têm orçamento personalizado.
            Sem surpresas no meio do caminho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-xl border p-6 flex flex-col gap-5 transition-all ${
                plan.highlight
                  ? "border-primary shadow-lg shadow-primary/10 bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Mais popular
                </span>
              )}

              <div>
                <p className="font-semibold text-lg">{plan.name}</p>
                <p className="text-3xl font-bold mt-1">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    a partir de
                  </span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">{plan.desc}</p>
              </div>

              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={15} className="text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5515936185797?text=Olá! Tenho interesse no plano ${plan.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-opacity ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90 glow-shadow"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                <MessageCircle size={16} />
                Solicitar orçamento
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Precisa de algo diferente? Me mande uma mensagem — faço orçamento personalizado sem compromisso.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
