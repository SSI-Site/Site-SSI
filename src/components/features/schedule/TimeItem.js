import React, { useId, useMemo } from 'react'
import styled from 'styled-components'

import { formatTime } from '../../../../utils/format-time'

// Componente do horário entre dois eventos, contém a lógica para criar as bolinhas do detalhe do horário manipulando SVG

// Tamanho das bolinhas
const DOT_SIZE = 8.5
const DOT_RADIUS = DOT_SIZE / 2
// Espaçamento lateral entre as bolinhas
const DOT_GAP = 18
// Posições das linhas de bolinhas
const TOP_ROW_CENTER_Y = DOT_SIZE / 2
const BOTTOM_ROW_CENTER_Y = TOP_ROW_CENTER_Y + DOT_GAP
// Altura total do SVG
const SVG_HEIGHT = BOTTOM_ROW_CENTER_Y + TOP_ROW_CENTER_Y

const TimeItem = ({ startTime, endTime, reverseItem, availableWidth = 0 }) => {
    // ID pro SVG
    const gradientId = `time-item-dots-gradient-${useId().replace(/:/g, '')}`

    // Calculando a quantidade de bolinhas que cabem no width disponível
    // Roda apenas quando availableWidth muda
    // dots é um objeto contendo as posições das colunas de bolinhas e o width do SVG
    const dots = useMemo(() => {
        // Calculando a largura utilizável, quantas colunas de bolinhas cabem, largura do SVG
        // e as posições das colunas das bolinhas (columns)
        const usableWidth = Math.max(availableWidth, DOT_SIZE)
        const columnCount = Math.max(1, Math.floor((usableWidth - DOT_SIZE) / DOT_GAP) + 1)
        const svgWidth = DOT_SIZE + (columnCount - 1) * DOT_GAP
        const columns = Array.from({ length: columnCount }, (_, index) => DOT_RADIUS + index * DOT_GAP)

        return {
            columns,
            svgWidth,
        }
    }, [availableWidth])

    return (
        <TimeItemWrapper className={`${reverseItem ? 'reverse' : ''}`}>
            <h3>
                <time dateTime={startTime}>{formatTime(startTime)}</time>
            </h3>
            <DotsWrapper className={'dots-wrapper'} aria-hidden="true">
                <svg
                    width={dots.svgWidth}
                    height={SVG_HEIGHT}
                    viewBox={`0 0 ${dots.svgWidth} ${SVG_HEIGHT}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                >
                    <defs>
                        {/* Definição do gradiente para as bolinhas, direita para esquerda
                            e dois pontos (cor inicial e cor final) */}
                        <linearGradient
                            id={gradientId}
                            x1={dots.svgWidth}
                            y1={SVG_HEIGHT / 2}
                            x2="0"
                            y2={SVG_HEIGHT / 2}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop className="gradient-stop gradient-stop-1" />
                            <stop className="gradient-stop gradient-stop-2" offset="1" />
                        </linearGradient>
                    </defs>
                    {/* Desenhando as bolinhas. Posição x é dada pelo dots, y foi definida nas variáveis globais */}
                    {dots.columns.map((x) => (
                        <React.Fragment key={x}>
                            <circle cx={x} cy={TOP_ROW_CENTER_Y} r={DOT_RADIUS} fill={`url(#${gradientId})`} />
                            <circle cx={x} cy={BOTTOM_ROW_CENTER_Y} r={DOT_RADIUS} fill={`url(#${gradientId})`} />
                        </React.Fragment>
                    ))}
                </svg>
            </DotsWrapper>
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

const DotsWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    width: 100%;
    height: 1.75rem;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding-right: 0.5rem;

    svg {
        display: block;
        flex: 0 0 auto;
        max-width: 100%;
        height: ${SVG_HEIGHT}px;
    }

    .gradient-stop-1 {
        stop-color: var(--brand-primary-dark);
    }

    .gradient-stop-2 {
        stop-color: var(--brand-primary);
    }

    @media (prefers-color-scheme: light) {
        .gradient-stop-1 {
            stop-color: var(--brand-primary);
        }

        .gradient-stop-2 {
            stop-color: var(--brand-purple-200);
        }
    }

    // 600px é o ponto de quebra para mudança das bolinhas
    @media (min-width:600px) {
        width: 100%;
        margin-top: 0.125rem;
        align-items: center;
        justify-content: center;
        padding-right: 0;

        .gradient-stop-1 {
            stop-color: var(--brand-primary);
        }

        .gradient-stop-2 {
            stop-color: var(--brand-purple-200);
        }

        @media (prefers-color-scheme: light) {
            .gradient-stop-1 {
                stop-color: var(--brand-primary);
            }

            .gradient-stop-2 {
                stop-color: var(--brand-purple-700);
            }
        }
    }
`