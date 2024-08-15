import styled from "styled-components";

// assets
import CloseBtn from './../../public/images/icons/close.svg';
import Image from "next/image";

const GiftModal = ({ onClose, image, name, totalPres, presentialPres }) => {

    return (
        <ModalWrapper>
            <StyledGiftModal>
                <GiftModalHeader className='popup'>
                    <h4>{name}</h4>
                    <button className="close-btn-container" onClick={onClose}>
                        {/* Botão de fechar em svg: */}
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4 0.613387C17.2766 0.489783 17.1301 0.391719 16.9688 0.324811C16.8075 0.257902 16.6346 0.223462 16.46 0.223462C16.2854 0.223462 16.1125 0.257902 15.9512 0.324811C15.7899 0.391719 15.6434 0.489783 15.52 0.613387L9 7.12005L2.48 0.600054C2.35656 0.476611 2.21001 0.378691 2.04873 0.311885C1.88744 0.245078 1.71458 0.210693 1.54 0.210693C1.36543 0.210693 1.19256 0.245078 1.03128 0.311885C0.869991 0.378691 0.723443 0.476611 0.6 0.600054C0.476558 0.723496 0.378638 0.870044 0.311831 1.03133C0.245025 1.19261 0.21064 1.36548 0.21064 1.54005C0.21064 1.71463 0.245025 1.88749 0.311831 2.04878C0.378638 2.21006 0.476558 2.35661 0.6 2.48005L7.12 9.00005L0.6 15.5201C0.476558 15.6435 0.378638 15.79 0.311831 15.9513C0.245025 16.1126 0.21064 16.2855 0.21064 16.4601C0.21064 16.6346 0.245025 16.8075 0.311831 16.9688C0.378638 17.1301 0.476558 17.2766 0.6 17.4001C0.723443 17.5235 0.869991 17.6214 1.03128 17.6882C1.19256 17.755 1.36543 17.7894 1.54 17.7894C1.71458 17.7894 1.88744 17.755 2.04873 17.6882C2.21001 17.6214 2.35656 17.5235 2.48 17.4001L9 10.8801L15.52 17.4001C15.6434 17.5235 15.79 17.6214 15.9513 17.6882C16.1126 17.755 16.2854 17.7894 16.46 17.7894C16.6346 17.7894 16.8074 17.755 16.9687 17.6882C17.13 17.6214 17.2766 17.5235 17.4 17.4001C17.5234 17.2766 17.6214 17.1301 17.6882 16.9688C17.755 16.8075 17.7894 16.6346 17.7894 16.4601C17.7894 16.2855 17.755 16.1126 17.6882 15.9513C17.6214 15.79 17.5234 15.6435 17.4 15.5201L10.88 9.00005L17.4 2.48005C17.9067 1.97339 17.9067 1.12005 17.4 0.613387Z" fill="#F3F3F3"/>
                        </svg>
                    </button>
                </GiftModalHeader>
                <GiftModalBody>
                    <figure>
                        <Image src={image} alt={name} />
                    </figure>

                    <div className='modal-text'>
                        <p>Número mínimo exigido de presenças registradas para resgatar este brinde:</p>
                        <div className='lecture-numbers'>
                            <h6>Total: <span>{totalPres}</span></h6>
                            <div></div>
                            <h6>Presenciais: <span>{presentialPres}</span></h6>
                        </div>
                    </div>
                </GiftModalBody>
            </StyledGiftModal>
        </ModalWrapper>
    );
}

export default GiftModal;


const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21rem;
    height: 27rem;
    padding: 1rem;
    border-radius: 16px;
    background-color: var(--color-neutral-800);

    @media (min-width:412px) {
        width: 23.75rem;
        height: 28.75rem;
        padding: 1.5rem 1rem;
    }

    @media (min-width:1000px) {
        width: 52.5rem;
        height: 42rem;
        padding: 3.5rem;
    }
`

const StyledGiftModal = styled.div`
    height:100%;
    width:100%;
`

const GiftModalHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h4 {
        font: 400 1.5rem/1.75rem 'AT Aero Bold';
    }

    .close-btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-neutral-800);
        cursor: pointer;
        border: none;

        svg path {
            transition: all 0.3s ease;
        }

        &:hover {
            svg path {
                fill: var(--color-primary-700);
            }
        }
    }
    
    @media (min-width:412px) {

        h4 {
            font: 400 2rem/2.5rem 'AT Aero Bold';
        }
    }
    
    @media (min-width: 1000px) {

        .close-btn-container {
            width: 1.6rem;
            height: 1.6rem;
            svg {
                width: 100%;
                height: 100%;
            }
        }
    }
`

const GiftModalBody = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    figure {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        img {
            height: 12rem;
            width: auto;
        }
    }

    .modal-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        h6 {
            font: 400 1rem/1.25rem 'AT Aero Bold';
        }

        p {
            font: 400 0.875rem/1.25rem 'AT Aero Bold';
        }

        p, h6 {
            text-align: center;
        }

        h6 span {
            font: inherit;
            color: var(--color-primary-500);
        }

        .lecture-numbers {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            
            > div {
                height: 24px;
                width: 2px;
                background-color: var(--color-neutral-600);
                margin-inline: 1rem;
                border-radius: 2px;
            }
        }
    }

    @media (min-width:412px) {
        gap: 2rem;

        .modal-text {
            h6 {
                font: 400 1.25rem/1.5rem 'AT Aero Bold';
            }

            p {
                font: 400 1rem/1.25rem 'AT Aero Bold';
            }
        }

        figure {
            img {
                height: 14rem;
                width: auto;
            }
        }
    }

    @media (min-width:1000px) {

        figure {
            img {
                height: 18.5rem;
                width: auto;
            }
        }
            
        .modal-text {
            p {
                font: 400 1.25rem/1.5rem 'AT Aero Bold';
            }

            h6 {
                font: 400 1.5rem/1.75rem 'AT Aero Bold';
            }

            .lecture-numbers > div {
                width: 4px;
                height: 28px;
            }
        }
    }
`