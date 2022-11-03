
import LectureImage02 from '../public/images/lecture_imgs/02-Lucas_Magon.png'
import LectureImage03 from '../public/images/lecture_imgs/03-Rodrigo_Ferreira.jpg'

import LectureImage05 from '../public/images/lecture_imgs/05-Ana_Paula_Frizzo.jpg'


import LectureImage08 from '../public/images/lecture_imgs/08-Ana_Ferreira.jpeg'
import LectureImage09 from '../public/images/lecture_imgs/09-Lavínia_Paganini.jpeg'


import LectureImage12 from '../public/images/lecture_imgs/12-Vencer_Agil.jpg'




import LectureImage17 from '../public/images/lecture_imgs/17-Giovanni_de_Carvalho.jpg'
import LectureImage18 from '../public/images/lecture_imgs/18-Fabiano_Luiz_Caldas_Leite.jpg'


import LectureImage20 from '../public/images/lecture_imgs/20-Marcelo_L._Perrucci.jpg'
import LectureImage21 from '../public/images/lecture_imgs/21-Bruna_ZS.png'
import LectureImage22 from '../public/images/lecture_imgs/22-Talita_Rodrigues.jpg'

import LectureImage24 from '../public/images/lecture_imgs/24-William_Oliveira.jpg'
import LectureImage26 from '../public/images/lecture_imgs/26-Caio_Novais_Fernandes_da_Silva.jpg'


import LectureImage27 from '../public/images/lecture_imgs/27-Marylly_Silva.jpg'

import LectureImage29 from '../public/images/lecture_imgs/29-Fransuel_Nascimento.jpeg'
import LectureImage30 from '../public/images/lecture_imgs/30-Gael_Sena.jpg'

import LectureImage32 from '../public/images/lecture_imgs/32-Felipe_Voigtlaender_Furquim.jpg'

import LectureImage34 from '../public/images/lecture_imgs/34-Ricardo_Filho.jpg'
import LectureImage35 from '../public/images/lecture_imgs/35-Jéderson_Freitas.jpg'





import LectureImage36 from '../public/images/lecture_imgs/36-Gabul_DEV.png'
// 37
import LectureImage38 from '../public/images/lecture_imgs/38-Beronalda_Silva.png'
// 39
// 40
// 41
// 42
import LectureImage43 from '../public/images/lecture_imgs/43-Téo_Calvo_(Téo).jpg'

