// assets
import LectureImage01 from '../public/images/lecture_imgs/01-Mindsight.jpeg'
import LectureImage02 from '../public/images/lecture_imgs/02-Lucas_Magon.png'
import LectureImage03 from '../public/images/lecture_imgs/03-Rodrigo_Ferreira.jpg'
import LectureImage04 from '../public/images/lecture_imgs/04-Luciano_Digiampietri.jpg'
import LectureImage05 from '../public/images/lecture_imgs/05-Ana_Paula_Frizzo.jpg'
import LectureImage06 from '../public/images/lecture_imgs/06-Fernando_Chiu_Hsieh.jpg'
import LectureImage07 from '../public/images/lecture_imgs/07-Lab_das_Minas.jpg'
import LectureImage08 from '../public/images/lecture_imgs/08-Ana_Ferreira.jpeg'

const shifts = {
    '2023-08-21' : {
        'Manhã': {
            '08:00' : {
                title : 'Abertura'
            },
            '09:00' : {
                title : 'Soft Skills - Pilares que sustem o sucesso da sua carreira',
                description :  `O que são Soft Skills e Hard Skills?
                    Por que elas são fatores determinantes para o sucesso na vida pessoal e profissional?
                    O desenvolvimento da Inteligência emocional reflete nas soft skills?
                    Por quê elas são um diferencial na carreira de um profissional?
                    Como que elas são observadas em um processo seletivo, acompanhadas no dia a dia pelo gestor imediato e nas avaliações de desempenho? E em processos para promoção de cargo?
                    Empreendedores conquistam resultados através de pessoas e como que as soft skills são utilizadas para que estes resultados sejam alcançados?
                    A falta destas habilidades podem sabotar uma carreira.`,
                local : 'presential',
                speakers : [
                    {'name' : 'Palestrante 1', 'anchor' : 'https://semanadesi.com'},
                    {'name' : 'Palestrante 2'},
                    {'name' : 'Palestrante 3', 'anchor' : 'https://semanadesi.com'},
                    {'name' : 'Palestrante 4', 'anchor' : 'https://semanadesi.com'}
                ],
                image: LectureImage01
            },
            '10:00' : {
                title : 'Palestra bonita',
                description : 'altas coisa legal que vao falar por la',
                local : 'presential',
                speakers : [
                    {'name' : 'Palestrante 1'},
                    {'name' : 'Palestrante 2', 'anchor' : 'https://semanadesi.com'}
                ],
                image: ''
            },
            '11:20' : {
                title : 'Palestra feia com nome muito longo pra testar coisas sobre responsividademuitolegal',
                description : 'altas coisa chata que vao falar por la',
                local : 'presential',
                speakers : [
                    {'name' : 'Palestrante 3', 'anchor' : 'https://semanadesi.com'},
                    {'name' : 'Palestrante 4', 'anchor' : 'https://semanadesi.com'}
                ],
                image: LectureImage03
            },
            '12:20' : {
                title : 'Ir ao Mossar'
            }
        },
        'Tarde' : {
            '13:20' : {
                title : 'Palestra estranha',
                description : 'ainda não sei se vai ou não usar isso kkk',
                local : 'presential',
                speakers : [
                    {'name' : 'Digiamipetri', 'anchor' : 'https://semanadesi.com'},
                    {'name' : 'Danilo Bode', 'anchor' : 'https://semanadesi.com'}
                ],
                image: LectureImage04
            },
            '14:40' : {
                title : 'aaaaaaaaa',
                description : 'sei la irmao',
                local : 'presential',
                speakers : [
                    {'name' : 'Gisele', 'anchor' : 'https://semanadesi.com'},
                    {'name' : 'Ariane Grande'},
                    {'name' : 'Ana Akilometro', 'anchor' : 'https://semanadesi.com'}
                ]
            },
            '16:00' : {
                title : 'sofiti ishkiuss',
                description : 'aaaaaaaaa',
                local : 'presential',
                speakers : [
                    {'name' : 'ninguem'}
                ],
                image: ''
            },
            '17:20' : {
                title : 'aaaaaaaaaaaaaa',
                description : 'aaaaaaaaaa',
                local : 'presential',
                speakers : [
                    {'name' : 'lorem'},
                    {'name' : 'ipsum', 'anchor' : 'https://semanadesi.com'}
                ],
                image: LectureImage06
            },
            '18:20' : {
                title : 'jantinha hmmmm'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'palestrinha da naninha',
                description : '',
                local : 'presential',
                speakers : [
                    {'name' : 'alguem aí', 'anchor' : 'https://semanadesi.com'}
                ],
                image: LectureImage07
            },
            '20:40' : {
                title : 'encerramento',
                description : '',
                local : 'presential',
                speakers : [
                    {'name' : 'Fantinato'}
                ],
                image: LectureImage08
            }
        } 
    },
    '2023-08-22' : {
        'Manhã' : {

        },
        'Tarde' : {

        },
        'Noite' : {

        }
    },
    '2023-08-23' : {
        'Manhã' : {

        },
        'Tarde' : {

        },
        'Noite' : {

        }
    },
    '2023-08-24' : {
        'Manhã' : {

        },
        'Tarde' : {

        },
        'Noite' : {

        }
    },
    '2023-08-25' : {
        'Manhã' : {

        },
        'Tarde' : {

        },
        'Noite' : {

        }
    }
}

export default shifts