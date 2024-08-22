import React from 'react';
import styled from 'styled-components';

const SpeakerInfo = ({ speaker }) => {

    return (
        <>
            <SpeakerContainer>
                <figure className='speaker-image-container'>
                    {speaker['image'] &&
                        <img src={speaker['image']} alt={`Foto do palestrante ${speaker['name']}`} />
                    }
                </figure>

                <figcaption className='speaker-info-container'>
					<div className='speaker-info' tabindex="0" onClick={()=>{/** Adicionar aqui a lógica para abrir o card do palestrante */}}>
						<p>{speaker['name']}</p> 
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
						</svg>
					</div>
                    {speaker['role'] &&
                        <div className='speaker-info-cargo'>
                            <p>{speaker['role']}</p>
                        </div>
                    }
                </figcaption>
            </SpeakerContainer >
        </>
    )
}

export default SpeakerInfo;


const SpeakerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding-right: 0.25rem;

	.speaker-image-container {
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
	}

	.speaker-info-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    
        .speaker-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            overflow-wrap: break-word;
            word-wrap: break-word;

            p {
                font: 700 1rem/1.5rem 'AT Aero Bold';
                flex-grow: 1;
                line-height: 1.25rem;
            }
    
            svg {
                flex-shrink: 0;
            }
    
            &:hover, &:focus-visible {
                background-position: left;

                p {
                    color: var(--color-neutral);
                }

                svg path {
                    fill: var(--color-neutral);
                    transition: fill 300ms ease;
                }
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 2px;
            }
        }
        
        .speaker-info-cargo p {
            font: 700 0.75rem/1.25rem 'AT Aero';
        }
	}

	@media(min-width:801px) {
		flex-direction: column;
        width: 14.5rem;

        .speaker-image-container {
            width: 100%;
            height: 12.5rem;
        }

        .speaker-info-container {
			display: flex;
			flex-direction: column;
			width: 100%;
            gap: 0.25rem;
            cursor: pointer;
            
            .speaker-info {
                padding-inline: 0.25rem;
                background: linear-gradient(to right, var(--color-neutral-50) 50%, transparent 50%);
                background-position: right;
                background-size: 202% 100%;
                transition: 250ms all ease-out;
    
                p {
                    font: 700 1.125rem/1.5rem 'AT Aero Bold';
                }
    
                svg path {
                    transform: translateY(0em);
                }
            }

            .speaker-info-cargo {
                padding-inline: 0.25rem;

                p {
                    font: 700 0.875rem/1.5rem 'AT Aero';
                }
            }
        }
	}
`
