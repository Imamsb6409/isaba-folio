import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Lenis from "lenis";

import Hero from "./features/home/Hero";
import BentoGrid from "./features/about/BentoGrid";
import ProjectGallery from "./features/projects/ProjectGallery";

import Contact from "./features/contact/Contact";
import Navbar from "./components/ui/Navbar";

export default function App() {
  // Aktifkan Lenis untuk smooth scroll murni
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {/* bg-dark di sini akan mengambil nilai #fbf9f4 dari index.css */}
        <div className="bg-dark min-h-screen selection:bg-mint selection:text-white">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<BentoGrid />} />
              <Route path="/projects" element={<ProjectGallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <div className="h-screen flex items-center justify-center font-mono text-muted">
                    404 | Not Found
                  </div>
                }
              />
            </Routes>
          </main>

          {/* Border-t disesuaikan menggunakan border-surface agar senada dengan krem gelap */}
          <footer className="py-10 text-center text-[10px] text-muted tracking-widest uppercase border-t border-surface/50">
            &copy; 2026 Crafted by Imam Sandy Bachtiar
          </footer>
        </div>
      </Router>
    </Provider>
  );
}