import React from 'react';
import styled from 'styled-components';

// components
import BadgeCO from './BadgeCO';

const colorSchemes = [
    {
        'background' : 'var(--color-neutral-50)',
        'textColor' : 'var(--color-neutral)',
        'directorBadge' : 0,
        'badgeSequence' : [3, 9, 6, 8, 5, 4]
    },
    {
        'background' : 'var(--color-neutral)',
        'textColor' : 'var(--color-neutral-50)',
        'directorBadge' : 1,
        'badgeSequence' : [3, 9, 6, 8, 5, 4]
    },
    {
        'background' : 'var(--color-primary)',
        'textColor' : 'var(--color-neutral-50)',
        'directorBadge' : 1,
        'badgeSequence' : [3, 9, 8, 4]
    },
    {
        'background' : 'var(--color-primary-900)',
        'textColor' : 'var(--color-neutral-50)',
        'directorBadge' : 1,
        'badgeSequence' : [2, 6, 7, 4]
    },   
    {
        'background' : 'var(--color-primary-300)',
        'textColor' : 'var(--color-neutral)',
        'directorBadge' : 1,
        'badgeSequence' : [9, 5, 4]
    },
]

const MemberCard = ({ name, image, departments, linkedin, colorScheme, phrase }) => {
    // 'colorScheme' é um inteiro usado pra determinar as cores usadas pelo componente

    const sortDepartments = (departments) => {
        return departments.sort((a, b) => a.localeCompare(b));
    };

    return (
        <MemberWrapper>
            <div className="image-container">
                <figure className='member-image'>
                    <img src={image} alt={`Foto de ${name}`} className="responsive-image" />
                </figure>
            </div>
            <div className={'card-back b' + (colorScheme%5)} id={'back b' + (colorScheme)}>
                <div className='member-name'>
                    {linkedin ?
                        <>
                            <a href={linkedin} target="_blank" rel="noreferrer">
                                <h6 className='name-linkedin'>{name}</h6>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
                                </svg>
                            </a>
                        </>
                        :
                        <h6>{name}</h6>
                    }
                </div>
                {phrase &&
                    <p className='phrase'>"{phrase}"</p>
                }
                <div>
                    <p className='department-title'>Setores</p>
                    
                    <div className='member-department'>
                        {sortDepartments(departments).map((department, index) => {
                            let badges = colorSchemes[colorScheme%5].badgeSequence;
                            if(index === 0 && department === 'Diretoria')
                                return <BadgeCO key={index} text={department} themeIndex={colorSchemes[colorScheme%5].directorBadge}/>
                            return <BadgeCO key={index} text={department} themeIndex={badges[index % badges.length]}/>
                        })}
                    </div>
                </div>
            </div>
            <button id={'c' + colorScheme} className={'info-button'} onClick={() => flip(colorScheme)}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M35.314 17.924L32.478 20.746L25.968 14.206L25.942 41.416L21.942 41.412L21.968 14.276L15.508 20.706L12.688 17.872L24.028 6.58398L35.314 17.924Z"
                        fill="white"
                    />

                    <rect id="arrow" width="100" height="100%" />
                </svg>
            </button>
        </MemberWrapper>
    )
}

const flip = (index) => {
    let card = document.getElementById('back b' + index)
    let button = document.getElementById('c' + index)
    card.classList.toggle('info-show')
    button.classList.toggle('button-flip')
}

export default MemberCard;


