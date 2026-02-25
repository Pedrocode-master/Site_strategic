const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-mono text-primary">&lt;Dev /&gt;</span>
        <span>© {new Date().getFullYear()} — Todos os direitos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
