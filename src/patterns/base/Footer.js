import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// assets
import LogoPrincipal from '../../../public/images/logos/logo_principal.svg'
import Coffee from '../../../public/images/icons/coffee.svg'
import Code from '../../../public/images/icons/sites.svg'
import Copyright from '../../../public/images/icons/copyright.svg'

const Footer = () => {

    const router = useRouter();

    return (
        <FooterWrapper>
            <FooterLogo>
                <Image 
                src = { LogoPrincipal } 
                width = { 100 } 
                height = { 100 }
                alt = "Logo da Semana de Sistemas de Informação"
                />

                <div style = {{display: 'flex', gap: '.5rem'}}>
                    <Image
                    src = { Copyright }
                    width = { 20 }
                    height = { 20 }
                    alt = "Copyright Logo"
                    />
                    <p>2024</p>
                </div>
            </FooterLogo>

            <FooterLinks>
                <ul>
                    <li>
                        <Link href = "/" passHref>
                            <a className = {router.pathname == '/' ? 'active': ''}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href = '/schedule' passHref>
                            <a className = {router.pathname == '/schedule' ? 'active' : ''}>
                                Programação
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link  href = "/about" passHref>
                            <a className = {router.pathname == '/about' ? 'active' : ''}>
                                Evento
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href = "/partnership" passHref>
                            <a className = {router.pathname == '/partnership' ? 'active' : ''}>
                                Parcerias
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href = "/co" passHref>
                            <a className = {router.pathname == '/co' ? 'active' : ''}>
                                Comissão Organizadora
                            </a>
                        </Link>
                    </li>
                </ul>

                <FooterEnding>
                    <p>Made with</p>

                    <Image
                    src=  { Code }
                    width = { 25 }
                    height = { 25 }
                    />

                    <p>and</p>

                    <Image
                    src = { Coffee }
                    width = { 25 }
                    height = { 25 }
                    />

                </FooterEnding>
            </FooterLinks>

            <FooterLogos>
                <div className = "arrowWrapper" tabIndex = {0} aria-label="Voltar para o Topo"
                onClick = { () => {
                    window.scrollTo(0, 0)
                }}
                >

                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z" fill="white"/>

                        <clipPath id = "teste">
                            <path d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z" />
                        </clipPath>
                        <g clipPath = "url(#teste)">
                            <rect id = "arrow" width = "100" height = "100%"/>
                        </g>
                    </svg>

                </div>

                <div className = "logosWrapper">

                    <a href = "https://www.instagram.com/semanadesi/" target = "_blank" aria-label = "Instagram da Semana de Sistemas de Informação">
                        {/*Instagram Logo*/}
                        <svg className = "animation" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram da Semana de Sistemas de Informação">
                            <mask id="mask0_378_2240" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                <path d="M21.711 3.33213C22.9273 3.32746 24.1435 3.33969 25.3594 3.3688L25.6827 3.38046C26.056 3.3938 26.4244 3.41046 26.8694 3.43046C28.6427 3.5138 29.8527 3.7938 30.9144 4.20546C32.0144 4.6288 32.941 5.20213 33.8677 6.1288C34.715 6.96147 35.3708 7.96871 35.7894 9.08046C36.201 10.1421 36.481 11.3538 36.5644 13.1271C36.5844 13.5705 36.601 13.9405 36.6144 14.3138L36.6244 14.6371C36.654 15.8524 36.6668 17.0681 36.6627 18.2838L36.6644 19.5271V21.7105C36.6685 22.9267 36.6557 24.1429 36.626 25.3588L36.616 25.6821C36.6027 26.0555 36.586 26.4238 36.566 26.8688C36.4827 28.6421 36.1994 29.8521 35.7894 30.9138C35.3721 32.0267 34.7162 33.0348 33.8677 33.8671C33.0343 34.7143 32.0266 35.37 30.9144 35.7888C29.8527 36.2005 28.6427 36.4805 26.8694 36.5638C26.4244 36.5838 26.056 36.6005 25.6827 36.6138L25.3594 36.6238C24.1435 36.6534 22.9273 36.6662 21.711 36.6621L20.4677 36.6638H18.286C17.0698 36.6679 15.8536 36.6551 14.6377 36.6255L14.3144 36.6155C13.9187 36.6011 13.5232 36.5844 13.1277 36.5655C11.3544 36.4821 10.1444 36.1988 9.08104 35.7888C7.96885 35.371 6.96144 34.7152 6.12937 33.8671C5.28112 33.0343 4.62475 32.0264 4.20604 30.9138C3.79437 29.8521 3.51437 28.6421 3.43104 26.8688C3.41248 26.4733 3.39581 26.0778 3.38104 25.6821L3.37271 25.3588C3.34198 24.1429 3.32809 22.9267 3.33104 21.7105V18.2838C3.32639 17.0681 3.33861 15.8525 3.36771 14.6371L3.37937 14.3138C3.39271 13.9405 3.40937 13.5705 3.42937 13.1271C3.51271 11.3521 3.79271 10.1438 4.20437 9.08046C4.62333 7.96816 5.28098 6.9612 6.13104 6.13046C6.96253 5.28172 7.96931 4.62475 9.08104 4.20546C10.1444 3.7938 11.3527 3.5138 13.1277 3.43046L14.3144 3.38046L14.6377 3.37213C15.853 3.34142 17.0687 3.32753 18.2844 3.33046L21.711 3.33213ZM19.9977 11.6655C18.8936 11.6498 17.7973 11.8538 16.7727 12.2656C15.748 12.6773 14.8155 13.2886 14.0291 14.0639C13.2428 14.8392 12.6184 15.763 12.1922 16.7817C11.766 17.8004 11.5465 18.8937 11.5465 19.998C11.5465 21.1022 11.766 22.1955 12.1922 23.2142C12.6184 24.2329 13.2428 25.1567 14.0291 25.932C14.8155 26.7073 15.748 27.3186 16.7727 27.7303C17.7973 28.1421 18.8936 28.3461 19.9977 28.3305C22.2078 28.3305 24.3275 27.4525 25.8903 25.8897C27.4531 24.3269 28.331 22.2073 28.331 19.9971C28.331 17.787 27.4531 15.6674 25.8903 14.1046C24.3275 12.5418 22.2078 11.6655 19.9977 11.6655ZM19.9977 14.9988C20.6619 14.9866 21.3218 15.1068 21.939 15.3525C22.5562 15.5982 23.1183 15.9644 23.5923 16.4297C24.0664 16.895 24.443 17.4502 24.7001 18.0627C24.9572 18.6752 25.0897 19.3328 25.0898 19.9971C25.0899 20.6614 24.9577 21.3191 24.7008 21.9317C24.4438 22.5443 24.0674 23.0995 23.5935 23.565C23.1196 24.0305 22.5577 24.3969 21.9406 24.6428C21.3235 24.8887 20.6636 25.0091 19.9994 24.9971C18.6733 24.9971 17.4015 24.4703 16.4638 23.5327C15.5262 22.595 14.9994 21.3232 14.9994 19.9971C14.9994 18.671 15.5262 17.3993 16.4638 16.4616C17.4015 15.5239 18.6733 14.9971 19.9994 14.9971L19.9977 14.9988ZM28.7477 9.16546C28.21 9.18698 27.7015 9.41571 27.3287 9.80375C26.9559 10.1918 26.7477 10.709 26.7477 11.2471C26.7477 11.7852 26.9559 12.3025 27.3287 12.6905C27.7015 13.0785 28.21 13.3073 28.7477 13.3288C29.3002 13.3288 29.8301 13.1093 30.2208 12.7186C30.6116 12.3279 30.831 11.798 30.831 11.2455C30.831 10.6929 30.6116 10.163 30.2208 9.77232C29.8301 9.38162 29.3002 9.16213 28.7477 9.16213V9.16546Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_378_2240)">
                                <rect x="0.330078" y="0.330078" width="40" height="40" fill="white"/>
                            </g>

                            {/*Mask utilizada para realizar a animação */}
                            <g mask ="url(#mask0_378_2240)">
                                <rect className = "fillAnimation" fill="#9638FF" width = "40" height = "40"/>
                            </g> 
                        </svg>
                    </a>

                    <a href = "https://www.linkedin.com/company/comissão-organizadora-da-semana-de-sistemas-de-informação" target = "_blank" aria-label = "Linkedin da Semana de Sistemas de Informação">
                        {/*Linkedin Logo*/}
                        <svg className = "animation" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-label="Linkedin da Semana de Sistemas de Informação">
                            <mask id="mask0_378_2245"  maskUnits="userSpaceOnUse" x="5" y="5" width="30" height="30">
                                <path d="M31.6667 5C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H31.6667ZM30.8333 30.8333V22C30.8333 20.559 30.2609 19.177 29.2419 18.1581C28.223 17.1391 26.841 16.5667 25.4 16.5667C23.9833 16.5667 22.3333 17.4333 21.5333 18.7333V16.8833H16.8833V30.8333H21.5333V22.6167C21.5333 21.3333 22.5667 20.2833 23.85 20.2833C24.4688 20.2833 25.0623 20.5292 25.4999 20.9668C25.9375 21.4043 26.1833 21.9978 26.1833 22.6167V30.8333H30.8333ZM11.4667 14.2667C12.2093 14.2667 12.9215 13.9717 13.4466 13.4466C13.9717 12.9215 14.2667 12.2093 14.2667 11.4667C14.2667 9.91667 13.0167 8.65 11.4667 8.65C10.7196 8.65 10.0032 8.94675 9.47498 9.47498C8.94675 10.0032 8.65 10.7196 8.65 11.4667C8.65 13.0167 9.91667 14.2667 11.4667 14.2667ZM13.7833 30.8333V16.8833H9.16667V30.8333H13.7833Z" fill="white"/>
                            </mask>
                            <g  mask="url(#mask0_378_2245)"> 
                                <rect width="40" height="40" fill = "white"/>
                            </g>

                            {/*Mask utilizada para realizar a animação */}
                            <g mask ="url(#mask0_378_2245)">
                                <rect className = "fillAnimation" fill="#9638FF" width = "40" height = "40"></rect>
                            </g> 
                        </svg>
                    </a>

                    <a href = "https://www.twitch.tv/each_ssi" target = "_blank"  aria-label = "Twitch da Semana de Sistemas de Informação">
                        <svg className = "animation" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Twitch da Semana de Sistemas de Informação">
                            <mask id="mask0_378_2250" maskUnits="userSpaceOnUse" x="5" y="3" width="30" height="34">
                                <path d="M19.4033 9.88008H21.7866V17.0134H19.4033M25.9533 9.88008H28.3366V17.0134H25.9533M11.67 3.33008L5.71997 9.28008V30.7134H12.8533V36.6634L18.82 30.7134H23.57L34.2866 19.9967V3.33008M31.9033 18.8134L27.1533 23.5634H22.3866L18.22 27.7301V23.5634H12.8533V5.71341H31.9033V18.8134Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_378_2250)">
                                <rect x="-0.280029" y="0.330078" width="40" height="40" fill="white"/>
                            </g>

                            <g mask="url(#mask0_378_2250)">
                                <rect className = "fillAnimation" fill="#9638FF" width = "40" height = "40"></rect>
                            </g> 
                        </svg>
                    </a>
                </div>

            </FooterLogos>

            <FooterEnding>
                <p>Made with</p>

                <Image
                src=  { Code }
                width = { 25 }
                height = { 25 }
                alt = "Ícone Programação"
                />

                <p>and</p>

                <Image
                src = { Coffee }
                width = { 25 }
                height = { 25 }
                alt = "Ícone Café"
                />

            </FooterEnding>
        </FooterWrapper>
    )
}

