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
    --glow-item: 0px 0px 16px 12px rgba(121, 61, 174, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    border-radius: 16px;
    border: 4px solid transparent;
    transform-style: preserve-3d;
    transition: 0.3s;
    z-index: 2;

    :hover {
        border: solid 4px #8744C2;
        box-shadow: var(--glow-item);
    }

    .partner-image {
        display: flex;
        align-items: center;
        padding: 40px;
        width: 300px;
        height: 170px;
        border-radius: 16px;
        background: #1B162C;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media (min-width:600px) {
            width: 22rem;
            height: 14rem;
        }
    }
`