import Link from 'next/link';
import { useRouter } from 'next/router';
import { React, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import Meta from '../src/infra/Meta';
import '../utils/slugify';

// components
import AuthModal from '../src/components/AuthModal';
import Button from '../src/components/Button';
import PartnerCard from '../src/components/PartnerCard';
import ScheduleShift from '../src/components/ScheduleItems';
import SecondaryButton from '../src/components/SecondaryButton';
import TokenModal from '../src/components/TokenModal';
import YoutubeWatchNow from '../src/components/YoutubeWatchNow';

const supporters = [
    { name: 'Rocketseat', image: '/images/partners/rocketseat.svg', url: 'https://www.rocketseat.com.br/' },
    { name: 'Griaule', image: '/images/partners/griaule.svg', url: 'https://griaule.com/' },
    { name: 'Poatek', image: '/images/partners/poatek.png', url: 'https://poatek.com/' },
    { name: 'BCR.CX', image: '/images/partners/bcrcx.png', url: 'https://www.bcrcx.com/' },
    { name: 'EACH', image: '/images/partners/each.svg', url: 'http://www5.each.usp.br/' },
    { name: 'PET-SI', image: '/images/partners/pet.png', url: 'http://www.each.usp.br/petsi/' }
// ].sort((a, b) => a.name > b.name ? 1 : -1);
];

const Home = () => {

    const router = useRouter();
    const { user } = useAuth();
    // const { user } = false; // para deploy sem login

    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleShowAuthModal = () => {
        setShowAuthModal(true);
    }

    const [countdownDays, setCountdownDays] = useState();
    const [countdownHours, setCountdownHours] = useState();
    const [countdownMinutes, setCountdownMinutes] = useState();
    const [countdownSeconds, setCountdownSeconds] = useState();
    var countdownDate = new Date("Oct 07, 2024 00:00:00").getTime();
    var now = new Date().getTime();

    useEffect(() => {
        setInterval(() => {
            // Horário e data de hoje
            now = new Date().getTime();
            if (now > countdownDate) { return };

            // Distância entre a data do evento e hoje
            var distance = countdownDate - now;

            // Cálculo e atualização do tempo restante em dias, horas, minutos e segundos
            setCountdownDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setCountdownHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setCountdownMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setCountdownSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
    }, []);

    const firstEventDay = new Date(2024, 9, 7);
    const lastEventDay = new Date(2024, 9, 11);
    const current = new Date();
    const currentTime = current.getHours().toString().padStart(2, '0') + ":" + current.getMinutes().toString().padStart(2, '0')

    const day = `${current.getDate()}`;
    const month = `${current.getMonth()+1}`;
    const year = `${current.getFullYear()}`;
    const weekDayNames = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const weekDay = weekDayNames[`${current.getDay()}`];
    const simpleWeekDayNames = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
    const simpleWeekDay = simpleWeekDayNames[`${current.getDay()}`];
    
    const description = "Nesta "+weekDay+", teremos mais um dia de palestras recheadas de informações sobre tecnologia e carreira para você. Não deixe de participar!";
    const sentenceTitle = "E com mais palestras incríveis!";
    const title = sentenceTitle.slice(0,2)+simpleWeekDay.replace(/.$/, "ou")+sentenceTitle.slice(1,);

    // Dia correto para o DateComponent
    const scheduleDay = ((current >= firstEventDay && current <= lastEventDay) ? day : '07');
    // const scheduleDay = ((current >= firstEventDay && current <= lastEventDay) ? `${currentTime >= '21:40' ? (parseInt(day, 10) + 1).toString() : day}` : '21'); // para mostrar palestras do dia seguinte após 21:40
    
    // Dia no formato yyyy-mm-dd para o ScheduleShift
    const todayDate = new Date().toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
    const formatedScheduleDate =  current >= firstEventDay && current <= lastEventDay ? todayDate : '2024-10-07';

    return (
        <>
            <Meta title='SSI 2024 | Início' />

            <LandingSection>
                <div className='landing-container'>
                    <div className='landing-info'>
                        {!user ?
                            <>
                                <div className='landing-text'>
                                    <h1>Semana de Sistemas de Informação 2024</h1>
                                    <p>Participe da Semana de Sistemas de Informação! Mais de 40 palestrantes, temas como Inteligência Artificial, Ciência de Dados, Diversidade em TI e Desenvolvimento de Jogos, com especialistas de diversas empresas. Não perca essa chance de se conectar, aprender e inovar com as mentes que estão moldando o futuro da tecnologia!</p>
                                </div>
                                <Button className="btn-entrar" onClick={handleShowAuthModal}>Cadastre-se</Button>
                                {/* <Button className="btn-entrar" disabled>Cadastros em breve...</Button> */}
                            </>
                        :
                            <>  
                                <div className='landing-text'>
                                    <h1>Semana de Sistemas de Informação 2024</h1>
                                    <p>Olá <span>{user.name ? `${user.name.split(' ')[0]}` : ''}</span>, registre sua presença online aqui:</p>
                                </div>
                                <TokenModal/>
                            </>
                        }
                
                        {showAuthModal &&
                            <AuthModal
                                onClose={() => setShowAuthModal(false)}
                                show={showAuthModal}
                            />
                        }
                    </div>
            
                    <div className = "dateWrapper">
                        <div className = "dates">
                            <h1 id = "dateEvent">07-11</h1>
                            <h2>Out 2024</h2>
                        </div>
                        <h6>Online e Presencial</h6>
                    </div>
                </div>
            </LandingSection>

            <TwitchContainer>
                <YoutubeWatchNow />
            </TwitchContainer>

            {/* Seção de contagem regressiva - só aparece antes do evento */}
            {(now < countdownDate) &&
                <CountdownSection>
                    <div className='countdown-text'>
                        <h3>Contagem regressiva</h3>
                        <h6>Faltam poucos dias para você participar dessa <span>experiência única!</span></h6>
                    </div>
                    
                    <div className='countdown-clock'>
                        {(now < countdownDate - 24 * 60 * 60 * 1000) &&
                            <div className='clock-container'>
                                <h3>{countdownDays}</h3>
                                <p>{countdownDays != 1 ? 'dias' : 'dia'}</p>
                            </div>
                        }
                        {(now < countdownDate - 60 * 60 * 1000) &&
                            <div className='clock-container'>
                                <h3>{countdownHours}</h3>
                                <p>{countdownHours != 1 ? 'horas' : 'hora'}</p>
                            </div>
                        }
                        {(now < countdownDate - 60 * 1000) &&
                            <div className='clock-container'>
                                <h3>{countdownMinutes}</h3>
                                <p>{countdownMinutes != 1 ? 'minutos' : 'minuto'}</p>
                            </div>
                        }
                        <div className='clock-container'>
                            <h3>{countdownSeconds}</h3>
                            <p>{countdownSeconds != 1 ? 'segundos' : 'segundo'}</p>
                        </div>
                    </div>
                    {!user &&
                        <div className='countdown-btn'>
                            <Button className="btn-entrar" onClick={handleShowAuthModal}>Fazer cadastro</Button>
                            {/* <Button className="btn-entrar" onClick={handleShowAuthModal} disabled>Fazer cadastro</Button> */}
                        </div>
                    }
                </CountdownSection>
            }

            <SubscriptionSection>
                <div className='subscription-container'>
                    <div className='subscription-title'>
                        <h3>Inscrições abertas!</h3>
                        <p>Faça parte da <span>Comissão Organizadora</span> do <span>melhor evento acadêmico</span> de Sistemas de Informação! </p>
                    </div>

                    <Link legacyBehavior href='https://docs.google.com/forms/d/e/1FAIpQLSeMDHajFb9ETVZ-EogKAJPS7QA30n9BGLZDR1_NQII4FpLWDQ/viewform'>
                        <a target="_blank">
                            <SecondaryButton>Inscrever-se</SecondaryButton>
                        </a>
                    </Link>
                </div>
            </SubscriptionSection>

            <EventInfoSection>
                <div className='about-container'>
                    <div className='about-title'>
                        <h3>Sobre o evento</h3>
                        <p>As palestras ocorrerão entre os dias <span>21 e 25 de agosto</span>, nos <span>auditórios da EACH</span>. Além disso, elas também serão transmitidas no nosso <span>canal na Twitch</span>.</p>
                    </div>
                    <div className='about-cards'>

                        <CountUp
                            start={0}
                            end={40}
                            delay={0}
                            decimals={0}
                            suffix="+"
                            enableScrollSpy 
                        >
                            {({ countUpRef }) => (
                                <div className='card'>
                                    <h1 ref={countUpRef} />
                                    <h5>Palestrantes</h5>
                                </div>
                            )}
                        </CountUp>

                        <CountUp
                            start={0}
                            end={70}
                            delay={0}
                            decimals={0}
                            suffix="+"
                            enableScrollSpy 
                        >
                            {({ countUpRef }) => (
                                <div className='card'>
                                    <h1 ref={countUpRef} />
                                    <h5>Sorteios</h5>
                                </div>
                            )}
                        </CountUp>

                        <CountUp
                            start={0}
                            end={45}
                            delay={0}
                            decimals={0}
                            suffix="h"
                            enableScrollSpy 
                        >
                            {({ countUpRef }) => (
                                <div className='card'>
                                    <h1 ref={countUpRef} />
                                    <h5>Atividades</h5>
                                </div>
                            )}
                        </CountUp>

                    </div>
                    <div className='about-btn'>
                        <Button onClick={() => router.push('/about')}>Saiba mais</Button>
                    </div>
                </div>
            </EventInfoSection>

            <ScheduleSection>
                <div className='schedule-container'>
                    <h3 className='title-mobile'>Programação</h3>
                    <div className='title-btn-desktop'>
                        <h3>Programação</h3>
                        <Button type = "button" aria-label = "Ver programação completa" onClick={() => router.push('/schedule')}>Ver programação completa</Button>
                    </div>
                    <ScheduleShift
                        day={formatedScheduleDate}
                        />
                    <div className='btn-mobile'>
                        <Button onClick={() => router.push('/schedule')}>Ver programação completa</Button>
                    </div>
                </div>
            </ScheduleSection>

            <SupportersSection>
                <div className='supporters-container'>
                    <div className='supporters-title'>
                        <h3>Parcerias</h3>
                        <p>Empresas e marcas que estão conosco para tornar este evento um sucesso</p>
                    </div>
                    <div className='supporters-cards'>
                        {Object.entries(supporters).map(([key, supporter]) => {
                            return (
                                <PartnerCard key={key} name={supporter.name} image={supporter.image} link={supporter.url} />
                            )
                        })}
                    </div>
                </div>
            </SupportersSection>
        </>
    )
}

export default Home;


const LandingSection = styled.section`
    padding: 0rem 1rem 6.5rem 1rem;

    .btn-entrar{
        padding: 1.5em;
        font: 700 1rem/1.25rem 'AT Aero Bold';
        font-weight: 400;
    }

    .landing-container {
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid var(--color-neutral-secondary);
        border-left: 1px solid var(--color-neutral-secondary);
        border-bottom: 1px solid var(--color-neutral-secondary);
        //margin-top: 3.75rem; /* match navbar height */
        gap: 3.5rem;

        .landing-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5rem;
            max-width: 33rem;
            
            
            .landing-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                max-width: 31rem;
                gap: 1rem;

                p {
                    font-weight: 400;
                }

                span {
                    font: inherit;
                    color: var(--color-primary-700);
                }
            }
        }

        .dateWrapper{
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 1.5rem 1rem;
            background-color: var(--color-primary);

            h1 {
                font-size: 6rem;
                text-align: center;
                margin-bottom: 1rem;
            }

            h2{
                text-align: center;
                line-height: 150%;
                letter-spacing: 0.2em;
            }

            h6{
                text-align: center;
            }
        }
    }

    @media (min-width:600px) {
        padding-right: 2.5rem;
    }

    @media (min-width:800px) {
        height: 44rem;

        .landing-container {
            margin-top: 0;
            padding-block: 7.5rem 6.5rem;
            flex-direction: row;
            justify-content: space-between;

            .landing-bait {
                flex-direction: row;
                gap: 4rem;

                > p {
                    writing-mode:vertical-rl;
                    transform: rotate(180deg);
                    max-height: 9.25rem;
                }

                .event-date {
                    scale: 1.2;
                    p {
                        font: 700 2rem/3rem 'AT Aero Bold';
                        letter-spacing: 0.8rem;
                        color: var(--color-neutral-300);
                    }
                }
            }
        }
    }

    @media (min-width:1400px) {
        padding-right: 0;
    }
`

const TwitchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 0;
`

const SubscriptionSection = styled.section`
    padding-block: 6.625rem 3.5rem;
    background-color: var(--color-primary);
    gap: 2rem;

    .subscription-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .subscription-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            text-align: center;
            max-width: 63.5rem;

            h3 {
                text-align: center;
            }

            p {
                font-family: 'AT Aero Bold';
                font-weight: 700;

                span {
                    font: inherit;
                    color: var(--color-primary-500);
                }
            }
        }
    }

    @media (min-width:1000px) {
        padding-block: 6.75rem;

        .subscription-container {
            gap: 3.5rem;

            .subscription-title {
                h3 {
                    font: 700 3.5rem/4.25rem 'AT Aero Bold';
                }

                p {
                    font: 700 1.5rem/1.75rem 'AT Aero Bold';
                }
            }
        }
    }
`

const EventInfoSection = styled.section`
    padding-block: 6.625rem 3.5rem;
    gap: 2rem;

    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .about-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            text-align: center;
            max-width: 63.5rem;

            h3 {
                text-align: center;
            }

            p {
                font-family: 'AT Aero Bold';
                font-weight: 700;

                span {
                    font: inherit;
                    color: var(--color-primary-700);
                }
            }
        }

        .about-cards {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-flow: wrap;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                width: 100%;
                max-width: 19.5rem;
                padding: 2rem 4rem;
                background-color: var(--color-neutral-800);
                border-radius: 8px;
            }
        }

        .about-btn {
            width: 100%;
            max-width: 24.5rem;
        }   
    }

    @media (min-width:1000px) {
        padding-block: 6.75rem;

        .about-container {
            gap: 3.5rem;

            .about-title {
                h3 {
                    font: 700 3.5rem/4.25rem 'AT Aero Bold';
                }

                p {
                    font: 700 1.5rem/1.75rem 'AT Aero Bold';
                }
            }

            .about-cards {
                gap: 1.5rem;

                .card {
                    height: 19.5rem;
                }
            }
        }
    }
