import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import twitch from '../../services/twitch';


const TwitchWatchNow = () => {
	
	const [isLiveStreaming, setIsLiveStreaming] = useState(false);
	const [streamData, setStreamData] = useState({});

	const getStreamData = () => {
		twitch.getStreamData()
			.then((res) => {
				const streamsData = res.data?.data;

				if (streamsData && streamsData.length > 0) {
					setIsLiveStreaming(true);
					setStreamData({ ...streamsData[0] });
				} else {
					setIsLiveStreaming(false);
				}
			})
			.catch(() => {
				setIsLiveStreaming(false);
			});
	}

	useEffect(() => {
		getStreamData();
	}, []);

	return (
		<>
			<TwitchWatchNowWrapper>
				<a target="blank" href="https://www.twitch.tv/each_ssi">
					{isLiveStreaming ? (
						<div className="online-wrap">
							<div className="online">
                                {/* Twitch Logo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                <path d="M27.1596 13.837H30.4963V23.8237H27.1596M36.3296 13.837H39.6663V23.8237H36.3296M16.3329 4.66699L8.00293 12.997V43.0037H17.9896V51.3337L26.3429 43.0037H32.9929L47.9963 28.0003V4.66699M44.6596 26.3437L38.0096 32.9937H31.3363L25.5029 38.827V32.9937H17.9896V8.00366H44.6596V26.3437Z" fill="white"/>
                                </svg>
								<div className='text'>
									<h6 className="streaming">Online</h6>
									<p>Assistir transmissão</p>
								</div>
							</div>
							<div className='rightarrow'><div></div></div>
						</div>
					) : (
						<div className="offline">
                            {/* Twitch Logo */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <path d="M27.1596 13.837H30.4963V23.8237H27.1596M36.3296 13.837H39.6663V23.8237H36.3296M16.3329 4.66699L8.00293 12.997V43.0037H17.9896V51.3337L26.3429 43.0037H32.9929L47.9963 28.0003V4.66699M44.6596 26.3437L38.0096 32.9937H31.3363L25.5029 38.827V32.9937H17.9896V8.00366H44.6596V26.3437Z" fill="white"/>
                            </svg>
							<div className='text'>
								<h6>offline</h6>
								<p>Ainda não começamos...</p>
							</div>
						</div>
					)}
				</a>
			</TwitchWatchNowWrapper >
		</>
	)
}

export default TwitchWatchNow;


const TwitchWatchNowWrapper = styled.div`
	display: flex;
    flex-direction: row;
	align-items: center;
	width: 21rem;
	height: 5rem;

	a {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.online-wrap {
		align-items: center;
		justify-content: space-between;
		border: 4px solid var(--color-primary);

		&:hover {
			background-color: var(--color-neutral-800);
		}

		&:active {
			background-color: var(--color-neutral-700);
		}
	}

	.online-wrap, .offline {
		width: 100%;
		height: 100%;
		display: flex;
    	flex-direction: row;
		align-items: center;
		padding: 0.75rem 1.5rem;
		background-color: var(--color-neutral-900);
		transition: 0.3s all ease-in-out;
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
		border: 4px solid transparent;

		&:hover {
			background-color: var(--color-neutral-700);
		}

		:active {
			background-color: var(--color-neutral-600);
		}
	}

	.online {
		width: 100%;
		height: 100%;
		display: flex;
    	flex-direction: row;
		justify-content: flex-start;
	}

	h6 {
		letter-spacing: 0.03rem;
		color: var(--color-neutral-100);
		margin-left: 24px;
		position: relative;
    }

	@keyframes dot-blink {
		0% {
			opacity: 0;
		}
	}

	h6::before {
		content: '';
		position: absolute;
		left: -24px;
		top: calc(50% - 8px);
		width: 16px;
		height: 16px;
		background-color: var(--color-neutral-400);
		border-radius: 50%;
	}

	.streaming::before {
		background-color: #14AE5C;
		animation: dot-blink 0.9s alternate-reverse infinite;
	}

	p {
		text-overflow: ellipsis;
		overflow-wrap: break-word;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3;
		-webkit-box-orient: vertical;
		width: 100%;
		font: 400 1rem/1.25rem 'AT Aero Bold';
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
			border-top: 2px solid var(--color-neutral-100);
			border-right: 2px solid var(--color-neutral-100);
			transform: rotateY(0deg) rotate(45deg);
			transition: 0.3s ease-in-out;
		}
	}

	:hover, :active {

		.rightarrow > div{
			left: 6px;
		}
	}

    @media (min-width:560px) {
		width: 25rem;
		height: 5rem;

		.text {
			width: 100%;
		}

		h6 {
			font: 400 1.5rem/1.75rem 'AT Aero Bold';
		}

		p {
			width: 100%;
			-webkit-line-clamp: 2; // number of lines to show
			line-clamp: 2;
		}
	}
`