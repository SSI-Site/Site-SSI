import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import schedule from '../../data/schedule';
import semana from '../../utils/semana';
import '../../utils/slugify';

// components
import DateStamp from './DateStamp';
import ScheduleInformation from './ScheduleInformation';

// assets
import ArrowBack from '../../public/images/icons/arrow-back.svg';

const scheduleDay = ({ weekDay }) => {

    const { width } = useWindowDimensions();
    const size = width < 800 ? 'small' : 'medium';

    const [date, setDate] = useState('');
    const [show, setShow] = useState([]);

    const handleShowLecture = time => {
        const index = show.indexOf(time);

        if (index < 0) {
            setShow(prev => [...prev, time]);
        } else {
            setShow(prev => prev.filter((e, i) => i !== index));
        }
    }

    useEffect(() => {
        if (weekDay && !semana.map(w => w.slugify()).includes(weekDay)) router.push('/schedule');
    }, [weekDay]);

    useEffect(() => {
        if (!weekDay) return
            Object.entries(schedule).forEach(([key]) => {
                const d = new Date(`${key} 03:00Z`);
                const w = semana[d.getDay()].slugify();
                if (weekDay == w) setDate(key);
            });
    }, [weekDay]);

    return schedule[date] && (
        <ContainerSchedule>
            <Link href='/schedule'>
                <div className='back-to-schedule'>
                    <i /><span>Ver Programação Completa</span>
                </div>
            </Link>
            <div className='schedule-header'>
                <DateStamp day={new Date(`${date} 03:00Z`).getUTCDate()} weekDay={weekDay} size={size} />
                <h1>Programação do Dia</h1>
            </div>
            <ListSchedule>
                <thead><tr><th></th><th></th></tr></thead>
                <tbody>
                    {Object.entries(schedule[date]).sort(([a], [b]) => a > b ? 1 : -1).map(([time, lecture]) => (
                        <tr key={time}>
                            <td className='schedule-time'>
                                <time>{time}</time>
                            </td>
                            {lecture.message ? (
                                <td className='schedule-info'>
                                    <div className='schedule-time'>
                                        <time>{time}</time>
                                    </div>
                                    <td className='schedule-message'>
                                        <h2>{lecture.message}</h2>
                                    </td>
                                    <div className='lecture-spacing'></div>
                                </td>
                            ) : (
                                <td className='schedule-info'>
                                    <div className='schedule-time'>
                                        <time>{time}</time>
                                    </div>
                                    <h2 className='purple-hover-title' onClick={() => handleShowLecture(time)}>{lecture.title}</h2>
                                    <span>
                                        {lecture.speakers.map((speaker, index) => (
                                            <React.Fragment key={index}>
                                                {speaker.anchor ? 
                                                    (<a target='_blank' href={speaker.anchor}>{speaker.name}</a>)
                                                    : 
                                                    speaker.name
                                                }
                                                {index < lecture.speakers.length - 2 ? ', ' : index == lecture.speakers.length - 2 && ' e '}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                    <div className={`lecture-content ${show.includes(time) && 'show-content'}`}>
                                        <ScheduleInformation
                                            speakerPicture={lecture.image}
                                            // speakerName={ }
                                            title={lecture.title}
                                            overview={lecture.description}
                                        />
                                    </div>
                                    <div className='lecture-spacing'></div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody >
            </ListSchedule >
        </ContainerSchedule>
    )
}

export default scheduleDay;


const ContainerSchedule = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4.5rem;

    .schedule-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1.5em 0;
    }

    .back-to-schedule {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #ffffff;
        width: 100%;
        padding: 1em;
        cursor: pointer;

        span {
            font-family: 'Bebas Neue';
            font-size: 2rem;
            margin-left: 1rem;

            &:hover {
              text-decoration: underline;
            }
        }

        i {
            background: url(${ArrowBack});
            height: 12px;
            width: 32px;
            display: block;
        }
    }

    @media (min-width:800px) {
        margin: 0 6rem;
        align-items: start;

        .schedule-header {
            display: flex;
            flex-direction: row;
            margin-left: 3em;

            h1 {
                margin-left: 6rem
            }
        }
    }
`

const ListSchedule = styled.table`
    border-collapse: collapse;
    margin-bottom: 15rem;
    width: 80%;
    max-width: 950px;

    td.schedule-time {
        display: none;
        width: 200px;
    }

    .schedule-time {
        vertical-align: top;
        text-align: left;

        time {
            font-family: 'Plaza';
            font-size: 2rem;
            color: #fff;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                height: 8px;
                width: 8px;
                background-color: #151023;
                border: 2px solid #8744C2;
                left: calc(-2rem - 5px);

                margin-top: auto;
                margin-bottom: auto;
                top: 0;
                bottom: 0;
                transform-origin: center;
                transform: rotate(45deg);
            }
        }
    }

    thead {
        display: none;
    }

    td.schedule-message {
        width: 1%;
    }

    .schedule-message {
        width: 100%;
        max-width: 400px;

        h2 {
            color: #fff;
            font-size: 2rem;
            font-family: 'Bebas Neue';
            text-align: center;
            line-height: 4rem;
            background-color: #391F55;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                width: 5px;
                height: 100%;
                top: -1px;
                left: 0;
                border-top: 1px solid #fff;
                border-left: 1px solid #fff;
                border-bottom: 1px solid #fff;
            }

            &:after {
                content: '';
                position: absolute;
                width: 5px;
                height: 100%;
                top: -1px;
                right: 0;
                border-top: 1px solid #fff;
                border-right: 1px solid #fff;
                border-bottom: 1px solid #fff;
            }
        }
    }

    .schedule-info {
        vertical-align: top;
        border-left: 2px solid #8744C2;
        padding: 0 0 0 1em;
        font-family: 'Bebas Neue';
        width: 100%;

        h2.purple-hover-title {
            font-size: 2rem;
            cursor: pointer;

            &:hover {
                color: #8744C2;
                transition: color .2s;
            }
        }

        .lecture-spacing {
            margin-bottom: 2rem;
        }

        span {
            color: #8744C2;
            font-family: 'Bebas Neue';
            font-size: 1.7rem;

            a {
                text-decoration: underline;
                color: inherit;
                transition: .2s;

                &:hover {
                    color: #d0cfd3;
                }
            }
        }
    }

    .lecture-content {
      display: none;
      margin: 1em;
    }

    .lecture-content.show-content {
      display: block;
    }

    @media (min-width:800px) {

        td.schedule-time {
            display: block;
        }

        div.schedule-time {
            display: none;
        }

        .schedule-info {
            max-width: 0
        }

        .schedule-time {
            padding: 1rem;
            text-align: right;

            time {
                &:after {
                    left: auto;
                    right: calc(-1rem - 7px);
                }
            }
        }

        h2.purple-hover-title {
            margin-top: 1rem;
        }
    }
`