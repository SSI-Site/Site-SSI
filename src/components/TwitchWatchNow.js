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
					<img src={TwitchLogo} alt="Twitch Logo" />
					{isLiveStreaming ? (
						<div>
							<h4 className="streaming">Assista Agora</h4>
							{streamData.title ?
								<p>{streamData.title}</p>
								:
								<p>Clique aqui para acompanhar!</p>
							}
						</div>
					) : (
						<div>
							<h4>Offline</h4>
							<p>Indicaremos aqui quando estivermos online na Twitch.</p>
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
	margin: 16px 0 ;

	a {
		display: flex;
	}

	img {
		width: 3em;
		margin-right: 42px;
		margin-bottom: 5px;
	}

	div {
		display: flex;
    	flex-direction: column;
		align-items: flex-start;
		width: 50vw;
		max-width: 550px;
	}

	h4 {
		letter-spacing: 0.05em;
		color: white;
		position: relative;
    }

	@keyframes dot-blink {
		0% {
			opacity: 0;
		}
	}

	h4::before {
		content: '';
		position: absolute;
		left: -28px;
		top: calc(50% - 8px);
		width: 16px;
		height: 16px;
		background-color: #808080;
		border-radius: 50%;
	}

	.streaming::before {
		background-color: #FF4D4D;
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
	}

	p, h4:not(::before) {
		transition: all .2s;
	}

	:hover {

		p, h4 {
			color: var(--color-tertiary);
			filter: brightness(120%);
		}

		h4::before {
			filter: brightness(83.4%);
		}
	}

    @media (min-width:801px) {

		img {
			width: 80px ;
		}

		p {
			-webkit-line-clamp: 2; /* number of lines to show */
			line-clamp: 2;
		}

		h4::before {
			top: calc(50% - 10px);
		}
	}
`