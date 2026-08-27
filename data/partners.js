// Aparecem na Home e no carrossel de parceiros
export const partnerships = [
  {
    id: "rocketseat",
    name: "Rocketseat",
    imageDark: "/images/partners/rocketseat.svg",
    imageLight: "/images/partners/rocketseat.svg",
    url: "https://www.rocketseat.com.br/?utm_campaign=",
  },
  {
    id: "kiman-solutions",
    name: "Kiman Solutions",
    imageDark: "/images/partners/kimanSolutions.svg",
    imageLight: "/images/partners/kimanSolutions.svg",
    url: "https://kiman.com.br/",
  },
  {
    id: "aws-builder-center",
    name: "AWS Builder Center",
    imageDark: "/images/partners/awsBuilderCenter.png",
    imageLight: "/images/partners/awsBuilderCenter.png",
    url: "https://builder.aws.com/",
  },
  {
    id: "bt-company",
    name: "BT Company",
    imageDark: "/images/partners/btCompany-dark.png",
    imageLight: "/images/partners/btCompany-light.png",
    url: "https://www.btcompany.com.br/",
  }
].sort((a, b) => (a.name > b.name ? 1 : -1));;

// Aparecem na Home e no carrossel de parceiros
export const supporters = [
  {
    id: "totvs",
    name: "TOTVS",
    imageDark: "/images/partners/totvs-dark.svg",
    imageLight: "/images/partners/totvs-light.png",
    url: "https://www.totvs.com/",
  },
  {
    id: "ade-sampa",
    name: "Ade Sampa",
    imageDark: "/images/partners/AdeSampa.png",
    imageLight: "/images/partners/AdeSampa.png",
    url: "https://adesampa.com.br/",
  },
  {
    id: "dsec",
    name: "DSec",
    imageDark: "/images/partners/DSec.png",
    imageLight: "/images/partners/DSec.png",
    url: "https://dseclab.io/br",
  },
  {
    id: "festo",
    name: "Festo",
    imageDark: "/images/partners/Festo.svg",
    imageLight: "/images/partners/Festo.svg",
    url: "https://www.festo.com/br/pt",
  },
  {
    id: "na-pratica",
    name: "Na Prática",
    imageDark: "/images/partners/NaPratica-dark.png",
    imageLight: "/images/partners/NaPratica-light.png",
    url: "https://napratica.org.br/",
  },
  {
    id: "síntese jr",
    name: "Síntese JR",
    imageDark: "/images/partners/sintese-dark.svg",
    imageLight: "/images/partners/sintese-light.svg",
    url: "https://www.sintesejr.com.br/",
  },
  {
    id: "itau",
    name: "Itaú",
    imageDark: "/images/partners/itau.svg",
    imageLight: "/images/partners/itau.svg",
    url: "https://www.itau.com.br/",
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
    id: "usp-codelab-leste",
    name: "CodeLab",
    imageDark: "/images/partners/codelab.png",
    imageLight: "/images/partners/codelab.png",
    url: "https://linktr.ee/uspcodelableste",
  },
  {
    id: "sap",
    name: "SAP",
    imageDark: "/images/partners/SAP.png",
    imageLight: "/images/partners/SAP.png",
    url: "https://www.sap.com/brazil/index.html",
  },
  {
    id: "conway",
    name: "Conway",
    imageDark: "/images/partners/conway.png",
    imageLight: "/images/partners/conway.png",
    url: "https://linktr.ee/conway_usp",
  },
  {
    id: "eits",
    name: "[E]ACH in The Shell",
    imageDark: "/images/partners/eits.png",
    imageLight: "/images/partners/eits.png",
    url: "https://intheshell.each.usp.br/",
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
