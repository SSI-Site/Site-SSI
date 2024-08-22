// assets
import Lecture00_SpeakerName01 from '../public/images/lecture_imgs/00-Member_Shadow.png'
import Lecture00_SpeakerName02 from '../public/images/lecture_imgs/00-Member_Shadow.png'

import Lecture01_CarlaVieira from '../public/images/lecture_imgs/01-Carla_Vieira.jpeg'
import Lecture02_JorgeMaia from '../public/images/lecture_imgs/02-Jorge_Maia.png'
import Lecture03_FernandoDeCome from '../public/images/lecture_imgs/03-Fernando_de_Come.jpeg'
import Lecture04_FelipeFurquim from '../public/images/lecture_imgs/04-Felipe_Furquim.jpg'
import Lecture04_RenanNakazawa from '../public/images/lecture_imgs/04-Renan_Nakazawa.jpg'
import Lecture05_KamilaSantos from '../public/images/lecture_imgs/05-Kamila_Santos.png'
import Lecture06_MiltonLeal from '../public/images/lecture_imgs/06-Milton_Leal.jpg'
import Lecture07_JakelinyGracielly from '../public/images/lecture_imgs/07-Jakeliny_Gracielly.jpg'
import Lecture08_AndreJuan from '../public/images/lecture_imgs/08-Andre_Juan.jpeg'
// import Lecture09_GustavoAlmeida from '../public/images/lecture_imgs/09-Speaker_Name_01.png'
// import Lecture09_EduardaLima from '../public/images/lecture_imgs/09-Speaker_Name_01.png'
// import Lecture09_YagoPrimerano from '../public/images/lecture_imgs/09-Speaker_Name_01.png'
// import Lecture09_FelipeMateos from '../public/images/lecture_imgs/09-Speaker_Name_01.png'
import Lecture10_LeonardoDalri from '../public/images/lecture_imgs/10-Leonardo_Dalri.jpg'
import Lecture11_AlineSouza from '../public/images/lecture_imgs/11-Aline_Souza.jpeg'
import Lecture12_LuizPaulo from '../public/images/lecture_imgs/12-Luiz_Paulo_Carvalho.png'
import Lecture13_JanainaMoreira from '../public/images/lecture_imgs/13-Janaina_Moreira.jpeg'
import Lecture14_JulianaMascarenhas from '../public/images/lecture_imgs/14-Juliana_mascarenhas.png'
import Lecture15_AndrewRosario from '../public/images/lecture_imgs/15-Andrew_Rosario.jpeg'
import Lecture16_LuizDeOliveira from '../public/images/lecture_imgs/16-Luiz_de_Oliveira.png'
import Lecture17_DaviBaptista from '../public/images/lecture_imgs/17-Davi_Baptista.jpg'
import Lecture18_CarlosRischioto from '../public/images/lecture_imgs/18-Carlos_Rischioto.jpeg'
// import Lecture19_GiovannaArana from '../public/images/lecture_imgs/19-Speaker_Name_01.png'
// import Lecture19_GuilhermeFernandes from '../public/images/lecture_imgs/19-Speaker_Name_01.png'
import Lecture20_MeyrileneAvelino from '../public/images/lecture_imgs/20-Meirylene_Avelino.jpg'
import Lecture21_AntonioCarlos from '../public/images/lecture_imgs/21-Antonio_Carlos_Meira_Neto.jpg'
import Lecture22_LucianoDigiampietri from '../public/images/lecture_imgs/22-Luciano_Digiampietri.jpg'
import Lecture23_CarolinaGalvao from '../public/images/lecture_imgs/23-Carolina_Galvão_de_Oliveira.jpg'
import Lecture24_ClaraSantos from '../public/images/lecture_imgs/24-Clara_Santos.jpeg'
import Lecture25_GiuliaBordignon from '../public/images/lecture_imgs/25-Giulia_Bordignon.jpg'
import Lecture26_MayzaCristina from '../public/images/lecture_imgs/26-Mayza_Cristina.jpg'
import Lecture27_RobertoAzevedo from '../public/images/lecture_imgs/27-Roberto_Azevedo.jpg'
import Lecture28_RodrigoLeme from '../public/images/lecture_imgs/28-Rodrigo_Leme.jpg'
import Lecture29_YgorSperanza from '../public/images/lecture_imgs/29-Ygor_Speranza.jpeg'
import Lecture30_SilviaTrein from '../public/images/lecture_imgs/30-Silvia_Heimfarth_Dapper.jpg'
import Lecture31_LeandroMeili from '../public/images/lecture_imgs/31-LeandroMeili.jpeg'
import Lecture32_RenataMiranda from '../public/images/lecture_imgs/32-Renata_Miranda.jpg'
import Lecture33_BrunaShinohara from '../public/images/lecture_imgs/33-Bruna_Shinohara.jpg'
import Lecture34_VitorDavid from '../public/images/lecture_imgs/34-Vitor_David.png'
import Lecture35_JeffersonBrandao from '../public/images/lecture_imgs/35-Jeff_Brandão.jpeg'
import Lecture36_GabrielMedeiros from '../public/images/lecture_imgs/36-Gabriel_Medeiros.jpg'
// import Lecture36_GiovannaArana from '../public/images/lecture_imgs/36-Speaker_Name_01.png'
import Lecture37_ThyagoOliveira from '../public/images/lecture_imgs/37-Thyago_Oliveira.png'
import Lecture38_LeonardoLeite from '../public/images/lecture_imgs/38-Leonardo_Leite.jpg'
import Lecture39_SimaraConceicao from '../public/images/lecture_imgs/39-Simara_Conceicao.jpg'
import Lecture40_DiegoRenan from '../public/images/lecture_imgs/40-Diego_Renan.jpg'
import Lecture41_LuizYanai from '../public/images/lecture_imgs/41-Luiz_Yanai.png'
import Lecture42_KarolAttekita from '../public/images/lecture_imgs/42-Karol_Attekita.png'
import Lecture43_LarissaBenevides from '../public/images/lecture_imgs/43-Larissa_Benevides.png'
import Lecture43_CassioSantos from '../public/images/lecture_imgs/43-Cassio_Santos.png'


