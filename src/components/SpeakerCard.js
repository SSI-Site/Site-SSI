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
                    <h4>Palestrante</h4>    
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
                            <h6>Cargo</h6>
                            <p>Estagiário de dados | Microsoft</p>
                        </div>
                    </div>
                </SpeakerInfo>

                <SpeakerDesc>
                    <h6>Sobre</h6>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis. Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis.</p>
                    </div>
                </SpeakerDesc>

                <SocialMedia>
                    <a href = "" target="_blank" aria-label = "Linkedin da Semana de Sistemas de Informação">
                        <img src = {LinkedinIcon} alt = "Linkedin"/>
                    </a>

                    <a href = "" target = "_blank" aria-label = "Instagram da Semana de Sistemas de Informação">
                        <img src = {InstagramIcon} alt = "Instagram"/>                        
                    </a>

                    {/* SLOTS PARA MAIS*/}
                </SocialMedia>
            </SpeakerContent>

            <img src = {SpeakerBottomDesktop} className = 'bottomImg'/>
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
    padding: 1.7em;
    display: flex;
    flex-direction: column;
    gap: 1em;   

    @media screen and (min-width: 1024px){
        padding: 0em;
        gap: .5em;
    }
`

const SpeakerHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0em;

    @media screen and (min-width: 1024px){
        display: none;
    }
`

const SpeakerInfo = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .imgDiv{
        border: 1px solid blue;
        width: 25%;
    }

    div > img{
        width: 100%;
    }

    @media screen and (min-width: 1024px){
        justify-content: flex-start;
        gap: 4rem;
        background-color: var(--color-primary-900);

        .headTextWrapper{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            & > div:nth-child(2){
                h6 {
                    font-size: 1.2rem;
                }
            }
        }
    }
`

const SpeakerDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    height: 100%;
    overflow: hidden;
    padding: 4rem;
    max-height: 21em;

    div {
        width: 90%;
    }

    p {
        height: 100%;
        overflow: scroll;
    }
    
    @media screen and (min-width: 1024px){
        flex-direction: row;
        gap: 1rem;
        height: 100%;

        h6{
            width: 35%;
        }
    }
`

const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 0rem 4rem;
    position: absolute;
    bottom: 5%;

    a {
        border: 1px solid red;
    }

    img {
        width: 100%;
    }
`