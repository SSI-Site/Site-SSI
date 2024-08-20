import React from 'react'
import styled from 'styled-components'

// assets
import schedule from '../../data/scheduleInformation'
import LectureItem from './LectureItem'

const ScheduleShift = ({ day }) => {

  return (
    <>
        <ShiftWrapper>
            <div className="shift-name">
                <h5>{day}</h5>
                <div></div>
            </div>
            <ul>
                {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                {Object.entries(schedule[day]).map(([time, event], key) => {
                    if (!event.speakers) {
                    return (
                        <li key={key}>
                            <div className="event">
                                <h5>{time}</h5>
                                <div>
                                    <h5>{event.title}</h5>
                                </div>
                            </div>
                        </li>
                    )
                    } else {
                    return (
                        <li key={key}>
                            <LectureItem time={time} event={event} />
                        </li>
                    )
                    }
                })}
            </ul>
        </ShiftWrapper>
    </>
  )
}

export default ScheduleShift

const ShiftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%;

    > ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        li {
            width: 100%;
            list-style-type: none;
        }
    }

    .shift-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > div {
            height: 4px;
            background-color: var(--color-primary-700);
            width: 100%;
            border-radius: 2px;
            margin: 0;
            padding: 0;
        }
    }

    div.event {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: stretch;
        justify-content: center;
        background: var(--color-primary);
        padding: 36px 24px;
        gap: 16px;

        /* min-height: 148px; */
        border-radius: 8px;

        flex: none;
        order: 0;
        flex-grow: 0;
    }

    @media (min-width:560px) {
        gap: 48px;

        > ul {
            gap: 1.5rem;
        }

        .shift-name {
            width: 100%;

            > h5 {
                font: 400 2rem/2.5rem 'AT Aero Bold';
                align-self: flex-start;
            }

            > div {
                display: none;
            }
        }

        div.event {
            gap: 3.5rem;
            padding: 48px 56px;
            justify-content: flex-start;
        }
    }

  @media (min-width:1024px) {
        .shift-name {
            > h5 {
                font: 400 2rem/2.5rem 'AT Aero Bold';
                font: 400 2.5rem/3rem 'AT Aero Bold';
            }
        }

        div.event {
            gap: 3rem;

            h5 {
                font: 400 2.5rem/3rem 'AT Aero Bold';
                font: 400 2rem/2.5rem 'AT Aero Bold';
            }
        }
    }
`