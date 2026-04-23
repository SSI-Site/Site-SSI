import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import Meta from '../src/infra/Meta';
import '../utils/slugify';
import filterTalks from '../utils/filterTalks';

// importe Image do next
import Image from 'next/image'

// components
import AuthModal from '../src/components/AuthModal';
import Button from '../src/components/Button';
import MapModal from '../src/components/MapModal';
import PartnerCard from '../src/components/PartnerCard';
import ScheduleShift from '../src/components/ScheduleItems';
import SecondaryButton from '../src/components/SecondaryButton';
import YoutubeWatchNow from '../src/components/YoutubeWatchNow';
import saphira from '../services/saphira';
import CountdownSection from '../src/components/CountdownSection';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY

const partnerships = [
    { name: 'aton', imageDark: '/images/partners/aton-dark.png', imageLight: '/images/partners/aton-light.png', url: 'https://ambarx.com.br/' },
    { name: 'idwall', imageDark: '/images/partners/idwall-light.png', imageLight: '/images/partners/idwall-dark.png',  url: 'https://idwall.co/pt-BR/'},
    { name: 'Neologica', imageDark: '/images/partners/neologica-light.png', imageLight: '/images/partners/neologica-dark.png', url: 'https://www.nelogica.com.br/'},
];

const supporters = [
    { name: 'EACH', imageDark: '/images/partners/each-dark.svg', imageLight: '/images/partners/each-light.svg', url: 'https://www5.each.usp.br/' },
    { name: 'Alura', imageDark: '/images/partners/alura-dark.svg', imageLight: '/images/partners/alura-light.png', url: 'https://www.alura.com.br/' },
    { name: 'TOTVS', imageDark: '/images/partners/totvs-dark.svg', imageLight: '/images/partners/totvs-light.png', url: 'https://www.totvs.com/' },
    { name: 'PET-SI', imageDark: '/images/partners/pet-dark.png', imageLight: '/images/partners/pet-light.png', url: 'https://www.instagram.com/petsieach/' },
    { name: 'R2ventures', imageDark: '/images/partners/r2-ventures-dark.png', imageLight: '/images/partners/r2-ventures-light.png', url: 'https://r2ventures.com.br/' },
    {name: 'Rocketseat', imageDark: '/images/partners/rocketseat-light.png',  imageLight: '/images/partners/rocketseat-dark.png', url: 'https://www.rocketseat.com.br/'},
    {name: 'Bravium', imageDark: '/images/partners/bravium-light.png', imageLight: '/images/partners/bravium-dark.png',  url: 'https://www.bravium.com.br/'},
    // ].sort((a, b) => a.name > b.name ? 1 : -1);
];

const LocationButton = styled(SecondaryButton)`
    /* estilo especifico apenas para o segundo "Saiba Mais" na Home */
    width: 100%;

    @media (min-width: 560px) {
        width: auto;
    }
`;

