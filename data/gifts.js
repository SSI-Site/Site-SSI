// assets
import StickerComum from '../public/images/gifts/sticker-comum.png';
import StickerMetalizado from '../public/images/gifts/sticker-metalizado.png';
import ProtetorWebcam from '../public/images/gifts/protetor-webcam.png';
import Caneta from '../public/images/gifts/caneta.png';
import BlocoDeNotas from '../public/images/gifts/bloco-de-notas.png';
import Copo from '../public/images/gifts/copo.png';

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
        name: 'Protetor de Webcam',
        image: ProtetorWebcam,
        totalPres: 15,
        presentialPres: 9
    },
    4: {
        name: 'Caneta',
        image: Caneta,
        totalPres: 20,
        presentialPres: 12
    },
    5: {
        name: 'Bloco de Notas',
        image: BlocoDeNotas,
        totalPres: 25,
        presentialPres: 15
    },
    6: {
        name: 'Copo',
        image: Copo,
        totalPres: 30,
        presentialPres: 18
    }
}

export default gifts;
