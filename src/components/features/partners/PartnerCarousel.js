import styled, { keyframes } from 'styled-components';
import PartnerCard from './PartnerCard';

import { allPartnersAndSupporters } from '../../../../data/partners';

const PartnerCarousel = () => {
    return (
        <CarouselContainer>
            <CarouselTrack>
                {/* GRUPO 1 */}
                <div className='group'>
                    {allPartnersAndSupporters.map((supporter, index) => (
                        <div className='carousel-item-wrapper' key={`group1-${index}`}>
                            <PartnerCard
                                name={supporter.name}
                                imageDark={supporter.imageDark}
                                imageLight={supporter.imageLight}
                                link={supporter.url}
                                variant="carousel"
                            />
                        </div>
                    ))}
                </div>

                {/* GRUPO 2 (Cópia para o efeito infinito) */}
                <div className='group'>
                    {allPartnersAndSupporters.map((supporter, index) => (
                        <div className='carousel-item-wrapper' key={`group2-${index}`}>
                            <PartnerCard
                                name={supporter.name}
                                imageDark={supporter.imageDark}
                                imageLight={supporter.imageLight}
                                link={supporter.url}
                                variant="carousel"
                            />
                        </div>
                    ))}
                </div>
            </CarouselTrack>
        </CarouselContainer>
    );
};

export default PartnerCarousel;

const slide = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

const CarouselContainer = styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    max-width: 100%;
`;

const CarouselTrack = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;

    padding: 0.1rem 0; // Pequeno padding para evitar que a borda inferior seja cortada
    
    /* animação do carrossel, que move a track para a esquerda, criando o efeito de rolagem contínua */
    animation: ${slide} 25s linear infinite;
    will-change: transform;

    .group {
        display: flex;
        align-items: stretch;
        justify-content: center;

        .carousel-item-wrapper {
            display: flex;
            padding-right: 0.75rem;
            flex-shrink: 0;
            width: 6.75rem;
        }
    }

    @media (min-width: 1000px) {
        .group {
            .carousel-item-wrapper {
                padding-right: 1.5rem;
                width: 13.5rem;
            }
        }
    }
`;