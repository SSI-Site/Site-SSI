import { useRouter } from 'next/router';
import CountUp from 'react-countup';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import Meta from '../src/infra/Meta';

// components
import Button from '../src/components/Button';
import GiftCard from '../src/components/GiftCard';
import SecondaryButton from '../src/components/SecondaryButton';
import Accordion from '../src/components/Accordion';

//Importe Imagem do Next
import Image from 'next/image';

// assets
import gifts from '../data/gifts';
import LogoCircular from '../public/images/logos/logo_circular.png';

const About = () => {

    const router = useRouter();
    const { user, disableAuth } = useAuth();

    return (
        <>
            <Meta title='Sobre | Semana de Sistemas de Informação' 
            description ='Saiba mais sobre a Semana de Sistemas de Informação: objetivos, história, impacto e como o evento conecta estudantes e profissionais de TI.'
            keywords='o que é a SSI, história do evento, sobre a SSI, semana acadêmica tecnologia, evento de sistemas de informação, missão SSI, objetivos semana de tecnologia, contexto SSI'
            />

            <LogoTextSection>
                <div className='logo-text'>
                    <div className='text'>
                        <h1>Sobre o Evento</h1>
                        <p>A Semana de Sistemas de Informação é um evento anual organizado por alunas e alunos do curso de Sistemas de Informação da Escola de Artes, Ciências e Humanidades da Universidade de São Paulo (EACH - USP).</p>
                        <a href='https://docs.google.com/document/d/1uXK5byNMtpUx6scQZpIG74vXD07yBT1b/edit?usp=sharing&ouid=109347348401977738085&rtpof=true&sd=true' target="_blank">
                            <Button>Conferir regulamento</Button>
                        </a>
                    </div>
                    <div className='logo'>
                        <Image 
                        src='/images/logos/logo_circular.png'
                        alt="Gif SSI 2024" 
                        width={295}
                        height={295}
                        />
                    </div>
                </div>
            </LogoTextSection>

            <BaitSection>
                <div className='bait-container'>
                    <BaitContent>
                        <div className='bait-sample justify-right'>
                            <div className='bait-image'>
                                <div className='image-container'>
                                    <Image 
                                        src="/images/about/palestras.jpg" alt="Foto Palestras"
                                        width={500}
                                        height={500}
                                        className="responsive-image"
                                    />
                                </div>
                            </div>
                            <div className='bait-sample-description'>
                                <div className='bait-sample-title'>
                                    <h5>Palestras</h5>
                                    <p>A Semana de Sistemas de Informação 2025 contará com diversas palestras da área da tecnologia.</p>
                                </div>

                                <div className='bait-sample-subtitles'>
                                    <Accordion title="Diversos temas">
                                        <p>
                                            Teremos apresentações que contemplam diversos temas, como Inteligência Artificial, Ciência de Dados, Diversidade em TI e mais...
                                        </p>
                                    </Accordion>
                                    <Accordion title="Empresas de diferentes áreas">
                                        <p>
                                            Os nossos palestrantes fazem parte de empresas que estão presente em diferentes áreas de negócio do mercado de trabalho.
                                        </p>
                                    </Accordion>

                                </div>
                            </div>
                        </div>
                    </BaitContent>
                    <BaitContent>
                        <div className='bait-sample justify-left'>
                            <div className='bait-image'>
                                <div className='image-container'>
                                    <Image 
                                        src="/images/about/workshops.jpg" alt="Foto Workshops"
                                        width={500}
                                        height={500}
                                        className="responsive-image" />
                                </div>
                            </div>
                            <div className='bait-sample-description'>
                                <div className='bait-sample-title'>
                                    <h5>Workshops</h5>
                                    <p>Que tal colocar em prática o que você aprende nas palestras?</p>
                                </div>

                                <div className='bait-sample-subtitles'>
                                    <Accordion title="Parcerias">
                                        <p>
                                            Teremos apresentações sobre diversos temas, como Inteligência Artificial, Ciência de Dados e Diversidade em TI. Durante a Semana de Sistemas de Informação, empresas parceiras também oferecerão workshops interativos e e muito mais!
                                        </p>
                                    </Accordion>
                                    <Accordion title="Aprenda na prática">
                                        <p>
                                            Você terá a oportunidade de não apenas conhecer o conteúdo, mas também de aplicar e dominar conceitos na prática!
                                        </p>    
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </BaitContent>
                    <BaitContent>
                        <div className='bait-sample justify-right'>
                            <div className='bait-image'>
                                <div className='image-container'>
                                    <Image 
                                        src="/images/about/networking.jpg" alt="Foto Networking"
                                        width={500}
                                        height={500} 
                                        className="responsive-image" />
                                </div>
                            </div>

                            <div className='bait-sample-description'>
                                <div className='bait-sample-title'>
                                    <h5>Networking</h5>
                                    <p>Não deixe de se conectar com os palestrantes e participantes, trocar ideias e aumentar a sua rede de contatos.</p>
                                </div>

                                <div className='bait-sample-subtitles'>
                                    <Accordion title="Alunos da EACH">
                                        <p>
                                            Tenha contato com uma rede de pessoas interessadas em diversos temas de TI. Não só estudantes de Sistemas de Informação da EACH, mas de diversos outros cursos e unidades da USP.
                                        </p>
                                    </Accordion>
                                    <Accordion title="Palestrantes experientes">
                                        <p>
                                            Conecte-se com os palestrantes que possuem expertise em diversas áreas. Lembre-se de acioná-los no LinkedIn e anote os contatos de cada um para esclarecer eventuais dúvidas.
                                        </p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </BaitContent>
                    <BaitContent>
                        <div className='bait-sample justify-left'>
                                <div className='bait-image'>
                                    <div className='image-container'>
                                        <Image
                                            src="/images/about/premios.jpg" 
                                            alt="Foto Prêmios"
                                            width={500}
                                            height={500} 
                                            className="responsive-image" />
                                </div>
                            </div>
                            <div className='bait-sample-description'>
                                <div className='bait-sample-title'>
                                    <h5>Prêmios</h5>
                                    <p>
                                        Não perca a oportunidade de ganhar prêmios incríveis ao participar das nossas atividades e palestras!
                                    </p>
                                </div>

                                <div className='bait-sample-subtitles'>
                                    <Accordion title="Brindes Exclusivos">
                                        <p>
                                            Teremos uma semana cheia de premiações para os participantes, contando com o sorteio de gift cards e prêmios por presença.
                                        </p>
                                    </Accordion>
                                    <Accordion title="Gift Cards">
                                        <p>
                                            Participe das palestras e concorra a gift cards de diversas lojas, como iFood, Playstation e outros... 
                                            Mas se liga que alguns sorteios são apenas para espectadores presenciais :)
                                        </p>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </BaitContent>
                </div>
            </BaitSection>

            <GiftsSection>
                <div className='gifts-container'>
                    <div className='gifts-title'>
                        <h3>Prêmios</h3>
                        <h6>Não perca a oportunidade de ganhar <span>brindes incríveis</span> ao participar das nossas atividades e palestras!</h6>
                    </div>
                    <div className='gifts-cards'>
                        {Object.entries(gifts).map(([key, gift]) => {
                            return (
                                <GiftCard key={key} index={key} name={gift.name} image={gift.image} totalPres={gift.totalPres} presentialPres={gift.presentialPres} />
                            )
                        })}
                    </div>

                    {!disableAuth && user &&
                        <Button onClick={() => router.push('/user#meus-brindes')}>Resgatar brindes</Button>
                    }
                </div>
            </GiftsSection>

            <LastYearSection>
                <div className='lastyear-container'>
                    <div className='lastyear-text'>
                        <div className='lastyear-title'>
                            <h3>Veja como foi em 2024</h3>
                        </div>
                        <p>
                            Confira o que rolou no evento do ano passado e sinta a energia que tomou conta do nosso público!
                        </p>
                    </div>

                    <div className='lastyear-content'>
                        <div className='lastyear-video'>
                            <iframe 
                                src="https://www.youtube.com/embed/tHkBBqcpb3I?si=ISLt0jiKNzuyd5g2"
                                title="YouTube video player" 
                                allow="fullscreen">
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
                                        <h5 ref={countUpRef} />
                                        <h5>espectadores</h5>
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
                                        <h5 ref={countUpRef} />
                                        <h5>inscritos</h5>
                                    </div>
                                )}
                            </CountUp>

                            <CountUp
                                start={0}
                                end={43}
                                delay={0}
                                suffix="h"
                                enableScrollSpy 
                            >
                                {({ countUpRef }) => (
                                    <div className='event-info-container'>
                                        <h5 ref={countUpRef} />
                                        <h5>conteúdo</h5>
                                    </div>
                                )}
                            </CountUp>
                        </EventNumbersBanner>

                        <a href='https://www.youtube.com/@semanadesi' target='_blank'>
                            <SecondaryButton $noSvgColorChange>
                                Acesse nosso canal
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 56 56" fill="none">
                                    <path d="M23.3332 35.0003L35.4432 28.0003L23.3332 21.0003V35.0003ZM50.3065 16.7303C50.6098 17.827 50.8198 19.297 50.9598 21.1637C51.1232 23.0303 51.1932 24.6403 51.1932 26.0403L51.3332 28.0003C51.3332 33.1103 50.9598 36.867 50.3065 39.2703C49.7232 41.3703 48.3698 42.7237 46.2698 43.307C45.1732 43.6103 43.1665 43.8203 40.0865 43.9603C37.0532 44.1237 34.2765 44.1937 31.7098 44.1937L27.9998 44.3337C18.2232 44.3337 12.1332 43.9603 9.72984 43.307C7.62984 42.7237 6.2765 41.3703 5.69317 39.2703C5.38984 38.1737 5.17984 36.7037 5.03984 34.837C4.8765 32.9703 4.8065 31.3603 4.8065 29.9603L4.6665 28.0003C4.6665 22.8903 5.03984 19.1337 5.69317 16.7303C6.2765 14.6303 7.62984 13.277 9.72984 12.6937C10.8265 12.3903 12.8332 12.1803 15.9132 12.0403C18.9465 11.877 21.7232 11.807 24.2898 11.807L27.9998 11.667C37.7765 11.667 43.8665 12.0403 46.2698 12.6937C48.3698 13.277 49.7232 14.6303 50.3065 16.7303Z" fill="#FF0000"/>
                                    <path d="M23.3332 35.0003L35.4432 28.0003L23.3332 21.0003V35.0003Z" fill="white"/>
                                </svg>
                            </SecondaryButton>
                        </a>
                    </div>
                </div>
            </LastYearSection>
        </>
    )
}

