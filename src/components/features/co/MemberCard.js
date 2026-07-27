import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// components
import BadgeCO from '../../ui/BadgeCO';

/**
 * Paleta de cores e temas disponíveis para os cartões.
 * O componente circula ciclicamente entre esses temas baseado na prop 'colorScheme'.
 */
const colorSchemes = [
    {
        'background' : 'var(--background-neutrals-inverse)',
        'textColor' : 'var(--content-neutrals-inverse)',
        'directorBadge' : 1,
        'badgeSequence' : [3, 9, 6, 8, 5, 4]
    },
    {
        'background' : 'var(--background-neutrals-secondary)',
        'textColor' : 'var(--content-neutrals-secondary)',
        'directorBadge' : 1,
        'badgeSequence' : [3, 9, 6, 8, 5, 4]
    },
    {
        'background' : 'var(--brand-primary)',
        'textColor' : 'var(--content-neutrals-fixed-white)',
        'directorBadge' : 1,
        'badgeSequence' : [3, 9, 8, 4]
    },
    {
        'background' : 'var(--brand-primary-light)',
        'textColor' : 'var(--content-neutrals-fixed-black)',
        'directorBadge' : 1,
        'badgeSequence' : [5, 6, 7, 4]
    },   
    {
        'background' : 'var(--brand-primary-dark)',
        'textColor' : 'var(--content-neutrals-fixed-white)',
        'directorBadge' : 1,
        'badgeSequence' : [9, 5, 4]
    },
]

/**
 * Componente que renderiza o cartão de um membro da Comissão Organizadora.
 * Apresenta a foto na frente e desliza informações (nome, linkedin, setores) por cima.
 * 
 * @param {Object} props
 * @param {string} props.name - Nome do membro.
 * @param {string} props.image - Caminho da imagem/foto do membro.
 * @param {Array} props.departments - Array de strings com os setores do membro.
 * @param {string} props.linkedin - URL do LinkedIn do membro.
 * @param {number} props.colorScheme - Posição/índice do membro no array (usado para IDs únicos e ciclar o tema de cores).
 * @param {string} props.phrase - Frase marcante do membro (opcional).
 */
const MemberCard = ({ name, image, departments, linkedin, colorScheme, phrase }) => {
    
    // Organiza os departamentos em ordem alfabética
    const sortDepartments = (departments) => {
        return departments.sort((a, b) => a.localeCompare(b));
    };

    const cardRef = useRef(null);
    const [animating, setAnimating] = useState(false);
    const isMobile = useIsMobile();
    
    // Determina o tema de cor atual usando o operador módulo (%) para criar um ciclo de 5 posições
    const currentTheme = colorSchemes[colorScheme % 5];

    /**
     * Função para lidar com a acessibilidade (navegação por teclado/Tab).
     * Quando o usuário foca no card pelo teclado, aguarda a animação e redireciona 
     * o foco diretamente para o conteúdo do verso (LinkedIn ou Nome).
     */
    const handleFocus = () => {
        // Não executa em telas móveis para evitar glitches ao trocar de abas
        if (!animating && !isMobile) { 
            setAnimating(true);
            setTimeout(() => {
                // Procura o link do LinkedIn ou o título h6
                const backlink = cardRef.current.querySelector(".card-back .member-name a") || cardRef.current.querySelector(".card-back .member-name h6");

                if (backlink) {
                    backlink.focus();
                }
                setAnimating(false);
            }, 200) // Timeout garante que o card "suba" antes de focar
        }
    }

    return (
        // As props prefixadas com '$' injetam as cores dinamicamente no Styled Component
        <MemberWrapper 
            onFocus={handleFocus} 
            ref={cardRef}
            $bgColor={currentTheme.background}
            $textColor={currentTheme.textColor}
        >
            <div className="image-container">
                <figure className='member-image'>
                    <Image src={image} alt={`Foto de ${name}`} className="responsive-image"
                    fill
                    sizes="(min-width: 1024px) 18.4rem, 20.5rem"/>
                </figure>
            </div>
            
            {/* O ID aqui usa o colorScheme para ser único por membro */}
            <div className='card-back' id={'back b' + colorScheme}>
                <div className={`member-name ${linkedin ? 'animate' : ''}`}>
                    {linkedin ?
                        <>
                            <a href={linkedin} target="_blank" rel="noreferrer">
                                <h6>{name}</h6>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
                                </svg>
                            </a>
                        </>
                        :
                        <h6 tabIndex={0}>{name}</h6>
                    }
                </div>
                {phrase &&
                    <p className='phrase'>"{phrase}"</p>
                }
                <div>
                    <p className='department-title'>Setores</p>
                    
                    <div className='member-department'>
                        {sortDepartments(departments).map((department, index) => {
                            let badges = currentTheme.badgeSequence;
                            if(department === 'Diretoria')
                                return <BadgeCO key={index} text={department} themeIndex={currentTheme.directorBadge}/>
                            
                            return <BadgeCO key={index} text={department} themeIndex={badges[index % badges.length]}/>
                        })}
                    </div>
                </div>
            </div>
            
            {/* Botão visível apenas em telas menores (Mobile) para revelar o verso do card */}
            <button id={'c' + colorScheme} className={'info-button'} onClick={() => flip(colorScheme)}>
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z" fill="white" />
                    <rect id="arrow" width="100" height="100%" />
                </svg>
            </button>
        </MemberWrapper>
    )
}

