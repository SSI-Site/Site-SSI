import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// components
import UserWatchedLecture from './UserWatchedLecture';

const LecturesList = ({ lectures }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const daysOfWeek = [
        { label: 'Segunda-feira', value: '2025-08-18' },
        { label: 'Terça-feira', value: '2025-08-19' },
        { label: 'Quarta-feira', value: '2025-08-20' },
        { label: 'Quinta-feira', value: '2025-08-21' },
        { label: 'Sexta-feira', value: '2025-08-22' }
    ];

    useEffect(() => {
        const today = new Date();
        const formattedToday = today.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).split('/').reverse().join('-');

        const isEventDay = daysOfWeek.find(day => day.value === formattedToday);
        setSelectedDay(isEventDay ? isEventDay.value : daysOfWeek[0].value);
    }, []);

    const selectedDayIndex = Math.max(daysOfWeek.findIndex(day => day.value === selectedDay), 0);

    const moveDayNumber = (direction) => {
        const nextIndex = selectedDayIndex + direction;

        if (nextIndex >= 0 && nextIndex < daysOfWeek.length) {
            setSelectedDay(daysOfWeek[nextIndex].value);
        }
    };

    const getDayFromDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    const sortLecturesByTime = (lecturesList) => {
        return [...lecturesList].sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
    };

    const filteredLectures = selectedDay
        ? lectures.filter(lecture => getDayFromDateTime(lecture.start_time) === selectedDay)
        : [];

    const sortedLectures = sortLecturesByTime(filteredLectures);

    return (
        <LecturesListWrapper>
            <div className='filter-container-mobile'>
                <ButtonFilter disabled={selectedDayIndex == 0} className='left' onClick={() => moveDayNumber(-1)}>
                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
                    </svg>
                </ButtonFilter>
                <div className='filter-day-info'>
                    <p>{daysOfWeek[selectedDayIndex]?.label || daysOfWeek[0].label}</p>
                </div>
                <ButtonFilter disabled={selectedDayIndex == daysOfWeek.length - 1} className='right' onClick={() => moveDayNumber(1)}>
                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
                    </svg>
                </ButtonFilter>
            </div>

            <div className='filter-container-desktop'>
                {daysOfWeek.map((day) => (
                    <FilterItem
                        key={day.value}
                        $active={selectedDay === day.value}
                        onClick={() => setSelectedDay(day.value)}
                    >
                        <DayStamp>
                            {day.label}
                        </DayStamp>
                    </FilterItem>
                ))}
            </div>

            <div className='lecture-list-container'>
                    {sortedLectures.length === 0 && (
                        <p className="no-presences-message">
                            Você ainda não tem nenhuma presença registrada neste dia...
                        </p>
                    )}
                    {sortedLectures.map((lecture, key) => (
                        <UserWatchedLecture
                            key={key}
                            title={lecture.talk_title}
                            start_time={lecture.start_time}
                            end_time = {lecture.end_time}
                        />
                    ))}
            </div>
        </LecturesListWrapper>
    );
};

export default LecturesList;


const LecturesListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    .filter-container-mobile {
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        border-color: var(--outline-neutrals-secondary);
        border-radius: 0.75rem;
        color: var(--content-neutrals-primary);
        border: 1px solid var(--outline-neutrals-secondary);

        .filter-day-info {
            p {
                font: 700 1rem/1.25rem 'AT Aero Bold';
                text-align: center;
            }
        }
        
        @media(min-width:1024px) {
            display: none;
        }
    }

    .filter-container-desktop {
        display: none;
        flex-direction: row;
        gap: 0.5rem;

        @media (min-width: 1024px) {
            display: flex;
        }
    }

    .lecture-list-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 0.75rem;

        background: color-mix(in srgb, var(--background-neutrals-nav) 75%, transparent);
        box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25); /* era 2px e 4px para rem */
        backdrop-filter: blur(6px);

        @media (min-width: 1024px) {
            padding: 1rem;
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
        border-radius: 0.5rem 0.75rem 0.75rem 0.5rem;
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
		border-radius: 0.75rem 0.5rem 0.5rem 0.75rem;
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


const FilterItem = styled.div`
    cursor: pointer;
    flex-shrink: 0;
    scroll-snap-align: center;
    width: 9.75rem;
    font: 700 .85rem/1.5rem 'At Aero Bold';

    > div:hover, > div:focus-visible {
        background-position-x: 100%;    
    }

    ${props => props.$active == true && css`
        > div:hover, > div:focus-visible {
            color: var(--content-neutrals-inverse);
        }
    `}

    ${props => props.$active == false && css`
        > div {
            background-image: linear-gradient(var(--brand-primary), var(--brand-primary));
        }
    `}

    ${props => props.$active == true && css`
        > div {
            background-color: var(--brand-primary); 
            background-image: linear-gradient(to right, var(--background-neutrals-inverse) 50%, var(--background-neutrals-inverse) 50%);
        }
    `}

    @media (min-width:840px) {
        width: 12rem;
        font: 700 1rem/1.5rem 'At Aero Bold';
    }
`

const DayStamp = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--background-neutrals-secondary);
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 0.15s;

    background-size: 200%;
    background-position-x: 200%;
    background-repeat: no-repeat;

    p {
        font: 700 1rem/1.25rem 'AT Aero Bold';
        text-align: left;
    }
`