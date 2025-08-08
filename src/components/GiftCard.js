import styled from 'styled-components';

// assets
import giftBox from '../../public/images/gifts/gift-box.png';

const GiftCard = ({ index, name, image, minPresence }) => {
	return (
		<GiftContainer tabIndex={0} id={"giftContainer" + index}>
			<div className='gift-card-front'>
				<figure>
					<img className="gift-img" 
						src={image} 
						alt={`Brinde ${name} SSI`} />
				</figure>
				<h6>{name}</h6>,
			</div>

			<div className='gift-card-back' id={"gift" + index}>
				<img className="icon-image" src={giftBox} alt="gift box" />

				<div className = "card-back-wrapper">
					<p className='card-back-text'>
					Para resgatar esse brinde você deve participar de um total de:
					</p>
					<div className='card-back-text highlight'>
						<p>{minPresence}</p>
					</div>
					
					<p className='card-back-text'>Palestras ou Workshops</p>
				
				</div>
			</div>
			<button id={"btn" + index} className='info-button' onClick={() => flip(index)} tabIndex={0}>
				<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z"/>
				</svg>
			</button>
		</GiftContainer>
	)
}

const flip = (index) => {
	let card = document.getElementById("gift" + index)
	let button = document.getElementById("btn" + index)
	card.classList.toggle("info-show")
	button.classList.toggle("button-flip")
}

export default GiftCard;


const GiftContainer = styled.div`
	width: 100%;
	height: 24.625rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	overflow-y: hidden;
    position: relative;

	.gift-card-front {
		width: 100%;
		height: 24.625rem;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
        left: 0;
        right: 0;
		background-color: var(--background-neutrals-secondary);
		border: 0.0625rem solid #7f7f7f;

        figure {
            height: 12rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

		.gift-img {
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: auto;
		}
	}

	.gift-card-back {
		width: 100%;
		height: 24.625rem;
		transition: 0.15s;
		translate: 0 101%;
		position: relative;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
		background-color: var(--background-neutrals-inverse);
		border: 0.0625rem solid #7f7f7f;

		.card-back-wrapper{
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.highlight{
			background-color: var(--brand-primary);
			padding: .25rem 1rem;
			width: fit-content;
			margin: auto;


			p{
				font: 700 2.5rem/3.5rem 'At Aero Bold';
				color: var(--content-neutrals-fixed-white);
			}
		}

		.icon-image {
			width: 4rem;
			height: 4rem;

			@media screen and (min-width: 1024px){
				width: 5rem;
				height: 5rem;
			}
            margin-bottom: 0.5rem;
        }

		.card-back-text {
			text-align: center;
			color: var(--background-neutrals-primary);
			font: 700 1.125rem/1.5rem 'AT Aero Bold';

			span {
				font: 700 1.125rem/1.5rem 'AT Aero Bold';
				color: var(--brand-primary);
			}
		}
		
	}

	.info-button {
        border: 0;
        display: flex;
        position: absolute;
        width: 3rem;
        height: 3rem;
        background: linear-gradient(
            to bottom,
            var(--background-neutrals-inverse) 50%,
            var(--brand-primary) 50%
        );
        background-size: 100% 200%;
        background-position: top;
        right: 1rem;
        bottom: 1rem;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease-in-out;

		svg {
			transition: 0.15s;
			path {
				fill: var(--content-neutrals-inverse);
			}
		}
    }

	.info-show {
		translate: 0 0;
	}

	.button-flip {

        background-position: bottom;
        svg {
            transform: rotate(-180deg);
			path {
				fill: var(--content-neutrals-fixed-white);
			}
        }
        background-color: var(--brand-primary);
    }

    button:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 2px;
    }

    button:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 2px;
    }

	@media (min-width:1021px) {
        .gift-card-front {
            height: 24.625rem;
            gap: 1.12rem;
        }

        .gift-card-back {
            height: 24.625rem;
            padding: 2rem;
        }

		&:hover, &:focus-visible {
			.gift-card-back {
				translate: 0 0;
			}
		}

        &:focus-visible {
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
        }

		.info-button {
			display: none;
		}
	}
`
