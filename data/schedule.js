// assets
import Lecture00_NomeSobrenome from '../public/images/lecture_imgs/00-Member_Shadow.png'

// speakers
import Lecture01_WheslleyRimar from '../public/images/lecture_imgs/01-Wheslley_Rimar.png'
import Lecture02_EvandroFigueiredo from '../public/images/lecture_imgs/02-Evandro_Figueiredo.png'
import Lecture03_RodrigoDorneles from '../public/images/lecture_imgs/03-Rodrigo_Dorneles.jpg'
import Lecture04_VanessaPoskus from '../public/images/lecture_imgs/04-Vanessa_Poskus.png'
import Lecture05_JulioFerreira from '../public/images/lecture_imgs/05-Julio_Ferreira.jpg'
import Lecture06_LeonardoSartorello from '../public/images/lecture_imgs/06-Leonardo_Sartorello.jpg'
import Lecture07_PedroCaraca from '../public/images/lecture_imgs/07-Pedro_Caraca.png'
import Lecture08_PedroSemcovici from '../public/images/lecture_imgs/08-Pedro_Semcovici.jpg'
import Lecture08_YagoPrimerano from '../public/images/lecture_imgs/08-Yago_Primerano.jpg'
import Lecture09_BrunoColisse from '../public/images/lecture_imgs/09-Bruno_Colisse.jpeg'
import Lecture09_MateusBrandao from '../public/images/lecture_imgs/09-Mateus_Brandao.png'
import Lecture10_JeffBrandao from '../public/images/lecture_imgs/10-Jeff_Brandao.jpeg'
import Lecture10_KarolyneViebrantz from '../public/images/lecture_imgs/10-Karolyne_Viebrantz.png'
import Lecture10_RodrigoMulinario from '../public/images/lecture_imgs/10-Rodrigo_Mulinario.jpeg'
import Lecture11_LuliRadfahrer from '../public/images/lecture_imgs/11-Luli_Radfahrer.jpg'
import Lecture12_AnaSampaio from '../public/images/lecture_imgs/12-Ana_Sampaio.png'
import Lecture13_FelipeGigante from '../public/images/lecture_imgs/13-Felipe_Gigante.png'
import Lecture14_FelippeOliveira from '../public/images/lecture_imgs/14-Felippe_Oliveira.jpg'
import Lecture14_AmandaFerreira from '../public/images/lecture_imgs/14-Amanda_Ferreira.jpg'
import Lecture15_EmilioSimoni from '../public/images/lecture_imgs/15-Emilio_Simoni.png'
import Lecture16_DanielCordeiro from '../public/images/lecture_imgs/16-Daniel_Cordeiro.png'
import Lecture16_AndrePalacio from '../public/images/lecture_imgs/16-Andre_Palacio.jpg'
import Lecture16_OtavioRosa from '../public/images/lecture_imgs/16-Otavio_Rosa.jpg'
import Lecture16_SofiaFerreira from '../public/images/lecture_imgs/37-Sofia_Ferreira.jpg'
import Lecture17_DaviBaptista from '../public/images/lecture_imgs/17-Davi_Baptista.png'
import Lecture18_LiaFuziy from '../public/images/lecture_imgs/18-Lia_Fuziy.jpg'
import Lecture19_NycholasSzucko from '../public/images/lecture_imgs/19-Nycholas_Szucko.jpeg'
import Lecture20_MayumiShingaki from '../public/images/lecture_imgs/20-Mayumi_Shingaki.png'
import Lecture21_KerllyBarbara from '../public/images/lecture_imgs/21-Kerlly_Barbara.jpg'
import Lecture22_KarinaOliveira from '../public/images/lecture_imgs/22-Karina_Oliveira.jpeg'
import Lecture23_WellingtonSilva from '../public/images/lecture_imgs/23-Wellington_Silva.jpg'
import Lecture24_BrenoNogueira from '../public/images/lecture_imgs/24-Breno_Nogueira.jpg'
import Lecture25_JandirDeodato from '../public/images/lecture_imgs/25-Jandir_Deodato.jpg'
import Lecture26_FlaviaMartins from '../public/images/lecture_imgs/26-Flavia_Martins.jpeg'
import Lecture26_GiovanneBertotti from '../public/images/lecture_imgs/26-Giovanne_Bertotti.jpeg'
// import Lecture27_NomeSobrenome from '../public/images/lecture_imgs/27-Nome_Sobrenome.png'
import Lecture28_MonicaCraveiro from '../public/images/lecture_imgs/28-Monica_Craveiro.png'
import Lecture29_AluisioAmorim from '../public/images/lecture_imgs/29-Aluisio_Amorim.png'
// import Lecture30_NomeSobrenome from '../public/images/lecture_imgs/30-Nome_Sobrenome.png'
import Lecture30_FelipeFurquim from '../public/images/lecture_imgs/30-Felipe_Furquim.png'
import Lecture31_DavidArty from '../public/images/lecture_imgs/31-David_Arty.png'
import Lecture32_AlexandreTavares from '../public/images/lecture_imgs/32-Alexandre_Tavares.jpg'
import Lecture33_ViniciusStephanto from '../public/images/lecture_imgs/33-Vinicius_Stephanto.jpg'
import Lecture33_VitorCavalcante from '../public/images/lecture_imgs/33-Vitor_Cavalcante.jpg'
import Lecture34_JoseCorreia from '../public/images/lecture_imgs/34-Jose_Correia.jpg'
import Lecture35_RenanNakazawa from '../public/images/lecture_imgs/35-Renan_Nakazawa.jpeg'
import Lecture36_LauraDamaceno from '../public/images/lecture_imgs/36-Laura_Damaceno.jpeg'
import Lecture37_SofiaFerreira from '../public/images/lecture_imgs/37-Sofia_Ferreira.jpg'
import Lecture38_TiagoFraga from '../public/images/lecture_imgs/38-Tiago_Fraga.jpg'
import Lecture39_LeonardoBoeing from '../public/images/lecture_imgs/39-Leonardo_Boeing.jpg'

// sponsors / entities logos
import AluraLogo from '../public/images/sponsors/alura.svg'
import CodeLabLogo from '../public/images/sponsors/code_lab.svg'
import HypeLogo from '../public/images/sponsors/hype.svg'
import KluberLogo from '../public/images/sponsors/kluber.png'
import SSITalksLogo from '../public/images/sponsors/ssi_talks.svg'
// import DASILogo from '../public/images/sponsors/dasi.svg'
// import EITSLogo from '../public/images/sponsors/eits.svg'
import PETLogo from '../public/images/sponsors/pet.svg'


