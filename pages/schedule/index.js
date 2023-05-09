import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Meta from '../../src/infra/Meta';
import saphira from '../../services/saphira';
import semana from '../../utils/semana';
import '../../utils/slugify';
import schedule from '../../data/schedule';

// components
import DateStamp from '../../src/components/DateStamp';

// assets

const getScheduleDay = key => {
    const date = new Date(`${key} 03:00Z`);
    const day = date.getUTCDate();
    const weekDay = semana[date.getDay()];
    return { day, weekDay }
}

const Schedule = () => {

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.location.href = "/"
                `
                }}
            />

            <Meta title='SSI 2023 | Programação' />
            
            <ScheduleSection>
                <h1>Programação</h1>

                {/* Para telas mobile */}
                <div className='schedule-container-small'>
                    {Object.entries(schedule).map(([key]) => {
                        const { day, weekDay } = getScheduleDay(key)
                        return (
                            <Link key={key} href={`/schedule/${weekDay.slugify()}`}>
                                <div className='day-selection'>
                                    <DateStamp day={day} weekDay={weekDay} size='small' />
                                </div>
                            </Link>
                        )
                    })}
                </div>

                {/* Para telas desktop */}
                <div className='schedule-container-medium'>
                    {Object.entries(schedule).map(([key]) => {
                        const { day, weekDay } = getScheduleDay(key)
                        return (
                            <Link key={key} href={`/schedule/${weekDay.slugify()}`}>
                                <div className='day-selection'>
                                    <DateStamp day={day} weekDay={weekDay} size='medium' />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </ScheduleSection>
        </>
    )
}

export default Schedule;


const ScheduleSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    h1 {
        margin: 10rem 0 3rem;
        font-size: 3.6rem;
        font-weight: 400;
    }

    .day-selection  {
        margin: 8rem auto;
        cursor: pointer;
    }

    .schedule-container-medium {
        display: none;
    }

    @media (min-width:600px) {
        display: flex;
        flex-direction: column;
        width: 100%;

        h1 {
            margin-bottom: 7rem;
        }

        .schedule-container-small {
            display: none;
        }

        .schedule-container-medium {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            max-width: 65rem;
        }

        .day-selection {
            margin: 2rem 5rem;
        }
    }

    @media (min-width:1021px) {
        margin-bottom: 3rem;

        h1 {
            margin-top: 50px;
            font-size: 3rem;
            align-self: flex-start;
            margin-left: 50px;
        }
    }
`