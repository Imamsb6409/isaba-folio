import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { setFilter } from '../../store/projectSlice'; 
import { IconExternalLink, IconBrandGithub, IconFolder } from '@tabler/icons-react';

export default function ProjectGallery() {
  const { activeFilter, projects } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  const categories = ['All', 'Web', 'Mobile', 'Design'];

  // TEMPLATE DATA BANYAK (Jika data di Redux masih kosong, komponen tidak akan sepi)
  const fallbackProjects = [
    { id: 1, title: "E-Commerce System", category: "Web", image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80", tags: ["React", "Node.js", "MongoDB"], github: "#", demo: "#" },
    { id: 2, title: "Islamic Mobile App", category: "Mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80", tags: ["React Native", "Expo"], github: "#", demo: "#" },
    { id: 3, title: "Munfest Event Dashboard", category: "Web", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80", tags: ["Vite", "TailwindCSS", "GSAP"], github: "#", demo: "#" },
    { id: 4, title: "Portofolio Minimalist Beige", category: "Design", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80", tags: ["Figma", "UI/UX"], github: "#", demo: "#" },
    { id: 5, title: "Sistem Administrasi Santri", category: "Web", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80", tags: ["Express", "PostgreSQL"], github: "#", demo: "#" },
    { id: 6, title: "Kasir Pintar (POS) App", category: "Mobile", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80", tags: ["Flutter", "Firebase"], github: "#", demo: "#" },
  ];

  // Gunakan data dari Redux jika ada, kalau tidak ada pakai fallbackProjects di atas
  const displayProjects = projects && projects.length > 0 ? projects : fallbackProjects;

  // Logika filter data
  const filtered = activeFilter === 'All' 
    ? displayProjects 
    : displayProjects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen">
      
      {/* --- HEADER & FILTER SECTION --- */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-mint font-mono text-xs uppercase tracking-widest">
            <IconFolder size={16} /> 03 / Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-balance">
            Selected <span className="italic font-normal text-mint">Works</span>
          </h2>
          <p className="text-muted text-sm max-w-md leading-relaxed">
            Kumpulan blueprint digital dan aplikasi fungsional yang saya bangun dengan fokus pada skalabilitas dan estetika.
          </p>
        </div>

        {/* Filter Tab - Responsive Scrollable di Mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 pt-1 w-full lg:w-auto border-b border-surface/30 lg:border-none no-scrollbar snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setFilter(cat))}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 snap-center shrink-0 ${
                activeFilter === cat 
                  ? 'bg-mint text-white shadow-lg shadow-mint/20 border-transparent' 
                  : 'bg-surface/10 border border-surface/40 text-muted hover:border-mint/60 hover:text-current'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- RESPONSIVE PROJECT GRID --- */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group bg-surface/10 border border-surface/40 rounded-3xl overflow-hidden hover:border-mint/50 hover:shadow-[0_20px_40px_rgba(2,132,199,0.03)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Gambar Proyek */}
              <div className="aspect-[4/3] overflow-hidden relative bg-surface/30">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/5 group-hover:bg-dark/0 transition-colors duration-300" />
                
                {/* Kategori Badge di Atas Gambar */}
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold tracking-widest uppercase bg-dark/80 backdrop-blur-md text-mint px-3 py-1 rounded-lg">
                  {project.category}
                </span>
              </div>

              {/* Detail Info Proyek di Bawah Gambar */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-mint transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Tags / Tech Stack Kecil */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(project.tags || ["React", "Tailwind"]).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-surface/20 text-muted rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol Aksi / Link */}
                <div className="flex items-center justify-between border-t border-surface/30 pt-4 w-full">
                  <span className="text-[11px] font-mono text-muted group-hover:text-current transition-colors">
                    View details
                  </span>
                  <div className="flex gap-4 text-muted">
                    <a 
                      href={project.github || "#"} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-mint transition-colors p-1"
                      title="View Source Code"
                    >
                      <IconBrandGithub size={18} />
                    </a>
                    <a 
                      href={project.demo || "#"} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-mint transition-colors p-1"
                      title="Live Demo"
                    >
                      <IconExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}