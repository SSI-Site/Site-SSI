import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const UserWatchedLecture = ({ title, begin, watchMode }) => {
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
            <div 
                className={`lecture-title-container ${isTruncated && 'change-cursor'}`}
                tabIndex={0}
                aria-label={title}  
            >
                <p 
                    className='lecture-title'
                    ref={titleRef}
                >
                    {title}
                </p>
                {isTruncated && <span className='tooltiptext'>{title}</span>}
            </div>
            <p className='lecture-time'>{formatTime(begin)}</p>
            <div className={`lecture-mode ${watchMode}`}>
                <span>{ watchMode === 'online' ? 'Online' : 'Presencial' }</span>
            </div>
        </WatchedLectureContainer>
    )
}

export default UserWatchedLecture;


const WatchedLectureContainer = styled.div`
	width: 100%;
    max-width: 20rem;
    padding: 0.75rem 1.5rem;
	display: flex;
    flex-direction: column;
	align-items: flex-start;
	justify-content: center;
    position: relative;
    background-color: var(--color-neutral-secondary);

    .lecture-title-container {
        position: relative;
        display: inline-block;
        width: 100%;
    }

    .lecture-title {
        font: 700 1.125rem/1.5rem 'AT Aero Bold';
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        display: inline-block;
    }

    .change-cursor {
        cursor: help;
    }

    .lecture-time {
        font: 400 0.875rem/1.5rem 'AT Aero';
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
        background-color: var(--color-primary);
        
        span {
            color: white;
        }
    }

    .presential {
        background-color: white;
        
        span {
            color: var(--color-primary);
        }
    }

    .tooltiptext {
        visibility: hidden;
        background-color: white;
        text-align: center;
        padding: 0.5rem 0.75rem;
        color: var(--color-neutral);
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
        transition: opacity 0.3s, visibility 0.3s;
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
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`
