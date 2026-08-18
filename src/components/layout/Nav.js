import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import useAuth from '../../../hooks/useAuth';

// Componentes
import AuthModal from '../features/auth/AuthModal';
import Button from '../ui/Button';

// Assets
import CloseBtn from '../../../public/images/icons/close.svg';
import LogoHorizontalDark from '../../../public/images/logos/logo_horizontal_dark.svg';
import LogoHorizontalLight from '../../../public/images/logos/logo_horizontal_light.svg';

// Constante que armazena as rotas e rótulos da navegação. 
const NAV_LINKS = [
    { path: '/', label: 'Home' },
    { path: '/schedule', label: 'Programação' },
    { path: '/about', label: 'Evento' },
    { path: '/palestrantes', label: 'Palestrantes' },
    { path: '/co', label: 'Comissão Organizadora' },
    { path: '/partnerships', label: 'Para Empresas' },
    // { path: 'https://intheshell.each.usp.br/', label: 'CTF', isExternal: true },
];

const Nav = () => {
    // Hooks de roteamento e autenticação
    const { user, disableAuth } = useAuth();
    const router = useRouter();

    // Estados locais para controlar a abertura dos menus e modais
    const [isOpen, setIsOpen] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    // Função que garante o fechamento do menu mobile ao abrir o modal de login
    const handleShowAuthModal = () => {
        setIsOpen(false);
        setShowAuthModal(true);
    };

    // Efeito colateral que bloqueia a rolagem da página quando o modal de login está aberto
    useEffect(() => {
        if (showAuthModal) {
            // Calcula a largura da barra de rolagem do navegador
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Adiciona o padding-right para compensar a largura da barra de rolagem
            // e evitar que a tela "pule" quando o overflow for escondido
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            // Restaura o comportamento padrão quando o modal é fechado
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [showAuthModal]);

    // Função auxiliar responsável por renderizar a seção de autenticação (botão de login ou perfil do usuário).
    // Recebe um parâmetro booleano (isMobile) para adaptar as classes e estruturas entre as versões mobile e desktop.
    const renderAuthSection = (isMobile = false) => {
        // Renderiza o perfil do usuário caso ele esteja autenticado
        if (!disableAuth && user) {
            return (
                <li onClick={() => isMobile && setIsOpen(false)} className={isMobile ? "profile-side-bar" : "profile-container"}>
                    <Link href="/user" className={isMobile ? "" : "profile-content"}>
                        {isMobile && (
                            <div className='profile-content'>
                                <div className='user-pic-container'>
                                    <img src={user.photoUrl} alt='user pic' referrerPolicy='no-referrer'/>
                                </div>
                                <p>{user.name.split(" ")[0]}</p>
                            </div>
                        )}
                        
                        {!isMobile && (
                            <>
                                <div className='user-pic-container'>
                                    <img src={user.photoUrl} alt='user pic' referrerPolicy='no-referrer'/>
                                </div>
                                <p>{user.name.split(" ")[0]}</p>
                            </>
                        )}

                        {isMobile && (
                            <div className='see-profile'>
                                <p>Ver Perfil</p>
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0385 11.6565L10.6275 10.2385L13.8975 6.98351L0.292496 6.97051L0.294497 4.97051L13.8625 4.98351L10.6475 1.75351L12.0645 0.343506L17.7085 6.01351L12.0385 11.6565Z" fill="white"/>
                                </svg>
                            </div>
                        )}
                    </Link>
                </li>
            );
        }

        // Renderiza o botão de Login caso o usuário não esteja logado
        return isMobile ? (
            <Button onClick={handleShowAuthModal} className='user-button' disabled={disableAuth}>Login</Button>
        ) : (
            <li>
                <Button onClick={handleShowAuthModal} disabled={disableAuth}>Login</Button>
            </li>
        );
    };

    return (
        <>
            <NavWrapper>
                <div>
                    {/* Logo da aplicação que redireciona para a página inicial */}
                    <Link href="/">
                        <picture>
                            <source 
                                srcSet={LogoHorizontalLight} 
                                media="(prefers-color-scheme: light)"
                            />
                            <Image
                                src={LogoHorizontalDark}
                                width={180}
                                height={48}
                                alt='Semana de Sistemas de Informação 2026'
                                priority
                            />
                        </picture>
                    </Link>

                    {/* Modal de autenticação/login do usuário */}
                    {showAuthModal &&
                        <AuthModal
                            onClose={() => setShowAuthModal(false)}
                            show={showAuthModal}
                        />
                    }

                    {/* Menu de navegação superior para dispositivos móveis (Mobile) */}
                    <NavMobile $isOpen={isOpen}>
                        <div className='hamburguer-wrapper'>
                            <button className='hamburguer-menu' type="button" aria-label='Menu' onClick={() => setIsOpen(!isOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </NavMobile>

                    {/* Menu de navegação principal para telas maiores (Desktop) */}
                    <NavDesktop>
                        <NavigationList>
                            {/* Renderiza dinamicamente os links de navegação com base no array NAV_LINKS */}
                            {NAV_LINKS.map((link) => (
                                <li key={link.path} className={router.pathname === link.path ? 'active' : ''}>
                                    {link.isExternal ? (
                                        // Se for externo, usa a tag <a> com target="_blank"
                                        <a href={link.path} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    ) : (
                                        // Se for interno, continua usando o Link do Next.js
                                        <Link href={link.path}>
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            
                            {/* Renderiza a seção de autenticação adaptada para o desktop */}
                            {renderAuthSection(false)}
                        </NavigationList>
                    </NavDesktop>
                </div>
            </NavWrapper>

            {/* Menu lateral expansível utilizado na versão Mobile (Sidepanel) */}
            <Sidepanel>
                <div className={isOpen ? 'click-out' : "click-out click-out-hidden"} onClick={() => setIsOpen(false)}>
                </div>
                <div className={isOpen ? "sidepanel" : "sidepanel sidepanel-hidden"}>
                    <div className="sidepanel-wrapper">
                        <div className='header-nav'>
                            <h5>Navegação rápida</h5>
                            <div className='close' onClick={() => setIsOpen(!isOpen)}>
                                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white"/>
                                </svg>
                            </div>
                        </div>

                        <NavigationList>
                            {/* Renderiza dinamicamente os links de navegação dentro do painel mobile */}
                            {NAV_LINKS.map((link) => (
                                <li key={`mobile-${link.path}`} onClick={() => setIsOpen(false)} className={router.pathname === link.path ? 'active' : ''}>
                                    {link.isExternal ? (
                                        <a href={link.path} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link href={link.path}>
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </NavigationList>
                    </div>

                    {/* Renderiza a seção de autenticação adaptada para o painel mobile */}
                    {!disableAuth && user ? (
                        <NavigationList>
                            {renderAuthSection(true)}
                        </NavigationList>
                    ) : renderAuthSection(true)}
                    
                </div>
            </Sidepanel>
        </>
    );
};

export default Nav;

const NavWrapper = styled.div`
    position: sticky;
    top: 0.5rem; 
    z-index: 11;
    margin: auto;
    
    /* MOBILE FIRST */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 2rem); 
    max-width: 1328px;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    
    /* glassmorphism */
    background: color-mix(in srgb, var(--background-neutrals-nav) 75%, transparent);
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(18px);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1328px;
        height: 100%;

        > a { 
            width: 10.956rem; 
        }

        a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;

            &:focus-visible {
                outline: 2px solid var(--brand-primary);
                outline-offset: 2px;
            }
        }
    }

    @media (min-width: 1200px) {
        padding: 1rem 1.5rem;
        justify-content: center;
    }
`;

const NavMobile = styled.nav`
    width: 3rem;
    height: 3rem;

    .hamburguer-wrapper {
        width: 3rem;
        height: 3rem;
        background: linear-gradient(to right, var(--background-neutrals-inverse) 50%, transparent 50%);
        background-position: right;
        background-size: 202% 100%;
        transition: 0.15s all ease-out;

        svg path {
            fill: var(--content-neutrals-primary);
        }
    }

    .hamburguer-wrapper:hover {
        background-position: left;

        svg path {
            fill: var(--content-neutrals-inverse);
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

    @media (min-width:1200px) {
        display: none;
    }
`;

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
        color: var(--content-neutrals-primary);

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
            color: var(--content-neutrals-fixed-white);
        }

        &:hover a, a:focus-visible {
            color: var(--content-neutrals-inverse);
        }
    }

    .disabled {
        pointer-events: none;
        a {
            opacity: 0.5;
        }
    }
`;

const Sidepanel = styled.div`
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
        display: flex;
        padding: 0.75rem;
        cursor: pointer;   

        svg path {
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
        justify-content: space-between;
        overflow-y: scroll;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 17;
        top: 0;
        right: 0;

        /* efeito glassmorphism */
        background: color-mix(in srgb, var(--background-neutrals-nav) 75%, transparent);
        box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(18px);

        transition: all ease-out 0.15s;
        padding: 1rem 1rem 3.5rem 1rem;
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
                        fill: var(--content-neutrals-inverse);
                    }
                }
                
                &:focus-visible {
                    outline: 2px solid var(--brand-primary);
                    outline-offset: 2px;
                }
            }
    
            .profile-content {
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

    @media (min-width:1200px) {
        display: none;
    }
`;

const NavDesktop = styled.nav`
    display: none;
    margin-left: auto;

    @media (min-width:1200px) {
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
                        color: var(--content-neutrals-inverse);
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
        }        
    }
`;