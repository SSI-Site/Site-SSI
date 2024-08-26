import React, { useState } from "react";
import styled from "styled-components";

// ASSETS
import Close from '../../public/images/icons/close.svg'
import MemberShadow from '../../public/images/co_members/MemberShadow.png'
import InstagramIcon from '../../public/images/social_media/InstagramLogo.svg'
import LinkedinIcon from '../../public/images/social_media/LinkedinLogo.svg'
import SpeakerBottom from '../../public/images/background_imgs/SpeakerBottom.png'
import SpeakerBottomDesktop from '../../public/images/background_imgs/detail.png'

const SpeakerCard = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <SpeakerWrapper>
            <SpeakerContent>
                <SpeakerHead>
                    <h6>Palestrante</h6>    
                    <img src = {Close}/>
                </SpeakerHead>

                <SpeakerInfo>
                    <div className = 'imgDiv'>
                        <img src = {MemberShadow}/>
                    </div>

                    <div className = 'headTextWrapper'>
                        <div>
                            <h6>Fulano da Silva</h6>
                            <p>ele/dele</p>
                        </div>

                        <div>
                            <label>Cargo</label>
                            <p>Website Developer</p>
                        </div>
                    </div>
                </SpeakerInfo>

                <SpeakerDesc>  
                    <div>
                        <h6>Sobre</h6>
                    </div>
                    
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis. </p>
                    </div>
                </SpeakerDesc>

                <SocialMedia>
                    <a href = "" target="_blank" aria-label = "Linkedin da Semana de Sistemas de Informação">
                        <img src = { LinkedinIcon } alt = "Linkedin"/>
                    </a>

                    <a href = "" target = "_blank" aria-label = "Instagram da Semana de Sistemas de Informação">
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
    width: 100vw;
    height: 100vh;
    background-color: var(--color-neutral-800);
    z-index: 12;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    .bottomImg{
        width: 100%;
        height: 10%;

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
`

const SpeakerHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75em;
    
    @media screen and (min-width: 1024px){
        display: none;
    }
`

const SpeakerInfo = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.75em;
    padding: 0em 1.75em;
    margin-bottom: 1.7em; // 1.7em + gap .5em

    label{
        font-family: 'AT Aero Bold';
    }

    .headTextWrapper{
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .imgDiv{
        border: 1px solid blue;
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