import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

// Componente do horário entre dois eventos, contém a lógica para criar as bolinhas do detalhe do horário manipulando SVG

// Tamanho das bolinhas
const DOT_SIZE = 4
const DOT_RADIUS = DOT_SIZE / 2
// Espaçamento lateral entre as bolinhas
const DOT_GAP = 10
// Posições das linhas de bolinhas
const TOP_ROW_CENTER_Y = DOT_SIZE / 2
const BOTTOM_ROW_CENTER_Y = TOP_ROW_CENTER_Y + DOT_GAP
// Altura total do SVG
const SVG_HEIGHT = BOTTOM_ROW_CENTER_Y + TOP_ROW_CENTER_Y + 1

const SpeakerDots = () => {
    // Ref para div com o SVG das bolinhas
    const dotsWrapperRef = useRef(null)
    // ID pro SVG
    const gradientId = `time-item-dots-gradient-${useId().replace(/:/g, '')}`

    const [availableWidth, setAvailableWidth] = useState(0)

    // Roda após renderizar o componente
    useEffect(() => {
        const dotsWrapper = dotsWrapperRef.current

        if (!dotsWrapper) {
            return
        }

        // Pegando o width disponível (já renderizado)
        setAvailableWidth(dotsWrapper.getBoundingClientRect().width)
        
        // Observer para detectar mudanças no width do componente, como um listener
        // E atualiza o availableWidth com o width atualizado
        const resizeObserver = new ResizeObserver(([entry]) => {
            setAvailableWidth(entry.contentRect.width)
        })

        resizeObserver.observe(dotsWrapper)

        // Matando o observer quando o componente for desmontado
        return () => resizeObserver.disconnect()
    }, [])

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
        <>
            <DotsWrapper ref={dotsWrapperRef} className={'dots-wrapper'} aria-hidden="true">
                <svg
                    width={dots.svgWidth}
                    height={SVG_HEIGHT}
                    viewBox={`0 0 ${dots.svgWidth} ${SVG_HEIGHT}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                >
                    {/* Desenhando as bolinhas. Posição x é dada pelo dots, y foi definida nas variáveis globais */}
                    {dots.columns.map((x) => (
                        <React.Fragment key={x}>
                            <circle cx={x} cy={TOP_ROW_CENTER_Y} r={DOT_RADIUS} fill={`#666666`} />
                            <circle cx={x} cy={BOTTOM_ROW_CENTER_Y} r={DOT_RADIUS} fill={`#666666`} />
                        </React.Fragment>
                    ))}
                </svg>
            </DotsWrapper>
        </>
    )
}

export default SpeakerDots

const DotsWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    width: 100%;
    padding: 0.25rem 0rem;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    svg {
        display: block;
        flex: 0 0 auto;
        max-width: 100%;
        height: ${SVG_HEIGHT}px;
    }
`