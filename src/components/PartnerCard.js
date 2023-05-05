import styled from 'styled-components';

const PartnerCard = ({ image, name, link }) => {

    return (
        <PartnerWrapper>
            <a href={link} target="_blank" rel="noreferrer">
                <figure className='partner-image'>
                    <img src={image} alt={`Logo ${name}`}></img>
                </figure>
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
    width: 23.75rem;
    height: 15.5rem;
    background-color: var(--color-neutral-900);
    padding: 3.6rem 4.3rem;

    cursor: pointer;
    border-radius: 8px;
    border: 4px solid transparent;
    transform-style: preserve-3d;
    transition: 0.3s;
    z-index: 2;

    :hover {
        border: solid 4px var(--color-primary-700);
        box-shadow: var(--glow-item);
    }

    .partner-image {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 8px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    @media (min-width:600px) {
        width: 24.5rem;
        height: 16rem;
        padding: 3.7rem;
    }
`