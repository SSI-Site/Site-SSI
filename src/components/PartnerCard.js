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
    width: 9.75rem;
    height: 7.5rem;
    padding: 1.5rem;
    background-color: var(--color-neutral-800);

    cursor: pointer;
    border-radius: 8px;
    border: 4px solid transparent;
    transition: 0.3s;
    z-index: 2;

    :hover {
        border: solid 4px var(--color-primary-700);
        background-color: var(--color-neutral-700);
    }

    :active {
        background-color: var(--color-neutral-600);
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

    @media (min-width:412px) {
        width: 11.375rem;
        height: 9.5rem;
        padding: 2rem;
    }

    @media (min-width:1000px) {
        width: 23.75rem;
        height: 15.5rem;
        padding: 3.6rem 4.3rem;
    }
`