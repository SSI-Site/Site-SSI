import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { formatTime } from '../../utils/format-time'
// components
import LectureItem from './LectureItem'

import DotsDarkImage from '../../public/images/schedule/details/bolinhas_mobile_dark.svg'
import DotsLightImage from '../../public/images/schedule/details/bolinhas_mobile_light.svg'
import DotsDarkImageDesktop from '../../public/images/schedule/details/bolinhas_desktop_dark.svg'
import DotsLightImageDesktop from '../../public/images/schedule/details/bolinhas_desktop_light.svg'

const ScheduleItems = ({ schedule }) => {
    // Variável para ficar alternando o lado das bolinhas e texto de horário na versão para celular
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
                                <div className={`lecture-time-container${reverseTimeItem ? ' reverse' : ''}`}>
                                    <h3>
                                        <time dateTime={talk.start_time}>{formatTime(talk.start_time)}</time>
                                    </h3>
                                    <picture aria-hidden="true">
                                        <source srcSet={DotsLightImageDesktop} media='(min-width: 600px) and (prefers-color-scheme: light)'/>
                                        <source srcSet={DotsDarkImageDesktop} media='(min-width: 600px) and (prefers-color-scheme: dark)'/>
                                        <source srcSet={DotsLightImage} media='(prefers-color-scheme: light)'/>
                                        <Image src={DotsDarkImage} fill alt="Decoração"/>
                                    </picture>
                                    <h3 aria-hidden="true">
                                        <time dateTime={talk.start_time}>{formatTime(talk.start_time)}</time>
                                    </h3>
                                </div>
                                {breakEvent ?
                                    <div className={`event${openingClosingEvent ? ' special-event' : ''}`}>
                                        <h4>{talk.title}</h4>
                                        {talk.end_time ?
                                            <p>
                                                <time dateTime={talk.start_time}>{formatTime(talk.start_time)}</time>
                                                {" - "}
                                                <time dateTime={talk.end_time}>{formatTime(talk.end_time)}</time>
                                            </p>
                                            :
                                            <p>
                                                <time dateTime={talk.start_time}>{formatTime(talk.start_time)}</time>
                                            </p>
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

                h3 {
                    color: var(--brand-purple-500, #9638FF);
                    font: 700 1.5rem/1.75rem 'AT Aero Bold';
                    
                    @media (prefers-color-scheme: light) {
                        color: var(--brand-purple-200, #3E0672);
                    }
                }

                /* Segundo texto de horário, mostrado apenas em versão para computador */
                h3:last-child {
                    display: none;
                }

                picture {
                    position: relative;
                    display: block;
                    width: 100%;
                    height: 1.75rem;
                }

                img {
                    object-fit: contain;
                    object-position: left center;
                }
            }

            // Invertendo bolinhas e texto de horário
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
        border-radius: 2rem;
        border: 1px solid var(--outline-neutrals-secondary, #999);

        h4 {
            font: 700 1rem/1.5rem 'AT Aero Bold';
        }

        p {
            font: 400 0.875rem/1.5rem 'AT Aero Bold';
        }
    }

    .special-event {
        background: var(--background-neutrals-inverse);

        h4, p {
            color: var(--content-neutrals-inverse);
        }
    }

    @media (min-width:600px) {
        > ul {
            li {
                .lecture-time-container {
                    justify-content: space-between;

                    // Alterando cores dos textos de horários das bolinhas
                    h3:first-child {
                        color: var(--brand-purple-200, #D0ACFF);

                        @media (prefers-color-scheme: light) {
                            color: var(--brand-purple-700, #9638FF);
                        }
                    }

                    /* Segundo texto de horário, mostrado apenas em versão para computador */
                    h3:last-child {
                        color: var(--brand-purple-400, #A85FFF);
                        display: block;

                        @media (prefers-color-scheme: light) {
                            color: var(--brand-purple-300, #510698);
                        }
                    }

                    picture {
                        width: 100%;
                        margin-top: 0.125rem;
                        align-items: center;
                        justify-content: center;
                    }

                    img {
                        object-position: center;
                    }
                }
                /* Desabilitando a inversão dos textos de horário para essa versão (600px) */
                .reverse {
                    flex-direction: row;

                    img {
                        transform: rotate(0deg);
                    }
                }
            }
        }
    }

    @media (min-width:800px) {
        > ul {
            gap: 2rem;
            padding-top: 2rem;
            
            li {
                gap: 2rem;

                .lecture-time-container {
                    h3 {
                        font: 700 1.5rem/1.75rem 'AT Aero Bold';
                    }
                }
            }
        }

        .event {
            padding: 0.75rem 1.5rem;
            border: 2px solid transparent;
            background: var(--border-gradient-primary-dark);

            @media (prefers-color-scheme: light) {
                background: var(--border-gradient-primary-light);
            }

            h4 {
                font: 700 1.375rem/1.5rem 'AT Aero Bold';
            }

            p {
                font: 700 1.375rem/1.5rem 'AT Aero Bold';
            }
        }

        .special-event {
            background: var(--background-neutrals-inverse);

            h4, p {
                color: var(--content-neutrals-inverse);
            }
        }
    }

    @media (min-width:1200px) {
        > ul {
            li {
                .lecture-time-container {
                    h3 {
                        font: 700 1.75rem/1.75rem 'AT Aero Bold';
                    }
                }
            }
        }

        .event {
            padding: 0.875rem 2rem;
            border: 3px solid transparent;

            h4 {
                font: 700 1.5rem/1.5rem 'AT Aero Bold';
            }

            p {
                font: 700 1.5rem/1.5rem 'AT Aero Bold';
            }
        }
    }
`