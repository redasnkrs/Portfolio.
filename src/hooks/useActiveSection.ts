import { useEffect, useState } from "react";
import { type SectionId } from "../data/sections";
export { type SectionId } from "../data/sections";

export function useActiveSection(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const handler = () => {
      const center = window.scrollY + window.innerHeight / 2;
      let current: SectionId = "home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const bottom = top + rect.height;
        if (center >= top && center < bottom) {
          current = id;
        }
      });
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [sectionIds]);

  return active;
}
