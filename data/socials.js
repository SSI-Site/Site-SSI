const eventYear = "2026";
const contactEmail = "giovanna.antunes@usp.br, enzobmattos@usp.br";

export const socials = {
  instagram: "https://www.instagram.com/semanadesi/",
  linkedin: "https://www.linkedin.com/company/semandesi",
  youtube: "https://www.youtube.com/@semanadesi",
  aftermovieEmbed: "https://www.youtube.com/embed/tHkBBqcpb3I?si=ISLt0jiKNzuyd5g2", // Link da transmissão no YouTube do ano anterior da SSI
  
  // Objeto dedicado aos links de e-mail da página para empresas
  parcerias: {
    landing: `mailto:${contactEmail}?subject=${encodeURIComponent(`Interesse em participar da SSI ${eventYear}`)}&body=${encodeURIComponent(`Olá! Gostaria de saber como nossa empresa pode marcar presença na Semana de Sistemas de Informação ${eventYear}.`)}`,
    
    planos: `mailto:${contactEmail}?subject=${encodeURIComponent(`Solicitação de Planos de Parceria - SSI ${eventYear}`)}&body=${encodeURIComponent(`Olá! Temos interesse em ser parceiros do evento. Poderiam nos enviar os planos de patrocínio?`)}`,
    
    apoio: `mailto:${contactEmail}?subject=${encodeURIComponent(`Agendar conversa sobre Apoio - SSI ${eventYear}`)}&body=${encodeURIComponent(`Olá! Lemos sobre a modalidade de apoio e gostaríamos de agendar uma conversa para entender como podemos colaborar com a SSI ${eventYear}.`)}`,
    
    experiencia: `mailto:${contactEmail}?subject=${encodeURIComponent(`Marcar presença na SSI ${eventYear}`)}&body=${encodeURIComponent(`Olá! Ficamos impressionados com os números e a experiência da SSI. Como podemos inserir nossa marca no evento?`)}`
  }
};