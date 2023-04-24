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
    position: relative;
    border: 1.48px solid white;
    max-width: 320px;
    height: 367px;
    margin-bottom: 12rem;

    .activity-content {
        position: relative;
        padding: 52px 30px 0 30px;
    }

    .activity-title {
        margin-bottom: 12px;
    }

    p {
        font-size: 17.76px;
        line-height: 24.51px;
    }

    .activity-logo {
        position: absolute;
        width: 74px;
        height: 74px;
        left: 30px;
        top: -37px;
        border-radius: 7px;
        clip-path: polygon(100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 0%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width:800px) {
        border: 1.7px solid white;
        width: 365.5px;
        height: 439px;
        margin-bottom: 2rem;

        &::after {
            border-top: 1.7px solid white;
        }

        h2 {
            font-size: 40px;
        }

        p {
            font-size: 20.35px;
            line-height: 29.11px;
        }
    }
`