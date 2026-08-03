import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import Image from "next/image";

// assets
import LogoLinkedInDark from '../../../../public/images/partnerships/icons/logo_linkedin_dark.svg';
import LogoLinkedInLight from '../../../../public/images/partnerships/icons/logo_linkedin_light.svg';
import LogoInstagramDark from '../../../../public/images/partnerships/icons/logo_instagram_dark.svg';
import LogoInstagramLight from '../../../../public/images/partnerships/icons/logo_instagram_light.svg';
import lectureImage from '../../../../public/images/schedule/lecture-backgound.jpg';

import { InstagramLogo, LinkedInLogo } from "../../ui/SocialMediaOutlinedLogos";

// Componente do card/modal/tela_flutuante do palestrante

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
                    {/* Botão X de fechar */}
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

                        <p className="speaker-role">{speaker['role']}</p>
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
                                    <LinkedInLogo/>
                                </a>
                            }

                            {speaker['instagram_link'] &&
                                <a href={speaker['instagram_link']} target="_blank" aria-label={`Instagram de ${speaker['name']}`}>
                                    <InstagramLogo/>
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
    padding: 1rem;
    gap: 1.25rem;
    // Código para fazer a borda com gradiente
    border-radius: 1.5rem;
    border: 2px solid transparent;
    background: var(--border-gradient-tertiary-dark);

    // Título da seção Sobre e Redes Sociais
    h6 {
        font: 700 0.875rem/1.5rem 'AT Aero Bold';
        width: fit-content;
        padding: 0 0.375rem;
        border-radius: 0.375rem;
        background: var(--brand-purple-700);
        color: var(--content-neutrals-fixed-white);
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
            background: var(--brand-purple-500);
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

    // A imagem fica 1:1 (quadrada), mas se houver muito texto, a imagem vai se reajustando
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

        // Background do card de palestrante (foto roxa de fundo)
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
                color: var(--content-neutrals-fixed-white)
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

        // Linha horizontal com gradiente
        &:before {
            content: "";
            width: 100%;
            height: 2px;
            // Branco para roxo
            background: linear-gradient(90deg, var(--content-neutrals-secondary) 15%, var(--brand-primary));
            display: block;

            @media (prefers-color-scheme: light) {
                // Roxo claro para roxo escuro
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
    }

    @media screen and (min-width:1024px) {
        padding: 0rem 0.5rem;
    }
`