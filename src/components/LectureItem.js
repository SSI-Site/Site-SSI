import React from 'react';
import styled from 'styled-components';

// components
// import ScheduleInformation from './ScheduleInformation';
import BadgeCO from './BadgeCO'
import SpeakerInfo from './SpeakerInfo'

// assets
import LectureBottom from '../../public/images/background_imgs/detail.png'
import LectureRight from '../../public/images/background_imgs/desktopDetail.png'

const LectureItem = ({ time, event }) => {

    return ( 
        <LectureWrapper>
            <LectureContent>
                <LectureHeader>
                    <h3>{event.title}</h3>
                    <label>{time.start.getHours()}:{time.start.getMinutes()} - {time.end.getHours()}:{time.end.getMinutes()}h</label>

                    <div className = "badgeWrapper">
                        {event.badges.map(i => 
                                <BadgeCO text = {i.text} themeIndex = {i.themeIndex}/> 
                            )
                        }
                    </div>
                    
                </LectureHeader>

                <div className = "lectureDescription">
                    <p>{event.description}</p>
                </div>
                
                <SpeakersWrapper>
                    <SpeakerInfo speaker = {event.speaker}/>
                    <SpeakerInfo speaker = {event.speaker}/>
                </SpeakersWrapper>

            </LectureContent>

            <div className = "imgDetail">
                <picture>
                    <source media = "(max-width: 800px)" srcSet = {LectureBottom}/>
                    <source media = "(min-width: 801px)" srcSet = {LectureRight}/>
                    <img src = { LectureBottom } alt = "Imagem de Detalhe"/>
                </picture>
                
            </div>
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

    @media screen and (min-width: 801px){
        flex-direction: row;
        justify-content: space-between;
       
    }

    @media screen and (min-width: 1024px){
        max-height: 688px;
    }

    .lectureDescription{
        width: 100%;
        max-width: 704px;
    }

    .imgDetail {
        width: inherit;
        height: 6em;
        user-select: none;

        @media screen and (min-width: 801px){
            width: 25%;
            height: auto;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;

        @media screen and (min-width: 801px){
            object-position: top;
        }
    }
`

const LectureContent = styled.div`
    width: 100%;
    padding: 2em;
    display: flex;
    gap: 1em;
    flex-direction: column;

    @media screen and (min-width: 1024px){
        padding: 3.5em;
    }
`

const LectureHeader = styled.header`
    display: flex;
    flex-direction: inherit;
    gap: inherit;

    .badgeWrapper{
        display: flex;
        width: fit-content;
        gap: 1em;
    }

    label{ 
        // LARGE VARIANT
        font-family: 'At Aero Bold';

        @media screen and (min-width: 801px){
            font: 700 1.125rem / 1.5rem 'At Aero Bold';
        }
    }

`

const SpeakersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media screen and (min-width: 801px){
        flex-direction: row;
    }
`