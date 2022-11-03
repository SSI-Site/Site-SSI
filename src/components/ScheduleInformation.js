import React from 'react';
import styled from 'styled-components';
import borda from '../../public/images/borda.png'

const ScheduleInformation = ({ speakerPicture, speakerName, title, overview }) => {
    return (
        <>
            <ScheduleInformationStyle>
                <div className='first-section-schedule-box'>
                    {speakerPicture ? 
                        <img className='speaker-picture' src={speakerPicture} />
                        : 
                        <div className='space-div'></div>
                    }
                    <h3 className='speakerName'>{speakerName}</h3>
                    
                </div>

                <div className='second-section-schedule-box'>
                    <h2 className='speech-title'>{title}</h2>
                    <p className='speech-overview'>{overview}</p>
                </div>
            </ScheduleInformationStyle >
        </>
    )
}

export default ScheduleInformation;


const ScheduleInformationStyle = styled.div`
    width: 100%;
    background: rgba(196, 196, 196, 0.1);
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-image-source: url(${borda});
    border-image-slice: 35%;
    border-image-width: 50px;
    border-image-outset: 10px;
    border-image-repeat: stretch;

    .speaker-picture{
        width: 150px;
        height: 150px;
        border-radius: 75px 75px 0px 0px;
        margin-top: 3rem;
        object-fit: cover;
    }

    .space-div {
        height: 3.5rem;
    }

    .speakerName{
        font-size: 16px;
        margin-top: 0.5rem;
        text-align: center;
    }
    .second-section-schedule-box{
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .speech-title{
        width: 90%;
        font-size: 2rem;
        margin-top: .5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .speech-overview{
        width: 80%;
        text-align: justify;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        color: #FFFFFF;
        margin-bottom: 3rem;
        text-align: justify;
    }

    @media (min-width:600px) {

        /* flex-direction: row; */
        max-width: 500px;

        .space-div {
            height: 1.5rem;
        }

        .first-section-schedule-box{
            margin: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .speaker-picture{
            margin-top: 0px;
            width: 300px;
            height: 300px;
            border-radius: 150px 150px 0px 0px;
        }
    }


`