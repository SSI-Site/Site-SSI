import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

// components
import TimeItem from './TimeItem'
import BreakItem from './BreakItem'
import LectureItem from './LectureItem'

// Componente que itera sobre os dados da programação do evento e renderiza cada item de acordo com o tipo de evento (palestra, intervalo, abertura, encerramento, horário, etc)

const ScheduleItems = ({ schedule }) => {
    // Variável para ficar alternando o lado das bolinhas e texto de horário na versão para celular
    // Na versão de computador, apenas modificamos o css para desabilitar
    let reverseTimeItem = true;

    return (
        <>
            <ScheduleWrapper>
                <ul>
                    {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                    {schedule.map((talk, index) => {
                        const finalKey = talk.id ? `id-${talk.id}` : `fallback-${index}`;
                        const isBreakEvent = talk.title == "Abertura" || talk.title == "Encerramento" || talk.title == "Intervalo" || talk.title == "Almoço" || talk.title == "Jantar" || !talk.speakers;

                        reverseTimeItem = !reverseTimeItem;

                        return (
                            <li key={finalKey}>
                                <TimeItem startTime={talk.start_time} endTime={talk.end_time} reverseItem={reverseTimeItem}/>
                                {isBreakEvent ?
                                    <BreakItem title={talk.title} startTime={talk.start_time} endTime={talk.end_time} />
                                :
                                    <LectureItem event={talk} />
                                }
                            </li>
                        )
                    })}
                </ul>
            </ScheduleWrapper>
        </>
    )
}

export default ScheduleItems

const ScheduleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    > ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        padding-top: 1.5rem;

        li {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            list-style-type: none;
        }
    }

    @media (min-width:800px) {
        > ul {
            gap: 2rem;
            padding-top: 2rem;
            
            li {
                gap: 2rem;
            }
        }
    }
`