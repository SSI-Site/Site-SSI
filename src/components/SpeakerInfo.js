import React from 'react';
import styled from 'styled-components';

const SpeakerInfo = ({ speaker }) => {

    return (
        <>
            <SpeakerContainer>
                <figure className='speaker-image-container'>
                    {speaker['image'] &&
                        <img className='speaker-picture' src={speaker['image']} />
                    }
                </figure>

                <figcaption className='speaker-info-container'>
					<div className='speaker-info'>
						<h6>{speaker['name']}</h6> 
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
						</svg>
					</div>
					<div className='speaker-info-cargo'>
						<p>Cargo</p>
					</div>
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
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

	.speaker-image-container {
		flex: 40%;
	}

    .speaker-picture {
        width: 100%;
        min-width: 5rem;
        max-width: 34rem;
        min-height: 8rem;
        max-height: 14rem;
        object-fit: cover;
    }

	.speaker-info-container {
		flex: 60%;
	}

	.speaker-info {
		display: flex;
		justify-content: space-between;

		h6 {
        	font: 700 1rem/1.5rem 'AT Aero Bold';
		}

		svg {
			transform: translateY(0.5em);
		}
	}
	
	.speaker-info-cargo {
		p {
			font: 700 0.75rem/1.25rem 'AT Aero';
		}
	}

	@media(min-width:800px) {
		flex-direction: column;

		.speaker-info {
			background: linear-gradient(to right, var(--color-neutral-50) 50%, transparent 50%);
			background-position: right;
			background-size: 202% 100%;
			transition: 250ms all ease-out;

			svg path {
				/* Used to move svg down and align with name and cargo */
				transform: translateY(0em);
			}

			&:hover {
				background-position: left;
				h6 {
					color: #161616;
				}
				svg path {
					fill: #161616;
					transition: fill 300ms ease;
				}
			}
		}

		.speaker-info-container {
			width: 100%;
			max-width: 20rem;
			display: flex;
			flex-direction: column;
		}
	}

    @media (min-width:1024px) {
        gap: 1rem;

        .speaker-picture {
            height: 23.5rem;
            max-height: none;
            object-fit: cover;
			width: 20rem;
        }
    }
`
