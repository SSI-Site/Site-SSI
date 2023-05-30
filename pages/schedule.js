import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import Meta from '../src/infra/Meta';
import saphira from '../services/saphira';
import semana from '../utils/semana';
import '../utils/slugify';
import schedule from '../data/schedule';
import members from '../data/members';

// components
import DateStamp from '../src/components/DateStamp';
import MemberCard from '../src/components/MemberCard';

// assets

const getScheduleDay = key => {
    const date = new Date(`${key} 03:00Z`);
    const day = date.getUTCDate();
    return { day }
}

const Schedule = () => {

    const [activeItem, setActiveItem] = useState([new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()].join('-'));

    const isDuringEvent = (date) => {
        var temp = false;
        Object.entries(schedule).map(([key]) => {
            if (date==key) {temp = true;}
        })
        return temp;
    }

    function renderActiveItem() {
        if (!isDuringEvent(activeItem)) {
            setActiveItem('2023-08-21'); // se não for um dos dias do evento, apresenta a programação do primeiro dia
        } 

        return (

            // aqui vai o componente ScheduleShift!!

            <p>oieeee</p>
            // deve iterar sobre o objeto schedule que foi importado

            //exemplo de iteração sobre um objeto (não sei se vai funcionar...talvez precise de Object.entries(schedule).map...):
                // members.map(function(member, key) {
                //     return (
                //         <div className="card-container" key={key}>
                //             <p>oi</p>
                //             <MemberCard name={member.name} image={member.image} departments={member.departments} />
                //         </div>
                //     );
                // })
        )
    }

    return (
        <>
            <Meta title='SSI 2023 | Programação' />
            
            <ScheduleSection>
                <h3>Programação</h3>

                {/* Para telas mobile */}
                <MobileSelectionContainer>
                    <h6>Selecione o dia:</h6>
                    <div className='schedule-container'>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-21'} onClick={() => setActiveItem('2023-08-21')}>
                                <DateStamp day='21' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-22'} onClick={() => setActiveItem('2023-08-22')}>
                                <DateStamp day='22' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-23'} onClick={() => setActiveItem('2023-08-23')}>
                                <DateStamp day='23' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-24'} onClick={() => setActiveItem('2023-08-24')}>
                                <DateStamp day='24' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-25'} onClick={() => setActiveItem('2023-08-25')}>
                                <DateStamp day='25' showEmoji={true} />
                            </NavItem>
                        </Link>
                    </div>
                </MobileSelectionContainer>

                {/* Para telas desktop */}
                <DesktopSelectionContainer>
                    <div className='schedule-container'>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-21'} onClick={() => setActiveItem('2023-08-21')}>
                                <DateStamp day='21' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-22'} onClick={() => setActiveItem('2023-08-22')}>
                                <DateStamp day='22' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-23'} onClick={() => setActiveItem('2023-08-23')}>
                                <DateStamp day='23' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-24'} onClick={() => setActiveItem('2023-08-24')}>
                                <DateStamp day='24' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' active={activeItem == '2023-08-25'} onClick={() => setActiveItem('2023-08-25')}>
                                <DateStamp day='25' showEmoji={true} />
                            </NavItem>
                        </Link>
                    </div>
                </DesktopSelectionContainer>

                <DayScheduleWrapper id="schedule">
                    {renderActiveItem()}
                </DayScheduleWrapper>

            </ScheduleSection>


        </>
    )
}

export default Schedule;


const ScheduleSection = styled.section`
    overflow-x: hidden;
    padding-block: 7.25rem 3.75rem;
    gap: 1rem;

    @media (min-width:600px) {
        gap: 4rem;
    }

    @media (min-width:600px) {
        h3 {
            font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
        }
    }
`

const MobileSelectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    

    .schedule-container {

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

const DesktopSelectionContainer = styled.div`
    display: none;

    @media (min-width:600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        .schedule-container {
            gap: 1.5rem;
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

const DayScheduleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width:600px) {
        gap: 3.6rem;
    }
`