export default Footer;

const FooterWrapper = styled.footer`
    border-top: 2px solid #4B4B4B;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3.5rem ;
    width: 100%;
    max-width: 1232px;
    gap: 3rem;
    font-size: 100%;
    background-color: var(--color-neutral); 

    //Animation 
    ul {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: center;
    }

    ul a {
        display: block;
        width: fit-content;
        padding: 0.125rem 0.5rem;
        background-color: transparent;
        white-space: nowrap;
        background-image: linear-gradient(var(--color-neutral-50), var(--color-neutral-50)); /* Coloca um background branco em cima do botão */
        background-size: 200%;                                                              /* faz o background-position com porcentagem funcionar */
        background-position-x: 200%;                                                        /* Tira o background branco do lugar */
        background-repeat: no-repeat;
        transition: 100ms all ease-out;
    }

    ul a:hover, ul a:focus{
        background-position-x:100%; 
        color: var(--color-neutral-900);
    }
    // Fim da animação

    // Rota ativada
    .active{
        background-color: var(--color-primary);
        transition: 100ms all ease-out;
        font-family: 'AT Aero Bold';
        font-weight: 400;

        &:hover, &:focus{
            color: var(--color-primary)
        };
    }

    // Desktop
    @media (min-width:850px) {
        display: grid;
        padding: 4rem 0rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0rem;
    }
`

