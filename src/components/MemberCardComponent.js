import styled from 'styled-components';

const MemberCardComponent = ({ name, image, department }) => {

    return (
        <MemberWrapper>
            <figure className='member-image'>
                <img src={image} alt={`Foto de'${name}`}></img>
            </figure>
            <figcaption>
                <p>{name}</p>
                <span>{department}</span>
            </figcaption>
        </MemberWrapper>
    )
}

const MemberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .member-image {
        display: flex;
        align-items: center;
        padding: 25px;
        height: 356px;
        width: 273px;
        border-radius: 16px;
        background: #1B162C;
        /* box-shadow:  28px 8px 64px #100d1a,
            -28px -28px 64px #261f3e; */
        margin-bottom: 8px;

        img {
            border-radius: 16px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    figcaption {
        text-align: center;
    }

    p {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: -.4rem;
    }

    span {
        font-size: 23px;
    }
`

export default MemberCardComponent;