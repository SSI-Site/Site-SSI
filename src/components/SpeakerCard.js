import React from "react";
import styled from "styled-components";

// assets
import SpeakerBottomDesktop from '../../public/images/background_imgs/detail.png';
import Image from "next/image";
import LogoLinkedInDark from '../../public/images/partnerships/icons/logo_linkedin_dark.svg';
import LogoLinkedInLight from '../../public/images/partnerships/icons/logo_linkedin_light.svg';
import LogoInstagramDark from '../../public/images/partnerships/icons/logo_instagram_dark.svg';
import LogoInstagramLight from '../../public/images/partnerships/icons/logo_instagram_light.svg';
import lectureImage from '../../public/images/schedule/lecture-backgound.jpg';

const SpeakerCard = ({ speaker, setIsOpen, speakerImage }) => {

    return (
        <SpeakerWrapper role="dialog" aria-modal="true" aria-labelledby="speaker-title">
            <SpeakerContent>
                <SpeakerHead>
                    <h4 id="speaker-title">Informações do Palestrante</h4>
                    <button type="button" onClick={() => setIsOpen(false)} aria-label="Fechar">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="currentColor"/>
                        </svg>
                    </button>
                </SpeakerHead>

                <SpeakerInfo>
                    <div className='imgDiv'>
                        <Image src={speakerImage} alt={`Foto de ${speaker['name']}`} width={100} height={100}/>
                    </div>

                    <div className='headTextWrapper'>
                        <div>
                            <h5>{speaker['name']}</h5>
                            <p>{speaker['pronouns']}</p>
                        </div>

                        <div>
                            <p className="speaker-role">{speaker['role']}</p>
                        </div>
                    </div>
                </SpeakerInfo>

                <SpeakerDesc>
                    {speaker['description'] &&
                        <h6>Sobre</h6>
                    }
                    <p>{speaker['description']}</p>
                </SpeakerDesc>

                <SocialMedia>
                    {(speaker['linkedin_link'] || speaker['instagram_link']) && 
                        <h6>Redes Sociais</h6>
                    }
                    <div className="speaker-socials">
                        {speaker['linkedin_link'] && 
                            <a href={speaker['linkedin_link']} target="_blank" aria-label={`Linkedin de ${speaker['name']}`}>
                                {/*Linkedin Logo*/}
                                <picture>
                                    <source srcSet={LogoLinkedInLight} media='(prefers-color-scheme: light)'/>
                                    <Image src={LogoLinkedInDark} alt="Logo do LinkedIn" width={32} height={32} className="social-icon"/>
                                </picture>

                                {/* Método antigo, manipulando svg para animação customizada do hover */}
                                {/* <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn da Semana de Sistemas de Informação">
                                    <mask id="mask0_2776_492" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                        <path fillRule="evenodd" d="M36.34 6.70333V32.6267V36.33H32.6356H6.70444H3V32.6267V6.70333V3H6.70444H32.6356H36.34V6.70333ZM31.7094 21.887V31.7008H26.5417V22.5721C26.5417 21.8846 26.2685 21.2252 25.7822 20.7391C25.2959 20.2529 24.6364 19.9798 23.9486 19.9798C22.5224 19.9798 21.374 21.1463 21.374 22.5721V31.7008H16.2063V16.2024H21.374V18.2577C22.2631 16.8134 24.0968 15.8506 25.6712 15.8506C27.2726 15.8506 28.8085 16.4865 29.9409 17.6186C31.0733 18.7506 31.7094 20.286 31.7094 21.887ZM12.387 12.3841C11.8034 12.9675 11.0119 13.2953 10.1866 13.2953C8.46406 13.2953 7.05637 11.9065 7.05637 10.1845C7.05637 9.35452 7.38616 8.55857 7.9732 7.97171C8.56023 7.38484 9.35643 7.05515 10.1866 7.05515C11.9092 7.05515 13.2984 8.46242 13.2984 10.1845C13.2984 11.0095 12.9705 11.8007 12.387 12.3841ZM12.7612 16.2024V31.7008H7.63056V16.2024H12.7612Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_2776_492)">
                                        <rect width="40" height="40" fill="white" />
                                    </g>

                                    Mask utilizada para realizar a animação
                                    <g mask="url(#mask0_2776_492)">
                                        <rect className="fillAnimation" fill="#9638FF" width="40" height="50" />
                                    </g>
                                </svg> */}
                            </a>
                        }

                        {speaker['instagram_link'] &&
                            <a href={speaker['instagram_link']} target="_blank" aria-label={`Instagram de ${speaker['name']}`}>
                                {/*Instagram Logo*/}
                                <picture>
                                    <source srcSet={LogoInstagramLight} media='(prefers-color-scheme: light)'/>
                                    <Image src={LogoInstagramDark} alt="Logo do Instagram" width={32} height={32} className="social-icon"/>
                                </picture>

                                {/* Método antigo, manipulando svg para animação customizada do hover */}
                                {/* <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="Instagram da Semana de Sistemas de Informação">
                                    <mask id="mask0_2776_488" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                        <path d="M3.33105 3.33008V36.6634H36.6644V3.33008H3.33105ZM16.7727 12.2652C17.7973 11.8535 18.8936 11.6495 19.9977 11.6651C22.2079 11.6651 24.3275 12.5414 25.8903 14.1042C27.4531 15.667 28.3311 17.7866 28.3311 19.9967C28.3311 22.2069 27.4531 24.3265 25.8903 25.8893C24.3275 27.4521 22.2079 28.3301 19.9977 28.3301C18.8936 28.3457 17.7973 28.1417 16.7727 27.73C15.748 27.3182 14.8155 26.7069 14.0291 25.9317C13.2428 25.1564 12.6184 24.2325 12.1922 23.2138C11.766 22.1951 11.5465 21.1018 11.5465 19.9976C11.5465 18.8933 11.766 17.8001 12.1922 16.7813C12.6184 15.7626 13.2428 14.8388 14.0291 14.0635C14.8155 13.2882 15.748 12.6769 16.7727 12.2652ZM27.3287 9.80336C27.7015 9.41533 28.21 9.1866 28.7477 9.16508V9.16174C29.3003 9.16174 29.8302 9.38124 30.2209 9.77194C30.6116 10.1626 30.8311 10.6925 30.8311 11.2451C30.8311 11.7976 30.6116 12.3275 30.2209 12.7182C29.8302 13.1089 29.3003 13.3284 28.7477 13.3284C28.21 13.3069 27.7015 13.0782 27.3287 12.6901C26.9559 12.3021 26.7477 11.7849 26.7477 11.2467C26.7477 10.7086 26.9559 10.1914 27.3287 9.80336Z" fill="white" />
                                        <path d="M19.9977 14.9984C20.6619 14.9862 21.3219 15.1064 21.939 15.3521C22.5562 15.5978 23.1183 15.964 23.5924 16.4293C24.0664 16.8947 24.443 17.4498 24.7001 18.0623C24.9572 18.6748 25.0897 19.3324 25.0898 19.9967C25.0899 20.661 24.9577 21.3187 24.7008 21.9313C24.4439 22.5439 24.0675 23.0991 23.5935 23.5646C23.1196 24.0301 22.5577 24.3965 21.9406 24.6424C21.3235 24.8883 20.6636 25.0088 19.9994 24.9967C18.6733 24.9967 17.4015 24.47 16.4639 23.5323C15.5262 22.5946 14.9994 21.3228 14.9994 19.9967C14.9994 18.6707 15.5262 17.3989 16.4639 16.4612C17.4015 15.5235 18.6733 14.9967 19.9994 14.9967L19.9977 14.9984Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_2776_488)">
                                        <rect x="0.330078" y="0.330078" width="40" height="40" fill="white" />
                                    </g>
                                    Mask utilizada para realizar a animação
                                    <g mask="url(#mask0_2776_488)">
                                        <rect className="fillAnimation" fill="#9638FF" width="40" height="40" />
                                    </g>
                                </svg> */}
                            </a>
                        }

                        {/* SLOTS PARA MAIS*/}
                    </div>
                </SocialMedia>
            </SpeakerContent>

            {/* <div className='bottomImg'>
                <img src={SpeakerBottomDesktop} />
            </div> */}
        </SpeakerWrapper>
    )
}

