import { 
  IconFileText, 
  IconFlame, 
  IconCode, 
  IconAward, 
  IconUsers, 
  IconTrendingUp 
} from "@tabler/icons-react";

export default function Achievements() {
  // ARRAY DATA UTAMA (Tinggal kamu edit/tambahin sesuka hati di sini)
  const stats = [
    {
      icon: <IconFileText className="text-mint" size={24} />,
      badge: "Organisasi",
      title: "Sekretaris Umum",
      desc: "Dipercaya mengelola administrasi, arsip, dan manajemen internal organisasi untuk periode tahun ajaran ini.",
    },
    {
      icon: <IconFlame className="text-mint" size={24} />,
      badge: "Event / Acara",
      title: "Panitia Munfest 2026",
      desc: "Berkontribusi aktif dalam menyukseskan jalannya acara akbar Munfest tahun ini, mulai dari konseptual hingga eksekusi.",
    },
    {
      icon: <IconCode className="text-mint" size={24} />,
      badge: "Tech Stack",
      title: "10+ Project Deployed",
      desc: "Berhasil merilis berbagai aplikasi web statis maupun dinamis berbasis React dan Tailwind CSS dalam setahun terakhir.",
    },
    {
      icon: <IconAward className="text-mint" size={24} />,
      badge: "Edukasi",
      title: "Sertifikasi Web Dev",
      desc: "Menuntaskan kelas intensif dan meraih sertifikasi kompetensi di bidang modern frontend development.",
    },
    {
      icon: <IconUsers className="text-mint" size={24} />,
      badge: "Kolaborasi",
      title: "Team Leader Project",
      desc: "Memimpin tim kecil dalam merancang solusi digital untuk kebutuhan UMKM/klien lokal.",
    },
    {
      icon: <IconTrendingUp className="text-mint" size={24} />,
      badge: "Karakter",
      title: "Self-Discipline",
      desc: "Konsisten membagi waktu antara jadwal mengaji/belajar pondok dengan eksplorasi teknologi baru.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-mint font-mono text-xs uppercase tracking-widest block mb-2">
          Milestones
        </span>
        <h2 className="text-3xl font-bold tracking-tight">Recent Achievements</h2>
        <p className="text-muted text-sm mt-1 max-w-xl mx-auto text-balance">
          Ringkasan keaktifan, peran kepemimpinan, dan pencapaian yang saya raih selama satu tahun terakhir.
        </p>
      </div>

      {/* Grid Sistem Responsif */}
      {/* Di HP: 1 kolom | Di Tablet: 2 kolom | Di Desktop: 3 kolom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="p-6 bg-surface/10 border border-surface/30 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left group hover:bg-surface/20 hover:border-mint/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Bagian Atas: Ikon & Kategori Badge */}
            <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-mint/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-mint/10 text-mint rounded-md">
                {stat.badge}
              </span>
            </div>

            {/* Judul Pencapaian */}
            <h3 className="text-xl font-bold mb-2 text-black">
              {stat.title}
            </h3>

            {/* Deskripsi */}
            <p className="text-muted text-xs leading-relaxed">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}