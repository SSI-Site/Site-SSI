import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import ScheduleInformation from './ScheduleInformation';

// assets
import PlusCircle from '../../public/images/icons/plus-circle.svg';
import MinusCircle from '../../public/images/icons/minus-circle.svg';

const LectureItem = ({ time, event,  }) => {

    const [show, setShow] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowLecture = time => {
        setIsExpanded(!isExpanded);
        const index = show.indexOf(time);

        if (index < 0) {
            setShow(prev => [...prev, time]);
        } else {
            setShow(prev => prev.filter((e, i) => i !== index));
        }
    }

    return ( 
        <>
            <LectureWrapper className='lecture' onClick={() => handleShowLecture(time)} isExpanded={isExpanded}>
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
                                            {s['linkedin'] ? 
                                                (<a target='_blank' href={s['linkedin']}>{s['name']}</a>)
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
                        lecture={event}
                        startTime={time}
                        lecturePicture={event['image']}
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
            </LectureWrapper>
        </>
     )
}
 
export default LectureItem;

const LectureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    background-color: ${props => props.isExpanded==true ? `var(--color-neutral-800)` : `var(--color-neutral)`};
    padding: 36px 24px;
    gap: 16px;

    min-height: 148px;
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 0;

    .lecture-overview {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;

        > div {
            display:flex;
            flex-direction:column;
        
            p {
                font-family: 'Space_Mono_Bold';
                font-weight: 400;
                word-break:break-word;
            }
            
            ul {
                display:flex;
                flex-direction:column;
                
                margin-top: 8px;
                
                li {
                    display:block;
                }
                
                span {
                    font: 400 0.875rem/1.125rem 'Space_Mono_Bold';
                    color: var(--color-primary-700);
                }
                
                a {
                    text-decoration: underline;
                    font: inherit;
                    color: inherit;
                    transition: .2s;

                    &:hover {
                        color: var(--color-primary-600);
                    }
                    &:active {
                        color: var(--color-primary-500);
                    }
                }
            }
        }

        .open-close-sign-desktop {
            margin-left: auto;
            display: none;
            flex-direction: row;
            white-space: nowrap;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            img {
                width: 44px;
            }

            p {
                font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
            }
        }
    }

    .open-close-sign-mobile {
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        img {
            width: 24px;
        }

        p {
            font: 400 1rem/1.25rem 'Space_Mono_Bold';
        }
    }

    .lecture-content {
        display: none;
        margin: 1em;
    }

    .lecture-content.show-content {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
    }


    @media (min-width:560px) {
        padding: 48px 56px;
        gap: 48px;

        div.lecture-overview {
            gap: 3.5rem;

            > div {
                p {
                    font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
                }
                
                span {
                    font: 400 1rem/1.25rem 'Space_Mono_Bold';
                    
                }
            }
        }
    }

    @media (min-width:1024px) {
        transition: .3s all;
        
        &:hover {
            background-color: var(--color-neutral-800);
            cursor: pointer;
        }

        /* &:active {
            background-color: var(--color-neutral-700);
        } */

        h5 {
            font: 400 2.5rem/3rem 'Space_Mono_Bold';
        }

        div.lecture-overview {
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
            
        .open-close-sign-mobile{
            display: none;
        }
    }
`