import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { formatTime } from '../../../../utils/format-time'

import DotsDarkImage from '../../../../public/images/schedule/details/bolinhas_mobile_dark.svg'
import DotsLightImage from '../../../../public/images/schedule/details/bolinhas_mobile_light.svg'
import DotsDarkImageDesktop from '../../../../public/images/schedule/details/bolinhas_desktop_dark.svg'
import DotsLightImageDesktop from '../../../../public/images/schedule/details/bolinhas_desktop_light.svg'

const TimeItem = ({startTime, endTime, reverseItem}) => {

    return (
        <TimeItemWrapper className={`${reverseItem ? 'reverse' : ''}`}>
            <h3>
                <time dateTime={startTime}>{formatTime(startTime)}</time>
            </h3>
            <picture aria-hidden="true">
                <source srcSet={DotsLightImageDesktop} media='(min-width: 600px) and (prefers-color-scheme: light)'/>
                <source srcSet={DotsDarkImageDesktop} media='(min-width: 600px) and (prefers-color-scheme: dark)'/>
                <source srcSet={DotsLightImage} media='(prefers-color-scheme: light)'/>
                <Image src={DotsDarkImage} fill alt="Decoração"/>
            </picture>
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
        color: var(--brand-purple-500, #9638FF);
        font: 700 1.5rem/1.75rem 'AT Aero Bold';
        
        @media (prefers-color-scheme: light) {
            color: var(--brand-purple-200, #3E0672);
        }
    }

    /* Segundo texto de horário, mostrado apenas em versão para computador */
    h3:last-of-type {
        display: none;
    }

    picture {
        position: relative;
        display: block;
        width: 100%;
        height: 1.75rem;
    }

    img {
        object-fit: contain;
        object-position: left center;
    }

    // Invertendo bolinhas e texto de horário
    &.reverse {
        flex-direction: row-reverse;

        img {
            transform: rotate(180deg);
        }
    }

    @media (min-width:600px) {
        justify-content: space-between;

        // Alterando cores dos textos de horários das bolinhas
        h3:first-of-type {
            color: var(--brand-purple-200, #D0ACFF);

            @media (prefers-color-scheme: light) {
                color: var(--brand-purple-700, #9638FF);
            }
        }

        /* Segundo texto de horário, mostrado apenas em versão para computador */
        h3:last-of-type {
            color: var(--brand-purple-400, #A85FFF);
            display: block;

            @media (prefers-color-scheme: light) {
                color: var(--brand-purple-300, #510698);
            }
        }

        picture {
            width: 100%;
            margin-top: 0.125rem;
            align-items: center;
            justify-content: center;
        }

        img {
            object-position: center;
        }
        /* Desabilitando a inversão dos textos de horário para essa versão (min 600px) */
        &.reverse {
            flex-direction: row;

            img {
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