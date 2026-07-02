import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { formatTime } from '../../utils/format-time'
// components
import LectureItem from './LectureItem'

import DotsDarkImage from '../../public/images/schedule/details/bolinhas (mobile dark).svg'

const ScheduleItems = ({ schedule }) => {
    let reverseTimeItem = true;

    return (
        <>
            <ScheduleWrapper>
                <ul>
                    {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                    {schedule.map((talk, index) => {
                        
                        const finalKey = talk.id ? `id-${talk.id}` : `fallback-${index}`;
                        const breakEvent = talk.title == "Abertura" || talk.title == "Encerramento" || talk.title == "Intervalo" || talk.title == "Almoço" || talk.title == "Jantar" || !talk.speakers;
                        const openingClosingEvent = talk.title == "Abertura" || talk.title == "Encerramento";

                        reverseTimeItem = !reverseTimeItem;

                        return (
                            <li key={finalKey}>
                                <div className={`lecture-time-container ${reverseTimeItem ? 'reverse' : ''}`}>
                                    <h5>{formatTime(talk.start_time)}</h5>
                                    <Image src={DotsDarkImage} alt="Bolinhas Detalhe" width={215} height={28}/>
                                </div>
                                {breakEvent ?
                                    <div className={`event ${openingClosingEvent ? 'special-event' : ''}`}>
                                        <h6>{talk.title}</h6>
                                        {talk.end_time ?
                                            <p>{formatTime(talk.start_time)} - {formatTime(talk.end_time)}</p>
                                            :
                                            <p>{formatTime(talk.start_time)}</p>
                                        }
                                    </div>
                                :
                                    <LectureItem time={talk.start_time} event={talk} />
                                }
                            </li>
                        )
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
        gap: 1.5rem;
        padding-top: 1.5rem;

        li {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            list-style-type: none;
            
            .lecture-time-container {
                display: flex;
                padding: 0 0.5rem;
                align-items: center;
                justify-content: flex-start;
                gap: 0.625rem;
                align-self: stretch;

                h5 {
                    color: var(--content-badge-brand-purple-700, #9638FF);
                    font: 700 1.5rem/1.75rem 'AT Aero Bold';
                }

                img {
                    width: 100%;
                    height: 100%;
                    max-height: 1.75rem;
                    object-fit: contain;
                    object-position: left center;
                }
            }

            .reverse {
                flex-direction: row-reverse;

                img {
                    transform: rotate(180deg);
                }
            }
        }
    }

    .event {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        padding: 0.5rem 1.25rem;
        border-radius: 1.5rem;
        border: 1px solid var(--outline-neutrals-secondary, #999);

        h6 {
            font: 700 1rem/1.5rem 'AT Aero Bold';
        }

        p {
            font: 400 0.875rem/1.5rem 'AT Aero Bold';
        }
    }

    .special-event {
        background: var(--background-neutrals-inverse);

        h6, p {
            color: var(--content-neutrals-inverse);
        }
    }

    @media (min-width:560px) {
        /* .event {
            h6 {
                font: 700 1rem/2rem 'AT Aero Bold';
            }
            
            p {
                font: 700 1rem/2rem 'AT Aero Bold';
            }
        } */
    }

    @media (min-width:1024px) {

    }
`