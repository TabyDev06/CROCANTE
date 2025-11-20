import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // antes de entrar
      animate={{ opacity: 1, y: 0 }}    // cuando entra
      exit={{ opacity: 0, y: -20 }}     // cuando sale
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
