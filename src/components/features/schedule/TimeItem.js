import React from 'react'
import styled from 'styled-components'

import { formatTime } from '../../../../utils/format-time'
import Dots from '../../ui/Dots'

// Componente do horário entre dois eventos, contém a lógica para criar as bolinhas do detalhe do horário manipulando SVG

const TimeItem = ({ startTime, endTime, reverseItem, availableWidth = 0 }) => {
    return (
        <TimeItemWrapper className={`${reverseItem ? 'reverse' : ''}`}>
            <h3>
                <time dateTime={startTime}>{formatTime(startTime)}</time>
            </h3>
            <Dots dotSize={8.5} dotGap={18} availableWidth={availableWidth} />
            <h3 aria-hidden="true">
                <time dateTime={startTime}>{formatTime(startTime)}</time>
            </h3>
        </TimeItemWrapper>
    )
}

export default TimeItem

const TimeItemWrapper = styled.div`
    display: flex;
    padding: 0 0.5rem;
    align-items: center;
    justify-content: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    h3 {
        color: var(--brand-purple-500);
        font: 700 1.5rem/1.75rem 'AT Aero Bold';
        
        @media (prefers-color-scheme: light) {
            color: var(--brand-purple-200);
        }
    }

    // Segundo texto de horário, escondendo nessa versão (celular), apenas mostrado em versão para computador
    h3:last-of-type {
        display: none;
    }

    // Invertendo bolinhas e texto de horário
    &.reverse {
        flex-direction: row-reverse;

        .dots-wrapper {
            transform: rotate(180deg);
        }
    }

    // Cores do gradiente das bolinhas
    .gradient-stop-1 {
        stop-color: var(--brand-primary);
    }

    .gradient-stop-2 {
        stop-color: var(--brand-primary-dark);
    }

    @media (prefers-color-scheme: light) {
        .gradient-stop-1 {
            stop-color: var(--brand-purple-200);
        }

        .gradient-stop-2 {
            stop-color: var(--brand-primary);
        }
    }

    @media (min-width:600px) {
        justify-content: space-between;

        // Alterando cores dos textos de horários das bolinhas para combinar com as bolihnas
        h3:first-of-type {
            color: var(--brand-purple-200);

            @media (prefers-color-scheme: light) {
                color: var(--brand-purple-700);
            }
        }

        // Mostrando Segundo texto de horário
        h3:last-of-type {
            color: var(--brand-purple-400);
            display: block;

            @media (prefers-color-scheme: light) {
                color: var(--brand-purple-300);
            }
        }

        // Desabilitando a inversão dos textos de horário para essa versão (min 600px)
        &.reverse {
            flex-direction: row;

            .dots-wrapper {
                transform: rotate(0deg);
            }
        }

        // Cores do gradiente das bolinhas para essa versão (min 600px)
        .gradient-stop-1 {
            stop-color: var(--brand-purple-200);
        }

        .gradient-stop-2 {
            stop-color: var(--brand-primary);
        }

        @media (prefers-color-scheme: light) {
            .gradient-stop-1 {
                stop-color: var(--brand-purple-700);
            }

            .gradient-stop-2 {
                stop-color: var(--brand-primary);
            }
        }
    }

    @media (min-width:800px) {
        h3 {
            font: 700 1.5rem/1.75rem 'AT Aero Bold';
        }
    }

    @media (min-width:1200px) {
        h3 {
            font: 700 1.75rem/1.75rem 'AT Aero Bold';
        }
    }
`