import React, { memo, useId, useMemo } from 'react'
import styled from 'styled-components'

const gradientStopsFixed = (
    <>
        <stop className="gradient-stop-1" />
        <stop className="gradient-stop-2" offset="1" />
    </>
)

// Componente das bolinhas
const HomeDots = ({ dotSize = 5, dotGap = 10, availableWidth = 0, gradientStops = gradientStopsFixed }) => {
    // Tamanho das bolinhas
    const DOT_SIZE = dotSize
    const DOT_RADIUS = DOT_SIZE / 2
    // Espaçamento lateral entre as bolinhas
    const DOT_GAP = dotGap
    // Posições das linhas de bolinhas
    const TOP_ROW_CENTER_Y = DOT_SIZE / 2
    const BOTTOM_ROW_CENTER_Y = TOP_ROW_CENTER_Y + DOT_GAP
    // Altura total do SVG
    const SVG_HEIGHT = BOTTOM_ROW_CENTER_Y + TOP_ROW_CENTER_Y + 1

    // ID pro SVG
    const reactId = useId()
    const gradientId = `time-item-dots-gradient-${reactId.replace(/:/g, '')}`

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
        <DotsWrapper className={'dots-wrapper'} aria-hidden="true" $SVG_HEIGHT={SVG_HEIGHT}>
            <svg
                width={dots.svgWidth}
                height={SVG_HEIGHT}
                viewBox={`0 0 ${dots.svgWidth} ${SVG_HEIGHT}`}
                fill="  none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
            >
                <defs>
                    {/* Definição do gradiente para as bolinhas, direita para esquerda
                        e dois pontos (cor inicial e cor final) */}
                    <linearGradient
                        id={gradientId}
                        x1={"0"}
                        y1={SVG_HEIGHT / 2}
                        x2={dots.svgWidth}
                        y2={SVG_HEIGHT / 2}
                        gradientUnits="userSpaceOnUse"
                    >
                        {gradientStops}
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
    )
}

export default memo(HomeDots)

const DotsWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    width: 100%;
    padding: 0.25rem 0rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    svg {
        display: block;
        flex: 0 0 auto;
        max-width: 100%;
        height: ${props => props.$SVG_HEIGHT}px;
    }
`