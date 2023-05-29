import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

// components
import ScheduleInformation from './ScheduleInformation';

// assets
import PlusCircle from '../../public/images/icons/plus-circle.svg';
import MinusCircle from '../../public/images/icons/minus-circle.svg';
import shifts from '../../data/shiftInformation';

const scheduleShift = ({day , shift}) => {

    const [show, setShow] = useState([]);

    const handleShowLecture = time => {
        const index = show.indexOf(time);

        if (index < 0) {
            setShow(prev => [...prev, time]);
        } else {
            setShow(prev => prev.filter((e, i) => i !== index));
        }
    }

    return ( 
        <>
            <ShiftWrapper>
                <h5>{shift}</h5>
                <ul>
                    {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                    {Object.entries(shifts[day][shift]).map(([time , event]) => {
                    if(!event.speakers){
                        return (
                            <div className='event'>
                                <h5>{time}</h5>
                                <div>
                                    <h5>{event.title}</h5>
                                </div>
                            </div>
                        )
                    }else{
                        return (
                            <div className='lecture' onClick={() => handleShowLecture(time)}>
                                <div className='lecture-overview'>
                                    <h5>{time}</h5>
                                    <div>
                                        <p>{event.title}</p>
                                        {/* Itera dentro dos palestrantes para escrever o nome de cada um */}
                                        <ul>
                                            <li>
                                                <span>
                                                {event['speakers'].map((s, index) => {
                                                    return(
                                                        <React.Fragment key={index}>
                                                            {s['anchor'] ? 
                                                                (<a target='_blank' href={s['anchor']}>{s['name']}</a>)
                                                                : 
                                                                s['name']
                                                            }
                                                            {index < event['speakers'].length - 2 ? ', ' : index == event['speakers'].length - 2 && ' e '}
                                                            {index == event['speakers'].length - 1 && '.'}
                                                        </React.Fragment>
                                                    )
                                                })}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    {show.includes(time) ?
                                        <div className='open-close-sign-desktop'>
                                            <img src={MinusCircle}></img>
                                            <p>Ver menos</p>
                                        </div>
                                    :
                                        <div className='open-close-sign-desktop'>
                                            <img src={PlusCircle}></img>
                                            <p>Ver mais</p>
                                        </div>
                                    }
                                </div>
                                <div className={`lecture-content ${show.includes(time) && 'show-content'}`}>
                                    <ScheduleInformation
                                        speakerPicture={event['image']}
                                        // speakerName={ }
                                        title={event['title']}
                                        overview={event['description']}
                                    />
                                </div>
                                {show.includes(time) ?
                                    <div className='open-close-sign-mobile'>
                                        <img src={MinusCircle}></img>
                                        <p>Fechar</p>
                                    </div>
                                :
                                    <div className='open-close-sign-mobile'>
                                        <img src={PlusCircle}></img>
                                        <p>Ver mais</p>
                                    </div>
                                }
                            </div>
                        )
                    }
                    })}
                </ul>
            </ShiftWrapper>
        </>
     )
}
 
export default scheduleShift;

const ShiftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width:100%;

    > ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    div.event, div.lecture{
        display: flex;
        align-items: center;
        padding: 36px 24px;
        gap: 16px;

        min-height: 148px;
        border-radius: 8px;

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    div.event{
        flex-direction: row;
        background: var(--color-primary);
    }

    div.lecture{
        background: var(--color-neutral);
        flex-direction: column;
        gap: 16px;

        .lecture-overview{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;

            > div{
                display:flex;
                flex-direction:column;
            
                p{
                    font-family: 'Space_Mono_Bold';
                    font-weight: 400;
                    word-break:break-word;
                }
                
                ul{
                    display:flex;
                    flex-direction:column;
                    
                    margin-top: 8px;
                    
                    li{
                        display:block;
                    }
                    
                    span{
                        font: 400 0.875rem/1.125rem 'Space_Mono_Bold';
                        color: var(--color-primary-700);
                    }
                    
                    a{
                        text-decoration: underline;
                        font: inherit;
                        color: inherit;
                        transition: .2s;
                        &:hover{
                            color: var(--color-primary-600);
                        }
                        &:active{
                            color: var(--color-primary-500);
                        }
                    }
                }
            }

            .open-close-sign-desktop{
                margin-left: auto;
                display: none;
                flex-direction: row;
                white-space: nowrap;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;

                img{
                    width: 44px;
                }

                p{
                    font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
                }
            }
        }

        .open-close-sign-mobile{
            display: flex;
            flex-direction: row;
            white-space: nowrap;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;

            img{
                width: 24px;
            }

            p{
                font: 400 1rem/1.25rem 'Space_Mono_Bold';
            }
        }

        &:hover{
            background-color: var(--color-neutral-800);
            cursor: pointer;
        }

        &:active{
            background-color: var(--color-neutral-700);
        }
    }

    .lecture-content {
        display: none;
        margin: 1em;
    }

    .lecture-content.show-content {
        display: block;
    }


    @media (min-width:560px) {
        gap: 48px;

        > h5{
            font: 400 2rem/2.5rem 'Space_Mono_Bold';
            align-self: flex-start;
        }

        div.lecture, div.event{
            padding: 48px 56px;

            div.lecture-overview{
                gap: 3.5rem;

                > div{
                    p{
                        font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
                    }
                    
                    span{
                        font: 400 1rem/1.25rem 'Space_Mono_Bold';
                        
                    }
                }
            }
        }
    }

    @media(min-width: 1024px){
        > h5{
            font: 400 2.5rem/3rem 'Space_Mono_Bold';
        }
        
        div.lecture, div.event{

            div.lecture-overview{
                gap: 6.75rem;

                > div{
                    ul{
                        flex-direction:row;
                    }

                    p{
                        font: 400 2rem/2.5rem 'Space_Mono_Bold';
                    }
                }

                .open-close-sign-desktop{
                    display: flex;
                }
            }
                
            h5{
                font: 400 2rem/2.5rem 'Space_Mono_Bold';
            }

            .open-close-sign-mobile{
                display: none;
            }
        }
    }
`