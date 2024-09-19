// assets
import Lecture00_NomeSobrenome from '../public/images/lecture_imgs/00-Member_Shadow.png'

import Lecture01_NomeSobrenome from '../public/images/lecture_imgs/00-Member_Shadow.png'

const schedule = {
    // Modelo de como adicionar uma nova palestra
    // 'aaaa-mm-dd' : {
    //     'hh:mm' : {
    //         title : 'Nome do intervalo/janta/almoço',
    //         endTime : 'hh:mm',
    //     },
    //     'hh:mm' : {
    //         title : 'Título da palestra',
    //         description : 'Descrição da palestra',
    //         local : 'presential',// presential ou online
    //         endTime : 'hh:mm',
    //         activityType : 'Workshop',// se não for 'Workshop', deixar vazio
    //         speakers : [
    //             {
    //                 'name': 'Nome da palestrante',
    //                 'pronouns': 'ela/dela',
    //                 'role': 'Cargo',
    //                 'instagram': 'https://www.instagram.com/semanadesi',// opcional
    //                 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',// opcional
    //                 'image': Lecture00_NomeSobrenome
    //             },
    //             {
    //                 'name': 'Nome do palestrante',
    //                 'pronouns': 'ele/dele',
    //                 'role': 'Cargo',
    //                 'linkedin' : 'https://www.linkedin.com/in/nome-do-palestrante/',
    //                 'image': Lecture00_NomeSobrenome
    //             },
    //         ],
    //     },
    // },
    '2024-10-07' : {
        '08:40' : {
            title : 'Abertura',
            endTime : '09:00',
        },
        '10:00' : {
            title : 'Como usar o exemplo no arquivo scheduleInformation.js para organizar a programação',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - descrição da palestra, que pode ser longa, mas tem limite para caber dentro da div que está no desgin - deve ser cerca de sei lá quantos caracteres no total.',
            local : 'presential',// presential ou online
            endTime : '11:00',
            activityType : 'Workshop',// se não for 'Workshop', deixar vazio
            speakers : [
                {
                    'name': 'Palestrante Exemplar',
                    'pronouns': 'ela/dela',
                    'role': 'Cargo do Exemplo',
                    'instagram': 'https://www.instagram.com/semanadesi',
                    'linkedin' : 'https://www.linkedin.com/in',
                    'description': 'Descrição do palestrante. Também tem lmite de caracteres, mas não sei exatamente qual é. Deve caber dentro do design sem quebrar nada',
                    'image': Lecture00_NomeSobrenome
                },
                {
                    'name': 'Palestrante Exemplar',
                    'pronouns': 'ela/dela',
                    'role': 'Cargo do Exemplo',
                    'instagram': 'https://www.instagram.com/semanadesi',
                    'linkedin' : 'https://www.linkedin.com/in',
                    'description': 'Descrição do palestrante. Também tem lmite de caracteres, mas não sei exatamente qual é. Deve caber dentro do design sem quebrar nada',
                    'image': Lecture00_NomeSobrenome
                },
            ],
        },
        '12:20' : {
            title : 'Almoço',
            endTime : '13:00',
        },
        '18:20' : {
            title : 'Jantar',
            endTime : '19:00',
        },
    },
    '2024-10-08' : {

    },
    '2024-10-09' : {

    },
    '2024-10-10' : {
        
    },
    '2024-10-11' : {
        '20:40' : {
            title : 'Encerramento',
            endTime : '21:00',
        }
    }
}

export default schedule