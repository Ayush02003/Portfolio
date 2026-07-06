const Footer = () => {
  return (
    <footer className="mt-12 bg-[#0b1220]/60 shadow-[0_-10px_40px_rgba(59,130,246,0.15)] text-white">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        
        <a
          href="#hero"
          className="text-white text-2xl font-black cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <span className="text-primary">&lt;</span>
          Ayush
          <span className="text-primary"> /&gt;</span>
        </a>

        <p className="text-sm text-slate-500">
          © 2026 Ayush Patel. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;