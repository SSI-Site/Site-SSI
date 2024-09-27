// assets
import Lecture00_NomeSobrenome from '../public/images/lecture_imgs/00-Member_Shadow.png'

// speakers
import Lecture01_WheslleyRimar from '../public/images/lecture_imgs/01-Wheslley_Rimar.png'
import Lecture02_EvandroFigueiredo from '../public/images/lecture_imgs/02-Evandro_Figueiredo.png'
// import Lecture03_NomeSobrenome from '../public/images/lecture_imgs/03-Nome_Sobrenome.png'
import Lecture04_VanessaPoskus from '../public/images/lecture_imgs/04-Vanessa_Poskus.png'
// import Lecture05_NomeSobrenome from '../public/images/lecture_imgs/05-Nome_Sobrenome.png'
// import Lecture06_NomeSobrenome from '../public/images/lecture_imgs/06-Nome_Sobrenome.png'
// import Lecture07_NomeSobrenome from '../public/images/lecture_imgs/07-Nome_Sobrenome.png'
// import Lecture08_NomeSobrenome from '../public/images/lecture_imgs/08-Nome_Sobrenome.png'
// import Lecture09_NomeSobrenome from '../public/images/lecture_imgs/09-Nome_Sobrenome.png'
import Lecture10_JeffBrandao from '../public/images/lecture_imgs/10-Jeff_Brandao.jpeg'
import Lecture10_KarolyneViebrantz from '../public/images/lecture_imgs/10-Karolyne_Viebrantz.png'
import Lecture10_RodrigoMulinario from '../public/images/lecture_imgs/10-Rodrigo_Mulinario.jpeg'
// import Lecture11_NomeSobrenome from '../public/images/lecture_imgs/11-Nome_Sobrenome.png'
// import Lecture12_NomeSobrenome from '../public/images/lecture_imgs/12-Nome_Sobrenome.png'
// import Lecture13_NomeSobrenome from '../public/images/lecture_imgs/13-Nome_Sobrenome.png'
// import Lecture14_NomeSobrenome from '../public/images/lecture_imgs/14-Nome_Sobrenome.png'
import Lecture15_EmilioSimoni from '../public/images/lecture_imgs/15-Emilio_Simoni.png'
// import Lecture16_NomeSobrenome from '../public/images/lecture_imgs/16-Nome_Sobrenome.png'
import Lecture17_DaviBaptista from '../public/images/lecture_imgs/17-Davi_Baptista.png'
import Lecture18_LiaFuziy from '../public/images/lecture_imgs/18-Lia_Fuziy.jpg'
// import Lecture19_NomeSobrenome from '../public/images/lecture_imgs/19-Nome_Sobrenome.png'
import Lecture20_MayumiShingaki from '../public/images/lecture_imgs/20-Mayumi_Shingaki.png'
import Lecture21_KarinaOliveira from '../public/images/lecture_imgs/21-Karina_Oliveira.jpeg'
// import Lecture22_NomeSobrenome from '../public/images/lecture_imgs/22-Nome_Sobrenome.png'
// import Lecture23_NomeSobrenome from '../public/images/lecture_imgs/23-Nome_Sobrenome.png'
// import Lecture24_NomeSobrenome from '../public/images/lecture_imgs/24-Nome_Sobrenome.png'
// import Lecture25_NomeSobrenome from '../public/images/lecture_imgs/25-Nome_Sobrenome.png'
import Lecture26_GiovanneBertotti from '../public/images/lecture_imgs/26-Giovanne_Bertotti.jpeg'
import Lecture26_FlaviaMartins from '../public/images/lecture_imgs/26-Flavia_Martins.jpeg'
// import Lecture27_NomeSobrenome from '../public/images/lecture_imgs/27-Nome_Sobrenome.png'
import Lecture28_MonicaCraveiro from '../public/images/lecture_imgs/28-Monica_Craveiro.png'
// import Lecture29_NomeSobrenome from '../public/images/lecture_imgs/29-Nome_Sobrenome.png'
// import Lecture30_NomeSobrenome from '../public/images/lecture_imgs/30-Nome_Sobrenome.png'
import Lecture31_DavidArty from '../public/images/lecture_imgs/31-David_Arty.png'
import Lecture32_AlexandreTavares from '../public/images/lecture_imgs/32-Alexandre_Tavares.jpg'
// import Lecture33_NomeSobrenome from '../public/images/lecture_imgs/33-Nome_Sobrenome.png'
import Lecture34_JoseCorreia from '../public/images/lecture_imgs/34-Jose_Correia.jpg'
// import Lecture35_NomeSobrenome from '../public/images/lecture_imgs/35-Nome_Sobrenome.png'
import Lecture36_LauraDamaceno from '../public/images/lecture_imgs/36-Laura_Damaceno.jpeg'
// import Lecture37_NomeSobrenome from '../public/images/lecture_imgs/37-Nome_Sobrenome.png'
// import Lecture38_NomeSobrenome from '../public/images/lecture_imgs/38-Nome_Sobrenome.png'

