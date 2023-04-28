import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import useAuth from '../../../hooks/useAuth';
import AuthModal from '../../components/AuthModal';

// assets
import LogoPrincipal from '../../../public/images/logos/logo_principal_horizontal.svg';
import InstagramLogo from '../../../public/images/social_media/InstagramLogo.svg';
import FacebookLogo from '../../../public/images/social_media/FacebookLogo.svg';
import LinktreeLogo from '../../../public/images/social_media/LinktreeLogo.svg';
import Button from '../../components/Button';

const pages = {
    "/": 1,
    "/schedule": 2,
    "/about": 3,
    "/partnerships": 4,
    "/co": 5,
    "/hackssi": 6,
    "/user": 8,
}

const Nav = () => {

    const { user } = useAuth();
    const router = useRouter();
    
    const [isOpen, setIsOpen] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleShowAuthModal = () => {
        if (window.pageYOffset != 0) {
            setTimeout(() => { handleShowAuthModal() }, 50);
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

                <Link href="/">
                    <a className="logo-container">
                        <img src={LogoPrincipal} alt="SSI logo" />
                        <p className='text-small'>
                            Semana de Sistemas de Informação
                        </p>
                    </a>
                </Link>

                {showAuthModal &&
                    <AuthModal
                        onClose={() => setShowAuthModal(false)}
                        show={showAuthModal}
                    />
                }

                <NavDesktop currentPage={router.pathname}>
                    <ul>
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>

                        <li>
                            <Link href="/schedule" ><a>Programação</a></Link>
                        </li>

                        <li>
                            <Link href="/about"><a>Evento</a></Link>
                        </li>

                        <li>
                            <Link href="/partnerships"><a>Parcerias</a></Link>
                        </li>

                        <li>
                            <Link href="/co"><a>Comissão Organizadora</a></Link>
                        </li>

                        <li>
                            <Link href="/hackssi"><a>HackSSI</a></Link>
                        </li>

                        <li>
                            {/* <Link href="https://ctfssi.intheshell.page/"> */}<span target="blank">CTF</span>{/* </Link> */}
                        </li>

                        {user ?
                            <li className='userPicContainer'>
                                <Link href="/user"><a><img src={user.photoUrl} alt="user pic" referrerPolicy="no-referrer" /></a></Link>
                            </li>
                            :
                            <li>
                                <Button onClick={handleShowAuthModal}>Login</Button>
                            </li>

                        }
                    </ul>
                </NavDesktop >

                <NavMobile isOpen={isOpen} currentPage={router.pathname}>
                    <div className={isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>


                        <ul>
                            {user ?
                                <li onClick={() => setIsOpen(false)}>
                                    <div className='user-info' href="/user">
                                    
                                        <Link href="/user"><a><img src={user.photoUrl} alt="user pic" referrerPolicy="no-referrer" /></a></Link>
                                        <div>
                                            <p className='welcome-user'>Olá{user.name ? `, ${user.name.split(' ')[0]}!` : '!'}</p>
                                            <a href="/user">Ver Perfil</a>
                                        </div>
                                    
                                    </div>
                                </li>
                                :
                                <li className='login-button' onClick={() => setIsOpen(false)}>
                                    <Button onClick={handleShowAuthModal}>Login</Button>
                                </li>
                            }

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/"><a>Home</a></Link>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/schedule"><a>Programação</a></Link>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/about"><a>Evento</a></Link>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/partnerships"><a>Parcerias</a></Link>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/co"><a>Comissão Organizadora</a></Link>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/hackssi"><a>HackSSI</a></Link>
                            </li>

                            <li /* onClick={() => setIsOpen(false)} */>
                                {/* <Link href="https://ctfssi.intheshell.page/"> */}<a style={{"color": "gray"}} target="blank">CTF</a>{/* </Link> */}
                            </li>

                        </ul>

                        {/* <NavFooter>
                            <div className="logo-container">
                                <img src={LogoPrincipal} alt="SSI logo" />
                                <p>
                                    Semana de Sistemas de <br />Informação 2023
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
                        </NavFooter> */}
                        <div className='close-btn'>
                            <div className='fechar' onClick={() => setIsOpen(!isOpen)}>
                                <div className='close hamburguer-menu' type="button">
                                    <span></span>
                                    <span></span>
                                </div>
                                <p className='text-small'>Fechar</p>
                            </div>
                        </div>
                    </div>

                    <button className='hamburguer-menu' type="button" onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </NavMobile >
            </NavWrapper >
        </>
    )
}

export default Nav;


const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    position: fixed;
    width: 100%;
    height: 3.5rem;
    z-index: 10;
    background-color: var(--color-neutral-900);
    box-shadow: 0px 5px 24px 14px rgba(16,3,26,0.38);

    .logo-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 14rem;
        gap: 1rem;
    }

    .text-small {
        font: 400 0.875rem/1.125rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
    }

    @media (min-width:1300px) {
        /* background-color: unset; */
        position: unset;
        height: 3.75rem;
        z-index: unset;
        justify-content: center;
        box-shadow: unset;
        padding-inline: 6.75rem;
        /* width: 100%; */
    }
`

const NavMobile = styled.nav`
    overflow: hidden;

    .hamburguer-menu {
        background-color: unset;
        border: unset;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1.375rem;
        width: 2rem;

        span {
            display: block;
            height: 3px;
            width: 100%;
            background: #FFF;
            border-radius: 12px;
            transition: all 0.3s ease;
        }
    }

    /* ${props => props.isOpen && css`
        span {
            margin: 0;
        }
        span:nth-child(1) {
            transform: rotate(45deg) translateY(7.5px) translateX(6px);
        }
        span:nth-child(2) {
            transform: translateX(-50px);
            opacity: 0;
        }
        span:nth-child(3) {
            transform: rotate(-45deg) translateY(-7.5px) translateX(6px);
        }
    `} */

    .sidepanel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100vh;
        width: fit-content;
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-neutral-900);
        transition: all linear .15s;
        border-radius: 12px;
        padding: 1.5rem;
        
        .close-btn {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .fechar {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 5rem;

                .hamburguer-menu {
                    width: 1.5rem;
                }

                .close {
                    
                    span {
                        margin: 0;

                    }
                    span:nth-child(1) {
                        transform: rotate(45deg) translateY(7.5px) translateX(6px);
                    }
                    span:nth-child(2) {
                        transform: rotate(-45deg) translateY(-7.5px) translateX(6px);
                    }
                }
                    
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .login-button {
                margin-bottom: 2rem;
            }

            li {
                margin-bottom: 1.5rem;

                .user-info {
                    width: fit-content;
                    max-width: 100%;
                    height: 2.75rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    > div {
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                        justify-content: left;
                    }

                    p {
                        font: 400 0.875rem/1.125rem 'Space_Mono_Bold';
                        color: var(--color-neutral-50);

                    }

                    a {
                        margin: 0;
                        font: 700 0.75rem/1rem 'Space_Mono';
                        cursor: pointer;
                    }
                }

                a {
                    color: var(--color-neutral-50);
                    margin: 0 12px;
                    transition: all .2s;
                }

                span {
                    color: gray;
                    margin: 0 12px;

                    cursor: default;
                }

                img {
                    width: 2.75rem;
                    border-radius: 100%;
                    margin-right: 1rem;

                    ${props => props.currentPage == '/user' && css`
                        border: 2px solid white;
                    `}
                }

                a:active {
                    cursor: pointer;
                    color: var(--color-secondary);
                    filter: brightness(1.1);
                }
            }

            ${props => props.currentPage && css`
                li:nth-child(${pages[props.currentPage]+1}){
                    a {
                        font-family: 'Space_Mono_Bold';
                        font-weight: 400;
                        padding: .2rem -5rem;
                        pointer-events: none;
                        border-bottom: 4px solid var(--color-primary-500);
                    }
                }
            `}
        }

        @media (max-height:590px) {
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

        @media (max-height:590px) {
            right: -100%;
        }
    }

    @media (min-width:1300px) {
        display: none;
    }
`

const NavFooter = styled.div`
    position: absolute;
    bottom: 0;
    padding: 30px 0;
    width: 100%;

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


    .logos_midia {
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

    @media (max-height:590px) {
        position: unset;
        bottom: unset;
        width: 45%;
        margin-left: 10px;
    }
`

const NavDesktop = styled.nav`
    display: none;
    margin-left: auto;

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;

        button {
            padding-block: 0.65rem;
            margin-left: 0.75rem;
        }

        .userPicContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-left: 0.75rem;
            margin-top: 1px;

            img {
                width: 44px;
                border-radius: 100%;
                transition: 0.1s;
            }

            img:hover {
                width: 44px;
                border: 2px solid white;
            }

            ${props => props.currentPage == '/user' && css`
                img {
                    width: 52px;
                    border: 2px solid white;
                }
            `}
        }

        a {
            font: 700 1rem/1.25rem 'Space_Mono';
            margin: 0 12px;
            transition: all .2s;

            :hover {
                cursor: pointer;
            }
        }

        span {
            color: gray;
            margin: 0 12px;
            cursor: default;
        }

        ${props => props.currentPage && css`
            li:nth-child(${pages[props.currentPage]}) {
                a {
                    font-family: 'Space_Mono_Bold';
                    font-weight: 400;
                    padding: .2rem -5rem;
                    pointer-events: none;
                    border-bottom: 4px solid var(--color-primary-500);
                }
            }

            li:not(:last-child):not(:nth-child(${pages[props.currentPage]})):hover {
                a {
                    border-bottom: 4px solid var(--color-neutral-50);
                }
            }
        `}

    }

    @media (min-width:1300px) {
        display: block;
    }
`