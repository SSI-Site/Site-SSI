import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// components
import UserWatchedLecture from './UserWatchedLecture';

const LecturesList = ({ lectures }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    const daysOfWeek = [
        { label: 'Segunda-feira', value: '2024-10-07' },
        { label: 'Terça-feira', value: '2024-10-08' },
        { label: 'Quarta-feira', value: '2024-10-09' },
        { label: 'Quinta-feira', value: '2024-10-10' },
        { label: 'Sexta-feira', value: '2024-10-11' }
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

    const getDayFromDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    const sortLecturesByTime = (lecturesList) => {
        return lecturesList.sort((a, b) => new Date(a.date_time) - new Date(b.date_time));
    };

    const filteredLectures = selectedDay
        ? lectures.filter(lecture => getDayFromDateTime(lecture.date_time) === selectedDay)
        : [];

    const sortedLectures = sortLecturesByTime(filteredLectures);

    return (
        <LecturesListWrapper>
            <div className='filter-container'>
                <p>Filtre por dia:</p>
                <div>
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
                            begin={lecture.date_time}
                            watchMode={lecture.online ? 'online' : 'presential'}
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
    align-items: center;
    justify-content: center;

    .filter-container {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        p {
            font: 700 1rem/1.5rem 'AT Aero Bold';
            width: 100%;
        }

        > div {
            display: flex;
            flex-flow: wrap;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
    }

    .lecture-list-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-flow: wrap; 
        gap: 1rem;

        @media (min-width: 840px) {
            gap: 2rem;
        }
    }
`;


const FilterItem = styled.div`
    cursor: pointer;
    flex-shrink: 0;
    scroll-snap-align: center;
    width: 9.75rem;

    ${props => props.$active == false && css`
        > div {
            background-image: linear-gradient(var(--color-primary), var(--color-primary));
        }
    `}

    ${props => props.$active == true && css`
        > div {
            background-color: var(--color-primary); 
            background-image: linear-gradient(to right, white 50%, white 50%);
        }
    `}

    @media (min-width: 840px) {
        width: 12rem;

        > div:hover, > div:focus-visible {
            background-position-x: 100%;    
        }
        
        ${props => props.$active == true && css`
            > div:hover, > div:focus-visible {
                color: var(--color-primary);
            }
        `}
    }
`

const DayStamp = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--color-neutral-800);
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 100ms;

    background-size: 200%;
    background-position-x: 200%;
    background-repeat: no-repeat;

    p {
        font: 700 1rem/1.25rem 'AT Aero Bold';
        text-align: left;
    }
`