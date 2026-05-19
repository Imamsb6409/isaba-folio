import { 
  IconBrandReact, 
  IconBrandNodejs, 
  IconBrandTailwind, 
  IconBrandHtml5, 
  IconBrandCss3, 
  IconBrandJavascript, 
  IconBrandTypescript,
  IconGitBranch,
  IconDatabase
} from "@tabler/icons-react";

export default function SkillsGrid() {
  const skills = [
    { name: "React / Next.js", icon: <IconBrandReact size={32} />, desc: "Frontend Ecosystem" },
    { name: "Node.js / Express", icon: <IconBrandNodejs size={32} />, desc: "Backend & API" },
    { name: "TypeScript", icon: <IconBrandTypescript size={32} />, desc: "Type Safety" },
    { name: "Tailwind CSS", icon: <IconBrandTailwind size={32} />, desc: "Modern Styling" },
    { name: "JavaScript", icon: <IconBrandJavascript size={32} />, desc: "Core Language" },
    { name: "Git & GitHub", icon: <IconGitBranch size={32} />, desc: "Version Control" },
    { name: "HTML5 & CSS3", icon: <IconBrandHtml5 size={32} />, desc: "Web Foundation" },
  ];

  return (
    <section className="py-24 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:text-left text-center">
          <span className="text-mint font-mono text-xs uppercase tracking-widest block mb-2">Capabilities</span>
          <h2 className="text-3xl font-bold">My Tech Stack & Tools</h2>
          <p className="text-muted text-sm mt-1">Teknologi yang biasa saya gunakan untuk merealisasikan ide digital.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="p-6 bg-dark border border-surface/40 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left group hover:border-mint/50 hover:shadow-[0_10px_30px_rgba(2,132,199,0.05)] transition-all duration-300"
            >
              <div className="text-muted group-hover:text-mint transition-colors duration-300 mb-4">
                {skill.icon}
              </div>
              <h4 className="font-bold text-base">{skill.name}</h4>
              <p className="text-muted text-xs mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}