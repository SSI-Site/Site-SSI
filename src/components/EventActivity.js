import styled from 'styled-components';

const EventActivity = ({ image, alt, title, description }) => {

    return (
        <ActivityWrapper>
            <div className='container'>

                {/* div da frente do verso */}
                <div className='front'>
                    <div className='activity-content'>
                        <div className='activity-title'>
                            <h6>{title}</h6>
                        </div>
                    </div>
                </div>

                {/* div do verso do card */}
                <div className='back'>
                    <div className='activity-content'>
                        <div className='title-logo'>
                            <div className='activity-title'>
                                <h6>{title}</h6>
                                <div></div> {/* essa div será a barrinha roxa sob o título */}
                            </div>
                            <div className='activity-logo'>
                                <img src={image} alt={alt} />
                            </div>
                        </div>
                        <div className='activity-description'>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </ActivityWrapper>
    )
}

export default EventActivity;


const ActivityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: space-between;
    position: relative;
    border-radius: 16px;
    width: 100%;
    max-width: 380px;
    height: 100%;
    max-height: 264px;


    .activity-content {
        position: relative;
        padding: 32px 24px;
    }

    // ---MOVIMENTO DOS CARDS---
    .container {
        position: relative;
        perspective: 1000px;
        height: 400px;
        width: 100%;

        .front, .back {
            width: 100%;
            height: 100%;
            border-radius: 16px;
            position: absolute;
            backface-visibility: hidden;
            transform-style: preserve-3d;
            transition: all 1s ease;
        }

        // Frente do card
        .front {
            background: transparent;
            border: 4px solid var(--color-primary-800);
            transform: rotateY(0deg);

            .activity-content h6 {
                    color: var(--color-primary-800);
            }
        }

        // Verso do card
        .back {
            background-color: var(--color-neutral-800);
            border: 4px solid transparent;
            transform: rotateY(180deg);

            .activity-content {

                .title-logo {
                    height: 44px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 12px;

                    .activity-title > div {
                        // definir barrinha roxa aqui
                        height: 5px;
                        width: 90px;
                        background-color: var(--color-primary-800);
                    }

                    .activity-title{
                        margin-bottom: 40px;
                    }

                    .activity-logo {
                        //definir tamanho da imagem aqui
                        img {
                            // ...
                        }
                    }
                }

                p {
                    // aqui tem 4 propriedades da fonte em uma só: peso, tamanho, altura da linha e família
                    font: 700 0.875rem/1.25rem 'Space_Mono';
                }
            }
        }

        &:hover .front {
            transform: rotateY(-180deg);
        }

        &:hover .back {
            transform: rotateY(0deg);
        }
    }
    //---------------

    @media (min-width:800px) {
        border: 1.7px solid black;
        width: 365.5px;
        max-height: 350px;
        margin-bottom: 2rem;

        &::after {
            border-top: 1.7px solid white;
        }

        .activity-logo {
            /* margin-top: 50px;
            left: 0px;
            top: 40px; */
        }

        .activity-title {
            /*margin-bottom: 120px;*/
        }

        .container{
            .back {
                .activity-content {
                    .title-logo {
                        flex-direction: column;
                        align-items: start;
                        margin-bottom: 90px;
                    }
                }
            }
        }
        
    

        .activity-title h2 {
            font-size: 32px;
            line-height: 40px;
        }

        .activity-description p {
            font-size: 16px;
        }
    }
`