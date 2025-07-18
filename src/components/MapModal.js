import { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";

// components
import SecondaryButton from './SecondaryButton';

// assets
import IconeFechar from '../../public/images/icons/close.svg';
import Mapa from '../../public/images/background_imgs/mapa_campus.png';

const MapModal = ({ onClose }) => {

    const modalWrapperRef = useRef();
    const [isBrowser, setIsBrowser] = useState(false);

    const backDropHandler = e => {
        if (!modalWrapperRef || !modalWrapperRef.current) {
            return;
        } else if (!modalWrapperRef.current.contains(e.target)) {
            onClose();
        }
    }

    useEffect(() => {
        setIsBrowser(true);

        window.addEventListener('click', backDropHandler);

        return () => {
            window.removeEventListener('click', backDropHandler);
            document.body.style.overflow = 'unset';
        };
    }, []);

    const modalContent = (
        <ModalOverlay>
            <ModalWrapper ref={modalWrapperRef}>
                <StyledModal>
                    <ModalHeader>
                        <h6>Mapa da EACH</h6>
                        <button className="close-icon-container" onClick={onClose}>
                            <img className='close-icon' src={IconeFechar}  alt="Ícone de fechar"></img>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <div></div>
                        <figure>
                            <img className='mapa' src={Mapa} alt="Mapa do campus" />
                        </figure>
                    </ModalBody>
                </StyledModal>
            </ModalWrapper>
        </ModalOverlay>
    );

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
}

export default MapModal;


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-inline: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
`

const ModalWrapper = styled.div`
    max-width: 765px;
    height: 100%px;
`

const StyledModal = styled.div`
    background-color: var(--background-neutrals-secondary);
    height: 100%;
    width: 100%;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
`

const ModalHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .close-icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        background-image: linear-gradient(to right, var(--background-neutrals-inverse), var(--background-neutrals-inverse));
        background-size: 200%;
        background-position-x: 200%;
        transition: all 0.15s ease-out;
        background-repeat: no-repeat;

        .close-icon {
            width: 30%;
            height: 30%;
            transition: filter 0.15s ease-out;
        }

        &:hover, &:focus-visible {
            background-position-x: 100%;

            .close-icon {
                filter: brightness(0);
            }
        }

        &:focus-visible {
            outline: 2px solid var(--brand-purple-700);
            outline-offset: 2px;
        }
    }
`

const ModalBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    div {
        width: 100%;
        height: 1px;
        background-color: var(--background-neutrals-secondary);
        margin: 0.7rem 2rem;
        border-top: 1px solid var(--outline-neutrals-secondary);
    }

    img {
        width: 100%;
    }

    p {
        font-weight: 400;
        margin-bottom: 0.5rem;
    }
`