export default About;


const LogoTextSection = styled.section`
    border-bottom: 1px solid var(--background-neutrals-secondary);

    .logo-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .text, .logo {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 1rem;
        align-self: stretch;
        width: 100%;
        flex: 1 1 100%;
    }

    .text {
        gap: 1rem;
        border: 1px solid var(--background-neutrals-secondary);
        border-top: none;

        p {
            font-weight: 400;
        }
    }

    .logo {
        align-items: center; 
        justify-content: center;
        border-left: 1px solid var(--background-neutrals-secondary);
        border-right: 1px solid var(--background-neutrals-secondary);
    }

    @media (min-width:800px) {
        .logo-text {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .logo, .text {
            width: 50%;
            padding: 4.5rem 1rem;
            flex: 1; 
        }

        .logo {
            align-items: center;
            justify-content: center;
            border-left: none;
            padding: 0 1.5rem;
        }

        .text {
            height: calc(100vh - 8rem);
            justify-content: center;
            align-items: flex-start;
            border-bottom: none;
            padding: 0 1.5rem;

            p {
                font: 400 1rem/1.5rem 'AT Aero';
            }
        }
    }
`

const BaitSection = styled.section`
    background-color: var(--background-neutrals-primary);
    padding-inline: 0;

    .bait-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: none;
    }
`

