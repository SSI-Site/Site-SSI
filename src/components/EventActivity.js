import styled from 'styled-components';

const EventActivity = ({ color, image, alt, title, description }) => {

    return (
        <ActivityWrapper>
            <div className='activity-content'>
                <div className='container'>
                    {/* div da frente do verso */}
                    <div className='front'>
                        <div className='activity-text'>
                            <div className='activity-title'>
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </div>

                    {/* div do verso do card */}
                    <div className='back'>
                        <div className='activity-logo' style={{ backgroundColor: color }}>
                            <img src={image} alt={alt} />
                        </div>
                        <div className='activity-text'>
                            <div className='activity-title'>
                                <h2>{title}</h2>
                            </div>
                            <div className='activity-description'>
                                <p>{description}</p>
                            </div>
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
    border: 1.48px solid black;
    border-radius: 16px;
    background: #272727;
    max-width: 380px;
    height: 264px;
    margin-bottom: 12rem;

    .activity-content {
        position: relative;
        padding: 32px 24px;
    }

    // ---MOVIMENTO DOS CARDS---
    .container{
        position: relative;
        perspective: 1000px;
        height: 400px;
        width: 250px;
    }

    .front, .back{
        position: absolute;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: all 1s ease;
    }

    .front{
        transform: rotateY(0deg);
    }

    .back{
        transform: rotateY(180deg);
    }

    .container:hover .front{
        transform: rotateY(-180deg);
    }

    .container:hover .back{
        transform: rotateY(0deg);
    }
    //---------------

    .front h2{
        color: #3C3C3C;
    }

    .activity-title{
        margin-bottom: 12px;
    }

    .activity-title h2{
        font-size: 20px;
        line-height: 24px;
    }

    p {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
    }

    .activity-logo {
        position: absolute;
        width: 50px;
        height: 50px;
        right: 0px;
        top: -30px;
        margin: 15px 0;
        border-radius: 7px;
        clip-path: polygon(100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 0%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width:800px) {
        border: 1.7px solid black;
        width: 365.5px;
        height: 439px;
        margin-bottom: 2rem;

        &::after {
            border-top: 1.7px solid white;
        }

        .activity-logo {
            margin-top: 60px;
            left: 10px;
            top: 50px;
        }

        .activity-title {
            margin-bottom: 150px;
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