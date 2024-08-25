import React, { useState } from "react";
import styled from "styled-components";


// ASSETS
import Close from '../../public/images/icons/close.svg'
import MemberShadow from '../../public/images/co_members/MemberShadow.png'
import InstagramIcon from '../../public/images/social_media/InstagramLogo.svg'
import LinkedinIcon from '../../public/images/social_media/LinkedinLogo.svg'
import SpeakerBottom from '../../public/images/background_imgs/SpeakerBottom.png'

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
                    <div>
                        <img src = {MemberShadow}/>
                    </div>

                    <div>
                        <div>
                            <h6>Fulano da Silva</h6>
                            <p>ele/dele</p>
                        </div>

                        <div>
                            <h6>Cargo</h6>
                            <p>tomi</p>
                        </div>
                    </div>
                </SpeakerInfo>

                <SpeakerDesc>
                    <h6>Sobre</h6>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis. Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis. </p>
                </SpeakerDesc>

                <SocialMedia>
                    <img src = {LinkedinIcon} alt = ""/>
                    <img src = {InstagramIcon} alt = ""/>
                </SocialMedia>
            </SpeakerContent>

            <img src = {SpeakerBottom} className = 'bottomImg'/>
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
`

const SpeakerContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.7em;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

const SpeakerHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0em;
`

const SpeakerInfo = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: 1px solid green;
    gap: 1rem;

div{
    width: 100%;
}

div img{
    width: 100%;
    border: 1px solid red;
}
`

const SpeakerDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    height: 100%;
    overflow: hidden;
    p {
        max-height: 23.5em;
    }
`

const SocialMedia = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`