const schedule = {
    // Modelo de como adicionar uma nova palestra
    // 'aaaa-mm-dd' : {
    //     'hh:mm' : {
    //         title : 'Nome do intervalo/janta/almoço',
    //         endTime : 'hh:mm',
    //     },
    //     'hh:mm' : {
    //         sponsor: { // opcional
    //             'name': 'Nome do patrocinador ou entidade',
    //             'image': SponsorLogo,
    //             'url': 'https://www.instagram.com/semanadesi',
    //         },
    //         title : 'Título da palestra',
    //         description : 'Descrição da palestra',
    //         local : 'presential',// presential ou online
    //         endTime : 'hh:mm',
    //         activityType : 'Workshop',// se não for 'Workshop', deixar vazio
    //         speakers : [
    //             {
    //                 'name': 'Nome da palestrante',
    //                 'pronouns': 'Ela/Dela',
    //                 'role': 'Cargo',
    //                 'description': 'Descrição do palestrante',
    //                 'instagram': 'https://www.instagram.com/semanadesi',// opcional
    //                 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
    //                 'image': Lecture00_NomeSobrenome
    //             },
    //             {
    //                 'name': 'Nome do palestrante',
    //                 'pronouns': 'Ele/Dele',
    //                 'role': 'Cargo',
    //                 'description': 'Descrição do palestrante',
    //                 'instagram': 'https://www.instagram.com/semanadesi',// opcional
    //                 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
    //                 'image': Lecture00_NomeSobrenome
    //             },
    //         ],
    //     },
    // },
    '2024-10-07' : {
        '10:20' : {
            title : 'Abertura',
            endTime : '10:40',
        },
        '10:40' : {
            title : 'Intervalo',
            endTime : '11:00',
        },
        '11:00' : {
            title : 'De Classes a Sistemas: A Magia da Orientação a Objetos em Java',
            description : 'Nesta palestra, vamos explorar os conceitos essenciais da Orientação a Objetos (OO) em Java usando a analogia do Lego. Assim como peças de Lego se conectam para criar estruturas, objetos em Java se integram para formar sistemas robustos e reutilizáveis. Vamos abordar os pilares da OO – abstração, encapsulamento, herança e polimorfismo - mostrando como aplicá-los para construir código modular e eficiente.',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Wheslley Rimar',
                    'pronouns': 'Ele/Dele',
                    'role': 'Software Technical Leader',
                    'description': 'Wheslley Rimar é Software Technical Leader no Mercado Livre e especializado em Java. Ele dedica sua carreira ao ensino de programação, criando materiais didáticos para instituições de ensino. Wheslley também lidera programas de capacitação em programação, desenvolvendo conteúdos que facilitam o aprendizado dos alunos. É apaixonado por música e games, hobbies que alimentam sua criatividade e inovação no campo da tecnologia.',
                    'instagram': 'https://instagram.com/wheslleyrimar',
                    'linkedin' : 'https://linkedin.com/in/wheslleyrimar',
                    'image': Lecture01_WheslleyRimar
                },
            ],
        },
        '12:00' : {
            title : 'Almoço',
            endTime : '13:20',
        },
        '13:20' : {
            title : 'Inimigos invisíveis: Como se defender de Ataques Cibernéticos',
            description : 'Vivemos em uma era onde as ameaças digitais se tornam cada vez mais sofisticadas e difíceis de detectar. Os “inimigos invisíveis” - hackers, malwares e outras formas de ataques cibernéticos podem comprometer a segurança de informações pessoais e corporativas sem deixar rastros aparentes. Nesta palestra, vamos explorar as estratégias essenciais para detectar, proteger, responder e recuperar de ataques cibernéticos.',
            local : 'presential',// presential ou online
            endTime : '14:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Evandro Figueiredo',
                    'pronouns': 'Ele/Dele',
                    'role': 'Gerente de Segurança da Informação',
                    'description': 'Profissional de Segurança da Informação e Tecnologia com mais de 15 anos de experiência, atualmente é responsável pelas estratégias de defesa cibernética, privacidade e proteção de dados na Fintech Open Co e Professor no IDESP, formado em Sistema da Informação com MBA em Segurança da Informação e Pós Graduação em Cyber Threat Intelligence, possui as certificações de Auditor Líder ISO 27001 pela PECB, C-ISO EXIN, LGPDF, ITIL, LPI1, AWS entre outras.',
                    'instagram': 'https://www.instagram.com/evandro.cybersecurity/profilecard/?igsh=MWFkZHFzemprZGhmMw==',
                    'linkedin' : 'https://www.linkedin.com/in/evandro-figueiredo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                    'image': Lecture02_EvandroFigueiredo
                },
            ],
        },
        '14:20' : {
            title : 'Intervalo',
            endTime : '14:40',
        },
        '14:40' : {
            sponsor: { // opcional
                'name': 'Code Lab Leste',
                'image': CodeLabLogo,
                'url': 'https://www.instagram.com/uspcodelableste/',
            },
            title : 'Automatize suas tarefas na web com Javascript: Adicionando produtos no carrinho da LigaMagic',
            description : 'Aprenda a fazer raspagem de dados na web e automatização de tarefas utilizando o Javascript (web scrapping e web crawler)! Como exemplo prático, iremos adicionar produtos automaticamente no carrinho da LigaMagic a partir de uma lista de entrada dada pelo usuário.',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : 'Workshop',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Rodrigo Dorneles',
                    'pronouns': 'Ele/Dele',
                    'role': 'Estudante',
                    'description': 'Como todo clichê de pessoas desenvolvedoras, sou apaixonado por tecnologia! Sempre muito curioso e obcecado em aprender coisas novas, gosto muito de usar a tecnologia e criatividade pra resolver e informatizas tarefas cotidianas, principalmente, quando elas estão relacionadas a hobbies, como boardgames e o TCG Magic: the Gathering. Sou técnico em informática e atualmente estudante de Sistemas de Informação.',
                    //'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/rodrigo-dorneles-8a42601b5/ ',// opcional
                    'image': Lecture03_RodrigoDorneles
                },
            ],
        },    
            
        '15:40' : {
            title : 'Intervalo',
            endTime : '16:00',
        },
        '16:00' : {
            title : 'Diversidade na área de TI',
            description : 'A importância de se investir em times diversos para melhoria de tomada de decisão e desenvolvimento de soluções mais inovadoras.',
            local : 'presential',// presential ou online
            endTime : '17:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Vanessa Poskus',
                    'pronouns': 'Ela/Dela',
                    'role': 'CEO',
                    'description': 'Sou Vanessa Poskus, e atualmente sou CEO da Uppo. Sou uma pessoa apaixonada por inovação, tecnologia e empreendedorismo. Sou administradora e financista por formação e com MBA em Business Innovation. Nos últimos 7 anos me conectei com o ambiente de inovação e startups, onde me encontro hoje participando dos principais hubs de inovação como o Cubo-Itaú, Google For Startups e Sebrae For Startups. Sou uma das lideranças do pilar de diversidade do Cubo que é o #MulheresaoCubo e o #AfroCubo.',
                    'instagram': 'https://www.instagram.com/vanessatposkus/',
                    'linkedin' : 'https://www.linkedin.com/in/vanessa-toledo-poskus-400180107/',
                    'image': Lecture04_VanessaPoskus
                },
            ],
        },
        '17:00' : {
            title : 'Intervalo',
            endTime : '17:20',
        },
        '17:20' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Empreendedorismo em Tech: como ter boas ideias do que construir',
            description : 'Ideação, Criatividade, Validação, Empreendedorismo em tecnologia',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Júlio Ferreira',
                    'pronouns': 'Ele/Dele',
                    'role': 'Head de CS',
                    'description': 'Trabalhando hoje como líder do time de Costumer Success da primeira plataforma de demostrações interativas de software da América Latina, já passou pelo time comercial da SAP Latin América, diretoria de vendas da Sintese Jr e liderança de mercado da FEJESP. Empreendedor desde os 16 anos e fã de How I Met Your Mother',
                    'instagram': 'https://www.instagram.com/julioferreiraf/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/julioferreiraf/',// opcional
                    'image': Lecture05_JulioFerreira
                },
            ],
        },
        '18:00' : {
            title : 'Jantar',
            endTime : '19:00',
        },
        '19:00' : {
            sponsor: { // opcional
                'name': 'Alura',
                'image': AluraLogo,
                'url': 'https://www.alura.com.br/',
            },
            title : 'Usando o Cloud',
            description : 'O Cloud esta cada vez mais presente no dia a dia, mas quando devemos utiliza-lo e quais as suas principais vantagens e desvantagens.',
            local : 'presential',// presential ou online
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Leonardo Sartorello',
                    'pronouns': 'Ele/Dele',
                    'role': 'Instrutor de DevOps',
                    'description': 'Leonardo é desenvolvedor e instrutor na Alura com foco principal em DevOps e Cloud, com experiência em virtualização, conteinerização, infraestrutura como código e IoT.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/leonardomsartorello/',// opcional
                    'image': Lecture06_LeonardoSartorello
                },
            ],
        },
        '20:00' : {
            title : 'Intervalo',
            endTime : '20:20',
        },
        '20:20' : {
            title : 'Do Concept ao 3D',
            description : 'Demonstração do processo de producao de um personagem/asset para games, reconhecendo o concept, criando a base high poly, retopo e textura.',
            local : 'online',// presential ou online
            endTime : '21:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Pedro Caraca',
                    'pronouns': 'Ele/Dele',
                    'role': 'Modelador 3D e professor',
                    'description': 'Formado em Design Grafico e Pos graduado em artes para Jogos. De 2004 a 2013 teve uma carreira como Ilustrador e professor de desenho e quadrinhos na escola Folium, Entre 2013 e 2018 foi professor e cordenador de curso na escola SAGA, de 2020 Em diante ja trabalhou em estudio como Void, Afterverse, Abacus e TGS na area de modelagem 3D generalista.',
                    'instagram': 'https://www.instagram.com/pedro_caraca/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/pedro-caraca/',// opcional
                    'image': Lecture07_PedroCaraca
                },
            ],
        },
    },
    '2024-10-08' : {
        '09:40' : {
            sponsor: { // opcional
                'name': 'Hype',
                'image': HypeLogo,
                'url': 'https://www.instagram.com/hype.usp/',
            },
            title : 'Como chegamos ao ChatGPT: A evolução do PLN ao longo dos anos',
            description : 'A proposta da palestra é demonstrar a evolução dos sistemas de Processamento de Língua Natural (PLN) ao longo dos anos, destacando as tecnologias exploradas ao longo da história até a chegada dos sistemas de IA generativa e outros modelos de deep learning amplamente utilizados hoje, tal como o ChatGPT.',
            local : 'presential',// presential ou online
            endTime : '10:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Pedro Semcovici',
                    'pronouns': 'Ele/Dele',
                    'role': 'Cientista de Dados e pesquisador na área de PLN',
                    'description': 'Cientista de dados na IBM, atuando principalmente em projetos relacionados ao desenvolvimento de soluções de IA generativa para aulixar jornalistas. Além disso, é pesquisador na área de Processamento de Língua Natural e Análise de Redes Sociais.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/pedro-semcovici/',// opcional
                    'image': Lecture08_PedroSemcovici
                },
                {
                    'name': 'Yago Primerano',
                    'pronouns': 'Ele/Dele',
                    'role': 'Pesquisador no Centro de Inteligência Artificial da USP (C4AI)',
                    'description': 'Sou pesquisador no Centro de Inteligência Artificial da USP, onde realizei uma pesquisa sobre Análise de Redes Sociais e outra sobre PLN. Sou Diretor Geral do Hype, um grupo da EACH dedicado a criar um ambiente de aprendizado de alta qualidade sobre temas relacionados a Dados e IA, além de promover a disseminação do conhecimento para a sociedade. Tenho grande interesse na área de liderança, o que me levou a ser bolsista no curso de Entrepreneurial Leadership durante um intercâmbio na Freie Universität Berlin, na Alemanha.',
                    //'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/yago-primerano',// opcional
                    'image': Lecture08_YagoPrimerano
                },
            ],
        },
        '10:40' : {
            title : 'Intervalo',
            endTime : '11:00',
        },
        '11:00' : {
            sponsor: { // opcional
                'name': 'Kluber Lubrication',
                'image': KluberLogo,
                'url': 'https://www.klueber.com/br/pt/',
            },
            title : 'O que fazer no meu tempo livre após a IA substituir meu trabalho?',
            description : 'Já pensou que a IA pode melhorar em tudo que ela ainda não faz bem? As profissões vão mudar muito em 5/10 anos, com a IA criando vídeos, músicas e até programando melhor que a gente. O que sobra pra nós? Sermos humanos! Vamos discutir nosso papel na tecnologia, onde o "fazer" é menos importante que o "o que" e "como". Além do que aprendemos na faculdade, o que fazemos fora do trabalho também conta muito!',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Bruno Colisse',
                    'pronouns': 'Ele/Dele',
                    'role': 'Especialista em Digitalização',
                    'description': 'Programador, músico e pai, graduado em Ciência da Computação e cursando MBA em A.I. Business Leadership. Atua com digitalização, como Tech Business, interface entre as áreas de negócio e área de tecnologia da informação. Otaku sênior.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/bruno-colisse-00b848b8/',// opcional
                    'image': Lecture09_BrunoColisse
                },
                {
                    'name': 'Mateus Brandão',
                    'pronouns': 'Ele/Dele',
                    'role': 'Especialista em Inovação e Novos Negócios',
                    'description': 'Engenheiro de Materiais com experiência em multinacionais do setor petroquímico na área de Inovação e Comercial, em empresa de grande porte do setor de Logística Marítima especificamente na área de Inovação e em Consultoria Corporativa, com foco no desenvolvimento de projetos de Inovação sob demanda.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/mateus-brand%C3%A3o-lula-912300135/',// opcional
                    'image': Lecture09_MateusBrandao
                },
            ],
        },
        '12:00' : {
            title : 'Almoço',
            endTime : '13:20',
        },
        '13:20' : {
            title : 'Realidades Estendidas e as Novas Fronteiras da Tecnologia',
            description : 'Nesta palestra, exploramos as tecnologias imersivas que estão redefinindo os limites da tecnologia e o que podemos esperar para o futuro: Realidade Aumentada (AR), Realidade Virtual (VR) e o Metaverso. Discutiremos como essas inovações estão transformando a forma como interagimos com o mundo ao nosso redor, desde aplicações práticas em áreas como educação, saúde e entretenimento, até suas implicações sociais e éticas.',
            local : 'presential',// presential ou online
            endTime : '14:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Jefferson Brandão',
                    'pronouns': 'Ele/Dele',
                    'role': 'Frontend Developer',
                    'description': 'Graduado em análise e desenvolvimento de sistema pela FATEC, possui pós graduação em Design UX/UI e atualmente se especializando em desenvolvimento fullstack pela PUC-MG. Atua como desenvolvedor frontend e de Realidade aumentada na Artech Studio e também como facilitador na Junior Achiviemient, levando seu conhecimento pela tecnologia a diversas escolas e faculdade com palestras e workshops.',
                    'instagram': '',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/jeff-brandao/',// opcional
                    'image': Lecture10_JeffBrandao,
                },
                {
                    'name': 'Karolyne Viebrantz',
                    'pronouns': 'Ela/Dela',
                    'role': 'Coordenadora de Projetos XR',
                    'description': 'Artista digital e especialista em Realidade Aumentada para marketing e varejo. Coordenadora de Projetos de Realidade Estendida e Lead 3D Artist na CodeCoast e mentora de AR. Premiada internacionalmente por suas obras em AR e engajada em projetos que incentivam mulheres na tecnologia.',
                    'instagram': '',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/karolyneviebrantz/',// opcional
                    'image': Lecture10_KarolyneViebrantz
                },
                {
                    'name': 'Rodrigo Mulinário',
                    'pronouns': 'Ele/Dele',
                    'role': 'Product Owner',
                    'description': 'Graduado em Game Design, possui pós-graduação em AR/VR e MBA em Digital Manager e Metaverso. Atua como Product Owner na FITec em projetos de XR, com experiência pela GE21 e Lenovo. Também é professor e palestrante em eventos renomados nacionalmente e internacionalmente.',
                    'instagram': '',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/rodrigo-mulinario-ramos/',// opcional
                    'image': Lecture10_RodrigoMulinario,
                },
            ],
        },
        '14:20' : {
            title : 'Intervalo',
            endTime : '14:40',
        },
        '14:40' : {
            title : 'Introdução a UX',
            description : 'Nesta palestra, abordaremos os conceitos fundamentais de UX (User Experience), explorando como o design centrado no usuário impacta a criação de produtos e serviços digitais. Vamos discutir a importância de entender as necessidades e comportamentos dos usuários, bem como as melhores práticas para criar experiências intuitivas e eficientes. Ideal para quem deseja conhecer os princípios de UX e aplicá-los em seus projetos.',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Luli Radfahrer',
                    'pronouns': 'Ele/Dele',
                    'role': 'Professor',
                    'description': 'Luli Radfahrer é professor associado da ECA USP há 31 anos. Trabalha com internet desde 1994 e já foi diretor de algumas das maiores agências de publicidade do país. Hoje é diretor do laboratório de pesquisa acadêmica IDEIA - Interfaces Digitais, Experiências e Inteligências Artificiais e consultor independente em Inovação e Transformação Digital. Escreve a coluna “Datacracia” para a Rádio USP, em que discute e analisa as principais tendências da tecnologia e suas influências na sociedade.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/radfahrer/',// opcional
                    'image': Lecture11_LuliRadfahrer
                },
            ],
        },
        '15:40' : {
            title : 'Intervalo',
            endTime : '16:00',
        },
        '16:00' : {
            title : 'Se você faz API você também é Front-End',
            description : 'Nessa palestra vamos entender melhor o que são as APIs, ou melhor, Interfaces de Programação de Aplicativos, e também definir a diferença de back-end e front-end no contexto de web moderno',
            local : 'presential',// presential ou online
            endTime : '17:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Ana Luiza Sampaio',
                    'pronouns': 'Ela/Dela',
                    'role': 'Engenheira de Software',
                    'description': 'Engenheira do Software no Itaú Unibanco, Líder Técnica na Reprograma e Instrutora de Programação. Veio de uma transição de carreira de Obstetrícia para Desenvolvimento Back-End.',
                    'instagram': 'https://www.instagram.com/analu.io/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/sampaioaanaluiza/',// opcional
                    'image': Lecture12_AnaSampaio
                },
            ],
        },
        '17:00' : {
            title : 'Intervalo',
            endTime : '17:20',
        },
        '17:20' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Tecnologia para Todos: Acessibilidade Digital como Prioridade',
            description : 'Será explorada a importância da acessibilidade na tecnologia, discutindo os desafios enfrentados por pessoas com diferentes tipos de deficiência ao utilizarem plataformas digitais. Também serão apresentadas soluções práticas, como design inclusivo e tecnologias assistivas, demonstrando como a acessibilidade melhora a experiência de todos os usuários. O objetivo é sensibilizar o público e promover a acessibilidade como uma prioridade essencial no desenvolvimento de produtos e serviços digitais',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Felipe Gigante',
                    'pronouns': 'Ele/Dele',
                    'role': 'Desenvolvedor Fullstack e Pesquisador na Área de Acessibilidade',
                    'description': 'Desenvolvedor Fullstack, iniciei minha trajetória no IFSP, onde desenvolvi projetos focados em tecnologias assistivas. Durante o ensino médio, realizei um projeto de extensão com bolsa, unindo tecnologia à alfabetização de pessoas surdas no português brasileiro como segunda língua. Desde então, continuo minhas pesquisas nessa área. No mercado de trabalho, tenho aprofundado minha compreensão das necessidades e desafios em acessibilidade digital.',
                    'instagram': 'https://www.instagram.com/felipegigante',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/felip_gigant/',// opcional
                    'image': Lecture13_FelipeGigante
                },
            ],
        },
        '18:00' : {
            title : 'Jantar',
            endTime : '19:00',
        },
        '19:00' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Notion: Tecnologia e Organização Pessoal',
            description : 'A palestra "Notion: Tecnologia e Organização Pessoal para Estudantes" explora como o Notion pode otimizar a vida acadêmica. Com foco em metas, tarefas, projetos, hábitos e controle financeiro, será mostrado como estudantes podem usar essa ferramenta para aumentar a produtividade e gerenciar suas rotinas de forma integrada. A palestra também conecta a importância da tecnologia com uma abordagem mais ampla de realidade e autoconhecimento, essencial para o sucesso pessoal e acadêmico.',
            local : 'presential',// presential ou online
            endTime : '19:30',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Felippe Oliveira',
                    'pronouns': 'Ele/Dele',
                    'role': 'Estagiário',
                    'description': 'Felippe é um entusiasta do desenvolvimento pessoal e da tecnologia. Ele une suas experiências com estratégias de negócios e automação para criar soluções no campo do bem-estar e produtividade. Trabalha na área de estratégia de clientes da Caixa Vida e Previdência, enquanto desenvolve plataformas digitais e integra inteligência artificial. Também compartilha reflexões sobre estilo de vida, meditação e gestão de tempo, promovendo equilíbrio e crescimento contínuo.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/felippe-oliveira-8084651bb/',// opcional
                    'image': Lecture14_FelippeOliveira
                },
            ],
        },
        '19:30' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Para além da USP: navegando em um mar de possibilidades',
            description : 'Ao longo da palestra serão abordadas oportunidades que existem dentro e fora da USP e como conciliar o estudo com as atividades extracurriculares',
            local : 'presential',// presential ou online
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Amanda Ferreira',
                    'pronouns': 'Ela/Dela',
                    'role': 'Estagiária e co-fundadora da Owl Studio',
                    'description': 'Nascida e criada na periferia da zona norte de São Paulo, fui começar a ter contato com a área tech em 2020, quando entrei no curso técnico em informática integrado ao ensino médio no IFSP. Em 2022 consegui meu primeiro estágio, e poucos meses depois entrei no meu 2° estágio na área. Em 2023 fundei, junto com mais 2 amigos, a Owl Studio, com a qual participamos de uma aceleração de 6 meses da prefeitura de São Paulo, o que nos rendeu a oportunidade de ir na Gamescom Alemanha.',
                    'instagram': 'https://www.instagram.com/amandita_ferre/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/amandamariafs',// opcional
                    'image': Lecture14_AmandaFerreira
                },
            ],
        },
        '20:00' : {
            title : 'Intervalo',
            endTime : '20:20',
        },
        '20:20' : {
            title : 'O inimigo está lá fora, ataque a aplicações web',
            description : 'Imagine um exército de scanners e bots que operam 24 horas, buscando vulnerabilidades na internet. Ferramentas como Shodan e mecanismos de busca indexam essas fraquezas, facilitando a ação de pessoas mal-intencionadas. Como os atacantes agem e como podemos nos defender? Descubra as principais vulnerabilidades e as fases de um pentesting. Junte-se a nós para fortalecer suas defesas e proteger-se online!',
            local : 'presential',// presential ou online
            endTime : '21:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Emilio Simoni',
                    'pronouns': 'Ele/Dele',
                    'role': 'Especialista em Cyber Segurança e Fraudes Digitais',
                    'description': 'Emilio Simoni, atua com tecnologias de proteção no Itaú, fundador da AHT Security, é pesquisador de Cibersegurança, especialista em golpes digitais, OWASP Member, com 20 anos de experiência em cibersegurança, fraudes e golpes digitais e desenvolvimento.\nFocando sempre em inteligência artificial e heurísticas, já gerenciou times como desenvolvimento, inteligência artificial, redteam e threat lab.\nApaixonado por combater fraudes, adora palestrar, é pai do Pedro e Daniel e viciado em Crossfit.',
                    'instagram': 'https://www.instagram.com/emilio.simoni/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/emiliosimoni/',// opcional
                    'image': Lecture15_EmilioSimoni
                },
            ],
        },
    },
    '2024-10-09' : {
        '09:40' : {
            title : 'Iniciação Científica (o quê? por quê? como? quando?)',
            description : 'Essa breve palestra conta um pouco sobre Pesquisa Científica para alunos de graduação e discute como tirar proveito dessa oportunidade que só aparece agora no início da carreira dos alunos.',
            local : 'presential',// presential ou online
            endTime : '10:10',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Daniel Cordeiro',
                    // 'pronouns': 'Ele/Dele',
                    'role': 'Professor Doutor',
                    'description': 'Professor na EACH-USP, Doutor em "Mathématiques et Informatique" pela Université Grenoble Alpes e Mestre e Bacharel em Computação pela USP. É Patrono do CodeLab Leste, que incentiva a criação de ideias inovadoras e o desenvolvimento de inovações tecnológicas. Aprendeu uma coisa ou outra sobre Pesquisa e Inovação ao longo de seus 20 anos de atuação na área. :-)',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/dcordeiro/',// opcional
                    'image': Lecture16_DanielCordeiro
                },
            ],
        },
        '10:10' : {
            sponsor: { // opcional
                'name': 'PET',
                'image': PETLogo,
                'url': 'https://www.instagram.com/petsieach',
            },
            title : 'Ensinar para aprender',
            description : 'As vantagens de ensinar para outras pessoas aquilo que você está tentando aprender',
            local : 'presential',// presential ou online
            endTime : '10:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'André Palácio',
                    'pronouns': 'Ele/Dele',
                    'role': 'Software Engineer Internship',
                    'description': 'Aluno de 3 ano da Graduação em Sistemas de informação, membro do PET-SI a mais de dois anos e entusiasta do mundinho EACH-USP',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/andrepalaciobr/',// opcional
                    'image': Lecture16_AndrePalacio
                },
                {
                    'name': 'Otávio Rosa',
                    'pronouns': 'Ele/Dele',
                    'role': 'Membro PET',
                    'description': 'Olá, sou Otávio e sou membro do PET-SI desde o início deste ano, atualmente atuo nos setores de Patrocínio e Relações Humanas e participo dos projetos Owlficinas, COMPETEC e BXCOMP.',
                    'instagram': 'https://www.instagram.com/otavio_rosaa',// opcional
                    // 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                    'image': Lecture16_OtavioRosa
                },
                {
                    'name': 'Sofia Ferreira',
                    'pronouns': 'Ela/Dela',
                    'role': 'Notion Campus Leader',
                    'description': 'Oi, eu sou a Sofia e sou voluntária no Lab das Minas, bolsista no PET e Campus Leader do Notion aqui na USP!',
                    'instagram': 'https://www.instagram.com/notionatusp',// opcional
                    // 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                    'image': Lecture16_SofiaFerreira
                },
            ],
        },
        '10:40' : {
            title : 'Intervalo',
            endTime : '11:00',
        },
        '11:00' : {
            title : 'Game Design: Enfrentando desafios atuando na área',
            description : 'Nessa palestra, Davi Baptixta conta como foi o processo de aprendizado e todos desafios de trabalhar no mercado de jogos brasileiro em jogos comerciais para computadores, consoles, e celulares. Davi exemplifica como é a rotina e os principais desafios dos game designers contando sua experiência de trabalho em 3 jogos específicos: Avalon, Cobra Kai 2: Dojos Rising, e Rasek, jogos que ele trabalhou durante sua carreira.',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Davi Baptixta',
                    'pronouns': 'Ele/Dele',
                    'role': 'Game Designer e Professor',
                    'description': `Davi Baptixta é game designer, atualmente trabalhando na Dumativa, além de ser sócio fundador da Nano Knight Studio, e professor na FIAP.\n\nJá trabalhou em jogos para as plataformas mobile, pc e console, em títulos como: Cobra Kai 2: Dojo's Rising, Avalon Vivo Keyd, e atualmente trabalha no MMORPG Rasek.\n\nAlém disso, também ensina Game Design por meio de seu curso "GDX", totalmente em português.`,
                    'instagram': 'https://www.instagram.com/baptixta/',// opcional
                    'linkedin' : 'https://linkedin.com/in/baptixta',// opcional
                    'image': Lecture17_DaviBaptista
                },
            ],
        },
        '12:00' : {
            title : 'Almoço',
            endTime : '13:20',
        },
        '13:20' : {
            title : 'Mulheres na Carreira de Games',
            description : 'Conheça a importância das mulheres no mercado de jogos e sua atuação. Partindo de um panorama internacional para o cenário nacional, vamos explorar conquistas, desafios e a relevância da diversidade na indústria de games.',
            local : 'presential',// presential ou online
            endTime : '14:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Lia Fuziy',
                    'pronouns': 'Ela/Dela',
                    'role': 'Presidente da IGDA SP',
                    'description': "Presidente - IGDA São Paulo\nCoordenadora GameDev - Toolkit\nEmbaixadora Women in Games\nProfessora de nível superior na Faculdade Méliès",
                    'instagram': '',// opcional
                    'linkedin' : '',// opcional
                    'image': Lecture18_LiaFuziy
                },
            ],
        },
        '14:20' : {
            title : 'Intervalo',
            endTime : '14:40',
        },
        '14:40' : {
            title : 'Cenário atual de cibersegurança, desafios e oportunidades',
            description : 'A palestra explora as demandas crescentes por profissionais de segurança digital, destacando os principais desafios do setor e as oportunidades de carreira. O foco está nas áreas de maior demanda, nas habilidades essenciais e nas estratégias para aproveitar as crescentes vagas no mercado de cibersegurança.',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Nycholas Szucko',
                    'pronouns': 'Ele/Dele',
                    'role': 'Conselheiro',
                    'description': 'Gerente de Vendas de Território experiente, com um histórico comprovado de atuação na indústria de segurança de redes e computadores. Habilidade em Armazenamento, Gestão de Relacionamento com o Cliente (CRM), Estratégia de Entrada no Mercado, Estratégia de Canais e Gestão de Serviços de TI. Profissional de vendas altamente qualificado, com especialização como Gerente de Canais, focado em Negócios/Comércio Geral pela Channels University.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/nszucko',// opcional
                    'image': Lecture19_NycholasSzucko
                },
            ],
        },
        '15:40' : {
            title : 'Intervalo',
            endTime : '16:00',
        },
        '16:00' : {
            title : 'Automatizando sua esteira com Github Actions',
            description : 'Já pensou em automatizar a criação de Pull requests para subidas em ambientes como homologação e produção? Cansou de validar se o código que foi alterado vai quebrar? Vem comigo conhecer mais sobre o Github Actions e aprender a automatizar sua pipeline de CI/CD.',
            local : 'presential',// presential ou online
            endTime : '17:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Mayumi Shingaki',
                    'pronouns': 'Ela/Dela',
                    'role': 'Engenheira de Software Senior',
                    'description': 'Meu nome é Mayumi e trabalho na área há 7 anos e sou voluntária em duas comunidades técnicas - NodeBR e WoMakersCode. Atualmente sou Engenheira de Software Senior e também Tech Lead no Itaú. Sou Microsoft MVP, crio conteúdo no @mayumidev e adoro explorar coisas novas pra fazer.',
                    'instagram': 'https://www.instagram.com/mayumidev/',// opcional
                    'linkedin' : 'https://br.linkedin.com/in/mayumi-shingaki',// opcional
                    'image': Lecture20_MayumiShingaki
                },
            ],
        },
        '17:00' : {
            title : 'Intervalo',
            endTime : '17:20',
        },
        '17:20' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Análise de Redes Sociais Criminais: o desafio dos crimes digitais',
            description : 'Análise de Redes Sociais como método de análise criminal para instrumentalizar nova abordagem no campo investigativo visando um combate mais efetivo ao crime organizado',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Kerlly Barbara Mariano',
                    'pronouns': 'Ela/Dela',
                    'role': 'Funcionária pública',
                    'description': 'Kerlly Barbara Mariano dos Santos é funcionária pública há 11 anos e professora de cursos voltados à análise de dados. Graduanda em Engenharia da Computação pela UNIVESP, possui especialização em análise de dados e é aluna especial no mestrado em Sistemas de Informação na USP. Possui diversas qualificações em cibersegurança, crimes digitais, e investigação criminal. Eternamente uma curiosa e aprendiz do mundo.',
                    'instagram': 'https://www.instagram.com/kerbms/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/kerlly-santos/',// opcional
                    'image': Lecture21_KerllyBarbara
                },
            ],
        },
        '18:00' : {
            title : 'Jantar',
            endTime : '19:00',
        },
        '19:00' : {
            title : 'Ambiente de Tech para neurodivergentes e intersseccionalizados',
            description : 'Contar um pouco das minhas experiências de vida como uma mulher autista, superdotada, tdah, parda, lésbica no meio profissional e na construção de carreira em tecnologia. Falar sobre inclusão, práticas diárias, treinos em comunicação, desafios, rede de apoio, lutas e desenvolvimento.',
            local : 'presential',// presential ou online
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Karina de Oliveira',
                    'pronouns': 'Ela/Dela',
                    'role': 'Arquiteta Corporativa e Engenheira de Computação',
                    'description': 'Com mais de uma década de experiência em tecnologia e formada em Engenharia de Computação, ofereço consultoria personalizada para ajudar você a alcançar seus objetivos de carreira.\n\n🌈 Mentoro mulheres na tecnologia, pessoas com deficiência e membros da comunidade LGBTQIA+, promovendo um ambiente de trabalho inclusivo e seguro.',
                    'instagram': 'https://www.instagram.com/karinaoliveira.tea/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/karina-de-oliveira-0341b557/',// opcional
                    'image': Lecture22_KarinaOliveira
                },
            ],
        },
        '20:00' : {
            title : 'Intervalo',
            endTime : '20:20',
        },
        '20:20' : {
            title : 'Digital Experience: como a tecnologia gera melhores jornadas para os clientes',
            description : 'Nesta palestra, vamos explorar como a tecnologia tem transformado a forma como as empresas criam experiências digitais inovadoras e envolventes para seus clientes. Abordaremos o impacto de ferramentas digitais, dados e automação na jornada do consumidor, destacando estratégias que melhoram a interação, personalizam o atendimento e aumentam a satisfação do cliente no ambiente digital.',
            local : 'presential',// presential ou online
            endTime : '21:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Wellington Silva',
                    'pronouns': 'Ele/Dele',
                    'role': 'Diretor de Tecnologia',
                    'description': 'Wellington José, mestre em empreendedorismo pela FEA-USP, é Diretor de Tecnologia na Riachuelo e Top Voice LinkedIn 2024. Professor de pós-graduação na FIAP, ensina CX, Produtos Digitais e Varejo Omnicanal. Ex-CTO da AMARO, tem vasta experiência em times digitais na Nextel, Mutant e Portugal Telecom. Analista de Sistemas, foca em entregas digitais relevantes e eficiência organizacional. Desenvolve trilhas de bootcamp para capacitar profissionais com tecnologia.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/welljose/',// opcional
                    'image': Lecture23_WellingtonSilva
                },
            ],
        },
    },
    '2024-10-10' : {
        '09:40' : {
            sponsor: { // opcional
                'name': 'Hype',
                'image': HypeLogo,
                'url': 'https://www.instagram.com/hype.usp/',
            },
            title : 'O Bicho-Papão da IA - Porque (não) temer',
            description : 'IA e suas influências culturais e no mercado de trabalho',
            local : 'presential',// presential ou online
            endTime : '10:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Breno Nogueira',
                    'pronouns': 'Ele/Dele',
                    'role': 'Desenvolvedor de Automação de Dados e Analytics',
                    'description': 'Sou técnico de informática pelo IFSP, e hoje sou aluno de Sistemas de Informações na EACH, participante do Hype no setor de conteúdos. Trabalho hoje na IBM Consulting como Desenvolvedor de Automação de Dados e Analytics.',
                    'instagram': 'https://www.instagram.com/breno.nogs/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/breno-nogueira-90444a187',// opcional
                    'image': Lecture24_BrenoNogueira
                },
            ],
        },
        '10:40' : {
            title : 'Intervalo',
            endTime : '11:00',
        },
        '11:00' : {
            title : 'Dia a dia de um Desenvolvedor',
            description : 'Como é o dia a dia de um Gerente na TOTVS, vai falar sobre linguagens especificas.',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Jandir Deodato',
                    'pronouns': 'Ele/Dele',
                    'role': 'Gerente',
                    'description': 'Uma pessoa comunicativa e generalista.',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/jandir-deodato-9660b228/',// opcional
                    'image': Lecture25_JandirDeodato
                },
            ],
        },
        '12:00' : {
            title : 'Almoço',
            endTime : '13:20',
        },
        '13:20' : {
            title : 'IAcessível: Quando a Máquina Aprende a Ser Inclusiva',
            description : 'A palestra abordará a importância da IA generativa para a inclusão de pessoas com deficiência. O objetivo é demonstrar que a inteligência artificial atua como um copiloto em nosso dia a dia, auxiliando-nos em tarefas como construção de apresentações, formulários, planilhas e e-mails. Além disso, será discutido como a IA pode auxiliar desenvolvedores e equipes a criar códigos e produtos mais acessíveis, seguindo as diretrizes da WCAG.',
            local : 'presential',// presential ou online
            endTime : '14:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Giovanne Bertotti',
                    'pronouns': 'Ele/Dele',
                    'role': 'Analista de Qualidade III',
                    'description': 'Olá, Eu sou o Giovanne sou pessoa com deficiência visual e sou especialista de acessibilidade digital na B3. Tenho 33 anos e sou um aficionado por tecnologia. Sou psicólogo clínico e também palestrante. Hoje tenho uma paixão pela t.i e sou responsável pela mudança cultural de acessibilidade digital e arquitetônica da bolsa de valores do Brasil.',
                    'instagram': '',// opcional
                    'linkedin' : 'https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com.br/&sessionRedirect=https%3A%2F%2Fbr.linkedin.com%2Fin%2Fgiovanne-bertotti-942299181',// opcional
                    'image': Lecture26_GiovanneBertotti
                },
                {
                    'name': 'Flavia Bertotti',
                    'pronouns': 'Ela/Dela',
                    'role': 'Especialista de Acessibilidade Digital',
                    'description': 'Sou a Flavia, tenho 34 anos e sou pessoa com deficiência Visual. Sou especialista de acessibilidade digital na GFT Brasil, consultoria alemã que oferece soluções em tecnologia, além de atuar também como psicóloga clínica. Sou casada com o Giovanne e mãe do pequeno Lucca de 2 anos. Meu trabalho é garantir que sites e aplicações ofereçam acessibilidade, garantindo assim que serviços e produtos possam ser acessados por todas as pessoas, independentemente de terem ou não algum tipo de deficiência.',
                    'instagram': '',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/fl%C3%A1via-martins-bertotti-a8a978205/',// opcional
                    'image': Lecture26_FlaviaMartins
                },
            ],
        },
        '14:20' : {
            title : 'Intervalo',
            endTime : '14:40',
        },
        '14:40' : {
            sponsor: { // opcional
                'name': 'EiTS - EACH in The Shell_',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/eachintheshell/',
            },
            title : 'Análise Forense em Rede: Extraindo Arquivos com o Wireshark',
            description : 'Será abordado o tema de redes dentro da área de segurança da informação, em conjunto com a aplicação prática de extração de arquivos a partir de uma captura de tráfego de pacotes no Wireshark.',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : 'Workshop',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome da palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture00_NomeSobrenome
                // },
            ],
        },
        '15:40' : {
            title : 'Intervalo',
            endTime : '16:00',
        },
        '16:00' : {
            title : 'Terminei, só falta...Testar?',
            description : 'Venha descobrir como os testes são a chave para o sucesso do seu software, explorando uma variedade de tipos de testes que vão te ajudar a construir uma estratégia imbatível e se tornar um verdadeiro ninja na luta contra os bugs! Junte-se a nós para entender a arte de garantir a qualidade do software. Não perca essa chance de elevar suas habilidades e se destacar no universo dos testes!',
            local : 'presential',// presential ou online
            endTime : '17:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Monica Craveiro',
                    'pronouns': 'Ela/Dela',
                    'role': 'Desenvolvedora Back-end',
                    'description': 'Carioca, Bacharel em Sistemas de Informação e Matemática, Desenvolvedora Back-end, ex-patinadora artística, ex-aluna do [des]programe, {reprograma} e DigitalHouse, Professora de Programação, Palestrante, Apresentadora/Mestre de Cerimônias e Participante de Diversos Eventos na área de Tecnologia, Coordenadora e Voluntária em Diversas Comunidades de TI, Embaixadora da Programaria, Host do Canal da NodeBR do YouTube e Criadora de Conteúdo para as Redes Sociais.',
                    'instagram': 'https://www.instagram.com/mocraveirodev/',// opcional
                    'linkedin' : 'https://br.linkedin.com/in/mocraveirodev',// opcional
                    'image': Lecture28_MonicaCraveiro
                },
            ],
        },
        '17:00' : {
            title : 'Intervalo',
            endTime : '17:20',
        },
        '17:20' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Engenharia de IA Aplicada: A Profissão do Futuro',
            description : 'A palestra irá abordar o que faz um engenheiro de IA aplicada, como funciona a recém criada carreira, conceitos básicos de IA generativa, quais as diferenças entre o cientista de dados e o engenheiro de IA aplicada e por fim, oportunidades no mercado.',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Aluísio Amorim',
                    'pronouns': 'Ele/Dele',
                    'role': 'Engenheiro de IA Aplicada',
                    'description': 'Aluisio é um engenheiro de software full-stack pleno, que tem se especializado em inteligência artificial generativa aplicada a produto',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/aluisio-amorim-b19a701ba/',// opcional
                    'image': Lecture29_AluisioAmorim
                },
            ],
        },
        '18:00' : {
            title : 'Jantar',
            endTime : '19:00',
        },
        '19:00' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '19:30',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture30_NomeSobrenome
                // },
            ],
        },
        '19:30' : {
            title : 'Desmistificando Pós-graduação em SI',
            description : 'A palestra tem a intenção de simplificar e sanar dúvidas sobre o PPgSI. Irá cobrir como entrar no programa, como as coisas funcionam, oportunidades e dicas sobre a pós em SI na EACH.',
            local : 'presential',// presential ou online
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Felipe Furquim',
                    'pronouns': 'Ele/Dele',
                    'role': 'Engenheiro de Software/Mestrando',
                    'description': 'Ex-aluno de SI, atualmente fazendo mestrado no programa de Pós Graduação de Sistemas de informação.',
                    'instagram': 'https://www.instagram.com/fvfurquim/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/felipe-furquim-b26a2b196',// opcional
                    'image': Lecture30_FelipeFurquim
                },
            ],
        },
        '20:00' : {
            title : 'Intervalo',
            endTime : '20:20',
        },
        '20:20' : {
            title : 'UX para DEV - Não precisa ser designer para projetar experiências',
            description : 'Nesta palestra veremos como os desenvolvedores podem contribuir para uma excelente experiência do usuário, mesmo sem serem designers profissionais e o porque pensar na experiência é algo que toda a equipe precisa pensar. Aprenda dicas práticas e insights valiosos para aprimorar a usabilidade e a satisfação do usuário em suas próprias criações.',
            local : 'presential',// presential ou online
            endTime : '21:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'David Arty',
                    'pronouns': 'Ele/Dele',
                    'role': 'Designer/Dono',
                    'description': 'David Arty, Designer especialista em Design de interação visual, Formado em Design Gráfico e Pós Graduado em UX Design. Empreendedor e entusiasta  por tecnologia, trabalha no mercado criativo desde 2009, atuando também como professor, consultor e palestrante. É fundador do Chief of Design que trata-se de um conglomerado educacional que conta com mais de 200k seguidores nas redes sociais.',
                    'instagram': 'https://www.instagram.com/chiefofdesign.br',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/davidarty/',// opcional
                    'image': Lecture31_DavidArty
                },
            ],
        },
    },
    '2024-10-11' : {
        '09:40' : {
            title : 'Plataforma de Dados: A base para a tomada de decisões',
            description : 'Nesta palestra, exploraremos a importância e o impacto de uma plataforma de dados robusta e eficaz no ambiente empresarial moderno. A capacidade de coletar, armazenar, processar e analisar grandes volumes de dados se tornou uma vantagem competitiva crucial para as organizações. Discutiremos os principais componentes de uma plataforma de dados, desde a ingestão de dados em tempo real até a entrega de insights acionáveis por meio de visualizações e análises avançadas.',
            local : 'presential',// presential ou online
            endTime : '10:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Alexandre Tavares',
                    'pronouns': 'Ele/Dele',
                    'role': 'Arquiteto de BigData',
                    'description': 'Alexandre Tavares é um profissional de tecnologia com vasta experiência em arquitetura de dados, implementação de Plataformas de Dados e cultura de dados. Ao longo de sua carreira, liderou projetos inovadores em grandes empresas, promovendo a transformação digital e a eficiência operacional.',
                    'instagram': '',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/alexandre-tavares/',// opcional
                    'image': Lecture32_AlexandreTavares
                },
            ],
        },
        '10:40' : {
            title : 'Intervalo',
            endTime : '11:00',
        },
        '11:00' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'LangChain: IA para além da generativa',
            description : 'Iremos tratar sobre o LangChain. Que é uma biblioteca que facilita a construção de aplicações de NLP utilizando LLMs através de workflows que agilizam integrações e simplificando diversos processos. Iremos abordar tanto o LangChain quanto esses termos necessários para o entendimento e mostrar que IA não é só chatgpt',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Stephanto',
                    'pronouns': 'Ele/Dele',
                    'role': 'Arquiteto de Soluções',
                    'description': 'Apaixonado por tecnologia desde criança, estudante de programação desde 2018, é formado em Técnico em Informática pela ETEC e cursando o 8º semestre de Sistemas de Informação na EACH. Trabalha como arquiteto de soluções em uma Startup de Inteligência artificial e é empreendedor nas horas vagas',
                    'instagram': 'https://www.instagram.com/v.stephanto/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/vinicius-stephanto',// opcional
                    'image': Lecture33_ViniciusStephanto
                },
                {
                    'name': 'Vitor Cavalcante',
                    'pronouns': 'Ele/Dele',
                    'role': 'Estagiário em Desenvolvimento de Software',
                    'description': 'Estudante de tecnologia desde 2018, sempre procurando novos desafios e problemas que possam ser resolvidos com tecnologia, formado em Técnico de informática pela ETEC, atualmente está no último ano da graduação, faz parte da Síntese Jr há 2 anos e meio. Trabalha em uma startup como desenvolvedor de software fullstack.',
                    'instagram': 'https://www.instagram.com/v.cavalcante9?igsh=MXE0ZmZvMHM1ZWpzNA==',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/vitor-cavalcante-1b309020b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',// opcional
                    'image': Lecture33_VitorCavalcante
                },
            ],
        },
        '12:00' : {
            title : 'Almoço',
            endTime : '13:20',
        },
        '13:20' : {
            title : 'Testes de Performance',
            description : 'Não basta apenas ter um software que funciona, é preciso que atenda as expectativas de tempo de resposta e de volume de transações. Vamos discutir os pontos chaves e indicar como iniciar neste universo profissional onde qualidade rima com velocidade.',
            local : 'presential',// presential ou online
            endTime : '14:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'José Correia',
                    'pronouns': 'Ele/Dele',
                    'role': 'Especialista em Qualidade de Software',
                    'description': '29 anos de atuação em projetos de desenvolvimento e teste de software, com concentração no mercado financeiro, com passagem por empresas como B3 (através da 7COMm) e Itaú. Fundador da Iterasys, principal centro de treinamento sobre Qualidade no Brasil, com mais de 43 mil alunos formados. Certificado CTFL-AT/MBT, CTAL-Full, CSTE, CSQA, entre outras.',
                    'instagram': '',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/josecorreia',// opcional
                    'image': Lecture34_JoseCorreia
                },
            ],
        },
        '14:20' : {
            title : 'Intervalo',
            endTime : '14:40',
        },
        '14:40' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Subindo um banco de dados com containers',
            description : 'Sistemas gerenciadores de bancos de dados (SGBDs) são ferramentas complexas, feitas para atender bancos de dados gigantescos e complexos. Por conta disso, sua instalação por vezes envolve múltiplas etapas e requer alguns conhecimentos prévios de administração de sistemas operacionais. Podemos deixar essa instalação mais simples utilizando uma das tecnologias mais populares da computação em nuvem: containers',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : 'Workshop',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Renan Nakazawa',
                    'pronouns': 'Ele/Dele',
                    'role': 'Engenheiro de Confiabilidade de Sites (SRE)',
                    'description': 'Formado em Sistemas de Informação pela maravilhosa EACH; um eterno aprendiz da vida e da TI; atualmente trabalhando na VTEX como SRE; entusiasta de karaokê, jogos de tabuleiro, RPGs (de mesa e eletrônicos) e jogos de luta',
                    'instagram': 'https://www.instagram.com/renan.nakazawa',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/nkzren',// opcional
                    'image': Lecture35_RenanNakazawa
                },
            ],
        },
        '15:40' : {
            title : 'Intervalo',
            endTime : '16:00',
        },
        '16:00' : {
            title : 'Do Zero ao Top Voice: Carreira Impactante na Tecnologia',
            description : 'Descubra os segredos de uma carreira de sucesso na tecnologia! Nesta palestra, vou compartilhar minha jornada que foi do zero a LinkedIn Top Voice, revelando as estratégias e insights que me levaram ao topo. Aprenda dicas valiosas para construir e destacar sua carreira na tecnologia, desde as primeiras etapas até o reconhecimento profissional. Essa palestra é  para todos que buscam impactar e transformar suas trajetórias profissionais no mundo tecnológico.',
            local : 'presential',// presential ou online
            endTime : '17:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Laura Damaceno',
                    'pronouns': 'Ela/Dela',
                    'role': 'Cientista de Dados Sênior e Mestranda em Computação',
                    'description': 'Cientista de dados sênior e LinkedIn Top Voice, mestranda em Ciências da Computação com ênfase em IA, apaixonada por desvendar histórias através dos dados. Co-fundadora da AI Girls, comunidade que capacita mulheres brasileiras em IA e ciência de dados, e fundadora da Laura Data Talks Academy, com a missão de ajudar pessoas a construir e trilhar carreiras de sucesso no mundo da Ciência de Dados e Inteligência Artificial.',
                    'instagram': 'https://www.instagram.com/laura_data_talks?igsh=ZDR6bnlmMmV2d3p5',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/laura-data-talks/',// opcional
                    'image': Lecture36_LauraDamaceno
                },
            ],
        },
        '17:00' : {
            title : 'Intervalo',
            endTime : '17:20',
        },
        '17:20' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Notion Sites - fazendo o seu portfolio',
            description : 'Utilização da ferramenta de sites do Notion para criar um portfolio',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Sofia Ferreira',
                    'pronouns': 'Ela/Dela',
                    'role': 'Notion Campus Leader',
                    'description': 'Oi, eu sou a Sofia e sou voluntária no Lab das Minas, bolsista no PET e Campus Leader do Notion aqui na USP!',
                    'instagram': 'https://www.instagram.com/notionatusp/',// opcional
                    // 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                    'image': Lecture37_SofiaFerreira
                },
            ],
        },
        '18:00' : {
            title : 'Jantar',
            endTime : '19:00',
        },
        '19:00' : {
            sponsor: { // opcional
                'name': 'SSI Talks',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/semanadesi',
            },
            title : 'Manual da graduação: como extrair o máximo do curso',
            description : 'Iremos explorar as oportunidades da graduação além do óbvio, discutindo como tomar decisões baseadas nas expectativas de cada pessoa sobre carreira e aprendizado',
            local : 'presential',// presential ou online
            endTime : '19:30',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Tiago Fraga',
                    'pronouns': 'Ele/Dele',
                    'role': 'Software Engineer Intern',
                    'description': 'Tiago Fraga é Software Engineer Intern na Amazon, aluno do terceiro ano da graduação e atual vice-presida acadêmico do DASI. Suas principais contribuições com o ambiente acadêmico na graduação em SI são as oportunidades de conexão entre os alunos e empresas',
                    // 'instagram': 'https://www.instagram.com/semanadesi',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/tiago-fraga342/',// opcional
                    'image': Lecture38_TiagoFraga
                },
            ],
        },
        '19:30' : {
            sponsor: { // opcional
                'name': 'DASI (Diretório Acadêmico de Sistemas de Informação)',
                'image': SSITalksLogo,
                'url': 'https://www.instagram.com/dasiusp',
            },
            title : 'Técnicas Avançadas de Aprendizado e Memorização',
            description : 'Como podemos absorver mais informações e guardá-las no longo prazo de maneira mais eficiente? Observaremos na palestra diversas formas que podemos aprender novos conhecimentos e quais os melhores para cada situação.',
            local : 'presential',// presential ou online
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Leonardo Boeing',
                    'pronouns': 'Ele/Dele',
                    'role': 'Analista de Risco',
                    'description': 'Natural de Curitiba, apaixonado por aprender novas habilidades e conhecimentos, sempre buscando meios de inserir todo o aprendizado da vida no dia a dia.',
                    'instagram': 'https://www.instagram.com/leo_boeing/',// opcional
                    // 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                    'image': Lecture39_LeonardoBoeing
                },
            ],
        },        
        '20:00' : {
            title : 'Intervalo',
            endTime : '20:20',
        },
        '20:20' : {
            title : 'Encerramento',
            endTime : '21:20',
        }
    }
}

export default schedule