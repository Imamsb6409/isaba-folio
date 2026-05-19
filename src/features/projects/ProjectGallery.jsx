import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { setFilter } from '../../store/projectSlice'; // Pastikan path ke projectSlice benar
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';

export default function ProjectGallery() {
  // Ambil data dari slice 'portfolio' yang ada di store/index.js
  const { activeFilter, projects } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  const categories = ['All', 'Web', 'Mobile'];

  // Logika filter data
  const filtered = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header & Filter Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-light">Selected Works</h2>
          <p className="text-muted max-w-sm">Koleksi proyek yang dibangun dengan fokus pada UI/UX dan performa tinggi.</p>
        </div>

        {/* Filter - Bisa di-swipe di mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setFilter(cat))}
              className={`px-6 py-2 rounded-full border text-xs font-mono uppercase tracking-widest transition-all ${
                activeFilter === cat 
                ? 'bg-mint border-accent text-white shadow-lg shadow-accent/20' 
                : 'border-white/10 text-muted hover:border-accent/50 hover:text-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-surface border border-white/5 rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-between">
                <div className="flex justify-end gap-3">
                  <IconBrandGithub className="text-light hover:text-accent cursor-pointer transition-colors" />
                  <IconExternalLink className="text-light hover:text-accent cursor-pointer transition-colors" />
                </div>
                <div>
                  <span className="text-accent text-[10px] font-mono uppercase tracking-tighter">{project.category}</span>
                  <h3 className="text-xl font-bold text-light mt-1">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}