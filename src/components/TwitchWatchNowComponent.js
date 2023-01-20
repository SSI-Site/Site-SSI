import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

// assets
import TwitchLogo from '../../public/images/social_media/TwitchLogo.svg'


const TwitchWatchNowComponent = () => {
	const [isLiveStreaming, setIsLiveStreaming] = useState(false);
	const [streamData, setStreamData] = useState({});


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

export default TwitchWatchNowComponent;


const TwitchWatchNowWrapper = styled.div`
	display: flex;
    flex-direction: row;
	align-items: center;
	margin: 150px 0 ;

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
		font-family: 'Bebas Neue';
		font-weight: 400;
		font-size: 2rem;
		letter-spacing: 0.05em;
		color: white;

		position: relative;
    }

	h4::before {
		position: absolute;
		left: -28px;
		top: calc(50% - 8px);
		width: 16px;
		height: 16px;
		background-color: #C4C4C4;
		border-radius: 50%;
		transition: all 0.2s;
		content: '';
	}

	.streaming::before {
		background-color: #FF4D4D;
	}

	p {
		font-family: 'Roboto';
		font-weight: 400;
		font-size: 1.3rem;
		text-overflow: ellipsis;
		overflow-wrap: break-word;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3;
   		-webkit-box-orient: vertical;
	}

	p, h4 {
		transition: all .2s;
	}

	:hover {
		p, h4 {
			color: var(--color-tertiary);
			filter: brightness(120%);
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
	}

`