import { Link } from "react-router-dom";
import { IconArrowRight, IconCode, IconRocket } from "@tabler/icons-react";

export default function MiniAbout() {
  return (
    <section id="mini-about" className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-xs font-mono text-mint uppercase tracking-[0.3em] mb-4">Brief Intro</h2>
          <h3 className="text-4xl font-bold mb-6">Membangun bukan sekadar coding, tapi bercerita.</h3>
          <p className="text-muted leading-relaxed mb-6">
            Halo! Saya <strong>Imam Sandy Bachtiar</strong>. Perjalanan belajar saya dimulai dari rasa penasaran bagaimana sebuah website bisa terasa "hidup". Sekarang, saya fokus pada React ecosystem dan optimasi animasi menggunakan GSAP.
          </p>
          <Link to="/about" className="text-mint flex items-center gap-2 font-bold hover:gap-4 transition-all">
            Learn more about my journey <IconArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 bg-surface border border-white/5 rounded-[2rem]">
            <IconCode className="text-mint mb-4" size={32} />
            <h4 className="font-bold mb-2 ">Clean Code</h4>
            <p className="text-xs text-muted">Struktur kode yang rapi dan mudah di-maintenance.</p>
          </div>
          <div className="p-8 bg-surface border border-white/5 rounded-[2rem] mt-8">
            <IconRocket className="text-mint mb-4" size={32} />
            <h4 className="font-bold mb-2 ">Fast Load</h4>
            <p className="text-xs text-muted">Optimasi performa adalah prioritas utama saya.</p>
          </div>
        </div>
      </div>
    </section>
  );
}