import styled from "styled-components";
import { useEffect, useState } from "react";

const CountdownSection = ({ targetDate }) => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdownDate = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const distance = countdownDate - now;

      if (distance <= 0) {
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      setCountdown({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
      });
    };

    updateCountdown(); // evita render inicial quebrado
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // evita vazamento de intervalos
  }, [targetDate]);

  return (
    <SectionCountdown>
      <div className='countdown-clock'>
        <div className='clock-container'>
          <h1>{countdown.days}</h1>
          <p>{countdown.days !== "01" ? "dias" : "dia"}</p>
        </div>
        <div className='separator'><h1>:</h1></div>

        <div className='clock-container'>
          <h1>{countdown.hours}</h1>
          <p>{countdown.hours !== "01" ? "horas" : "hora"}</p>
        </div>
        <div className='separator'><h1>:</h1></div>

        <div className='clock-container'>
          <h1>{countdown.minutes}</h1>
          <p>{countdown.minutes !== "01" ? "minutos" : "minuto"}</p>
        </div>
        <div className='separator'><h1>:</h1></div>

        <div className='clock-container'>
          <h1>{countdown.seconds}</h1>
          <p>{countdown.seconds !== "01" ? "segundos" : "segundo"}</p>
        </div>
      </div>
    </SectionCountdown>
  );
};

export default CountdownSection;

const SectionCountdown = styled.section`
    display: flex;
    width: 100%;
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
            color: var(--content-neutrals-fixed-white);
        }

        h1 {
            font-size: 2rem;
            font-weight: 700;
            line-height: 2.25rem;
            font-variant-numeric: tabular-nums;
        }

        p {
            font-size: 0.65rem;
            font-weight: 700;
            line-height: 0.75rem;
            font-variant-numeric: tabular-nums;
        }
    }
    
    .separator {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;


        h1 {
            color: var(--content-neutrals-fixed-white);
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
                    font-size: 4rem;
                    line-height: 4.5rem; /* 112.5% */
                }

                p {
                    font-size: 1.125rem;
                    line-height: 1.5rem; /* 133.333% */
                }
            }

            .separator {
                h1 {
                    font-size: 4rem;
                    line-height: 4.5rem;
                }
            }
        }

        button {
            max-width: 20rem;
        }
    }
`
