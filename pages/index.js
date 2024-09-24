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

// assets
import schedule from '../data/schedule';

const supporters = [
    { name: 'Rocketseat', image: '/images/partners/rocketseat.svg', url: 'https://www.rocketseat.com.br/' },
    { name: 'EACH', image: '/images/partners/each.svg', url: 'https://www5.each.usp.br/' },
    // { name: 'DASI', image: '/images/partners/each.svg', url: 'https://dasiusp.com/' },
    { name: 'PET-SI', image: '/images/partners/pet.png', url: 'http://www.each.usp.br/petsi/' }
// ].sort((a, b) => a.name > b.name ? 1 : -1);
];

const Home = () => {

    const router = useRouter();
    const { user, disableAuth } = useAuth();

    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleShowAuthModal = () => {
        setShowAuthModal(true);
    }

    const [countdownDays, setCountdownDays] = useState();
    const [countdownHours, setCountdownHours] = useState();
    const [countdownMinutes, setCountdownMinutes] = useState();
    const [countdownSeconds, setCountdownSeconds] = useState();
    var countdownDate = new Date("Oct 07, 2024 09:40:00").getTime();
    var now = new Date().getTime();

    useEffect(() => {
        setInterval(() => {
            // Horário e data de hoje
            now = new Date().getTime();
            if (now > countdownDate) { return };

            // Distância entre a data do evento e hoje
            var distance = countdownDate - now;

            // Cálculo e atualização do tempo restante em dias, horas, minutos e segundos
            // (O padStart serve para adicionar '0' se o número for menor que 10)
            setCountdownDays(String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'));
            setCountdownHours(String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
            setCountdownMinutes(String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'));
            setCountdownSeconds(String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'));
        }, 1000);
    }, []);

    const firstEventDay = new Date(2024, 9, 7);
    const lastEventDay = new Date(2024, 9, 11);
    const current = new Date();
    const currentTime = current.getHours().toString().padStart(2, '0') + ":" + current.getMinutes().toString().padStart(2, '0')

    const day = `${current.getDate()}`;

    // Dia correto para o DateComponent
    const scheduleDay = ((current >= firstEventDay && current <= lastEventDay) ? day : '07');
    
    // Dia no formato yyyy-mm-dd para o ScheduleShift
    const todayDate = current.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
    const formattedScheduleDate =  current >= firstEventDay && current <= lastEventDay ? todayDate : '2024-10-07';

    const filterEventDays = ["07 Out - Segunda-feira", "08 Out - Terça-feira", "09 Out - Quarta-feira", "10 Out - Quinta-feira", "11 Out - Sexta-feira"];
    const filterEventDaysId = scheduleDay - firstEventDay.getDate();

    // Transforma 00:00 em minutos depois da meia noite para fazer calculos
    const minutesAfterMidNight = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    const currentTimeMinutes = minutesAfterMidNight(currentTime); // horario atual
    const morningEnd = minutesAfterMidNight("13:00"); // Final do almoco
    const eveningEnd = minutesAfterMidNight("19:00"); // Final do jantar

    let shift = "Manhã"; // Turno do dia
    if (current >= firstEventDay) {
        if (currentTimeMinutes >= morningEnd && currentTimeMinutes < eveningEnd) {
            shift = "Tarde";
        } else if (currentTimeMinutes >= eveningEnd) {
            shift = "Noite";
        }
    }

    // Array intermediario com de horario e atividades
    const filteredArray = Object.entries(schedule[formattedScheduleDate]).filter(([key, _]) => {
        const scheduleStartTimeMinutes = minutesAfterMidNight(key); // Horário de cada atividade

        switch (shift) {
            case "Manhã":
                return scheduleStartTimeMinutes < morningEnd;
            case "Tarde":
                return scheduleStartTimeMinutes > morningEnd && scheduleStartTimeMinutes < eveningEnd;
            case "Noite":
                return scheduleStartTimeMinutes > eveningEnd;
        }
    })

    // Cria um object com base no array intermediario
    const filteredSchedule = Object.fromEntries(filteredArray);
  
    useEffect(() => {
        if (showAuthModal) {
            // Calcula a largura da barra de rolagem
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Adiciona o padding-right para compensar a largura da barra de rolagem
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [showAuthModal]);

    return (
        <>
            <Meta title='SSI 2024 | Início' />

            <LandingSection>
                <div className='landing-container'>
                    <div className='landing-info'>
                        {disableAuth || !user ?
                            <>
                                <div className='landing-text'>
                                    <h1>Semana de Sistemas de Informação 2024</h1>
                                    <p>Participe da Semana de Sistemas de Informação! Mais de 40 palestrantes, temas como Inteligência Artificial, Ciência de Dados, Diversidade em TI e Desenvolvimento de Jogos, com especialistas de diversas empresas. Não perca essa chance de se conectar, aprender e inovar com as mentes que estão moldando o futuro da tecnologia!</p>
                                </div>
                                <Button onClick={handleShowAuthModal} disabled={disableAuth}>
                                    {disableAuth ? 'Cadastros em breve...' : 'Cadastrar-se'}
                                </Button>
                            </>
                        :
                            <>  
                                <div className='landing-text'>
                                    <h1>Semana de Sistemas de Informação 2024</h1>
                                    <p className='greetings-text'>Olá <span>{user.name ? `${user.name.split(' ')[0]}` : ''}</span>! Registre a sua presença online aqui:</p>
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
                    
                    <div className = "dates">
                        <div className = "dateWrapper">
                            <div>
                                <h1>07-11</h1>
                                <h2>Out 2024</h2>
                            </div>
                            <div>
                                <h6>Online e Presencial</h6>
                            </div>
                        </div>
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
                        <h6>Faltam poucos {now > countdownDate - 24 * 60 * 60 * 1000  ? 'instantes' : 'dias'} para você participar dessa <span>experiência única!</span></h6>
                    </div>
                    
                    <div className='countdown-clock'>
                        {(now < countdownDate - 24 * 60 * 60 * 1000) &&
                            <div className='clock-container'>
                                <h1>{countdownDays}</h1>
                                <p>{countdownDays != 1 ? 'dias' : 'dia'}</p>
                            </div>
                        }
                        {(now < countdownDate - 60 * 60 * 1000) &&
                            <div className='clock-container'>
                                <h1>{countdownHours}</h1>
                                <p>{countdownHours != 1 ? 'horas' : 'hora'}</p>
                            </div>
                        }
                        {(now < countdownDate - 60 * 1000) &&
                            <div className='clock-container'>
                                <h1>{countdownMinutes}</h1>
                                <p>{countdownMinutes != 1 ? 'minutos' : 'minuto'}</p>
                            </div>
                        }
                        <div className='clock-container'>
                            <h1>{countdownSeconds}</h1>
                            <p>{countdownSeconds != 1 ? 'segundos' : 'segundo'}</p>
                        </div>
                    </div>
                    {!user &&
                        <>
                            <Button onClick={handleShowAuthModal} disabled={disableAuth}>
                                {disableAuth ? 'Cadastros em breve...' : 'Cadastrar-se'}
                            </Button>
                        </>
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

			{ (current <= lastEventDay) &&
				<ScheduleSection>
					<div className='schedule-container'>
						<h3 className='title-mobile schedule-section-title'>Próximas atividades</h3>
						<div className='title-btn-desktop'>
							<h3 className='schedule-section-title'>Próximas atividades</h3>
							<Button type = "button" aria-label = "Ver programação completa" onClick={() => router.push('/schedule')}>Ver programação completa</Button>
						</div>
						<div className='filter-bar-container filter-bar-mobile'>
							<p>Dia {filterEventDaysId + 1} - {filterEventDays[filterEventDaysId]}</p>
                            <p>{shift}</p>
						</div>

						<div className='filter-bar-container filter-bar-desktop'>
							<div className='subtitle'>
								<p>Horário</p>
								<p>Atividade</p>
							</div>

							<div>
								<p>Dia {filterEventDaysId + 1} - {filterEventDays[filterEventDaysId]}</p>
							</div>

							<div>
								<p>{shift}</p>
							</div>
						</div>

						<ScheduleShift
							schedule={filteredSchedule}
						/>
						<div className='btn-mobile'>
							<Button onClick={() => router.push('/schedule')}>Ver programação completa</Button>
						</div>
					</div>
				</ScheduleSection>
			}

            <SupportersSection>
                <div className='supporters-container'>
                    <div className='supporters-title'>
                        <h3>Parcerias</h3>
                        <h6>Empresas e marcas que estão conosco para tornar este evento um sucesso</h6>
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
    padding-inline: 1rem;

    .landing-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid var(--color-neutral-secondary);
        border-left: 1px solid var(--color-neutral-secondary);

        .landing-info {
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1rem;
            
            .landing-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                max-width: 40rem;
                gap: 1rem;

                p {
                    font-weight: 400;
                }

                .greetings-text {
                    font: 700 1rem/1.5rem 'AT Aero Bold';

                    span {
                        font: inherit;
                        background-color: var(--color-primary-900);
                    }
                }
            }
        }

        .dates {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 1.5rem 1rem;
            border-top: 1px solid var(--color-neutral-secondary);
            margin-bottom: 2.5rem;
        }

        .dateWrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: inherit;
            background-color: var(--color-primary);

            h1, h2, h6 {
                text-align: center;
                line-height: 100%;
            }
            
            h1 {
                font-size: 5rem;
            }

            h2 {
                letter-spacing: 0.2em;
                margin-bottom: 1rem;
            }
        }
    }

    @media (min-width:800px) {
        .landing-container {
            .dateWrapper {
                width: 85%;
            }
        }
    }

    @media (min-width:1100px) {
        //height: 44rem;

        .landing-container {
            height: calc(100vh - 8rem);
            flex-direction: row;
            justify-content: space-between;

            button {
                width: fit-content;
            }

            .landing-info {
                height: 100%;
                width: 50%;
                padding: 1.5rem;
                border-right: 1px solid var(--color-neutral-secondary);
            }

            .dates {
                padding-inline: 3rem;
                display: flex;
                border: none;
                margin:0;
                align-items: center;
                justify-content: center;
                width: 50%;
            }

            .dateWrapper {
                flex-direction: row;
                padding: 3.5rem 2rem;
                align-items: center;
                gap: 1rem;
                width: 100%;
                align-items: center;
                justify-content: center;

                h1 {
                    font-size: 9rem;
                }

                h2 {
                    margin-bottom: 0;
                }

                h6 {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    height: 30%;
                    max-height: 10rem;
                    text-align: left;
                }
            }
        }
    }

    @media (min-width:1300px) {
        padding-inline: 6.75rem;
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
    padding-block: 4rem 2rem;
    gap: 1.5rem;
    border-top: 1px solid var(--color-neutral-secondary);

    .countdown-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        div {
            background-color: var(--color-primary-600);
            width: 70%;
            padding: 1rem 0;
        }

        h3 {
            text-align: center;
            background-color: var(--color-primary);
            padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        }

        h6 {
            text-align: center;
        }

        span {
            font: inherit;
            background-color: var(--color-primary-900);
        }
    }

    .countdown-clock {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .clock-container {
            padding: 1.5rem;
            background-color: var(--color-neutral-50);
            width: 100%;
            height: 8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            h1 {
                color: var(--color-primary-600);
            }

            p {
                font: 700 1rem/1.5rem 'AT Aero Bold';
                color: var(--color-primary-600);
            }
        }
    }

    @media (min-width:1100px) {
        padding-block: 5rem 4rem;        

        .countdown-clock {
            gap: 1rem;
            flex-direction: row;
            
            .clock-container {
                width: 13rem;
                height: 9.5rem;

                p {
                    font: 700 1.125rem/1.5rem 'AT Aero Bold';
                }
            }
        }

        button {
            width: fit-content;
        }
    }  
`

const ScheduleSection = styled.section`
    padding-block: 2rem;
    border-top: 1px solid var(--color-neutral-secondary);
    
    .schedule-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .schedule-section-title {
            background-color: var(--color-primary);
            padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        }

        .title-mobile {
            display: flex;
            flex-direction: row;
			background-color: var(--color-primary);
			padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        }

        .title-btn-desktop {
            display: none;
        }

		.filter-bar-container {
			height: fit-content;
            padding-block: 1rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			box-shadow: 0 -0.0625rem 0 0 var(--color-neutral-secondary);
			border-bottom: 0.0625rem solid var(--color-neutral-secondary);

			p {
				font: 700 1rem/1.25rem 'AT Aero Bold';
			}
		}

		.filter-bar-mobile {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: -1rem;

			@media (min-width: 1024px) {
				display: none;
			}
		}

		.filter-bar-desktop {
            margin-bottom: -2rem;

			@media (max-width: 1023px) {
				display: none;
			}

			justify-content: space-between;
			
			.subtitle {
				display: flex;
				gap: 6.31rem;
			}
		}

        .date-stamp {
            > div {
                background-color: var(--color-primary);
            }
        }

        .btn-mobile {
            width: 100%;
        }
    }

    @media (min-width:1021px) {
        padding-block: 4.5rem 2rem;

        .schedule-container {
            gap: 1.5rem;
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
`

const SupportersSection = styled.section`
    padding: 2rem 1rem;
    border-top: 1px solid var(--color-neutral-secondary);

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

            h6 {
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
        padding-block: 4.5rem;

        .supporters-container {

            .supporters-cards {
                max-width: 1328px;
            }
        }
    }
`
