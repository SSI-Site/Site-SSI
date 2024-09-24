import React from "react";
import styled from "styled-components";

// assets
import SpeakerBottomDesktop from '../../public/images/background_imgs/detail.png';

const SpeakerCard = ({ speaker, setIsOpen }) => {

    return (
        <SpeakerWrapper>
            <SpeakerContent>
                <SpeakerHead>
                    <h6>Palestrante</h6>    
                    <div className="close" onClick={() => { setIsOpen(false); }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="currentColor"/>
                        </svg>
                    </div>
                </SpeakerHead>

                <SpeakerInfo>
                    <div className='imgDiv'>
                        <img src={speaker['image']} alt={`Foto de ${speaker['image']}`}/>
                    </div>

                    <div className='headTextWrapper'>
                        <div>
                            <h6>{speaker['name']}</h6>
                            <p>{speaker['pronouns']}</p>
                        </div>

                        <div>
                            <label>{speaker['role']}</label>
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
                    {speaker['linkedin'] && speaker['linkedin'] !== '' && 
                        <a href={speaker['linkedin']} target="_blank" aria-label={`Linkedin de ${speaker['name']}`}>
                            {/*Linkedin Logo*/}
                            <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn da Semana de Sistemas de Informação">
                                <mask id="mask0_2776_492" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                    <path fillRule="evenodd" d="M36.34 6.70333V32.6267V36.33H32.6356H6.70444H3V32.6267V6.70333V3H6.70444H32.6356H36.34V6.70333ZM31.7094 21.887V31.7008H26.5417V22.5721C26.5417 21.8846 26.2685 21.2252 25.7822 20.7391C25.2959 20.2529 24.6364 19.9798 23.9486 19.9798C22.5224 19.9798 21.374 21.1463 21.374 22.5721V31.7008H16.2063V16.2024H21.374V18.2577C22.2631 16.8134 24.0968 15.8506 25.6712 15.8506C27.2726 15.8506 28.8085 16.4865 29.9409 17.6186C31.0733 18.7506 31.7094 20.286 31.7094 21.887ZM12.387 12.3841C11.8034 12.9675 11.0119 13.2953 10.1866 13.2953C8.46406 13.2953 7.05637 11.9065 7.05637 10.1845C7.05637 9.35452 7.38616 8.55857 7.9732 7.97171C8.56023 7.38484 9.35643 7.05515 10.1866 7.05515C11.9092 7.05515 13.2984 8.46242 13.2984 10.1845C13.2984 11.0095 12.9705 11.8007 12.387 12.3841ZM12.7612 16.2024V31.7008H7.63056V16.2024H12.7612Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_2776_492)">
                                    <rect width="40" height="40" fill="white" />
                                </g>

                                {/*Mask utilizada para realizar a animação */}
                                <g mask="url(#mask0_2776_492)">
                                    <rect className="fillAnimation" fill="#9638FF" width="40" height="50" />
                                </g>
                            </svg>
                        </a>
                    }

                    {speaker['instagram'] && speaker['instagram'] !== '' &&
                        <a href={speaker['instagram']} target="_blank" aria-label={`Instagram de ${speaker['name']}`}>
                            {/*Instagram Logo*/}
                            <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="Instagram da Semana de Sistemas de Informação">
                                <mask id="mask0_2776_488" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                    <path d="M3.33105 3.33008V36.6634H36.6644V3.33008H3.33105ZM16.7727 12.2652C17.7973 11.8535 18.8936 11.6495 19.9977 11.6651C22.2079 11.6651 24.3275 12.5414 25.8903 14.1042C27.4531 15.667 28.3311 17.7866 28.3311 19.9967C28.3311 22.2069 27.4531 24.3265 25.8903 25.8893C24.3275 27.4521 22.2079 28.3301 19.9977 28.3301C18.8936 28.3457 17.7973 28.1417 16.7727 27.73C15.748 27.3182 14.8155 26.7069 14.0291 25.9317C13.2428 25.1564 12.6184 24.2325 12.1922 23.2138C11.766 22.1951 11.5465 21.1018 11.5465 19.9976C11.5465 18.8933 11.766 17.8001 12.1922 16.7813C12.6184 15.7626 13.2428 14.8388 14.0291 14.0635C14.8155 13.2882 15.748 12.6769 16.7727 12.2652ZM27.3287 9.80336C27.7015 9.41533 28.21 9.1866 28.7477 9.16508V9.16174C29.3003 9.16174 29.8302 9.38124 30.2209 9.77194C30.6116 10.1626 30.8311 10.6925 30.8311 11.2451C30.8311 11.7976 30.6116 12.3275 30.2209 12.7182C29.8302 13.1089 29.3003 13.3284 28.7477 13.3284C28.21 13.3069 27.7015 13.0782 27.3287 12.6901C26.9559 12.3021 26.7477 11.7849 26.7477 11.2467C26.7477 10.7086 26.9559 10.1914 27.3287 9.80336Z" fill="white" />
                                    <path d="M19.9977 14.9984C20.6619 14.9862 21.3219 15.1064 21.939 15.3521C22.5562 15.5978 23.1183 15.964 23.5924 16.4293C24.0664 16.8947 24.443 17.4498 24.7001 18.0623C24.9572 18.6748 25.0897 19.3324 25.0898 19.9967C25.0899 20.661 24.9577 21.3187 24.7008 21.9313C24.4439 22.5439 24.0675 23.0991 23.5935 23.5646C23.1196 24.0301 22.5577 24.3965 21.9406 24.6424C21.3235 24.8883 20.6636 25.0088 19.9994 24.9967C18.6733 24.9967 17.4015 24.47 16.4639 23.5323C15.5262 22.5946 14.9994 21.3228 14.9994 19.9967C14.9994 18.6707 15.5262 17.3989 16.4639 16.4612C17.4015 15.5235 18.6733 14.9967 19.9994 14.9967L19.9977 14.9984Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_2776_488)">
                                    <rect x="0.330078" y="0.330078" width="40" height="40" fill="white" />
                                </g>
                                {/*Mask utilizada para realizar a animação */}
                                <g mask="url(#mask0_2776_488)">
                                    <rect className="fillAnimation" fill="#9638FF" width="40" height="40" />
                                </g>
                            </svg>                     
                        </a>
                    }
                    
                    {/* SLOTS PARA MAIS*/}
                </SocialMedia>
            </SpeakerContent>

            <div className='bottomImg'>
                <img src={SpeakerBottomDesktop} />
            </div>
        </SpeakerWrapper>
    )
}

export default SpeakerCard

const SpeakerWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-neutral-800);
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation-name: slide-in;
    animation-duration: 0.15s;

    @keyframes slide-in {
        0% {transform: translateX(100%);}
        100% {transform: translateX(0%);}   
    }

    .bottomImg {
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

    @media screen and (min-width:1024px) {
        right: 0;
        left: unset;
    }
`

const SpeakerContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 15;
`

const SpeakerHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75em;
    width: 100%;
    z-index: 16;

    div {
        padding: .5em .75em;
        background: linear-gradient(to right, var(--color-neutral-50) 50%, transparent 50%);
        background-position: right;
        background-size: 202% 100%;
        transition: 0.15s all ease-out;
        cursor: pointer;
    }

    div:hover {
        background-position: left;

        svg path {
            fill: var(--color-neutral);
        }
    }
    
    @media screen and (min-width:1024px) {
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
    margin-bottom: 1.7em;
    z-index: 15;

    label {
        font-family: 'AT Aero Bold';
    }

    .headTextWrapper {
        display: flex;
        flex-direction: column;
        gap: .5em;

        p {
            font-family: 'AT Aero';
            font-weight: 400;
        }
    }

    .imgDiv {
        width: 40%;
        max-width: 14rem;
        aspect-ratio: 1 / 1;
        position: relative;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media screen and (min-width:1024px) {
        justify-content: flex-start;
        gap: 4em;
        background-color: var(--color-primary-900);
        padding: 0em;

        .imgDiv {
            max-width: 25%;
        }

        .headTextWrapper {
            gap: 1rem;

            label {
                font-size: 1.2rem;
            }
        }
    }

    @media screen and (min-width:1440px) {
        margin-bottom: 0;
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
        font-family: 'AT Aero';
        font-weight: 400;
    }

    @media screen and (min-width:801px) {
        h6 {
            font: 700 1.125rem/1.5rem 'AT Aero Bold';
        }
    }
    
    @media screen and (min-width:1024px) {
        flex-direction: row;
        justify-content: space-between;
        
        div:nth-child(2) {
            width: 72%; // imgWidth = 30%, então 70% + algoAí deixa alinhado.
        }
    }

    @media screen and (min-width:1440px) {
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

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fillAnimation {
        transform: translateX(-100%);
        transition: all 0.15s ease-out;
    }

    .animation:hover, a:focus-visible {
        cursor: pointer;
        transition: all 0.15s ease-out;

        .fillAnimation {
            transform: translateX(0);
        }
    }

    a:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
    
    @media screen and (min-width:1440px) {
        padding-left: 4em;
    }
`