const MemberWrapper = styled.div`
    position: relative;
    width: 18.4rem;
    height: 24.625rem;
    gap: 1rem;
    overflow-y: hidden;
    display: flex;
    background-color: var(--color-neutral);

    .info-button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary);
        border: 0;

        svg {
            transition: 0.3s;
        }

        .responsive-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .card-back {
        transition: 0.1s;
        translate: 0 101%;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        background-color: ${colorSchemes[1].background};
        width: 18.4rem;
        height: 24.625rem;
        gap: 1rem;
    
        .member-name {
            position: relative;
            padding: 0.2rem 0.25rem;
            display: flex;

            background-image: linear-gradient(${colorSchemes[1].textColor}, ${colorSchemes[1].textColor});
            background-size: 200%;
            background-position-x: 200%;
            background-repeat: no-repeat;
            transition: background-position 0.2s;

            a {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.25rem;

                svg path {
                    transition: all .2s;
                    fill: ${colorSchemes[1].textColor};
                }

                svg {
                    width: 2.5rem;
                }
            }

            h6 {
                font: 700 1.5rem/1.75rem 'AT Aero Bold';
                transition: 0.2s;
                color: ${colorSchemes[1].textColor}
            }

            &:hover, &:focus-visible {
                background-position-x: 0%;

                h6 {
                    color: ${colorSchemes[1].background};
                }

                a {
                    svg path {
                        fill: ${colorSchemes[1].background};
                    }
                }
            }

            &:focus-visible {
                outline: 2px solid ${colorSchemes[1].textColor};
                outline-offset: 2px;
            }
        }

        .phrase {
            color: ${colorSchemes[1].textColor};
            font: 400 1rem/1.5rem 'AT Aero';
        }

        .department-title {
            margin-bottom: 0.5rem;
            text-align: left;
            font: 700 1.25rem/1.5rem 'AT Aero Bold';
            color: ${colorSchemes[1].textColor};
        }

        .member-department {
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            gap: 0.5rem;
        }
    
    }

    .info-show {
        translate: 0 0;
    }

    .button-flip {
        svg {
            transform: rotate(-180deg);
        }
    }

    .b0 {
        background-color: ${colorSchemes[0].background};

        .member-name {
            background-image: linear-gradient(${colorSchemes[0].textColor}, ${colorSchemes[0].textColor});

            h6 {
                color: ${colorSchemes[0].textColor};
            }

            a {
                svg path {
                    fill: ${colorSchemes[0].textColor};
                }
            }

            &:hover, &:focus-visible {
                h6 {
                    color: ${colorSchemes[0].background};
                }

                a {
                    svg path {
                        fill: ${colorSchemes[0].background};
                    }
                }
            }

            &:focus-visible {
                outline: 2px solid ${colorSchemes[0].textColor};
                outline-offset: 2px;
            }
        }

        .phrase {
            color: ${colorSchemes[0].textColor};
        }

        .department-title {
            color: ${colorSchemes[0].textColor};
        }
    }

    .b1 {
        background-color: ${colorSchemes[1].background};

        .member-name {
            background-image: linear-gradient(${colorSchemes[1].textColor}, ${colorSchemes[1].textColor});

            h6 {
                color: ${colorSchemes[1].textColor};
            }

            a {
                svg path {
                    fill: ${colorSchemes[1].textColor};
                }
            }

            &:hover, &:focus-visible {
                h6 {
                    color: ${colorSchemes[1].background};
                }

                a {
                    svg path {
                        fill: ${colorSchemes[1].background};
                    }
                }
            }

            &:focus-visible {
                outline: 2px solid ${colorSchemes[1].textColor};
                outline-offset: 2px;
            }
        }

        .phrase {
            color: ${colorSchemes[1].textColor};
        }

        .department-title {
            color: ${colorSchemes[1].textColor};
        }
    }

    .b2 {
        background-color: ${colorSchemes[2].background};

        .member-name {
            background-image: linear-gradient(${colorSchemes[2].textColor}, ${colorSchemes[2].textColor});

            h6 {
                color: ${colorSchemes[2].textColor};
            }

            a {
                svg path {
                    fill: ${colorSchemes[2].textColor};
                }
            }

            &:hover, &:focus-visible {

                h6 {
                    color: ${colorSchemes[2].background};
                }

                a {
                    svg path {
                        fill: ${colorSchemes[2].background};
                    }
                }
            }

            &:focus-visible {
                outline: 2px solid ${colorSchemes[2].textColor};
                outline-offset: 2px;
            }
        }

        .phrase {
            color: ${colorSchemes[2].textColor};
        }

        .department-title {
            color: ${colorSchemes[2].textColor};
        }
    }

    .b3 {
        background-color: ${colorSchemes[3].background};

        .member-name {
            background-image: linear-gradient(${colorSchemes[3].textColor}, ${colorSchemes[3].textColor});

            h6 {
                color: ${colorSchemes[3].textColor};
            }

            a {
                svg path {
                    fill: ${colorSchemes[3].textColor};
                }
            }

            &:hover, &:focus-visible {
                h6 {
                    color: ${colorSchemes[3].background};
                }

                a {
                    svg path {
                        fill: ${colorSchemes[3].background};
                    }
                }
            }

            &:focus-visible {
                outline: 2px solid ${colorSchemes[3].textColor};
                outline-offset: 2px;
            }
        }

        .phrase {
            color: ${colorSchemes[3].textColor};
        }

        .department-title {
            color: ${colorSchemes[3].textColor};
        }
    }

    .b4 {
        background-color: ${colorSchemes[4].background};

        .member-name {
            background-image: linear-gradient(${colorSchemes[4].textColor}, ${colorSchemes[4].textColor});

            h6 {
                color: ${colorSchemes[4].textColor};
            }

            a {
                svg path {
                    fill: ${colorSchemes[4].textColor};
                }
            }

            &:hover, &:focus-visible {
                h6 {
                    color: ${colorSchemes[4].background};
                }

                a {
                    svg path {
                        fill: ${colorSchemes[4].background};
                    }
                }
            }

            &:focus-visible {
                outline: 2px solid ${colorSchemes[4].textColor};
                outline-offset: 2px;
            }
        }

        .phrase {
            color: ${colorSchemes[4].textColor};
        }

        .department-title {
            color: ${colorSchemes[4].textColor};
        }
    }

    .image-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 24.625rem;
        width: 18.4rem;

        .member-image {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--color-neutral-800);
            display: flex;

            .responsive-image {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    figcaption {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        text-align: center;
        max-width: 280px;
    }


    @media (min-width:800px) {

        &:hover, &:focus-visible {
            .card-back {
                translate: 0 0;
            }
        }

        &:focus-visible {
            outline: 2px solid ${colorSchemes[1].textColor};
            outline-offset: 2px;
        }

        .info-show {
            translate: 0 101%;
        }
    }

    @media (min-width:1024px) {
        .info-button {
            display: none;
        }
    }
`