import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

//info
import shifts from '../../data/shiftInformation';

const objTeste = {'data1' : 'aaaaaas'}

const scheduleShift = () => {

    return ( 
        <>
            <ShiftWrapper>
                {/*Versão antiga do código, não pega os dados do shiftInformation.js
                <h1>Manhã</h1>
                <div className='event'>
                    <div>08:00</div>
                    <div>Abertura</div>
                </div>
                <div className='lecture'>
                    <div>10:20</div>
                    <div>
                        <h3 className='nome-palestra'>
                            Palestra
                        </h3>
                        <p>
                            Palestrante
                        </p>
                        <p>
                            Palestrante
                        </p>
                    </div>
                </div>
                <div className='lecture'>
                    <div>10:20</div>
                    <div>
                        <h3 className='nome-palestra'>
                            nome de palestra muito longo pra saber como fica: ok, mas ainda da pra melhorar
                        </h3>
                        <p>
                            Palestrante 1, Palestrante 2, Palestrante 3 da silva para tentar quebrar essa maldita caixa
                        </p>
                    </div>
                </div>*/}
                <ul>
                    {/* Itera para cada registro dentro do turno especificado e coloca na página um elemento de acordo */}
                    {Object.entries(shifts['2023-05-01']['Manhã']).map(([time , event]) => {
                    if(!event.speakers){
                        return (
                            <div className='event'>
                                <div>{time}</div>
                                <div>
                                    <h3>{event.title}</h3>
                                </div>
                            </div>
                        )
                    }else{
                        return (
                            <div className='lecture'>
                                <div>{time}</div>
                                <div>
                                    <h3>{event.title}</h3>
                                    {/* Itera dentro dos palestrantes para escrever o nome de cada um */}
                                    {event['speakers'].map((s) => {
                                        return(
                                            <p>{s['name']}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                    })}
                </ul>

            </ShiftWrapper>
        </>
     )
}
 
export default scheduleShift;

const ShiftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width:100%;

    background:var(--color-tertiary);

    h1{
        font-size:2rem;
    }

    div.event, div.lecture{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 36px 24px;
        margin: 16px;

        width:auto;
        min-height: 148px;


        border-radius: 8px;

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;

        font-size: 1.5rem;
        
        div{
            display:flex;
            flex-direction:column;
            margin:8px;
            font-size: 1.5rem;

            h3{
                font-size: 1.5rem;
                line-height:125%;
                max-height:50%;
            }

            p{
                color: var(--color-primary-500);
                line-height:125%;
                max-height:50%;
            }
        }

        div:nth-child(1){
            flex:1;
        }

        div:nth-child(2){
            flex: 3;
        }
    }

    div.event{
        background: var(--color-primary);
    }

    div.lecture{
        background: var(--color-neutral);
    }
`