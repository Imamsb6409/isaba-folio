import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMapPin,
  IconCpu,
  IconCode,
  IconMusic,
  IconCoffee,
  IconDeviceLaptop,
  IconExternalLink,
} from "@tabler/icons-react";

const Card = ({ children, className = "", title = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-surface/40 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group ${className}`}
  >
    {title && (
      <h4 className="text-mint/50 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
        {title}
      </h4>
    )}
    {children}
  </motion.div>
);

export default function BentoGrid() {
  const tech = [
    "React",
    "Next.js",
    "GSAP",
    "Tailwind v4",
    "Redux",
    "Node.js",
    
    "Framer Motion",
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Halaman */}
      <div className="mb-12">
        <h2 className="text-xs font-mono text-mint uppercase tracking-[0.5em] mb-4">
          Inside the Mind
        </h2>
        <h3 className="text-5xl md:text-7xl font-display font-bold">
          About <span className="italic opacity-50 text-mint">Me.</span>
        </h3>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 auto-rows-fr">
        {/* BIG INTRO CARD */}
        <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-end min-h-[400px] bg-gradient-to-br from-surface to-dark">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Imam Sandy Bachtiar. <br />
              <span className="text-mint/80 font-normal text-2xl">
                Building digital logic with creative flair.
              </span>
            </h2>
            <p className="text-muted text-sm leading-relaxed max-w-md">
              Seorang developer yang berbasis di Tangerang Selatan. Saya percaya
              bahwa kode yang baik adalah kode yang tidak hanya jalan, tapi juga
              memiliki estetika dan performa yang tak tertandingi.
            </p>
          </div>
          <IconCode
            size={180}
            className="absolute -right-10 -top-10  rotate-12 text-mint/10"
          />
        </Card>

        {/* TECH STACK */}
        <Card title="Tech Stack" className="md:col-span-2 md:row-span-1">
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-dark/40 border border-white/5 rounded-xl text-xs font-mono text-mint/90 hover:bg-mint hover:text-dark transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </Card>

        {/* LOCATION */}
        <Card className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-mint/10 rounded-2xl text-mint mb-4">
            <IconMapPin size={32} />
          </div>
          <p className="font-bold">Tangsel, ID</p>
          <p className="text-xs text-muted">GMT+7</p>
        </Card>

        {/* SOCIALS - Grid 2x2 */}
        <Card className="md:col-span-1 md:row-span-1 grid grid-cols-2 grid-rows-2 gap-2">
          {/* Github */}
          <a
            href="https://github.com/imamsb6409"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-dark/40 rounded-2xl hover:bg-mint hover:text-dark transition-all border border-white/5 group"
          >
            <IconBrandGithub
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </a>

          {/* Linkedin */}
          <a
            href="https://linkedin.com/in/imam-sandy-bachtiar-1351b8385/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-dark/40 rounded-2xl hover:bg-mint hover:text-dark transition-all border border-white/5 group"
          >
            <IconBrandLinkedin
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/imamsb6409"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-dark/40 rounded-2xl hover:bg-mint hover:text-dark transition-all border border-white/5 group"
          >
            <IconBrandInstagram
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6287747394647"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-dark/40 rounded-2xl hover:bg-mint hover:text-dark transition-all border border-white/5 group"
          >
            <IconBrandWhatsapp
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
        </Card>

        {/* PASSION / HOBBY SECTION */}
        <Card
          title="Beyond Coding"
          className="md:col-span-2 md:row-span-1 flex flex-row items-center gap-8"
        >
          <div className="flex gap-4">
            <div className="p-4 bg-surface rounded-full text-mint">
              <IconCoffee size={24} />
            </div>
            <div className="p-4 bg-surface rounded-full text-mint">
              <IconMusic size={24} />
            </div>
          </div>
          <p className="text-sm text-muted">
            Susu pagi, baca qur'an, dan eksplorasi ilmu-ilmu baru adalah
            bahan bakar utamaku setiap hari.
          </p>
        </Card>

        {/* CURRENTLY LEARNING */}
        <Card
          title="Learning"
          className="md:col-span-1 md:row-span-2 bg-mint/5 border-mint/20"
        >
          <div className="flex flex-col h-full">
            <IconCpu size={48} className="text-mint mb-4" />
            <p className="text-xl font-bold mb-2">React & Git</p>
            <p className="text-xs text-muted leading-loose">
              Saat ini sedang memperdalam pelajaran tentang react dan kolaborasi tim menggunakan git & github.
            </p>
          </div>
        </Card>

        {/* EXPERIENCE SHORTCUT */}
        <Card title="Experience" className="md:col-span-1 md:row-span-2">
          <div className="space-y-6">
            {[
              { role: "Fullstack", year: "2024" },
              { role: "Frontend", year: "2023" },
            ].map((exp, i) => (
              <div key={i} className="border-b border-white/5 pb-4">
                <p className="text-[10px] font-mono text-mint">{exp.year}</p>
                <p className="font-bold">{exp.role}</p>
              </div>
            ))}
            <div className="flex items-center gap-2 text-xs text-mint cursor-pointer hover:underline">
              View CV <IconExternalLink size={14} />
            </div>
          </div>
        </Card>

        {/* MOTO */}
        <Card className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-mint/20 to-transparent flex items-center">
          <IconDeviceLaptop size={40} className="mr-6 opacity-50" />
          <p className="text-xl md:text-2xl font-display italic">
            "Turning complex problems into simple, beautiful digital solutions."
          </p>
        </Card>
      </div>
    </section>
  );
}
