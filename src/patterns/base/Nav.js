import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import useAuth from '../../../hooks/useAuth';

// components
import AuthModal from '../../components/AuthModal';
import Button from '../../components/Button';

// assets
import CloseBtn from '../../../public/images/icons/close.svg';
import LogoHorizontal from '../../../public/images/logos/logo_horizontal.svg';

const Nav = () => {

    const { user, disableAuth } = useAuth();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);


    const handleShowAuthModal = () => {
        setIsOpen(false);
        setShowAuthModal(true);
    }

    useEffect(() => {
        if (showAuthModal) {
            // Calcula a largura da barra de rolagem
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Adiciona o padding-right para compensar a largura da barra de rolagem
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [showAuthModal]);

    return (
        <>
            <NavWrapper>
                <div>
                    {/* Logo que redireciona para a home */}
                    <Link legacyBehavior href="/" passHref>
                        <a>
                            <img
                                src={LogoHorizontal}
                                width={180}
                                height={45}
                                alt='Semana de Sistemas de Informação'
                            />
                        </a>

                    </Link>

                    {/* Caixa de autenticação/login */}
                    {showAuthModal &&
                        <AuthModal
                            onClose={() => setShowAuthModal(false)}
                            show={showAuthModal}
                        />
                    }

                    {/* Navbar para Mobile */}
                    <NavMobile $isOpen={isOpen}>

                        <div className='hamburguer-wrapper'>
                            <button className='hamburguer-menu' type="button" aria-label='Menu' onClick={() => setIsOpen(!isOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                    </NavMobile>

                    {/* Navbar para Desktop */}
                    <NavDesktop>
                        <NavigationList>
                            <li className = {router.pathname == '/' ? 'active': ''}>
                                <Link legacyBehavior href="/" passHref>
                                    <a>Home</a>
                                </Link>           
                            </li>

                            <li className = {router.pathname == '/schedule' ? 'active': ''}>
                                <Link legacyBehavior href="/schedule" passHref>
                                    <a>Programação</a>
                                </Link>
                            </li>

                            <li className = {router.pathname == '/about' ? 'active': ''}>
                                <Link legacyBehavior href="/about" passHref>
                                    <a>Evento</a>
                                </Link>
                            </li>

                            <li className = {router.pathname == '/palestrantes' ? 'active': ''}>
                                <Link legacyBehavior href="/palestrantes" passHref>
                                    <a>Palestrantes</a>
                                </Link>
                            </li>

                            <li className = {router.pathname == '/co' ? 'active': ''}>
                                <Link legacyBehavior href="/co" passHref>
                                    <a>Comissão Organizadora</a>
                                </Link>
                            </li>

                            <li>
                                <a href="https://ctf.intheshell.page/" target='_blank' >
                                    CTF
                                </a>
                            </li>

                            {!disableAuth && user ? (
                                <li className='profile-container'>
                                    <Link legacyBehavior href= "/user">
                                        <a className='profile-content'>
                                            <div className='user-pic-container'>
                                                <img src={user.photoUrl} alt='user pic' referrerPolicy='no-referrer'/>
                                            </div>
                                            <p>{user.name.split(" ")[0]}</p>
                                        </a>
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Button
                                    onClick={handleShowAuthModal} 
                                    disabled={disableAuth}>Login</Button>
                                </li>
                            )
                            }
                        </NavigationList>
                    </NavDesktop>

                </div>
            </NavWrapper>
            <Sidepanel>
                <div className={isOpen ? 'click-out' : "click-out click-out-hidden"} onClick={() => setIsOpen(false)}>
                </div>
                <div className = {isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>
                    <div className = "sidepanel-wrapper">
                        <div className = 'header-nav'>
                            <h6>Navegação rápida</h6>
                            <div className = 'close' onClick={() => setIsOpen(!isOpen)}>
                                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white"/>
                                </svg>
                            </div>
                        </div>

                        <NavigationList>
                            <li onClick={() => setIsOpen(false)} className = {router.pathname == '/' ? 'active': ''}>
                                <Link legacyBehavior href="/" passHref>
                                    <a>Home</a>
                                </Link>
                            </li>

                            <li onClick={() => setIsOpen(false)} className = {router.pathname == '/schedule' ? 'active': ''}>
                                <Link legacyBehavior href="/schedule" passHref>
                                    <a>Programação</a>
                                </Link>                                
                            </li>

                            <li onClick={() => setIsOpen(false)} className = {router.pathname == '/about' ? 'active': ''}>
                                <Link legacyBehavior href="/about" passHref>
                                    <a>Evento</a>
                                </Link>
                            </li>

                            <li onClick={() => setIsOpen(false)} className = {router.pathname == '/palestrantes' ? 'active': ''}>
                                <Link legacyBehavior href="/palestrantes" passHref>
                                    <a>Palestrantes</a>
                                </Link>                                
                            </li>

                            <li onClick={() => setIsOpen(false)} className = {router.pathname == '/co' ? 'active': ''}>
                                <Link legacyBehavior href="/co" passHref>
                                    <a>Comissão Organizadora</a>
                                </Link>                                
                            </li>

                            <li onClick={() => setIsOpen(false)}>
                                <a href="https://ctf.intheshell.page/" target='_blank'>
                                    CTF
                                </a>
                            </li>
                        </NavigationList>
                    </div>

                    {/* Editar esta div para o usuário logado*/}
                    {!disableAuth && user ?
                        <>
                            <NavigationList>
                                <li onClick={() => setIsOpen(false)} className="profile-side-bar">
                                    <Link legacyBehavior href="/user">
                                        <a>
                                            <div className='profile-content'>
                                                <div className='user-pic-container'>
                                                    <img src={user.photoUrl} alt='user pic' referrerPolicy='no-referrer'/>
                                                </div>
                                                <p>{user.name.split(" ")[0]}</p>
                                            </div>

                                            <div className='see-profile'>
                                                <p>Ver Perfil</p>
                                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0385 11.6565L10.6275 10.2385L13.8975 6.98351L0.292496 6.97051L0.294497 4.97051L13.8625 4.98351L10.6475 1.75351L12.0645 0.343506L17.7085 6.01351L12.0385 11.6565Z" fill="white"/>

                                                    <rect id = "arrow" width = "100" height = "100%"/>
                                                            
                                                </svg>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            </NavigationList>
                        </> 
                    :
                        <Button 
                        onClick={handleShowAuthModal} className='user-button' disabled={disableAuth}>Login</Button>
                    }
                    
                </div>
            </Sidepanel>
        </>
    )
}

export default Nav;

const NavWrapper = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*max-width: 1576px;*/
    max-height: 5rem;
    margin: auto;
    z-index: 11;
    padding: 1.5rem 1rem; 
    background-color: var(--background-neutrals-primary);
    border-bottom: 1px solid var(--outline-neutrals-secondary);
    color: var(--content-neutrals-primary);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1328px; // 1920px - (344px * 2)
        height: 100%;

        a {
            display: flex;
            align-items: center;
            justify-content: center;

            &:focus-visible {
                outline: 2px solid var(--brand-primary);
                outline-offset: 2px;
            }
        }
    }

    @media (min-width:1300px) {
        justify-content: center;
    }
`

const NavMobile = styled.nav`
    overflow: hidden;   

    .hamburguer-wrapper {
        width: 3rem;
        height: 3rem;
        background: linear-gradient(to right, var(--background-neutrals-primary) 50%, transparent 50%);
        background-position: right;
        background-size: 202% 100%;
        transition: 0.15s all ease-out;
    }

    .hamburguer-wrapper:hover {
        background-position: left;

        svg path {
            fill: var(--background-neutrals-primary);
        }
    }

    .hamburguer-menu {
        background-color: unset;
        border: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: .25rem;
    }

    @media (min-width:995px) {
        display: none;
    }
`

const NavigationList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
    gap: 1.5rem;

    li a {
        display: block;
        padding: 0.125rem 0.5rem;
        background-color: transparent;
        background-image: linear-gradient(to right, var(--background-neutrals-primary) 50%, var(--background-neutrals-inverse) 50%);
        background-size: 200%;
        background-position-x: 200%;
        transition: all 0.15s ease-out;
        background-repeat: no-repeat;
        white-space: nowrap;
        line-height: 1.5rem;
        font-weight: 400;

        &:hover, &:focus-visible {
            color: var(--content-neutrals-inverse);
            background-position-x: 100%;
        }

        &:focus-visible {
            outline: 2px solid var(--content-neutrals-fixed-white);
            outline-offset: 2px;
        }
            
    }

    .active {            
        background: linear-gradient(to right, var(--background-neutrals-inverse) 50%, var(--brand-primary) 50%);
        background-size: 250% 100%;
        background-position: right;
        color: var(--content-neutrals-fixed-white);
        
        a {
            font-family: 'At Aero Bold';
        }

        &:hover a, a:focus-visible {
            color: var(--content-neutrals-inverse);
        }
    }
`

const Sidepanel = styled.div`
    /* position: fixed; */
    top: 0;
    width: 100%;
    height: 100%;

    .sidepanel-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1.5rem;
    }

    .header-nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    
    .close {
        padding: 1rem;
        cursor: pointer;   

        svg path{
            fill: var(--content-neutrals-primary)
        }
    }

    .click-out {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        
        z-index: 17;
    }

    .click-out-hidden {
        display: none
    }

    .sidepanel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        overflow-y: scroll;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 17;
        top: 0;
        right: 0;
        background-color: var(--background-neutrals-secondary);
        transition: all ease-out 0.15s;
        padding: 1.5rem 1rem;
        gap: 1.5rem;
        color: var(--content-neutrals-primary);

        @media (min-width:648px) {
            width: 50%;
        }

        .profile-side-bar {
            display: flex;
            align-items: center;
            width: 100%;
            height: 44px;
            flex-direction: row;
            justify-content: space-between;
    
            a {
                display: flex;
                width: 100%;
                justify-content: space-between;
                padding: 0 0.25rem;
            
                &:hover, &:focus-visible {
                    color: var(--background-neutrals-primary);
                    background-position-x: 100%;

                    p {
                        color: var(--background-neutrals-primary);
                    }

                    svg path {
                        fill: var(--brand-primary);
                    }
                }
                
                &:focus-visible {
                    outline: 2px solid var(--brand-primary);
                    outline-offset: 2px;
                }
            }
    
            .profile-content{
                width: fit-content;
                height: 2.75rem;
                padding: 0;
                gap: 0.5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
    
            .user-pic-container {
                background: var(--brand-primary);
                width: 36px;
                height: 36px;
                padding: 0;
                gap: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            p {
                text-align: left;
                font-family: 'AT Aero Bold';
                font-size: 1rem;
            }
    
            .see-profile {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;
                align-items: center;
            }
        }
        
        .user-button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.2rem 1rem;
            width: 100%;

            p {
                font-family: 'AT Aero Bold';
                font-weight: 700;
            }
        }
    }

    .sidepanel-hidden {
        right: -999px;
    }

    @media (min-width:995px) {
        display: none;
    }
`

const NavDesktop = styled.nav`
    display: none;
    margin-left: auto;

    @media (min-width:995px) {
        display: flex;
        
        ul {
            flex-direction: row;
            align-items: center;
            justify-content: unset;
            gap: 1rem;
        }
        
        .profile-container {
            background-color: var(--background-neutrals-secondary);

            .profile-content {
                gap: 0.5rem;
                display: flex;
                flex-direction: row;
                padding: 0.25rem;

                &:hover, &:focus-visible {
                    p {
                        color: var(--background-neutrals-inverse);
                    }
                }
            }

            .user-pic-container {
                width: 36px;
                height: 36px;
                padding: 0;
                gap: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
    
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &:hover, &:focus-visible {
                background: var(--background-neutrals-inverse);
            }
        }        
    }
`