// assets
import StickerComum from '../public/images/gifts/sticker-comum.png';
import StickerMetalizado from '../public/images/gifts/sticker-metalizado.png';
import Copo from '../public/images/gifts/ecocopo.png';
import BaldeDePipoca from '../public/images/gifts/balde-de-pipoca.png';
import Chaveiro from '../public/images/gifts/chaveiro.png';

const gifts = {
    1: {
        name: 'Sticker',
        image: StickerComum,
        totalPres: 5,
        presentialPres: 3
    },
    2: {
        name: 'Sticker Metalizado',
        image: StickerMetalizado,
        totalPres: 10,
        presentialPres: 6
    },
    3: {
        name: 'Copo',
        image: Copo,
        totalPres: 15,
        presentialPres: 9
    },
    4: {
        name: 'Balde de Pipoca',
        image: BaldeDePipoca,
        totalPres: 20,
        presentialPres: 12
    },
    5: {
        name: 'Chaveiro',
        image: Chaveiro,
        totalPres: 25,
        presentialPres: 15
    }
}

export default gifts;
