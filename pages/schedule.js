import { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import Meta from '../src/infra/Meta';
import '../utils/slugify';
import schedule from '../data/shiftInformation';

// components
import DateStamp from '../src/components/DateStamp';
import ScheduleShift from '../src/components/ScheduleShift';

const shifts = ['Manhã', 'Tarde', 'Noite'];

const Schedule = () => {

    const currentDate = `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;

    const [activeItem, setActiveItem] = useState(currentDate);

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
            shifts.map(function(shift, key) {
                return (
                    <ScheduleShift
                        key={key}
                        day={activeItem}
                        shift={shift}
                    />
                )
            })
        )
    }

    return (
        <>
            <Meta title='SSI 2024 | Programação' />
            
            <ScheduleSection>
                <h3>Programação</h3>

                {/* Para telas mobile */}
                <MobileSelectionContainer>
                    <h6>Selecione o dia:</h6>
                    <div className='schedule-container'>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-21'} onClick={() => setActiveItem('2023-08-21')}>
                                <DateStamp day='21' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-22'} onClick={() => setActiveItem('2023-08-22')}>
                                <DateStamp day='22' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-23'} onClick={() => setActiveItem('2023-08-23')}>
                                <DateStamp day='23' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-24'} onClick={() => setActiveItem('2023-08-24')}>
                                <DateStamp day='24' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-25'} onClick={() => setActiveItem('2023-08-25')}>
                                <DateStamp day='25' showEmoji={true} />
                            </NavItem>
                        </Link>
                    </div>
                </MobileSelectionContainer>

                {/* Para telas desktop */}
                <DesktopSelectionContainer>
                    <div className='schedule-container'>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-21'} onClick={() => setActiveItem('2023-08-21')}>
                                <DateStamp day='21' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-22'} onClick={() => setActiveItem('2023-08-22')}>
                                <DateStamp day='22' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-23'} onClick={() => setActiveItem('2023-08-23')}>
                                <DateStamp day='23' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-24'} onClick={() => setActiveItem('2023-08-24')}>
                                <DateStamp day='24' showEmoji={true} />
                            </NavItem>
                        </Link>
                        <Link href='#schedule'>
                            <NavItem className='day-selection' $active={activeItem == '2023-08-25'} onClick={() => setActiveItem('2023-08-25')}>
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
    background: url('./images/background_imgs/background3_mobile.svg') fixed;
    background-size: cover;
    overflow-x: hidden;
    padding-block: 7.25rem 3.75rem;
    gap: 1rem;

    @media (min-width:600px) {
        gap: 4rem;

        h3 {
            font: 700 3.5rem/4.25rem 'AT Aero Bold';
        }
    }

    @media (min-width:800px) {
        background-image: url('./images/background_imgs/background3_desktop.svg');
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

    ${props => props.$active == true && css`
        pointer-events: none;
        > div {
            background-color: var(--color-primary);
        }
    `}

    @media (min-width: 840px) {
        
        ${props => props.$active == false && css`
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

    > div {
        margin-top: 1rem;
    }

    @media (min-width:600px) {
        gap: 3.6rem;
    }
`