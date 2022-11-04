import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useAuth from '../../../hooks/useAuth';

import Divider from '../../components/Divider';
import AuthModal from '../../components/AuthModal';

import InstagramLogo from '../../../public/images/social_media/insta.png';
import FacebookLogo from '../../../public/images/social_media/feice.png';
import LinktreeLogo from '../../../public/images/social_media/linktree.png';

const pages = {
    "/": 1,
    "/schedule": 2,
    "/about": 3,
    "/sponsors": 4,
    "/co": 5,
    "/user": 6
}

const Nav = () => {

    const { user } = useAuth();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleShowAuthModal = () => {
        if (window.pageYOffset != 0) {
            setTimeout(() => { handleShowAuthModal() }, 50)
        } else {
            setShowAuthModal(true);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <NavWrapper>
                {showAuthModal &&
                    <AuthModal
                        onClose={() => setShowAuthModal(false)}
                        show={showAuthModal}
                    />
                }

                <NavDesktop currentPage={router.pathname}>
                    <ul>
                        <li>
                            <Link href="/"><a>Início</a></Link>
                            <div></div>
                        </li>

                        <li>
                            <Link href="/schedule" ><a>Programação</a></Link>
                            <div></div>
                        </li>

                        <li>
                            <Link href="/about"><a>Evento</a></Link>
                            <div></div>
                        </li>

                        <li>
                            <Link href="/sponsors"><a>Apoiadores</a></Link>
                            <div></div>
                        </li>

                        <li>
                            <Link href="/co"><a>Comissão Organizadora</a></Link>
                            <div></div>
                        </li>

                        <li>
                            <Link href="https://ctfssi.intheshell.page/"><a target="blank">CTF</a></Link>
                            <div></div>
                        </li>

                        {user ?
                            <li className='userPicContainer'>
                                <Link href="/user"><a><img src={user.photoUrl} alt="user pic" referrerPolicy="no-referrer" /></a></Link>
                            </li>
                            :
                            <li className='logInBtnContainer'>
                                <button /* onClick={handleShowAuthModal} */><span>Entrar</span></button>
                                {/* <div></div> */}
                            </li>

                        }
                    </ul>
                </NavDesktop >


                <NavMobile isOpen={isOpen} currentPage={router.pathname}>
                    <div className={isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>

                        <ul>
                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/"><a>Início</a></Link>
                                <div></div>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/schedule"><a>Programação</a></Link>
                                <div></div>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/about"><a>Evento</a></Link>
                                <div></div>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/sponsors"><a>Apoiadores</a></Link>
                                <div></div>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/co"><a>Comissão Organizadora</a></Link>
                                <div></div>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="https://ctfssi.intheshell.page/"><a target="blank">CTF</a></Link>
                                <div></div>
                            </li>

                            {user ?
                                <li onClick={() => setIsOpen(false)}>
                                    <Link href="/user"><a><img src={user.photoUrl} alt="user pic" referrerPolicy="no-referrer" /></a></Link>
                                    <div></div>
                                </li>
                                :
                                <li /* 0nClick={() => setIsOpen(false)} */>
                                    <button><a style={{ "color": "gray" }}>Entrar</a></button>
                                    {/* <div></div> */}
                                </li>
                            }
                        </ul>

                        <Divider dividerSize="medium" />

                        <NavFooter>
                            <div className="logo-container">
                                <img src="./images/logos/logo_sem_estrela.svg" alt="SSI logo" />
                                <p>
                                    Semana de Sistemas de <br />Informação 2022
                                </p>
                            </div>
                            <div className='redes'>
                                <h5>
                                    SIGA-NOS NAS REDES SOCIAIS
                                </h5>
                                <div className='logos_midia'>
                                    <div>
                                        <a href="https://www.instagram.com/semanadesi/" target="_blank" rel="noreferrer">
                                            <img src={InstagramLogo} alt="Instagram"></img>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.facebook.com/SSIUSP" target="_blank" rel="noreferrer">
                                            <img src={FacebookLogo} alt="Facebook"></img>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://linktr.ee/SemanaDeSI" target="_blank" rel="noreferrer">
                                            <img src={LinktreeLogo} alt="Linktree"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </NavFooter>

                    </div>

                    <button type="button" onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </NavMobile >
            </NavWrapper >
        </>
    );

}

export default Nav;

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    position: fixed;
    width: 100%;
    height: 4.5rem;
    padding-right: 15px;
    z-index: 10;
    background-color: var(--color-primary);
    box-shadow: 0px 5px 24px 14px rgba(16,3,26,0.38);


    @media(min-width: 800px) {
        background-color: unset;
        position: unset;
        z-index: unset;
        padding-top: 20px;
        justify-content: center;
        box-shadow: unset;
    }
`

const NavMobile = styled.nav`
    padding: 10px;
    overflow: hidden;

    button {
        background-color: unset;
        border: unset;

        span {
            display: block;
            height: 3px;
            width: 25px;
            background: #FFF;
            margin-top: 3px;
            border-radius: 1px;

            transition: all 0.3s ease;
        }
    }

    ${props => props.isOpen && css`
        span {
            margin: 0;
        }
        span:nth-child(1){
            transform: rotate(45deg) translateY(8px);
        }
        span:nth-child(2){
            transform: translateX(50px);
            opacity: 0;
        }
        span:nth-child(3){
            transform: rotate(-45deg) translateY(-8px);
        }
    `}

    .sidepanel {
        height: 100%;
        width: 75%;
        max-width: 450px;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #151023;
        border-left: 2px solid #ffffff;
        padding-top: 20px;
        transition: all linear .15s;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 5rem;

            li {
                margin-top: 1.5rem;

                a {
                    font-family: 'Bebas Neue';
                    font-size: 2.2rem;
                    color: var(--color-text);
                    margin: 0 12px;
                    transition: all .2s;
                }

                span {
                    font-family: 'Bebas Neue';
                    font-size: 2.2rem;
                    color: gray;
                    margin: 0 12px;

                    cursor: default;
                }

                img {
                    width: 6rem;
                    border-radius: 100%;

                    ${props => props.currentPage == '/user' && css`
                        border: 2px solid white;
                    `}
                }

                a:active {
                    cursor: pointer;
                    font-size: 2.4rem;
                    color: var(--color-secondary);
                    filter: brightness(1.1);
                }
            }

            ${props => props.currentPage && css`
                li:nth-child(${pages[props.currentPage]}){
                    a {
                        padding: .2rem -5rem;
                        pointer-events: none;
                    }

                    div {
                        width: 70%;
                        margin-left: 15%;
                        height: 1px;
                        background-color: var(--color-text);
                    }
                }
            `}
        }

        @media(max-height: 590px) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            max-width: unset;

            ul {
                width: 45%;
                margin-top: 0;
                margin-right: 10px;
            }
        }

    }

    .sidepanel-hidden {
        right: -450px;

        @media(max-height: 590px) {
            right: -100%;
        }
    }

    @media (min-width: 800px) {
        display: none;
    }