const Home = () => {

    const router = useRouter();
    const { user, disableAuth } = useAuth();

    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showMapModal, setShowMapModal] = useState(false);
    const [schedule, setSchedule] = useState([])

    const handleShowAuthModal = () => {
        setShowAuthModal(true);
    }

    const handleShowMapModal = () => {
        setShowMapModal(true);
    }

    const getSchedule = async() => {
        try{
            const { data } = await saphira.getTalks()
            if (data) {
                setSchedule(data)
            }
        }
        catch(err){
            console.log('Houve um erro na hora de obter os dados', err)
        }
    }

    useEffect(() => {
        getSchedule()
    }, [])

    const firstEventDay = new Date(2025, 7, 18);
    const lastEventDay = new Date(2025, 7, 22);
    lastEventDay.setHours(23, 59, 59, 999);  // Define para o final do dia (23:59:59.999)

    const current = new Date();
    const currentTime = current.getHours().toString().padStart(2, '0') + ":" + current.getMinutes().toString().padStart(2, '0')

    const day = `${current.getDate()}`;

    // Dia correto para o DateComponent
    const scheduleDay = ((current >= firstEventDay && current <= lastEventDay) ? day : '18');

    // Dia no formato yyyy-mm-dd para o ScheduleShift
    const todayDate = current.toLocaleDateString('pt-br').split('/').reverse().join('-');
    const formattedScheduleDate = current >= firstEventDay && current <= lastEventDay ? todayDate : '2025-08-18';

    const filterEventDays = ["18 Ago - Segunda-feira", "19 Ago - Terça-feira", "20 Ago - Quarta-feira", "21 Ago - Quinta-feira", "22 Ago - Sexta-feira"];
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
    const filteredArray = schedule.filter((array) => {
        const scheduleStartTimeMinutes = minutesAfterMidNight(array.start_time.split("T")[1]); // Horário de cada atividade
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
    const filteredSchedule = filterTalks(filteredArray, formattedScheduleDate)
   
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
            <Meta title='Home | Semana de Sistemas de Informação' />

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
                                    {disableAuth ? 'Cadastros em breve...' : 'Cadastre-se'}
                                </Button>
                            </>
                            :
                            <>
                                <div className='landing-text'>
                                    <h1>Semana de Sistemas de Informação 2025</h1>
                                    <p>Participe da Semana de Sistemas de Informação! Mais de 40 palestrantes, temas como Inteligência Artificial, Ciência de Dados, Diversidade em TI e Desenvolvimento de Jogos, com especialistas de diversas empresas. Não perca essa chance de se conectar, aprender e inovar com as mentes que estão moldando o futuro da tecnologia!</p>
                                    <p className='greetings-text'>Olá, <span>{user.name ? `${user.name.split(' ')[0]}` : ''}</span>!</p>
                                </div>
                            </>
                        }

                        {showAuthModal &&
                            <AuthModal
                                onClose={() => setShowAuthModal(false)}
                                show={showAuthModal}
                            />
                        }

                    </div>

                    <div className="dates">
                        <div className="dateWrapper">
                            <div>
                                <h1>24-28</h1>
                                <h2>Ago 2026</h2>
                            </div>

                            <div>
                                <img src="/images/logos/USP.svg" alt="Logo USP" width={33} height={33} />
                                <h6>Online e <br/> Presencial</h6>
                            </div>
                        </div>
                        <CountdownSection  targetDate={"Aug 24, 2026 09:40:00"}/>   
                    </div>
                </div>
            </LandingSection>

            <YoutubeContainer>
                <YoutubeWatchNow />
            </YoutubeContainer>

            {/* Seção de inscrição na CO do ano seguinte - só aparece quando mandarem */}
            {/*
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
            */}

            {/* Seção de contagem regressiva - só aparece antes do evento */}
            {/* essa seção nao aparece so site então eu fiz apenas me baseando no figma */}

            <EventInfoSection>
                <div className='info'>
                    <div className='about-content'>

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
                                        <div className='contador'>
                                            <h5 ref={countUpRef}/>
                                            <h5>palestrantes</h5>
                                        </div>
                                        <p>Junte-se ao evento que contará com mais de 40 palestrantes, trazendo as últimas tendências e insights do mercado!</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>    

                        <div className='about-cards'>
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
                                        <div className='contador'>
                                            <h5 ref={countUpRef} />
                                            <h5>sorteios</h5>
                                        </div>
                                        <p>Participe do evento de tecnologia e concorra a mais de 25 sorteios exclusivos, repletos de prêmios incríveis!</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>

                        <div className='about-cards'>
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
                                        <div className='contador'>
                                            <h5 ref={countUpRef} />
                                            <h5>atividades</h5>
                                        </div>
                                        <p>Não perca um evento com 45 horas de atividades repletas de conteúdo e inovação para você se atualizar!</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        
                    </div>
                    <div className='about-btn'>
                        <SecondaryButton onClick={() => router.push('/about')}>Saiba mais</SecondaryButton>
                    </div>
                </div>
            </EventInfoSection>



            {(current <= lastEventDay) &&
                <ScheduleSection>
                    <div className='schedule-container'>
                        <h3 className='title-mobile schedule-section-title'>Próximas atividades</h3>
                        <div className='title-btn-desktop'>
                            <h3 className='schedule-section-title'>Próximas atividades</h3>
                            <Button type="button" aria-label="Ver programação completa" onClick={() => router.push('/schedule')}>Ver programação completa</Button>
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
                            <div className='title'>
                                <h3>Como chegar?</h3>
                            </div>
                        </div>

                        <div className='directions-text'>
                            <p><b>De trem:</b> Estação USP Leste [pegar o trem na Estação Brás ou Tatuapé – sentido Calmon Viana – linha 12 da CPTM].</p>
                            <p><b>De carro:</b> A EACH esta localizada na Rua Arlindo Béttio, Nº 1.000, no bairro Ermelino Matarazzo, ao lado do Parque Ecológico do Tietê. Há também uma entrada de veículos a partir da Rodovia Ayrton Senna, no Km 17 (portaria P1).</p>
                            <p>O evento ocorre nos auditórios da EACH, localizados no prédio I5, destacado em rosa no mapa abaixo: </p>
                        </div>

                        <div className='map-btn'>
                            <LocationButton onClick={handleShowMapModal}>Saiba mais</LocationButton>
                        </div>

                        {showMapModal &&
                            <MapModal
                                onClose={() => setShowMapModal(false)}
                                show={showMapModal}
                            />
                        }
                    </div>

                    <div className='map'>
                        <iframe
                            title = "Localização do evento"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=EACH+USP`}>
                        </iframe>
                    </div>
                </div>
            </DirectionsSection>

{/* OCULTADO POR ENQUANTO

            <SupportersSection>
                <div className='supporters-container'>
                    <div className='supporters-title'>
                        <h3>Parcerias</h3>
                        <h6>Marcas e organizações que estão conosco para tornar este evento um sucesso!</h6>
                    </div>
                    <div className='supporters-cards'>
                        {Object.entries(partnerships).map(([key, supporter]) => {
                            return (
                                <PartnerCard key={key} name={supporter.name} imageDark={supporter.imageDark} imageLight={supporter.imageLight} link={supporter.url} />
                            )
                        })}
                    </div>
                </div>
            </SupportersSection>

            <SupportersSection>
                <div className='supporters-container'>
                    <div className='supporters-title'>
                        <h3>Apoiadores</h3>
                        <h6>Marcas e organizações que acreditam no evento e tornam sua realização possível!</h6>
                    </div>
                    <div className='supporters-cards'>
                        {Object.entries(supporters).map(([key, supporter]) => {
                            return (
                                <PartnerCard key={key} name={supporter.name} imageDark={supporter.imageDark} imageLight={supporter.imageLight} link={supporter.url} />
                            )
                        })}
                    </div>
                </div>
            </SupportersSection>
            */}
        </>
    )
}

export default Home;

const LandingSection = styled.section`
    padding-inline: 1rem;
    max-height: 1080px;
    background-color: var(--background-neutrals-primary);
    color: var(--content-neutrals-primary);

    .landing-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    
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
                        padding: .15rem;
                        background-color: var(--brand-primary);
                        color: var(--content-neutrals-fixed-white);
                    }
                }
            }
        }

        .dates {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 1.5rem 1rem;
            margin-bottom: 2.5rem;
        }

        .dateWrapper {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: stretch; 
            gap: 1rem;
            padding: inherit;
            color: var(--content-neutrals-fixed-white);
            
            > div:first-child {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: linear-gradient(180deg, #FFFFFF 0%, #B988FF 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                color: transparent;
                
            }

            > div:last-child {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                gap: 0.5rem;
                
            }

            h1, h2, h6 {
                text-align: center;
                line-height: 100%;
            }
            
            h1 {
                font-size: 5rem;
                white-space: nowrap;
            }

            h2 {
                letter-spacing: 0.2em;
                line-height: 1.2
            }

            h6 {
                writing-mode: vertical-rl;
                transform: rotate(180deg);
                text-align: left;
                font-size: 0.75rem;
                background: linear-gradient(0deg, #FFFFFF 0%, #B988FF 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                color: transparent;
            }
        }
    }

    @media (min-width:800px) {
        .landing-container {
            .dateWrapper {
                flex-direction: row;
                padding: 3rem 3rem;
                gap: 1rem;
                width: 100%;
                justify-content: center;

                > div:first-child {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    flex-shrink: 0;
                }

                > div:last-child {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    flex-shrink: 0;
                }

                div:last-child img, 
                div:last-child svg {
                    width: 65px; 
                    height: 80px;
                }

                h1 {
                    font-size: 9rem;
                    line-height: 100%;
                }

                h6 {
                    height: auto;
                    max-height: none;
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media (min-width:1100px) {
        //height: 44rem;

        .landing-container {
            height: calc(100vh - 14rem);
            flex-direction: row;
            justify-content: space-between;

            button {
                width: fit-content;
            }

            .landing-info {
                height: 100%;
                width: 50%;
                padding: 1.5rem;
            }

            .dates {
                padding-inline: 3rem;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                border: none;
                margin:0;
                align-items: center;
                justify-content: center;
                width: 50%;
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
    padding: 3.75rem 1rem 0.75rem 1rem;
    background-color: var(--background-neutrals-primary);
    background-color: var(--background-neutrals-primary);

    background-image: url('/images/background_imgs/bg-sobre-mobile.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        padding: 1.5rem;

        .about-content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            color: var(--content-neutrals-primary);
            margin-bottom: 2rem;

            .about-cards {
                display: flex;
                justify-content: center;
                overflow: auto;  
                scroll-snap-type: x mandatory;
        
                .card {
                    width: 90%;
                    flex-shrink: 0;
                    display: block;

                    .contador {
                        display: flex;
                        gap: 0.4rem;
                        flex-direction: row;
                    }
        
                    p {
                        width: 90%;
                        margin-top: 0.5rem;
                        font: 400 1rem/1.5rem 'AT Aero';
                    }
                }
            }
        }

        .about-btn {
            align-self: flex-end;
            width: fit-content
        }
    }

    @media screen and (min-width:801px) {
        padding: 4rem 18.5rem 1.5rem 18.5rem;
        background-image: url('/images/background_imgs/bg-sobre-desktop.png');
        background-size: cover;
        background-position: center;

        .info {
            width: 55rem;

            .about-content {
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                
                .about-desc {
                    text-align: left;
                    max-width: 30%;
                }
    
                .about-cards {
                    width: 32%;
                    overflow: visible;
                    gap: 1rem;
                    
                    .card {
                        width: 100%;

                        p {
                            width: 100%;
                        }
                    }

                }
            
                .about-btn {
                    align-self: flex-end;
                }
            }
        }
    }
`

const DirectionsSection = styled.section`
    padding-inline: 1rem;

    .directions-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

            
        .directions-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 2rem 1.5rem;
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
                    background: linear-gradient(90deg, var(--background-brand-primary, #9638FF) 0%, #5A2299 100%);
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
        padding: 2rem 1.5rem;

            iframe {
                border: none;
                width: 100%;
                height: 16rem;
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
                padding: 4.5rem 1.5rem;
            }

            .map {
            width: 50%;
            padding: 4.5rem 1.5rem;

                iframe {
                    height: 32rem;
                }
            }
        }
    }

    @media (min-width:1100px) {
        .directions-container {
            .map {
                width: 50%;
                padding: 4.5rem 1.5rem;
                iframe {
                    height: 32rem;
                }
            }
        }
    }
`

const SupportersSection = styled.section`
    padding: 2rem 1rem;
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
            flex-wrap: wrap;
            flex-direction: row;
            gap: 1rem;
            justify-content: center;

            > div {
                flex-grow: 0;

                @media (min-width: 800px) {
                    flex-basis: calc(33.333% - 1rem);
                }
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