import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Magnetic({ children }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPos({ x: (clientX - (left + width / 2)) * 0.3, y: (clientY - (top + height / 2)) * 0.3 });
  };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => setPos({x:0,y:0})} animate={{ x: pos.x, y: pos.y }}>
      {children}
    </motion.div>
  );
}