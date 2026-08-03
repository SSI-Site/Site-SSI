import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import presentIcon from '../../../../public/images/user/dark/presente-icon.svg';

const UserWatchedLecture = ({ title, start_time, end_time }) => {
    
    const titleRef = useRef(null);
    const [isTruncated, setIsTruncated] = useState(false);

    // Função para formatar o horário em "09:40", "13:20", etc.
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}h${minutes}`;
    };

    useEffect(() => {
        const element = titleRef.current;
        if (element) {
            setIsTruncated(element.scrollWidth > element.clientWidth);
        }
    }, [title]);

    return (
        <WatchedLectureContainer>
            <div className='lecture-content'>
                <div 
                className={`lecture-title-container ${isTruncated && 'change-cursor'}`}
                tabIndex={0}
                aria-label={title}  
                >
                    <p className='lecture-title' ref={titleRef}>
                        {title}
                    </p>
                    {isTruncated && <span className='tooltiptext'>{title}</span>}
                </div>
                <div className = "timesWrapper">
                    <p className='lecture-time'>{formatTime(start_time)} - {formatTime(end_time)}</p>
                </div>
            </div>

            <Image height={54} width={64} src={presentIcon} alt="Ícone de presença"/>
        </WatchedLectureContainer>
    )
}

export default UserWatchedLecture;


const WatchedLectureContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;

    padding: 0.75rem 1rem;
    justify-content: center;
    position: relative;
    border-radius: 0.75rem;
    background: color-mix(in srgb, var(--background-neutrals-tertiary) 50%, transparent);

    img {
        width: 48px;
        height: 40px;

        @media (min-width: 1024px){
            width: 56px;
            height: 52px;
        }
    }

    .lecture-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .lecture-title-container {
        position: relative;
        display: inline-block;
        width: 100%;
    }

    .lecture-title {
        font: 700 1.125rem/1.75rem 'AT Aero Bold';
        width: 100%;
        max-width: 12rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        display: inline-block;

        @media screen and (min-width: 801px){
            font-size: 1.25rem;
            line-height: 2rem;
            max-width: 95%;
        }
    }

    .change-cursor {
        cursor: help;
    }

    .lecture-time {
        width: 100%;
        font: 400 0.875rem/1rem 'AT Aero';
        margin-bottom: 0.25rem;

        @media (min-width: 1024px){
            font-size: 1rem;
            margin-bottom: 0.45rem;
        }
    }

    .lecture-mode {
        padding: 0.12rem 0.25rem;
        position: absolute;
        right: 0;
        bottom: 0;

        span {
            font: 700 0.875rem/1.125rem 'AT Aero Bold';
        }
    }

    .online {
        background-color: var(--brand-primary);
        
        span {
            color: white;
        }
    }

    .presential {
        background-color: var(--background-neutrals-inverse);
        
        span {
            color: var(--brand-primary);
        }
    }

    .tooltiptext {
        visibility: hidden;
        background-color: var(--background-neutrals-inverse);
        text-align: center;
        padding: 0.5rem 0.75rem;
        color: var(--content-neutrals-inverse);
        font: 400 1rem/1.5rem 'AT Aero';
        width: 100%;
        max-width: clamp(10rem, 90vw, 20rem);
        word-wrap: break-word;

        position: absolute;
        z-index: 10;
        top: -5.5rem;
        left: 50%;
        transform: translateX(-50%);

        opacity: 0;
        transition: opacity 0.15s, visibility 0.15s;
    }

    .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        right: 50%;
        margin-right: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: white transparent transparent transparent;
    }

    .lecture-title-container:hover .tooltiptext,
    .lecture-title-container:focus-visible .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .lecture-title-container:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 2px;
    }
`
