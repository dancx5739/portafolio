export type AccentColor = "red" | "blue";

export interface NavItem {
  id: string;
  index: string;
  label: string;
  subLabel: string;
  /** Accent color used for the active-state indicator bar. */
  accent: AccentColor;
}
