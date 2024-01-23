import React from 'react';
import styled from 'styled-components';

const SpeakerInfo = ({ speaker }) => {

    return (
        <>
            <SpeakerContainer>
                <div className='speaker-image-name'>
                    {speaker['image'] &&
                        <img className='speaker-picture' src={speaker['image']} />
                    }

                    <p className='speaker-name'>{speaker['name']}</p>
                </div>

                <div className='speaker-links'>
                    {speaker['website'] &&
                        <a href={speaker['website']} target="_blank" rel="noreferrer">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.693 12C14.773 11.34 14.833 10.68 14.833 10C14.833 9.32 14.773 8.66 14.693 8H18.073C18.233 8.64 18.333 9.31 18.333 10C18.333 10.69 18.233 11.36 18.073 12M12.923 17.56C13.523 16.45 13.983 15.25 14.303 14H17.253C16.2842 15.6683 14.7471 16.932 12.923 17.56ZM12.673 12H7.99301C7.89301 11.34 7.83301 10.68 7.83301 10C7.83301 9.32 7.89301 8.65 7.99301 8H12.673C12.763 8.65 12.833 9.32 12.833 10C12.833 10.68 12.763 11.34 12.673 12ZM10.333 17.96C9.50301 16.76 8.83301 15.43 8.42301 14H12.243C11.833 15.43 11.163 16.76 10.333 17.96ZM6.33301 6H3.41301C4.37186 4.32721 5.9078 3.06149 7.73301 2.44C7.13301 3.55 6.68301 4.75 6.33301 6ZM3.41301 14H6.33301C6.68301 15.25 7.13301 16.45 7.73301 17.56C5.91163 16.9317 4.37785 15.6677 3.41301 14ZM2.59301 12C2.43301 11.36 2.33301 10.69 2.33301 10C2.33301 9.31 2.43301 8.64 2.59301 8H5.97301C5.89301 8.66 5.83301 9.32 5.83301 10C5.83301 10.68 5.89301 11.34 5.97301 12M10.333 2.03C11.163 3.23 11.833 4.57 12.243 6H8.42301C8.83301 4.57 9.50301 3.23 10.333 2.03ZM17.253 6H14.303C13.99 4.76146 13.5266 3.5659 12.923 2.44C14.763 3.07 16.293 4.34 17.253 6ZM10.333 0C4.80301 0 0.333008 4.5 0.333008 10C0.333008 12.6522 1.38658 15.1957 3.26194 17.0711C4.19053 17.9997 5.29292 18.7362 6.50617 19.2388C7.71943 19.7413 9.01979 20 10.333 20C12.9852 20 15.5287 18.9464 17.4041 17.0711C19.2794 15.1957 20.333 12.6522 20.333 10C20.333 8.68678 20.0744 7.38642 19.5718 6.17317C19.0693 4.95991 18.3327 3.85752 17.4041 2.92893C16.4755 2.00035 15.3731 1.26375 14.1598 0.761205C12.9466 0.258658 11.6462 0 10.333 0Z" fill="#F3F3F3"/>
                            </svg>

                        </a>
                    }
                    {speaker['linkedin'] &&
                        <a href={speaker['linkedin']} target="_blank" rel="noreferrer">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.333 0C16.8634 0 17.3721 0.210714 17.7472 0.585786C18.1223 0.960859 18.333 1.46957 18.333 2V16C18.333 16.5304 18.1223 17.0391 17.7472 17.4142C17.3721 17.7893 16.8634 18 16.333 18H2.33301C1.80257 18 1.29387 17.7893 0.918794 17.4142C0.543721 17.0391 0.333008 16.5304 0.333008 16V2C0.333008 1.46957 0.543721 0.960859 0.918794 0.585786C1.29387 0.210714 1.80257 0 2.33301 0H16.333ZM15.833 15.5V10.2C15.833 9.33539 15.4895 8.5062 14.8782 7.89483C14.2668 7.28346 13.4376 6.94 12.573 6.94C11.723 6.94 10.733 7.46 10.253 8.24V7.13H7.46301V15.5H10.253V10.57C10.253 9.8 10.873 9.17 11.643 9.17C12.0143 9.17 12.3704 9.3175 12.633 9.58005C12.8955 9.8426 13.043 10.1987 13.043 10.57V15.5H15.833ZM4.21301 5.56C4.65857 5.56 5.08589 5.383 5.40095 5.06794C5.71601 4.75288 5.89301 4.32556 5.89301 3.88C5.89301 2.95 5.14301 2.19 4.21301 2.19C3.76479 2.19 3.33493 2.36805 3.018 2.68499C2.70106 3.00193 2.52301 3.43178 2.52301 3.88C2.52301 4.81 3.28301 5.56 4.21301 5.56ZM5.60301 15.5V7.13H2.83301V15.5H5.60301Z" fill="#F3F3F3"/>
                            </svg>

                        </a>
                    }
                </div>
            </SpeakerContainer >
        </>
    )
}

export default SpeakerInfo;


const SpeakerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    .speaker-picture {
        width: 100%;
        min-width: 5rem;
        max-width: 34rem;
        min-height: 8rem;
        max-height: 14rem;
        border-radius: 16px;
        object-fit: cover;
    }

    .speaker-image-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }

    .speaker-name {
        font: 400 0.75rem/1.25rem 'AT Aero';
        text-align: center;
    }

    .speaker-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 0.5rem;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            width: 2rem;
            height: 2rem;
            background-color: var(--color-neutral-700);
            border-radius: 8px;
            transition: 0.3s all ease-in-out;

            &:hover {
                background-color: var(--color-neutral-600);
            }
        }
    }

    @media (min-width:400px) {
        .speaker-name {
            font: 400 0.875rem/1.25rem 'AT Aero';
        }

        .speaker-links {
            a {
                padding: 0;
                width: 2.75rem;
                height: 2.75rem;
            }
        }
    }

    @media (min-width:1024px) {
        gap: 1rem;

        .speaker-image-name {
            gap: 1rem;
        }

        .speaker-name {
            font: 400 1.25rem/1.5rem 'AT Aero Bold';
        }

        .speaker-picture {
            height: 23.5rem;
            max-height: none;
            border-radius: 16px;
            object-fit: cover;
        }
        
    }
`