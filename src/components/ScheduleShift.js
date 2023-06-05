import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

// assets
import shifts from '../../data/shiftInformation';
import LectureItem from './LectureItem';

const ScheduleShift = ({day , shift}) => {

    return ( 
        <>
            <ShiftWrapper>
                <h5>{shift}</h5>
                <ul>
                    {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                    {Object.entries(shifts[day][shift]).map(([time , event]) => {
                        if(!event.speakers) {
                            return (
                                <div className='event'>
                                    <h5>{time}</h5>
                                    <div>
                                        <h5>{event.title}</h5>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <LectureItem time={time} event={event}/>
                            )
                        }
                    })}
                </ul>
            </ShiftWrapper>
        </>
     )
}
 
export default ScheduleShift;

const ShiftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width:100%;

    > ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    div.event {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: stretch;
        background: var(--color-primary);
        padding: 36px 24px;
        gap: 16px;

        min-height: 148px;
        border-radius: 8px;

        flex: none;
        order: 0;
        flex-grow: 0;
    }

    @media (min-width:560px) {
        gap: 48px;

        > h5 {
            font: 400 2rem/2.5rem 'Space_Mono_Bold';
            align-self: flex-start;
        }

        div.event {
            gap: 3.5rem;
            padding: 48px 56px;
        }
    }

    @media (min-width:1024px) {
        > h5 {
            font: 400 2.5rem/3rem 'Space_Mono_Bold';
        }

        div.event {
            gap: 6.75rem;
                
            h5 {
                font: 400 2rem/2.5rem 'Space_Mono_Bold';
            }
        }
    }
`