import { IconDeviceLaptop, IconCircleDot } from "@tabler/icons-react";

export default function LearningJourney() {
  const journeys = [
    {
      year: "2021",
      title: "The Beginning",
      desc: "Langkah pertama mengenal dunia pemrograman lewat HTML, CSS, dan JavaScript dasar.",
    },
    {
      year: "2022",
      title: "Fullstack Exploration",
      desc: "Mulai membangun aplikasi dinamis pertama menggunakan ekosistem MERN Stack.",
    },
    {
      year: "2023",
      title: "Creative Development",
      desc: "Belajar GSAP dan Framer Motion untuk interaksi animasi web tingkat lanjut.",
    },
    {
      year: "2024 - Now",
      title: "Advanced React & Node.js",
      desc: "Mendalami arsitektur microservices, optimalisasi database, dan serverless function.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-mint/5 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <IconDeviceLaptop size={48} className="mx-auto mb-4 text-mint" />
          <h2 className="text-3xl font-bold tracking-tight">
            Learning & Experience
          </h2>
          <p className="text-muted text-sm mt-2 font-mono">
            Evolusi skill dari tahun ke tahun
          </p>
        </div>

        {/* Timeline Container */}
        {/* Di HP: flex-col (ke bawah) | Di Desktop: md:flex-row (horizontal menyamping) */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative isolate">
          {/* Garis Penghubung (Hanya muncul di desktop) */}
          <div className="hidden md:block absolute top-[37px] left-4 right-4 h-[2px] bg-surface -z-10" />

          {journeys.map((item, i) => (
            <div
              key={i}
              className="flex-1 relative pl-8 md:pl-0 md:text-center group"
            >
              {/* Garis vertikal pengganti untuk tampilan HP */}
              <div className="md:hidden absolute left-[7px] top-4 bottom-[-32px] w-[2px] bg-surface last:hidden" />

              {/* Node / Titik Timeline */}
              <div className="absolute left-0 md:relative md:left-auto top-1 md:top-auto md:mx-auto mb-4 z-10 flex items-center justify-center">
                <div className="w-4 h-4 bg-dark border-2 border-mint rounded-full transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(2,132,199,0.4)]" />
              </div>

              {/* Konten Teks */}
              <div className="md:mt-4">
                <span className="text-xs font-mono font-bold text-mint bg-mint/10 md:bg-transparent px-2 py-0.5 md:p-0 rounded-md">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold mt-2 text-balance">
                  {item.title}
                </h4>
                <p className="text-muted text-sm mt-2 leading-relaxed max-w-sm md:mx-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