`

const NavFooter = styled.div`
    position: absolute;
    bottom: 0;
    padding: 30px 0;
    width: 100%;

    p {
        font-weight: bold;
    }

    .redes {
        text-align: center;
    }

    .logo-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        margin-bottom: 3rem;

        img {
            width: 30%;
            max-width: 100px;
        }
    }


    .logos_midia{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        text-align: center;

        img {
            width: 45px;
            margin: 0 .75rem;
        }
    }

    .logos_midia img:active {
        filter: brightness(60%) sepia(0) saturate(0) hue-rotate(360deg);
        width: 50px;
        transition: 0.2s all;
    }

    @media(max-height: 590px) {
        position: unset;
        bottom: unset;
        width: 45%;
        margin-left: 10px;
    }
`

const NavDesktop = styled.nav`

    display: none;

    ul {
        display: flex;
        height: 40px;

        .logInBtnContainer {
            position: absolute;
            top: 22px;
            right: 22px;

            @media(min-width: 1020px) {
                top: 26px;
                right: 26px;
            }
        }


        .userPicContainer {
            position: absolute;
            top: 15px;
            right: 10px;

            img {
                width: 50px;
                border-radius: 100%;
                transition: 0.1s;
            }

            img:hover {
                width: 60px;
                border: 2px solid white;
            }

            ${props => props.currentPage == '/user' && css`
                img {
                    width: 52px;
                    border: 2px solid white;
                }
            `}
        }

        li {
            div {
                width: 0%;
                margin-left: 50%;
                height: 1px;
                background-color: var(--color-text);
                transition: all .2s;
            }

            button {
                background: rgba(0,0,0,0);
                border: none;
            }
        }

        li:hover {
            div {
                width: 70%;
                margin-left: 15%;
                height: 1px;
                background-color: var(--color-text);
            }
        }

        a {
            font-family: 'Bebas Neue';
            font-size: 1.5rem;
            color: var(--color-text);
            margin: 0 12px;
            transition: all .2s;
        }

        span {
            font-family: 'Bebas Neue';
            font-size: 1.5rem;
            color: gray;
            margin: 0 12px;

            cursor: default;
        }

        a:hover {
            cursor: pointer;
            font-size: 1.7rem;
        }

        ${props => props.currentPage && css`
            li:nth-child(${pages[props.currentPage]}) {
                a {
                    padding: .2rem -5rem;
                    pointer-events: none;
                }

                div {
                    width: 70%;
                    margin-left: 15%;
                    height: 1px;
                    background-color: var(--color-text);
                }
            }
        `}
    }


    @media (min-width: 800px) {
        display: block;
    }
`