import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import useAuth from '../../../hooks/useAuth';
import AuthModal from '../../components/AuthModal';

// components
import Button from '../../components/Button';

// assets
import LogoPrincipal from '../../../public/images/logos/logo_principal.svg';

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
        <NavWrapper>

            {/* Logo que redireciona para a home */}
            <Link href="/">
                <a className="logo-container">
                    <img src={LogoPrincipal} alt="SSI logo" />
                    <p className='text-small'>
                        Semana de Sistemas de Informação 2023
                    </p>
                </a>
            </Link>

            {/* Caixa de autenticação/login */}
            {showAuthModal &&
                <AuthModal
                    onClose={() => setShowAuthModal(false)}
                    show={showAuthModal}
                />
            }

            {/* Navbar para Desktop */}
            <NavDesktop currentPage={router.pathname}>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
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
                        <Link href="/partnerships"><a>Parcerias</a></Link>
                        <div></div>
                    </li>

                    <li>
                        <Link href="/co"><a>Comissão Organizadora</a></Link>
                        <div></div>
                    </li>

                    <li>
                        <Link href="/hackssi"><a>HackSSI</a></Link>
                        <div></div>
                    </li>

                    <li>
                        {/* <Link href="https://ctfssi.intheshell.page/"> */}<span target="blank">CTF</span>{/* </Link> */}
                        {/* <div></div> */}
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
            </NavDesktop>

            {/* Navbar para Mobile */}
            <NavMobile isOpen={isOpen} currentPage={router.pathname}>
                <div className={isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>

                    <ul>
                        {user ?
                            <li onClick={() => setIsOpen(false)}>
                                <div className='user-info' href="/user">
                                
                                    <Link href="/user"><a><img src={user.photoUrl} alt="user pic" referrerPolicy="no-referrer" /></a></Link>
                                    <div>
                                        <p className='welcome-user'>Olá{user.name ? `, ${user.name.split(' ')[0]}!` : '!'}</p>
                                        <a href="/user">Ver perfil</a>
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
                            <Link href="/partnerships"><a>Parcerias</a></Link>
                            <div></div>
                        </li>

                        <li onClick={() => setIsOpen(false)}>
                            <Link href="/co"><a>Comissão Organizadora</a></Link>
                            <div></div>
                        </li>

                        <li onClick={() => setIsOpen(false)}>
                            <Link href="/hackssi"><a>HackSSI</a></Link>
                            <div></div>
                        </li>

                        <li /* onClick={() => setIsOpen(false)} */>
                            {/* <Link href="https://ctfssi.intheshell.page/"> */}<a style={{"color": "gray"}} target="blank">CTF</a>{/* </Link> */}
                            {/* <div></div> */}
                        </li>

                    </ul>

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
            </NavMobile>

        </NavWrapper>
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
        position: unset;
        height: 3.75rem;
        z-index: unset;
        justify-content: center;
        box-shadow: unset;
        padding-inline: 6.75rem;
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

    .sidepanel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
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
                
                button {
                    padding-block: 0.65rem;
                }
            }

            li {
                margin-bottom: 1.5rem;
                position: relative;

                div:not(first-child) {
                    position: absolute;
                    margin-top: 2px;
                    width: 0%;
                    margin-left: 50%;
                    height: 4px;
                    background-color: var(--color-neutral-50);
                    transition: all .2s;
                }

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
                        color: #fff;
                        margin-bottom: 2px;
                    }

                    a {
                        margin: 0;
                        font: 700 0.75rem/1rem 'Space_Mono';
                        cursor: pointer;
                        
                        &:hover, &:active {
                            text-decoration: underline;
                        }
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
                        border: 4px solid var(--color-primary-500);
                    `}

                    &:hover, &:active {
                        border: 4px solid white;
                    }
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
                        /* border-bottom: 4px solid var(--color-primary-500); */
                    }

                    div {
                        width: calc(100% - 24px);
                        margin-left: 12px;
                        height: 4px;
                        background-color: var(--color-primary-500);
                        border-radius: 12px;
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

const NavDesktop = styled.nav`
    display: none;
    margin-left: auto;

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;

        li {
            position: relative;

            div {
                position: absolute;
                margin-top: 2px;
                width: 0%;
                margin-left: 50%;
                height: 4px;
                background-color: var(--color-neutral-50);
                transition: all .2s;
                border-radius: 12px;
            }
        }

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

                &:hover {
                    border: 4px solid white;
                }
            }
                        

            ${props => props.currentPage == '/user' && css`

                :nth-child(${pages[props.currentPage]}):hover {
                    li, a {
                        pointer-events: none;
                    }
                }
            `}

            ${props => props.currentPage == '/user' && css`
            
                img {
                    border: 4px solid var(--color-primary-500);
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
            li:nth-child(${pages[props.currentPage]}):not(:last-child) {
                a {
                    font-family: 'Space_Mono_Bold';
                    font-weight: 400;
                    padding: .2rem -5rem;
                    pointer-events: none;
                }

                div {
                    width: calc(100% - 24px);
                    margin-left: 12px;
                    height: 4px;
                    background-color: var(--color-primary-500);
                }
            }

            li:not(:last-child):not(:nth-child(${pages[props.currentPage]})):hover {
                div {
                    width: calc(100% - 24px);
                    margin-left: 12px;
                    height: 4px;
                    background-color: var(--color-neutral-50);
                }
            }
        `}

    }

    @media (min-width:1300px) {
        display: block;
    }
`