import Link from 'next/link';
import { useRouter } from 'next/router';
import CountUp from 'react-countup';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import Meta from '../src/infra/Meta';

// components
import Button from '../src/components/Button';
import EventActivity from '../src/components/EventActivity';
import GiftCard from '../src/components/GiftCard';
import SecondaryButton from '../src/components/SecondaryButton';

// assets
import gifts from '../data/gifts';
import LogoPrincipal from '../public/images/logos/logo_principal.svg';
import LogoGif from '../public/images/logos/logo.gif';


const About = () => {

    const router = useRouter();
    const { user, disableAuth } = useAuth();

    return (
        <>
            <Meta title='SSI 2024 | Sobre' />

            <LogoTextSection>
                <div className='logo-text'>
                    <div className='text'>
                        <h1>Sobre o Evento</h1>
                        <p>A Semana de Sistemas de Informação é um evento anual organizado por alunas e alunos do curso de Sistemas de Informação da Escola de Artes, Ciências e Humanidades da Universidade de São Paulo (EACH - USP).</p>
                        <div className='btn-regulation'>
                        <Link legacyBehavior href=''>
                            <a target="_blank">
                                <Button>Conferir regulamento</Button>
                            </a>
                        </Link>
                </div>                    
                    </div>
                    <div className='logo'>
                        <img src={LogoGif} alt="Gif SSI 2024" />
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
                    <div className='btn-wrapper'>
                        <Link legacyBehavior href='https://docs.google.com/document/u/1/d/e/2PACX-1vRG50MuCxa-qLVhp-ZIzwg3eVIbRWYQLbl6p47v9IojlPSf8_EnAxDIkWpQnbF05A/pub'>
                            <a target="_blank">
                                <Button>Acessar regulamento</Button>
                            </a>
                        </Link>
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
                                    <div className='image-container'>
                                        <img src="/images/about/palestras.jpg" alt="Foto Palestras" className="responsive-image" />
                                    </div>
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
                                    <div className='image-container'>
                                        <img src="/images/about/workshops.jpg" alt="Foto Workshops" className="responsive-image" />
                                    </div>
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
                                    <div className='image-container'>
                                        <img src="/images/about/networking.jpg" alt="Foto Networking" className="responsive-image" />
                                    </div>
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
                        <h6>Não perca a oportunidade de ganhar brindes incríveis ao participar das nossas atividades e palestras!</h6>
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
                            <h3>Veja como foi em 2023</h3>
                        </div>
                        <p>Confira o que rolou no evento do ano passado e sinta a energia que tomou conta do nosso público!</p>
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

                    <div className='lastyear-rightside'>
                        <div className='lastyear-video'>
                            <iframe 
                                src="https://www.youtube-nocookie.com/embed/gQ9ka_8D1Bo?si=p55JZ0U2CYeNv--E" 
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
                    </div>
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
  border-bottom: 1px solid var(--color-neutral-secondary);

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
    border: 1px solid var(--color-neutral-secondary);
    border-top: none;

    h3 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    p {
      font-family: 'AT Aero';
      font-weight: 700;
    }

    .btn-regulation {
      display: flex;
      justify-content: center;
      height: 3rem;
      align-items: center;
      
      a {
        width: 100%;
      }

      button {
        width: 100%;
      }
    }
  }

  .logo {
    align-items: center; 
    justify-content: center;
    border-left: 1px solid var(--color-neutral-secondary);
    border-right: 1px solid var(--color-neutral-secondary);

    img {
      width: 18.5rem;
    }

    h3 {
      text-align: center;
    }
  }

  .arrow-container {
    position: absolute;
    bottom: -7rem;
    right: 3rem;
  }

  @media (min-width: 670px) {
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
      img {
        width: 20.5rem;
      }
    }

    .text {
      justify-content: center;
      align-items: flex-start;
      border-bottom: none;

      .btn-regulation {
        width: auto;
        
        a, button {
          width: auto;
        }
      }
    }
  }
`

const ActivitiesSection = styled.section`
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

    .btn-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width:800px) {
        padding-block: 6.75rem;

        > div {
            gap: 3.5rem;
        }

        h3 {
            font: 700 3.5rem/4.25rem 'AT Aero Bold';
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
                font: 700 1rem/1.25rem 'AT Aero Bold';
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
                    font: 700 3.5rem/4.25rem 'AT Aero Bold';
                }

                p {
                    font: 700 1.5rem/1.75rem 'AT Aero Bold';
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
        max-width: 31rem;
        border-radius: 8px;
        border: 4px solid var(--color-primary-700);
        /* max-height: 20rem; */
        background-color: var(--color-primary-700);
        position: relative;
        overflow: hidden;

        &::after {
            display: block;
            content: "";
            padding-top: 56.25%;
        }

        .image-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }

        .responsive-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
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
                    font-family: 'AT Aero Bold';
                    font-weight: 700;
                }
            }
        }

        .middle-lecture {
            flex-flow: row-reverse;
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
				background-color: var(--color-primary);
				padding: 0.75rem 1.5rem 0.75rem 1.5rem;
            }

            h6 {
                text-align: center;
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
    --border: 1px solid var(--color-neutral-secondary);
    border-top: var(--border);

    .lastyear-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        
        .lastyear-text {
            padding: 1.5rem 1rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            border-left: var(--border);
            border-right: var(--border);
            
            .lastyear-title {
                background-color: var(--color-primary);
                width: fit-content;
                padding: 0.75rem 1.5rem;

                h3 {
                    text-align: center;
                }
            }

            p {
                font: 400 1rem/1.5rem 'AT Aero';
            }

            a {
                width: 100%;
            }
        }

        .lastyear-rightside {
            display: flex;
            padding: 1.5rem 1rem;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            border-left: var(--border);
            border-right: var(--border);
            border-top: var(--border);

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
            flex-direction: row;
            justify-content: space-between; 
            align-items: flex-start;
            gap: auto;

            .lastyear-text {
                border: none;
                padding: 4.5rem 1rem 0 0;
                gap: 1.5rem;
                max-width: 25.6rem;

                p {
                    font: 400 1.125rem/1.75rem 'AT Aero';
                }
            }

            .lastyear-rightside {
                border-top: none;
                padding: 4.5rem 1.5rem;
                align-items: center; 
                gap: 2rem;
                width: 100%;
                max-width: 55rem;
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
        color: var(--color-primary);

        h5 {
            color: var(--color-primary);
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
