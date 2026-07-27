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
                        <p>Conheça a Comissão Organizadora da Semana de Sistemas de Informação, o time que trabalha para fazer esse evento acontecer.</p>
                    </div>
                    <div className='image-container'>
                        <Image 
                            src='/images/co/co.jpg' 
                            alt='Foto Palestra'
                            width={500}
                            height={500} 
                            priority
                        />
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
                        <div className="card-container" key={index}>
                            <MemberCard 
                                name={member.name} 
                                image={member.image} 
                                departments={member.departments} 
                                linkedin={member.linkedin} 
                                phrase={member.phrase} 
                                colorScheme={index} 
                            />
                        </div>
                    ))}
                </MemberCardsWrapper>
                    
            </COMembersSection>
        </>
    )
}

export default CO;

const COExhibitionSection = styled.section`
    border-bottom: 1px solid var(--outline-neutrals-secondary);
    background: var(--background-neutrals-primary, #1A1A1A);

    .exhibition-container {
        border-inline: 1px solid var(--outline-neutrals-secondary);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title-text {
            color: var(--content-neutrals-primary, #FFF);
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 1.5rem;
            padding: 1.5rem;
            border-bottom: 1px solid var(--outline-neutrals-secondary);

            p {
                font: 400 1rem/1.5rem 'AT Aero';   
            }
        }

        .image-container {
            width: 100%;
            max-width: 25rem;
            padding: 1.5rem 1.5rem 1.5rem 1rem;
            position: relative;
            z-index: 1;
            
            img {
                width: 100%;
                height: auto;
                object-fit: cover;
                border: 0.25rem solid white;
                box-shadow: 0.25rem 0.25rem 0 var(--brand-primary);
            }
        }
    }

    @media (min-width:1021px) {
        .exhibition-container {
            flex-direction: row;
            background: var(--background-neutrals-primary, #1A1A1A);
            
            .title-text {
                color: var(--content-neutrals-primary, #FFF);
                height: calc(100vh - 8rem);
                max-height: 41.875rem;
                width: 50%;
                border-bottom: 0;
                border-right: 1px solid var(--outline-neutrals-secondary);
                padding-block: 0;
            }

            .image-container {
                display: flex;
                justify-content: center;
                max-width: 50rem;
                width: 50%;
                padding: 0 1.5rem 0rem 1rem;

                img {
                    max-width: 38rem;
                    border: 0.5rem solid white;
                    box-shadow: 0.5rem 0.5rem 0 var(--brand-primary);
                }
            }
        }
    }
`

const COMembersSection = styled.section`
    overflow-x: hidden;
    align-items: center;
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

    @media (min-width:1021px) {
        margin-top: 2rem;
    }
`