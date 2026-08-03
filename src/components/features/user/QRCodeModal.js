import { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import { QRCodeSVG } from 'qrcode.react';

// assets
import IconeFechar from '../../../../public/images/icons/close.svg';

const QRCodeModal = ({ code, onClose }) => {

    const modalWrapperRef = useRef();
    const [isBrowser, setIsBrowser] = useState(false);

    const backDropHandler = e => {
        if (!modalWrapperRef || !modalWrapperRef.current) {
            return;
        } else if (!modalWrapperRef.current.contains(e.target)) {
            onClose();
        }
    }

    const handleGoogleSignIn = () => {
        signInGoogle();
        onClose();
    };

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
                        <h6>QR Code</h6>
                        <button className="close-icon-container" onClick={onClose}>
                            <img className='close-icon' src={IconeFechar}  alt="Ícone de fechar"></img>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <QRCodeSVG
                        value={code}
                        size={256}
                        bgColor="transparent"
                        fgColor="var(--background-neutrals-inverse)"
                        level="M" 
                        includeMargin={true}
                        marginSize={4}
                        />

                        <h1>{code}</h1>

                        <p>Apresente esse QR Code para que a comissão organizadora possa registrar sua presença no evento!</p>
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

export default QRCodeModal;


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
`

const ModalWrapper = styled.div`
    max-width: 328px;
    height: fit-content;
`

const StyledModal = styled.div`
    background-color: var(--background-neutrals-secondary);
    height: 100%;
    width: 100%;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(128, 128, 128, 0.25);

    background: color-mix(in srgb, var(--background-neutrals-nav) 75%, transparent);
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25); /* era 2px e 4px para rem */
    backdrop-filter: blur(12px);
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
        background-color: var(--background-neutrals-tertiary);
        margin-block: 0.75rem;
    }

    h1 {
        background: var(--text-gradient-primary-dark); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    p {
        font-weight: 200;
        margin-bottom: 0.5rem;
        text-align: center;
    }
`