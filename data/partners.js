// Aparecem na Home e no carrossel de parceiros
export const partnerships = [
  {
    id: "aton",
    name: "Aton",
    imageDark: "/images/partners/aton-dark.png",
    imageLight: "/images/partners/aton-light.png",
    url: "https://ambarx.com.br/",
  },
  {
    id: "idwall",
    name: "idwall",
    imageDark: "/images/partners/idwall-light.png",
    imageLight: "/images/partners/idwall-dark.png",
    url: "https://idwall.co/pt-BR/",
  },
  {
    id: "nelogica",
    name: "Neologica",
    imageDark: "/images/partners/neologica-light.png",
    imageLight: "/images/partners/neologica-dark.png",
    url: "https://www.nelogica.com.br/",
  },
];

// Aparecem na Home e no carrossel de parceiros
export const supporters = [
  {
    id: "each",
    name: "EACH",
    imageDark: "/images/partners/each-dark.svg",
    imageLight: "/images/partners/each-light.svg",
    url: "https://www5.each.usp.br/",
  },
  {
    id: "alura",
    name: "Alura",
    imageDark: "/images/partners/alura-dark.svg",
    imageLight: "/images/partners/alura-light.png",
    url: "https://www.alura.com.br/",
  },
  {
    id: "totvs",
    name: "TOTVS",
    imageDark: "/images/partners/totvs-dark.svg",
    imageLight: "/images/partners/totvs-light.png",
    url: "https://www.totvs.com/",
  },
  {
    id: "petsi",
    name: "PET-SI",
    imageDark: "/images/partners/pet-dark.png",
    imageLight: "/images/partners/pet-light.png",
    url: "https://www.instagram.com/petsieach/",
  },
  {
    id: "r2ventures",
    name: "R2ventures",
    imageDark: "/images/partners/r2-ventures-dark.png",
    imageLight: "/images/partners/r2-ventures-light.png",
    url: "https://r2ventures.com.br/",
  },
  {
    id: "rocketseat",
    name: "Rocketseat",
    imageDark: "/images/partners/rocketseat-light.png",
    imageLight: "/images/partners/rocketseat-dark.png",
    url: "https://www.rocketseat.com.br/",
  },
  {
    id: "bravium",
    name: "Bravium",
    imageDark: "/images/partners/bravium-light.png",
    imageLight: "/images/partners/bravium-dark.png",
    url: "https://www.bravium.com.br/",
  },
].sort((a, b) => (a.name > b.name ? 1 : -1));

// Aparecem apenas nas palestras
export const otherSponsors = [
  {
    id: "ssi talks",
    name: "SSI Talks",
    imageDark: "/images/partners/ssi-talks-dark.png",
    imageLight: "/images/partners/ssi-talks-dark.png",
    url: "#",
  },
  {
    id: "hype",
    name: "Hype",
    imageDark: "/images/partners/hype-dark.png",
    imageLight: "/images/partners/hype-dark.png",
    url: "#",
  },
  {
    id: "síntese jr",
    name: "Síntese JR",
    imageDark: "/images/partners/sintese-dark.png",
    imageLight: "/images/partners/sintese-dark.png",
    url: "#",
  },
  {
    id: "r2 ventures",
    name: "R2 Ventures",
    imageDark: "/images/partners/r2-ventures-dark.png",
    imageLight: "/images/partners/r2-ventures-light.png",
    url: "https://r2ventures.com.br/",
  },
];

// Junta todos os parceiros e apoiadores em um único array para o carrosel da pagina Partnerships
export const allPartnersAndSupporters = [...partnerships, ...supporters];

const allEntities = [...allPartnersAndSupporters, ...otherSponsors];

// Helper para o LectureItem.js resgatar a imagem dinamicamente baseada no nome
export const getSponsorImage = (sponsorName) => {
  if (!sponsorName) return null;
  const normalizedName = sponsorName.toLowerCase();
  const sponsor = allEntities.find(
    (p) => p.id === normalizedName || p.name.toLowerCase() === normalizedName,
  );

  return sponsor ? sponsor.imageDark : null;
};