// sponsors / entities logos
// import HypeLogo from '../public/images/sponsors/hype.svg'
import RocketseatLogo from '../public/images/sponsors/rocketseat.svg'

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
        '09:40' : {
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture03_NomeSobrenome
                // },
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture05_NomeSobrenome
                // },
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
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture06_NomeSobrenome
                // },
            ],
        },
        '20:00' : {
            title : 'Intervalo',
            endTime : '20:20',
        },
        '20:20' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '21:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture07_NomeSobrenome
                // },
            ],
        },
    },
    '2024-10-08' : {
        '09:40' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '10:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture08_NomeSobrenome
                // },
            ],
        },
        '10:40' : {
            title : 'Intervalo',
            endTime : '11:00',
        },
        '11:00' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture09_NomeSobrenome
                // },
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture11_NomeSobrenome
                // },
            ],
        },
        '15:40' : {
            title : 'Intervalo',
            endTime : '16:00',
        },
        '16:00' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '17:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture12_NomeSobrenome
                // },
            ],
        },
        '17:00' : {
            title : 'Intervalo',
            endTime : '17:20',
        },
        '17:20' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture13_NomeSobrenome
                // },
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
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture14_NomeSobrenome
                // },
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '10:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture16_NomeSobrenome
                // },
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture19_NomeSobrenome
                // },
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
            title : 'Ambiente de Tech para neurodivergentes e intersseccionalizados',
            description : 'Contar um pouco das minhas experiências de vida como uma mulher autista, superdotada, tdah, parda, lésbica no meio profissional e na construção de carreira em tecnologia. Falar sobre inclusão, práticas diárias, treinos em comunicação, desafios, rede de apoio, lutas e desenvolvimento.',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Karina de Oliveira',
                    'pronouns': 'Ela/Dela',
                    'role': 'Arquiteta Corporativa e Engenheira de Computação',
                    'description': 'Com mais de uma década de experiência em tecnologia e formada em Engenharia de Computação, ofereço consultoria personalizada para ajudar você a alcançar seus objetivos de carreira.\n\n🌈 Mentoro mulheres na tecnologia, pessoas com deficiência e membros da comunidade LGBTQIA+, promovendo um ambiente de trabalho inclusivo e seguro.',
                    'instagram': 'https://www.instagram.com/karinaoliveira.tea/',// opcional
                    'linkedin' : 'https://www.linkedin.com/in/karina-de-oliveira-0341b557/',// opcional
                    'image': Lecture21_KarinaOliveira
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
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture22_NomeSobrenome
                // },
            ],
        },
        '20:00' : {
            title : 'Intervalo',
            endTime : '20:20',
        },
        '20:20' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '21:20',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture23_NomeSobrenome
                // },
            ],
        },
    },
    '2024-10-10' : {
        '09:40' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '10:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture24_NomeSobrenome
                // },
            ],
        },
        '10:40' : {
            title : 'Intervalo',
            endTime : '11:00',
        },
        '11:00' : {
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture25_NomeSobrenome
                // },
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture27_NomeSobrenome
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture29_NomeSobrenome
                // },
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
            endTime : '20:00',
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '12:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture33_NomeSobrenome
                // },
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '15:40',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture35_NomeSobrenome
                // },
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
            title : 'Em breve...',
            description : '',
            local : 'presential',// presential ou online
            endTime : '18:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture37_NomeSobrenome
                // },
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
            endTime : '20:00',
            activityType : '',// se não for 'Workshop', deixar vazio
            speakers : [
                // {
                //     'name': 'Nome do palestrante',
                //     'pronouns': 'Ele/Dele',
                //     'role': 'Cargo',
                //     'description': 'Descrição do palestrante',
                //     'instagram': 'https://www.instagram.com/semanadesi',// opcional
                //     'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
                //     'image': Lecture38_NomeSobrenome
                // },
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