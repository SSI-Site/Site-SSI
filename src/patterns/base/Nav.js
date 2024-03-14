import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image'

import useAuth from '../../../hooks/useAuth';
import AuthModal from '../../components/AuthModal';

// components
import Button from '../../components/Button';

// assets
import LogoPrincipal from '../../../public/images/logos/logo_principal.svg';
import CloseBtn from '../../../public/images/icons/close.svg';
import LogoHorizontal from '../../../public/images/logos/logo_horizontal.svg'

const pages = {
    "/": 1,
    "/schedule": 2,
    "/about": 3,
    "/co": 4,
    "/hackssi": 5,
    "/ctf": 6,
    "/user": 7,
}

const Nav = () => {

    // const { user } = useAuth();
    const { user } = false; // para deploy sem login
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
            <div>
                {/* Logo que redireciona para a home */}
                <Link href="/">
                    
                    <Image
                    src = { LogoHorizontal }
                    width = { 180 }
                    height = { 40 }
                    />

                </Link>
            </div>

                {/* Caixa de autenticação/login */}
                {showAuthModal &&
                    <AuthModal
                        onClose={() => setShowAuthModal(false)}
                        show={showAuthModal}
                    />
                }

                {/* Navbar para Mobile */}
                <NavMobile isOpen = {isOpen} currentPage = {router.pathname}>
                    <div className={isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>
                        
                        <div 
                        className = 'headerSidePanel'
                        style = {{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', height: '5rem', padding: '1rem'}}>
                            <h6>Navegação Rápida</h6>                   
                            <div className='close-btn' onClick={() => setIsOpen(!isOpen)}>
                                <div className='close'>
                                    <Image 
                                    src = {CloseBtn} 
                                    alt='Fechar'
                                    width = { 15 }
                                    height = { 15 }/>
                                </div>
                            </div>
                        </div>

                        <ul>
                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/">
                                    Home
                                </Link>
                
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/schedule">
                                    Programação
                                </Link>
                                
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/about">
                                    Evento
                                </Link>
                                
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/co">
                                    Comissão Organizadora
                                </Link>
                                
                            </li>

                            <li /* onClick={() => setIsOpen(false)} */>
                                {/* <Link href="https://ctfssi.intheshell.page/"> */}<span target="blank">CTF</span>{/* </Link> */}
                                {/* <div></div> */}
                            </li>

                        </ul>
                    </div>

                    <button className='hamburguer-menu' type="button" aria-label='Menu' onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </NavMobile>

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
                                {/* <Button onClick={handleShowAuthModal} disabled>Login</Button> */}
                            </li>

                        }
                    </ul>
                </NavDesktop>
        </NavWrapper>
    )
}

export default Nav;


const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 5rem;
    overflow: hidden;
    z-index: 10;
    padding: 1rem;
    background-color: var(--color-neutral);

    > div {
        width: 100%;
        max-width: 1440px;
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
    transition: all linear 100ms;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    background-color: var(--color-neutral);

    .hamburguer-menu {
        display: flex;
        width: 30%;
        height: 30%;
        flex-direction: column;
        justify-content: space-between;
        padding: .5rem;
        gap: .4rem;
        background: linear-gradient(to right, var(--color-neutral) 50%, var(--color-neutral-50) 50%);
        background-position: left;
        background-size: 200% 100%;
        border: unset;

        span {
            width: 100%;
            height: 2px;
            background-color: white;
        }

    .hamburguer-menu:hover{
        background-position: right;
        }
    }

    .sidepanel {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-neutral);
        padding: 1rem ;
        gap: 2rem;

        .headerSidePanel {
            border: 1px solid red;
        }
        

        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 1px solid red;
            width: 100%;

            .login-button {
                margin-bottom: 2rem;
                
                button {
                    padding-block: 0.65rem;
                }
            }

            li {
                margin-bottom: 1.5rem;
                position: relative;

                .user-info {
                    width: fit-content;
                    max-width: 100%;
                    height: 2.75rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
            }
        }
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

    @media (min-width:850px) {
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
            max-height: 44px;

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

            &:last-child {
                margin-left: 0.75rem;
            }

            a {
                max-height: 44px;
            }
        }

        button {
            padding-block: 0.65rem;
            height: 44px;
            width: 108px;
        }

        .userPicContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-left: 0.75rem;

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
            font: 700 1rem/1.25rem 'AT Aero';
            margin: 0 12px;
            transition: all .2s;

            :hover {
                cursor: pointer;
            }
        }

        span {
            color: gray;
            margin: 0 12px;
            cursor: not-allowed;
        }

        ${props => props.currentPage && css`
            li:nth-child(${pages[props.currentPage]}):not(:last-child) {
                a {
                    font-family: 'AT Aero Bold';
                    font-weight: 700;
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

    @media (min-width:850px) {
        display: block;
    }
`