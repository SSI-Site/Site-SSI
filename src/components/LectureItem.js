import React from 'react';
import styled from 'styled-components';

import { formatTime } from '../../utils/format-time';
import Image from 'next/image';

// components
import BadgeCO from './BadgeCO';
import SpeakerInfo from './SpeakerInfo';
import sponsorImages from '../../data/sponsors';

// assets
import LectureRight from '../../public/images/background_imgs/desktopDetail.png';
import LectureBottom from '../../public/images/background_imgs/detail.png';

const LectureItem = ({ time, event }) => {

    return (
        <LectureWrapper>
            <LectureContent>
                <LectureHeader>
                    <h3>{event.title}</h3>
                    <div className='lecture-header-wrapper'>
                        <div className='lecture-header-info'>
                            {event.end_time?
                                <label>{formatTime(time)} - {formatTime(event.end_time)}</label>
                            :
                                <label>{formatTime(time)}</label>
                            }

                            <div className='badge-wrapper'>
                                <BadgeCO
                                    text={event.mode === 'IP'? 'Presencial': 'Online'}
                                    themeIndex={event.mode === 'IP' ? 5 : 9}
                                    rounded={true}
                                />

                                {event.activity_type &&
                                    <BadgeCO
                                        text={event.activity_type === 'WS'? "Workshop" : "Palestra"}
                                        themeIndex={event.activity_type === 'PR'? 1 : 2}
                                        rounded={true}
                                    />
                                }
                            </div>
                        </div>
                        <div className='lecture-header-sponsor'>
                            {event.sponsor &&
                                <a href={event.sponsor.url} alt="" className='sponsor-logo'>
                                    <Image src={sponsorImages[event.sponsor.name.toLowerCase()]} alt={`Logo ${event.sponsor.name}`}
                                    width={64} height={52}/>
                                </a>
                            }
                        </div>
                    </div>
                </LectureHeader>

                <div className = "lecture-description">
                    <p>{event.description}</p>
                </div>

                <SpeakersWrapper>
                    {event.speakers.map(id => {
                        return (
                            <SpeakerInfo key={id} speakerId={id}/>
                        )
                    })}
                </SpeakersWrapper>

            </LectureContent>

            {/* <ImgDetail>
                <picture>
                    <source media="(max-width: 800px)" srcSet={LectureBottom}/>
                    <source media="(min-width: 801px)" srcSet={LectureRight}/>
                    <Image src={LectureBottom} alt="Imagem de Detalhe"
                    width={500} height={500}/>
                </picture>
                
            </ImgDetail> */}
        </LectureWrapper>
    )
}

export default LectureItem;

const LectureWrapper = styled.article`
    background: var(--background-neutrals-primary, #1A1A1A);
    display: flex;   
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    margin: auto;
    border-radius: 1.5rem;
    border: 1px solid var(--outline-neutrals-secondary, #999);

    .lecture-description {
        width: 100%;

        p {
            font: 400 0.875rem / 1.5rem 'At Aero';
        }
    }

    @media screen and (min-width:800px) {
        padding: 1.5rem 1.5rem 1rem 1.5rem;
        border: 2px solid transparent;
        border-radius: 2rem;
        background: 
                linear-gradient( var(--background-neutrals-primary), var(--background-neutrals-primary)) padding-box, 
                linear-gradient(135deg, #f8efff 15%, #9638FF) border-box;

        .lecture-description {
            p {
                font: 400 1rem / 1.5rem 'At Aero';
            }
        }
    }

    @media screen and (min-width: 1200px) {
        padding: 2rem 2rem 1rem 2rem;
        border: 3px solid transparent;
    }
`

// const ImgDetail = styled.div`
//     width: inherit;
//     height: 6rem;
//     user-select: none;
//     overflow: hidden;
//     position: relative;

//     @media screen and (min-width: 800px) {
//         width: 25%;
//         height: auto;
//     }

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         object-position: left;

//         @media screen and (min-width:800px) {
//             position: absolute;
//             object-position: top;
//         }
//     }
// `;

const LectureContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
`

const LectureHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .lecture-header-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .lecture-header-info {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }


    h3 {
        font-size: 1.125rem;
    }

    label {
        font-family: 'At Aero Bold';
        font-size: 0.875rem;
    }

    .badge-wrapper {
        display: flex;
        width: fit-content;
        gap: 1rem;
    }

    .sponsor-logo {
        width: 4.55rem;
        height: 3.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 2px solid transparent;
        transition: all 0.2s ease-in-out;
        border-radius: 0.375rem 1rem;
        border: 1px solid var(--outline-neutrals-secondary, #999);

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        &:hover {
            outline: 2px solid var(--brand-primary);
        }
    }

    @media screen and (min-width:800px) {
        gap: 1rem;

        .lecture-header-info {
            gap: 1rem;
        }

        h3 {
            font-size: 1.75rem;
            line-height: 2rem;
        }

        label {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 1200px) {
        h3 {
            font-size: 2rem;
            line-height: 2.5rem;
        }

        label {
            font-size: 1.25rem;
        }
    }
`

const SpeakersWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    @media screen and (min-width:800px) {
        flex-direction: row;
        width: 100%;
        gap: 1rem;
        padding-top: 1rem;
    }

    @media screen and (min-width: 1200px) {
        gap: 2rem;
    }
`