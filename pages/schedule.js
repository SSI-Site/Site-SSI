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
    const [isSelected, setIsSelected] = useState(false)

    // estado "selecionado" para alterar o estilo da opção do filtro
    const handleMobileSelectChange = (e) => {
        setActiveItem(e.target.value)
        setIsSelected(true)
    }

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
                <MobileProgramFilterContainer>
                    { /* implementando a mesma ideia do filtro da CO */}
                    <div className={`select-wrapper ${isSelected ? 'selected' : ''}`}>
                        <select 
                            id="day-filter"
                            aria-label="Filtre por dia"
                            defaultValue="Filtro" 
                            onChange={handleMobileSelectChange}
                        >
                            <option value="Filtro" disabled hidden>Filtro por dia</option>
                            <option value="Todos">Todos</option>
                            <option value="07 Out">07 Out</option>
                            <option value="08 Out">08 Out</option>
                            <option value="09 Out">09 Out</option>
                            <option value="10 Out">10 Out</option>
                            <option value="11 Out">11 Out</option>
                        </select>
                        <img className='icon' src='./images/co_icons/filter.svg' alt='Ícone de filtro' />
                    </div>
                </MobileProgramFilterContainer> 

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

// estilo do filtro da programação
const MobileProgramFilterContainer = styled.div`
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
            padding: 0.5rem 2rem 0.5rem 1rem;

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

    > div {
        margin-top: 1rem;
    }

    @media (min-width:600px) {
        gap: 3.6rem;
    }
`