const FooterLogo = styled.div`
    width: 40%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;

    // Desktop
    @media (min-width:850px) {
        width: 100%;
        height: 100%;
        justify-content: space-between
    }
`

const FooterLinks = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    transition: 100ms all ease-out;

    div{
        display: none;
    }

    a:hover, a:focus{
        background-position: left;
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
        
        ul{     
            margin: auto;
            width: 65%;
            margin-bottom: 5.625rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-auto-flow: column;
            gap: 1.5rem;
        }
    }
`

const FooterLogos = styled.div`
    display: flex;
    gap: 3rem;
    width: 100%;
    align-items: center;
    justify-content: center;

    .fillAnimation{
        transform: translateX(-100%);
        transition: all 100ms ease-out;
    }

    .animation:hover, .animation:focus{
        cursor: pointer;
        transition: all 100ms ease-out;

        .fillAnimation{
            transform: translateX(0);
        }      
    }
    
    .arrowWrapper {
        display: none;
        padding: 1rem;
        background: linear-gradient(to bottom, var(--color-primary) 50%, var(--color-neutral-50) 50%);
        background-size: 100% 200%;
        background-position: top;
        transition: all 100ms ease-out;
        cursor: pointer;

    }

    .logosWrapper {
        display: flex;
        gap: 1.5rem;
    }

    @media (min-width: 850px){
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;

        .arrowWrapper {
            display: block;
            
            #arrow{
                transform: translateY(100%);
            }
        }

        .arrowWrapper:hover, .arrowWrapper:focus{
            background-position: bottom;

            #arrow{
                transition: all 100ms ease-out;
                fill: var(--color-primary);
                transform: translateY(0);
            }
        }    
    }
`

const FooterEnding = styled.div`
    display: flex;
    gap: .5rem;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media (min-width:850px) {
        display: none;
    }
`