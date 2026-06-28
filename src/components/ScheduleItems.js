import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { formatTime } from '../../utils/format-time'
// components
import LectureItem from './LectureItem'

import DotsDarkImage from '../../public/images/schedule/details/bolinhas (mobile dark).svg'

const ScheduleItems = ({ schedule }) => {
    return (
        <>
            <ScheduleWrapper>
                <ul>
                    {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                    {schedule.map((talk, index) => {
                        
                        const finalKey = talk.id ? `id-${talk.id}` : `fallback-${index}`;

                        if (talk.title == "Abertura" || talk.title == "Encerramento" || talk.title == "Intervalo" || !talk.speakers) {
                            
                            return (
                                <li key={finalKey}>
                                    <div className={`lecture-time-container ${talk.title == "Intervalo" || !talk.speakers ? 'reverse' : ''}`}>
                                        <h5>{formatTime(talk.start_time)}</h5>
                                        <Image src={DotsDarkImage} alt="Bolinhas Detalhe" width={215} height={28}/>
                                    </div>
                                    <div className={`event ${talk.title == 'Abertura' || talk.title == 'Encerramento' ? 'special-event' : ''}`}>
                                        <h6>{talk.title}</h6>
                                        {talk.end_time ?
                                            <p>{formatTime(talk.start_time)} - {formatTime(talk.end_time)}</p>
                                            :
                                            <p>{formatTime(talk.start_time)}</p>
                                        }
                                    </div>
                                </li>
                            )
                        } else {
                            return (
                                <li key={finalKey}>
                                    <div className='lecture-time-container'>
                                        <h5>{formatTime(talk.start_time)}</h5>
                                        <Image src={DotsDarkImage} alt="Bolinhas Detalhe" width={215} height={28}/>
                                    </div>
                                    <LectureItem time={talk.start_time} event={talk} />
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
        gap: 1.5rem;
        padding: 1.5rem 0;

        li {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            list-style-type: none;

            &:last-child {
                border-bottom: none;
            }
            
            .lecture-time-container {
                display: flex;
                padding: 0 0.5rem;
                align-items: center;
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
                    object-fit: cover;
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

    div.event {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background: var(--background-neutrals-tertiary);
        padding: 0.75rem 1.5rem;

        p {
            font: 400 0.875rem/1.5rem 'AT Aero Bold';
        }
    }

    div.special-event {
        background: var(--background-neutrals-inverse);

        h6, p {
            color: var(--content-neutrals-inverse);
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