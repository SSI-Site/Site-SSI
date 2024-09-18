import React from 'react'
import styled from 'styled-components'
import { formatTime } from '../../utils/format-time'

// assets
import schedule from '../../data/scheduleInformation'

// components
import LectureItem from './LectureItem'


const ScheduleItems = ({ day }) => {

    return (
        <>
            <ScheduleWrapper>
                <ul>
                    {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                    {Object.entries(schedule[day] || {}).map(([time, event], key) => {
                        if (!event.speakers) {
                            return (
                                <li key={key}>
                                    <h5>{formatTime(time)}</h5>
                                    <div className="event">
                                        <h6>{event.title}</h6>
                                        {event.endTime ?
                                            <p>{formatTime(time)} - {formatTime(event.endTime)}</p>
                                            :
                                            <p>{formatTime(time)}</p>
                                        }
                                    </div>
                                </li>
                            )
                        } else {
                            return (
                                <li key={key}>
                                    <h5 className='vertical-time'>{formatTime(time)}</h5>
                                    <LectureItem time={time} event={event} />
                                </li>
                            )
                        }
                    })}
                </ul>
            </ScheduleWrapper>
        </>
    )
}

export default ScheduleItems

const ScheduleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;

    > ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            list-style-type: none;
            padding-block: 1rem;
            border-bottom: 1px solid var(--color-background-neutrals-tertiary);

            h5 {
                color: white;
                opacity: 0.2;
            }
        }
    }

    div.event {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background: var(--color-background-neutrals-tertiary);
        padding: 0.75rem 1.5rem;

        p {
            font: 400 0.875rem/1.5rem 'AT Aero Bold';
        }
    }

    @media (min-width:560px) {
        gap: 3rem;

        div.event {
            justify-content: flex-start;

            p {
                font: 400 1rem/1.5rem 'AT Aero Bold';
            }
        }
    }

    @media (min-width:1024px) {

        > ul li {
            flex-direction: row;
            padding-block: 2rem;

            h5 {
                opacity: 1;
                font: 700 1rem/1.5rem 'AT Aero Bold';
                width: 6.5rem;
            }

            .vertical-time {
                opacity: 0.2;
                font: 700 4rem/4.5rem 'AT Aero Bold';
                writing-mode: vertical-rl;
                transform: rotate(180deg);
                text-align: end;
            }
        }

        div.event {
            padding: 0.75rem 3.5rem;
        }
    }
`