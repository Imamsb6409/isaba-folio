import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full p-6 bg-black/20 backdrop-blur-md z-100 flex justify-center gap-10 items-center">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="relative text-[10px] font-mono uppercase tracking-[0.3em] hover:text-mint transition-colors py-1"
        >
          {link.name}
          {/* MAGIC: Underline yang meluncur antar menu */}
          {location.pathname === link.path && (
            <motion.div
              layoutId="nav-pill"
              className="absolute -bottom-1 left-0 w-full h-px bg-mint"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
