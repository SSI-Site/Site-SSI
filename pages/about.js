
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CountUp from 'react-countup';

import Meta from '../src/infra/Meta';
import saphira from '../services/saphira';

// assets
import gifts from '../data/gifts';

// components
import EventActivity from '../src/components/EventActivity';
import ScrollArrow from '../src/components/ScrollArrow';
import GiftCard from '../src/components/GiftCard';
import Button from '../src/components/Button';

import useAuth from '../hooks/useAuth';

// assets
import LogoPrincipal from '../public/images/logos/logo_principal.svg';

const About = () => {

    const router = useRouter();
    const { user, signOut } = useAuth();
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const checkUserRegister = () => {
        if (!user) return;

        setIsLoading(true);

        saphira.getUser(user.email)
            .then(() => {
                setIsUserRegistered(true);
                setIsLoading(false);
            })
            .catch(() => {
                setIsUserRegistered(false);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        checkUserRegister();
    }, [user]);

    useEffect(() => {
        checkUserRegister();
    }, []);

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
                <h2 className='section2-title'>O que teremos no evento?</h2>
                <div className='activities'>

                    <EventActivity
                        color='#4A46C5'
                        image='./images/about/icon_capture_the_flag.svg'
                        alt='Imagem Capture the Flag'
                        title='Capture the Flag'
                        description='Juntamente com o grupo EACHinTheShell_, a SSI promoverá um Capture the Flag! Com o auxílio do grupo, terão diversos desafios sobre segurança da informação que abordam criptografia, redes, web e outros assuntos da área!'
                    />
                    <EventActivity
                        color='#8744C2'
                        image='./images/about/icon_palestras.svg'
                        alt='Imagem Palestras'
                        title='Palestras'
                        description='Teremos diversas palestras incíveis ao longo da semana. Elas abordarão vários assuntos dentro do universo da tecnologia, empreendedorismo e mercado de trabalho com diversos especialistas da área!'
                    />
                    <EventActivity
                        color='#FF7F5C'
                        image='./images/about/icon_minicursos.svg'
                        alt='Imagem Minicursos'
                        title='Workshops'
                        description='Este ano, estamos trabalhando para oferecer a você workshops que ajudarão a conhecer, na prática, ferramentas que pode encontrar ao iniciar sua carreira na área de tecnologia. Não deixe de participar!'
                    />
                </div>
            </ActivitiesSection>

            <section>
                <LectureContent>
                    <div className='lecture-sample'>
                        <div className='lecture-image justify-left'>
                            <img src='./images/about/palestras.jpg' alt='Foto Palestra' />
                        </div>
                        <div className='lecture-sample-description'>
                            <h3>Palestras com experts da área</h3>
                            <p>
                                Venha participar de conversas com as melhores referências de cada assunto nas áreas. Desde assuntos relacionados a empreendedorismo na área de TI, até jogos, IoT, segurança da informação e muito mais!
                                Não perca a oportunidade de conhecer esses tópicos e fazer perguntas para direcionar a sua carreira.
                            </p>
                        </div>
                    </div>
                </LectureContent>

                <LectureContent>
                    <div className='lecture-sample middle-lecture'>
                        <div className='lecture-image justify-right'>
                            <img src='./images/about/workshops.jpg' alt='Foto Palestra' />
                        </div>
                        <div className='lecture-sample-description'>
                            <h3>Workshops em laboratórios de informática</h3>
                            <p>
                                Já pensou em aplicar o que vemos e ouvimos nas palestras?
                                As empresas apoiadoras da Semana de Sistemas de Informação estarão realizando workshops, para que você não saía da palestra apenas conhecendo o assunto, mas também já dominando um pouco na prática!
                            </p>
                        </div>
                    </div>
                </LectureContent>

                <LectureContent>
                    <div className='lecture-sample'>
                        <div className='lecture-image justify-left'>
                            <img src='./images/about/networking.jpg' alt='Foto Palestra' />
                        </div>
                        <div className='lecture-sample-description'>
                            <h3>Networking com participantes</h3>
                            <p>
                                Não deixe de se conectar com os palestrantes e participantes, trocar ideias e aumentar a sua rede de contatos.
                                Dica: conecte-se com os palestrantes no LinkedIn e anote os contatos de cada um para esclarecer eventuais dúvidas.
                            </p>
                        </div>
                    </div>
                </LectureContent>
            </section>

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

                    {!isLoading ?

                        // {user && isUserRegistered ?
                            <div className='gifts-btn'><Button onClick={() => router.push('/user#meus-brindes')}>Resgatar brindes</Button></div>
                        //     :
                        //     <Button className="btn-complete-register" onClick={() => router.push('/user')}> Concluir cadastro </Button>
                        // }
                        :

                        <Loading>
                            <img src='./loading.svg' alt='SSI 2023 - Loading' />
                        </Loading>
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
                            src="https://www.youtube.com/embed/GUIYO1a5lMA" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
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

const BackgroundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-inline: 2rem;
    margin-top: 12rem;

    .section2-title {
        text-align: center;
    }

    .activities {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 10rem;
        overflow: hidden;
    }


    @media (min-width:800px) {
        margin-block: 12rem;

        .activities {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 96px;
            padding-top: 10rem;
        }
    }
`

const LectureContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 80px;

    .lecture-sample {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        text-align: left;
        width: 95%;
    }

    .lecture-image {
        border-radius: 8px;
        display: flex;
        max-width: 350px;
        padding: 5px;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, rgba(146,76,208,1) 0%, rgba(66,64,168,1) 100%);
    }

    img {
        width: 100%;
    }

    .lecture-sample-description {
        margin: 0 2.5rem 8rem 2.5rem;
        max-width: 700px;
    }

    .middle-lecture {
        margin-block: 0;
    }

    h3 {
        margin-bottom: 5rem;
    }

    @media (min-width:600px) {
        margin-bottom: 20px;

        .lecture-sample {
            margin-block: 2rem;
        }

        .lecture-sample-description {
            margin-block: 5rem;
        }

        h3 {
            margin-bottom: 2rem;
        }

        .lecture-image {
            max-width: 450px;
        }
    }

    @media (min-width:1021px) {
        padding-inline: 5rem;

        .lecture-sample {
            flex-direction: row;
            justify-content: space-between;
            gap: 3rem;
            margin-bottom: 8rem;
        }

        .middle-lecture {
            flex-flow: row-reverse;
        }

        .lecture-sample-description {
            max-width: 45%;
            margin-inline: 0;
            margin: 0;
        }

        .lecture-image {
            max-width: 600px;
            padding: unset;
        }

        img {
            width: 100%;
        }

        .justify-left {
            padding: 20px 20px 20px 0;
        }

        .justify-right {
            padding: 20px 0px 20px 20px;
        }
    }
`

const GiftsSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    background-color: var(--color-neutral-800);
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
        background-color: var(--color-neutral);
        border-radius: 8px;

        h1 {
            font: 400 4rem/4.25rem 'Space_Mono_Bold';
            color: var(--color-primary-800);
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