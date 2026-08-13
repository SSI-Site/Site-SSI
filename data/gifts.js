// assets
import StickerComum from '../public/images/gifts/sticker.png';
import StickerMetalizado from '../public/images/gifts/sticker-metal.png';
import Chaveiro from '../public/images/gifts/keychain.png';
import EcoBag from '../public/images/gifts/bag.png';
import MarcaPagina from '../public/images/gifts/marca.png';
import CopoBucks from '../public/images/gifts/bucks.png';
import Caneta from '../public/images/gifts/caneta.png';
import Garrafa from '../public/images/gifts/squeeze.png';


const gifts = {
    1: {
        name: 'Adesivo Redondo',
        image: StickerComum,
        minPresence: 3
    },
    2: {
        name: 'Adesivo Metalizado',
        image: StickerMetalizado,
        minPresence: 6
    },
    3: {
        name: 'Marca Página',
        image: MarcaPagina,
        minPresence: 7
    },
    4: {
        name: 'Caneta com Touch',
        image: Caneta,
        minPresence: 8
    },
    5: {
        name: 'Chaveiro',
        image: Chaveiro,
        minPresence: 11
    },
    6: {
        name: 'Copo Bucks',
        image: CopoBucks,
        minPresence: 15
    },
    7: {
        name: 'EcoBag',
        image: EcoBag,
        minPresence: 18
    },
    8: {
        name: 'Garrafa Squeeze',
        image: Garrafa,
        minPresence: 22
    }
}

export default gifts;
