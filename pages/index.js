import { useRouter } from 'next/router';
import { React, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import Meta from '../src/infra/Meta';
import '../utils/slugify';

// importe Image do next
import Image from 'next/image'

// components
import AuthModal from '../src/components/AuthModal';
import Button from '../src/components/Button';
import MapModal from '../src/components/MapModal';
import PartnerCard from '../src/components/PartnerCard';
import ScheduleShift from '../src/components/ScheduleItems';
import SecondaryButton from '../src/components/SecondaryButton';
import TokenModal from '../src/components/TokenModal';
import YoutubeWatchNow from '../src/components/YoutubeWatchNow';

// assets
import schedule from '../data/schedule';

const supporters = [
    { name: 'Alura', image: '/images/partners/alura.svg', url: 'https://www.alura.com.br/' },
    { name: 'Rocketseat', image: '/images/partners/rocketseat.svg', url: 'https://www.rocketseat.com.br/' },
    { name: 'Kluber', image: '/images/partners/kluber.png', url: 'https://www.klueber.com/br/pt/' },
    { name: 'EACH', image: '/images/partners/each.svg', url: 'https://www5.each.usp.br/' },
    { name: 'DASI', image: '/images/partners/dasi.png', url: 'https://instagram.com/dasiusp' },
    { name: 'PET-SI', image: '/images/partners/pet.png', url: 'https://instagram.com/petsi' },
// ].sort((a, b) => a.name > b.name ? 1 : -1);
];

const Home = () => {

    const router = useRouter();
    const { user, disableAuth } = useAuth();

    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showMapModal, setShowMapModal] = useState(false);

    const handleShowAuthModal = () => {
        setShowAuthModal(true);
    }
    
    const handleShowMapModal = () => {
        setShowMapModal(true);
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
    lastEventDay.setHours(23, 59, 59, 999);  // Define para o final do dia (23:59:59.999)

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
    const morningEnd = minutesAfterMidNight("12:00"); // Início do almoco
    const eveningEnd = minutesAfterMidNight("18:00"); // Início do jantar

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

    useEffect(() => {
        if (showMapModal) {
            // Calcula a largura da barra de rolagem
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            // Adiciona o padding-right para compensar a largura da barra de rolagem
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        }
    }, [showMapModal]);


    return (
        <>
            <Meta title='Home | Semana de Sistemas de Informação'/>

            <LandingSection>
                <div className='landing-container'>
                    <div className='landing-info'>
                        {disableAuth || !user ?
                            <>
                                <div className='landing-text'>
                                    <h1>Semana de Sistemas de Informação 2025</h1>
                                    <p>Participe da Semana de Sistemas de Informação! Mais de 40 palestrantes, temas como Inteligência Artificial, Ciência de Dados, Diversidade em TI e Desenvolvimento de Jogos, com especialistas de diversas empresas. Não perca essa chance de se conectar, aprender e inovar com as mentes que estão moldando o futuro da tecnologia!</p>
                                </div>
                                <Button onClick={handleShowAuthModal} disabled={disableAuth}>
                                    {disableAuth ? 'Cadastros em breve...' : 'Cadastrar-se'}
                                </Button>
                            </>
                        :
                            <>  
                                <div className='landing-text'>
                                    <h1>Semana de Sistemas de Informação 2025</h1>
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
                                <h1>18-22</h1>
                                <h2>Ago 2025</h2>
                            </div>
                            
                            <div>
                                <h6>Online e Presencial</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </LandingSection>

            <YoutubeContainer>
                <YoutubeWatchNow />
            </YoutubeContainer>

            {/* Seção de inscrição na CO do ano seguinte - só aparece quando mandarem */}
            {/*essa seção não está no figma */}
            <SubscriptionSection>
                <div className='landing-container'>
                    <div className='subscription-container'>
                        <h3>Inscrições abertas!</h3>

                        <p>Junte-se à <span>Comissão Organizadora</span> da SSI 2026 e ajude a criar o melhor evento acadêmico de Sistemas de Informação!</p>

                        <a href='https://forms.gle/EnTh6tMkMag4zXoj8' target="_blank">
                            <Button>Inscrever-se</Button>
                        </a>
                    </div>

                    <div className='coMembers'>
                        <Image 
                            src="/images/co_members/co.jpg"       
                            alt="Membros da Comissão Organizadora"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </SubscriptionSection>

            {/* Seção de contagem regressiva - só aparece antes do evento */}
            {/* essa seção nao aparece so site então eu fiz apenas me baseando no figma */}
            {/* essa seção nao aparece so site então eu fiz apenas me baseando no figma */}
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

            <EventInfoSection>
                <div>
                    <div className='about-title'>
                        <div className = 'title'>
                            <h3>Sobre o evento</h3> 
                        </div>
                    </div>

                    <div className = 'about-content'>
                        <p className = 'about-desc'>As palestras ocorrerão entre os dias 07 e 11 de outubro, nos <span>auditórios da EACH</span>. Além disso, elas também serão transmitidas no nosso canal no YouTube.</p>

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
                                        <div>
                                            <h5 ref={countUpRef}/>
                                            <h5>palestrantes</h5>
                                        </div>
                                        <p>Junte-se ao evento que contará com mais de 40 palestrantes, trazendo as últimas tendências e insights do mercado!</p>
                                    </div>
                                )}
                            </CountUp>

                            <CountUp
                                start={0}
                                end={25}
                                delay={0}
                                decimals={0}
                                suffix="+"
                                enableScrollSpy 
                            >
                                {({ countUpRef }) => (
                                    <div className='card'>
                                        <div>
                                            <h5 ref={countUpRef} />
                                            <h5>sorteios</h5>
                                        </div>
                                        <p>Participe do evento de tecnologia e concorra a mais de 25 sorteios exclusivos, repletos de prêmios incríveis!</p>
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
                                        <div>
                                            <h5 ref={countUpRef} />
                                            <h5>atividades</h5>
                                        </div>
                                        <p>Não perca um evento com 45 horas de atividades repletas de conteúdo e inovação para você se atualizar!</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>

                        <div className='about-btn'>
                            <SecondaryButton onClick={() => router.push('/about')}>Saiba mais</SecondaryButton>
                        </div>
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

            <DirectionsSection>
                <div className='directions-container'>
                    <div className='directions-info'>
                        <div className='directions-title'>
                            <div className = 'title'>
                                <h3>Como chegar?</h3> 
                            </div>
                        </div>

                        <div className='directions-text'>
                            <p><b>De trem:</b> Estação USP Leste [pegar o trem na Estação Brás ou Tatuapé – sentido Calmon Viana – linha 12 da CPTM].</p>
                            <p><b>De carro:</b> A EACH esta localizada na Rua Arlindo Béttio, Nº 1.000, no bairro Ermelino Matarazzo, ao lado do Parque Ecológico do Tietê. Há também uma entrada de veículos a partir da Rodovia Ayrton Senna, no Km 17 (portaria P1).</p>
                            <p>O evento ocorre nos auditórios da EACH, localizados no prédio I5, destacado em rosa no mapa abaixo: </p>
                        </div>

                        <div className='map-btn'>
                            <SecondaryButton onClick={handleShowMapModal}>Saiba mais</SecondaryButton>
                        </div>

                        {showMapModal && 
                            <MapModal
                                onClose={() => setShowMapModal(false)}
                                show={showMapModal}
                            />
                        }
                    </div>

                    <div className='map'>
                        <img src="/images/background_imgs/mapa.png"/>
                    </div>
                </div>
            </DirectionsSection>

            <SupportersSection>
                <div className='supporters-container'>
                    <div className='supporters-title'>
                        <h3>Parcerias</h3>
                        <h6>Organizações e marcas que estão conosco para tornar este evento um sucesso</h6>
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
    border-bottom: 1px solid var(--outline-neutrals-secondary);
    background-color: var(--background-neutrals-primary);
    color: var(--content-neutrals-primary);

    .landing-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-inline: 1px solid var(--outline-neutrals-secondary);
        border-inline: 1px solid var(--outline-neutrals-secondary);
    
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
                        background-color: var(--outline-neutrals-secondary);
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
            border-top: 1px solid var(--outline-neutrals-secondary);
            margin-bottom: 2.5rem;
        }

        .dateWrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: inherit;
            background-color: var(--brand-primary);
            color: var(--content-neutrals-fixed-white);

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
                border-right: 1px solid var(--outline-neutrals-secondary);
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
`

const YoutubeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 0;
`

const SubscriptionSection = styled.section`
    padding-inline: 1rem;
    background-color: var(--background-neutrals-secondary);

    .subscription-container {
        border-inline: 1px solid var(--outline-neutrals-secondary);
        border-bottom: 1px solid var(--outline-neutrals-secondary);
        padding: 4rem 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;

        h3 {
            width: fit-content;
            text-align: center;
            padding: 0.75rem 1rem;
            color: var(--content-neutrals-fixed-white);
            background-color: var(--brand-primary);
            align-self: center;
        }

        p {
            span {
                font: inherit;
                background-color: var(--brand-purple-900);
            }
        }
    }

    .coMembers {
        padding: 1.5rem 1.25rem 1rem 1rem;
        border-inline: 1px solid var(--outline-neutrals-secondary);

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border: 0.25rem solid var(--content-neutrals-fixed-white);
            box-shadow: 0.25rem 0.25rem 0 var(--brand-primary);
        }
    }

    @media screen and (min-width:801px) {
        margin-bottom: 0rem;

        .landing-container{
            display: flex;
            flex-direction: row;

            .subscription-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                height: 34.75rem;
                width: 50%;
                border-right: none;
                border-bottom: none;
                gap: 1.5rem;
                padding-inline: 1.5rem;

                h3 {
                    align-self: flex-start;
                }

                button {
                    width: fit-content;
                }
            }

            .coMembers {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`

const EventInfoSection = styled.section`
    padding: 4rem 1rem 2rem;
    border-top: 1px solid var(--outline-neutrals-secondary);
    background-color: var(--background-neutrals-primary);
    background-color: var(--background-neutrals-primary);

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;;
        gap: 1.5rem;;
    }

    .about-title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        .title {
            color: var(--content-neutrals-fixed-white);
            padding: 0.75rem 1.5rem;
            width: fit-content;
            background-color: var(--brand-primary);
            color: var(--content-neutrals-fixed-white);
        }        
    }

    .about-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: var(--content-neutrals-primary);


        .about-desc {
            font: 400 1rem/1.5rem 'AT Aero';
            
            
            span {
                font: inherit;
                background-color: var(--brand-purple-900);
            }
        }

        .about-cards {
            display: flex;

            &::-webkit-scrollbar {
                display: none;
            }
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            height: auto;
            width: 100%;
            overflow: auto;  
            scroll-snap-type: x mandatory;
            gap: 2rem;

            .card {
                width: 70%;
                max-width: 15.125rem;
                flex-shrink: 0;
                display: block;

                p {
                    margin-top: 0.5rem;
                    font: 400 1rem/1.5rem 'AT Aero';
                }
            }
        }
    }

    @media screen and (min-width:800px) {
        padding: 4.5rem 1rem;

        .about-content {
            align-items: center;
            
            .about-desc {
                text-align: center;
                max-width: 700px;
            }

            .about-cards {
                width: 100%;
                gap: 1rem;
                
                .card {
                    flex-shrink: 1;
                    width: 35%;
                    max-width: unset;
                }
            }

            .about-btn {
                width: fit-content;
            }
        }
        
    }

    @media screen and (min-width:1100px) {
        padding-block: 0;

        > div {
            flex-direction: row;
            max-width: 1328px; // max for matching lines 
            margin: 0 auto;
        }

        .about-title {
            align-self: flex-start;
            padding: 4.5rem 0 0 0;

            .title {
                align-self: flex-start;
            }   
        }

        .about-content {
            padding: 4.5rem 1.5rem;
            border-inline: 1px solid var(--outline-neutrals-secondary);
            max-width: 55rem;
            gap: 2rem;

            .about-desc {
                font: 400 1.125rem/1.75rem 'AT Aero';
                text-align: left;
                max-width: unset;
            }

            .about-cards .card p {
                font: 400 1.125rem/1.75rem 'AT Aero';
            }

            .about-btn {
                align-self: flex-end;
            }
        }
    }
`

const CountdownSection = styled.section`
    padding-block: 4rem 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid var(--outline-neutrals-secondary);
    margin-bottom: -2rem;
    background-color: var(--background-neutrals-primary);

    .countdown-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        color: var(--brand-primary);

        div {
            background-color: var(--brand-purple-600);
            width: 70%;
            padding: 1rem 0;
        }

        h3 {
            text-align: center;
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

    .countdown-clock {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .clock-container {
            padding: 1.5rem;
            background-color: var(--background-neutrals-primary);
            width: 100%;
            height: 8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            h1 {
                color: var(--brand-purple-600);
            }

            p {
                font: 700 1rem/1.5rem 'AT Aero Bold';
                color: var(--brand-purple-600);
            }
        }
    }

    @media (min-width:1100px) {
        padding-block: 5rem 4rem; 
        margin-bottom: 0;

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
    border-top: 1px solid var(--outline-neutrals-secondary);
    
    .schedule-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .schedule-section-title {
            background-color: var(--brand-primary);
            padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        }

        .title-mobile {
            display: flex;
            flex-direction: row;
			background-color: var(--brand-primary);
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

			box-shadow: 0 -0.0625rem 0 0 var(--background-neutrals-secondary);
			border-bottom: 0.0625rem solid var(--outline-neutrals-secondary);

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
                background-color: var(--brand-primary);
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

const DirectionsSection = styled.section`
    padding-inline: 1rem;
    border-top: 1px solid var(--outline-neutrals-secondary, #999);

    .directions-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        border-inline: 1px solid var(--outline-neutrals-secondary, #999);
            
        .directions-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 4.5rem 1.5rem;
            width: 100%;
            gap: 2rem;
            
            
            .directions-title {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: left;
                color: var(--content-neutrals-fixed-white);

                .title {
                    padding: 0.75rem 1.5rem;
                    width: fit-content;
                    background-color: var(--brand-primary);
                }        
            }
            
            .directions-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                max-width: 40rem;
                gap: 1rem;

                p {
                    font-weight: 400;
                }
            }
        }

        .map-btn{
            width: 100%;

            @media screen and (min-width: 800px) {
                width: fit-content;
            }
        }

       
        
        .map {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 4.5rem 2.5rem;

            img {
                height: auto;
                width: 100%;
                object-fit: cover;
            }
        }
        
    }

    
     @media (min-width:1100px) {
        //height: 18.5rem;

        .directions-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .directions-info {
                height: 100%;
                width: 50%;
                padding: 1.5rem;
            }

            .map {
            width: 50%;
            padding: 4.5rem 2.5rem;
            border-left: 1px solid var(--outline-neutrals-secondary);

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }

    @media (max-width:1100px) {
        .map {
            width: 50%;
            padding: 4.5rem 1.5rem;
            border-top: 1px solid var(--outline-neutrals-secondary);

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
    }
`

const SupportersSection = styled.section`
    padding: 2rem 1rem;
    border-top: 1px solid var(--outline-neutrals-secondary);
    background-color: var(--background-neutrals-primary);
    color: var(--content-neutrals-primary);

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
				background-color: var(--brand-primary);
				padding: 0.75rem 1.5rem 0.75rem 1.5rem;
                color: var(--content-neutrals-fixed-white);
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
