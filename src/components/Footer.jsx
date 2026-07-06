// import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 text-white">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <a href="#" className="text-white text-2xl font-black cursor-pointer">
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
