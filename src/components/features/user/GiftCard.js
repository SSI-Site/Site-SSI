import styled from 'styled-components'
import Image from 'next/image'

function GiftCard({ gift, presenceCount }) {
    if (!gift) return

    if (gift.collected === true) {
        return (
            <GiftCardElement>
                <div className='gift-card collected'>
                    <Image src={gift.image} height={256} width={256} alt={gift.name} />
                    <div className='collected-overlay'>
                        <div className='collected-text'>
                            <p>Resgatado!</p>
                        </div>
                    </div>
                </div>
            </GiftCardElement>
        )
    }
    else if (gift.completed === true) {
        return (
            <GiftCardElement>
                <div className="gift-card completed">
                    <Image src={gift.image} height={256} width={256} alt={gift.name} />
                    <p>Disponível para retirada!</p>
                </div>
            </GiftCardElement>
        )
    }
    else {
        return (
            <GiftCardElement>
                <div className="gift-card incomplete">
                    <Image src={gift.image} height={256} width={256} alt={gift.name} />
                    <label>{presenceCount}/{gift.minPresence}</label>
                </div>
            </GiftCardElement>
        )
    }
}

export default GiftCard;

const GiftCardElement = styled.div`
    width: 7.75rem;
    height: 10rem;

    img {
        height: 6.75rem;
        width: 100%;
        object-fit: cover;
    }

    p {
        text-align: center;
        line-height: 1rem;
        margin-bottom: 0.125rem;
    }

    label {
        text-align: center;
        font-size: 1.25rem;
        line-height: 2rem;
        margin-bottom: 0.125rem;
    }

    @media (min-width: 1024px) {
        width: 10rem;
        height: 12.5rem;

        img {
            height: 8.5rem;
        }

        p {
            line-height: 1.25rem;
        }
            
        label {
            line-height: 2.5rem;
        }
    }

    .gift-card {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        padding: 0 0.5rem 0.5rem 0.5rem;
        gap: 0.25rem;

        border-radius: 0.75rem;
        border: 0.125rem solid color-mix(in srgb, transparent, var(--brand-primary-light) 75%);
        box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(6px);

        &.collected {
            height: calc(100% - 1.5rem);
            padding: 0.5rem;
            margin: 0.75rem 0;
            background: color-mix(in srgb, transparent, var(--brand-primary-dark) 75%);

            .collected-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.75rem;
                backdrop-filter: blur(3px);

                .collected-text {
                    width: 100%;
                    padding: 0.45rem;
                    margin: 0 7.5%;
                    border-radius: 0.75rem;
                    background: var(--background-neutrals-tertiary);
                    border: 3px solid var(--brand-primary-light);
                    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.25);
                }
            }
        }

        &.completed {
            background: linear-gradient(180deg, color-mix(in srgb, transparent, var(--brand-primary)) 0%, color-mix(in srgb, transparent, var(--background-neutrals-tertiary)) 100%);
            box-shadow: 0 0 1.5rem 0 rgba(150, 56, 255, 0.50);
        }

        &.incomplete {
            background: color-mix(in srgb, transparent, var(--background-neutrals-tertiary));
        }
    }
`
