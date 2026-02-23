import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marcelle - Agent IA EHPAD",
    short_name: "Marcelle",
    description: "Agent IA pour EHPAD — transmissions, formation et lien familles",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#5B8C6F",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
