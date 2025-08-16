// assets
import StickerComum from '../public/images/gifts/adesivo.png';
import StickerMetalizado from '../public/images/gifts/adesivometalizado.png';
import Copo from '../public/images/gifts/copo.png';
import BaldeDePipoca from '../public/images/gifts/baldedepipoca.png';
import Chaveiro from '../public/images/gifts/chaveiro.png';

const gifts = {
    1: {
        name: 'Sticker',
        image: StickerComum,
        minPresence: 5
    },
    2: {
        name: 'Sticker Metalizado',
        image: StickerMetalizado,
        minPresence: 8
    },
    3: {
        name: 'Chaveiro',
        image: Chaveiro,
        minPresence: 12
    },
    4: {
        name: 'Copo',
        image: Copo,
        minPresence:20
    },
    5: {
        name: 'Balde de Pipoca',
        image: BaldeDePipoca,
        minPresence: 28
    }
}

export default gifts;
