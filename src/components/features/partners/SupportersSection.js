import React from 'react';
import styled from 'styled-components';

// components
import PartnerCard from './PartnerCard';

/**
 * Componente que renderiza uma seção de apoiadores ou parceiros.
 * Exibe um título, subtítulo e um grid de cartões (PartnerCard). 
 * Permite opcionalmente intercalar um símbolo visual entre os cartões e adicionar um divisor de fundo.
 * 
 * @param {Object} props
 * @param {string} props.title - Título principal da seção (ex: "Patrocinadores").
 * @param {string} props.subtitle - Subtítulo descritivo da seção.
 * @param {Array} props.data - Array de objetos contendo as informações dos parceiros (name, imageDark, imageLight, url).
 * @param {boolean} [props.showDivider=false] - Se true, exibe um background-image no topo servindo como divisor visual.
 * @param {boolean} [props.showSymbol=false] - Se true, intercala o símbolo da SSI entre os cards (visível apenas em telas maiores).
 */
const SupportersSection = ({ title, subtitle, data = [], showDivider = false, showSymbol = false }) => {
    return (
        <Section $showDivider={showDivider}>
            <div className='supporters-container'>
                
                {/* ====== CABEÇALHO DA SEÇÃO ====== */}
                <div className='supporters-title'>
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </div>

                {/* ====== GRID DE PARCEIROS ====== */}
                <div className='supporters-cards'>
                    {data.map((item) => (
                        <React.Fragment key={item.name}>
                            <PartnerCard
                                name={item.name}
                                imageDark={item.imageDark}
                                imageLight={item.imageLight}
                                link={item.url}
                            />
                            
                            {showSymbol && (
                                <div className="partner-symbol">
                                    <img src="/images/home/simbolo-ssi-dark.svg" alt="Símbolo SSI" className="symbol-dark" />
                                    <img src="/images/home/simbolo-ssi-light.svg" alt="Símbolo SSI" className="symbol-light" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SupportersSection;

const Section = styled.section`
    position: relative;
    padding: 3rem 1rem;
    background-color: var(--background-neutrals-primary);
    color: var(--content-neutrals-primary);
    overflow: hidden;

    ${({ $showDivider }) => $showDivider && `
        background-image: url('/images/home/divider-mobile-dark.svg');
        background-repeat: no-repeat;
        background-position: top center;
        background-size: min(calc(100% - 1rem), 1584px) auto; 

        @media (min-width: 1000px) {
            background-image: url('/images/home/divider-desktop-dark.svg');
        }
    `}

    /* ====== CONTAINER PRINCIPAL ====== */
    .supporters-container {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        margin-top: ${({ $showDivider }) => $showDivider ? '2.5rem' : '0'};
        gap: 3rem;


        /* ====== TÍTULOS ====== */
        .supporters-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            max-width: 63.5rem;

            h3 {
                color: var(--content-neutrals-fixed-white, #FFF);
                text-align: center;
                font-size: var(--Typograph-Heading-H3-size, 48px);
                font-weight: 700;
                line-height: var(--Typograph-Heading-H3-height, 56px);
                
                padding: 12px 24px;
                background: linear-gradient(90deg, var(--background-brand-primary, #9638FF) 0%, #5A2299 100%);
                width: fit-content;
                border-radius: 8px; 
                margin: 0;
            }

            h6 {
                text-align: center;
                color: var(--content-neutrals-secondary);
                font-weight: 400;
                margin: 0;
            }
        }

        /* ====== GRID DE CARTÕES ====== */
        .supporters-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            width: 100%;
            max-width: 1328px;
            justify-items: center;
            align-items: center;

            /* Transição para 2 colunas em tablets */
            @media (min-width: 800px) {
                grid-template-columns: repeat(2, 1fr);
            }

            /* Transição para 3 colunas em desktops */
            @media (min-width: 1100px) {
                grid-template-columns: repeat(3, 1fr);
            }

            /* ====== SÍMBOLO INTERCALADO ====== */
            .partner-symbol {
                /* Esconde no mobile por padrão para economizar espaço e evitar quebra de layout */
                display: none;
                
                /* Aparece apenas nos breakpoints de desktop */
                @media (min-width: 1100px) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 6rem;
                    height: 6rem;
                }

                .symbol-light { display: none; }
                .symbol-dark { display: block; width: 100%; height: 100%; }

                @media (prefers-color-scheme: light) {
                    .symbol-light { display: block; width: 100%; height: 100%; }
                    .symbol-dark { display: none; }
                }
            }
        }
    }
`;