import React from 'react';
import styled from 'styled-components';

import PartnerCard from './PartnerCard';

const SupportersSection = ({ title, subtitle, data = [], showDivider = false, showSymbol = false }) => {
    return (
        <Section $showDivider={showDivider}>
            <div className='supporters-container'>
                <div className='supporters-title'>
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </div>

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

    .supporters-container {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: ${({ $showDivider }) => $showDivider ? '2.5rem' : '0'};
        gap: 3rem;

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
                font-family: var(--Typograph-Main-Font-Family-At-Hauss-Aero, "At Hauss Aero", sans-serif);
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

        .supporters-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            width: 100%;
            max-width: 1328px;
            justify-items: center;
            align-items: center;

            @media (min-width: 800px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (min-width: 1100px) {
                grid-template-columns: repeat(3, 1fr);
            }

            /* Estilização escalável do símbolo */
            .partner-symbol {
                /* Esconde no mobile por padrão */
                display: none;
                
                /* Aparece apenas nos breakpoints de tablet/desktop */
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

    @media (min-width: 1000px) {
        padding-block: 4.5rem;
    }
`;