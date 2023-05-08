import { useState } from 'react';
import styled from 'styled-components';

// components
import GiftModal from './GiftModal';

const GiftCard = ({ image, name, totalPres, presentialPres }) => {

    const [btnState, setBtnState] = useState(false);
  
    const handleBtnClick = () => {
        setBtnState(!btnState);
    };

    return (
        <GiftWrapper onClick={() => handleBtnClick()}>
            <div className='gift-box'>
                <figure className='gift-image'>
                    <img src={image} alt={`Logo ${name}`}></img>
                </figure>
                <p>{name}</p>
            </div>
            <GiftPopUpBackdrop id="backdrop-parent" className={btnState ? "show-modal" : ""}>
                <GiftPopUp id="popup">
                    <GiftModal
                        onClose={() => handleBtnClick()}
                        image={image}
                        name={name}
                        totalPres={totalPres}
                        presentialPres={presentialPres}
                    />
                </GiftPopUp>
            </GiftPopUpBackdrop>
        </GiftWrapper>
    )
}

export default GiftCard;

const GiftPopUpBackdrop = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    display : none;
    z-index: 99;

    &.show-modal {

    display: flex;
    }
`
  
const GiftPopUp = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
`

const GiftWrapper = styled.div`
    position: relative;

    .gift-box {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 11.375rem;
        height: 8.875rem;
        padding: 0.65625rem;
        background-color: var(--color-neutral-800);
        border: 4px solid var(--color-primary-700);
        border-radius: 8px;
        gap: 0.3125rem;
        transition: 0.3s;
        z-index: 2;

        :hover {
            background-color: var(--color-neutral-700);
        }

        :active {
            background-color: var(--color-neutral-600);
        }

        .gift-image {
            display: flex;
            align-items: center;
            max-height: 5.55rem;
            border-radius: 8px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        p {
            font-family: 'Space_Mono_Bold';
            font-weight: 400;
        }

    }

    @media (min-width:1000px) {
        width: 23.75rem;
        height: 15.5rem;
        padding: 3.6rem 4.3rem;
    }
`