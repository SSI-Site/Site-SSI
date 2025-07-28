import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// assets
import Code from '../../../public/images/icons/code.svg'
import Coffee from '../../../public/images/icons/coffee.svg'
import LogoPrincipal from '../../../public/images/logos/logo_principal.svg'
import { InstagramLogo, LinkedInLogo, YouTubeLogo } from '../../components/SocialMediaLogos'

const Footer = () => {
    const router = useRouter()

    return (
        <FooterWrapper>
            <div className='footer-container'>
                <FooterLogo>
                    <MobileBackToTop
                        tabIndex={0}
                        aria-label="Voltar para o Topo"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}
                    >
                        Voltar ao topo
                        {/* Ícone seta para cima */}
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z" fill="white" />
                            <rect id="arrow" width="100" height="100%" />
                        </svg>
                    </MobileBackToTop>
                    <div className="logo-container">
                        <img
                            src={LogoPrincipal}
                            alt="Logo da Semana de Sistemas de Informação"
                            className="logo-image"
                        />
                    </div>

                    <p>
                        Semana de
                        <br />
                        Sistemas de Informação
                    </p>
                </FooterLogo>

                <FooterLinks>
                    <ul>
                        <li>
                            <Link legacyBehavior href="/" passHref>
                                <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/schedule" passHref>
                                <a className={router.pathname == '/schedule' ? 'active' : ''}>
                                    Programação
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/about" passHref>
                                <a className={router.pathname == '/about' ? 'active' : ''}>
                                    Evento
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/palestrantes" passHref>
                                <a className={router.pathname == '/palestrantes' ? 'active' : ''}>
                                    Palestrantes
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/co" passHref>
                                <a className={router.pathname == '/co' ? 'active' : ''}>
                                    Comissão Organizadora
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href='https://ctf.intheshell.page/' target='_blank'>
                                CTF
                            </a>
                        </li>
                    </ul>

                    <FooterEnding>
                        <p>Made with</p>
                        <img src={Code} alt="Ícone Programação" />
                        <p>and</p>
                        <img src={Coffee} alt="Ícone Café" />
                    </FooterEnding>
                </FooterLinks>

                <FooterLogos>
                    <DesktopBackToTop
                        tabIndex={0}
                        aria-label="Voltar para o Topo"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}
                    >
                        {/* Ícone seta para cima */}
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z" fill="white" />
                            <rect width="100" height="100%" fill="none" />
                        </svg>
                    </DesktopBackToTop>

                    <div className="logosWrapper">
                        <a
                            href="https://www.instagram.com/semanadesi/"
                            target="_blank"
                            aria-label="Instagram da Semana de Sistemas de Informação"
                        >
                            {/*Instagram Logo*/}
                            <InstagramLogo />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/comissão-organizadora-da-semana-de-sistemas-de-informação"
                            target="_blank"
                            aria-label="Linkedin da Semana de Sistemas de Informação"
                        >
                            {/*Linkedin Logo*/}
                            <LinkedInLogo />
                        </a>

                        <a
                            href="https://www.youtube.com/@semanadesi"
                            target="_blank"
                            aria-label="YouTube da Semana de Sistemas de Informação"
                        >
                            {/* YouTube Logo */}
                            <YouTubeLogo />
                        </a>
                    </div>
                </FooterLogos>

                <FooterEnding>
                    <p>Made with</p>
                    <img src={Code} alt="Ícone Programação" />
                    <p>and</p>
                    <img src={Coffee} alt="Ícone Café" />
                </FooterEnding>
            </div>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.footer`
    border-top: 1px solid var(--outline-neutrals-secondary);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 4rem 1rem 3rem;
        width: 100%;
        max-width: 1328px;
        gap: 3rem;

    }

    //Animation
    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
    }

    ul a {
        display: block;
        width: fit-content;
        padding: 0.125rem 0.5rem;
        background-color: transparent;
        white-space: nowrap;
        background-image: linear-gradient(to right,
            var(--background-neutrals-inverse),
            var(--background-neutrals-inverse)
        ); /* Coloca um background branco em cima do botão */
        background-size: 200%; /* faz o background-position com porcentagem funcionar */
        background-position-x: 200%; /* Tira o background branco do lugar */
        background-repeat: no-repeat;
        transition: 0.15s all ease-out;
        font-weight: 400;
        line-height: 1.5rem;
        color: var(--content-neutrals-primary);
    }

    ul a:hover,
    ul a:focus-visible {
        background-position-x: 100%;
        color: var(--content-neutrals-inverse);
    }

    ul a:focus-visible {
        outline: 2px solid var(--content-neutrals-inverse);
        outline-offset: 2px;
    }
    // Fim da animação

    // Rota ativada
    .active {
        background-color: var(--brand-primary);
        transition: 0.15s all ease-out;
        font-family: 'AT Aero Bold';
        color: var(--content-neutrals-fixed-white);

        &:hover,
        &:focus-visible {
            color: var(--content-neutrals-inverse);
        }
    }

  // Desktop
    @media (min-width:930px) {
        > div {
            display: grid;
            padding: 4rem 1rem;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 0rem;
        }
    }
`

