import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import schedule from '../data/scheduleInformation';
import Meta from '../src/infra/Meta';
import '../utils/slugify';

// components
import DateStamp from '../src/components/DateStamp';
import ScheduleShift from '../src/components/ScheduleShift';

const shifts = ['Manhã', 'Tarde', 'Noite'];

const dayOfSSI = ["07 Out", "08 Out", "09 Out", "10 Out", "11 Out"]
const dayFull = ["2024-10-07", "2024-10-08", "2024-10-09", "2024-10-10", "2024-10-11"]
const weekDays = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"]

const Schedule = () => {

    const currentDate = `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;

    const [activeItem, setActiveItem] = useState(currentDate);
    const [isSelected, setIsSelected] = useState(false)

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
            setActiveItem('2024-10-07'); // se não for um dos dias do evento, apresenta a programação do primeiro dia
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

	const [dayNumber, setDayNumber] = useState(isDuringEvent(activeItem)? dayFull.indexOf(activeItem) : 0);

	const moveDayNumber = (num) => {
		setDayNumber(dayNumber + num)
		setActiveItem(dayFull[dayNumber + num])
	}

    return (
        <>
            <Meta title='SSI 2024 | Programação' />
            
            <ScheduleSection>
                <h1>Programação</h1>

                {/* Para telas mobile */}
                <MobileScheduleFilterContainer>
                    <div className={`select-wrapper ${isSelected ? 'selected' : ''}`}>
                        <select
                            aria-label="Filtre por dia"
                            defaultValue="Filtro"
                            onChange={handleMobileSelectChange}
                        >
                            <option value="Filtro" disabled hidden>Filtrar por dia</option>
                            <option value="2024-10-07">Dia 1</option>
                            <option value="2024-10-08">Dia 2</option>
                            <option value="2024-10-09">Dia 3</option>
                            <option value="2024-10-10">Dia 4</option>
                            <option value="2024-10-11">Dia 5</option>
                        </select>
                        <img className='icon' src='./images/co_icons/filter.svg' alt='Ícone de filtro' />
                    </div>
                </MobileScheduleFilterContainer> 

                {/* Para telas desktop */}
                <DesktopSelectionContainer>
                    <div className='schedule-container'>
                        <Link href='#schedule' onClick={() => setActiveItem('2024-10-07')}>
                            <DateStamp
                                day='07'
                                isActive={activeItem == '2024-10-07'}
                                showEmoji={true}
                            />
                        </Link>
                        <Link href='#schedule' onClick={() => setActiveItem('2024-10-08')}>
                            <DateStamp
                                day='08'
                                isActive={activeItem == '2024-10-08'}
                                showEmoji={true}
                            />
                        </Link>
                        <Link href='#schedule' onClick={() => setActiveItem('2024-10-09')}>
                            <DateStamp
                                day='09'
                                isActive={activeItem == '2024-10-09'}
                                showEmoji={true}
                            />
                        </Link>
                        <Link href='#schedule' onClick={() => setActiveItem('2024-10-10')}>
                            <DateStamp
                                day='10'
                                isActive={activeItem == '2024-10-10'}
                                showEmoji={true}
                            />
                        </Link>
                        <Link href='#schedule' onClick={() => setActiveItem('2024-10-11')}>
                            <DateStamp
                                day='11'
                                isActive={activeItem == '2024-10-11'}
                                showEmoji={true}
                            />
                        </Link>
                    </div>
                </DesktopSelectionContainer>

				<MobileBarFilterContainer>
					<div className='filter-container'>
						<ButtonFilter disabled={dayNumber == 0} className='left' onClick={() => moveDayNumber(-1)}>
							<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
							</svg>
						</ButtonFilter>
						<div className='filter-day-info'>
							<p>{dayOfSSI[dayNumber]}</p>
							<p>{weekDays[dayNumber]}</p>
						</div>
						<ButtonFilter disabled={dayNumber == 4} className='right' onClick={() => moveDayNumber(1)}>
							<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
							</svg>
						</ButtonFilter>
					</div>
				</MobileBarFilterContainer>

				{/* Tela pra Desktop */}
				<DesktopBarFilterContainer>
					<div className='filter-label'>
						<p>Horário</p>
						<p>Atividade</p>
					</div>
					<div className='filter-day-info'>
						<p>{dayOfSSI[dayNumber]} - {weekDays[dayNumber]}</p>
					</div>
					<div className='filter-button-container'>
						<ButtonFilter disabled={dayNumber == 0} className='left' onClick={() => moveDayNumber(-1)}>
							<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
							</svg>
						</ButtonFilter>

						<ButtonFilter disabled={dayNumber == 4} className='right' onClick={() => moveDayNumber(1)}>
							<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
							</svg>
						</ButtonFilter>
					</div>
				</DesktopBarFilterContainer>

                <DayScheduleWrapper id="schedule">
                    {renderActiveItem()}
                </DayScheduleWrapper>

            </ScheduleSection>
        </>
    )
}

export default Schedule;

const MobileBarFilterContainer = styled.div`
	position: sticky;
	top: 0;
	z-index: 12;
	background-color: var(--color-neutral);

	.filter-container {
		height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 0.0625rem solid var(--color-neutral-secondary);
		border-bottom: 0.0625rem solid var(--color-neutral-secondary);
	}

	.filter-day-info {
		p {
			font: 700 1rem/1.25rem 'AT Aero Bold';
			text-align: center;
		}
	}
	
	@media(min-width: 600px) {
		display: none;
	}
`
const DesktopBarFilterContainer = styled.div`
	display: none;

	@media(min-width: 600px) {
		height: 5rem;
		display: flex;
		position: sticky;
		top: 0;
		z-index: 12;
		justify-content: space-between;
		align-items: center;
		background-color: var(--color-neutral);
		
		border-top: 0.0625rem solid var(--color-neutral-secondary);
		border-bottom: 0.0625rem solid var(--color-neutral-secondary);

		div {
			display: flex;

			p {
				font: 700 1rem/1.25rem 'AT Aero Bold';
			}
		}

		.filter-label {
			gap: 5.5rem;
		}

		.filter-button-container {
			gap: 1rem;
		}
	}
`

const ButtonFilter = styled.button`
	border: 0;
	display: flex;
	width: 3rem;
	height: 3rem;
	align-items: center;
	justify-content: center;
	background-size: 200% 100%;
	transition: 100ms all ease-out;

	svg {
		path {
			fill: var(--color-neutral-50);
		}
	}

	&:hover, &:focus-visible {
		svg {
			path {
				fill: var(--color-primary);
			}
		}
	}

	&.right {
		background-image: linear-gradient(
			to right,
			var(--color-neutral-50) 50%,
			var(--color-primary) 50%
			);
		background-position: right;

		&:hover, &:focus-visible {
			background-position: left;
		}

		svg {
			transform: rotate(90deg);
		}
	}

	&.left {
		background-image: linear-gradient(
			to left,
			var(--color-neutral-50) 50%,
			var(--color-primary) 50%
			);
		background-position: left;

		&:hover, &:focus-visible {
			background-position: right;
		}

		svg {
			transform: rotate(-90deg);
		}
	}

	&:disabled {
		background-image: none;
		background-color: var(--color-neutral-secondary);
        cursor: not-allowed;

		svg {
			path {
				fill: var(--color-neutral);
			}
		}
	}
`

const ScheduleSection = styled.section`
    padding-block: 1.5rem;
    gap: 1rem;

    @media (min-width:600px) {
        padding-block: 7.5rem 3.75rem;
        gap: 2rem;

        h1 {
            width: 100%;
            max-width: 1328px; 
        }
    }
`

const MobileScheduleFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-block: 1rem 1.5rem;

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
            gap: 1rem;
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            align-items: center;
            justify-content: center;
        }
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
