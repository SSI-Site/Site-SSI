import React from "react";
import styled from "styled-components";

// ASSETS
import InstagramIcon from '../../public/images/social_media/InstagramLogo.svg'
import LinkedinIcon from '../../public/images/social_media/LinkedinLogo.svg'
import SpeakerBottomDesktop from '../../public/images/background_imgs/detail.png'

const SpeakerCard = ({ speaker, setIsOpen }) => {

    document.body.style.overflow = 'hidden';

    return (
        <SpeakerWrapper>
            <SpeakerContent>
                <SpeakerHead>
                    <h6>Palestrante</h6>    
                    <div className = "close" onClick = {() => {setIsOpen(false); document.body.style.overflow = 'unset';}}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="currentColor"/>
                        </svg>
                    </div>
                </SpeakerHead>

                <SpeakerInfo>
                    <div className = 'imgDiv'>
                        <img src = {speaker['image']} alt = {`Foto de ${speaker['image']}`}/>
                    </div>

                    <div className = 'headTextWrapper'>
                        <div>
                            <h6>{speaker['name']}</h6>
                            <p>{speaker['pronouns']}</p>
                        </div>

                        <div>
                            <label>Cargo</label>
                            <p>{speaker['role']}</p>
                        </div>
                    </div>
                </SpeakerInfo>

                <SpeakerDesc>  
                    <div>
                        <h6>Sobre</h6>
                    </div>
                    
                    <div>
                        <p>{speaker['description']}</p>
                    </div>
                </SpeakerDesc>

                <SocialMedia>
                    <a href = {speaker['linkedin']} target="_blank" aria-label = {`Linkedin de ${speaker['name']}`}>
                        <img src = { LinkedinIcon } alt = "Linkedin"/>
                    </a>

                    <a href = {speaker['instagram']} target = "_blank" aria-label = {`Instagram de ${speaker['name']}`}>
                        <img src = { InstagramIcon } alt = "Instagram"/>                        
                    </a>
                    
                    {/* SLOTS PARA MAIS*/}
                </SocialMedia>
            </SpeakerContent>

            <div className = 'bottomImg'>
                <img src = {SpeakerBottomDesktop} />
            </div>
        </SpeakerWrapper>
    )
}

export default SpeakerCard

const SpeakerWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-neutral-800);
    z-index: 12;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation-name: slide-in;
    animation-duration: 500ms;

    @keyframes slide-in{
        0% {transform: translateX(100%);}
        100% {transform: translateX(0%);}   
    }

    .bottomImg{
        width: 100%;
        height: 10%;
        z-index: inherit;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: left;
        }
    }

    @media screen and (min-width: 1024px){
        width: 60%;
        right: 0;
    }
`

const SpeakerContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .5em; 
    z-index: 12;
`

const SpeakerHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75em;
    width: 100%;
    z-index: 13;

    div {
        padding: .5em .75em;
        background: linear-gradient(to right, var(--color-neutral-50) 50%, transparent 50%);
        background-position: right;
        background-size: 202% 100%;
        transition: 100ms all ease-out;
        cursor: pointer;
    }

    div:hover {
        background-position: left;

        svg {
            color: black;
        }
    }
    
    @media screen and (min-width: 1024px){
        position: absolute;
        top: 0;
        justify-content: flex-end;
        padding: 1.75em;

        h6 {
            display: none;
        }
    }
`

const SpeakerInfo = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.75em;
    padding: 0em 1.75em;
    margin-bottom: 1.7em; // 1.7em + gap .5em
    z-index: 12;

    label{
        font-family: 'AT Aero Bold';
    }

    .headTextWrapper{
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .imgDiv{
        width: 40%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media screen and (min-width: 1024px){
        justify-content: flex-start;
        gap: 4em;
        background-color: var(--color-primary-900);
        padding: 0em;

        .imgDiv{
            max-width: 30%;
        }

        .headTextWrapper{
            gap: 1rem;

            label {
                font-size: 1.2rem;
            }
        }
    }
`

const SpeakerDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    height: 100%;
    padding: 0em 1.75em;
    max-height: 23.5em;

    p {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
    
    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        
        div:nth-child(2){
            width: 72%; // imgWidth = 30%, então 70% + algoAí deixa alinhado.
        }
    }

    @media screen and (min-width: 1440px){
        padding: 4em;
    }
`

const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 0rem 1.75em;
    position: absolute;
    bottom: 3%;

    img {
        width: 100%;
    }
`