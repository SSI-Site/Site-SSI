import { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

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

    const [activeItem, setActiveItem] = useState('Todos');

    function renderActiveItem() {
        if (activeItem === 'Todos') {
            return (
                members.map(function(member, key) {
                    return (
                        <div className="card-container" key={key}>
                            <MemberCard name={member.name} image={member.image} departments={member.departments} anchor={member.anchor} />
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
                            <MemberCard name={member.name} image={member.image} departments={member.departments} anchor={member.anchor} />
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
                    <h3>Comissão Organizadora</h3>
                    <div className='image-text'>
                        <img src='./images/co_members/co.jpg' alt='Foto Palestra' />
                        <p>Conheça a <span>Comissão Organizadora</span> da Semana de Sistemas de Informação de 2024: o time que trabalhou para fazer este evento acontecer!</p>
                    </div>
                </div>
            </COExhibitionSection>

            <COMembersSection>
                <h3>Nossos membros</h3>
                {/* Para telas mobile */}
                <MobileCOFilterContainer>
                    <h6>Filtre por setor:</h6>
                    <div className='members-container'>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Todos'} onClick={() => setActiveItem('Todos')}>
                                <DepartmentStamp name='Todos' />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Comercial e Financeiro'} onClick={() => setActiveItem('Comercial e Financeiro')}>
                                <DepartmentStamp name='Comercial & Financeiro' icon={FinancesIcon} />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Criação e Comunicação'} onClick={() => setActiveItem('Criação e Comunicação')}>
                                <DepartmentStamp name='Criação & Comunicação' icon={CreationIcon} />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Diretoria'} onClick={() => setActiveItem('Diretoria')}>
                                <DepartmentStamp name='Diretoria' icon={BoardIcon} />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Infraestrutura'} onClick={() => setActiveItem('Infraestrutura')}>
                                <DepartmentStamp name='Infraestrutura' icon={InfraIcon} />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Palestrantes'} onClick={() => setActiveItem('Palestrantes')}>
                                <DepartmentStamp name='Palestrantes' icon={LectureIcon} />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Parcerias'} onClick={() => setActiveItem('Parcerias')}>
                                <DepartmentStamp name='Parcerias' icon={PartnershipIcon} />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Site'} onClick={() => setActiveItem('Site')}>
                                <DepartmentStamp name='Site' icon={SiteIcon} />
                            </NavItem>
                        </Link>
                    </div>
                </MobileCOFilterContainer> 
                    
                {/* Para telas mobile */}
                <DesktopCOFilterContainer>
                    <div className='members-container'>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Todos'} onClick={() => setActiveItem('Todos')}>
                                <DepartmentStamp name='Todos' />
                            </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Comercial e Financeiro'} onClick={() => setActiveItem('Comercial e Financeiro')}>
                                    <DepartmentStamp name='Comercial & Financeiro' icon={FinancesIcon} />
                                </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Criação e Comunicação'} onClick={() => setActiveItem('Criação e Comunicação')}>
                                    <DepartmentStamp name='Criação & Comunicação' icon={CreationIcon} />
                                </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Diretoria'} onClick={() => setActiveItem('Diretoria')}>
                                    <DepartmentStamp name='Diretoria' icon={BoardIcon} />
                                </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Infraestrutura'} onClick={() => setActiveItem('Infraestrutura')}>
                                    <DepartmentStamp name='Infraestrutura' icon={InfraIcon} />
                                </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Palestrantes'} onClick={() => setActiveItem('Palestrantes')}>
                                    <DepartmentStamp name='Palestrantes' icon={LectureIcon} />
                                </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Parcerias'} onClick={() => setActiveItem('Parcerias')}>
                                    <DepartmentStamp name='Parcerias' icon={PartnershipIcon} />
                                </NavItem>
                        </Link>
                        <Link href="#members">
                            <NavItem active={activeItem === 'Site'} onClick={() => setActiveItem('Site')}>
                                <DepartmentStamp name='Site' icon={SiteIcon} />
                            </NavItem>
                        </Link>
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
    background: url('./images/background_imgs/background2_mobile.svg') no-repeat;
    background-position: bottom left;
    background-size: cover;
    padding-block: 7.25rem 3.75rem;

    .exhibition-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3.5rem;

        h3 {
            text-align: center;
        }

        .image-text {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 2.5rem;

            img {
                width: 100%;
                max-width: 25rem;
                border-radius: 8px;
            }

            p {
                font-family: 'Space_Mono_Bold';
                font-weight: 400;
                text-align: center;
                max-width: 32rem;

                span {
                    font: inherit;
                    color: var(--color-primary-700);
                }
            }
        }
    }

    @media (min-width:800px) {
        background-image: url('./images/background_imgs/background2_desktop.svg');
    }

    @media (min-width:1021px) {
        padding-block: 6.75rem;
        
        .exhibition-container {
            gap: 5rem;

            h3 {
                font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
            }

            .image-text {
                flex-direction: row;
                /* gap: 3.5rem; */

                img {
                    max-width: 35rem;
                }

                p {
                    font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
                    text-align: left;

                    span {
                    }
                }
            }
        }
    }
`

const COMembersSection = styled.section`
    background: url('./images/background_imgs/background3_mobile.svg') no-repeat fixed;
    background-size: cover;
    padding-block: 3.75rem;

    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (min-width:800px) {
        background-image: url('./images/background_imgs/background3_desktop.svg');
        
        h3 {
            font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
            margin-bottom: 4rem;
        }
    }

    @media (min-width:1021px) {
        padding-block: 6.75rem;
    }
`

const MobileCOFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 1rem;


    .members-container {

        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        height: auto;
        width: 100vw;
        padding-inline: 1rem;
        overflow: auto;  
        display: flex;
        scroll-snap-type: x mandatory;
        gap: 0.875rem;
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

    ${props => props.active == true && css`
        pointer-events: none;
        > div {
            background-color: var(--color-primary);
        }
    `}

    @media (min-width: 840px) {
        
        ${props => props.active == false && css`
            > div:hover {
                background-color: var(--color-neutral-700);
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
    gap: 2rem;
    margin-top: 2rem;

    @media (min-width:800px) {
        gap: 1.5rem;
        margin-top: 4rem;
    }
`