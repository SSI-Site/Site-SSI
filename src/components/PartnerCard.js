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
    width: 20.5rem;
    height: 15.125rem;
    background-color: var(--color-neutral-800);

    cursor: pointer;
    border: 2px solid var(--color-neutral-secondary);
    transition: all 0.15s ease-in-out;
    z-index: 2;

    &:hover {
        border: solid 2px var(--color-primary);
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
        
        a {
            padding: 3.6rem 4.3rem;
        }
    }
`