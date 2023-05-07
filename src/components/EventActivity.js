import styled from 'styled-components';

const EventActivity = ({ color, image, alt, title, description }) => {

    return (
        <ActivityWrapper>
            <div className='activity-content'>
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
        </ActivityWrapper>
    )
}

export default EventActivity;


const ActivityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1.48px solid black;
    border-radius: 16px;
    background: #272727;
    max-width: 380px;
    height: 264px;
    margin-bottom: 5rem;

    .activity-content {
        position: relative;
        padding: 32px 24px;
    }

    .activity-title {
        margin-bottom: 30px;
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
        width: 74px;
        height: 74px;
        right: 30px;
        top: -5px;
        margin: 15px 0;
        border-radius: 7px;
        clip-path: polygon(100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 0%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width:800px) {
        border: 1.7px solid black;
        width: 392px;
        height: 427px;
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