`

const CountdownSection = styled.section`
    padding-block: 3.5rem;
    background-color: var(--color-neutral-900);
    gap: 3.5rem;

    .countdown-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        h3 {
            text-align: center;
        }

        h6 span {
            font: inherit;
            color: var(--color-primary-700);
        }
    }

    .countdown-clock {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .clock-container {
            padding: 0.75rem;
            background-color: var(--color-neutral-800);
            width: 7.25rem;
            height: 6.25rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            gap: 0.5rem;

            :nth-child(4) {
                display: none;
            }

            h3 {
                color: #FFF;
            }

            p {
                font: 700 1rem/1.25rem 'AT Aero Bold';
                color: #FFF;
            }
        }
    }

    .countdown-btn {
        width: 100%;
        max-width: 24.5rem;
    }
    
    @media (min-width:560px) {
        
        .countdown-clock {
            .clock-container {
                :nth-child(4) {
                    display: flex;
                }
            }
        }
    }

    @media (min-width:1100px) {
        padding: 6.75rem;

        .countdown-text {
            h3 {
                font: 700 3.5rem/4.25rem 'AT Aero Bold';
            }
        
            p {
                font: 700 1.5rem/1.75rem 'AT Aero Bold';
            }
        }
        
        .countdown-clock {
            gap: 2.875rem;
            
            .clock-container {
                width: 11.25rem;
                height: 9.25rem;
                
                :nth-child(4) {
                    display: flex;
                }
            }
        }
    }  
