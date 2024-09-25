import React from 'react';
import styled from 'styled-components';

// assets
import giftLocked from '../../public/images/gifts/gift-locked.png';
import giftUnlocked from '../../public/images/gifts/gift-unlocked.png';

const UserGiftCard = ({ gift, index, totalPres, presentialPres }) => {
    
    const locked = totalPres < gift.totalPres && presentialPres < gift.presentialPres;

    return (
        <GiftContainer tabIndex={0}>
            <div className={"gift-card-front " + (locked ? "locked-front" : "")} >
                <figure>
                    <img className="gift-img" src={gift.image} alt={`Brinde ${gift.name} SSI`} />
                </figure>
                <h6>{gift.name}</h6>
            </div>
            {locked ?
                <>
                    <div className='lock-icon'>
                        <svg width="62" height="81" viewBox="0 0 62 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.14249 80.0952C6.04725 80.0952 4.2536 79.3492 2.76153 77.8571C1.26947 76.3651 0.523438 74.5714 0.523438 72.4762V34.3809C0.523438 32.2857 1.26947 30.492 2.76153 29C4.2536 27.5079 6.04725 26.7619 8.14249 26.7619H11.952V19.1428C11.952 13.873 13.8092 9.38093 17.5234 5.66664C21.2377 1.95236 25.7298 0.0952148 30.9996 0.0952148C36.2695 0.0952148 40.7615 1.95236 44.4758 5.66664C48.1901 9.38093 50.0472 13.873 50.0472 19.1428V26.7619H53.8568C55.952 26.7619 57.7457 27.5079 59.2377 29C60.7298 30.492 61.4758 32.2857 61.4758 34.3809V72.4762C61.4758 74.5714 60.7298 76.3651 59.2377 77.8571C57.7457 79.3492 55.952 80.0952 53.8568 80.0952H8.14249ZM8.14249 72.4762H53.8568V34.3809H8.14249V72.4762ZM30.9996 61.0476C33.0949 61.0476 34.8885 60.3016 36.3806 58.8095C37.8726 57.3174 38.6187 55.5238 38.6187 53.4285C38.6187 51.3333 37.8726 49.5397 36.3806 48.0476C34.8885 46.5555 33.0949 45.8095 30.9996 45.8095C28.9044 45.8095 27.1107 46.5555 25.6187 48.0476C24.1266 49.5397 23.3806 51.3333 23.3806 53.4285C23.3806 55.5238 24.1266 57.3174 25.6187 58.8095C27.1107 60.3016 28.9044 61.0476 30.9996 61.0476ZM19.5711 26.7619H42.4282V19.1428C42.4282 15.9682 41.3171 13.2698 39.0949 11.0476C36.8726 8.82537 34.1742 7.71426 30.9996 7.71426C27.825 7.71426 25.1266 8.82537 22.9044 11.0476C20.6822 13.2698 19.5711 15.9682 19.5711 19.1428V26.7619Z" fill="#CACACA" />
                        </svg>
                    </div>

                    <div className='gift-card-back locked-back' id={"gift" + index}>
                        <img className="emoji-image" src={giftLocked} alt="sad emoji" />

                        <p className="card-title">Que pena...</p>
                        <p className='card-text'>Você ainda não assistiu palestras suficientes. :(</p>
                        <p className="card-text">Faltam:</p>
                        <div className="statusPres">
                            <div className='display-pres b0 '>
                                <span>{gift.totalPres - totalPres}</span>
                                <p>Totais</p>
                            </div>
                            <div className='display-pres b1'>
                                <span>{gift.presentialPres - presentialPres}</span>
                                <p>Presenciais</p>
                            </div>
                        </div>
                    </div>
                </>
            :
                <div className='gift-card-back' id={"gift" + index}>
                    <img className="emoji-image" src={giftUnlocked} alt="celebrating emoji" />

                    <p className="card-title">Parabéns!</p>
                    <p className="card-text">Você já pode retirar este brinde.</p>
                </div>
            }
            <button id={"btn" + index} className='info-button' onClick={() => flip(index)} tabIndex={0}>
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6567 5.96199L10.2388 7.37299L6.98375 4.10299L6.97075 17.708L4.97075 17.706L4.98375 4.13799L1.75375 7.35299L0.34375 5.93599L6.01375 0.291992L11.6567 5.96199Z" fill="#161616" />
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

export default UserGiftCard;


const GiftContainer = styled.div`
	width: 100%;
    max-width: 26.3rem;
	height: 24.625rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	overflow-y: hidden;
    position: relative;

    .card-title {
		font: 700 1.5rem/1.25rem 'AT Aero Bold';
	}

	.gift-card-front {
		width: 100%;
        max-width: 26.3rem;
		height: 24.625rem;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
        left: 0;
        right: 0;
		background-color: var(--color-primary-900);

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
	
	.locked-front {
		background-color: var(--color-neutral-800);
		filter: blur(3px);
	}

	.lock-icon {
        position: absolute;
        width: 8rem;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-neutral-secondary);
	}

	.gift-card-back {
		width: 100%;
        max-width: 26.3rem;
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
		background-color: var(--color-neutral-50);

		.emoji-image {
			width: 5rem;
			height: 5rem;
            margin-bottom: 0.5rem;
        }

		p {
			text-align: center;
			color: var(--color-neutral);
		}
		
		.card-text {
			font: 700 1.125rem/1.5rem 'AT Aero Bold';
		}

	}

	.locked-back {
		gap: 0.75rem;
        justify-content: flex-start;
		background-color: var(--color-neutral-secondary);

        .emoji-image {
            margin-bottom: 0;
        }

		p {
			color: var(--color-neutral-50);
		}

		.statusPres {
			width: 100%;
			display: flex;
			gap: 1rem;

			.display-pres {
				width: 100%;
				display: inline-block;
				padding: 0.125rem 0.5rem;

				span {
					font: 700 2rem/2.5rem 'AT Aero Bold';
				}

				p {
					text-align: left;
					font: 400 1rem/1.5rem 'AT Aero Bold';
				}
			}

			.b0 {
				background-color: var(--color-primary);
				
				p, span {
					color: var(--color-neutral-50);
				}
			}

			.b1 {
				background-color: var(--color-neutral-50);

				p, span {
					color: var(--color-primary);
				}
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
            var(--color-neutral-50) 50%,
            var(--color-primary) 50%
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
                fill: white;
            }
        }
    }

    button:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

	@media (min-width:1021px) {
        width: 26.3rem;

        .gift-card-front {
            width: 26.3rem;
            height: 24.625rem;
            gap: 1.12rem;
        }

        .gift-card-back {
            width: 26.3rem;
            height: 24.625rem;
            padding: 2rem;
        }

		&:hover, &:focus-visible {
			.gift-card-back {
				translate: 0 0;
			}
		}

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }

		.info-button {
			display: none;
		}

        .locked-back {
            justify-content: center;
        }
	}
`
