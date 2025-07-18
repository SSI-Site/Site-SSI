import { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";

import useAuth from '../../hooks/useAuth';

// components
import SecondaryButton from './SecondaryButton';

// assets
import IconeFechar from '../../public/images/icons/close.svg';
import LogoCircular from '../../public/images/logos/logo_circular.png';

const AuthModal = ({ onClose }) => {

    const { signInGoogle } = useAuth();
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
                        <h6>Fazer login</h6>
                        <button className="close-icon-container" onClick={onClose}>
                            <img className='close-icon' src={IconeFechar}  alt="Ícone de fechar"></img>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <div></div>
                        <figure>
                            <img className='logo' src={LogoCircular} alt="Logo SSI 2024" />
                        </figure>

                        <p>Faça login para conseguir registrar suas presenças e garantir brindes!</p>

                        <SecondaryButton onClick={handleGoogleSignIn}>
                            {/* Logo da Google */}
                            <svg className = 'google-logo' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.064 5.51C1.89601 3.85324 3.17237 2.46051 4.75043 1.48747C6.32849 0.514427 8.14606 -0.000583569 10 4.96231e-07C12.695 4.96231e-07 14.959 0.991001 16.69 2.605L13.823 5.473C12.786 4.482 11.468 3.977 10 3.977C7.395 3.977 5.19 5.737 4.405 8.1C4.205 8.7 4.091 9.34 4.091 10C4.091 10.66 4.205 11.3 4.405 11.9C5.191 14.264 7.395 16.023 10 16.023C11.345 16.023 12.49 15.668 13.386 15.068C13.9054 14.726 14.3501 14.2822 14.6932 13.7635C15.0363 13.2448 15.2706 12.6619 15.382 12.05H10V8.182H19.418C19.536 8.836 19.6 9.518 19.6 10.227C19.6 13.273 18.51 15.837 16.618 17.577C14.964 19.105 12.7 20 10 20C8.68663 20.0005 7.38604 19.7422 6.17254 19.2399C4.95905 18.7375 3.85645 18.0009 2.92776 17.0722C1.99907 16.1436 1.2625 15.041 0.760135 13.8275C0.257774 12.614 -0.000524861 11.3134 8.00714e-07 10C8.00714e-07 8.386 0.386001 6.86 1.064 5.51Z" fill="#F3F3F3"/>
                            </svg>
                            Entrar com o Google
                        </SecondaryButton>
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

export default AuthModal;


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
    height: 404px;
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


    .google-logo path{
        fill: var(--background-neutrals-inverse);
    }
    
    div {
        width: 100%;
        height: 1px;
        background-color: var(--background-neutrals-secondary);
        margin: 0.7rem 2rem;
    }

    figure {
        width: 8rem;
        
        img {
            width: 100%;
        }
    }

    p {
        font-weight: 400;
        margin-bottom: 0.5rem;
    }
`