import { useEffect, useState, useRef } from "react";
import Landing from "./Landing";
import Seccion from "./Seccion";

const HIDDEN = [
  "#sobre-nosotros",
  "#metodologia",
  "#casos-exito",
  "#servicios",
  "#diagnostico-estrategico",
  "#diseno-sistema",
  "#implementacion-ia",
  "#automatizacion-comercial",
  "#cualificacion-leads",
  "#privacidad",
  "#aviso-legal",
  "#contacto",
];

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const hash = window.location.hash;
    if (HIDDEN.includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const hash = a.getAttribute("href");
      if (HIDDEN.includes(hash)) {
        e.preventDefault();
        scrollRef.current = window.scrollY;
        setActiveSection(hash);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const volver = () => {
    setActiveSection(null);
    setTimeout(() => window.scrollTo(0, scrollRef.current), 0);
  };

  if (activeSection) {
    return <Seccion id={activeSection} onBack={volver} />;
  }

  return <Landing />;
}
