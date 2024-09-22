import styled from 'styled-components';

const PartnerCard = ({ image, name, link }) => {

    return (
        <PartnerWrapper>
            <a href={link} target="_blank" rel="noreferrer">
                <div className='partner-image'>
                    <img src={image} alt={`Logo ${name}`} />
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
    width: 9.75rem;
    height: 7.5rem;
    background-color: var(--color-neutral-800);

    cursor: pointer;
    border-radius: 8px;
    border: 4px solid transparent;
    transition: 0.2s;
    z-index: 2;

    &:hover {
        border: solid 4px var(--color-primary-700);
        background-color: var(--color-neutral-700);
    }

    &:active {
        background-color: var(--color-neutral-600);
    }

    a {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
    }

    .partner-image {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 8px;

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

    @media (min-width:412px) {
        width: 11.375rem;
        height: 9.5rem;

        a {

            padding: 2rem;
        }
    }

    @media (min-width:1000px) {
        width: 23.75rem;
        height: 15.5rem;
        
        a {
            padding: 3.6rem 4.3rem;
        }
    }
`