const MobileBackToTop = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    background: linear-gradient(
        to bottom,
        var(--brand-primary) 50%,
        var(--background-neutrals-inverse) 50%
    );
    background-size: 100% 200%;
    background-position: top;
    transition: all 0.15s ease-out;
    cursor: pointer;
    margin-bottom: 3rem;
    color: var(--content-neutrals-fixed-white);
     
    path {
        fill: var(--content-neutrals-fixed-white);
    }

    rect {
        transform: translateY(100%);
    }

    &:hover,
    &:focus-visible {
        background-position: bottom;
        color: var(--content-neutrals-inverse);
        path {
            transition: all 0.15s ease-out;
            transform: translateY(0);
            fill: var(--content-neutrals-inverse);
        }
    }

    &:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 2px;
    }

    @media (min-width:850px) {
        display: none;
    }
`

const DesktopBackToTop = styled.div`
    display: none;

    @media (min-width:850px) {
        display: block;
        padding: 1rem;
        background: linear-gradient(
            to bottom,
            var(--brand-primary) 50%,
            var(--background-neutrals-inverse) 50%
        );
        background-size: 100% 200%;
        background-position: top;
        transition: all 0.15s ease-out;
        cursor: pointer;

        rect {
            transform: translateY(100%);
        }

        &:hover,
        &:focus-visible {
            background-position: bottom;

            path {
                transition: all 0.15s ease-out;
                fill: var(--content-neutrals-inverse);
                transform: translateY(0);
            }
        }

        &:focus-visible {
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
        }
    }
`

const FooterLogo = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-container {
        width: 100%;
        max-width: 5rem;
    }

    .logo-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    p {
        text-align: center;
        line-height: 1.2;
    }

    // Desktop
    @media (min-width:850px) {
        width: fit-content;
        height: 100%;
        justify-self: start;
    }
`

const FooterLinks = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    transition: 0.15s all ease-out;

    div {
        display: none;
    }

    // Desktop
    @media (min-width:850px) {
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        grid-column-start: 2;
        grid-column-end: 5;

        div {
            display: flex;
        }

        ul {
            margin: auto;
            width: 65%;
            margin-bottom: 5.625rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-auto-flow: column;
            gap: 1.5rem 2.5rem;
        }
    }
`

const FooterLogos = styled.div`
    display: flex;
    gap: 3rem;
    width: 100%;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .fillAnimation {
        transform: translateX(-100%);
        transition: all 0.15s ease-out;
    }

    .animation:hover,
    a:focus-visible {
        cursor: pointer;
        transition: all 0.15s ease-out;

        .fillAnimation {
            transform: translateX(0);
        }
    }

    a:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 2px;
    }

    .logosWrapper {
        display: flex;
        gap: 1.5rem;
    }

    @media (min-width:850px) {
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
        width: fit-content;
        justify-self: end;
    }
`

const FooterEnding = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media (min-width:850px) {
        display: none;
    }
`
