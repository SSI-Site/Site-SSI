import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

// assets
import TwitchLogo from '../../public/images/social_media/TwitchLogo.svg'

import saphira from '../../services/saphira'

const TwitchWatchNowComponent = () => {

	const [descLive, setDescLive] = useState('')

	const fetchTwitch = () => {
		saphira.watchNowTwitch()
			.then(data => {

				setDescLive(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.`)
			}).catch(error => {

				console.log(error)
			})
	}

	useEffect(() => {

		setTimeout(fetchTwitch, 3000)
	}, [])

	const isTwitchOnline = () => descLive.length > 0

	return (
		<>
			<TwitchWatchNowWrapper>
				<img src={TwitchLogo} alt="Twitch Logo" />
				{isTwitchOnline() ? (
					<div>
						<h4 className="streaming">Assista Agora</h4>
						<p title={descLive}>{descLive}</p>
					</div>
				) : (
					<div>
						<h4>Offline</h4>
						<p>Aguarde por Mais...</p>
					</div>
				)}

			</TwitchWatchNowWrapper >
		</>
	)
}

export default TwitchWatchNowComponent;


const TwitchWatchNowWrapper = styled.div`

	display: flex;
    flex-direction: row;
	align-items: center;
	margin: 16px 0;

	img {
		width: 3em;
		margin-right: 42px;
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


    @media (min-width:480px) {

    }

    @media (min-width:600px) {

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

    @media (min-width:1021px) {

    }

    @media (min-width:1281px) {

    }

    @media (min-width:1400px) {

    }

    @media (min-width:2200px) {
        /* 4k */

    }

`