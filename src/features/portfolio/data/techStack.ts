import { publicAsset } from "@/utils/publicAsset";
import type { TechCategory } from "../types";

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    subtitle: "Interfaces · 4",
    accent: "red",
    items: [
      { name: "React", logo: publicAsset("/logos/reactjs.png") },
      { name: "Next.js", logo: publicAsset("/logos/nextjs.png") },
      { name: "WordPress", logo: publicAsset("/logos/wordpress.png") },
      { name: "Flutter", logo: publicAsset("/logos/flutter.png") },
    ],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend",
    subtitle: "APIs & lógica · 4",
    accent: "blue",
    items: [
      { name: "Node JS", logo: publicAsset("/logos/nodejs.png") },
      { name: "Express", badge: "EX" },
      { name: "PHP", logo: publicAsset("/logos/php.png") },
      { name: "Laravel", logo: publicAsset("/logos/laravel.png") },
    ],
  },
  {
    id: "bases-de-datos",
    index: "03",
    title: "Bases de datos",
    subtitle: "Data · 6",
    accent: "red",
    items: [
      { name: "PostgreSQL", logo: publicAsset("/logos/postgresql.png") },
      { name: "Supabase", logo: publicAsset("/logos/supabase.png") },
      { name: "Firebase", logo: publicAsset("/logos/firebase.png") },
      { name: "MySQL", logo: publicAsset("/logos/mysql.png") },
      { name: "SQLite", badge: "SQ" },
      { name: "MongoDB", badge: "MG" },
    ],
  },
  {
    id: "herramientas-ia",
    index: "04",
    title: "Herramientas & IA",
    subtitle: "Tooling · 10",
    accent: "blue",
    items: [
      { name: "Claude Code", logo: publicAsset("/logos/claudecode.png") },
      { name: "Claude", logo: publicAsset("/logos/claude.png") },
      { name: "Codex", logo: publicAsset("/logos/codex.png") },
      { name: "ChatGPT", logo: publicAsset("/logos/chatgpt.png") },
      { name: "Antigravity", logo: publicAsset("/logos/antigravity.png") },
      { name: "Docker", logo: publicAsset("/logos/docker.png") },
      { name: "VS Code", badge: "VS" },
      { name: "Google Cloud", badge: "GC" },
      { name: "Play Console", badge: "PC" },
      { name: "Workspace", badge: "WS" },
    ],
  },
];
