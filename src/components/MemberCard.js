import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BadgeCO from './BadgeCO';

// assets
import FinancesIcon from '../../public/images/co_icons/finances.svg';
import CreationIcon from '../../public/images/co_icons/creation.svg';
import BoardIcon from '../../public/images/co_icons/board.svg';
import InfraIcon from '../../public/images/co_icons/infra.svg';
import LectureIcon from '../../public/images/co_icons/lecture.svg';
import PartnershipIcon from '../../public/images/co_icons/partnership.svg';
import SiteIcon from '../../public/images/co_icons/web.svg';

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
//ColorScheme é um inteiro usado pra determinar as cores usadas pelo componente
    const departmentIcon = (department) => {
        switch (department) {
            case 'Comercial e Financeiro': return FinancesIcon;
            case 'Criação e Comunicação': return CreationIcon;
            case 'Diretoria': return BoardIcon;
            case 'Infraestrutura': return InfraIcon;
            case 'Palestrantes': return LectureIcon;
            case 'Parcerias': return PartnershipIcon;
            case 'Site': return SiteIcon;
        }
    }

    return (
        <MemberWrapper>
            <figure className='member-image'>
                <div className="image-container">
                    <Image 
                        src={image} 
                        alt={`Foto de ${name}`} 
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            </figure>
            <div className={'card-back b' + (colorScheme%5)} id={'back b' + (colorScheme)}>
                <div className='member-name'>
                    {linkedin ?
                        <>
                            <a href={linkedin} target="_blank" rel="noreferrer">
                                <p className='name-linkedin'> {name}</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
                                </svg>

                            </a>
                        </>
                        :
                        <p> {name}</p>
                    }
                </div>
                {phrase ?
                    <p class='phrase'>"{phrase}"</p>
                    :
                    <></>
                }
                <div>
                    <h1>Setores</h1>
                    
                    <div className='member-department'>
                        { departments.map((department, index) => {
                            let badges = colorSchemes[colorScheme%5].badgeSequence;
                            if(index === 0 && department === 'Diretoria')
                            return <BadgeCO text={department} themeIndex={colorSchemes[colorScheme%5].directorBadge}/>
                            return <BadgeCO text={department} themeIndex={badges[index % badges.length]}/>
                        })

                        }
                    </div>
                </div>
            </div>
            <button id={'c' + colorScheme} className={'info-button '} onClick={() => flip(colorScheme)}>
                <div></div>
            </button>
            {/*
            <figure className='member-image'>
                <div className="image-container">
                    <Image 
                        src={image} 
                        alt={`Foto de ${name}`} 
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            </figure>
            <figcaption>
                <div className='member-name'>
                    {linkedin ?
                        <>
                            <a href={linkedin} target="_blank" rel="noreferrer">
                                <p className='name-linkedin'>{name}</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9999 7.05C17.9999 6.78478 17.8946 6.53043 17.707 6.34289C17.5195 6.15536 17.2652 6.05 16.9999 6.05L8.99994 6C8.73472 6 8.48037 6.10536 8.29283 6.29289C8.1053 6.48043 7.99994 6.73478 7.99994 7C7.99994 7.26522 8.1053 7.51957 8.29283 7.70711C8.48037 7.89464 8.73472 8 8.99994 8H14.5599L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.42V15C15.9999 15.2652 16.1053 15.5196 16.2928 15.7071C16.4804 15.8946 16.7347 16 16.9999 16C17.2652 16 17.5195 15.8946 17.707 15.7071C17.8946 15.5196 17.9999 15.2652 17.9999 15V7.05Z" fill="#F3F3F3"/>
                                </svg>

                            </a>
                            <div></div>
                        </>
                        :
                        <p>{name}</p>
                    }
                </div>
                <div className='member-department'>
                    {departments.map((department, index) =>
                        <div className='tooltip'>
                            <img src={departmentIcon(department)} />
                            <span className='tooltiptext'>{department}</span>
                        </div>
                    )}
                </div>
            </figcaption>
            */}
        </MemberWrapper>
    )
}

const flip = (index) => {
    console.log(index)
    let card = document.getElementById('back b' + index)
    let button = document.getElementById('c' + index)
    card.classList.toggle('info-show')
    button.classList.toggle('button-flip')
}

export default MemberCard;

