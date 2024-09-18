import React from 'react';
import styled from 'styled-components';

// components
import BadgeCO from './BadgeCO';
import SpeakerInfo from './SpeakerInfo';

// assets
import LectureRight from '../../public/images/background_imgs/desktopDetail.png';
import LectureBottom from '../../public/images/background_imgs/detail.png';
import { formatTime } from '../../utils/format-time';

const LectureItem = ({ time, event }) => {

    return (
        <LectureWrapper>
            <LectureContent>
                <LectureHeader>
                    <h3>{event.title}</h3>

                    {event.endTime ?
                        <label>{formatTime(time)} - {formatTime(event.endTime)}</label>
                        :
                        <label>{formatTime(time)}</label>
                    }

                    <div className='badgeWrapper'>
                        <BadgeCO
                            text={event.local === 'presential'? 'Presencial': 'Online'}
                            themeIndex={event.local === 'presential' ? 5 : 9}
                            />

                        {event.activityType &&
                            <BadgeCO
                            text={event.activityType}
                            themeIndex={event.activityType === 'Workshop'? 1 : 2}
                            />
                        }
                    </div>
                    
                </LectureHeader>

                <div className = "lectureDescription">
                    <p>{event.description}</p>
                </div>

                {Object.entries(event.speakers).map(([key, speaker], index) => {
                    return (
                        <SpeakersWrapper key = {index}>
                            <SpeakerInfo speaker = {speaker}/>
                        </SpeakersWrapper>
                    )
                })}

            </LectureContent>

            <ImgDetail>
                <picture>
                    <source media = "(max-width: 800px)" srcSet = {LectureBottom}/>
                    <source media = "(min-width: 801px)" srcSet = {LectureRight}/>
                    <img src = { LectureBottom } alt = "Imagem de Detalhe"/>
                </picture>
                
            </ImgDetail>
        </LectureWrapper>
     )
}
 
export default LectureItem;

const LectureWrapper = styled.article`
    background-color: var(--color-background-neutrals-secondary);
    display: flex;   
    flex-direction: column;
    gap: 1em;
    width: 100%;
    max-width: 1224px;
    margin: auto;

    @media screen and (min-width:801px) {
        flex-direction: row;
        justify-content: space-between;
    }

    .lectureDescription {
        width: 100%;
        max-width: 704px;

        p {
            font: 400 0.875rem / 1.5rem 'At Aero';
        }

        @media screen and (min-width:801px) {
            p {
                font: 400 1rem / 1.5rem 'At Aero';
            }
        }
    }
`

const ImgDetail = styled.div`
    width: inherit;
    height: 6em;
    user-select: none;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 801px) {
        width: 25%;
        height: auto;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;

        @media screen and (min-width: 801px){
            position: absolute;
            object-position: top;
        }
    }
`;

const LectureContent = styled.div`
    width: 100%;
    padding: 2em 1.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    box-sizing: border-box;

    @media screen and (min-width: 1024px) {
        padding: 3.5em;
    }
`

const LectureHeader = styled.header`
    display: flex;
    flex-direction: inherit;
    gap: inherit;

    .badgeWrapper {
        display: flex;
        width: fit-content;
        gap: 1em;
    }

    label { 
        // LARGE VARIANT
        font-family: 'At Aero Bold';

        @media screen and (min-width: 801px) {
            font: 700 1.125rem / 1.5rem 'At Aero Bold';
        }
    }
`

const SpeakersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media screen and (min-width:801px) {
        flex-direction: row;
    }
`