import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    const [desktopShow, setDesktopShow] = useState(false);
    
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
    const shouldRenderEtecItinerary = selectedWeekDay === 'Terça-feira' || selectedWeekDay === 'Quinta-feira';

    // Observa se o filtro de dias (desktop) está visível na tela. Se não estiver, define a variável para exibir a barra de filtro fixed.
    useEffect(() => {
        const elemento = document.querySelector(".desktop-selection");
        if (!elemento) return;

        const observer = new IntersectionObserver(([entry]) => {
            setDesktopShow(!entry.isIntersecting);
        },{ threshold: 0 });

        observer.observe(elemento);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Meta title = 'Programação | Semana de Sistemas de Informação' 
            description = {`Confira a programação completa da SSI ${eventDetails.year}. Veja os dias e horários das palestras, painéis e atividades com os maiores nomes da tecnologia.`}
            keywords={`programação SSI ${eventDetails.year}, cronograma palestras, atividades semana tecnologia, horários SSI, eventos TI Brasil, agenda SSI, programação evento acadêmico, palestras e workshops`}
            />
            
            <ScheduleSection>
                <h1>Programação</h1>

                {/* Filtro Desktop */}
                <DesktopSelectionContainer className='desktop-selection'>
                    <div className='schedule-container'>
                        {dayFull.map((date, index) => (
                            <Link
                                key={date}
                                href='#'
                                onClick={() => {
                                    setActiveItem(date)
                                    setDayNumber(index)
                                }}
                                className="Link"
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
                <StickyBackground/>
				<MobileBarFilterContainer $desktopShow={desktopShow}>
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
                        <p>Salvar no  <br/> Google Agenda</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 4H16V2H18V4H19C19.55 4 20.0204 4.19622 20.4121 4.58789C20.8038 4.97956 21 5.45 21 6V20C21 20.55 20.8038 21.0204 20.4121 21.4121C20.0204 21.8038 19.55 22 19 22H5C4.45 22 3.97956 21.8038 3.58789 21.4121C3.19622 21.0204 3 20.55 3 20V6C3 5.45 3.19622 4.97956 3.58789 4.58789C3.97956 4.19622 4.45 4 5 4H6V2H8V4ZM5 20H19V10H5V20ZM8 16C8.28333 16 8.52122 16.0954 8.71289 16.2871C8.90456 16.4788 9 16.7167 9 17C9 17.2833 8.90456 17.5212 8.71289 17.7129C8.52122 17.9046 8.28333 18 8 18C7.71667 18 7.47878 17.9046 7.28711 17.7129C7.09544 17.5212 7 17.2833 7 17C7 16.7167 7.09544 16.4788 7.28711 16.2871C7.47878 16.0954 7.71667 16 8 16ZM12 16C12.2833 16 12.5212 16.0954 12.7129 16.2871C12.9046 16.4788 13 16.7167 13 17C13 17.2833 12.9046 17.5212 12.7129 17.7129C12.5212 17.9046 12.2833 18 12 18C11.7167 18 11.4788 17.9046 11.2871 17.7129C11.0954 17.5212 11 17.2833 11 17C11 16.7167 11.0954 16.4788 11.2871 16.2871C11.4788 16.0954 11.7167 16 12 16ZM16 16C16.2833 16 16.5212 16.0954 16.7129 16.2871C16.9046 16.4788 17 16.7167 17 17C17 17.2833 16.9046 17.5212 16.7129 17.7129C16.5212 17.9046 16.2833 18 16 18C15.7167 18 15.4788 17.9046 15.2871 17.7129C15.0954 17.5212 15 17.2833 15 17C15 16.7167 15.0954 16.4788 15.2871 16.2871C15.4788 16.0954 15.7167 16 16 16ZM8 12C8.28333 12 8.52122 12.0954 8.71289 12.2871C8.90456 12.4788 9 12.7167 9 13C9 13.2833 8.90456 13.5212 8.71289 13.7129C8.52122 13.9046 8.28333 14 8 14C7.71667 14 7.47878 13.9046 7.28711 13.7129C7.09544 13.5212 7 13.2833 7 13C7 12.7167 7.09544 12.4788 7.28711 12.2871C7.47878 12.0954 7.71667 12 8 12ZM12 12C12.2833 12 12.5212 12.0954 12.7129 12.2871C12.9046 12.4788 13 12.7167 13 13C13 13.2833 12.9046 13.5212 12.7129 13.7129C12.5212 13.9046 12.2833 14 12 14C11.7167 14 11.4788 13.9046 11.2871 13.7129C11.0954 13.5212 11 13.2833 11 13C11 12.7167 11.0954 12.4788 11.2871 12.2871C11.4788 12.0954 11.7167 12 12 12ZM16 12C16.2833 12 16.5212 12.0954 16.7129 12.2871C16.9046 12.4788 17 12.7167 17 13C17 13.2833 16.9046 13.5212 16.7129 13.7129C16.5212 13.9046 16.2833 14 16 14C15.7167 14 15.4788 13.9046 15.2871 13.7129C15.0954 13.5212 15 13.2833 15 13C15 12.7167 15.0954 12.4788 15.2871 12.2871C15.4788 12.0954 15.7167 12 16 12Z"/>
                        </svg>
                    </a>
                </GoogleCalendarContainer>

                {shouldRenderEtecItinerary && <EtecItinerary weekDay={selectedWeekDay} />}

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
        margin-bottom: 1.5rem;
    }

    @media (min-width:600px) {
        padding-block: 3rem 2rem;
    }
`

// Cria um espaço que esconde o fundo da MobileBarFilterContainer (menos a navbar do site)
const StickyBackground = styled.div`
    position: sticky;
    top: -1px;
    z-index: 10;
    color: var(--content-neutrals-primary);
    background-color: var(--background-neutrals-primary);
    height: 1.175rem;
    width: calc(100% + 10px);
`

const MobileBarFilterContainer = styled.div`
	position: sticky;
	top: 0.5rem;
	z-index: 13;
    color: var(--content-neutrals-primary);

	.filter-container {
		height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
        border-radius: 0.75rem;
        border: 1px solid var(--outline-neutrals-secondary);
        padding: 1rem;
        background-color: var(--background-neutrals-primary);
	}

	.filter-day-info {
		p {
			font: 700 1rem/1.5rem 'AT Aero Bold';
			text-align: center;
		}
	}

    @media (min-width:600px) {
        .filter-day-info {
            p {
                font: 700 1.125rem/1.5rem 'AT Aero Bold';
            }
        }
    }

	@media (min-width:801px) {
        visibility: ${props => props.$desktopShow ? 'visible' : 'hidden'};
        top: ${props => props.$desktopShow ? '0.5rem' : '-7rem'};
        position: fixed;
        left: 1rem;
        right: 1rem;
        width: auto;
        margin: auto;
        transition: top 0.2s ease, visibility 0.3s 0s;

        .filter-container {
            height: 5.4rem;
        }
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
		background-position: right -1px center;
        border-radius: 0.375rem 0.75rem 0.75rem 0.375rem;

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
		background-position: left 0px center;
        border-radius: 0.75rem 0.375rem 0.375rem 0.75rem;

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

    @media (prefers-color-scheme: light) {
        background-color: var(--brand-purple-700);

        &.left {
            background-image: linear-gradient(
                to left,
                var(--background-neutrals-inverse) 50%,
                var(--brand-purple-700) 50%
			);
        }

        &.right {  
            background-image: linear-gradient(
                to right,
                var(--background-neutrals-inverse) 50%,
                var(--brand-purple-700) 50%
            );
        }
    }
`

const DesktopSelectionContainer = styled.div`
    display: none;
    background-color: var(--background-neutrals-primary);
    border-color: var(--outline-neutrals-secondary);
    color: var(--content-neutrals-primary);
    margin-top: 1rem;

    @media (min-width:801px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        .schedule-container {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 1rem;
            width: 100%;
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
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;

    a {
        display: flex;
        padding: 1rem 1.5rem;
        justify-content: space-between;
        align-items: center;
        border-radius: 1rem;
        height: fit-content;
        background: linear-gradient(90deg, var(--brand-purple-300), var(--brand-purple-400));
        border: none;
        color: inherit;
        text-decoration: none;
        box-shadow: 0 0 0px 1px transparent;
        transition: 0.5s all ease;
        // Determina o espaço (quantos itens) vai ocupar
        grid-column: span 5;

        p {
            font: 700 0.875rem/1.5rem 'AT Aero Bold';
            text-align: left;

            br {
                display: none;
            }
        }

        path {
            fill: var(--content-neutrals-primary);
        }
    }

    a:hover, a:focus-visible {
        box-shadow: 0 0 0px 1px var(--brand-purple-200);
    }

    @media (min-width: 801px) {
        justify-content: flex-start;

        a {
            margin: 0.5rem 0 1rem 0rem;
            // Determina o espaço (quantos itens) vai ocupar
            grid-column: span 2;

            p {
                font: 700 1rem/1.5rem 'AT Aero Bold';

                br {
                    display: block;
                }
            }
        }

        svg {
            width: 2rem;
            height: 2rem;
        }
    }

    @media (min-width:1200px) {
        a {
            // Determina o espaço (quantos itens) vai ocupar
            grid-column: span 1;
        }
    }

    @media (prefers-color-scheme: light) {
        a {
            background: linear-gradient(90deg, var(--brand-purple-900), var(--brand-purple-800));
        }
    }
`;