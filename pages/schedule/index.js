import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Meta from '../../src/infra/Meta';
import saphira from '../../services/saphira';
import semana from '../../utils/semana';
import '../../utils/slugify';
import schedule from '../../services/schedule';

// components
import DateStamp from '../../src/components/DateStamp';

// assets
import background from '../../public/images/padrao_background_desktop.svg';

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
                <div className='padrao-background'></div>
                <h1>Programação</h1>
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

        .padrao-background {
            width: calc(100vw - 10px);
            height: 100%;
            display: flex;
            position: absolute;
            top: -4.5rem;
            mask-image: linear-gradient(to top, transparent 0%, black 20%);
            background: url(${background});
            background-position: top center;
            background-size: cover;
            z-index:-2;

            @media (min-width:1500px) {
                left: calc((1500px - 100vw - 10px)/2); /** compensa o max-width do SiteWrapper/main */
            }
        }
    }
`