/**
 * Controla a ação de exibir/ocultar o verso do card no mobile via manipulação direta do DOM.
 * Utiliza o index do membro para localizar os IDs únicos no HTML.
 */
const flip = (index) => {
    let card = document.getElementById('back b' + index)
    let button = document.getElementById('c' + index)
    card.classList.toggle('info-show')
    button.classList.toggle('button-flip')
}

/**
 * Hook customizado para detectar se a largura da tela corresponde a um dispositivo móvel.
 */
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 800px)").matches);
        };

        handleResize(); // Configura o estado inicial assim que monta (seguro para SSR no Next.js)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    return isMobile;
};

export default MemberCard;


const MemberWrapper = styled.div`
    position: relative;
    width: 20.5rem;
    height: 27.3rem;
    gap: 1rem;
    overflow-y: hidden;
    display: flex;
    background-color: var(--background-neutrals-primary);

    /* ====== BOTÃO MOBILE ====== */
    .info-button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        transition: all 0.15s ease-in-out;
        
        /* O fundo agora é gerado dinamicamente pelas props injetadas (sem precisar de .i0, .i1...) */
        background: linear-gradient(
            to bottom,
            var(--brand-primary) 50%,
            ${props => props.$textColor} 50%
        );
        background-size: 100% 200%;
        background-position: top;

        svg {
            transition: 0.15s;
        }

        /* Classe aplicada via JS ao clicar (Flip) */
        &.button-flip {
            background-position: bottom;
            svg {
                transform: rotate(-180deg);
                path {
                    fill: ${props => props.$bgColor};
                }
            }
        }
    }

    /* ====== CONTAINER DA IMAGEM ====== */
    .image-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 27.3rem;
        width: 20.5rem;

        .member-image {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--background-neutrals-primary-800);
            display: flex;
            overflow: hidden;

            .responsive-image {
                object-fit: cover;
                object-position: center;
            }
        }
    }

    /* ====== VERSO DO CARTÃO (Informações) ====== */
    .card-back {
        transition: all 0.15s ease-in-out;
        translate: 0 101%; /* Fica escondido abaixo do card por padrão */
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        width: 20.5rem;
        height: 27.3rem;
        gap: 1rem;
        
        /* Cores base injetadas via prop dinamicamente */
        background-color: ${props => props.$bgColor};
    
        .member-name {
            position: relative;
            padding: 0.2rem 0.25rem;
            display: flex;

            background-image: linear-gradient(${props => props.$textColor}, ${props => props.$textColor});
            background-size: 200%;
            background-position-x: 200%;
            background-repeat: no-repeat;

            h6 {
                font: 700 1.5rem/1.75rem 'AT Aero Bold';
                transition: 0.15s ease-in-out;
                color: ${props => props.$textColor};
            }
        }

        /* Animação e estilos caso o membro tenha LinkedIn (Vira um link) */
        .animate {
            transition: background-position 0.15s ease-in-out;

            a {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.25rem;

                svg path {
                    transition: all 0.15s;
                    fill: ${props => props.$textColor};
                }
                svg {
                    width: 2.5rem;
                }
            }

            &:hover, &:focus-visible {
                background-position-x: 0%;

                h6 {
                    color: ${props => props.$bgColor};
                }

                a svg path {
                    fill: ${props => props.$bgColor};
                }
            }

            &:focus-visible {
                outline: 2px solid ${props => props.$textColor};
                outline-offset: 2px;
            }
        }

        .phrase {
            color: ${props => props.$textColor};
            font: 400 1rem/1.5rem 'AT Aero';
        }

        .department-title {
            margin-bottom: 0.5rem;
            text-align: left;
            font: 700 1.25rem/1.5rem 'AT Aero Bold';
            color: ${props => props.$textColor};
        }

        .member-department {
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            gap: 0.5rem;
        }
    }

    /* Classe aplicada via JS ao clicar (Traz o verso do card para a tela) */
    .info-show {
        translate: 0 0;
    }


    /* ====== RESPONSIVIDADE (Desktop) ====== */
    @media (min-width: 800px) {

        &:hover, &:focus-within, &:focus-visible {
            .card-back {
                translate: 0 0; /* No desktop, sobe o verso apenas no hover/focus */
            }
        }

        &:focus-visible {
            outline: 2px solid ${props => props.$textColor};
            outline-offset: 2px;
        }

        /* Se o usuário deu click em mobile, desfaz a classe no desktop */
        .info-show {
            translate: 0 101%;
        }
    }

    @media (min-width: 1024px) {
        width: 18.4rem;
        height: 24.625rem;

        .image-container, .card-back {
            width: 18.4rem;
            height: 24.625rem;
        }

        /* Esconde o botão de abrir o card, pois a interação é por hover */
        .info-button {
            display: none;
        }
    }
`