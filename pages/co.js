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

    // centralize activeItem
    useEffect(() => {
        const container = document.querySelector('.members-container');
        const active = container.querySelector(`[name="${activeItem}"]`);
        if (container && active) {
            container.scrollLeft = active.offsetLeft + active.offsetWidth / 2 - window.innerWidth / 2;      // active center position
        }
    });

    // text wrap resize on mobile
    useEffect(() => {
        const stamps = document.querySelectorAll('.members-container > * > *');
        if (stamps) {
            stamps.forEach(stamp => {
                const stampText = stamp.querySelector('p');
                if (stampText.offsetHeight > 48 && window.innerWidth < 1021) {    // 48px = 3rem (one text line)
                    stamp.style.maxWidth = '14rem';
                    stampText.style.font = '400 2rem/2rem "AT Aero Bold"';
                }
            });
        }
    }, []);

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
                        <NavItem $active={activeItem === 'Palestrantes'} onClick={() => setActiveItem('Palestrantes')}>
                            <DepartmentStamp name='Palestrantes' itemColor="var(--content-neutrals-primary)" $active={activeItem === 'Palestrantes'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Parcerias'} onClick={() => setActiveItem('Parcerias')}>
                            <DepartmentStamp name='Parcerias' itemColor="var(--brand-primary)" $active={activeItem === 'Parcerias'} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Sites'} onClick={() => setActiveItem('Sites')}>
                            <DepartmentStamp name='Sites' itemColor="var(--brand-primary-light)" $active={activeItem === 'Sites'} />
                        </NavItem>
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
        scrollbar-width: hidden;  // hidden
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