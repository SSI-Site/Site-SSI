import { useState, useEffect } from 'react';
import styled from 'styled-components';
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
                <Link href="/" passHref>
                    <a>
                        <Image
                        src = { LogoHorizontal }
                        width = { 180 }
                        height = { 45 }
                        style = {{ cursor: 'pointer' }}
                        alt = 'Semana de Sistemas de Informação'
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
                <NavMobile isOpen = {isOpen}>
                    <div className={isOpen ? 'click-out' : "click-out click-out-hidden"} onClick={() => setIsOpen(false)}>
                    </div>
                    <div className = {isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>
                            <div className = "sidepanelWrapper">
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
                                    <li onClick={() => setIsOpen(false)} className = {router.pathname == '/' ? 'active': ''}>
                                        <Link href="/" passHref>
                                            <a>Home</a>
                                        </Link>
                                    </li>

                                    <li onClick={() => setIsOpen(false)} className = {router.pathname == '/schedule' ? 'active': ''}>
                                        <Link href="/schedule" passHref>
                                            <a>Programação</a>
                                        </Link>                                
                                    </li>

                                    <li onClick={() => setIsOpen(false)} className = {router.pathname == '/about' ? 'active': ''}>
                                        <Link href="/about" passHref>
                                            <a>Evento</a>
                                        </Link>
                                    </li>

                                    <li className = {router.pathname == '/partnership' ? 'active': ''}>
                                        <Link href="/partnership" passHref >
                                            <a>Parcerias</a>
                                        </Link>
                                    </li>

                                    <li onClick={() => setIsOpen(false)} className = {router.pathname == '/co' ? 'active': ''}>
                                        <Link href="/co" passHref>
                                            <a>Comissão Organizadora</a>
                                        </Link>                                
                                    </li>

                                    <li /* onClick={() => setIsOpen(false)} */>
                                        {/* <Link href="https://ctfssi.intheshell.page/"> */}
                                        {/*<span target="blank">CTF</span>{/* </Link> */}
                                        {/* <div></div> */}
                                    </li>
                                </ul>
                            </div>

                        {/* Editar esta div para o usuário logado*/}
                        {user
                            ? <>
                                {/*Código do usuário logado */}
                            </> 
                            :
                            <Button className = 'userButton'>Login</Button>
                        }
                        
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
                        <li className = {router.pathname == '/' ? 'active': ''}>
                            <Link href="/" passHref>
                                <a>Home</a>
                            </Link>           
                        </li>

                        <li className = {router.pathname == '/schedule' ? 'active': ''}>
                            <Link href="/schedule" passHref >
                                <a>Programação</a>
                            </Link>
                        </li>

                        <li className = {router.pathname == '/about' ? 'active': ''}>
                            <Link href="/about" passHref >
                                <a>Evento</a>
                            </Link>
                        </li>

                        <li className = {router.pathname == '/partnership' ? 'active': ''}>
                            <Link href="/partnership" passHref >
                                <a>Parcerias</a>
                            </Link>
                        </li>

                        <li className = {router.pathname == '/co' ? 'active': ''}>
                            <Link href="/co" passHref >
                                <a>Comissão Organizadora</a>
                            </Link>
                        </li>

                        <li>
                            {/* <Link href="https://ctfssi.intheshell.page/"> */}
                            {/*  */}
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
    position:sticky;
    top:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*max-width: 1576px;*/
    margin: auto;
    z-index: 11;
    padding: 1.5rem 1rem; 
    background-color: var(--color-neutral);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1232px; // 1920px - (344px * 2)
        height: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        justify-content: center;
        gap: 1.5rem;

        li a{
            padding: 0.125rem .5rem;
            background-color: transparent;
            background-image: linear-gradient(to right, var(--color-neutral-50), var(--color-neutral-50));
            background-size: 200%;
            background-position-x: 200%;
            transition: all 100ms ease-out;
            background-repeat: no-repeat;
            white-space: nowrap;
            font-weight: 400;

            &:hover, &:focus{
                background-position-x: 100%;
                color: black;
            }

        }

        .active{
            background: linear-gradient(to right, var(--color-neutral-50) 50%, var(--color-primary) 50%);
            background-size: 200% 100%;
            background-position: right;

            a {
                font-family: 'AT Aero Bold';
                font-weight: 400;
            }
            
            &:hover > a{
                color: var(--color-primary);
            };

        }
    }

    @media (min-width:1300px) {
        padding-block: 1rem;
        justify-content: center;
        box-shadow: unset;
        padding-inline: 6.75rem;
    }
`

const NavMobile = styled.nav`
    overflow: hidden;   

    .sidepanelWrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1.5rem;
        height: 100%;
    }

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

    .click-out{
        position:fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        z-index: 9;
    }

    .click-out-hidden{
        display: none
    }

    .sidepanel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow-y: scroll;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 10;
        top: 0;
        right: 0;
        background-color: var(--color-neutral-800);
        transition: all ease-out 100ms;
        padding: 1.5rem 1rem;
        gap: 1.5rem;

        @media (min-width: 648px){
            width: 50%;
        }

        h6 {
            color: #FFF;
        }

        .userButton {
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
    }
`