const BaitContent = styled.div`
    --border: 1px solid var(--background-neutrals-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-inline: 1rem;
    border-bottom: var(--border);

    .bait-sample {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 1328px;
        padding: 2rem 1rem;
        border-left: var(--border);
        border-right: var(--border);
        gap: 2rem;
        transition: background-color 0.2s ease-in-out;
        
        .bait-sample-description {
            max-width: 39.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;  

            .bait-sample-title { 
                width: 100%;
                padding-bottom: 1.5rem;
                border-bottom: 0.063rem solid var(--outline-neutrals-secondary);
            }

            p {
                font: 400 1rem/1.5rem 'AT Aero';
                margin-top: 0.5rem;
            }

            .bait-sample-subtitles {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;

                .accordion-icon {
                    font: 400 1.5rem 'AT Aero';
                    margin-right: 0.5rem;
                }

                .accordion-item {
                    padding-bottom: 1rem;
                    border-bottom: 0.063rem solid var(--outline-neutrals-secondary);
                }
            }
        }
    }

    .justify-left {

        &:hover {
            background-color: white; 
        }

        &:hover * {
            color: var(--background-neutrals-primary); 
        }
    }

    .justify-right {
        &:hover {
            background-color: var(--brand-primary); 
        }
    }

    .bait-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 39rem;
        aspect-ratio: 185 / 140;
        height: auto;
        border: 2px solid white;
        position: relative;

        .responsive-image, .image-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
            
        .responsive-image {
            object-fit: cover;
        }
    }

    @media (min-width:1021px) {

        .bait-sample {
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 100%;
            padding: 4.5rem 1.5rem;

            .bait-sample-description {
                align-items: flex-start;
                max-width: 38rem;

                p {
                    font: 400 1.125rem/1.75rem 'AT Aero';
                }
            }
        }

        .justify-left {
            flex-direction: row;
        }
    }
`

