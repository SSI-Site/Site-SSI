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
    width: 6.75rem;
    min-width: 6.75rem;
    height: 5rem;
    background-color: var(--background-neutrals-secondary);

    cursor: pointer;
    
    border: 0.5px solid var(--outline-neutrals-secondary);
    border-radius: 0.5rem;
    transition: all 0.15s ease-in-out;
    z-index: 2;

    &:hover {
        border: solid 2px var(--brand-primary);
    }

    a {
        width: 100%;
        height: 100%;
        padding: 0.375rem 0.5rem;
    }

    .partner-image {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            transform: translate(-50%, -50%);
        }
    }

    @media (min-width:1000px) {
        width: 13.5 rem;
        min-width: 13.5rem;
        height: 10rem;

        border-radius: 1rem;
        border: 1px solid var(--outline-neutrals-secondary);

        a {
            padding: 0.5rem 1rem;
        }
    }
`