import { useState } from 'react';
import styled, { css } from 'styled-components';

import Meta from '../src/infra/Meta';

// components
import DepartmentStamp from '../src/components/DepartmentStamp';
import MemberCard from '../src/components/MemberCard';

// assets
import members from '../data/members';
import BoardIcon from '../public/images/co_icons/board.svg';
import CreationIcon from '../public/images/co_icons/creation.svg';
import FinancesIcon from '../public/images/co_icons/finances.svg';
import InfraIcon from '../public/images/co_icons/infra.svg';
import LectureIcon from '../public/images/co_icons/lecture.svg';
import PartnershipIcon from '../public/images/co_icons/partnership.svg';
import SiteIcon from '../public/images/co_icons/web.svg';

const CO = () => {

    const [activeItem, setActiveItem] = useState('Todos')
    const [isSelected, setIsSelected] = useState(false)

    const handleMobileSelectChange = (e) => {
        setActiveItem(e.target.value)
        setIsSelected(true)
    }

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

    return (
        <>
            <Meta title='SSI 2024 | CO' />

            <COExhibitionSection>
                <div className='exhibition-container'>
                    <div className='title-text'>
                        <h1>Comissão Organizadora</h1>
                        <h6>Conheça a <span>Comissão Organizadora</span> da Semana de Sistemas de Informação: o time que trabalha para fazer esse evento acontecer.</h6>
                    </div>
                    <div className='image-container'>
                        <img src='./images/co_members/co.jpg' alt='Foto Palestra' />
                    </div>
                </div>
            </COExhibitionSection>

            <COMembersSection>
                {/* Para telas mobile */}
                <MobileCOFilterContainer>
                    <p>Filtrar por setor:</p>
                    <div className={`select-wrapper ${isSelected ? 'selected' : ''}`}>
                        <select
                            aria-label="Filtre por setor"
                            defaultValue="Todos" 
                            onChange={handleMobileSelectChange}
                        >
                            <option value="Todos">Todos</option>
                            <option value="Comercial e Financeiro">Comercial e Financeiro</option>
                            <option value="Criação e Comunicação">Criação e Comunicação</option>
                            <option value="Diretoria">Diretoria</option>
                            <option value="Infraestrutura">Infraestrutura</option>
                            <option value="Palestrantes">Palestrantes</option>
                            <option value="Parcerias">Parcerias</option>
                            <option value="Site">Site</option>
                        </select>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M18.3188 7L12.5 12.8187L6.68125 7L4.5 9.18125L12.5 17.1813L20.5 9.18125L18.3188 7Z" fill="white"/>
                        </svg>
                    </div>
                </MobileCOFilterContainer> 
                    
                {/* Para telas desktop */}
                <DesktopCOFilterContainer>
                    <div className='members-container'>
                        <NavItem $active={activeItem === 'Todos'} onClick={() => setActiveItem('Todos')}>
                            <DepartmentStamp name='Todos' />
                        </NavItem>
                        <NavItem $active={activeItem === 'Comercial e Financeiro'} onClick={() => setActiveItem('Comercial e Financeiro')}>
                            <DepartmentStamp name='Comercial & Financeiro' icon={FinancesIcon} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Criação e Comunicação'} onClick={() => setActiveItem('Criação e Comunicação')}>
                            <DepartmentStamp name='Criação & Comunicação' icon={CreationIcon} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Diretoria'} onClick={() => setActiveItem('Diretoria')}>
                            <DepartmentStamp name='Diretoria' icon={BoardIcon} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Infraestrutura'} onClick={() => setActiveItem('Infraestrutura')}>
                            <DepartmentStamp name='Infraestrutura' icon={InfraIcon} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Palestrantes'} onClick={() => setActiveItem('Palestrantes')}>
                            <DepartmentStamp name='Palestrantes' icon={LectureIcon} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Parcerias'} onClick={() => setActiveItem('Parcerias')}>
                            <DepartmentStamp name='Parcerias' icon={PartnershipIcon} />
                        </NavItem>
                        <NavItem $active={activeItem === 'Site'} onClick={() => setActiveItem('Site')}>
                            <DepartmentStamp name='Site' icon={SiteIcon} />
                        </NavItem>
                    </div>
                </DesktopCOFilterContainer> 

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

            h6 span {
                font: inherit;
                background: var(--brand-purple-900);
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
                width: 50%;
                border-bottom: 0;
                border-right: 1px solid var(--background-neutrals-secondary);
                padding-block: 0;
            }

            .image-container {
                max-width: 50rem;
                width: 50%;
                padding: 0 1.5rem 0rem 1rem;

                img {
                    max-width: 45rem;
                    border: 0.5rem solid white;
                    box-shadow: 0.5rem 0.5rem 0 var(--brand-primary);
                }
            }
        }
    }
`

const COMembersSection = styled.section`

    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (min-width:800px) {
        
        h3 {
            font: 700 3.5rem/4.25rem 'AT Aero Bold';
            margin-bottom: 4rem;
        }
    }

    @media (min-width:1021px) {
        padding-block: 0 8rem;
    }
`

const MobileCOFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-block: 1.5rem;

    p {
        font: 700 0.875rem/1.5rem 'AT Aero Bold';
        width: 100%;
    }

    .select-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        select {
            position: relative;
            width: 100%;
            min-height: 3rem; 
            color: white;
            background-color: var(--background-neutrals-primary);
            appearance: none;
            font-size: 0.875rem;
            text-align: center;
            padding: 0.5rem 1rem;

            &::-ms-expand {
                display: none;
            }
        }

        .icon {
            position: absolute;
            pointer-events: none;
            right: 7.5%;
        }
    }

    .selected select {
        background-color: var(--brand-primary);
    }

    option {
        font-size: 0.875rem;
    }

    @media (min-width:600px) {
        display: none;
    }
`

const DesktopCOFilterContainer = styled.div `
    display: none;

    @media (min-width:600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-block: 4rem 2rem;

        .members-container {
            gap: 1rem;
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            align-items: center;
            justify-content: center;
        }
    }
`

const NavItem = styled.div`
    cursor: pointer;
    flex-shrink: 0;
    scroll-snap-align: center;

    ${props => props.$active == false && css`
        > div {
            background-image: linear-gradient(var(--brand-primary), var(--brand-primary));
        }
    `}

    ${props => props.$active == true && css`
        > div {
            background-color: var(--brand-primary); 
            background-image: linear-gradient(to right, white 50%, white 50%);
        }
    `}

    @media (min-width:840px) {
        > div:hover, > div:focus-visible {
            background-position-x: 100%;    
        }
        
        ${props => props.$active == true && css`
            > div:hover, > div:focus-visible {
                p {
                    color: var(--brand-primary);
                }

                img {
                    filter: brightness(0) saturate(100%) invert(33%) sepia(43%) saturate(7450%) hue-rotate(256deg) brightness(98%) contrast(106%);
                }
            }
        `}
    } 
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