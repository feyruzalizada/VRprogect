export interface Partner {
  logo: string;
  name: string;
  /** nudges a mark that reads small next to the rest, 1 being the shared size */
  scale?: number;
}

export const partnersHeading = "Rəsmi tərəfdaşlar";

export const partners: Partner[] = [
  { logo: "/images/partners/kafkas.png", name: "Kafkas" },
  { logo: "/images/partners/hansgrohe.png", name: "hansgrohe" },
  { logo: "/images/partners/geberit.png", name: "Geberit" },
  { logo: "/images/partners/duravit.png", name: "Duravit" },
  { logo: "/images/partners/huppe.png", name: "Hüppe" },
  { logo: "/images/partners/vitra.png", name: "VitrA" },
  { logo: "/images/partners/proglass.png", name: "Pro Glass" },
  { logo: "/images/partners/azessco.png", name: "Azessco", scale: 1.3 },
  { logo: "/images/partners/mascoest.png", name: "MasCoEst" },
  { logo: "/images/partners/snekgroup.png", name: "SNEK GROUP" },
  { logo: "/images/partners/nettax.png", name: "NetTax" },
  { logo: "/images/partners/general-lighting.png", name: "General Lighting" },
  { logo: "/images/partners/onelux.png", name: "onelux" },
  { logo: "/images/partners/advocaid.png", name: "Advocaid" },
];