const shifts = {
    '2023-08-21' : {
        'Manhã': {
            '08:40' : {
                title : 'Abertura'
            },
            '10:00' : {
                title : 'Como a computação pode combater a discriminação algorítmica',
                description : 'Carla Vieira é mestre em Inteligência Artificial pela USP e Engenheira de Dados na QuantumBlack. Foi reconhecida como Google Developer Expert em Machine Learning e participa das discussões sobre Inteligência Artificial e ética - tema da sua dissertação de mestrado.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Carla Vieira', 'role':'Software Engineer', 'linkedin' : 'https://www.linkedin.com/in/carlaprv/', 'image': Lecture01_CarlaVieira},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Inteligência Artificial - O que mudou nos dispositivos conectados e no desenvolvimento de software?',
                description : 'Jorge Maia é Arquiteto de soluções de IoT e Nuvem na CrazyTechLabs desde 2014. Reconhecido como Learn Expert e Regional Lead para Treinadores Certificados pela Microsoft, que também o premiou nos últimos 7 anos o MVP (Most Valuable Professional) na categoria de Azure e IoT, é também Mestre em Sistemas Mecatrônicos e Doutorando no tema.\n Nesta sessão ele discutirá com a audiência sobre o panorama de soluções conectadas e também sobre as evoluções no desenvolvimento de software com a chegada do GPT e outras ferramentas de IA.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Jorge Maia', 'role':'Software Engineer', 'linkedin' : 'https://www.linkedin.com/in/jorgeasmaia/', 'image': Lecture02_JorgeMaia},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }
        },
        'Tarde' : {
            '13:20' : {
                title : 'IA Enterprise - o "Mundo Real"',
                description : 'Sou formado em engenharia química pela Poli USP, onde também estou fazendo o Mestrado; atualmente trabalho como Data & AI Engineer na Oracle, com foco em projetos de IA. Na minha palestra, trarei uma visão de como IA é tratada por empresas. O uso de soluções Enterprise de inteligência artificial é um tanto diferentede soluções voltadas para os consumidores finais e as diferenças nem sempre são claras. Isso acaba gerando uma bolha onde todos investem em IA sem um planejamento adequado ou, ainda pior, sem necessidade.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Fernando De Come', 'linkedin': 'https://www.linkedin.com/in/fernandodecome/', 'image': Lecture03_FernandoDeCome},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : 'Desmistificando Pós-graduação em SI',
                description : 'Você tem interesse em fazer mestrado? Sim? Então essa palestra é pra você :D Não? Então essa palestra é pra você :D Vemos muitas dicas sobre carreira no mercado de trabalho (o que é ótimo) durante a SSI, mas pouco se fala sobre carreiras acadêmicas. Nessa palestra, iremos trocar uma ideia sobre o PPgSI, o programa de pós graduação de sistemas de informação. Irei falar sobre minha experiência, cimo entrar no programa, dicas dúvidas frequentes, receios e alegrias. Com isso, espero oferecer uma direção para quem tem interesse no programa ou apresentá -lo para quem não conhecia. Vai ser topzera!',
                local : 'presential',// presential ou online
                endTime : '15:10',
                speakers : [
                    {'name': 'Felipe Furquim', 'image': Lecture04_FelipeFurquim},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '15:10' : {
                title : 'Introdução a Containers: Benefícios e Trade-offs',
                description : 'Graduado em Sistemas de Informação na EACH, e atualmente engenheiro de software no Elo7. Teremos uma breve introdução sobre containers, uma das tecnologias mais predominantes em sistemas distribuídos e computação em nuvem da atualidade.',
                local : 'presential',// presential ou online
                endTime : '15:40',
                speakers : [
                    {'name': 'Renan Nakazawa', 'image': Lecture04_RenanNakazawa},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Desmistificando a carreira em tecnologia: de estágio a liderança técnica',
                description : 'Estudo programação desde 2013, atualmente sou líder técnica , minha especialidade é Java com Spring, Microsserviços e AWS. Sou co-autora dos livros Jornada Java e Jornada Microsserviços , crio conteúdo no Instagram e Youtube Kamila code e sou Microsoft MVP. Nessa palestra vou tirar suas maiores dúvidas sobre as etapas da carreira em tecnologia, desde como conseguir o primeiro estagio até uma cargo de liderança técnica',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Kamila Santos Oliveira', 'linkedin': 'https://www.linkedin.com/in/kamila-santos-oliveira', 'image': Lecture05_KamilaSantos}
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : 'ChatGPT: hype or reality? (Poatek)',
                description : 'Data Scientist, granduando em matemática aplicada computacional pelo IME/USP. A palestra será um overview sobre Large Language Models (ChatGPT e similares) e aplicações. Contarei também sobre a minha experiência em construir sistemas que utilizam LLMs.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Milton Leal', 'website': 'https://poatek.com/', 'image': Lecture06_MiltonLeal},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'Além do Código: Habilidades Vitais para Desenvolvedores (Rocketseat)',
                description : 'Desenvolvedora há 11 anos, atualmente focada na stack JS, React e NodeJS. Sou reconhecida pela Microsoft como Microsoft MVP. Fui educadora de desenvolvimento e atual DevRel na Rocketseat, formada em Cybersecurity pela FIAP e técnica em programação para computadores pela Etec. Tenho como missão levar conhecimento em tecnologia de forma democrática para o maior numero de pessoas possível. Atualmente encabeço uma imersão para formação de líderes técnicos chamada Assemble. Nessa talk vamos explorar todas as habilidades que devemos desenvolver ao longo da nossa jornada profissional para nos tornarmos o "bons programadores" que o mercado de trabalho precisa!',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Jakeliny Gracielly', 'website': 'https://www.rocketseat.com.br/', 'image': Lecture07_JakelinyGracielly},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Computação Quântica: o que é, e aplicações em biotecnologia', // Computação quântica
                description : 'André Juan Ferreira Martins é mestre em Física, bacharel em Física e bacharel em Ciência e Tecnologia pela UFABC. Tem experiência em pesquisa nas áreas de física médica computacional, correspondências holográficas e gravitação. Nos últimos anos tem dedicado os esforços de pesquisa às áreas de machine learning e computação quântica, e é apaixonado por ensinar e contar para as pessoas sobre estes assuntos! Atualmente é cientista de dados no Itaú-Unibanco, desenvolvendo pesquisa em computação quântica, com foco em quantum machine learning. Também é coordenador de ciência de dados na Ada. Nesta palestra, apresentarei os principais conceitos da computação quântica, um novo paradigma computacional com o potencial de auxiliar na solução de muitos dos mais complexos desafios enfrentados pela humanidade. Vamos discutir o estágio atual da tecnologia, conhecer um pouco sobre os hardwares quânticos existentes, e descobrir o que são os algoritmos quânticos. Por fim, conheceremos em maiores detalhes uma das mais importantes aplicações da computação quântica: a simulação de biomoléculas.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'André Juan Ferreira Martins', 'image': Lecture08_AndreJuan},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
        } 
    },
    '2023-08-22' : {
        'Manhã' : {
            '08:40' : {
                title : 'SSI Talks: Privacidade - Até onde você está seguro?',
                description : 'Quando será que ocorre a perturbação da privacidade alheia? Será se há casos de invasão de privacidade que geram consequência e prejuízo? O que o governo faz para nos proteger? Será se de alguma forma podemos colaborar para manter nossa privacidade segura? Qual a motivação desses ataques? Aqui responderemos essas perguntas e algumas mais.',
                local : 'presential',// presential ou online
                endTime : '09:10',
                speakers : [
                    {'name': 'Gustavo Almeida de Jesus', 'website': 'https://intheshell.page/', /*'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01/*Lecture09_GustavoAlmeida*/},
                    {'name': 'Eduarda Lima Porongaba', 'website': 'https://intheshell.page/', /*'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01/*Lecture09_EduardaLima*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '09:10' : {
                title : 'SSI Talks:  Revelando padrões ocultos - análises e aplicações de dados das redes sociais',
                description : 'Por acaso você se perguntou como as redes sociais se transformam em complexas teias de interações? Quer entender como os dados por trás dessas redes podem ser analisados para revelar insights valiosos? Se sim, então temos a palestra perfeita para você! Nesta palestra empolgante e repleta de conhecimento, o mundo das redes sociais será explorado como nunca. Descobriremos como os dados podem ser representados como grafos, uma abordagem que nos permite visualizar e compreender de forma clara as interações entre indivíduos, grupos e entidades em plataformas como Facebook, Twitter, Instagram e LinkedIn. Não perca a chance de explorar as possibilidades infinitas que os dados de redes sociais podem oferecer. Junte-se a nós para uma jornada fascinante pelo mundo dos grafos e análise de dados',
                local : 'presential',
                endTime : '09:40',
                speakers : [
                    {'name': 'Yago Primerano Arouca', /*'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01/*Lecture09_YagoPrimerano*/},
                    {'name': 'Felipe Castro', /*'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01/*Lecture09_FelipeMateos*/}
                ],
                image: '',
            }, /* Talvez seja melhor juntar as duas por causa do horário que fica errado kkkk */
            '10:00' : {
                title : 'O inglês abre portas: impulsione sua carreira na TI',
                description : 'Pode me chamar de Léo! Sou apaixonado em impulsionar carreiras de profissionais de TI através do ensino de inglês. Ajudo vocês a se comunicarem com mais confiança e alcançarem seus objetivos profissionais. Falo sobre inglês para a vida profissional, Job Interviews, Agile Framework, além do dia a dia em empresas, acumulando +5000 horas de mentorias. Fundei a Rover Aprendizagem – English for IT, ganhadora do 1º lugar de empresas de TI em Santa Catarina. Nessa palestra, vamos conversar sobre como o inglês irá abrir portas na carreira de vocês, qual o mindset ideal para aprender inglês focado para TI, além de como se preparar para Job Interviews e se vender de forma estratégica. Venham com energia! Isso não será uma aula de inglês, mas sim, uma conversa para impulsionar os próximos passos da sua carreira.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Leonardo Dalri', 'image': Lecture10_LeonardoDalri},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Modularização: Vantagens e desvantagens',
                description : 'Formada em Sistemas de Informação, pós graduada em Engenharia de Software pela UNICAMP e atualmente cursando a segunda pós graduação em Arquitetura de Software. Com mais de 10 anos de experiência em desenvolvimento, dos quais 5 deles focada em desenvolvimento Mobile (Android). No tema da palestra de hoje, o intuito é abordar a modularização de um aplicativo: O que significa modularizar, quais as vantagens, desvantagens, riscos e algumas formas de realizar tal modularização.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Aline Souza', 'role':'Software Engineer', 'linkedin' : 'https://www.linkedin.com/in/assouza94/', 'image': Lecture11_AlineSouza},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Ética e Computação, esse encontro é apenas uma opção?',
                description : 'Bacharel em Sistemas de Informação pela UNIRIO; mestre em Informática com ênfase em Sistemas de Informação, pelo PPGI/UNIRIO; atualmente doutorando em Informática no Instituto de Computação da UFRJ, mais especificamente no PPGI, integrando o Laboratório CORES como líder da área de Ética. Desde o início do doutoramento transitou por temas como Transparência, Desinformação e LGPD, para finalmente abstraí-los na ética aplicada, tratando da área nos escopos geral, computacional e de pesquisa, assim como na instrução ou educação nestes tópicos. De mãos dadas com a meta-ciência, enfatizando o estudo do setor acadêmico da computação brasileira, cientificamente; com uma perspectiva crítica, materialista, existencialista e distante do positivismo. Nesta dinâmica vamos falar sobre a relação entre ética, moral e computação, como é preciso ir além da dita "computação pura" para efetivamente pensar numa ética computacional e como Sistemas de Informação apresenta um alinhamento adequado para esta combinação. Indo além disso, por que estudar ética e moral enquanto estudante de computação? O que isso te oferece como diferencial? E a pergunta crucial, ainda é opcional no seu futuro profissional?',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Luiz Paulo Carvalho', 'image': Lecture12_LuizPaulo},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : 'UX, deficiência e um mercado emergente',
                description : 'Accessibility Design Ops  no Itaú.UX, deficiência e um mercado emergente. Uma breve análise, sobre o potencial de mercado e poder econômico de pessoas com deficiência.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Janaina Moreira', 'image': Lecture13_JanainaMoreira},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Data Science skills: O que o mercado busca?',
                description : 'O que te diferencia em um mercado em constante crescimento tal qual como a área de dados? Dentre os principais perfis, o cientista de dados, ganhou um espaço considerável em diversas organizações e empresas. Ainda assim, muitos podem ficar confusos com o vasto número de conhecimento necessário na área. Venha entender quais são as principais skills de um cientista de dados para o mercado em 2023. ',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Juliana Mascarenhas', 'linkedin': 'https://www.linkedin.com/in/juliana-mascarenhas-ds/', 'image': Lecture14_JulianaMascarenhas}
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : 'Push Notifications na Web moderna',
                description : "Andrew Rosário é pós-Graduado em Desenvolvimento Web e Mobile pela UNIVEM e atualmente trabalha como Desenvolvedor Frontend Senior no PicPay. É apaixonado por compartilhar conteúdos técnicos para a comunidade. Possui expertise no framework Angular da Google, sendo uma das principais referências no Brasil. Nesta palestra você entenderá como a web evoluiu ao longos dos anos, e um dos grandes trunfos desta modernização se dá pela vinda das Progressive Web App’s, as famosas PWA's. Essa tecnologia nos permite desenvolver aplicações web com superpoderes, como a possibilidade de enviar e receber Push Notifications diretamente do navegador do usuário, sem a necessidade de instalar um aplicativo em seu celular.",
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Andrew Rosário', 'image': Lecture15_AndrewRosario},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'Arquiteturas em nuvem - Do zero ao multicloud',
                description : 'A revolução digital trouxe consigo a transformação radical das infraestruturas de TI, impulsionando a adoção de soluções em nuvem para empresas de todos os tamanhos. Nessa palestra exploraremos a jornada das arquiteturas em nuvem, desde o estágio inicial da adoção de um único provedor até a complexidade das arquiteturas híbridas e multicloud.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Luiz de Oliveira', /*'website': 'https:semanadesi.com' Informações de contato, 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture16_LuizDeOliveira},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Trabalhando com Game Design no Brasil',
                description : 'Davi Baptista é um Game Designer e Sound Designer em São Paulo, experiente na criação de jogos 2D e 3D na Unity. Atualmente, trabalha como Game Designer na Dumativa e é cofundador da Nano Knight Studio. Trabalhando com Game Design no Brasil. A palestra vai tratar sobre a realidade de ser um profissional da área, falando um pouco sobre os desafios da área, rotina, e o que é necessário para conseguir viver de games.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Davi Arcos Baptista', 'linkedin': 'https://www.linkedin.com/in/davi-baptista/', 'image': Lecture17_DaviBaptista},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-23' : {
        'Manhã' : {
            '08:40' : {
                title : 'Blockchain além das Criptomoedas',
                description : 'Líderes de vanguarda construíram redes em blockchain para reinventar seus negócios, mas o potencial desta tecnologia vai muito além do que vemos hoje em produção. Nesta palestra, Carlos Rischioto, Arquiteto líder e Blockchain SME da IBM no Brasil, apresentará casos de uso de Blockchain que estão em produção, com alto volume de transações e trará exemplos de diferentes Industrias que estão testando esta tecnologia para revolucionar seus negócios.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Carlos Rischioto', 'image': Lecture18_CarlosRischioto},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : 'SSI Talks: Carreiras de um aluno de SI: além do front e backend',
                description : 'A área de Sistemas de Informação é ampla, são diversas as aplicações e possibilidades de atuação. Por vezes, encontramos um foco maior em áreas populares como front-end e back-end, mas nem todo estudante tem isso como objetivo ideal. O DASI irá apresentar e informar outras carreiras em tecnologias e como você pode ser introduzido a elas, aproveitando ao máximo suas habilidades e paixões.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Giovanna Arana Paganotti', /*'website': 'https:semanadesi.com', 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01},
                    {'name': 'Guilherme Fernandes da Costa', /*'website': 'https:semanadesi.com', 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Segurança da Informação: Conheça uma das profissões mais promissoras do mercado',
                description : 'Conheça sobre uma das profissões mais promissoras do mercado de tecnologia e descubra que a segurança das informações também é uma responsabilidade sua! Meirylene Avelino é Analista de Segurança da Informação, Graduada e Mestre em Ciência da Computação, com linha de Pesquisa em garantia de autenticidade de conteúdos web utilizando Blockchain. Especialista em gestão de acessos privilegiados, IAM e implantação e arquiteturas de soluções de PAM. Palestrante em eventos sobre temas correlatos a tecnologia e a Segurança da Informação. Voluntária em projetos de diversidade de gêneros em carreiras de tecnologia. Realiza treinamentos de equipes em Segurança da Informação. Cocriadora e Idealizadora da GloboSec Week - Programa de integração entre academia e empresa com o objetivo de conscientizar e ensinar sobre Segurança da Informação e descobrir novos talentos para a área de Cybersecurity da Globo. Recebeu o XIV Prêmio Josué de Castro de Extensão, pela Universidade Federal Fluminense, na 21 Semana de Extensão da Universidade. Indicada para a premiação Woman that Build Awards da Globant 2022. Membro da CSBC Sociedade Brasileira de Computação. Voluntária no WOMCY Reconhecida pela instituição Daryus como uma das TOP 20 mulheres mais influentes em Segurança da Informação.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Meirylene Avelino', 'linkedin': 'https://www.linkedin.com/in/meiryleneavelino/', 'image': Lecture20_MeyrileneAvelino},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Introdução a Process Mining - percepções sobre pesquisa e mercado de trabalho',
                description : 'Sobre o palestrante: Possui graduação em Sistemas de Informação pela Universidade de São Paulo (2015) e doutorado direto em andamento em Sistemas de Informação pela Universidade de São Paulo. Atualmente é cientista de dados senior no Itau Unibanco, com 9 anos de experiência no tema Analytics e 5 anos no tema Ciência de Dados. Sobre a palestra: O objetivo da palestra será a introdução do tema Process Mining e o compartilhamento das experiências do palestrante sobre pesquisa cientifica e exemplos de uso no mercado de trabalho sobre este tema.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Antonio Carlos Meira Neto', 'linkedin': 'https://www.linkedin.com/in/ac-meira/', 'image': Lecture21_AntonioCarlos},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : 'Os bastidores do ChatGPT: Como funciona esta tecnologia de PLN?',
                description : 'Nesta palestra, descreverei o funcionamento do ChatGPT, contextualizando a área de Processamento de Língua Natural (PLN), diferentes formas de representação de texto e os grandes modelos de linguagem (LLM). Dentre conceitos explorados estão: bag-of-words, n-gramas, word embeddings, transformers, BERT e GPT.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Luciano Antonio Digiampietri', /*'website': 'https:semanadesi.com', 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture22_LucianoDigiampietri},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Descomplicando as Entrevistas',
                description : 'Sou a Carol, formada em Sistemas de Informação na EACH, e atualmente atuo como desenvolvedora de back-end pleno na PagSeguro. Apaixonada por tecnologia, decidi compartilhar minha jornada em uma palestra sobre os primeiros passos na busca por um estágio e entrevistas técnicas. Abordaremos dicas valiosas para se destacar em entrevistas técnicas e os assuntos mais comuns abordados nesses processos. ',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Carolina Galvão de Oliveira', 'linkedin': 'https://www.linkedin.com/in/carolina-galv%C3%A3o/', 'image': Lecture23_CarolinaGalvao},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : 'CSI brasileiro - a tecnologia nacional que identifica criminosos ao redor do mundo (Griaule)',
                description : 'Responsável pela área de recursos humanos da Griaule, incluindo desenvolvimento de parcerias com universidades e recrutamento. Palestra sobre os fundamentos da biometria e como as soluções biométricas da Griaule apoiam as entidades de segurança pública na identificação de indivíduos procurados ao redor do mundo.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Clara Santos', 'website': 'https://griaule.com/', 'image': Lecture24_ClaraSantos},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'Por que demorei tanto pra aprender programação?',
                description : 'Mestra em engenharia de computação e desenvolvedora backend. Através da criação de conteúdos, sonho impactar vidas de forma positiva com rompimento de barreiras e empoderamento tecnológico, reconstruindo a área tecnológica como um espaço acessível e pertencente a todas as pessoas. Quando pensamos em entrar na área da programação nos deparamos com muitas linguagens, tecnologias e possibilidades de carreira. É muito comum nos sentirmos perdidos e trocarmos constantemente nossa trilha de aprendizado. Vem comigo que nesta talk eu vou compartilhar um pouco da minha trajetória dentro do universo tecnológico e compartilhas os erros que cometi no início da minha carreira, dando dicas valiosas que vão te guiar nesta jornada de aprendizado.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Giulia Bordignon', 'image': Lecture25_GiuliaBordignon},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Quem é essa tal de Experiência do Usuário? ',
                description : 'Vamos entender o que é UX e como ele faz parte do nosso cotidiano',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Mayza Cristina da Silva', 'linkedin': 'https://www.linkedin.com/in/mayzasilva/', 'image': Lecture26_MayzaCristina},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-24' : {
        'Manhã' : {
            '08:40' : {
                title : 'Como se tornar um Consultor SAP',
                description : 'Como se tornar um Consultor SAP',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Roberto Azevedo', 'image': Lecture27_RobertoAzevedo},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : 'Tecnologia & Inovação: a prática da teoria e a teoria na prática (BCR CX)',
                description : 'Sou advogado de formação, com Especialização (PUC/SP), Mestrado (PUC/SP) e Doutorado em Direito (USP). Ainda no ramo acadêmico, sou atualmente doutorando em Política Científica e Tecnológica (UNICAMP). Profissionalmente, trabalhei por 7.5 anos na Adobe Systems, primeiro como gerente regional e depois como gerente global de uma área de estratégia e atualmente sou Diretor de Estratégia, Crescimento e Operações na empresa brasileira BCR.CX. Durante minha jornada até aqui, consegui mesclar conhecimento acadêmico com uma vivência intensa no ramo de tecnologia. Com isso, gostaria de sugerir uma palestra que explore alguns conceitos de tecnologia e inovação, tanto de uma perspectiva acadêmica, quanto na prática do ramo de tecnologia. Algo como "Tecnologia e Inovação: a prática da teoria e a teoria na prática".',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Rodrigo Leme Freitas', 'website': 'https://www.bcrcx.com/', 'image': Lecture28_RodrigoLeme},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Fazer Jogos NÃO É Arte',
                description : 'Eu sou o Ygor, Lead Game Designer na Tapps Games e criador de jogos a mais de 10 anos. E eu te pergunto: o que fazer um jogo e um cachorro-quente têm em comum? Se um jogo é feito em uma floresta e não há ninguém para jogá-lo, ele faz sucesso? A resposta para essas (e muitas outras perguntas estapafúrdias) você encontra nessa palestra, onde falaremos do processo de criação de novos jogos, da validação de conceitos, das fases de produção, de prototipagem e de inovação de jogos digitais. Se você sempre quis fazer seu jogo ou acha que, se você fizesse um, ele seria melhor que todos outros, essa palestra [talvez] seja pra você!',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Ygor Speranza', 'linkedin': 'https://www.linkedin.com/in/ygor-speranza-391a4b29/', 'image': Lecture29_YgorSperanza},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Criatividade Aplicada ao Design da Experiência do Usuário ',
                description : 'Nesta palestra, será explorada a importância do pensamento divergente como base para a criatividade. Partindo do questionamento "Como podemos ser (mais) criativos?", serão apresentadas formas para idear produtos desejáveis, praticáveis e viáveis, que consideram aspectos sobre sustentabilidade e inovação voltados para o desenvolvimento de produtos digitais e UX Design. Silvia doutora em Engenharia, bacharela e mestra em Design que sempre buscou a ampliação do seu conhecimento por meio de estudos transdisciplinares, articulando disciplinas tecnológicas e das humanidades, na busca da compreensão da complexidade. Atualmente é professora do curso de Design da Famecos, líder de projetos no IDEAR - Laboratório Interdisciplinar de Empreendedorismo e Inovação da PUCRS e membro do Núcleo de Inovação Pedagógica da PUCRS. ',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Silvia Trein Heimfarth Dapper', 'image': Lecture30_SilviaTrein},

                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : 'Desenvolvimento de Software em Estágios: Do Conceito ao MVP',
                description : 'Neste workshop vamos compartilhar as experiências que tivemos na BCR.CX para o desenvolvimento de software, com foco na abordagem do MVP (Produto Mínimo Viável). Muito além da escolha da stack de tecnologia, a escolha do time e a comunicação constante e alinhamento de expectativas com o cliente e o time de desenvolvimento são fundamentais para o sucesso desse tipo de projeto.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Leandro Meili', 'website': 'https://bcrcx.com'/*Informações de contato*/, 'image': Lecture31_LeandroMeili/*Aqui vem a imagem do palestrante*/},
                    {'name': 'Guilherme Nascimento', /*'website': 'https:semanadesi.com', 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Dicas para um pitch de sucesso!',
                description : 'Olá! Sou a Renata, e sou apaixonada por empreendedorismo e inovação. Ao longo dos anos, tive a oportunidade de organizar vários hackathons na USP e atuar como jurada e mentora em diversos eventos. Essa jornada me mostrou a importância de um bom pitch para o sucesso na competição. Nessa palestra compartilho as melhores dicas para você criar um pitch de sucesso!',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Renata Miranda', 'image': Lecture32_RenataMiranda/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : 'Carreiras em tecnologias quânticas',
                description : 'Doutora em física pela USP e Staff Scientist - Quantum Computing na CMC Microsystems, Canada. Envolvida em divulgação científica sobre computação quântica na medida do possível. Nesta palestra, trago dados sobre o mercado de trabalho em tecnologias quânticas e entrevistas com outros profissionais da área. Além disso, comento sobre aprendizados na minha própria jornada acadêmica e profissional na área de computação quântica.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Bruna Shinohara de Mendonça', 'image': Lecture33_BrunaShinohara},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'Acessibilidade em Produtos Digitais',
                description : 'Designer carioca com muita determinação em aprender e crescer! Pensando em ajudar Designers que entram no mercado de trabalho, fundei a comunidade "Jovens Ux e Ui", com o objetivo de aprimorar os profissionais que estão ingressando no mercado de Ux / Ui. Esse aprimoramento compreende todas as etapas de uma formação de um profissional de Ux e Ui. Em busca desse aperfeiçoamento incorporamos pontos específicos como: Acessibilidade, Portfólio e mentorias. Como Accessibility Product Design, busco uma constante evolução das minhas Hards Skills e Soft Skills. Tanto em projetos pessoais, quanto em projetos dentro da Bradesco Seguros (empresa em que atuo atualmente). Focando em acessibilidade, tenho como meta criar produtos acessíveis e que possam ser utilizado por tadas as pessoas. ',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Vitor David', 'linkedin': 'https://www.linkedin.com/in/vitordavid/', 'image': Lecture34_VitorDavid},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Explorando tecnologias imersivas: AR, VR e metaverso e o impacto na sociedade e negócios ',
                description : 'Jefferson Brandão, desenvolvedor de realidade aumentada e fundador da Artech Studio, além de atualmente trabalhar como instrutor na Estação Hack from Meta, traz uma palestra inspiradora sobre inovação com tecnologias imersivas. Descubra como essas tecnologias impactam a sociedade e o futuro do metaverso. ',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Jefferson Brandão', 'linkedin': 'https://www.linkedin.com/in/jeff-brandao/', 'image': Lecture35_JeffersonBrandao},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-25' : {
        'Manhã' : {
            '08:40' : {
                title : 'SSI Talks: Uso de PLN para análise de redes sociais',
                description : 'Gabriel Medeiros Jospin é graduando de Sistemas de Informação pela USP e Cientista de Dados na SWAP. Neste SSI talks ele apresentará o que é o Processamento de Língua Natural e como ela tem sido útil na Análise de Redes Sociais. Além disso, vai apresentar algumas de suas pesquisas na área, para mostrar aplicações práticas.',
                local : 'presential',// presential ou online
                endTime : '09:10',
                speakers : [
                    {'name': 'Gabriel Medeiros Jospin', /*'website': 'https:semanadesi.com', Informações de contato, 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture36_GabrielMedeiros},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '09:10' : {
                title : 'SSI Talks: Aprender divulgando conhecimento',
                description : 'Em breve...',
                local : 'presential',// presential ou online
                endTime : '09:40',
                speakers : [
                    {'name': 'Palácio', /*'website': 'https:semanadesi.com'/*Informações de contato, 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01},
                    {'name': 'Giovanna Paganotti', /*'website': 'https:semanadesi.com'/*Informações de contato, 'role':'Software Engineer', 'linkedin' : 'https://semanadesi.com',*/ 'image': Lecture00_SpeakerName01},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : 'Maximizando a Eficiência nas Entregas por Meio das Métricas de Fluxo',
                description : 'People & Culture Product Leadership na Humanecer! Conselheiro em Design Organizacional, Performance de Times e Produtos Digitais na GROWYX, sediada em Lisboa/POR! Pai do Princeso Bento e companheiro da elegantérrima, Bruna! Esta palestra abordará a importância das métricas de fluxo como impulsionadoras fundamentais da eficiência operacional e da otimização de processos. Explorando o tema, será mostrado como as métricas de fluxo oferecem insights valiosos para identificar gargalos, pontos de estrangulamento e oportunidades de aprimoramento num fluxo de trabalho.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Thyago Thompson Veras Oliveira', 'image': Lecture37_ThyagoOliveira},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Diferentes formas de se fazer DevOps',
                description : 'Leonardo Leite recebeu o título de doutor em Ciência da Computação pelo IME USP em 2022. Desde 2014 é desenvolvedor de software no Serviço Federal Brasileiro de Processamento de Dados (Serpro), no qual apoiou com sucesso a implantação de práticas de DevOps, como a adoção de testes automatizados, pipelines de implantação, entrega contínua e monitoramento. Em seu doutorado, por meio de entrevistas com dezenas de profissionais de TI, Leonardo pesquisou como as organizações produtoras de software têm estruturado a divisão do trabalho e a interação entre profissionais de desenvolvimento e infraestrutura, ou seja, as "formas de se fazer DevOps". Nesta palestra você entenderá essas diferentes formas de se fazer DevOps e como uma delas, empregando times de plataforma, tem mostrado melhores resultados em termos de desempenho de entrega. Esta palestra é também uma prévia do livro "DevOps, como se faz? Dos silos aos times de plataforma", a ser lançado pela editora Casa do Código.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Leonardo Alexandre Ferreira Leite', 'linkedin': 'https://www.linkedin.com/in/leonardo-alexandre-ferreira-leite-phd-17194322/', 'image': Lecture38_LeonardoLeite},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Oficina de TDD + Pair programming',
                description : 'Desenvolvedora de software na Thoughtworks, LinkedIn Top Voice e Criadora de conteúdo no Quero Ser Dev. Ajudando a reduzir a lacuna de raça e gênero no mercado de tecnologia.',
                local : 'presential',
                speakers : [
                    {'name': 'Simara Conceição do Nascimento', 'linkedin': 'https://www.linkedin.com/in/simaraconceicao/', 'image': Lecture39_SimaraConceicao},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : 'Projeto CARINA: Sistemas de Atenção Visual para Navegação Autônoma',
                description : 'Professor doutor pelo ICMC/USP,  na área de Robótica e Inteligência Artificial, trabalhando com pesquisas em Visão Computacional para Veículos Autônomos e ADAS. É Mestre pela UNESP/IBILCE, com pesquisas em Robótica Móvel e algoritmos de Inteligência Artificial. Atualmente é professor da FATEC e Pós-doutorando no ICMC/USP. Também é CEO e Founder da Algoritma, empresa focada em Inteligência Artificial e Machine Learning. Palestra: A área de veículos inteligentes está cada vez mais forte no cenário industrial, focando tanto para veículos totalmente autônomos, quanto para dar suporte e maior segurança para um motorista humano. Nessa apresentação serão abordados conceitos relacionados com a navegação e percepção de veículos autônomos, envolvendo Inteligência Artificial e Visão Computacional para o projeto Rota2030, com inserção nacional e internacional. Serão então apresentados projetos em andamento em nosso grupo de pesquisa de veículos inteligentes, em conjunto com empresas multinacionais, focando principalmente em nossos sistemas de Visão Computacional para detecção de obstáculos.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Diego Renan Bruno', 'role':'Software Engineer', 'linkedin' : '', 'image': Lecture40_DiegoRenan},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Arquiteturas de Processamento de Dados na Nuvem',
                description : 'Luiz Yanai é Mestre e Engenheiro de Computação pela POLI-USP e atualmente trabalha como especialista de analytics na Amazon Web Services. Nesta palestra vamos falar sobre cloud computing e como ela vem ajudando na transformação digital das empresas no mundo inteiro.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Luiz Yanai', 'image': Lecture41_LuizYanai}
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : 'Carreira em desenvolvimento de jogos',
                description : 'Carreira em Desenvolvimento de Jogos. Uma visão geral sobre sobre as diferentes carreiras no mercado de games.',
                local : 'online',// presential ou online
                speakers : [
                    {'name': 'Karol Attekita', 'linkedin': 'https://www.linkedin.com/in/bullas-attekita/', 'image': Lecture42_KarolAttekita},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'Desmistificando Vulnerabilidades de Software: Como Desenvolver De Forma Segura',
                description : "Você já se perguntou como é possível garantir a segurança no desenvolvimento de software? Se sim, saiba que você não está sozinho! Iremos abordar os princípios essenciais e as melhores práticas para garantir a segurança em todas as etapas do ciclo de desenvolvimento. Larissa Benevides e Cassio Santos trabalham atualmente como Analistas de Segurança de Aplicações no BTG Pactual e apresentarão as principais estratégias e ferramentas para incorporar a segurança desde o início do ciclo de desenvolvimento de forma transparente aos processos ágeis e DevOps.",
                local : 'presential',// presential ou online
                speakers : [
                    {'name': 'Larissa Benevides', 'role':'Software Engineer', 'linkedin' : 'https://www.linkedin.com/in/larissa-benevides/', 'image': Lecture43_LarissaBenevides},
                    {'name': 'Cassio Santos', 'image': Lecture43_CassioSantos},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Encerramento',
            }
        }
    }
}

export default shifts