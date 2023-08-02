
import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CountUp from 'react-countup';

import Meta from '../src/infra/Meta';
import saphira from '../services/saphira';
import useAuth from '../hooks/useAuth';

// components
import EventActivity from '../src/components/EventActivity';
import ScrollArrow from '../src/components/ScrollArrow';
import GiftCard from '../src/components/GiftCard';
import Button from '../src/components/Button';

// assets
import gifts from '../data/gifts';
import LogoPrincipal from '../public/images/logos/logo_principal.svg';

const About = () => {

    const router = useRouter();
    const user = false;

    return (
        <>
            <Meta title='SSI 2023 | Sobre' />

            <LogoTextSection>
                <div className='logo-text'>
                    <div className='logo'>
                        <img src={LogoPrincipal} alt="Logo SSI 2023" />
                        <h3>Semana de Sistemas de Informação 2023</h3>
                    </div>
                    <div className='text'>
                        <h3>O que é a SSI?</h3>
                        <p>A Semana de Sistemas de Informação é um evento anual organizado por alunas e alunos do curso de Sistemas de Informação da Escola de Artes, Ciências e Humanidades da Universidade de São Paulo (EACH - USP).</p>
                        <div className='arrow-container'>
                            <ScrollArrow />
                        </div>
                    </div>
                </div>
            </LogoTextSection>

            <ActivitiesSection>
                <div>
                    <h3>O que teremos no evento?</h3>
                    <div className='activities'>
                        <EventActivity
                            color='#4A46C5'
                            image='./images/about/icon_palestras.svg'
                            alt='Imagem Palestras'
                            title='Palestras'
                            description='Teremos diversas palestras incríveis ao longo da semana. Elas abordarão vários assuntos dentro do universo de tecnologia, empreendedorismo e mercado de trabalho com diversos especialistas da área!'
                            showFront={true}
                        />
                        <EventActivity
                            color='#FF7F5C'
                            image='./images/about/icon_workshops.svg'
                            alt='Imagem Workshops'
                            title='Workshops'
                            description='Este ano estamos trabalhando para oferecer a você workshops que ajudarão a conhecer, na prática, ferramentas importantes para iniciar sua carreira na área de tecnologia. Não deixe de participar!'
                            showFront={false}
                        />
                        <EventActivity
                            color='#8744C2'
                            image='./images/about/icon_gifts.svg'
                            alt='Imagem Prêmios'
                            title='Prêmios'
                            description='Ao longo de todo o evento haverá sorteios, valendo vouchers e muito mais! Além disso, você também poderá resgatar brindes segundo o número de palestras registradas, então não esqueça de marcar suas presença nas atividades do evento!'
                            showFront={false}
                        />
                    </div>
                </div>
            </ActivitiesSection>

            <BaitSection>
                <div className='bait-container'>
                    <div className='bait-text'>
                        <h3>Atividades</h3>
                        <p>Descubra as <span>palestras</span>, <span>workshops</span>, <span>networking</span> e muito mais que preparamos para você!</p>
                    </div>
                    <div className='bait-content'>
                        <BaitContent>
                            <div className='bait-sample'>
                                <div className='bait-image justify-left'>
                                    <img src='./images/about/palestras.jpg' alt='Foto Palestra' />
                                </div>
                                <div className='bait-sample-description'>
                                    <h4>Palestras com experts da área</h4>
                                    <p>
                                        Venha participar de conversas com as melhores referências de cada assunto. Desde temas relacionados a empreendedorismo na área de TI, até jogos, IoT, segurança da informação e muito mais!
                                        Não perca a oportunidade de conhecer esses tópicos e fazer perguntas para direcionar a sua carreira.
                                    </p>
                                </div>
                            </div>
                        </BaitContent>
                        <div className='purple-divider'></div>
                        <BaitContent>
                            <div className='bait-sample middle-lecture'>
                                <div className='bait-image justify-right'>
                                    <img src='./images/about/workshops.jpg' alt='Foto Palestra' />
                                </div>
                                <div className='bait-sample-description'>
                                    <h4>Workshops em laboratórios de informática</h4>
                                    <p>
                                        Já pensou em aplicar o que vemos e ouvimos nas palestras?
                                        As empresas parceiras da Semana de Sistemas de Informação estarão realizando workshops, para que você não saia da palestra apenas conhecendo o assunto, mas também já dominando um pouco na prática!
                                    </p>
                                </div>
                            </div>
                        </BaitContent>
                        <div className='purple-divider'></div>
                        <BaitContent>
                            <div className='bait-sample'>
                                <div className='bait-image justify-left'>
                                    <img src='./images/about/networking.jpg' alt='Foto Palestra' />
                                </div>
                                <div className='bait-sample-description'>
                                    <h4>Networking com participantes</h4>
                                    <p>
                                        Não deixe de se conectar com os palestrantes e participantes, trocar ideias e aumentar a sua rede de contatos.
                                        Dica: conecte-se com os palestrantes no LinkedIn e anote os contatos de cada um para esclarecer eventuais dúvidas.
                                    </p>
                                </div>
                            </div>
                        </BaitContent>
                    </div>
                </div>
            </BaitSection>

            <GiftsSection>
                <div className='gifts-container'>
                    <div className='gifts-title'>
                        <h3>Brindes exclusivos</h3>
                        <p>Não perca a oportunidade de <span>ganhar brindes incríveis</span> ao participar das nossas atividades e palestras!</p>
                    </div>
                    <div className='gifts-cards'>
                        {Object.entries(gifts).map(([key, gift]) => {
                            return (
                                <GiftCard key={key} name={gift.name} image={gift.image} totalPres={gift.totalPres} presentialPres={gift.presentialPres} />
                            )
                        })}
                    </div>

                    {user &&
                        <div className='gifts-btn'>
                            <Button onClick={() => router.push('/user#meus-brindes')}>Resgatar brindes</Button>
                        </div>
                    }
                </div>
            </GiftsSection>

            <LastYearSection>
                <div className='lastyear-container'>
                    <div className='lastyear-text'>
                        <h3>Veja como foi em 2022</h3>
                        <p>Confira o que rolou no evento do ano passado e <span>sinta a energia</span> que tomou conta do <span>nosso público</span>!</p>
                    </div>
                    <div className='lastyear-video'>
                        <iframe 
                            src="https://www.youtube.com/embed/Ki6rharDp40" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen">
                        </iframe>
                    </div>
                    <EventNumbersBanner>

                        <CountUp
                            start={0}
                            end={2}
                            delay={0}
                            decimals={1}
                            suffix="k+"
                            enableScrollSpy 
                        >
                            {({ countUpRef }) => (
                                <div className='event-info-container'>
                                    <h1 ref={countUpRef} />
                                    <h5>Espectadores</h5>
                                </div>
                            )}
                        </CountUp>

                        <CountUp
                            start={0}
                            end={600}
                            delay={0}
                            suffix="+"
                            enableScrollSpy 
                        >
                            {({ countUpRef }) => (
                                <div className='event-info-container'>
                                    <h1 ref={countUpRef} />
                                    <h5>Inscritos</h5>
                                </div>
                            )}
                        </CountUp>

                        <CountUp
                            start={0}
                            end={43}
                            delay={0}
                            suffix="h+"
                            enableScrollSpy 
                        >
                            {({ countUpRef }) => (
                                <div className='event-info-container'>
                                    <h1 ref={countUpRef} />
                                    <h5>Conteúdo</h5>
                                </div>
                            )}
                        </CountUp>

                    </EventNumbersBanner>

                    <a target="blank" href="https://www.twitch.tv/each_ssi" className='lastyear-btn'>
                        <Button>Nosso canal na Twitch</Button>
                    </a>
                </div>
            </LastYearSection>
        </>
    )
}