`

const ScheduleSection = styled.section`
    padding-block: 3.5rem;
    
    .schedule-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .title-mobile {
            display: flex;
            flex-direction: row;
        }

        .title-btn-desktop {
            display: none;
        }
        
        .date-stamp {
            > div {
                background-color: var(--color-primary);
            }
        }
    }

    @media (min-width:1021px) {

        .schedule-container {
            gap: 4rem;
            align-items: flex-start;

            .title-mobile {
                display: none;
            }

            .title-btn-desktop {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                button {
                    width: fit-content;
                }
            }

            .btn-mobile {
                display: none;
            }
        }
    }

    @media (min-width:1021px) {
        padding-block: 6.75rem;

    }
`

const SupportersSection = styled.section`
    padding-block: 1rem;

    .supporters-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .supporters-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            max-width: 63.5rem;

            h3 {
                text-align: center;
				background-color: var(--color-primary);
				padding: 0.75rem 1.5rem 0.75rem 1.5rem;
            }

            p {
                font: 700 1rem/1.25rem 'AT Aero Bold';
                text-align: center;

            }
        }

        .supporters-cards {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            width: 100%;
        }
    }

	@media (min-width: 800px) {
		.supporters-container {
			.supporters-cards {
				flex-direction: row;
				flex-flow: wrap;
			}
		}
	}

    @media (min-width:1000px) {
        padding-block: 6.75rem 11.75rem;

        .supporters-container {
            gap: 3.5rem;

            .supporters-title {
                h3 {
                    font: 700 3rem/3.5rem 'AT Aero Bold';
                }

                p {
                    font: 700 1.5rem/1.75rem 'AT Aero Bold';
                }
            }

            .supporters-cards {
                gap: 1.5rem;
                max-width: 1328px;
            }
        }
    }
`
