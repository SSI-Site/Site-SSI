import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Meta from '../src/infra/seo/Meta';
import { eventDetails } from '../data/eventDetails';

// components
import DepartmentStamp from '../src/components/features/co/DepartmentStamp';
import MemberCard from '../src/components/features/co/MemberCard';

// Importe Image do Next
import Image from 'next/image'

// assets
import members from '../data/members';

/**
 * Array de configuração dos filtros (setores).
 * Centralizar esses dados facilita a adição ou remoção de setores no futuro
 * sem precisar duplicar dezenas de linhas de HTML.
 */
const DEPARTMENTS = [
    { name: 'Palestrantes', color: 'var(--content-neutrals-primary)' },
    { name: 'Parcerias', color: 'var(--brand-primary)' },
    { name: 'Sites', color: 'var(--brand-primary-light)' },
    { name: 'Todos', color: 'var(--brand-primary)' },
    { name: 'Comercial e Financeiro', color: 'var(--brand-primary-light)' },
    { name: 'Criação e Comunicação', color: 'var(--content-neutrals-primary)' },
    { name: 'Diretoria', color: 'var(--brand-primary)' },
    { name: 'Infraestrutura', color: 'var(--brand-primary-light)' }
];

const CO = () => {

    const [activeItem, setActiveItem] = useState('Todos');

    /**
     * Efeito de centralização automática (Scroll suave).
     * Quando o 'activeItem' muda, o contêiner calcula a posição do botão clicado
     * e rola a tela horizontalmente para deixá-lo no centro da visão do usuário.
     */
    useEffect(() => {
        const container = document.querySelector('.members-container');
        // Usamos optional chaining (?.) para evitar erros caso o elemento ainda não exista
        const active = container?.querySelector(`[name="${activeItem}"]`);
        
        if (container && active) {
            container.scrollLeft = active.offsetLeft + (active.offsetWidth / 2) - (window.innerWidth / 2);
        }
    }, [activeItem]); // A dependência garante que só rode quando a aba mudar (Performance ++)

    // Lógica enxuta de filtragem: 
    // Se for 'Todos', pega o array original. Se não, usa o .filter() nos setores.
    const displayedMembers = activeItem === 'Todos' 
        ? members 
        : members.filter(member => member.departments.includes(activeItem));

    return (
        <>
            <Meta title='Comissão Organizadora | Semana de Sistemas de Informação' 
            description={`Conheça a comissão organizadora da SSI ${eventDetails.year}. Estudantes dedicados à realização de um dos maiores eventos acadêmicos de tecnologia do país.`}
            keywords={`comissão SSI, organização do evento, estudantes organizadores, quem organiza a SSI, equipe SSI ${eventDetails.year}, comissão sistemas de informação, organização semana tecnologia`}
            />

            <COExhibitionSection>
                <div className='exhibition-container'>
                    <div className='title-text'>
                        <h1>Comissão Organizadora</h1>
                        <p>Venha conhecer a Comissão Organizadora que trabalha para fazer a Semana de Sistemas de Informação acontecer!</p>
                    </div>
                    <div className='image-container'>
                        <div className='image-wrapper'>
                            {/* Triângulo de Cima preso no canto superior esquerdo da foto */}
                            <img 
                                src='/images/co/triangulo-cima.svg' 
                                alt='' 
                                className='triangle triangle-top' 
                                aria-hidden="true" 
                            />
                            
                            <Image 
                                src='/images/co/co.jpg' 
                                alt='Foto da Comissão Organizadora'
                                width={608}
                                height={416} 
                                priority
                                className='main-image'
                            />

                            {/* Triângulo de Baixo preso no canto inferior direito da foto */}
                            <img 
                                src='/images/co/triangulo-baixo.svg' 
                                alt='' 
                                className='triangle triangle-bottom' 
                                aria-hidden="true" 
                            />
                        </div>
                    </div>
                </div>
            </COExhibitionSection>

            <COMembersSection>
                <COFilterContainer>
                    <div className='members-container'>
                        {/* Geração dinâmica dos botões de filtro a partir do array DEPARTMENTS */}
                        {DEPARTMENTS.map((dept) => (
                            <NavItem 
                                key={dept.name} 
                                name={dept.name} // Importante para o querySelector do Scroll encontrar o elemento
                                onClick={() => setActiveItem(dept.name)}
                            >
                                <DepartmentStamp 
                                    name={dept.name} 
                                    $itemColor={dept.color} 
                                    $active={activeItem === dept.name} 
                                />
                            </NavItem>
                        ))}
                    </div>
                </COFilterContainer> 

                <MemberCardsWrapper id="members">
                    {/* Renderização limpa dos cartões baseada na lista filtrada */}
                    {displayedMembers.map((member, index) => (
                        <MemberCard 
                            name={member.name} 
                            image={member.image} 
                            departments={member.departments} 
                            linkedin={member.linkedin} 
                            phrase={member.phrase} 
                            index={index} 
                            key={index}
                        />
                    ))}
                </MemberCardsWrapper>
                    
            </COMembersSection>
        </>
    )
}

