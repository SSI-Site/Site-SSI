import styled from 'styled-components';

const PartnerCard = ({ imageDark, imageLight, name, link }) => {
    return (
        <PartnerWrapper>
            <a href={link} target="_blank" rel="noreferrer">
                <div className='partner-image'>
                    <picture>
                        <source srcSet={imageLight} media="(prefers-color-scheme: light)" />
                        <img src={imageDark} alt={`Logo ${name}`}/>
                    </picture>
                </div>
            </a>
        </PartnerWrapper>
    )
}

export default PartnerCard;

const PartnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-neutrals-secondary, #333);
    border: 3px solid var(--brand-gradient-black-bg-primary-foreground, #D0ACFF);
    border-radius: 1rem; 
    width: 100%;
    max-width: 27rem;
    transition: all 0.2s ease-in-out;
    z-index: 2;

    &:hover {
        transform: translateY(-4px);
        border-color: var(--brand-primary, #8414FD);
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        
        padding: 1.5rem 2rem; 
    }

    .partner-image {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 23rem; 
        aspect-ratio: 368 / 272; 

        picture {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
`;