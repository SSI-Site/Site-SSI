import styled, { keyframes } from 'styled-components';
import PartnerCard from './PartnerCard';

const partners = [
    { name: 'Aton', imageDark: '/images/partners/aton-dark.png', imageLight: '/images/partners/aton-light.png', url: 'https://ambarx.com.br/' },
    { name: 'EACH', imageDark: '/images/partners/each-dark.svg', imageLight: '/images/partners/each-light.svg', url: 'https://www5.each.usp.br/' },
    { name: 'Alura', imageDark: '/images/partners/alura-dark.svg', imageLight: '/images/partners/alura-light.png', url: 'https://www.alura.com.br/' },
    { name: 'TOTVS', imageDark: '/images/partners/totvs-dark.svg', imageLight: '/images/partners/totvs-light.png', url: 'https://www.totvs.com/' },
    { name: 'Idwall', imageDark: '/images/partners/idwall-light.png', imageLight: '/images/partners/idwall-dark.png',  url: 'https://idwall.co/pt-BR/'},
    { name: 'PET-SI', imageDark: '/images/partners/pet-dark.png', imageLight: '/images/partners/pet-light.png', url: 'https://www.instagram.com/petsieach/' },
    { name: 'Bravium', imageDark: '/images/partners/bravium-light.png', imageLight: '/images/partners/bravium-dark.png',  url: 'https://www.bravium.com.br/'},
    { name: 'Neologica', imageDark: '/images/partners/neologica-light.png', imageLight: '/images/partners/neologica-dark.png', url: 'https://www.nelogica.com.br/'},
    { name: 'R2ventures', imageDark: '/images/partners/r2-ventures-dark.png', imageLight: '/images/partners/r2-ventures-light.png', url: 'https://r2ventures.com.br/' },
    { name: 'Rocketseat', imageDark: '/images/partners/rocketseat-light.png',  imageLight: '/images/partners/rocketseat-dark.png', url: 'https://www.rocketseat.com.br/'}
    // ].sort((a, b) => a.name > b.name ? 1 : -1);
];

const partnersEntries = Object.entries(partners);

const PartnerCarousel = () => {
    return (
        /* segunda lista de empresas - foi usado o componente PartnerCard*/
        <CarouselContainer>
            {/* div responsável pela funcionalidade do carrossel */}
            <CarouselTrack>
                {/* criação de grupos (group) para o carrosel ficar sem problemas no gap */}
                <div className='group'>
                    {/* criação de uma div gap, que substitui o gap por um padding-right, matendo a animação fluída e com os espaços adequados */}
                    {partnersEntries.map(([key, supporter]) => (
                        <div className='gap'>
                            {/*  primeira lista de empresas - foi usado o componente PartnerCard */}
                            <PartnerCard
                                key={key}
                                name={supporter.name}
                                imageDark={supporter.imageDark}
                                imageLight={supporter.imageLight}
                                link={supporter.url}
                            />
                        </div>
                    ))}
                </div>

                <div className='group'>
                    {partnersEntries.map(([key, supporter]) => (
                        <div className='gap'>
                            {/* segunda lista de empresas - foi usado o componente PartnerCard */}
                            <PartnerCard
                                key={`dup-${key}`}
                                name={supporter.name}
                                imageDark={supporter.imageDark}
                                imageLight={supporter.imageLight}
                                link={supporter.url}
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
    /* animação do carrossel, que move a track para a esquerda, criando o efeito de rolagem contínua */
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
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
    
    /* animação do carrossel, que move a track para a esquerda, criando o efeito de rolagem contínua */
    animation: ${slide} 25s linear infinite;
    will-change: transform;

    .group {
        display: flex;
        align-items: center;
        justify-content: center;

        .gap {
            padding-right: 0.75rem;
        }
    }


    @media (min-width: 1000px) {
        .group {
            .gap{
                padding-right: 1.5rem;
            }
        }
    }
}
`;