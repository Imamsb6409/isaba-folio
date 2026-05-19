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
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-12 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center">
        {/* --- SISI KIRI: CORE EXPERTISE --- */}
        <div className="reveal order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="space-y-2">
            <span className="text-mint/60 font-mono text-xs uppercase tracking-widest block">
              01 / Focus
            </span>
            <h3 className="text-xl font-bold  flex items-center gap-2 justify-center md:justify-start">
              <IconBrandReact className="text-mint animate-pulse" size={20} />{" "}
              Fullstack Dev
            </h3>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Membangun aplikasi web ujung-ke-ujung (end-to-end) yang responsif
              dan skalabel.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-mint/60 font-mono text-xs uppercase tracking-widest block">
              02 / Style
            </span>
            <h3 className="text-xl font-bold  flex items-center gap-2 justify-center md:justify-start">
              <IconCpu className="text-mint" size={20} /> Creative Motion
            </h3>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Menggabungkan interaksi dinamis GSAP agar UI terasa hidup dan
              interaktif.
            </p>
          </div>
        </div>

        {/* --- SISI TENGAH: PROFILE & BRANDING --- */}
        <div className="reveal order-1 md:order-2 flex flex-col items-center text-center">
          {/* Foto Profile dengan Frame Horizon */}
          <div className="relative mb-6">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-mint/30 p-1.5 bg-dark/60 backdrop-blur-md shadow-2xl">
              <img
                src={imamFoto} // GANTI DENGAN FOTO KAMU
                alt="Imam Sandy Bachtiar"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Soft Glow di belakang foto */}
            <div className="absolute inset-0 bg-mint/20 blur-2xl -z-10 rounded-full"></div>
          </div>

          {/* Nama & Status */}
          <span className="text-muted font-mono text-xs tracking-[0.2em] uppercase mb-2">
            Imam Sandy Bachtiar
          </span>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-black leading-tight mb-6">
            CRAFTING <br />
            <span className=" italic drop-shadow-[0_0_15px_rgba(176,228,204,0.3)]">
              DIGITAL
            </span>{" "}
            SOUL
          </h1>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="mb-8 px-4 py-1 border border-mint/30 rounded-full bg-mint/5 text-mint text-[10px] font-mono tracking-widest uppercase"
          >
            Open for Collaboration
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/projects"
              className="px-6 py-3 bg-mint text-dark rounded-xl text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-mint/10"
            >
              Projects <IconArrowRight size={16} />
            </Link>
            <a
              href="#mini-about"
              className="px-6 py-3 bg-surface/50 border border-white/5 backdrop-blur-md rounded-xl text-sm font-bold hover:bg-white/10 transition-colors"
            >
              Story
            </a>
          </div>
        </div>

        {/* --- SISI KANAN: CODE EMBLEM & MOTO --- */}
        <div className="reveal order-3 flex flex-col items-center md:items-end text-center md:text-right space-y-8">
          {/* Kotak Lambang Kode Minimalis */}
          <div className="p-6 bg-surface/20 border border-white/5 rounded-3xl max-w-xs relative group overflow-hidden backdrop-blur-sm">
            <div className="absolute -right-6 -bottom-6 text-mint/5 opacity-10 group-hover:opacity-20 transition-opacity">
              <IconCode size={120} />
            </div>
            <IconTerminal
              className="text-mint mb-3 mx-auto md:ml-auto md:mr-0"
              size={28}
            />
            <p className="font-mono text-xs  mb-2">&lt;code_philosophy&gt;</p>
            <p className="text-muted text-xs leading-relaxed">
              "Ubah problem kompleks menjadi solusi digital yang simpel, bersih,
              dan berestetika tinggi."
            </p>
          </div>

          {/* Statistik Ringkas atau Status Tambahan */}
          <div className="font-mono text-xs text-muted space-y-1">
            <p>
              Loc: <span className="">Tangerang Selatan, ID</span>
            </p>
            <p>
              Stack: <span className="">React / Node / GSAP</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce text-mint/40 z-10">
        <IconChevronDown size={20} />
      </div>
    </section>
  );
}
