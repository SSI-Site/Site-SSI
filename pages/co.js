import { useState } from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';

import Meta from '../src/infra/Meta';

// components
import DepartmentStamp from '../src/components/DepartmentStamp';
import MemberCard from '../src/components/MemberCard';

// assets
import members from '../data/members';

const CO = () => {

    const [activeItem, setActiveItem] = useState('Todos')

    function renderActiveItem() {
        if (activeItem === 'Todos') {
            return (
                members.map(function(member, key) {
                    return (
                        <div className="card-container" key={key}>
                            <MemberCard name={member.name} image={member.image} departments={member.departments} linkedin={member.linkedin} phrase={member.phrase} colorScheme={key} />
                        </div>
                    );
                })

            )
        } else {
            const sectorMembers = members.filter(member => member.departments.includes(activeItem))
            return (
                sectorMembers.map(function(member, key) {
                    return (
                        <div className="card-container" key={key}>
                            <MemberCard name={member.name} image={member.image} departments={member.departments} linkedin={member.linkedin} phrase={member.phrase} colorScheme={(key)} />
                        </div>
                    );
                })
            )
        }
    }

    useEffect(() => {
        const container = document.querySelector('.members-container');
        if (container) {
            container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
        }
    });

    return (
        <>
            <Meta title='Comissão Organizadora | Semana de Sistemas de Informação' 
            description='Conheça a comissão organizadora da SSI 2025. Estudantes dedicados à realização de um dos maiores eventos acadêmicos de tecnologia do país.'
            keywords='comissão SSI, organização do evento, estudantes organizadores, quem organiza a SSI, equipe SSI 2025, comissão sistemas de informação, organização semana tecnologia'
            />

            <COExhibitionSection>
                <div className='exhibition-container'>
                    <div className='title-text'>
                        <h1>Comissão Organizadora</h1>
                        <p>Conheça a Comissão Organizadora da Semana de Sistemas de Informação, o time que trabalha para fazer esse evento acontecer.</p>
                    </div>
                    <div className='image-container'>
                        <img src='./images/co_members/co.jpg' alt='Foto Membros' />
                    </div>
                </div>
            </COExhibitionSection>

            <COMembersSection>
                <COFilterContainer>
                    <div className='members-container'>
                        <NavItem $active={activeItem === 'Todos'} onClick={() => setActiveItem('Todos')}>
                            <DepartmentStamp name='Todos' itemColor="var(--brand-primary)" $active={activeItem === 'Todos'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Comercial e Financeiro'} onClick={() => setActiveItem('Comercial e Financeiro')}>
                            <DepartmentStamp name='Comercial e Financeiro' itemColor="var(--brand-primary-light)" $active={activeItem === 'Comercial e Financeiro'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Criação e Comunicação'} onClick={() => setActiveItem('Criação e Comunicação')}>
                            <DepartmentStamp name='Criação e Comunicação' itemColor="var(--content-neutrals-primary)" $active={activeItem === 'Criação e Comunicação'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Diretoria'} onClick={() => setActiveItem('Diretoria')}>
                            <DepartmentStamp name='Diretoria' itemColor="var(--brand-primary)" $active={activeItem === 'Diretoria'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Infraestrutura'} onClick={() => setActiveItem('Infraestrutura')}>
                            <DepartmentStamp name='Infraestrutura' itemColor="var(--brand-primary-light)" $active={activeItem === 'Infraestrutura'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Palestrantes'} onClick={() => setActiveItem('Palestrantes')}>
                            <DepartmentStamp name='Palestrantes' itemColor="var(--content-neutrals-primary)" $active={activeItem === 'Palestrantes'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Parcerias'} onClick={() => setActiveItem('Parcerias')}>
                            <DepartmentStamp name='Parcerias' itemColor="var(--brand-primary)" $active={activeItem === 'Parcerias'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Sites'} onClick={() => setActiveItem('Sites')}>
                            <DepartmentStamp name='Sites' itemColor="var(--brand-primary-light)" $active={activeItem === 'Sites'} />
                        </NavItem>
                    </div>
                </COFilterContainer> 

                <MemberCardsWrapper id="members">
                    {renderActiveItem()}
                </MemberCardsWrapper>
                    
            </COMembersSection>
        </>
    )
}

export default CO;


const COExhibitionSection = styled.section`
    border-bottom: 1px solid var(--background-neutrals-secondary);

    .exhibition-container {
        border-inline: 1px solid var(--background-neutrals-secondary);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title-text {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 1.5rem;
            padding: 1.5rem;
            border-bottom: 1px solid var(--background-neutrals-secondary);

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
            
            .title-text {
                height: calc(100vh - 8rem);
                max-height: 41.875rem;
                width: 50%;
                border-bottom: 0;
                border-right: 1px solid var(--background-neutrals-secondary);
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

    @media (min-width:1021px) {
        padding-block: 0 8rem;
    }
`

const COFilterContainer = styled.div `
    justify-content: center;
    padding-block: 5rem;
    margin-left: -38%;  // magic number

    .members-container {
        display: flex;
        gap: 2rem;
        align-items: center;
        padding-inline: 80%;    // magic number
        overflow-x: visible;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scroll-snap-align: center;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;  // hidden
    }
`

const NavItem = styled.div`
    cursor: pointer;
    flex-shrink: 0;
`

const MemberCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    @media (min-width:800px) {
        margin-top: 2rem;
    }
`