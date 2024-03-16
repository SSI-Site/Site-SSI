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
                    height = { 45 }
                    />

                </Link>

                {/* Caixa de autenticação/login */}
                {showAuthModal &&
                    <AuthModal
                        onClose={() => setShowAuthModal(false)}
                        show={showAuthModal}
                    />
                }

                {/* Navbar para Mobile */}
                <NavMobile isOpen = {isOpen}>
                    <div className = {isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>
                        
                        <div className = 'headerNav'>
                            <h6>Navegação rápida</h6>
                            <div className = 'close' onClick={() => setIsOpen(!isOpen)}>
                                <Image 
                                src = { CloseBtn }
                                width = { 18 }
                                height = { 18 }
                                alt = 'Fechar'/>
                            </div>
                        </div>

                        <ul>
                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/" passHref>
                                    <a>Home</a>
                                </Link>
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/schedule" passHref>
                                    <a>Programação</a>
                                </Link>
                                
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/about" passHref>
                                    <a>Evento</a>
                                </Link>
                                
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/co" passHref>
                                    <a>Comissão Organizadora</a>
                                </Link>
                                
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <Link href="/hackssi" passHref>
                                    <a>HackSSI</a>
                                </Link>
                                
                            </li>

                            <li /* onClick={() => setIsOpen(false)} */>
                                {/* <Link href="https://ctfssi.intheshell.page/"> */}
                                {/*<span target="blank">CTF</span>{/* </Link> */}
                                {/* <div></div> */}
                            </li>
                        </ul>

                    </div>

                    <div className = 'hamburguerWrapper'>
                        <button className='hamburguer-menu' type="button" aria-label='Menu' onClick={() => setIsOpen(!isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </NavMobile>

                {/* Navbar para Desktop */}
                <NavDesktop>
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

            </div>
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
    z-index: 10;
    padding: 1.5rem 1rem; 
    background-color: var(--color-neutral);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1440px;
        height: 100%;
    }

    .logo-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 14rem;
        gap: 1rem;
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

    .headerNav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    
    .close {
        padding: 1rem;
        cursor: pointer;       
    }

    .hamburguerWrapper{
        padding: .75rem;
        background: linear-gradient(to right, var(--color-neutral-50) 50%, transparent 50%);
        background-position: right;
        background-size: 200% 100%;
        transition: 100ms all ease-out;
    }

    .hamburguerWrapper:hover {
        background-position: left;
        span {
            background-color: black;
        }
    }


    .hamburguer-menu {
        background-color: unset;
        border: unset;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 1.5rem;
        gap: .25rem;

        span {
            display: block;
            height: 2px;
            width: 100%;
            background-color: #FFF;
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
        background-color: var(--color-neutral-800);
        transition: all linear 100ms;
        padding: 1.5rem 1rem;
        gap: 1.5rem;

        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            justify-content: center;
            gap: 1rem;

            li {
                padding: 0.125rem .5rem;
                background: linear-gradient(to right, var(--color-neutral-50) 50%, transparent 50%);
                background-size: 200% 100%;
                background-position: right;
                transition: all 100ms ease-out;
                font-weight: 200;

                &:hover{
                    background-position: left;
                }

                &:hover > a {
                    color: black;
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