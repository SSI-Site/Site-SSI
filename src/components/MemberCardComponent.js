import React from 'react';
import styled from 'styled-components';

const MemberCardComponent = ({ name, image, departments }) => {

    return (
        <MemberWrapper>
            <figure className='member-image'>
                <img src={image} alt={`Foto de ${name}`}></img>
            </figure>
            <figcaption>
                <p className='member-name'>{name}</p>
                {departments.map((department, index) =>
                    <p className='member-department' key={index}>{department}</p>
                )}
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
        max-width: 280px;
    }

    .member-name {
        font-weight: bold;
        font-size: 24px;
        line-height: 3rem;
        margin-bottom: .5rem;
    }

    .member-department {
        font-size: 23px;
        line-height: 2.5rem;
    }
    
    @media (min-width: 800px) {

        .member-name {
            line-height: 2rem;

        }

        .member-department {
            line-height: 2rem;

        }
        
    }
`

export default MemberCardComponent;