import { useEffect, useRef } from "react";

const base = {
  up: { opacity: 0, transform: "translateY(8px)" },
  left: { opacity: 0, transform: "translateX(-8px)" },
  fade: { opacity: 0 },
  scale: { opacity: 0, transform: "scale(0.98)" },
};

export default function ScrollReveal({
  children,
  dir = "up",
  className = "",
  style = {},
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...base[dir],
        transition: "opacity 0.25s ease, transform 0.25s ease",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
