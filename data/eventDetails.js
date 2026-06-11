export const eventDetails = {
  year: "2026",
  lastYear: String(2026 - 1),
  edition: "17",
  dateText: "24 a 28 de agosto", 
  startDate: "2026-08-24T09:40:00-03:00",
  endDate: "2026-08-28T23:59:59-03:00", 
  regulationLink: "https://docs.google.com/document/d/1ROLkjMU-hxvPW5BlVpEm1wnzZN1z32YsQc5u69u1pSk/edit?usp=sharing",
  isSubscriptionOpen: false, // Inscrição para a COSSI

  hero: {
    shortDate: "24-28",
    monthYear: "Ago 2026"
  },

  lastYearStats: { // estatísticas da transmissão no youtube do evento do ano anterior
    viewers: 2,       
    subscribers: 600,
    contentHours: 43  
  },

  logic: {
    // so nao esquecer que no Date do JS o mes começa em 0, logo 7 = agosto
    //startJS: (2026, 7, 24), 
    //endJS: (2026, 7, 28),
    startJS: new Date(2026, 7, 24),
    endJS: new Date(2026, 7, 28),
    fallbackString: "2026-08-24",
    filterEventDays: [
      "24 Ago - Segunda-feira", 
      "25 Ago - Terça-feira", 
      "26 Ago - Quarta-feira", 
      "27 Ago - Quinta-feira", 
      "28 Ago - Sexta-feira"
    ],
    // variaveis centralizadas para a pagina de programacao de 2026:
    // DATAS DA EDICAO ATUAL (2026)
    // dayOfSSI: ["24 Ago", "25 Ago", "26 Ago", "27 Ago", "28 Ago"],
    // dayFull: ["2026-08-24", "2026-08-25", "2026-08-26", "2026-08-27", "2026-08-28"],
    // weekDays: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]
    
    // DESCOMENTE AQUI E COMENTE ACIMA APENAS PARA TESTES LOCAIS (DADOS DO MOCK/API EM 2025)
    dayOfSSI: ["18 Ago", "19 Ago", "20 Ago", "21 Ago", "22 Ago"],
    dayFull: ["2025-08-18", "2025-08-19", "2025-08-20", "2025-08-21", "2025-08-22"],
    weekDays: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"]
  },

  stats: {
    draws: 25,     // quatidade de sorteios
    speakers: 40,  // quatidade de palestrantes
    hours: 45      // quatidade de horas de atividade
  },

  links: {
    coRegistration: "https://forms.gle/cole-o-link-aqui-meu-fan-de-jojo" 
  } 
}; 