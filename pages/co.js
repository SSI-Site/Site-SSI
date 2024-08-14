import { useState } from 'react';
import styled, { css } from 'styled-components';

import Meta from '../src/infra/Meta';
import members from '../data/members';

// components
import MemberCard from '../src/components/MemberCard';
import DepartmentStamp from '../src/components/DepartmentStamp';

// assets
import FinancesIcon from '../public/images/co_icons/finances.svg';
import CreationIcon from '../public/images/co_icons/creation.svg';
import BoardIcon from '../public/images/co_icons/board.svg';
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
                            <MemberCard name={member.name} image={member.image} departments={member.departments} linkedin={member.linkedin} />
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
                            <MemberCard name={member.name} image={member.image} departments={member.departments} linkedin={member.linkedin} />
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
                    <div className={`select-wrapper ${isSelected ? 'selected' : ''}`}>
                        <select 
                            id="sector-filter"
                            aria-label="Filtre por setor"
                            defaultValue="Filtro" 
                            onChange={handleMobileSelectChange}
                        >
                            <option value="Filtro" disabled hidden>Filtrar por setor</option>
                            <option value="Todos">Todos</option>
                            <option value="Comercial e Financeiro">Comercial e Financeiro</option>
                            <option value="Criação e Comunicação">Criação e Comunicação</option>
                            <option value="Diretoria">Diretoria</option>
                            <option value="Infraestrutura">Infraestrutura</option>
                            <option value="Palestrantes">Palestrantes</option>
                            <option value="Parcerias">Parcerias</option>
                            <option value="Site">Site</option>
                        </select>
                        <img className='icon' src='./images/co_icons/filter.svg' alt='Ícone de filtro' />
                    </div>
                </MobileCOFilterContainer> 
                    
                {/* Para telas desktop */}
                <DesktopCOFilterContainer>
                    <div className='members-container'>
                        <NavItem active={activeItem === 'Todos'} onClick={() => setActiveItem('Todos')}>
                            <DepartmentStamp name='Todos' />
                        </NavItem>
                        <NavItem active={activeItem === 'Comercial e Financeiro'} onClick={() => setActiveItem('Comercial e Financeiro')}>
                                <DepartmentStamp name='Comercial & Financeiro' icon={FinancesIcon} />
                            </NavItem>
                        <NavItem active={activeItem === 'Criação e Comunicação'} onClick={() => setActiveItem('Criação e Comunicação')}>
                                <DepartmentStamp name='Criação & Comunicação' icon={CreationIcon} />
                            </NavItem>
                        <NavItem active={activeItem === 'Diretoria'} onClick={() => setActiveItem('Diretoria')}>
                                <DepartmentStamp name='Diretoria' icon={BoardIcon} />
                            </NavItem>
                        <NavItem active={activeItem === 'Infraestrutura'} onClick={() => setActiveItem('Infraestrutura')}>
                                <DepartmentStamp name='Infraestrutura' icon={InfraIcon} />
                            </NavItem>
                        <NavItem active={activeItem === 'Palestrantes'} onClick={() => setActiveItem('Palestrantes')}>
                                <DepartmentStamp name='Palestrantes' icon={LectureIcon} />
                            </NavItem>
                        <NavItem active={activeItem === 'Parcerias'} onClick={() => setActiveItem('Parcerias')}>
                                <DepartmentStamp name='Parcerias' icon={PartnershipIcon} />
                            </NavItem>
                        <NavItem active={activeItem === 'Site'} onClick={() => setActiveItem('Site')}>
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
    padding-block: 3rem;

    .exhibition-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        .title-text {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 1.5rem;

            h6 span {
                font: inherit;
                background: var(--color-primary-900);
            }
        }

        .image-container {
            width: 100%;
            max-width: 25rem;
            position: relative;
            z-index: 1;
            
            img {
                width: 100%;
                height: auto;
                object-fit: cover;
                border: 0.25rem solid white;
            }
            
            &::after {
                content: "";
                position: absolute;
                top: 0.75rem;
                left: 0.75rem;
                width: calc(100% - 0.5rem);
                height: calc(100% - 0.95rem);
                background-color: var(--color-primary);
                z-index: -1;
            }
        }
    }

    @media (min-width:1021px) {
        padding-block: 7.5rem;
        
        .exhibition-container {
            flex-direction: row;

            .image-container {
                max-width: 50rem;

                img {
                    max-width: 35rem;
                    border: 0.5rem solid white;
                }

                &::after {
                    top: 1.5rem;
                    left: 1.5rem;
                    width: calc(100% - 1rem);
                    height: calc(100% - 1.35rem);
                }
            }
        }
    }
`

const COMembersSection = styled.section`
    padding-block: 0.5rem 4rem;

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
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-block: 0 0.5rem;

    .select-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        select {
            position: relative;
            width: 100%;
            color: white;
            background-color: var(--color-neutral-800);
            appearance: none;
            font-size: 0.875rem;
            text-align: center;
            padding: 0.5rem 2rem 0.5rem 0;

            &::-ms-expand {
                display: none;
            }
        }

        .icon {
            position: absolute;
            pointer-events: none;
            right: calc(50% - 4rem);
        }
    }

    .select-wrapper.selected {
        select {
            background-color: var(--color-primary);
            padding-right: 0;
        }

        .icon {
            display: none;
        }
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

    ${props => props.active == false && css`
        > div {
            background-image: linear-gradient(var(--color-primary), var(--color-primary));
        }
    `}

    ${props => props.active == true && css`
        > div {
            background-color: var(--color-primary); 
            background-image: linear-gradient(to right, white 50%, white 50%);
        }
    `}

    @media (min-width: 840px) {
        > div:hover, > div:focus-visible {
            background-position-x: 100%;    
        }
        
        ${props => props.active == true && css`
            > div:hover, > div:focus-visible {
                p {
                    color: var(--color-primary);
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
    margin-top: 2rem;

    @media (min-width:800px) {
        margin-top: 3rem;
    }
`