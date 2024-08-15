import { useState } from 'react';
import styled from 'styled-components';

// components
import GiftModal from './GiftModal';
import Image from 'next/image';

const GiftCard = ({ image, name, totalPres, presentialPres }) => {

    const [btnState, setBtnState] = useState(false);
  
    const handleBtnClick = () => {
        setBtnState(!btnState);
    };

    return (
        <>
            <GiftWrapper>
                <div className='gift-box' onClick={() => handleBtnClick()}>
                    <figure className='gift-image'>
                        <Image src={image} alt={`Logo ${name}`} />
                    </figure>
                    <p>{name}</p>
                </div>
            </GiftWrapper>
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
        </>
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
    background-color: var(--color-neutral-800);
    border: 4px solid var(--color-primary-700);
    border-radius: 8px;
    transition: 0.3s;

    :active {
        background-color: var(--color-neutral-600);
    }

    .gift-box {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 9.25rem;
        height: 9rem;
        padding: 0.65625rem;
        gap: 0.3125rem;

        .gift-image {
            display: flex;
            align-items: center;
            height: 5.55rem;
            border-radius: 8px;

            img {
                width: 100%;
                max-width: 100%;
                height: auto;
                max-height: 100%;
                object-fit: contain;
            }
        }

        p {
            font-size: 0.85rem; // fonte menor para evitar quebra de linha
            font-family: 'AT Aero Bold';
            font-weight: 400;
            text-align: center;
        }
    }

    @media (min-width:428px) {

        .gift-box {
            width: 11.375rem;
            height: 10rem;
            p {
                font-size: 1rem;
            }
        }
    }

    @media (min-width:1000px) {
        width: 18rem;
        height: 14.75rem;
        border: 4px solid transparent;

        :hover:not(:active) {
            border: 4px solid var(--color-primary-700);
            background-color: var(--color-neutral-700);  
            animation: shake 1s;
            animation-iteration-count: infinite; 
        }

        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        
        .gift-box {
            width: 100%;
            height: 100%;
            padding: 2rem 3rem;
            padding: 1.5rem;

            .gift-image {
                height: 9rem;
            }

            p {
                font: 400 1.15rem/1.5rem 'AT Aero Bold'; // menor que no Figma, paa evitar quebra de linha
                font: 400 1.5rem/1.75rem 'AT Aero Bold';
            }
        }
    }
`