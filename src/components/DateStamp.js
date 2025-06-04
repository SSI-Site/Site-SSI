import styled, { css } from 'styled-components';
import semana from '../../utils/semana';

const DateStamp = ({ day, isActive }) => {

    // se day = 7, então relativeDay = 1 e assim por diante (para os dias do evento)
    const relativeDay = `${day - 6}` 
    const numericDay = parseInt(day);

    const current = new Date();
    const currentDay = current.getDate();
    const month = current.getMonth() + 1;
    const year = current.getFullYear();

    return (
        <DateWrapper $isActive={isActive} >
            <div className='day-emoji'>
                <h5 className='day'>Dia {relativeDay}</h5>
                {(new Date(`${year}-${month}-${currentDay}`) > new Date(`2024-10-${numericDay}`)) &&
                    // CheckIcon 
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3333 5H6.66667H5V6.66667V33.3333V35H6.66667H33.3333H35V33.3333V6.66667V5H33.3333ZM11.2667 19.595L18.3383 26.6667L30.1233 14.8817L27.7667 12.525L18.3383 21.9533L13.6233 17.2383L11.2667 19.595Z" fill="white"/>
                    </svg>
                }
                {(currentDay==numericDay && month==10 && year==2024) &&
                    // HourglassIcon
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M10 3.33337H30V13.3334L23.3333 20L30 26.6667V36.6667H10V26.6667L16.6667 20L10 13.3334V3.33337ZM26.6667 27.5L20 20.8334L13.3333 27.5V33.3334H26.6667V27.5ZM20 19.1667L26.6667 12.5V6.66671H13.3333V12.5L20 19.1667ZM16.6667 10H23.3333V11.25L20 14.5834L16.6667 11.25V10Z" fill="white"/>
                    </svg>
                }
            </div>
            <p className='week-day'>{day} out - {semana[day-6]}</p>
        </DateWrapper>
    )
}

export default DateStamp;


const DateWrapper = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 0.15s all ease;
    background-image: ${props => props.$isActive ? 'linear-gradient(to right, var(--brand-primary) 50%, var(--background-neutrals-inverse) 50%)' : 'linear-gradient(to right, var(--background-neutrals-secondary) 50%, var(--background-neutrals-inverse) 50%)'};
    background-size: 200%;
    background-position-x: 200%;

    &:hover, &:focus-visible {
        background-position-x: 100%;
        background-color: var(--background-neutrals-inverse);

        h5, p {
            color: var(--content-neutrals-inverse);
        }

        svg path {
            fill: var(--content-neutrals-inverse);
        }
        
    }

    &:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 4px;
    }

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

    h5, p {
        color: var(--background-neutrals-inverse);
    }

    p {
        font-family: 'AT Aero Bold'; 
    }

    @media (min-width:840px) {
        width: 25rem;

        .day-emoji img {
            height: 2rem;
        }
    }
`