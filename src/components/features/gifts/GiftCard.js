import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

// --- Assets ---
import giftBox from '../../../../public/images/gifts/gift-box.png';

const GiftCard = ({ name, image, minPresence }) => {
    // Estado para controlar se o card foi virado no mobile
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <GiftContainer 
            tabIndex={0} 
            className={isFlipped ? 'is-flipped' : ''}
            aria-label={`Brinde: ${name}. Requer ${minPresence} presenças.`}
        >
            {/* --- FRENTE DO CARD --- */}
            <div className='gift-card-front'>
                <h6>{name}</h6>
                <div className="image-wrapper">
                    <Image 
                        src={image} 
                        alt={`Imagem ilustrativa do brinde ${name}`} 
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        className="gift-img"
                    />
                </div>
            </div>

            {/* --- VERSO DO CARD --- */}
            <div className='gift-card-back'>
                <Image 
                    className="icon-image" 
                    src={giftBox} 
                    alt="Ícone de Caixa de Presente" 
                    width={60} 
                    height={60}
                />

                <div className="card-back-wrapper">
                    <p className='card-back-text'>
                        Para resgatar esse brinde você deve participar de um total de:
                    </p>
                    <div className='card-back-text highlight'>
                        <p>{minPresence}</p>
                    </div>
                    <p className='card-back-text'>Palestras ou Workshops</p>
                </div>
            </div>

            {/* --- BOTÃO MOBILE --- */}
            <button 
                className='info-button' 
                onClick={handleFlip} 
                aria-label={isFlipped ? "Esconder detalhes do brinde" : "Ver detalhes do brinde"}
                aria-expanded={isFlipped}
            >
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="currentColor"/>
                </svg>
            </button>
        </GiftContainer>
    );
};

export default GiftCard;

const GiftContainer = styled.div`
    width: 100%;
    height: 20.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Importante para o verso não vazar nas bordas arredondadas */
    position: relative;
    
    border-radius: 2rem;
    border: 1px solid var(--brand-purple-200);

    /* Efeito de outline no Desktop via Teclado (Acessibilidade) */
    &:focus-visible {
        outline: 2px solid var(--brand-primary-light);
        outline-offset: 4px;
    }

    /* ESTILOS DA FRENTE (FRONT) */
    .gift-card-front {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        
        background-color: var(--background-neutrals-secondary);
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

        h6 {
            font-size: 1.125rem;
            text-align: center;
            padding: 0 1rem;
        }

        .image-wrapper {
            position: relative;
            width: 100%;
            height: 16rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .gift-img {
            object-fit: contain;
        }
    }

    /* ESTILOS DO VERSO (BACK) */
    .gift-card-back {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
        
        position: relative;
        transform: translateY(101%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        
        background-color: var(--background-neutrals-primary);
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 30%, rgba(150, 56, 255, 0.15) 100%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        @media (prefers-color-scheme: light) {
            background-image: linear-gradient(180deg, rgba(230, 230, 230, 0.15) 30%, rgba(98, 6, 191, 0.15) 100%);
        }

        .card-back-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .highlight {
            background: linear-gradient(148deg, var(--brand-primary) 0.55%, var(--backup-primary-800) 100.55%);
            padding: 0.125rem 0.75rem;
            margin: auto;
            border-radius: 0.25rem;

            @media (prefers-color-scheme: light) {
                background: linear-gradient(148deg, var(--brand-purple-700) 0.55%, var(--backup-primary-900) 100.55%);
            }

            p {
                font: 700 2.5rem/3.5rem 'At Aero Bold', sans-serif;
                color: var(--content-neutrals-fixed-white);
                margin: 0;
            }
        }

        .icon-image {
            width: 3.75rem;
            height: 3.75rem;
        }

        .card-back-text {
            text-align: center;
            color: var(--content-neutrals-primary);
            font-size: 1rem;
            font-weight: 700;
        }
    }

    /* BOTÃO MOBILE INTERATIVO */
    .info-button {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        width: 3rem;
        height: 3rem;
        border: 0;
        border-radius: 1rem;
        
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        /* O fundo muda simulando um preenchimento */
        background: linear-gradient(to bottom, var(--content-neutrals-fixed-white) 50%, var(--brand-primary) 50%);
        background-size: 100% 200%;
        background-position: top;
        transition: all 0.3s ease-in-out;
        
        color: var(--content-neutrals-fixed-black); /* Cor padrão do SVG currentColor */

        svg {
            transition: transform 0.3s ease-in-out;
        }

        &:focus-visible {
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
        }
    }

    /* COMPORTAMENTO MOBILE */
    @media (max-width: 1020px) {
        &.is-flipped {
            .gift-card-front {
                opacity: 0;
                visibility: hidden;
            }

            .gift-card-back {
                transform: translateY(0);
                background-color: transparent; /* Mantém apenas o degradê no verso quando virado */
            }

            .info-button {
                background-position: bottom;
                color: var(--content-neutrals-fixed-white); /* Altera a cor do SVG */
                
                svg {
                    transform: rotate(-180deg);
                }
            }
        }
    }

    /* COMPORTAMENTO DESKTOP */
    @media (min-width: 1021px) {
        .gift-card-front h6 {
            font-size: 1.5rem;
        }

        .gift-card-back {
            background-image: 
                url('/images/about/bg-mobile-purple-dark.svg'),
                linear-gradient(180deg, rgba(0, 0, 0, 0.15) 30%, rgba(150, 56, 255, 0.15) 100%);

            @media (prefers-color-scheme: light) {
                background-image: 
                    url('/images/about/bg-card-desktop-light.svg'),
                    linear-gradient(180deg, rgba(230, 230, 230, 0.15) 30%, rgba(98, 6, 191, 0.15) 100%);
            }
        }

        /* Oculta o botão flutuante pois a interação será Hover/Focus */
        .info-button {
            display: none;
        }

        /* Animação via Hover (Mouse) ou Focus (Teclado - Tab) */
        &:hover .gift-card-back,
        &:focus-visible .gift-card-back {
            transform: translateY(0); /* Faz o conteúdo do verso subir sobrepondo a frente */
        }
    }
`;