export default About;


const Loading = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 2rem;

    img {
        width: 25%;
    }
`

const LogoTextSection = styled.section`
    background: url('./images/background_imgs/background1_mobile.svg') no-repeat;
    background-size: cover;

    .logo-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-block: 3.5rem;
        margin-top: 3.75rem; /* match navbar height */
        gap: 3rem;
    }

    .logo {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;

        img {
            width: 13.3rem;
        }
        
        h3 {
            text-align: center;
        }
    }

    .text {
        position: relative;    
    
        h3 {
            margin-bottom: 1rem;
        }

        p {
            font-family: 'Space_Mono_Bold';
            font-weight: 400;
        }

        .arrow-container {
            position: absolute;
            bottom: -7rem;
            right: 3rem;
        }
    }

    @media (min-width:560px) {

        .logo {
            max-width: 33rem;
        }
        
        .text {
            max-width: 37.5rem;
        }
    }

    @media (min-width:1000px) {
        background-image: url('./images/background_imgs/background1_desktop.svg');

        .logo-text {
            margin-top: 0;
            padding-block: 7.5rem 6.5rem;
            flex-direction: row;
            justify-content: space-around;
            gap: 8rem;
        }

        .logo {
            max-width: 31rem;
            h3 {
                font: 400 2rem/2.5rem 'Space_Mono_Bold';
            }

            img {
                width: 21.42rem;
            }
        }

        .arrow-container {
            width: 100%;
            top: 150%;
            display: flex;
            align-items: center;
            justify-content: center;
        } 
    }
