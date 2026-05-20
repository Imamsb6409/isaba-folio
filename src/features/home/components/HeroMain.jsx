import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IconArrowRight,
  IconChevronDown,
  IconCode,
  IconTerminal,
  IconBrandReact,
  IconCpu,
} from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import imamFoto from "/imam-profile.jpg";

export default function HeroMain() {
  useGSAP(() => {
    gsap.from(".reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  });

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
      {/* Animated Horizon Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-mesh-flow opacity-40 blur-[120px] pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, #38bdf8 0%, #e0f2fe 40%, #fbf9f4 80%)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-dark/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Grid Utama: Otomatis 1 kolom di HP, 3 kolom mulai ukuran layar Medium (md) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center">
        
        {/* --- SISI KIRI: CORE EXPERTISE --- */}
        {/* order-2 membuat section ini turun ke bawah foto saat di HP, tapi kembali ke kiri (order-1) di desktop */}
        <div className="reveal order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="space-y-2 w-full max-w-sm md:max-w-none">
            <span className="text-mint font-mono text-xs uppercase tracking-widest block">
              01 / Focus
            </span>
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 justify-center md:justify-start">
              <IconBrandReact className="text-mint animate-pulse" size={20} />{" "}
              Fullstack Dev
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Membangun aplikasi web ujung-ke-ujung (end-to-end) yang responsif
              dan skalabel.
            </p>
          </div>

          <div className="space-y-2 w-full max-w-sm md:max-w-none">
            <span className="text-mint font-mono text-xs uppercase tracking-widest block">
              02 / Style
            </span>
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 justify-center md:justify-start">
              <IconCpu className="text-mint" size={20} /> Creative Motion
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Menggabungkan interaksi dinamis GSAP agar UI terasa hidup dan
              interaktif.
            </p>
          </div>
        </div>

        {/* --- SISI TENGAH: PROFILE & BRANDING --- */}
        {/* order-1 menjamin profil kamu nampil paling atas saat dibuka lewat browser HP */}
        <div className="reveal order-1 md:order-2 flex flex-col items-center text-center">
          {/* Foto Profile dengan Frame Horizon */}
          <div className="relative mb-6">
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-mint/30 p-1.5 bg-dark/60 backdrop-blur-md shadow-2xl">
              <img
                src={imamFoto}
                alt="Imam Sandy Bachtiar"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-mint/20 blur-2xl -z-10 rounded-full"></div>
          </div>

          {/* Nama & Status */}
          <span className="text-muted font-mono text-xs tracking-[0.2em] uppercase mb-3 block">
            Imam Sandy Bachtiar
          </span>

          {/* Ukuran font responsif dari text-3xl sampai text-5xl */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-6 tracking-tight">
            BUILDING FAST, <br />
            <span className="text-mint italic drop-shadow-[0_0_15px_rgba(2,132,199,0.1)]">
              INTERACTIVE
            </span>{" "}
            WEBSITES.
          </h1>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="mb-8 px-4 py-1 border border-mint/30 rounded-full bg-mint/5 text-mint text-[10px] font-mono tracking-widest uppercase"
          >
            Open to work opportunities & collaborations
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-row justify-center gap-3 w-full">
            <Link
              to="/projects"
              className="px-5 py-3 bg-mint text-white font-mono text-xs rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-mint/10"
            >
              Projects <IconArrowRight size={14} />
            </Link>
            <a
              href="#mini-about"
              className="px-5 py-3 bg-surface/30 border border-surface text-xs font-mono rounded-xl font-bold hover:bg-surface/60 transition-colors"
            >
              Story
            </a>
          </div>
        </div>

        {/* --- SISI KANAN: CODE EMBLEM & MOTO --- */}
        <div className="reveal order-3 flex flex-col items-center md:items-end text-center md:text-right space-y-6 md:space-y-8">
          {/* Kotak Lambang Kode Minimalis */}
          <div className="p-6 bg-surface/20 border border-surface/40 rounded-3xl max-w-xs relative group overflow-hidden backdrop-blur-sm text-left md:text-right">
            <div className="absolute -right-6 -bottom-6 text-mint/5 opacity-10 group-hover:opacity-20 transition-opacity">
              <IconCode size={120} />
            </div>
            <IconTerminal
              className="text-mint mb-3 mx-auto md:ml-auto md:mr-0"
              size={24}
            />
            <p className="font-mono text-xs mb-2 text-mint">&lt;santri_logic&gt;</p>
            <p className="text-muted text-xs leading-relaxed">
              "Mencari berkah lewat baris kode. Membangun sistem yang
              bermanfa'at, rapi, dan cepat biar nggak bikin user emosi."
            </p>
          </div>

          {/* Statistik Ringkas */}
          <div className="font-mono text-[11px] text-muted space-y-1 w-full text-center md:text-right">
            <p>
              Loc: <span className="text-current font-bold">Tangerang Selatan, ID</span>
            </p>
            <p>
              Stack: <span className="text-current font-bold">React / JavaScript / Tailwindcss</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 animate-bounce text-mint/40 z-10">
        <IconChevronDown size={20} />
      </div>
    </section>
  );
}