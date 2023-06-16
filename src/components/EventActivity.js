import { useState } from 'react';
import styled, { css } from 'styled-components';

const EventActivity = ({ color, image, alt, title, description, showFront }) => {

    const [shouldShowFront, setShouldShowFront] = useState(showFront);

    return (
        <ActivityWrapper isShowingFront={shouldShowFront==true} color={color}>
            <div className='container' onClick={() => setShouldShowFront(!shouldShowFront)}>

                {/* Parte que oculta o card */}
                <div className='front' id='front'>
                    <div className='activity-content'>
                        <div className='activity-title'>
                            <h6>{title}</h6>
                            <div></div>
                        </div>
                        <div className='click-container'>
                            <div className='click-content'>
                                <div className='pulse-icon-animation'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conteúdo do card */}
                <div className='back'>
                    <div className='activity-content'>
                        <div className='title-logo'>
                            <div className='activity-title'>
                                <h6>{title}</h6>
                                <div></div>
                            </div>
                            <div className='activity-logo'>
                                <img src={image} alt={alt} />
                            </div>
                        </div>
                        <div className='activity-description'>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </ActivityWrapper>
    )
}

export default EventActivity;


const ActivityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 16px;
    width: 100%;
    max-width: 23.75rem;
    height: 100%;

    .activity-content {
        position: relative;
        padding: 32px 24px;
        height: 100%;
    }

    // ---MOVIMENTO DOS CARDS---
    .container {
        position: relative;
        perspective: 1000px;
        height: 320px;
        width: 100%;

        .front, .back {
            width: 100%;
            height: 100%;
            border-radius: 16px;
            position: absolute;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transition: all 1s ease;
        }

        // Frente do card - parte que oculta o conteúdo
        .front {
            background: var(--color-neutral);
            border: 4px solid  ${(props) => props.color};
            transform: rotateY(0deg);

            .activity-content h6 {
                color:  ${(props) => props.color};
                transition: 0.3s ease-in-out;
            }

            .activity-title {
                position: relative;

                > div {
                    position: absolute;
                    width: 0%;
                    height: 4px;
                    border-radius: 2px;
                    background-color: ${(props) => props.color};
                    transition: all .3s;
                    border-radius: 12px;
                }
            }

            .click-container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;

                .click-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 200px;
                    width: 200px;

                    .pulse-icon-animation {
                        height: 50px;
                        width: 50px;
                        background: ${(props) => props.color};
                        margin: auto;
                        border-radius: 50%;
                        display: grid;
                        place-items: center;
                        color: #fff;
                        opacity: 0.5;
        
                        &:before, &:after {
                            content: "";
                            position: absolute;
                            height: 70px;
                            width: 70px;
                            background-color: ${(props) => props.color};
                            border-radius: 50%;
                            z-index: -1;
                            opacity: 0.3;
                        }
        
                        &:before {
                            animation: pulse 2s ease-out infinite;
                        }
        
                        &:after {
                            animation: pulse 2s 1s ease-out infinite;
                        }
        
                        @keyframes pulse {
                            100%{
                                transform: scale(2.0);
                                opacity: 0;
                            }
                        }
                    }
    
                }

            }
        }

        // Verso do card - conteúdo
        .back {
            background-color: var(--color-neutral-800);
            border: 4px solid transparent;
            transform: rotateY(180deg);

            .activity-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .title-logo {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    .activity-title > div {
                        height: 4px;
                        width: 144px;
                        border-radius: 2px;
                        background-color:  ${(props) => props.color};
                    }

                    .activity-logo {
                        img {
                            width: 44px;
                        }
                    }
                }

                p {
                    font: 700 0.875rem/1.25rem 'Space_Mono';
                }
            }
        }

        ${props => props.isShowingFront && css`
            .front {
                transform: rotateY(-180deg);
            }

            .back {
                transform: rotateY(0deg);
            }
        `}
    }
    //---------------

    @media (min-width:800px) {
        max-width: 24.5rem;
        max-height: 26.6875rem;


        .container {
            height: 427px;

            h6 {
                font: 400 2rem/2.5rem 'Space_Mono_Bold';
            }

            .front {            
                border: 4px solid var(--color-neutral-700);

                .activity-content h6 {
                    color: var(--color-neutral-700);
                    transition: 0.3s ease-in-out;
                }

                .click-container {
                    display: none;
                }

                &:hover {
                    border: 4px solid  ${(props) => props.color};
                    cursor: pointer;
                
                    .activity-title {
                        > div {
                            width: 144px;
                            height: 4px;
                            background-color:  ${(props) => props.color};
                        }
                    }

                    .activity-content h6 {
                        color:  ${(props) => props.color};
                    }
                }
            }

            .back {
                .activity-content {
                    gap: 2rem;

                    .title-logo {
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        gap: 3rem;

                        .activity-logo img {
                            width: 4rem;
                        }
                    }

                    p {
                        font: 700 1rem/1.25rem 'Space_Mono';
                    }
                }
            }
        }
    }
`