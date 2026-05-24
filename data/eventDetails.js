export const eventDetails = {
  name: "SSI",
  fullName: "Semana de Sistemas de Informação",
  year: "2026",
  dateText: "24 a 28 de agosto", 
  startDate: "2026-08-24T00:09:30-03:00",
  endDate: "2026-08-28T23:59:59-03:00", 
  
  hero: {
    shortDate: "24-28",
    monthYear: "Ago 2026"
  },

  countdownDate: "2026-08-24T00:00:00",

  logic: {
    // so nao esquecer que no Date do JS o mes começa em 0, logo 7 = agosto
    startJS: new Date(2026, 7, 24), 
    endJS: new Date(2026, 7, 28),
    fallbackString: "2026-08-24",
    filterEventDays: [
      "24 Ago - Segunda-feira", 
      "25 Ago - Terça-feira", 
      "26 Ago - Quarta-feira", 
      "27 Ago - Quinta-feira", 
      "28 Ago - Sexta-feira"
    ]
  },

  stats: {
    draws: 25,     // qnt de sorteios
    speakers: 40,  // qnt de palestrantes
    hours: 45      // qnt de horas de atividade
  },

  /* links: {
    coRegistration: "https://forms.gle/cole-o-link-aqui" 
  } */ 
}; 