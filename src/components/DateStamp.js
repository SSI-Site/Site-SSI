import styled, { css } from 'styled-components';
import semana from '../../utils/semana';

// assets
import CheckIcon from '../../public/images/icons/check.svg';
import HourglassIcon from '../../public/images/icons/hourglass.svg';


const DateStamp = ({ day, isActive, showEmoji }) => {

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
                {(new Date(`${year}-${month}-${currentDay}`) > new Date(`2024-10-${numericDay}`) && showEmoji) &&
                    <img src={CheckIcon} alt="Check icon" />
                }
                {(currentDay==numericDay && month==10 && year==2024) && showEmoji &&
                    <img src={HourglassIcon} alt="Hourglass icon" />
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
    background-color: var(--color-neutral-800);
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 0.3s all ease;
    background-color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-neutral-800)'};
    background-image: ${props => props.$isActive ? 'linear-gradient(to right, var(--color-primary) 50%, white 50%)' : 'linear-gradient(to right, var(--color-neutral-800) 50%, var(--color-primary) 50%)'};
    background-size: 200%;
    background-position-x: 200%;

    &:hover, &:focus-visible {
        background-position-x: 100%;
        background-color: ${props => props.$isActive ? 'white' : 'var(--color-primary)'};

        h5, p {
            color: ${props => props.$isActive && 'var(--color-primary)'};
        }

        ${props => props.$isActive && css`
            svg path {
                fill: var(--color-primary);
            }
        `}
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
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
        color: white;
    }

    p {
        font-family: 'AT Aero Bold'; 
    }

    @media (min-width: 840px) {
        width: 25rem;

        .day-emoji img {
            height: 2rem;
        }
    }
`