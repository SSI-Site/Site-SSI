import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

import schedule from '../data/schedule';
import Meta from '../src/infra/Meta';
import '../utils/slugify';

// components
import DateStamp from '../src/components/DateStamp';
import ScheduleItems from '../src/components/ScheduleItems';

const dayOfSSI = ["07 Out", "08 Out", "09 Out", "10 Out", "11 Out"]
const dayFull = ["2024-10-07", "2024-10-08", "2024-10-09", "2024-10-10", "2024-10-11"]
const weekDays = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"]

const Schedule = () => {

    const currentDate = `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;

    const [activeItem, setActiveItem] = useState(currentDate);
    const [isSelected, setIsSelected] = useState(false)
    const [dayNumber, setDayNumber] = useState(dayFull.indexOf(currentDate))

    const handleMobileSelectChange = (e) => {
        const selectedDate = e.target.value
        setActiveItem(selectedDate)
        setIsSelected(true)
        setDayNumber(dayFull.indexOf(selectedDate))
    }

    const isDuringEvent = (date) => {
        return Object.keys(schedule).includes(date)
    }

    function renderActiveItem() {
        if (!isDuringEvent(activeItem)) {
            const firstDay = '2024-10-07'
            setActiveItem(firstDay)
            setDayNumber(dayFull.indexOf(firstDay))
        }

        return (
            <ScheduleItems day={activeItem} />
        )
    }


	const moveDayNumber = (num) => {
        const newDayNumber = dayNumber + num
        if (newDayNumber >= 0 && newDayNumber < dayFull.length) {
            setDayNumber(newDayNumber)
            setActiveItem(dayFull[newDayNumber])
        }
    }

    return (
        <>
            <Meta title='SSI 2024 | Programação' />
            
            <ScheduleSection>
                <h1>Programação</h1>

                {/* Filtro Mobile */}
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

                {/* Filtro Desktop */}
                <DesktopSelectionContainer>
                    <div className='schedule-container'>
                        {dayFull.map((date, index) => (
                            <Link
                                key={date}
                                href='#'
                                onClick={() => {
                                    setActiveItem(date)
                                    setDayNumber(index)
                                }}
                            >
                                <DateStamp
                                    day={date.split('-')[2]}
                                    isActive={activeItem === date}
                                    showEmoji={true}
                                />
                            </Link>
                        ))}
                    </div>
                </DesktopSelectionContainer>

                {/* Barra de filtro Mobile */}
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

				{/* Barra de filtro Desktop */}
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


const ScheduleSection = styled.section`
    padding-block: 1.5rem;

    @media (min-width:600px) {
        padding-block: 7.5rem 3.75rem;

        h1 {
            width: 100%;
            max-width: 1328px; 
        }
    }
`

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

        box-shadow: 0 -0.0625rem 0 0 var(--color-neutral-secondary);
		border-bottom: 0.0625rem solid var(--color-neutral-secondary);
	}

	.filter-day-info {
		p {
			font: 700 1rem/1.25rem 'AT Aero Bold';
			text-align: center;
		}
	}
	
	@media(min-width:600px) {
		display: none;
	}
`
const DesktopBarFilterContainer = styled.div`
	display: none;

	@media(min-width:600px) {
		height: 5rem;
		display: flex;
		position: sticky;
		top: 0;
		z-index: 12;
		justify-content: space-between;
		align-items: center;
		background-color: var(--color-neutral);

		box-shadow: 0 -0.0625rem 0 0 var(--color-neutral-secondary);
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
	background-size: 202% 100%;
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

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
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

const MobileScheduleFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-block: 2rem 2.5rem;

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
        padding-block: 2rem 4rem;

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

    @media (min-width:600px) {
        gap: 3.6rem;
    }
`
