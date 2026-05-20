import { Link } from "react-router-dom";
import { IconArrowUpRight, IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export default function FooterCTA() {
  return (
    <section className="py-24 px-6 bg-dark relative overflow-hidden">
      {/* Dekorasi Gradient Halus di Sudut Atas */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-mint/5 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-mint font-mono text-xs uppercase tracking-widest block mb-4">
          Have a project in mind?
        </span>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8 leading-tight">
          Let’s build something <br />
          <span className="text-mint italic">extraordinary</span> together.
        </h2>

        {/* Big Contact Button */}
        <div className="mb-16">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-8 py-5 bg-mint text-white font-bold rounded-2xl text-lg hover:scale-105 hover:bg-mint/90 shadow-xl shadow-mint/10 transition-all group"
          >
            Get In Touch 
            <IconArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Sosmed & Kontak Tambahan Mini */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-muted border-t border-surface/40 pt-8">
          <a href="mailto:dsandalpha@gmail.com" className="flex items-center gap-2 hover:text-mint transition-colors">
            <IconMail size={16} /> dsandalpha@gmail.com
          </a>
          <a href="https://linkedin.com/in/imam-sandy-bachtiar-1351b8385/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-mint transition-colors">
            <IconBrandLinkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com/Imamsb6409" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-mint transition-colors">
            <IconBrandGithub size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}