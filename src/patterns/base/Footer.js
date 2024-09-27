import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// assets
import Code from '../../../public/images/icons/code.svg'
import Coffee from '../../../public/images/icons/coffee.svg'
import LogoPrincipal from '../../../public/images/logos/logo_principal.svg'

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
                            <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="Instagram da Semana de Sistemas de Informação">
                                <mask id="mask0_2776_488" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                    <path d="M3.33105 3.33008V36.6634H36.6644V3.33008H3.33105ZM16.7727 12.2652C17.7973 11.8535 18.8936 11.6495 19.9977 11.6651C22.2079 11.6651 24.3275 12.5414 25.8903 14.1042C27.4531 15.667 28.3311 17.7866 28.3311 19.9967C28.3311 22.2069 27.4531 24.3265 25.8903 25.8893C24.3275 27.4521 22.2079 28.3301 19.9977 28.3301C18.8936 28.3457 17.7973 28.1417 16.7727 27.73C15.748 27.3182 14.8155 26.7069 14.0291 25.9317C13.2428 25.1564 12.6184 24.2325 12.1922 23.2138C11.766 22.1951 11.5465 21.1018 11.5465 19.9976C11.5465 18.8933 11.766 17.8001 12.1922 16.7813C12.6184 15.7626 13.2428 14.8388 14.0291 14.0635C14.8155 13.2882 15.748 12.6769 16.7727 12.2652ZM27.3287 9.80336C27.7015 9.41533 28.21 9.1866 28.7477 9.16508V9.16174C29.3003 9.16174 29.8302 9.38124 30.2209 9.77194C30.6116 10.1626 30.8311 10.6925 30.8311 11.2451C30.8311 11.7976 30.6116 12.3275 30.2209 12.7182C29.8302 13.1089 29.3003 13.3284 28.7477 13.3284C28.21 13.3069 27.7015 13.0782 27.3287 12.6901C26.9559 12.3021 26.7477 11.7849 26.7477 11.2467C26.7477 10.7086 26.9559 10.1914 27.3287 9.80336Z" fill="white" />
                                    <path d="M19.9977 14.9984C20.6619 14.9862 21.3219 15.1064 21.939 15.3521C22.5562 15.5978 23.1183 15.964 23.5924 16.4293C24.0664 16.8947 24.443 17.4498 24.7001 18.0623C24.9572 18.6748 25.0897 19.3324 25.0898 19.9967C25.0899 20.661 24.9577 21.3187 24.7008 21.9313C24.4439 22.5439 24.0675 23.0991 23.5935 23.5646C23.1196 24.0301 22.5577 24.3965 21.9406 24.6424C21.3235 24.8883 20.6636 25.0088 19.9994 24.9967C18.6733 24.9967 17.4015 24.47 16.4639 23.5323C15.5262 22.5946 14.9994 21.3228 14.9994 19.9967C14.9994 18.6707 15.5262 17.3989 16.4639 16.4612C17.4015 15.5235 18.6733 14.9967 19.9994 14.9967L19.9977 14.9984Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_2776_488)">
                                    <rect x="0.330078" y="0.330078" width="40" height="40" fill="white" />
                                </g>
                                {/*Mask utilizada para realizar a animação */}
                                <g mask="url(#mask0_2776_488)">
                                    <rect className="fillAnimation" fill="#9638FF" width="40" height="40" />
                                </g>
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/company/comissão-organizadora-da-semana-de-sistemas-de-informação"
                            target="_blank"
                            aria-label="Linkedin da Semana de Sistemas de Informação"
                        >
                            {/*Linkedin Logo*/}
                            <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn da Semana de Sistemas de Informação">
                                <mask id="mask0_2776_492" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                    <path fillRule="evenodd" d="M36.34 6.70333V32.6267V36.33H32.6356H6.70444H3V32.6267V6.70333V3H6.70444H32.6356H36.34V6.70333ZM31.7094 21.887V31.7008H26.5417V22.5721C26.5417 21.8846 26.2685 21.2252 25.7822 20.7391C25.2959 20.2529 24.6364 19.9798 23.9486 19.9798C22.5224 19.9798 21.374 21.1463 21.374 22.5721V31.7008H16.2063V16.2024H21.374V18.2577C22.2631 16.8134 24.0968 15.8506 25.6712 15.8506C27.2726 15.8506 28.8085 16.4865 29.9409 17.6186C31.0733 18.7506 31.7094 20.286 31.7094 21.887ZM12.387 12.3841C11.8034 12.9675 11.0119 13.2953 10.1866 13.2953C8.46406 13.2953 7.05637 11.9065 7.05637 10.1845C7.05637 9.35452 7.38616 8.55857 7.9732 7.97171C8.56023 7.38484 9.35643 7.05515 10.1866 7.05515C11.9092 7.05515 13.2984 8.46242 13.2984 10.1845C13.2984 11.0095 12.9705 11.8007 12.387 12.3841ZM12.7612 16.2024V31.7008H7.63056V16.2024H12.7612Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_2776_492)">
                                    <rect width="40" height="40" fill="white" />
                                </g>

                                {/*Mask utilizada para realizar a animação */}
                                <g mask="url(#mask0_2776_492)">
                                    <rect className="fillAnimation" fill="#9638FF" width="40" height="50" />
                                </g>
                            </svg>
                        </a>

                        <a
                            href="https://www.youtube.com/@semanadesi"
                            target="_blank"
                            aria-label="YouTube da Semana de Sistemas de Informação"
                        >
                            {/* YouTube Logo */}
                            <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="YouTube da Semana de Sistemas de Informação" >
                                <mask id="mask0_2769_498"  maskUnits="userSpaceOnUse" x="3" y="8" width="34" height="24">
                                    <path d="M16.3333 24.6667L24.9833 19.6667L16.3333 14.6667V24.6667ZM35.6 11.6167C35.8167 12.4 35.9667 13.45 36.0667 14.7833C36.1833 16.1167 36.2333 17.2667 36.2333 18.2667L36.3333 19.6667C36.3333 23.3167 36.0667 26 35.6 27.7167C35.1833 29.2167 34.2167 30.1833 32.7167 30.6C31.9333 30.8167 30.5 30.9667 28.3 31.0667C26.1333 31.1833 24.15 31.2333 22.3167 31.2333L19.6667 31.3333C12.6833 31.3333 8.33333 31.0667 6.61667 30.6C5.11667 30.1833 4.15 29.2167 3.73333 27.7167C3.51667 26.9333 3.36667 25.8833 3.26667 24.55C3.15 23.2167 3.1 22.0667 3.1 21.0667L3 19.6667C3 16.0167 3.26667 13.3333 3.73333 11.6167C4.15 10.1167 5.11667 9.15 6.61667 8.73333C7.4 8.51667 8.83333 8.36667 11.0333 8.26667C13.2 8.15 15.1833 8.1 17.0167 8.1L19.6667 8C26.65 8 31 8.26667 32.7167 8.73333C34.2167 9.15 35.1833 10.1167 35.6 11.6167Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_2769_498)">
                                    <rect width="40" height="40" fill="white"/>
                                </g>

                                {/*Mask utilizada para realizar a animação */}
                                <g mask="url(#mask0_2769_498)">
                                    <rect className="fillAnimation" fill="#9638FF" width="40" height="40" />
                                </g>
                            </svg>
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
    border-top: 1px solid var(--color-neutral-secondary);
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
        background-image: linear-gradient(
            var(--color-neutral-50),
            var(--color-neutral-50)
        ); /* Coloca um background branco em cima do botão */
        background-size: 200%; /* faz o background-position com porcentagem funcionar */
        background-position-x: 200%; /* Tira o background branco do lugar */
        background-repeat: no-repeat;
        transition: 0.15s all ease-out;
        font-weight: 400;
        line-height: 1.5rem;
    }

    ul a:hover,
    ul a:focus-visible {
        background-position-x: 100%;
        color: var(--color-neutral);
    }

    ul a:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
    // Fim da animação

    // Rota ativada
    .active {
        background-color: var(--color-primary);
        transition: 0.15s all ease-out;
        font-family: 'AT Aero Bold';

        &:hover,
        &:focus-visible {
            color: var(--color-primary);
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
        var(--color-primary) 50%,
        var(--color-neutral-50) 50%
    );
    background-size: 100% 200%;
    background-position: top;
    transition: all 0.15s ease-out;
    cursor: pointer;
    margin-bottom: 3rem;

    rect {
        transform: translateY(100%);
    }

    &:hover,
    &:focus-visible {
        background-position: bottom;
        color: var(--color-primary);

        path {
            transition: all 0.15s ease-out;
            fill: var(--color-primary);
            transform: translateY(0);
        }
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
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
            var(--color-primary) 50%,
            var(--color-neutral-50) 50%
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
                fill: var(--color-primary);
                transform: translateY(0);
            }
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
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
        outline: 2px solid var(--color-primary);
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
