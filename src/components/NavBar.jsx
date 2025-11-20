import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const location = useLocation();

  const linkClass = (path) =>
    `relative inline-block pb-1 
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:h-[3px] 
     after:bg-[#DD9F39] 
     after:transition-all after:duration-300
      
     ${location.pathname === path 
        ? "after:w-full font-bold text-[#DD9F39]"  // activo
        : "after:w-0 hover:after:w-full"}           // hover
    `;

  return (
    <motion.div
      key={location.pathname} // 💥 se anima en cada cambio de ruta
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.70, ease: "easeOut" }}
      className="flex justify-between px-40 items-center h-20 bg-white z-50"
    >
      <h1 className="font-luckiestGuy text-5xl text-[#DD9F39] tracking-widest select-none">
        CROCANTE
      </h1>

      <ul className="flex justify-between gap-20 text-black font-lekton select-none">
        <li><Link to="/" className={linkClass("/")}>Inicio</Link></li>
        <li><Link to="/menu" className={linkClass("/menu")}>Menú</Link></li>
        <li><Link to="/about" className={linkClass("/about")}>Acerca de</Link></li>
        <li><Link to="/contact" className={linkClass("/contact")}>Contacto</Link></li>
      </ul>
    </motion.div>
  );
}

export default NavBar;