const GiftsSection = styled.section`
    padding-block: 2rem;

    .gifts-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .gifts-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;

            h3 {
                text-align: center;
				background-color: var(--brand-primary);
				padding: 0.75rem 1.5rem 0.75rem 1.5rem;
            }

            h6 {
                text-align: center;
            }

            span {
                font: inherit;
                background-color: var(--brand-purple-900);
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
    }

    @media (min-width:1000px) {
        padding-block: 4.5rem;

        .gifts-container {
            gap: 1rem;

            .gifts-cards {
                gap: 1rem;
                max-width: 1328px;
            }

            button {
                width: fit-content;
                margin-top: 0.5rem;
            }
        }
    }
`

const LastYearSection = styled.section`
    --border: 1px solid var(--background-neutrals-secondary);
    border-top: var(--border);

    .lastyear-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        padding: 1.5rem 1rem;

        border-left: var(--border);
        border-right: var(--border);
        
        .lastyear-text {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            
            .lastyear-title {
                background-color: var(--brand-primary);
                width: fit-content;
                padding: 0.75rem 1.5rem;

                h3 {
                    text-align: center;
                }
            }

            p {
                font: 400 1rem/1.5rem 'AT Aero';
            }
        }

        .lastyear-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;

            .lastyear-video {
                position: relative;
                overflow: hidden;
                width: 100%;

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
                    border: 0;
                }
            }
        }
    }

    @media (min-width:1045px) {
        .lastyear-container {
            padding: 4.5rem 1.5rem 3rem 1.5rem;
            gap: 2.5rem;

            .lastyear-content {
                // padding: 1rem;

                a {
                    width: fit-content;
                    margin: 0 auto;
                }
            }

            .lastyear-video {
                max-width: 100%;
                flex: 1;
            }
        }
    }
`

const EventNumbersBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 100%;

    .event-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1.5rem;
        background-color: white;
        color: var(--brand-primary);

        h5 {
            color: var(--brand-primary);
        }
    }

    @media (min-width:880px) {
        width: 100%;
        flex-direction: row;

        .event-info-container {
            align-items: start;
            gap: 0;
            padding: 1.5rem;
        }
    }

    @media (min-width:1000px) {
        gap: 1rem;
        
        .event-info-container {
            align-items: flex-start;
            width: 100%;
            height: 100%;
        }
    }
`
