import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", index: "01", label: "Inicio", subLabel: "Home", accent: "blue" },
  { id: "sobre", index: "02", label: "Sobre mí", subLabel: "About", accent: "red" },
  { id: "tecnologias", index: "03", label: "Tecnologías", subLabel: "Stack", accent: "blue" },
  { id: "proyectos", index: "04", label: "Proyectos", subLabel: "Work", accent: "red" },
  { id: "contacto", index: "05", label: "Contacto", subLabel: "Contact", accent: "blue" },
];

export const NAV_IDS = NAV_ITEMS.map((item) => item.id);
