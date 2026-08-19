import { useState } from 'react';
import styled from 'styled-components';

// assets
import giftBox from '../../../../public/images/gifts/gift-box.png';

const GiftCard = ({ name, image, minPresence }) => {
    // Estado para controlar se o card foi virado no mobile
    const [isFlipped, setIsFlipped] = useState(false);

    // Função que inverte o estado atual
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <GiftContainer tabIndex={0} className={isFlipped ? 'is-flipped' : ''}>
            <div className='gift-card-front'>
                <h6>{name}</h6>
                <figure>
                    <img 
                        className="gift-img" 
                        src={image} 
                        alt={`Brinde ${name} SSI`} 
                    />
                </figure>
            </div>

            <div className={`gift-card-back ${isFlipped ? 'info-show' : ''}`}>
                <img className="icon-image" src={giftBox.src || giftBox} alt="Ícone de Caixa de Presente" />

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

            <button 
                className={`info-button ${isFlipped ? 'button-flip' : ''}`} 
                onClick={handleFlip} 
                aria-label="Ver detalhes do brinde"
            >
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z"/>
                </svg>
            </button>
        </GiftContainer>
    )
}

export default GiftCard;

const GiftContainer = styled.div`
    width: 100%;
    height: 20.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    position: relative;

    border-radius: 2rem;
    border: 1px solid var(--brand-purple-200);
    
    &.is-flipped {
        @media (max-width: 1020px) {
            .gift-card-front {
                opacity: 0;
                visibility: hidden;
            }

            .gift-card-back {
                background-color: transparent;
            }
        }
    }

    .gift-card-front {
        width: 100%;
        height: 20.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        background-color: var(--background-neutrals-secondary);
        
        transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;

        h6 {
            font-size: 1.125rem;
        }

        figure {
            height: 16rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .gift-img {
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: auto;
        }
    }

    .gift-card-back {
        width: 100%;
        height: 24.625rem;
        transition: 0.15s;
        translate: 0 101%;
        position: relative;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.67rem;
        align-items: center;
        justify-content: center;
        
        background-color: var(--background-neutrals-primary);
        background-image:
            linear-gradient(180deg, rgba(0, 0, 0, 0.15) 30.29%, rgba(150, 56, 255, 0.15) 100%);
        background-position: center, center;
        background-repeat: no-repeat, no-repeat;
        background-size: cover, cover;

        @media (min-width: 1021px) {
            background-image: 
                url('/images/about/bg-mobile-purple-dark.svg'),
                linear-gradient(180deg, rgba(0, 0, 0, 0.15) 30.29%, rgba(150, 56, 255, 0.15) 100%);
        }
        
        
        @media (prefers-color-scheme: light) {
            background-image: 
                linear-gradient(180deg, rgba(230, 230, 230, 0.15) 30%, rgba(98, 6, 191, 0.15) 100%);

            @media (min-width: 1021px) {
                background-image: 
                    url('/images/about/bg-card-desktop-light.svg'),
                    linear-gradient(180deg, rgba(230, 230, 230, 0.15) 30%, rgba(98, 6, 191, 0.15) 100%);
            }
        }

        .card-back-wrapper{
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .highlight{
            background: linear-gradient(148deg, var(--brand-primary) 0.55%, var(--backup-primary-800) 100.55%);
            
            @media (prefers-color-scheme: light) {
                background: linear-gradient(148deg, var(--brand-purple-700) 0.55%, var(--backup-primary-900) 100.55%);
            }

            padding: 0.125rem 0.75rem;
            margin: auto;
            border-radius: 0.25rem;

            p{
                font: 700 2.5rem/3.5rem 'At Aero Bold';
                color: var(--content-neutrals-fixed-white);
            }
        }

        .icon-image {
            width: 3.75rem;
            height: 3.75rem;
        }

        .card-back-text {
            text-align: center;
            align-self: stretch;
            color: var(--content-neutrals-primary);
            font-size: 1rem;
            font-weight: 700;
            
            span {
                font-size: 2rem;
                color: var(--content-neutrals-primary);
            }
        }
        
    }

    .info-button {
        border: 0;
        display: flex;
        position: absolute;
        width: 3rem;
        height: 3rem;
        background: linear-gradient(
            to bottom,
            var(--content-neutrals-fixed-white) 50%,
            var(--brand-primary) 50%
        );
        background-size: 100% 200%;
        background-position: top;
        right: 1rem;
        bottom: 1rem;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease-in-out;
        border-radius: 1rem;

        svg {
            transition: 0.15s;
            path {
                fill: var(--content-neutrals-fixed-black);
            }
        }
    }

    .info-show {
        translate: 0 0;
    }

    .button-flip {
        background-position: bottom;
        svg {
            transform: rotate(-180deg);
            path {
                fill: var(--content-neutrals-fixed-white);
            }
        }
        background-color: var(--brand-primary);
    }

    button:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 2px;
    }

    @media (min-width:1021px) {
        .gift-card-front {
            h6 {
                font-size: 1.5rem;
            }
        }

        .gift-card-back {
            height: 24.625rem;
            padding: 2rem;
        }

        &:hover, &:focus-visible {
            .gift-card-back {
                translate: 0 0;
            }
        }

        &:focus-visible {
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
        }

        .info-button {
            display: none;
        }
    }
`