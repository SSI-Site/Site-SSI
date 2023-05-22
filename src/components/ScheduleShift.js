import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

//info
import schedule from '../../data/shiftInformation';


const scheduleShift = () => {

    return ( 
        <>
            <ShiftWrapper>
                <h1>Manhã</h1>
                <div className='event'>
                    <div>08:00</div>
                    <div>Abertura</div>
                </div>
                <div className='lecture'>
                    <div>10:20</div>
                    <div>
                        <div>
                            Palestra
                        </div>
                        <div>
                            Palestrante
                        </div>
                    </div>
                </div>
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

        width: auto;
        height: 148px;


        border-radius: 8px;

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;

        font-size: 1.5rem;
        
        div{
            margin:8px;
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