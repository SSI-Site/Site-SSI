import styled from 'styled-components';
import semana from '../../utils/semana';

// assets
import CheckIcon from '../../public/images/icons/check.svg';
import HourglassIcon from '../../public/images/icons/hourglass.svg';

/**
 * A estilização nos estados de hover e active devem ser estabelecidos no arquivo 
 * que chama o componente, pois há seções em que esta componente é estático
 */

const DateStamp = ({ day, showEmoji }) => {

    // se day = 21, então relativeDay = 01 e assim por diante (para os dias do evento)
    const relativeDay = `0${day - 20}` 
    const numericDay = parseInt(day);

    const current = new Date();
    const currentDay = current.getDate();
    const month = current.getMonth() + 1;
    const year = current.getFullYear();

    return (
        <DateWrapper>
            <div className='day-emoji'>
                <h6 className='day'>Dia {relativeDay}</h6>
                {(new Date(`${year}-${month}-${currentDay}`) > new Date(`2023-08-${numericDay}`) && showEmoji) &&
                    <img src={CheckIcon}></img>
                }
                {(currentDay==numericDay && month==8 && year==2023) && showEmoji &&
                    <img src={HourglassIcon}></img>
                }
            </div>
            <p className='week-day'>{day} ago - {semana[day-20]}</p>
        </DateWrapper>
    )
}

export default DateStamp;


const DateWrapper = styled.div`
    width: 16.5rem;
    height: 4.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--color-neutral-800);
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 0.3s all ease;

    .day-emoji {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img {
            height: 1.5rem;
        }
    }

    p {
        font: 700 1rem/1.25rem 'AT Aero Bold';
    }

    @media (min-width: 840px) {
        width: 24.5rem;
        height: 5.75rem;

        h6 {
            font: 700 2rem/2.5rem 'AT Aero Bold';
        }

        .day-emoji img {
            height: 2rem;
        }
    }
`