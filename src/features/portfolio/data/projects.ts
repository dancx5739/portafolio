import { publicAsset } from "@/utils/publicAsset";
import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "gestion-academica",
    index: "01",
    category: "Plataforma",
    title: "Sistema de gestión académica",
    description:
      "Sistema completo para gestión académica, reportes, análisis de datos, facturación.",
    tags: ["React", "Supabase", "Google Console"],
    accent: "red",
    size: "large",
    imageLabel: "Espacio para captura del sistema",
    image: publicAsset("/images/hemingway.png"),
    imagePosition: "object-left-top",
  },
  {
    id: "inmobiliaria",
    index: "02",
    category: "Web",
    title: "Inmobiliaria",
    description: "Inmobiliaria pagina hecha con Next JS + Supabase.",
    tags: ["Next JS", "Supabase"],
    accent: "blue",
    size: "small",
    imageLabel: "Espacio para captura",
    image: publicAsset("/images/inmob.png"),
  },
  {
    id: "nivo-mis-ventas",
    index: "03",
    category: "Mobile",
    title: "Nivo Mis Ventas",
    description: "App móvil de control de negocios con análisis avanzado de ventas.",
    tags: ["Mobile", "Analytics", "Google Play"],
    accent: "red",
    size: "small",
    imageLabel: "Espacio para captura de la app",
    image: publicAsset("/images/misventas.png"),
  },
];