export default CO;
const COExhibitionSection = styled.section`
    background: var(--background-neutrals-primary, #1A1A1A);
    position: relative;
    overflow: hidden;
    padding: 4rem 1.5rem 1.5rem 1.5rem;

    .exhibition-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7.8rem; 
        position: relative;
        z-index: 2;

        .title-text {
            position: relative;
            color: var(--content-neutrals-primary, #FFF);
            display: flex;
            flex-direction: column;
            align-items: flex-start; 
            text-align: left;
            gap: 1rem;
            width: 100%;
            max-width: 30rem;
            z-index: 2;

            &::before {
                content: '';
                position: absolute;
                width: 18rem;      
                height: 18.5rem;   
                
                top: -2.8rem;      
                left: 0rem;     
                z-index: -1; 
                
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                opacity: 0.5; 

                background-image: light-dark(
                    url('/images/co/detalhe-fundo-light.svg'), 
                    url('/images/co/detalhe-fundo-dark.svg')
                );

                @media (prefers-color-scheme: light) {
                    background-image: url('/images/co/detalhe-fundo-light.svg');
                }
            }
            h1 {
                font-size: 2.5;
                line-height: 3rem;
            }

            p {
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.5rem;
            }
        }

        .image-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .image-wrapper {
                position: relative; 
                width: fit-content;
                max-width: 100%;
                display: flex;

                .triangle-top {
                    position: absolute;
                    width: 2.8rem;   
                    height: 3.1rem;  
                    top: -1rem;      
                    left: -1rem;     
                    z-index: 3;
                }

                .triangle-bottom {
                    position: absolute;
                    width: 2.2rem;   
                    height: 2.2rem;  
                    bottom: -1rem;   
                    right: -1rem;    
                    z-index: 3;
                }
            }

            .main-image {
                width: 100%;
                height: auto;
                aspect-ratio: 608 / 416;
                object-fit: cover;
                border-radius: 0.625rem; 
                position: relative;
                z-index: 2;
            }
        }
    }

    /* ====== DESKTOP LAYOUT  ====== */
    @media (min-width: 1021px) {
        padding: 6rem 3rem;

        .exhibition-container {
            flex-direction: row; 
            justify-content: center; 
            gap: 4rem; 

            .title-text {
                width: 55%;
                
                &::before {
                    width: 24.375rem;  
                    height: 25rem;     
                    top: 50%;
                    left: 0; 
                    transform: translate(0, -50%); 
                    opacity: 0.5; 
                }

                h1 {
                    font-size: 4rem;
                    line-height: 4.5rem;
                }

                p {
                    font-size: 1rem;
                    line-height: 1.5rem;
                }
            }

            .image-container {
                width: 53%;
                justify-content: center;
                
                .image-wrapper {

                    .triangle-top {
                        width: 6.6694rem; 
                        height: 7.4047rem; 
                        top: -3.5rem;
                        left: -2.5rem;
                    }

                    .triangle-bottom {
                        width: 4.875rem; 
                        height: 4.8125rem; 
                        bottom: -2.5rem;
                        right: -2.5rem;
                    }
                }
            }
        }
    }
`;

const COMembersSection = styled.section`
    overflow-x: hidden;
    align-items: center;

    border-top: 1px solid var(--outline-neutrals-secondary);
`

const COFilterContainer = styled.div `
    max-width: 100%;
    justify-content: center;
    padding-block: 0 1rem;

    .members-container {
        display: flex;
        overflow-x: visible;
        overflow-y: hidden;
        gap: 2rem;
        align-items: center;
        padding-inline: 30%;    // magic number
        scroll-behavior: smooth;
        scroll-snap-align: center;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;  // hidden
    }

    @media (min-width:1021px) {
        padding-block: 4rem;
        margin-left: -50%;
        margin-right: -50%;
    }
`

const NavItem = styled.div`
    cursor: pointer;
    flex-shrink: 0;
    user-select: none;
`

const MemberCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    padding-inline: 1rem;

    @media (min-width:1021px) {
        margin-top: 2rem;
    }
`