export default SpeakerCard

const SpeakerWrapper = styled.div`
    min-height: 100%;
    background-color: var(--background-neutrals-primary);
    padding: 1rem;
    z-index: 20;
    position: fixed;
    inset: 0;
    overflow-y: auto;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation-name: slide-in;
    animation-duration: 0.15s;

    @keyframes slide-in {
        0% {transform: translateX(100%);}
        100% {transform: translateX(0%);}   
    }

    /* .bottomImg {
        width: 100%;
        height: 10%;
        z-index: inherit;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: left;
        }
    } */

    // Removendo o fundo na versão desktop
    @media screen and (min-width:800px) {
        background-color: transparent;
    }
`

const SpeakerContent = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 15;
    border-radius: 1.5rem;
    border: 2px solid transparent;
    background: var(--border-gradient-tertiary-dark);
    padding: 1rem;
    gap: 1.25rem;

    // Título da seção Sobre e Redes Sociais
    h6 {
        font: 700 0.875rem/1.5rem 'AT Aero Bold';
        width: fit-content;
        padding: 0 0.375rem;
        border-radius: 0.375rem;
        background: var(--brand-purple-700, #7305E6);
        // Usando cor fixa hexadecimal, em vez de var(), pois no dark mode quanto light mode a cor continua igual
        color: #FFFFFF;
    }

    @media screen and (min-width:800px) {
        h6 {
            font: 700 1rem/1.5rem 'AT Aero Bold';
        }
    }

    @media screen and (min-width:1024px) {
        border: 3px solid transparent;
        padding: 1.5rem;
        background: var(--border-gradient-secondary-dark);

        h6 {
            background: var(--brand-purple-500, #9638FF);
        }
    }
`

const SpeakerHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 16;

    h4 {
        font: 700 1rem/1.5rem 'AT Aero Bold';
    }

    button {
        padding: 0.5rem 0.75rem;
        background-color: transparent;
        border: 0;
        transition: 0.15s all ease-out;
        cursor: pointer;
    }

    button:hover {
        background-position: left;

        // Mudando cor do botão de fechar no hover
        svg path {
            fill: var(--background-neutrals-tertiary);
        }
    }
    
    @media screen and (min-width:600px) {
        h4 {
            font: 700 1.25rem/1.5rem 'AT Aero Bold';
        }
    }

    @media screen and (min-width:1024px) {
        h4 {
            font: 700 1.5rem/1.5rem 'AT Aero Bold';
        }
    }
`

const SpeakerInfo = styled.div` 
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    z-index: 15;
    position: relative;

    .headTextWrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 10;

        // Cor gradiente do nome e cargo
        h5, .speaker-role {
            background: var(--text-gradient-primary-dark);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media (prefers-color-scheme: light) {
                background: var(--text-gradient-primary-light);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        h5 {
            font: 700 1rem/1.5rem 'AT Aero Bold';
        }

        p {
            font: 400 0.75rem/1.125rem 'AT Aero';
        }

        .speaker-role {
            font: 700 0.875rem/1rem 'AT Aero Bold';
        }
    }

    .imgDiv {
        width: 7.5rem;
        height: auto;
        max-width: 14rem;
        aspect-ratio: 1 / 1;
        position: relative;
        z-index: 10;
        overflow: hidden;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 0.5rem;
            display: block;
            aspect-ratio: 1;
        }
    }

    @media screen and (min-width:600px) {
        gap: 1.5rem;

        .headTextWrapper {
            gap: 1rem;

            h5 {
                font: 700 1.125rem/1.5rem 'AT Aero Bold';
            }

            p {
                font: 400 0.875rem/1.125rem 'AT Aero';
            }

            .speaker-role {
                font: 700 1rem/1rem 'AT Aero Bold';
            }
        }
    }

    @media screen and (min-width:800px) {
        align-items: center;
    }

    @media screen and (min-width:1024px) {
        gap: 2rem;
        border-radius: 1rem;
        overflow: hidden;

        // Background do card de palestrante
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url(${lectureImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            filter: blur(0.8px) brightness(0.8);
            opacity: 0.5;
            z-index: 1;
            
            @media (prefers-color-scheme: light) {
                opacity: 0.8;
            }
        }

        .imgDiv {
            width: 12rem;

            img {
                border-radius: 0;
            }
        }

        .headTextWrapper {
            gap: 1.5rem;
            margin-right: 1rem;

            @media (prefers-color-scheme: light) {
                // Cor gradiente do nome e cargo
                h5, .speaker-role {
                    background: var(--text-gradient-secondary-light);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

            h5 {
                font: 700 1.5rem/2rem 'AT Aero Bold';
            }

            p {
                font: 400 1rem/1.5rem 'AT Aero';    
                // Usando cor fixa hexadecimal, em vez de var(), pois no dark mode quanto light mode a cor continua igual
                color: #FFFFFF;
            }

            .speaker-role {
                font: 700 1.125rem/1.5rem 'AT Aero Bold';
            }
        }
    }
`

const SpeakerDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    width: 100%;

    p {
        width: 100%;
        height: 100%;
        font-family: 'AT Aero';
        font-weight: 400;
        white-space: pre-line;
    }
    
    @media screen and (min-width:1024px) {
        padding: 1.25rem 0.5rem 0rem 0.5rem;
        border-top: 2px solid transparent;
        background: var(--border-gradient-primary-dark);

        @media (prefers-color-scheme: light) {
            background: var(--border-gradient-primary-light);
        }
    }
`

const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;

    .speaker-socials {
        display: flex;
        gap: 1rem;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Método antigo, manipulando svg para animação customizada do hover */
        /* .fillAnimation {
            transform: translateX(-100%);
            transition: all 0.15s ease-out;
        }

        .animation:hover {
            cursor: pointer;
            transition: all 0.15s ease-out;

            .fillAnimation {
                transform: translateX(0);
            }
        } */

        a:focus-visible {
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
            cursor: pointer;
            transition: all 0.15s ease-out;
        }

        .social-icon {
            width: 2rem;
            height: 2rem;
            object-fit: contain;
            object-position: center;
        }

        .social-icon:hover, .social-icon:focus-visible {
            // Filtro para mudar a logo branca/preta para roxo (#6206BF)
            filter: brightness(0) saturate(100%) invert(13%) sepia(85%) saturate(6169%) hue-rotate(272deg) brightness(73%) contrast(112%);

            // Filtro para mudar a logo branca/preta para roxo (#A85FFF)
            @media (prefers-color-scheme: light) {
                filter: brightness(0) saturate(100%) invert(44%) sepia(38%) saturate(1312%) hue-rotate(228deg) brightness(99%) contrast(107%);
            }
        }
    }

    @media screen and (min-width:1024px) {
        padding: 0rem 0.5rem;
    }
`