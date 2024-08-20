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
						{/* TODO: definir `cargo`, já que o atributo não existe em `speaker` */}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
						</svg>
					</div>
					<div className='speaker-info-cargo'>
						<p>Cargo</p>
					</div>
					{/* INFO: website icon, maybe used later*/}

					{/* <div> */}
					{/* 	{speaker['website'] && */}
					{/* 		<a href={speaker['website']} target="_blank" rel="noreferrer"> */}
					{/* 			<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
					{/* 				<path d="M14.693 12C14.773 11.34 14.833 10.68 14.833 10C14.833 9.32 14.773 8.66 14.693 8H18.073C18.233 8.64 18.333 9.31 18.333 10C18.333 10.69 18.233 11.36 18.073 12M12.923 17.56C13.523 16.45 13.983 15.25 14.303 14H17.253C16.2842 15.6683 14.7471 16.932 12.923 17.56ZM12.673 12H7.99301C7.89301 11.34 7.83301 10.68 7.83301 10C7.83301 9.32 7.89301 8.65 7.99301 8H12.673C12.763 8.65 12.833 9.32 12.833 10C12.833 10.68 12.763 11.34 12.673 12ZM10.333 17.96C9.50301 16.76 8.83301 15.43 8.42301 14H12.243C11.833 15.43 11.163 16.76 10.333 17.96ZM6.33301 6H3.41301C4.37186 4.32721 5.9078 3.06149 7.73301 2.44C7.13301 3.55 6.68301 4.75 6.33301 6ZM3.41301 14H6.33301C6.68301 15.25 7.13301 16.45 7.73301 17.56C5.91163 16.9317 4.37785 15.6677 3.41301 14ZM2.59301 12C2.43301 11.36 2.33301 10.69 2.33301 10C2.33301 9.31 2.43301 8.64 2.59301 8H5.97301C5.89301 8.66 5.83301 9.32 5.83301 10C5.83301 10.68 5.89301 11.34 5.97301 12M10.333 2.03C11.163 3.23 11.833 4.57 12.243 6H8.42301C8.83301 4.57 9.50301 3.23 10.333 2.03ZM17.253 6H14.303C13.99 4.76146 13.5266 3.5659 12.923 2.44C14.763 3.07 16.293 4.34 17.253 6ZM10.333 0C4.80301 0 0.333008 4.5 0.333008 10C0.333008 12.6522 1.38658 15.1957 3.26194 17.0711C4.19053 17.9997 5.29292 18.7362 6.50617 19.2388C7.71943 19.7413 9.01979 20 10.333 20C12.9852 20 15.5287 18.9464 17.4041 17.0711C19.2794 15.1957 20.333 12.6522 20.333 10C20.333 8.68678 20.0744 7.38642 19.5718 6.17317C19.0693 4.95991 18.3327 3.85752 17.4041 2.92893C16.4755 2.00035 15.3731 1.26375 14.1598 0.761205C12.9466 0.258658 11.6462 0 10.333 0Z" fill="#F3F3F3"/> */}
					{/* 			</svg> */}
					{/**/}
					{/* 		</a> */}
					{/* 	} */}
					{/* </div> */}
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
			svg {
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
