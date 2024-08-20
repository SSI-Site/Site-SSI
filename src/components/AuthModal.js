import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import ReactDOM from "react-dom";

import useAuth from '../../hooks/useAuth';

// assets
import LogoHorizontal from '../../public/images/logos/logo_horizontal.svg';
import IconeFechar from '../../public/images/icons/close.svg';

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

        document.body.style.overflow = 'hidden';
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
                        {/* Alterações no título e ícone do header */}
                        <h6>Fazer login</h6>
                        <figure className="close-icon-container">
                            <img className='close-icon' src={IconeFechar}  alt="Ícone de fechar" onClick={onClose}></img>
                        </figure>
                    </ModalHeader>
                    <ModalBody>
                        <div></div>
                        <figure>
                            <img className='logo' src={LogoHorizontal} alt="Logo SSI 2024" />
                        </figure>
                        {/* Adicionando o texto do corpo */}
                        <p>Faça o login para conseguir registrar as suas presenças e garantir os seus brindes</p>

                        <SignInBtn onClick={handleGoogleSignIn}>
                            {/* Logo da Google */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.064 5.51C1.89601 3.85324 3.17237 2.46051 4.75043 1.48747C6.32849 0.514427 8.14606 -0.000583569 10 4.96231e-07C12.695 4.96231e-07 14.959 0.991001 16.69 2.605L13.823 5.473C12.786 4.482 11.468 3.977 10 3.977C7.395 3.977 5.19 5.737 4.405 8.1C4.205 8.7 4.091 9.34 4.091 10C4.091 10.66 4.205 11.3 4.405 11.9C5.191 14.264 7.395 16.023 10 16.023C11.345 16.023 12.49 15.668 13.386 15.068C13.9054 14.726 14.3501 14.2822 14.6932 13.7635C15.0363 13.2448 15.2706 12.6619 15.382 12.05H10V8.182H19.418C19.536 8.836 19.6 9.518 19.6 10.227C19.6 13.273 18.51 15.837 16.618 17.577C14.964 19.105 12.7 20 10 20C8.68663 20.0005 7.38604 19.7422 6.17254 19.2399C4.95905 18.7375 3.85645 18.0009 2.92776 17.0722C1.99907 16.1436 1.2625 15.041 0.760135 13.8275C0.257774 12.614 -0.000524861 11.3134 8.00714e-07 10C8.00714e-07 8.386 0.386001 6.86 1.064 5.51Z" fill="#F3F3F3"/>
                            </svg>
                            <span>Entrar com o Google</span>
                        </SignInBtn>
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
    position: absolute;
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
    width: 360px;
    height: 380px;
`

// alterações da cor de fundo, bordas e padding
const StyledModal = styled.div`
    background-color: var(--color-neutral-800);
    height:100%;
    width:100%;
    padding: 16px 24px 24px 24px;
`

// alterações nos estilos do header (com animação do ícone close)
const ModalHeader = styled.header`
    position: relative;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .close-icon-container {
    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza o ícone */
    margin-top: 0.5rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    background-image: linear-gradient(to right, var(--color-neutral-50), var(--color-neutral-50));
    background-size: 200%;
    background-position-x: 200%;
    transition: all 100ms ease-out;
    background-repeat: no-repeat;
    }

    .close-icon {
        width: 30%;
        height: 30%;
        transition: filter 100ms ease-out;
    }

    .close-icon-container:hover {
        background-position-x: 100%;
    }

    .close-icon-container:hover .close-icon {
        filter: brightness(0); /* Muda a cor do SVG para preto */
    }

    h6 {
        font: 700 1rem/1.25rem 'AT Aero Bold';
    }

`

// alterações nos estilos do corpo (principalmente texto)
const ModalBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;

    figure {
        width: 240px;
        margin: 30px 0;
    }

    img {
        width: 100%;
    }

    div {
        width: 100%;
        height: 1px;
        background-color: #4B4B4B;
        margin: 0.7rem 2rem;
    }

    p {
        font-weight: 400;
        width: 90%;
    }
`

// alterações no estilo do botão (com animação)
const SignInBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 3rem;
    padding: 0.5625rem 1.3125rem;
    margin-top: 1.5rem;
    border: 2px solid var(--color-neutral-50);
    background-color: transparent;
    cursor: pointer;
    background-image: linear-gradient(to right, var(--color-primary), var(--color-primary));
    background-size: 15%;
    background-position-x: 200%;
    transition: all 150ms ease-out;
    background-repeat: no-repeat;

    span {
        font: 700 1rem/1.25rem 'AT Aero Bold';
    }

    svg {
        width: 30px;
        margin-right: 5%;
    }

    &:hover {
        background-color: var(--color-neutral-50);
        background-position-x: 100%;
        
        span {
            color: var(--color-primary);
        }

        svg path {
            fill: var(--color-primary);
        }
    }

    &:active {
        background-color: var(--color-neutral-100);
        border-color: var(--color-neutral-100);

        span {
            color: var(--color-primary);
        }

        svg path {
            fill: var(--color-primary);
        }
    }
        
    @media (min-width:560px) {
        width: 95%;
        height: 3rem;
        padding: 0.5625rem 2.5rem 0.5625rem 2rem;

        span {
           // font: 700 1.125rem/1.5rem 'AT Aero Bold';
        }
    }
`