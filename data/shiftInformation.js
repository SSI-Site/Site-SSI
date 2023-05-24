/*
FORMATO DOS DADOS:
'yyyy-mm-dd' : {
    
    'Manhã' : {
        
        'hh:mm' : {
            title : '',
            descripion : '',
            local : '',
            speakers : [
                {'name' : ''},
            ]
        }

        .
        .
        .

    },



}
*/

const shifts = {
    '2023-05-01' : {
        'Manhã': {
            '08:00' : {
                title : 'Abertura'
            },
            '10:00' : {
                title : 'Palestra bonita',
                description : 'altas coisa legal que vao falar por la',
                local : 'sei la',
                speakers : [
                    {'name' : 'Palestrante 1'},
                    {'name' : 'Palestrante 2'}
                ]
            },
            '11:20' : {
                title : 'Palestra feia com nome muito longo pra testar coisas sobre responsividademuitolegal',
                description : 'altas coisa chata que vao falar por la',
                local : 'Panelas',
                speakers : [
                    {'name' : 'Palestrante 3'},
                    {'name' : 'Palestrante 4'}
                ] 
            },
            '12:20' : {
                title : 'Ir ao Mossar'
            }
        },
        'Tarde' : {
            '13:20' : {
                title : 'Palestra estranha',
                description : 'ainda não sei se vai ou não usar isso kkk',
                speakers : [
                    {'name' : 'Digiamipetri'},
                    {'name' : 'Danilo Bode'}
                ]
            },
            '14:40' : {
                title : 'aaaaaaaaa',
                description : 'sei la irmao',
                speakers : [
                    {'name' : 'Gisele'},
                    {'name' : 'Ariane Grande'},
                    {'name' : 'Ana Akilometro'}
                ]
            },
            '16:00' : {
                title : 'sofiti ishkiuss',
                description : 'aaaaaaaaa',
                speakers : [
                    {'name' : 'ninguem'}
                ]
            },
            '17:20' : {
                title : 'aaaaaaaaaaaaaa',
                description : 'aaaaaaaaaa',
                speakers : [
                    {'name' : 'lorem'},
                    {'name' : 'ipsum'}
                ]
            },
            '18:20' : {
                title : 'jantinha hmmmm'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'palestrinha da naninha',
                description : '',
                speakers : [
                    {'name' : 'alguem aí'}
                ]
            },
            '20:40' : {
                title : 'encerramento',
                description : '',
                speakers : [
                    {'name' : 'Fantinato'}
                ]
            }
        } 
    },
    '2023-05-02' : {
        'Manhã' : {

        },
        'Tarde' : {

        },
        'Noite' : {

        }
    }
}

export default shifts