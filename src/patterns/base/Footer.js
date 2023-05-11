import styled from 'styled-components';
import { useRouter } from 'next/router';

// assets
import LogoPrincipal from '../../../public/images/logos/logo_principal.svg';
import InstagramLogo from '../../../public/images/social_media/InstagramLogo.svg';
import FacebookLogo from '../../../public/images/social_media/FacebookLogo.svg';
import LinktreeLogo from '../../../public/images/social_media/LinktreeLogo.svg';
import { Link } from 'react-scroll';

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
                
                </div>
                <div className='redes'>
                    <div className='links'>
                        <h3 className='links_header'>
                            Links rápidos
                        </h3>
                            <Link href="/">Home</Link>
                            <Link href="/about">Evento</Link>
                            <Link href="/schedule">Programação</Link>
                            <Link href="/partnerships">Parcerias</Link>
                            <Link href="/co">Comissão Organizadora</Link>
                            <Link href="https://ctfssi.intheshell.page">CTF</Link>
                            <Link href="/hackssi">HackSSI</Link>
                    </div>
                    <div className='logos'>
                        <h3 className='logos_header'>Redes Sociais</h3>
                        <div className='logos_midia'>
                            <a href='https://www.instagram.com/semanadesi/' target="_blank" rel="noreferrer">
                                <img src={InstagramLogo} alt="Instagram"></img>
                            </a>
                            <a href='https://linktr.ee/SemanaDeSI' target="_blank" rel="noreferrer">
                                <img src={LinktreeLogo} alt="Facebook"></img>
                            </a>
                            <a href='https://www.facebook.com/SSIUSP' target="_blank" rel="noreferrer">
                                <img alt="Linktree" src={FacebookLogo}></img>
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
    height: 800px;
    opacity: 0.8;
    text-align: center;
    margin-bottom:0;

    background: #121212;

    p {
        color: white;
        margin-top:2rem;
        font-size:1.25rem;
    }

    h3 {
        margin-top:3.5rem;
        font-size:1.25rem;
        text-align: center;
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

    .links {
        display:flex;
        flex-direction:column;
        justify-content: center;
        margin-left:5.438rem;
        gap: 1rem;
        margin-bottom:56px;
    }

    .links_header {
        margin-left:-5rem;
    }
    
    .links a {
        margin-top:0.2rem;
        width:fit-content;
        font-weight:400;
    }

    .ssi img {
        width: 7.324rem;
        align-self: center;
       
    }

    .redes img {
        height: 4.5rem;
        margin: 0 1.06rem;
    }

    .logos_midia {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .logos_midia img {
        width:42.63px;
        height:40px;
    }

    .logos_midia a {
        height:3rem;
    }

    .logos_header {
        margin-top:42px;

    }

    .logos_midia img:hover {
        filter: brightness(60%) sepia(0) saturate(0) hue-rotate(360deg);
        transition: 0.2s all;
        cursor: pointer;
    }

    .logos_midia img:active {
        filter: brightness(60%) sepia(0) saturate(0) hue-rotate(360deg);
        transition: 0.2s all;
        cursor: pointer;
    }

    .redes{
        background: #121212;
        padding-bottom:60px;
    }

    @media (min-width:480px) {}

    @media (min-width:600px) { /** mudar para horizontal */
        height:380px;
    }

    @media (min-width:801px) {
        height:26.75rem;
        flex-direction: row;
        align-items: center;
        padding: 0 4 0 0rem;
        width:100%;

        .ssi {
            height: 50%;
            margin-top: 0;

        }

        .ssi p {
            width:10rem; 
        }

        .logo-box {
            margin-left:5vw;
        }

        .ssi img {
            width: 7.3rem;
            height:8.25rem;
        }

        .redes {
            display:flex;
            flex-direction:row;
            margin-left:10vw;
            padding-bottom:0px;
        }

        .redes img {
            height: 3rem;
            margin: 0 0.9rem;
        }

        .links {
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            text-align:left;
            margin-left:0px;
            margin-bottom:0px;
        }

        .links_header {
            position:absolute;
            top:1.75rem;
            margin-left:0vw;
            margin-right:5vw;
        }
        

        .logos{
            margin-top:-5.6rem;
            margin-left:5vw;
            margin-right:1vw;
        }


        .logos_header{
            margin-left:-2vw;
        }
    }

    @media (min-width:1000px) {
        .ssi p {
            width:16.8rem; 
        }


    }

    @media (min-width:1230px) {
        .logos{
            margin-top:-6.3rem;
        }
    }

    @media (min-width:1400px) {
        .ssi p {
            width:16.8rem; 
        }

        .logo-box {
            margin-left:7.5vw;
        }
        
        .redes {
            margin-left:14.967vw;
        }

        .logos{
            margin-left:15.226vw;
            margin-right:7.778vw;
        }

        .logos_header{
            margin-left:-2vw;
        }
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