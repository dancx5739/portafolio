import { SITE } from "@/constants/site";
import type { ContactChannel } from "../types";

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    hoverAccent: "red",
  },
  {
    label: "WhatsApp",
    value: SITE.whatsappDisplay,
    href: SITE.whatsappHref,
    hoverAccent: "blue",
  },
  {
    label: "GitHub",
    value: SITE.githubDisplay,
    href: SITE.githubHref,
    hoverAccent: "red",
  },
  {
    label: "Ubicación",
    value: SITE.location,
  },
];
