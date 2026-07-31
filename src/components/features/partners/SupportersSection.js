import styled from 'styled-components';

import PartnerCard from './PartnerCard';

const SupportersSection = ({ title, subtitle, data = [], showDivider = false, showSymbol = false }) => {
    return (
        <Section $showDivider={showDivider} $showSymbol={showSymbol}>
            <div className='supporters-container'>
                <div className='supporters-title'>
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </div>

                <div className='supporters-cards'>
                    {data.map((item) => (
                        <PartnerCard
                            key={item.name}
                            name={item.name}
                            imageDark={item.imageDark}
                            imageLight={item.imageLight}
                            link={item.url}
                        />
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

            @media (min-width: 800px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (min-width: 1100px) {
                grid-template-columns: repeat(3, 1fr);
                
                > :nth-child(1):nth-last-child(3) { 
                    grid-column: 1; 
                }
                > :nth-child(2):nth-last-child(2) { 
                    grid-column: 3; 
                }
                > :nth-child(3):nth-last-child(1) { 
                    grid-column: 2; 
                }
            }
            
            ${({ $showSymbol }) => $showSymbol && `
                position: relative;
                isolation: isolate; 

                &::before {
                    content: '';
                    position: absolute;
                    inset: 0; 
                    z-index: -1; 
                    
                    background-image: 
                        url('/images/home/simbolo-ssi-dark.svg'),
                        url('/images/home/simbolo-ssi-dark.svg'),
                        url('/images/home/simbolo-ssi-dark.svg');
                    
                    background-position: 
                        top 4rem center, 
                        bottom 4rem left 16.6%, 
                        bottom 4rem right 16.6%;
                    
                    background-repeat: no-repeat;
                    background-size: 6rem; 
                    
                    @media (prefers-color-scheme: light) {
                        background-image: 
                            url('/images/home/simbolo-ssi-light.svg'),
                            url('/images/home/simbolo-ssi-light.svg'),
                            url('/images/home/simbolo-ssi-light.svg');
                    }
                }
            `}
        }
    }

    @media (min-width: 1000px) {
        padding-block: 4.5rem;
    }
`;