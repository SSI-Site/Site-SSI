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
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }
        },
        'Tarde' : {
            '13:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        } 
    },
    '2023-08-22' : {
        'Manhã' : {
            '08:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-23' : {
        'Manhã' : {
            '08:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-24' : {
        'Manhã' : {
            '08:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-25' : {
        'Manhã' : {
            '08:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*não sei o que coloca aqui, não tinha nada na planilha*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
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