`

const ActivitiesSection = styled.section`
    background: url('./images/background_imgs/background5_mobile.svg') no-repeat;
    background-size: cover;
    padding-block: 3.5rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    h3 {
        text-align: center;
    }

    .activities {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    @media (min-width:800px) {
        background-image: url('./images/background_imgs/background5_desktop.svg');
        padding-block: 6.75rem;

        > div {
            gap: 3.5rem;
        }

        h3 {
            font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
        }

        .activities {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
        }
    }
`

const BaitSection = styled.section`
    background-color: var(--color-neutral-900);
    padding-block: 3.5rem;

    .bait-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3.5rem;

        .bait-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            max-width: 63.5rem;
            h3 {
                text-align: center;
            }

            p {
                font: 400 1rem/1.25rem 'Space_Mono_Bold';
                text-align: center;

                span {
                    font: inherit;
                    color: var(--color-primary-700);
                }
            }
        }

        .bait-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2.25rem;
            width: 100%;

            .purple-divider {
                height: 4px;
                width: 16rem;
                background-color: var(--color-primary-700);
                border-radius: 2px;
            }
        }
    }

    @media (min-width:1021px) {
        padding-block: 6.75rem;

        .bait-container {
            .bait-text {
                h3 {
                    font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
                }

                p {
                    font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
                }
            }

            .bait-content {
                .purple-divider {
                    display: none;
                }
            }
        }
    }
`

const BaitContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .bait-sample {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 0.75rem;

        .bait-sample-description {
            max-width: 37.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;

            h4, p {
                text-align: center;
            }
        }
    }

    .bait-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 8px;
        border: 4px solid var(--color-primary-700);
        width: 100%;
        max-width: 31rem;
        /* max-height: 20rem; */
        background-color: var(--color-primary-700);

        &::after {
            display: block;
            content: "";
            padding-top: 56.25%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
    }


    @media (min-width:1021px) {

        .bait-image {
            border: 8px solid var(--color-primary-700);
        }
        
        .bait-sample {
            flex-direction: row;
            justify-content: space-between;
            gap: auto;

            .bait-sample-description {
                align-items: flex-start;
                gap: 1rem;

                h4, p {
                    text-align: left;
                    font-family: 'Space_Mono_Bold';
                    font-weight: 400;
                }
            }
        }

        .middle-lecture {
            flex-flow: row-reverse;
        }
    }
`

const GiftsSection = styled.section`
    padding-block: 3.5rem;
    background-color: var(--color-neutral);

    .gifts-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3.5rem;

        .gifts-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            max-width: 63.5rem;

            h3 {
                text-align: center;
            }

            p {
                font: 400 1rem/1.25rem 'Space_Mono_Bold';
                text-align: center;

                span {
                    font: inherit;
                    color: var(--color-primary-700);
                }
            }
        }

        .gifts-cards {
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            width: 100%;
        }

        .gifts-btn {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: auto;
            height: auto;
        }
    }

    @media (min-width:1000px) {
        padding-block: 6.75rem;

        .gifts-container {
            gap: 3.5rem;

            .gifts-title {
                h3 {
                    font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
                }

                p {
                    font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
                }
            }

            .gifts-cards {
                gap: 1.5rem;
                max-width: 1224px;
            }
        }
    }
`

const LastYearSection = styled.section`
    background-color: var(--color-neutral-900);
    padding-block: 3.5rem;

    .lastyear-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 3.5rem;
        
        .lastyear-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            max-width: 1016px;
            
            h3 {
                text-align: center;
            }

            p {
                text-align: center;
                font-family: 'Space_Mono_Bold';
                font-weight: 400;
                span {
                    font: inherit;
                    color: var(--color-primary-700);
                }
            }
        }

        .lastyear-video {
            position: relative;
            overflow: hidden;
            width: 100%;
            border-radius: 8px;

            &::after {
                display: block;
                content: "";
                padding-top: 56.25%;
            }

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    @media (min-width:820px) {
        padding-block: 6.75rem;

        .lastyear-text {
            h3 {
                font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
            }

            p {
                font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
            }

        }

        .lastyear-container {
            .lastyear-video  {
                max-width: 50rem;
            }
        }
    }
`

const EventNumbersBanner = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;

    .event-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 23.75rem;
        padding: 2rem 4rem;
        gap: 0.5rem;
        background-color: var(--color-neutral-800);
        border-radius: 8px;

        h1 {
            font: 400 4rem/4.25rem 'Space_Mono_Bold';
            color: var(--color-primary-600);
        }
    }

    @media (min-width:1000px) {
        gap: 1.5rem;
        .event-info-container {
            align-items: flex-start;
            max-width: 24.5rem;

            h1 {
                font: 400 5rem/4.25rem 'Space_Mono_Bold';
            }
        }
    }
`