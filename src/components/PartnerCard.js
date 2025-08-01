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
    width: 20.5rem;
    height: 15.125rem;
    background-color: var(--background-neutrals-secondary);

    cursor: pointer;
    border: 2px solid var(--outline-neutrals-secondary);
    transition: all 0.15s ease-in-out;
    z-index: 2;

    &:hover {
        border: solid 2px var(--brand-primary);
    }

    a {
        width: 100%;
        height: 100%;
        padding: 1.5rem 2rem;
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
        width: 27rem;
        height: 20rem;
    }
`