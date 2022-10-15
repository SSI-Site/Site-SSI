import { useState, useEffect } from 'react';
import Meta from '../src/infra/Meta';
import styled from 'styled-components';
import saphira from '../services/saphira';
import background from '../public/images/padrao_background_desktop.svg';

//components
import DateComponent from '../src/components/DateComponent';

const dias = {
    'Segunda-feira': 22,
    'Terça-feira': 23,
    'Quarta-feira': 24,
    'Quinta-feira': 25,
    'Sexta-feira': 26
};

const Schedule = () => {

    const [example, setExample] = useState("");

    async function fetchExample() {
        const res = await saphira.getCatFact();
        setExample(res.fact);
    }

    useEffect(() => {
        fetchExample();
    }, []);

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `

                    window.location.href = "/"

                `
                }}
            />

            <Meta title='SSI 2022 | Programação' />
            <ScheduleSection>
                <div className='padrao-background'></div>
                <h1>Programação</h1>
                <div className='schedule-container-small'>
                    {Object.entries(dias).map(function (key, value) {
                        return (
                            <div key={value} className='day-selection'>
                                <DateComponent day={key[1]} weekDay={key[0]} size='small' />
                            </div>
                        );
                    })}
                </div>
                <div className='schedule-container-medium'>
                    {Object.entries(dias).map(function (key, value) {
                        return (
                            <div key={value} className='day-selection'>
                                <DateComponent day={key[1]} weekDay={key[0]} size='medium' />
                            </div>
                        );
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

    @media (min-width: 1021px) {
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