import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import ReactDOM from "react-dom";

import useAuth from '../../hooks/useAuth';

// assets
import Logo from '../../public/images/logos/logo_sem_estrela.svg';
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

                        <h2>Entrar com</h2>
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
    background-color: #151023;
    height:100%;
    width:100%;
    border-radius: 12px;
    padding: 5px;
    border: 2px solid #8744C2;
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
        background-color: #fff;
        border-radius: 10px;
        transform: rotate(45deg);
        transition: all .3s ease-in;
    }

    .rightleft {
        height: 3px;
        width: 20px;
        position: absolute;
        background-color: #fff;
        border-radius: 10px;
        transform: rotate(-45deg);
        transition: all .3s ease-in;
    }

    .close-btn-container:hover > .leftright {
        /* --glow: 0px 0px 2px 2px rgba(121, 61, 174, 0.5); */
        transform: rotate(-45deg);
        box-shadow: var(--glow);
        background-color: #8744C2;
    }

    .close-btn-container:hover > .rightleft {
        /* --glow: 0px 0px 2px 2px rgba(121, 61, 174, 0.5); */
        transform: rotate(45deg);
        box-shadow: var(--glow);
        background-color: #8744C2;
    }
`

const ModalBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;

    figure {
        width: 155px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
    }

    h2 {
        font-family: 'Bebas Neue';
        font-size: 24px;
        margin-bottom: 4px;
    }

    div {
        width: 40%;
        height: 1px;
        background-color: #8744C2;
        margin-bottom: 35px;
    }
`

const SigninBtn = styled.button`
    --glow: 0px 0px 16px 12px rgba(121, 61, 174, 0.5);
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 100px;
    background-color: #1B162C;
    border: 2px solid transparent;
    transition: 0.2s;
    cursor: pointer;

    span {
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: bold;
    }

    img {
        width: 18px;
        margin-right: 10%;
    }

    :hover {
        border: solid 2px #8744C2;
        box-shadow: var(--glow);
    }
`