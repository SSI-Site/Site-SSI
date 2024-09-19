import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import youtube from '../../services/youtube';

const YoutubeWatchNow = () => {

	const [isLiveStreaming, setIsLiveStreaming] = useState(false)
    const [liveUrl, setLiveUrl] = useState('')

	const getStreamData = () => {
		youtube.getLiveStreamData()
        .then((url) => {
            if (url.includes('watch')) {
                setIsLiveStreaming(true)
            } else {
                setIsLiveStreaming(false)
            }
            setLiveUrl(url)
        })
        .catch(() => {
            setIsLiveStreaming(false)
        })
	}

	useEffect(() => {
		getStreamData();
	}, []);

	return (
		<>
			<YoutubeWatchNowWrapper>
				<a target="_blank" href={liveUrl}>
					{isLiveStreaming ? (
						<div className="online-wrap">
							<div className="online">
                                {/* Youtube Logo - ativo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M23.3332 35.0003L35.4432 28.0003L23.3332 21.0003V35.0003ZM50.3065 16.7303C50.6098 17.827 50.8198 19.297 50.9598 21.1637C51.1232 23.0303 51.1932 24.6403 51.1932 26.0403L51.3332 28.0003C51.3332 33.1103 50.9598 36.867 50.3065 39.2703C49.7232 41.3703 48.3698 42.7237 46.2698 43.307C45.1732 43.6103 43.1665 43.8203 40.0865 43.9603C37.0532 44.1237 34.2765 44.1937 31.7098 44.1937L27.9998 44.3337C18.2232 44.3337 12.1332 43.9603 9.72984 43.307C7.62984 42.7237 6.2765 41.3703 5.69317 39.2703C5.38984 38.1737 5.17984 36.7037 5.03984 34.837C4.8765 32.9703 4.8065 31.3603 4.8065 29.9603L4.6665 28.0003C4.6665 22.8903 5.03984 19.1337 5.69317 16.7303C6.2765 14.6303 7.62984 13.277 9.72984 12.6937C10.8265 12.3903 12.8332 12.1803 15.9132 12.0403C18.9465 11.877 21.7232 11.807 24.2898 11.807L27.9998 11.667C37.7765 11.667 43.8665 12.0403 46.2698 12.6937C48.3698 13.277 49.7232 14.6303 50.3065 16.7303Z" fill="#FF0000"/>
                                    <path d="M23.3332 35.0003L35.4432 28.0003L23.3332 21.0003V35.0003Z" fill="white"/>
                                </svg>
								<div className='text'>
									<h6 className="streaming">Ao vivo</h6>
									<p>Assistir transmissão</p>
								</div>
							</div>
							<div className='rightarrow'><div></div></div>
						</div>
					) : (
						<div className="offline">
                            {/* Youtube Logo - desativado */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <path d="M23.3332 35.0003L35.4432 28.0003L23.3332 21.0003V35.0003ZM50.3065 16.7303C50.6098 17.827 50.8198 19.297 50.9598 21.1637C51.1232 23.0303 51.1932 24.6403 51.1932 26.0403L51.3332 28.0003C51.3332 33.1103 50.9598 36.867 50.3065 39.2703C49.7232 41.3703 48.3698 42.7237 46.2698 43.307C45.1732 43.6103 43.1665 43.8203 40.0865 43.9603C37.0532 44.1237 34.2765 44.1937 31.7098 44.1937L27.9998 44.3337C18.2232 44.3337 12.1332 43.9603 9.72984 43.307C7.62984 42.7237 6.2765 41.3703 5.69317 39.2703C5.38984 38.1737 5.17984 36.7037 5.03984 34.837C4.8765 32.9703 4.8065 31.3603 4.8065 29.9603L4.6665 28.0003C4.6665 22.8903 5.03984 19.1337 5.69317 16.7303C6.2765 14.6303 7.62984 13.277 9.72984 12.6937C10.8265 12.3903 12.8332 12.1803 15.9132 12.0403C18.9465 11.877 21.7232 11.807 24.2898 11.807L27.9998 11.667C37.7765 11.667 43.8665 12.0403 46.2698 12.6937C48.3698 13.277 49.7232 14.6303 50.3065 16.7303Z" fill="#CACACA"/>
                            </svg>
							<div className='text'>
								<h6>Em breve</h6>
								<p>Ainda não começamos...</p>
							</div>
						</div>
					)}
				</a>
			</YoutubeWatchNowWrapper >
		</>
	)
}

export default YoutubeWatchNow;


const YoutubeWatchNowWrapper = styled.div`
	display: flex;
    flex-direction: row;
	align-items: center;
	width: 21rem;
	height: 5rem;

	a {
		display: flex;
		width: 100%;
		height: 100%;

        &:hover, &:focus-visible {
            .offline, .online-wrap {
                background-position-x: 90%; 
            }

            .offline {
                h6, p {
                    color: var(--color-neutral);
                }
            }

            .online-wrap {
                h6, p {
                    color: var(--color-primary);
                }
            }

            .rightarrow > div {
                left: 6px;
                border-top: 2px solid var(--color-primary);
                border-right: 2px solid var(--color-primary);
            }
        }
	}

	.online-wrap, .offline {
		width: 100%;
		height: 100%;
		display: flex;
    	flex-direction: row;
		align-items: center;
		padding: 0.75rem 1.5rem;
		transition: 0.3s all ease-in-out;
        border: 0;
	}

	.text {
		width: auto;
		height: 100%;
		display: flex;
    	flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.offline {
        display: flex;
        gap: 1.5rem;
        background-color: var(--color-neutral-800);

        background-image: linear-gradient(white, white);
        background-size: 200%;
        background-position-x: 210%;
        background-repeat: no-repeat;

        h6 {
            color: var(--color-content-neutrals-tertiary);
        }

        p {
            color: var(--color-content-neutrals-tertiary);
        }
	}

	.online-wrap {
		align-items: center;
		justify-content: space-between;
        background-color: var(--color-primary);

        background-image: linear-gradient(white, white);
        background-size: 200%;
        background-position-x: 210%;
        background-repeat: no-repeat;
	}

	.online {
		width: 100%;
		display: flex;
    	flex-direction: row;
        align-items: center;
		justify-content: flex-start;
        gap: 1.5rem;
	}

	@keyframes dot-blink {
		0% {
			opacity: 0;
		}
	}

    h6 {
        letter-spacing: 0.03rem;
        margin-left: 1.5rem;
        position: relative;
        transition: 0.3s ease-in-out;
    }

	h6::before {
		content: '';
		position: absolute;
		left: -1.5rem;
		top: calc(50% - 8px);
		width: 1rem;
		height: 1rem;
		background-color: var(--color-content-neutrals-tertiary);
		border-radius: 50%;
	}

	.streaming::before {
		background-color: #52C84D;
		animation: dot-blink 0.9s alternate-reverse infinite;
	}

    p {
        transition: 0.3s ease-in-out;
		width: 100%;
        font: 700 1rem/1.5rem 'AT Aero Bold';
    }

	p { // só é útil quando mostrávamos o título da palestra da live
		text-overflow: ellipsis;
		overflow-wrap: break-word;
		overflow: hidden;
		display: -webkit-box;
        line-clamp: 3;
		-webkit-line-clamp: 3; /* number of lines to show */
		-webkit-box-orient: vertical;
	}

	.rightarrow {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 12px;
		width: 12px;

		> div {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			border-top: 2px solid white;
			border-right: 2px solid white;
			transform: rotateY(0deg) rotate(45deg);
			transition: 0.3s ease-in-out;
		}
	}

    @media (min-width:560px) {
		width: 24rem;
		height: 5rem;

		.text {
			width: 100%;
		}

		p {
            font: 700 1.125rem/1.5rem 'AT Aero Bold';
			width: 100%;
			-webkit-line-clamp: 2; // number of lines to show
			line-clamp: 2;
		}
	}
`