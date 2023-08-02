// assets
import Sticker from '../public/images/gifts/sticker.png';
import Bottom from '../public/images/gifts/bottom.png';
import Keychain from '../public/images/gifts/keychain.png';
import Pen from '../public/images/gifts/pen.png';
import Holder from '../public/images/gifts/holder.png';
import Copo from '../public/images/gifts/copo.png';
import Bag from '../public/images/gifts/bag.png';

const gifts = {
    1: {
        name: 'Sticker',
        image: Sticker,
        totalPres: 3,
        presentialPres: 1
    },
    2: {
        name: 'Bottom',
        image: Bottom,
        totalPres: 5,
        presentialPres: 3
    },
    3: {
        name: 'Chaveiro',
        image: Keychain,
        totalPres: 11,
        presentialPres: 6
    },
    4: {
        name: 'Caneta',
        image: Pen,
        totalPres: 15,
        presentialPres: 7
    },
    5: {
        name: 'Porta celular',
        image: Holder,
        totalPres: 22,
        presentialPres: 13
    },
    6: {
        name: 'Copo',
        image: Copo,
        totalPres: 29,
        presentialPres: 18
    },
    8: {
        name: 'Sacochila',
        image: Bag,
        totalPres: 35,
        presentialPres: 20
    }
}

export default gifts;
