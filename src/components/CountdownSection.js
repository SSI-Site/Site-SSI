import styled from "styled-components";
import { useEffect, useState } from 'react';

const CountdownSection = ({targetDate}) => {

    const [countdownDays, setCountdownDays] = useState();
    const [countdownHours, setCountdownHours] = useState();
    const [countdownMinutes, setCountdownMinutes] = useState();
    const [countdownSeconds, setCountdownSeconds] = useState();
    var countdownDate = new Date(targetDate).getTime();
    var now = new Date().getTime();

    useEffect(() => {
        setInterval(() => {
            // Horário e data de hoje
            now = new Date().getTime();
            if (now > countdownDate) { return };

            // Distância entre a data do evento e hoje
            var distance = countdownDate - now;

            // Cálculo e atualização do tempo restante em dias, horas, minutos e segundos
            // (O padStart serve para adicionar '0' se o número for menor que 10)
            setCountdownDays(String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'));
            setCountdownHours(String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
            setCountdownMinutes(String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'));
            setCountdownSeconds(String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'));
        }, 1000);
    }, []);

    if(now > countdownDate) return null;

    return (
        <SectionCountdown>
            <div className='countdown-clock'>
                <div className='clock-container'>
                    <h1>{countdownDays}</h1>
                    <p>{countdownDays != 1 ? 'dias' : 'dia'}</p>
                </div>

                <div className="separator">
                    <h1>:</h1>
                </div>

                <div className='clock-container'>
                    <h1>{countdownHours}</h1>
                    <p>{countdownHours != 1 ? 'horas' : 'hora'}</p>
                </div>
                
                <div className="separator">
                    <h1>:</h1>
                </div>

                <div className='clock-container'>
                    <h1>{countdownMinutes}</h1>
                    <p>{countdownMinutes != 1 ? 'minutos' : 'minuto'}</p>
                </div>

                <div className="separator">
                    <h1>:</h1>
                </div>

                <div className='clock-container'>
                    <h1>{countdownSeconds}</h1>
                    <p>{countdownSeconds != 1 ? 'segundos' : 'segundo'}</p>
                </div>
            </div>
        </SectionCountdown>
    )
}

export default CountdownSection;

const SectionCountdown = styled.section`
    display: flex;
    width: 100%;
    padding: 4rem 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    .countdown-clock {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: center;
        gap: 0.5rem;

        .clock-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            color: var(--content-neutrals-fixed-white, #FFF);
        }

        h1 {
            font-size: 2rem;
            font-weight: 700;
            line-height: 2.25rem;
            margin: 0;
        }

        p {
            font-size: 0.563rem;
            font-weight: 700;
            line-height: 0.75rem;
        }
    }
    
    .separator {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;


        h1 {
            color: var(--content-neutrals-fixed-white, #FFF);
            font-size: 2rem;
            line-height: 2.25rem;
            font-family: Inter;
        }
    }

    @media (min-width:801px) {
        .countdown-clock {
            flex-direction: row;
            gap: 1.5rem;

            .clock-container {
                max-width: 13rem;

                h1 {
                    font-size: var(--Typograph-Heading-H1-size, 4rem);
                    line-height: var(--Typograph-Heading-H1-height, 4.5rem); /* 112.5% */
                }

                p {
                    font-size: var(--Typograph-Label-Large-size, 1.125rem);
                    line-height: var(--Typograph-Label-Large-height, 1.5rem); /* 133.333% */
                }
            }

            .separator {
                h1 {
                    font-size: var(--Typograph-Heading-H1-size, 4rem);
                    line-height: var(--Typograph-Heading-H1-height, 4.5rem);
                }
            }
        }

        button {
            max-width: 20rem;
        }
    }
`
