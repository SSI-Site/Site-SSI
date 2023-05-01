import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import ReactDOM from "react-dom";

import useAuth from '../../hooks/useAuth';

// assets
import Logo from '../../public/images/logos/logo_principal.svg';
import GoogleLogo from '../../public/images/login_icons/google_logo_white.png';

const AuthModal = ({ onClose }) => {

    const { signinGoogle } = useAuth();
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
        signinGoogle();
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
                        <button className="close-btn-container" onClick={onClose}>
                            <div className="leftright"></div>
                            <div className="rightleft"></div>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <figure>
                            <img className='logo' src={Logo} alt="Logo SSI 2023" />
                        </figure>

                        <h4>Entrar com</h4>
                        <div></div>

                        <SigninBtn onClick={handleGoogleSignIn}>
                            <img src={GoogleLogo} alt="Logo da Google branco" />
                            <span>Google</span>
                        </SigninBtn>
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
    width: 280px;
    height: 390px;
    border-radius: 12px;
`

const StyledModal = styled.div`
    background-color: var(--color-neutral-900);
    height:100%;
    width:100%;
    border-radius: 16px;
    padding: 5px;
    border: 4px solid var(--color-primary-800);
`

const ModalHeader = styled.header`
    position: relative;
    height: 27px;

    .close-btn-container {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        width: 21px;
        height: 21px;
        cursor: pointer;
        background-color: #151023;
        border: none;
    }

    .leftright {
        height: 3px;
        width: 20px;
        position: absolute;
        background-color: var(--color-neutral-50);
        border-radius: 10px;
        transform: rotate(45deg);
        transition: all .3s ease-in;
    }

    .rightleft {
        height: 3px;
        width: 20px;
        position: absolute;
        background-color: var(--color-neutral-50);
        border-radius: 10px;
        transform: rotate(-45deg);
        transition: all .3s ease-in;
    }

    .close-btn-container:hover > .leftright {
        transform: rotate(-45deg);
        box-shadow: var(--glow);
        background-color: var(--color-primary-500);
    }

    .close-btn-container:hover > .rightleft {
        transform: rotate(45deg);
        box-shadow: var(--glow);
        background-color: var(--color-primary-500);
    }
`

const ModalBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;

    figure {
        width: 120px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
    }

    h4 {
        margin-bottom: 4px;
    }

    div {
        width: 60%;
        height: 2px;
        background-color: var(--color-primary-800);
        margin-block: 0.5rem 2rem;
    }
`

const SigninBtn = styled.button`
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    padding: 16px;
    margin-bottom: 5px;
    border-radius: 12px;
    border: none;
    background-color: var(--color-primary);
    transition: 0.2s;
    cursor: pointer;

    span {
        font-family: 'Space_Mono_Bold';
        font-weight: 400;
    }

    img {
        width: 20px;
        margin-right: 10%;
    }

    &:hover {
        background-color: var(--color-primary-900);
    }

    &:active {
        background-color: var(--color-primary-800);
    }
`