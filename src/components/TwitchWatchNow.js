import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import twitch from '../../services/twitch';

// assets
import TwitchLogo from '../../public/images/social_media/TwitchLogo.svg';

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
								<img src={TwitchLogo} alt="Twitch Logo" />
								<div className='text'>
									<h6 className="streaming">Online</h6>
									<p>Assistir transmissão</p>
								</div>
							</div>
							<div className='rightarrow'><div></div></div>
						</div>
					) : (
						<div className="offline">
							<img src={TwitchLogo} alt="Twitch Logo" />
							<div className='text'>
								<h6>Offline</h6>
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
	height: 6.75rem;

	a {
		display: flex;
		width: 100%;
		height: 100%;
	}

	img {
		width: 1.8rem;
		margin-right: 2rem;
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
		padding: 1.5rem;
		background-color: var(--color-neutral-900);
		border-radius: 12px;
		transition: 0.3s all ease-in-out;
	}

	.text {
		width: auto;
		height: 100%;
		display: flex;
    	flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: 8px;
	}

	.offline {
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
		margin-left: 32px;
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
		left: -32px;
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
		font: 400 1rem/1.25rem 'Space_Mono_Bold';
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
		width: 31rem;
		height: 7.5rem;

		img {
			width: 4rem;
		}

		.text {
			width: 100%;
		}

		h6 {
			font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
		}

		p {
			width: 100%;
			-webkit-line-clamp: 2; // number of lines to show
			line-clamp: 2;
        	font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
		}
	}
`