const schedule = {
  '2022-11-07': {
    '08:40': { message: 'Abertura' },
    '10:00': {
      title: 'Transformação digital: tecnologia como negócio',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'Fernando Karchiloff' },
        { name: 'Gabriel Brandão' },
        { name: 'Guilherme Schützer' },
        { name: 'Felipe Moreira', anchor: 'https://mindsight.com.br' }
      ],
      image: ''
    },
    '11:20': {
      title: 'O futuro dos jogos e simuladores médicos: cuidando de pacientes virtuais em AR, VR e MR',
      description: 'Já imaginou como seria cuidar de um paciente dentro do metaverso? Descubra como clínicas, hospitais e faculdades estão usando simuladores e jogos em VR e AR para poder realizar treinamentos com pacientes virtuais em 3D. Veja também sobre o uso de game engines (Unity e Unreal) em áreas que não são relacionadas a jogos, e como ingressar nesse mercado muito promissor para os próximos anos.',
      local: 'presential',
      speakers: [
        { name: 'Lucas Magon', anchor: 'https://www.linkedin.com/in/lucas-magon-santos-35bbb530/' },
      ],
      image: LectureImage02
    },

    '12:20': { message: 'Almoço' },

    '13:20': {
      title: 'Computação Quântica: Oportunidades e Desafios',
      description: 'A palestra "Construindo o ecossistema de tecnologias quânticas no Brasil" versa sobre os principais desafios e oportunidades que a Brazil Quantum detectou nos últimos anos de atuação. Falaremos sobre os nossos projetos, aprendizados e o que estamos planejando para o futuro.',
      local: 'online',
      speakers: [
        { name: 'Rodrigo Ferreira' }
      ],
      image: LectureImage03
    },
    '14:40': {
      title: 'Palestra 4 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '16:00': {
      title: 'Soft Skills - Pilares que sustem o sucesso da sua carreira',
      description: `O que são Soft Skills e Hard Skills.
      Por que elas são fatores determinantes para o sucesso na vida pessoal e profissional?
      O desenvolvimento da Inteligência emocional reflete nas soft skills?
      Por quê elas são um diferencial na carreira de um profissional?
      Como que elas são observadas em um processo seletivo, acompanhadas no dia a dia pelo gestor imediato e nas avaliações de desempenho?  e em processos para promoção de cargo?
      Empreendedores conquistam resultados através de pessoas e como que as soft skills são utilizadas para que estes resultados sejam alcançados?
      A falta destas habilidades podem sabotar uma carreira.`,
      local: 'online',
      speakers: [
        { name: 'Ana Paula Frizzo', anchor: 'https://www.instagram.com/frizzoanapaula/' }
      ],
      image: LectureImage05
    },
    '17:20': {
      title: 'Palestra 6 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },

    '18:20': { message: 'Janta' },

    '19:20': {
      title: 'Palestra 7 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '20:40': {
      title: 'A importância da acessibilidade digital no desenvolvimento web',
      description: 'Nesta palestra iremos abordar sobre técnicas e diretrizes de acessibilidade usadas no desenvolvimento web, a importância da acessibilidade web e exemplos de como deixar o site um pouco mais acessível.',
      local: 'online',
      speakers: [
        { name: 'Ana Ferreira', anchor: '' }
      ],
      image: LectureImage08
    },
  },
  '2022-11-08': {
    '08:40': {
      title: 'GitHub Actions: como fazer seu primeiro flow',
      description: 'Já tentou subir uma aplicação e percebeu que o repositório não conseguia compilar? Você pode evitar isso com um workflow do GitHub Actions! Venha aprender mais sobre workflows, eventos, actions com Lavínia Paganini, estudante de mestrado em Ciência da Computação da UFPE, back-end Software Engineer na Gympass e GitHub Campus Expert.',
      local: 'online',
      speakers: [
        { name: 'Lavínia Paganini', anchor: '' }
      ],
      image: LectureImage09
    },
    '10:00': {
      title: 'Palestra 10 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '11:20': {
      title: 'Segurança de Redes de Computadores: do Hardware ao 6G passando pelas Cidades Inteligentes',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'Daniel Batista', anchor: '' }
      ],
      image: ''
    },

    '12:20': { message: 'Almoço' },

    '13:20': {
      title: 'Mindset Ágil',
      description: 'A palestra tem como objetivo mostrar a diferença entre ser e fazer o ágil, demonstrando a importância do pensar ágil para ter acesso a todos os benefícios da prática.',
      local: 'presential',
      speakers: [
        { name: 'Aryane Saito', anchor: '' }
      ],
      image: LectureImage12
    },
    '14:40': {
      title: 'Palestra 13 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '16:00': {
      title: 'Palestra 14 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '17:20': {
      title: 'Palestra 15 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },

    '18:20': { message: 'Janta' },

    '19:20': {
      title: 'O poder das tecnologias cívicas',
      description: 'Tecnologias cívicas são importantes para apontar caminhos e resolver grandes problemas da sociedade. Explorando para além do Open Source e o Open Data, queremos mostrar que a tecnologia é mais do que produto, é colaboração, participação e impacto social.',
      local: 'presential',
      speakers: [
        { name: 'Gisele Craveiro', anchor: '' },
        { name: 'Renata Araújo', anchor: '' },
        { name: 'Juliana Trevine', anchor: '' },
        { name: 'Vanessa Nascimento', anchor: '' }
      ],
      image: ''
    },
    '20:40': {
      title: 'Dev Full Stack: do zero ao primeiro emprego',
      description: `Olá sou o Giovanni de Carvalho.
      Tenho como foco um perfil em Y com 02 especialidades sendo elas: administração e tecnologia. Atualmente trabalho na engenharia de um grande banco com foco em modernização de produto e sistemas, desenvolvendo soluções de transformação digital com o cliente no centro.`,
      local: 'presential',
      speakers: [
        { name: 'Giovanni de Carvalho', anchor: '' }
      ],
      image: LectureImage17
    },
  },
  '2022-11-09': {
    '08:40': {
      title: 'De startup até empresa de classe mundial',
      description: 'Na palestra compartilharei minha experiência e os desafios de fazer uma empresa crescer de uma startup até ser uma grande empresa com ações na bolsa. ',
      local: 'presential',
      speakers: [
        { name: 'Fabiano Luiz Caldas Leite', anchor: '' }
      ],
      image: LectureImage18
    },
    '10:00': {
      title: 'Prevenção de acidentes de trânsito através de machine learning',
      description: 'Vamos mostrar como funciona um projeto de ciência de dados de ponta a ponta no mercado, através de um modelo de previsão de comportamento de direção arriscado no trânsito, indo desde o problema de negócio até o deploy do modelo em produção.',
      local: 'presential',
      speakers: [
        { name: 'Ruanitto Docini', anchor: '' },
        { name: 'Rayra Trevisan', anchor: '' }
      ],
      image: ''
    },
    '11:20': {
      title: 'Dados Abertos - Do Controle Social à Geração de Negócios',
      description: 'Na palestra "Dados Abertos - Do Controle Social à Geração de Negócios", Perrucci irá conceituar transparência e dados abertos, demonstrando como esses princípios estão expressos no conjunto normativo brasileiro e como usá-los para controle social (de políticas públicas e de conformidade) ou para uso comercial. ',
      local: 'presential',
      speakers: [
        { name: 'Marcelo L. Perrucci', anchor: '' }
      ],
      image: LectureImage20
    },

    '12:20': { message: 'Almoço' },

    '13:20': {
      title: 'Carreira em Ciência de Dados',
      description: 'Existem diferentes oportunidades e carreiras em Ciência de Dados, cada uma demandando habilidades e conhecimentos específicos. Nessa palestra nós detalharemos esses pontos, contaremos um pouco das nossas trajetórias, descreveremos o dia-a-dia de um cientista de dados e os desafios de se trabalhar na área.',
      local: 'online',
      speakers: [
        { name: 'Bruna Zamith', anchor: '' },
        { name: 'Michelle Gerez', anchor: '' }
      ],
      image: LectureImage21
    },
    '14:40': {
      title: 'Como mantemos dados seguros usando criptografia?',
      description: 'Na nossa palestra vamos falar sobre os diferentes usos que podemos ter de criptografia para garantir a segurança dos dados em seus diferentes momentos de vida (o tal do life cycle)',
      local: 'presential',
      speakers: [
        { name: 'Talita Rodrigues', anchor: '' }
      ],
      image: LectureImage22
    },
    '16:00': {
      title: 'Workshop de Inteligência Artificial',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '17:20': {
      title: 'Comunidades de programação',
      description: 'Sobre a palestra: Pretendo compartilhar como as comunidades de programação e a tecnologia conseguem mudar a vida das pessoas através do que aconteceu comigo durante os últimos anos.',
      local: 'presential',
      speakers: [
        { name: 'William Oliveira', anchor: 'https://perifacode.com' }
      ],
      image: LectureImage24
    },

    '18:20': { message: 'Janta' },

    '19:20': {
      title: 'Palestra X - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '20:40': {
      title: 'Não faça Esso com o Shell',
      description: 'A finalidade dessa palestra é mostrar os principais vícios de programação Shell, como evitá-los e sempre comparando os tempos da forma usual com a forma correta de uso de cada item analisado. Se você assisti-la, verá que muito do que você faz, pode ser bastante otimizado. Ela não te transformará num "admin Raíz" mas, pelo menos um pouco menos "Nutella". :-)',
      local: 'online',
      speakers: [
        { name: 'Julio Neves', anchor: '' }
      ],
      image: LectureImage26
    },
  },
  '2022-11-10': {
    '08:40': {
      title: 'Em busca do código perfeito',
      description: 'Engenheira de Software, Tech Lead, futura Arquiteta de Software e Cultivadora da Cultura DevOps na ThoughtWorks. Menina e mulher de família de cor simples da periferia de SP capital.',
      local: 'online',
      speakers: [
        { name: 'Marylly Silva', anchor: '' }
      ],
      image: LectureImage27
    },
    '10:00': {
      title: 'Palestra 28 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '11:20': {
      title: 'Design a essência do futuro',
      description: 'Como diferentes práticas profissionais podem se beneficiar através de metodologias de Design.',
      local: 'presential',
      speakers: [
        { name: 'Fransuel Nascimento', anchor: '' }
      ],
      image: LectureImage29
    },

    '12:20': { message: 'Almoço' },

    '13:20': {
      title: 'Testes e a qualidade de software',
      description: 'Falaremos um pouco sobre o papel do teste feito pelo analista de quality assurance (Tester) e a sua influência na qualidade do software.',
      local: 'online',
      speakers: [
        { name: 'Gael Sena', anchor: '' }
      ],
      image: LectureImage30
    },
    '14:40': {
      title: 'Como fazer oportunidades caírem do céu com Web Scraping usando Python?',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'Ana Clara Cavalcante', anchor: 'https://www.instagram.com/uspcodelableste/' }
      ],
      image: ''
    },
    '16:00': {
      title: 'Como atividades extracurriculares ajudam no mercado de trabalho',
      description: 'Sou aluno de SI na EACH e já participei de algumas entidades (CO-SSI, PET, EITS, DASI) e fiz outras atividades extracurriculares (como monitorias). Sendo assim, nessa palestra falarei como participar dessas atividades me ajudaram no mercado de trabalho (e em outros aspectos da vida, sinceramente). Então, falarei um pouco sobre como o barato é loco e como pode te ajudar também :)',
      local: 'presential',
      speakers: [
        { name: 'Felipe Voigtlaender Furquim', anchor: 'https://www.instagram.com/dasiusp/' }
      ],
      image: LectureImage32
    },
    '17:20': {
      title: 'Palestra 33 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'TOTVS', anchor: '' }
      ],
      image: ''
    },

    '18:20': { message: 'Janta' },

    '19:20': {
      title: 'Tecnologia e Inovação em Saúde',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'Ricardo di Lazzaro Filho', anchor: '' }
      ],
      image: LectureImage34
    },
    '20:40': {
      title: 'Desafios de tecnologia para segurança das aplicações',
      description: 'Na palestra, passarei a visão do que está acontecendo com relação aos inúmeros incidentes cibernéticos, os principais motivos pelos quais esses incidentes estão acontecendo e, ao final, como endereçar o desafio de criar e manter aplicações seguras.',
      local: 'online',
      speakers: [
        { name: 'Jéderson Freitas', anchor: '' }
      ],
      image: LectureImage35
    },
  },
  '2022-11-11': {
    '08:40': {
      title: 'Entrando no mundo do Flutter',
      description: 'Já pensou em entrar para o mundo da tecnoliga mobile que mais cresceu nesses últimos anos? Aprender a criar aplicativos como Nubank, Google Pay e vários outros que utilizam o Flutter? Então, na palestra de hoje vou lhe ensinar os caminhos para entrar no mundo incrível dessa tecnolgia da Google.',
      local: 'presential',
      speakers: [
        { name: 'Gabul DEV', anchor: '' }
      ],
      image: LectureImage36
    },
    '10:00': {
      title: 'Palestra 37 - A ser confirmada',
      description: '',
      local: 'online',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '11:20': {
      title: 'Transações na blockchain: um futuro já presente',
      description: `A tecnologia Blockchain veio para ficar, e as perspectivas acerca da sua utilização vem com a promessa de grandes mudanças na forma de depositar nossa confiança nas transações empresarias e pessoais. 
      Entre os possíveis usos da blockchain, esta fornece um no modo de gerir e executar os contratos por meio da programação e de plataformas criptográficas.
      Por se tratar de uma inovação, muitas perguntas pairam no ar: como funciona? Como faço para realizar transações dentro da blockchain?
      Para responder a tais perguntas, é importante compreender como funciona o Blockchain, como os contratos são tradicionalmente válidos, quais as plataformas e as linguagens de programação mais utilizadas.
      Como se vê, o direito e computação estão cada vez mais próximos, e juntos, tem se mostrado com força suficiente para mudar as relações sociais.`,
      local: 'online',
      speakers: [
        { name: ' Profa. Beronalda', anchor: '' }
      ],
      image: LectureImage38
    },

    '12:20': { message: 'Almoço' },

    '13:20': {
      title: 'Como se tornar um desenvolvedor Fullstack',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'Alexia Kattah', anchor: '' }
      ],
      image: ''
    },
    '14:40': {
      title: 'Palestra 40 - A ser confirmada',
      description: '',
      local: 'presential',
      speakers: [
        { name: '', anchor: '' }
      ],
      image: ''
    },
    '16:00': {
      title: 'Balanceamento de Jogos: Uma avaliação analitica de comportamento previsto',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'Rafaelli Harumi Romagnoli Mecenas Yabe', anchor: '' }
      ],
      image: ''
    },
    '17:20': {
      title: 'Diversidade feminina na área da computação',
      description: '',
      local: 'presential',
      speakers: [
        { name: 'Giovanna Arana Paganotti', anchor: 'https://www.instagram.com/petsieach/' },
        { name: 'Rafaela Oliveira da Silva Sá', anchor: '' }
      ],
      image: ''
    },

    '18:20': { message: 'Janta' },

    '19:20': {
      title: 'Primeiros passos com Machine Learning',
      description: 'Sou formado em Estatística na FCT-UNESP de Presidente Prudente - SP, cidade onde nasci, cresci, estudei e onde moro atualmente. Em 2018 encerrei uma pós graduação em Data Science & Big Data pela UFPR em Curitiba - PR, cidade onde passei frio por dois longos anos. Trabalho na área de dados desde 2014, descobrindo o que os dados podem nos ajudar com insights e predições nos negócios. De lá para cá passei por diferentes empresas e hoje sou Head de Dados na Gamers Club.',
      local: 'online',
      speakers: [
        { name: 'Téo Calvo', anchor: '' }
      ],
      image: LectureImage43
    },
    '20:40': { message: 'Encerramento' },
  },
}

export default schedule
