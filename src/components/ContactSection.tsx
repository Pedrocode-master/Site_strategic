import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">04. Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            Tem um projeto em mente ou quer saber mais sobre meus serviços?
            Entre em contato — respondo rápido!
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border">
              <MessageCircle className="text-primary" size={28} />
              <span className="font-medium text-sm">WhatsApp</span>
              <span className="text-xs text-muted-foreground">+55 (15) 93618-5797</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border">
              <Mail className="text-primary" size={28} />
              <span className="font-medium text-sm">E-mail</span>
              <span className="text-xs text-muted-foreground">pedrolopes.pl63@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border">
              <MapPin className="text-primary" size={28} />
              <span className="font-medium text-sm">Localização</span>
              <span className="text-xs text-muted-foreground">Brasil — Remoto</span>
            </div>
          </div>

          <a
            href="https://wa.me/5515936185797?text=Olá! Gostaria de saber mais sobre seus serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-shadow"
          >
            <MessageCircle size={22} />
            Fale comigo no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
