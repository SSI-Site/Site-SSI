import styled from 'styled-components';
import { useRouter } from 'next/router';

// assets
import LogoPrincipal from '../../../public/images/logos/logo_principal_horizontal.svg';
import InstagramLogo from '../../../public/images/social_media/InstagramLogo.svg';
import FacebookLogo from '../../../public/images/social_media/FacebookLogo.svg';
import LinktreeLogo from '../../../public/images/social_media/LinktreeLogo.svg';

const Footer = () => {
    
    const router = useRouter();

    return (
        <>
            <FooterWrapper>
                <div className='ssi'>
                    <div onClick={() => router.push('/')} className="logo-box">
                        <img src={LogoPrincipal} alt="logo" />
                        <p>
                            Semana de Sistemas de <br />Informação 2023
                        </p>
                    </div>
                    <div className='footer-blur'></div>
                </div>
                <div className='redes'>
                    <h5>
                        SIGA-NOS NAS REDES SOCIAIS
                    </h5>
                    <div className='logos_midia'>
                        <div>
                            <a href="https://www.instagram.com/semanadesi/" target="_blank" rel="noreferrer">
                                <img src={InstagramLogo} alt="Instagram"></img>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/SSIUSP" target="_blank" rel="noreferrer">
                                <img src={FacebookLogo} alt="Facebook"></img>
                            </a>
                        </div>
                        <div>
                            <a href="https://linktr.ee/SemanaDeSI" target="_blank" rel="noreferrer">
                                <img src={LinktreeLogo} alt="Linktree"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </FooterWrapper >
        </>
    )
}

export default Footer;


const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 33.8rem;
    padding-bottom: 1rem;
    opacity: 0.8;
    text-align: center;

    background: #151023;

    p, h5 {
        color: white;
    }

    .ssi {
        margin-top: 2rem;
        height: 17rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .logo-box {
        display: flex;
        flex-direction: column;
    }

    .logo-box:hover {
        cursor: pointer;
    }

    .ssi a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: white;
    }

    .ssi .footer-blur {
        width: 100%;
        height: 50%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(138, 69, 198, 0.1);
        filter: blur(15px);
        z-index: -1;
    }

    .ssi img {
        width: 8.2rem;
        align-self: center;
        margin-bottom: 0.3rem;
    }

    .redes img {
        height: 4.5rem;
        margin: 0 1.06rem;
    }

    .logos_midia {
        margin-top: 1.3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .logos_midia img:hover {
        filter: brightness(60%) sepia(0) saturate(0) hue-rotate(360deg);
        transition: 0.2s all;
    }

    @media (min-width:480px) {}

    @media (min-width:600px) { /** mudar para horizontal */
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem;
        height: 13rem;

        .ssi {
            height: 50%;
            margin-top: 0;
        }

        .ssi img {
            width: 5.5rem;
        }

        .redes img {
            height: 3rem;
            margin: 0 0.9rem;
        }

        .logos_midia {
            margin-top: 0.9rem;
        }
    }

    @media (min-width:801px) {
        padding: 0 6rem;
    }

    @media (min-width:1021px) {
        padding: 0 9rem;
    }

    @media (min-width:1400px) {
        padding: 0 17rem;
    }

    @media (min-width:1600px) {
        width: calc(100vw - 10px);
        margin-left: calc( (1500px - 100vw - 10px) / 2 );
    }

    @media (min-width:2200px) {
        padding: 0 20rem;
        /* 4k */
    }
`