import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Meta from '../src/infra/seo/Meta';
import semana from '../utils/semana';
import '../utils/slugify';
import filterTalks from '../utils/filterTalks';

// components
import DateStamp from '../src/components/features/schedule/DateStamp';
import ScheduleItems from '../src/components/features/schedule/ScheduleItems';
import EtecItinerary from '../src/components/features/schedule/EtecItinerary';
import saphira from '../services/saphira';

// TEMPORÁRIO
import { LinkedInLogo, InstagramLogo, YouTubeLogo } from '../src/components/ui/SocialMediaLogos';

import { eventDetails } from '../data/eventDetails';
import CalendarIcon from '../public/images/icons/calendar.svg';

const Schedule = () => {
    
    const { dayFull, dayOfSSI, weekDays } = eventDetails.logic;
    const currentDate = `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;
    const initialDayIndex = dayFull.indexOf(currentDate);
    const defaultDayIndex = initialDayIndex !== -1 ? initialDayIndex : 0;   
    const [activeItem, setActiveItem] = useState(currentDate);
    const [dayNumber, setDayNumber] = useState(defaultDayIndex)
    
    const [talks, setTalks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // Verifica se uma data específica faz parte dos dias em que o evento vai estar acontecendo.
    const isDuringEvent = (date) => {
        return dayFull.includes(date)
    }

    function renderActiveItem() {
        return (
            <ScheduleItems schedule={filterTalks(talks, activeItem)} />
        )
    }

	const moveDayNumber = (num) => {
        const newDayNumber = dayNumber + num
        if (newDayNumber >= 0 && newDayNumber < dayFull.length) {
            setDayNumber(newDayNumber)
            setActiveItem(dayFull[newDayNumber])
        }
    }

    const getTalks = async(date) => {
        setIsLoading(true)
        try{
            const { data } = await saphira.getTalks()
            if (data) setTalks(data);
        }
        catch(err){
            console.log("Houve um erro na requsição das palestras", err)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getTalks()
    }, [])

    // Fallback de segurança:
    // Este useEffect previne que a página fique vazia caso o usuário acesse o 
    // site antes ou depois da semana do evento. Se a data atual (activeItem) 
    // não for um dos dias oficiais do evento, ele força a exibição do primeiro dia.
    useEffect(() => {
    if (talks.length > 0 && !isDuringEvent(activeItem)) {
        const firstDay = dayFull[0]; 
        setActiveItem(firstDay);
        setDayNumber(0); 
    }
}, [talks, activeItem, dayFull]);

    const selectedWeekDay = weekDays[dayNumber] || weekDays[0];
    const shouldRenderEtecItinerary = selectedWeekDay === 'Segunda-feira' || selectedWeekDay === 'Terça-feira';

    return (
        <>
            <Meta title = 'Programação | Semana de Sistemas de Informação' 
            description = {`Confira a programação completa da SSI ${eventDetails.year}. Veja os dias e horários das palestras, painéis e atividades com os maiores nomes da tecnologia.`}
            keywords={`programação SSI ${eventDetails.year}, cronograma palestras, atividades semana tecnologia, horários SSI, eventos TI Brasil, agenda SSI, programação evento acadêmico, palestras e workshops`}
            />
            
            <ScheduleSection>
                <h1>Programação</h1>

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
                                    weekDay={weekDays[index]}             
                                    dateStr={dayOfSSI[index]}             
                                    isActive={activeItem === date}
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
							<p>{dayOfSSI[dayNumber] || dayOfSSI[0]}</p>
							<p>{weekDays[dayNumber] || weekDays[0]}</p>
						</div>
						<ButtonFilter disabled={dayNumber == dayFull.length - 1} className='right' onClick={() => moveDayNumber(1)}>
							<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
							</svg>
						</ButtonFilter>
					</div>
				</MobileBarFilterContainer>

                <GoogleCalendarContainer>
                    <a href={eventDetails.links.googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                        <p>Salvar no Google Agenda</p>
                        <Image src={CalendarIcon} alt="Ícone do Google Agenda" width={24} height={24} />
                    </a>
                </GoogleCalendarContainer>

                {shouldRenderEtecItinerary && <EtecItinerary />}

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
    background-color: var(--background-neutrals-primary);
    border-color: var(--outline-neutrals-secondary);
    color: var(--content-neutrals-primary);

    h1 {
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (min-width:600px) {
        padding-block: 3rem 2rem;
    }
`

const MobileBarFilterContainer = styled.div`
	position: sticky;
	top: 0;
	z-index: 12;
	background-color: var(--background-neutrals-primary);
    border-color: var(--outline-neutrals-secondary);
    color: var(--content-neutrals-primary);

	.filter-container {
		height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
        box-shadow: 0 -0.0625rem 0 0 var(--outline-neutrals-secondary);
		border-bottom: 0.0625rem solid var(--outline-neutrals-secondary);
	}

	.filter-day-info {
		p {
			font: 700 1rem/1.25rem 'AT Aero Bold';
			text-align: center;
		}
	}
	

	@media(min-width:801px) {
		display: none;
	}
`

const ButtonFilter = styled.button`
    background-color: var(--brand-primary);
    border-color: var(--outline-neutrals-secondary);
    color: var(--content-neutrals-primary);
	border: 0;
	display: flex;
	width: 3rem;
	height: 3rem;
	align-items: center;
	justify-content: center;
	background-size: 202% 100%;
	transition: 0.15s all ease-out;

	svg {
		path {
			fill: var(--content-neutrals-fixed-white);
		}
	}

	&:hover, &:focus-visible {
		svg {
			path {
				fill: var(--content-neutrals-inverse);
			}
		}
	}

    &:focus-visible {
        outline: 2px solid var(--background-neutrals-primary);
        outline-offset: -2px;
    }

	&.right {
		background-image: linear-gradient(
			to right,
			var(--background-neutrals-inverse) 50%,
			var(--brand-primary) 50%
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
			var(--background-neutrals-inverse) 50%,
			var(--brand-primary) 50%
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
		background-color: var(--background-neutrals-secondary);
        cursor: not-allowed;

		svg {
			path {
				fill: var(--background-neutrals-primary);
			}
		}
	}
`

const DesktopSelectionContainer = styled.div`
    display: none;
    background-color: var(--background-neutrals-primary);
    border-color: var(--outline-neutrals-secondary);
    color: var(--content-neutrals-primary);
    @media (min-width:801px) {
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
    background-color: var(--background-neutrals-primary);
    border-color: var(--outline-neutrals-secondary);
    color: var(--content-neutrals-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width:600px) {
        gap: 3.6rem;
    }
`

const GoogleCalendarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    a {
        display: flex;
        padding: 1rem 1.5rem;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-radius: 1rem;
        background: linear-gradient(90deg, var(--brand-purple-300), var(--brand-purple-400));
        margin: 1.5rem 0;
        border: none;
        color: inherit;
        text-decoration: none;

        p {
            font: 700 0.875rem/1.5rem 'AT Aero Bold';
            text-align: left;
        }
    }

    @media (min-width:801px) {
        justify-content: flex-start;

        a {
            width: 15.625rem;
            gap: 3rem;
            margin: 1.5rem 0 1.5rem 0.438rem;

            p {
                font: 700 1rem/1.5rem 'AT Aero Bold';
            }
        }
    }
`;