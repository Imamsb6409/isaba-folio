import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilter: "All",
  projects: [
    {
      id: 1,
      title: "R. Tahsin Sarinah Ash-Shalihah Website",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
    },
    {
      id: 2,
      title: "TAPAS Website",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1000",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    },
    {
      id: 7,
      title: "E-Commerce System",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      id: 8,
      title: "Islamic Mobile App",
      category: "Mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "Expo"],
      github: "#",
      demo: "#",
    },
    {
      id: 9,
      title: "Munfest Event Dashboard",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
      tags: ["Vite", "TailwindCSS", "GSAP"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Portofolio Minimalist Beige",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      tags: ["Figma", "UI/UX"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Sistem Administrasi Santri",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      tags: ["Express", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Kasir Pintar (POS) App",
      category: "Mobile",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      tags: ["Flutter", "Firebase"],
      github: "#",
      demo: "#",
    },
  ],
};

const projectSlice = createSlice({
  name: "portfolio", // Nama slice
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { setFilter } = projectSlice.actions;
export default projectSlice.reducer;
