import type { AccentColor } from "@/types";

export type { AccentColor };

export interface TechItem {
  name: string;
  /** Path under /public for a real logo image. */
  logo?: string;
  /** Short text badge shown when no logo image exists yet (e.g. "EX", "VS"). */
  badge?: string;
}

export interface TechCategory {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  accent: AccentColor;
  items: TechItem[];
}

export interface Project {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: AccentColor;
  /** "large" spans the full row, "small" sits in the two-column grid. */
  size: "large" | "small";
  imageLabel: string;
  /** Path under /public for the project screenshot. */
  image?: string;
  /** Tailwind `object-*` position class controlling which part of the screenshot stays visible when cropped. Defaults to "object-top". */
  imagePosition?: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
  hoverAccent?: AccentColor;
}
