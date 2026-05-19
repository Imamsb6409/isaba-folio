import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProjectPreview() {
  const { projects } = useSelector((state) => state.portfolio);
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-xs font-mono text-mint uppercase tracking-[0.3em] mb-4">Featured Work</h2>
          <h3 className="text-4xl font-bold ">Selected Projects</h3>
        </div>
        <Link to="/projects" className="hidden md:block text-muted hover:text-mint font-mono text-xs transition-colors">
          VIEW ALL WORK —&gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <Link to="/projects" key={project.id} className="group">
            <div className="aspect-video rounded-[2rem] overflow-hidden bg-surface border border-white/5 mb-6">
              <img 
                src={project.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                alt={project.title} 
              />
            </div>
            <h4 className="text-2xl font-bold mb-2  group-hover:text-mint transition-colors">{project.title}</h4>
            <p className="text-muted text-sm uppercase font-mono tracking-widest">{project.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}