const MemberWrapper = styled.div`
    width: 18.5rem;
    min-height: 24.6rem;
    gap: 1rem;
    overflow-y:hidden;
    display:flex;
    background-color: var(--color-neutral);

    .info-button{
        border: 0;
        display: flex;
        position: absolute;
        width: 3rem;
        height: 3rem;
        background-color: var(--color-primary);
        transform: translate(14.5rem, 20.5rem);
        align-items: center;
        justify-content: center;

        div{
            transition: 0.1s;
            width:1.5rem;
            height: 1.5rem;
            border-right: solid var(--color-neutral-50) 0.3rem;
            border-bottom: solid var(--color-neutral-50) 0.3rem;
            transform:rotate(45deg);
            translate: 0 -0.35rem
        }
    }

    .card-back{
        transition: 0.1s;
        translate: 0 -100%;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        background-color: ${colorSchemes[1].background};
        width: 18.5rem;
        gap: 1rem;
    
        .member-name {
            position: relative;
            padding: 0.2rem 0;
            display: flex;

            background-image: linear-gradient(${colorSchemes[1].textColor}, ${colorSchemes[1].textColor});
            background-size: 200%;
            background-position-x: 200%;
            background-repeat: no-repeat;
            transition: background-position 0.2s;

            a {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;
                svg path {
                    transition: all .2s;
                    fill: ${colorSchemes[1].textColor};
                }

                svg {
                    width: 2.5rem;
                }
            }
        
            div {
                position: absolute;
                width: 0%;
                height: 4px;
                /* margin-left: 50%; */
                /* background-color: var(--color-neutral-50); */
                border-radius: 12px;
                transition: all ease-in-out .2s;
            }

            p {
                font: 400 1.5rem/1.5rem 'AT Aero Bold';
                transition: 0.2s;
                color: ${colorSchemes[1].textColor}
            }

            &:hover {
                background-position-x: 0%;

                p {
                    color: ${colorSchemes[1].background}
                }

                a {
                    svg path {
                        fill: ${colorSchemes[1].background};
                    }
                }
            }
        }

        .phrase{
            color: ${colorSchemes[1].textColor};
        }

        p {
            font: 1rem 'AT Aero';
        }

        h1{
            text-align:left;
            font: 700 1.25rem/3rem 'AT Aero Bold';
            color: ${colorSchemes[1].textColor};
        }

        .member-department {
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            gap: 0.5rem;
        }
    
    }

    .info-show{
        translate: 0 0;
    }

    .button-flip{
        div{
            transform: rotate(-135deg);
            translate: 0 0.35rem;
        }
    }

    .b0 {
        background-color: ${colorSchemes[0].background};
        .member-name {
            background-image: linear-gradient(${colorSchemes[0].textColor}, ${colorSchemes[0].textColor});
            p {
                color: ${colorSchemes[0].textColor};
            }

            a{
                svg path {
                    fill: ${colorSchemes[0].textColor};
                }
            }

            &:hover {
                p{
                    color: ${colorSchemes[0].background};
                }

                a{
                    svg path{
                        fill: ${colorSchemes[0].background};
                    }
                }
            }
        }

        .phrase {
            color: ${colorSchemes[0].textColor};
        }

        h1 {
            color: ${colorSchemes[0].textColor};
        }
    }

    .b1 {
        background-color: ${colorSchemes[1].background};
        .member-name {
            background-image: linear-gradient(${colorSchemes[1].textColor}, ${colorSchemes[1].textColor});
            p {
                color: ${colorSchemes[1].textColor};
            }

            a{
                svg path {
                    fill: ${colorSchemes[1].textColor};
                }
            }

            &:hover {
                p{
                    color: ${colorSchemes[1].background};
                }

                a{
                    svg path{
                        fill: ${colorSchemes[1].background};
                    }
                }
            }
        }

        .phrase {
            color: ${colorSchemes[1].textColor};
        }

        h1 {
            color: ${colorSchemes[1].textColor};
        }
    }

    .b2 {
        background-color: ${colorSchemes[2].background};
        .member-name {
            background-image: linear-gradient(${colorSchemes[2].textColor}, ${colorSchemes[2].textColor});
            p {
                color: ${colorSchemes[2].textColor};
            }

            a{
                svg path {
                    fill: ${colorSchemes[2].textColor};
                }
            }

            &:hover {
                p{
                    color: ${colorSchemes[2].background};
                }

                a{
                    svg path{
                        fill: ${colorSchemes[2].background};
                    }
                }
            }
        }

        .phrase {
            color: ${colorSchemes[2].textColor};
        }

        h1 {
            color: ${colorSchemes[2].textColor};
        }
    }

    .b3 {
        background-color: ${colorSchemes[3].background};
        .member-name {
            background-image: linear-gradient(${colorSchemes[3].textColor}, ${colorSchemes[3].textColor});
            p {
                color: ${colorSchemes[3].textColor};
            }

            a{
                svg path {
                    fill: ${colorSchemes[3].textColor};
                }
            }

            &:hover {
                p{
                    color: ${colorSchemes[3].background};
                }

                a{
                    svg path{
                        fill: ${colorSchemes[3].background};
                    }
                }
            }
        }

        .phrase {
            color: ${colorSchemes[3].textColor};
        }

        h1 {
            color: ${colorSchemes[3].textColor};
        }
    }

    .b4 {
        background-color: ${colorSchemes[4].background};
        .member-name {
            background-image: linear-gradient(${colorSchemes[4].textColor}, ${colorSchemes[4].textColor});
            p {
                color: ${colorSchemes[4].textColor};
            }

            a{
                svg path {
                    fill: ${colorSchemes[4].textColor};
                }
            }

            &:hover {
                p{
                    color: ${colorSchemes[4].background};
                }

                a{
                    svg path{
                        fill: ${colorSchemes[4].background};
                    }
                }
            }
        }

        .phrase {
            color: ${colorSchemes[4].textColor};
        }

        h1 {
            color: ${colorSchemes[4].textColor};
        }
    }



    .member-image {
        position: absolute;
        display: flex;
        align-items: center;
        height: 24.6rem;
        width: 18.5rem;
        border-radius: 8px;
        overflow: hidden;

        .image-container {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 8px;
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
        .member-name p {
            font: 400 1.09375rem/1.5rem 'AT Aero Bold'; // 17px para caber um nome longo sem quebrar linha
        }

        .info-button{
            display:none;
        }

        &:hover{
            .card-back{
                translate: 0 0;
            }
        }
    }
`