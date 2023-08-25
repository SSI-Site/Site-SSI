import { React, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import CountUp from 'react-countup';

import Meta from '../src/infra/Meta';
import useAuth from '../hooks/useAuth';
import saphira from '../services/saphira';
import '../utils/slugify';

// components
import Button from '../src/components/Button';
import DateStamp from '../src/components/DateStamp';
import TwitchWatchNow from '../src/components/TwitchWatchNow';
import AuthModal from '../src/components/AuthModal';
import TokenModal from '../src/components/TokenModal';
import PartnerCard from '../src/components/PartnerCard';
import ScheduleShift from '../src/components/ScheduleShift';

const supporters = [
    { name: 'Rocketseat', image: './images/partners/rocketseat.svg', url: 'https://www.rocketseat.com.br/' },
    { name: 'Griaule', image: './images/partners/griaule.svg', url: 'https://griaule.com/' },
    { name: 'Poatek', image: './images/partners/poatek.png', url: 'https://poatek.com/' },
    { name: 'BCR.CX', image: './images/partners/bcrcx.png', url: 'https://www.bcrcx.com/' },
    { name: 'EACH', image: './images/partners/each.svg', url: 'http://www5.each.usp.br/' },
    { name: 'PET-SI', image: './images/partners/pet.png', url: 'http://www.each.usp.br/petsi/' }
// ].sort((a, b) => a.name > b.name ? 1 : -1);
];

const Home = () => {

    const router = useRouter();
    const { user, signOut } = useAuth();
    // const { user } = false; // para deploy sem login

    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isModalTokenOpen, setIsModalTokenOpen] = useState(false);
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleShowAuthModal = () => {
        if (window.pageYOffset != 0) {
            setTimeout(() => { handleShowAuthModal() }, 50);
        } else {
            setShowAuthModal(true);
        }
    }

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

    const [countdownDays, setCountdownDays] = useState();
    const [countdownHours, setCountdownHours] = useState();
    const [countdownMinutes, setCountdownMinutes] = useState();
    const [countdownSeconds, setCountdownSeconds] = useState();
    var countdownDate = new Date("Aug 21, 2023 00:00:00").getTime();
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

    const firstEventDay = new Date(2023, 7, 21);
    const lastEventDay = new Date(2023, 7, 25);
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
    const scheduleDay = ((current >= firstEventDay && current <= lastEventDay) ? day : '21');
    // const scheduleDay = ((current >= firstEventDay && current <= lastEventDay) ? `${currentTime >= '21:40' ? (parseInt(day, 10) + 1).toString() : day}` : '21'); // para mostrar palestras do dia seguinte após 21:40

    // Turno correto para o DateComponent
    const scheduleShift = () => {
        if (current >= firstEventDay && current <= lastEventDay) {
            // if (currentTime >= '21:40') { // para mostrar palestras do dia seguinte após 21:40 (mudar o scheduleDay também)
            //     return 'Manhã';
            // }
            console.log(currentTime);
            if (currentTime >= '18:20') {
                return 'Noite';
            }
            if (currentTime >= '12:20') {
                return 'Tarde';
            }
        }
        return 'Manhã';
    }
    
    // Dia no formato yyyy-mm-dd para o ScheduleShift
    const todayDate = new Date().toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
    const formatedScheduleDate =  current >= firstEventDay && current <= lastEventDay ? todayDate : '2023-08-21';

    return (
        <>
            <Meta title='SSI 2023 | Início' />

            <LandingSection>
                <div className='landing-container'>
                    {!isLoading ?
                        <div className='landing-info'>
                            {!user ?
                                <>
                                    <div className='landing-text'>
                                        <h3>Semana de Sistemas de Informação 2023</h3>
                                        <p>Participe da Semana de Sistemas de Informação: palestras exclusivas sobre tecnologia, oferecidas de forma online e presencial!</p>
                                    </div>
                                    <Link href="#modal-root"><Button className="btn-entrar" onClick={handleShowAuthModal}>Entrar</Button></Link>
                                    {/* <Button className="btn-entrar" disabled>Cadastros em breve...</Button> */}
                                </>
                            :
                                <>
                                {!isUserRegistered &&
                                    <>
                                        <div className='landing-text'>
                                            <h3>Semana de Sistemas de Informação 2023</h3>
                                            <p>Olá <span>{user.name ? `${user.name.split(' ')[0]}!` : '!'}</span> Finalize seu cadastro para registrar presenças:</p>
                                        </div>
                                        <Button onClick={() => router.push('/user')}>Finalizar cadastro</Button>
                                    </>
                                }
                                {isUserRegistered &&
                                    <>
                                        <div className='landing-text'>
                                            <h3>Semana de Sistemas de Informação 2023</h3>
                                            <p>Olá <span>{user.name ? `${user.name.split(' ')[0]}` : ''}</span>, registre sua presença online aqui:</p>
                                        </div>
                                        <TokenModal/>
                                    </>
                                }
                                </>
                            }
                    
                            {showAuthModal &&
                                <AuthModal
                                onClose={() => setShowAuthModal(false)}
                                show={showAuthModal}
                                />
                            }
                        </div>
                        :
                        <Loading>
                            <img src='./loading.svg' alt='SSI 2023 - Loading' />
                        </Loading>
                    }
                    <div className='landing-bait'>
                        <div className='event-date'>
                            <svg viewBox="0 0 450 50">
                                <text y="80">21-25</text>
                            </svg>
                            <p>AGO 2023</p>
                        </div>
                        <p>online e presencial</p>
                    </div>
                </div>
            </LandingSection>

            <TwitchContainer>
                <TwitchWatchNow />
            </TwitchContainer>

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

            {/* Seção de contagem regressiva - só aparece antes do evento */}
            {(now < countdownDate) &&
                <CountdownSection>
                    <div className='countdown-text'>
                        <h3>Contagem regressiva</h3>
                        <p>Faltam poucos dias para participar dessa <span>experiência única!</span></p>
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
                            <Link href="#modal-root"><Button className="btn-entrar" onClick={handleShowAuthModal}>Cadastrar-se</Button></Link>
                            {/* <Link href="#modal-root"><Button className="btn-entrar" onClick={handleShowAuthModal} disabled>Cadastrar-se</Button></Link> */}
                        </div>
                    }
                </CountdownSection>
            }

            <ScheduleSection>
                <div className='schedule-container'>
                    <h3 className='title-mobile'>Programação</h3>
                    <div className='title-btn-desktop'>
                        <h3>Programação</h3>
                        <Button onClick={() => router.push('/schedule')}>Ver programação completa</Button>
                    </div>
                    <div className='date-stamp'>
                        <DateStamp day={scheduleDay} showEmoji={false}/>
                    </div>
                    <ScheduleShift
                        day={formatedScheduleDate}
                        shift={scheduleShift()}
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

const WelcomeComponent = styled.div`
    --border: 1.75px solid var(--color-tertiary);
    --background: rgba(138, 69, 198, 0.6);
    --padding: 0.65em 2.65em;
    --out-space-top: 0.1em;
    --out-space-bottom: -0.25em;
    --transition-duration: 500ms;

    pointer-events: none;
    border: var(--border);
    border-radius: 0;
    background-color: var(--background);
    padding: var(--padding);
    color: white;
    position: relative;
    text-align: center;
    margin: 40px 0 15px 0;
    transition: background-color var(--transition-duration);

    &::before, &::after {
        content: "";
        position: absolute;
        border: var(--border);
        transition:
            top var(--transition-duration),
            bottom var(--transition-duration),
            left var(--transition-duration),
            right var(--transition-duration);
    }

    &::before {
        top: var(--out-space-top);
        bottom: var(--out-space-bottom);
        left: calc(var(--out-space-top) * -2.5);
        right: calc(var(--out-space-top) * 1.4);
    }

    &::after {
        top: calc(var(--out-space-top) * -2.5);
        bottom: calc(var(--out-space-top) * 1);
        left: calc(var(--out-space-top) * 1.3);
        right: calc(var(--out-space-top) * -2.5);
    }

    &:hover {
        --out-space-top: 0em;
        --out-space-bottom: 0em;
        --background: transparent;
    }

    @media (min-width:1023px) {
        --border: 2.6px solid var(--color-tertiary);
        pointer-events: unset;
        /* margin: 80px 0 25px 0; */
    }
`
const LandingSection = styled.section`
    background: url('./images/background_imgs/background1_mobile.svg') no-repeat;
    background-size: cover;
    padding-block: 3.5rem 6.625rem;

    .landing-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3.75rem; /* match navbar height */
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
                    font-family: 'Space_Mono_Bold';
                    font-weight: 400;
                }
                span {
                    font: inherit;
                    color: var(--color-primary-700);
                }
            }
        }

        .landing-bait {
            width: fit-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .event-date {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                svg {
                    font: 400 9rem/0rem 'Space_Mono_Bold';
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 18rem;
                    height: 6rem;
                }

                text {
                    fill: none;
                    stroke: var(--color-neutral-400);
                    stroke-width: 4px;
                    stroke-linejoin: round;
                    animation: 2s pulsate infinite;
                }

                @keyframes pulsate {
                    50%{ stroke-width:8px }
                }

                p {
                    font: 400 2.3rem/3rem 'Space_Mono_Bold';
                    letter-spacing: 0.8rem;
                    color: var(--color-neutral-300);
                }
            }

            p {
                font: 400 1.3rem/1.5rem 'Space_Mono_Bold';
                color: var(--color-neutral-500);
            }
        }
    }

    @media (min-width:600px) {
        padding-right: 2.5rem;
    }

    @media (min-width:800px) {
        background-image: url('./images/background_imgs/background1_desktop.svg');
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
                        font: 400 2rem/3rem 'Space_Mono_Bold';
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

const EventInfoSection = styled.section`
    padding-block: 6.625rem 3.5rem;
    background: url('./images/background_imgs/background2_mobile.svg') no-repeat;
    background-position: bottom left;
    background-size: cover;
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
                font-family: 'Space_Mono_Bold';
                font-weight: 400;

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
        background-image: url('./images/background_imgs/background2_desktop.svg');
        padding-block: 6.75rem;

        .about-container {
            gap: 3.5rem;

            .about-title {
                h3 {
                    font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
                }

                p {
                    font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
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

        p {
            font: 400 1rem/1.25rem 'Space_Mono_Bold';
            text-align: center;
            
            span {
                font: inherit;
                color: var(--color-primary-700);
            }
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
                font: 400 1rem/1.25rem 'Space_Mono_Bold';
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
                font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
            }
        
            p {
                font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
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
    background: url('./images/background_imgs/background3_mobile.svg') no-repeat;
    background-size: cover;
    
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
        background-image: url('./images/background_imgs/background3_desktop.svg');

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
    padding-block: 3.5rem;
    background: url('./images/background_imgs/background4_mobile.svg') no-repeat;
    background-size: cover;

    .supporters-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3.5rem;

        .supporters-title {
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

            }
        }

        .supporters-cards {
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            width: 100%;
        }
    }

    @media (min-width:600px) {
        background-image: url('./images/background_imgs/background4_desktop.svg');
    }

    @media (min-width:1000px) {
        padding-block: 6.75rem 11.75rem;

        .supporters-container {
            gap: 3.5rem;

            .supporters-title {
                h3 {
                    font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
                }

                p {
                    font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
                }
            }

            .supporters-cards {
                gap: 1.5rem;
                max-width: 1224px;
            }
        }
    }
`