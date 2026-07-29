import React from 'react'
import styled from 'styled-components'
import { formatTime } from '../../../../utils/format-time'

// Componente de um intervalo da programação do evento

const BreakItem = ({title, startTime, endTime}) => {
    const isOpeningClosingEvent = title == "Abertura" || title == "Encerramento";

    return (
        <BreakItemWrapper className={`${isOpeningClosingEvent ? 'special-event' : ''}`}>
            <h4>{title}</h4>
                <p>
                    <time dateTime={startTime}>{formatTime(startTime)}</time>
                    {endTime && 
                        <>
                            {" - "}
                            <time dateTime={endTime}>{formatTime(endTime)}</time>
                        </>
                    }
                </p>
        </BreakItemWrapper>
    )
}

export default BreakItem;

const BreakItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 0.5rem 1.25rem;
    border-radius: 2rem;
    border: 1px solid var(--outline-neutrals-secondary);

    h4 {
        font: 700 1rem/1.5rem 'AT Aero Bold';
    }

    p {
        font: 400 0.875rem/1.5rem 'AT Aero Bold';
    }

    // Mudando a cor dos eventos de abertura e encerramento
    &.special-event {
        background: var(--background-neutrals-inverse);

        h4, p {
            color: var(--content-neutrals-inverse);
        }
    }

    @media (min-width:800px) {
        padding: 0.75rem 1.5rem;
        // Código para fazer a borda com gradiente
        border: 2px solid transparent;
        background: var(--border-gradient-primary-dark);

        @media (prefers-color-scheme: light) {
            background: var(--border-gradient-primary-light);
        }

        h4 {
            font: 700 1.375rem/1.5rem 'AT Aero Bold';
        }

        p {
            font: 700 1.375rem/1.5rem 'AT Aero Bold';
        }
    }

    @media (min-width:1200px) {
        padding: 0.875rem 2rem;
        border: 3px solid transparent;

        h4 {
            font: 700 1.5rem/1.5rem 'AT Aero Bold';
        }

        p {
            font: 700 1.5rem/1.5rem 'AT Aero Bold';
        }
    }
`