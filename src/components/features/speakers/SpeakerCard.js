import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import Image from "next/image";

// assets
import LogoLinkedInDark from '../../../../public/images/partnerships/icons/logo_linkedin_dark.svg';
import LogoLinkedInLight from '../../../../public/images/partnerships/icons/logo_linkedin_light.svg';
import LogoInstagramDark from '../../../../public/images/partnerships/icons/logo_instagram_dark.svg';
import LogoInstagramLight from '../../../../public/images/partnerships/icons/logo_instagram_light.svg';
import lectureImage from '../../../../public/images/schedule/lecture-backgound.jpg';

// Tolerância de altura da div de redes sociais para decidir se ela fica no final da página ou logo abaixo da descrição do palestrante
const TOLERANCIA_REDES_SOCIAIS = 260;

const SpeakerCard = ({ speaker, setIsOpen, speakerImage }) => {

    const socialMediaRef = useRef(null);

    // Essa função tem como objetivo deixar a div de redes sociais no final da página caso a página for pequena
    // ou a deixar logo em baixo da descrição do palestrante caso a página for grande (celulares com telas grandes)
    // Esse código é rodado no recebimento dos dados da api e implementa um observer para detectar mudanças no tamanho
    useEffect(() => {
        // Verifica se os dados foram recebidos
        if (Object.keys(speaker).length === 0) return;

        const socialMedia = socialMediaRef.current

        // Observer para detectar mudanças no tamanho da div de redes sociais
        const resizeObserver = new ResizeObserver(([entry]) => {
            if(!entry) return;

            const computedHeight = entry.contentRect.height;
            if (computedHeight > TOLERANCIA_REDES_SOCIAIS) {
                // Logo abaixo da descrição
                entry.target.style.justifyContent = 'flex-start';
            } else {
                // No final da tela
                entry.target.style.justifyContent = 'flex-end';
            }
        })
        
        resizeObserver.observe(socialMedia);

        // Matando o observer quando o componente for desmontado
        return () => resizeObserver.disconnect();
    }, [speaker]);

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
                <SocialMedia ref={socialMediaRef}>
                    <div className="socialMediaWrapper">
                        {(speaker['linkedin_link'] || speaker['instagram_link']) && 
                            <h6>Redes Sociais</h6>
                        }
                        <div className="speaker-socials">
                            {speaker['linkedin_link'] && 
                                <a href={speaker['linkedin_link']} target="_blank" aria-label={`Linkedin de ${speaker['name']}`}>
                                    {/* Linkedin Logo*/}
                                    <svg className="animation" width="35" height="35" viewBox="0 0 35 35" fill='none' xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <clipPath id="linkedinClip">
                                                <path d="M 9.507812 12.714844 C 10.386719 12.714844 11.097656 13.429688 11.097656 14.304688 L 11.097656 27.011719 C 11.097656 27.886719 10.386719 28.597656 9.507812 28.597656 L 7.917969 28.597656 C 7.039062 28.597656 6.328125 27.886719 6.328125 27.011719 L 6.328125 14.304688 C 6.328125 13.429688 7.039062 12.714844 7.917969 12.714844 Z M 9.507812 12.714844"/>
                                                <path d="M 17.472656 12.714844 C 18.347656 12.714844 19.058594 13.429688 19.058594 14.304688 L 19.058594 15.097656 C 19.058594 15.097656 19.855469 12.714844 23.035156 12.714844 C 26.214844 12.714844 28.597656 14.304688 28.597656 17.480469 L 28.597656 27.011719 C 28.597656 27.886719 27.886719 28.597656 27.007812 28.597656 L 25.417969 28.597656 C 24.539062 28.597656 23.828125 27.886719 23.828125 27.011719 L 23.828125 19.070312 C 23.828125 15.894531 19.0625 17.480469 19.058594 19.863281 L 19.058594 27.011719 C 19.058594 27.886719 18.347656 28.597656 17.472656 28.597656 L 15.882812 28.597656 C 15.003906 28.597656 14.292969 27.886719 14.292969 27.011719 L 14.292969 14.304688 C 14.292969 13.429688 15.003906 12.714844 15.882812 12.714844 Z M 17.472656 12.714844"/>
                                                <path d="M 8.714844 6.328125 C 10.03125 6.328125 11.097656 7.398438 11.097656 8.714844 C 11.097656 10.03125 10.03125 11.097656 8.714844 11.097656 C 7.398438 11.097656 6.328125 10.03125 6.328125 8.714844 C 6.328125 7.398438 7.398438 6.328125 8.714844 6.328125 Z M 8.714844 6.328125"/>
                                                <path d="M 30.210938 -0.015625 C 32.847656 -0.015625 34.984375 2.121094 34.984375 4.757812 L 34.984375 30.210938 C 34.984375 32.847656 32.847656 34.984375 30.210938 34.984375 L 4.757812 34.984375 C 2.121094 34.984375 -0.015625 32.847656 -0.015625 30.210938 L -0.015625 4.757812 C -0.015625 2.121094 2.121094 -0.015625 4.757812 -0.015625 Z M 4.757812 3.167969 C 3.878906 3.167969 3.167969 3.878906 3.167969 4.757812 L 3.167969 30.210938 C 3.167969 31.089844 3.878906 31.804688 4.757812 31.804688 L 30.210938 31.804688 C 31.089844 31.804688 31.804688 31.089844 31.804688 30.210938 L 31.804688 4.757812 C 31.804688 3.878906 31.089844 3.167969 30.210938 3.167969 Z M 4.757812 3.167969"/>
                                            </clipPath>
                                        </defs>
                                        {/* Ícone branco */}
                                        <g clipPath="url(#linkedinClip)">
                                            <rect className="backAnimation" width="35" height="35"/>
                                        </g>
                                        {/* Cor que desliza */}
                                        <g clipPath="url(#linkedinClip)">
                                            <rect className="fillAnimation" width="35" height="35"/>
                                        </g>
                                    </svg>
                                </a>
                            }

                            {speaker['instagram_link'] &&
                                <a href={speaker['instagram_link']} target="_blank" aria-label={`Instagram de ${speaker['name']}`}>
                                    {/*Instagram Logo*/}
                                    <svg className="animation" width="35" height="35" viewBox="0 0 35 35" fill='none' xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <clipPath id="instagramClip">
                                                <path d="M 26.796875 6.441406 C 25.625 6.441406 24.746094 7.320312 24.746094 8.492188 C 24.746094 9.664062 25.625 10.542969 26.796875 10.542969 C 27.96875 10.542969 28.847656 9.664062 28.847656 8.492188 C 28.847656 7.320312 27.96875 6.441406 26.796875 6.441406 Z M 26.796875 6.441406"/>
                                                <path d="M 17.570312 9.078125 C 12.738281 9.078125 8.933594 13.03125 8.933594 17.71875 C 8.933594 22.402344 12.886719 26.359375 17.570312 26.359375 C 22.257812 26.359375 26.210938 22.402344 26.210938 17.71875 C 26.210938 13.03125 22.402344 9.078125 17.570312 9.078125 Z M 17.570312 23.28125 C 14.496094 23.28125 12.007812 20.792969 12.007812 17.71875 C 12.007812 14.644531 14.496094 12.152344 17.570312 12.152344 C 20.648438 12.152344 23.136719 14.644531 23.136719 17.71875 C 23.136719 20.792969 20.648438 23.28125 17.570312 23.28125 Z M 17.570312 23.28125"/>
                                                <path d="M 24.601562 0 L 10.6875 0 C 4.6875 0 0 4.6875 0 10.542969 L 0 24.453125 C 0 30.3125 4.6875 34.996094 10.542969 34.996094 L 24.453125 34.996094 C 30.3125 34.996094 34.996094 30.3125 34.996094 24.453125 L 34.996094 10.542969 C 35.144531 4.6875 30.457031 0 24.601562 0 Z M 31.773438 24.601562 C 31.773438 28.554688 28.554688 31.921875 24.453125 31.921875 L 10.542969 31.921875 C 6.589844 31.921875 3.222656 28.699219 3.222656 24.601562 L 3.222656 10.691406 C 3.222656 6.734375 6.441406 3.367188 10.542969 3.367188 L 24.453125 3.367188 C 28.40625 3.367188 31.773438 6.589844 31.773438 10.691406 Z M 31.773438 24.601562"/>
                                            </clipPath>
                                        </defs>
                                        {/* Ícone branco */}
                                        <g clipPath="url(#instagramClip)">
                                            <rect className="backAnimation" width="35" height="35"/>
                                        </g>
                                        {/* Cor que desliza */}
                                        <g clipPath="url(#instagramClip)">
                                            <rect className="fillAnimation" width="35" height="35"/>
                                        </g>
                                    </svg>
                                </a>
                            }

                            {/* SLOTS PARA MAIS*/}
                        </div>
                    </div>
                </SocialMedia>
            </SpeakerContent>

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
            width: 9rem;

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

    @media screen and (min-width:1200px) {
        .imgDiv {
            width: 11rem;
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
        border-top: 2px solid transparent;

        &:before {
            content: "";
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #f8efff 15%, var(--brand-primary));
            display: block;

            @media (prefers-color-scheme: light) {
                background: linear-gradient(90deg, var(--brand-primary-light) 15%, var(--brand-primary));
            }
        }

        h6 {
            margin: 1rem 0.5rem 0rem 0.5rem;
        }

        p {
            padding: 0rem 0.5rem;
        }
    }
`

const SocialMedia = styled.div`
    // Div das redes sociais ocupa todo o espaço restante
    flex: 1;
    display: flex;
    flex-direction: column;
    // Coloca as redes na parte de baixo da tela
    justify-content: flex-end;

    .socialMediaWrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .speaker-socials {
        display: flex;
        gap: 1rem;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Método antigo, manipulando svg para animação customizada do hover */
        .backAnimation {
            fill: var(--content-neutrals-secondary);
        }

        .fillAnimation {
            fill: var(--brand-purple-500);
            transform: translateX(-100%);
            transition: all 0.15s ease-out;
        }

        .animation:hover {
            cursor: pointer;
            transition: all 0.15s ease-out;

            .fillAnimation {
                transform: translateX(0);
            }
        }

        a:focus-visible {
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
            cursor: pointer;
        }
    }

    @media screen and (min-width:1024px) {
        padding: 0rem 0.5rem;
    }
`