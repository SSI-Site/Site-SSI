import { React, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

import Meta from '../src/infra/Meta';
import useAuth from '../hooks/useAuth';
import saphira from '../services/saphira';
import '../utils/slugify';

// components
import Button from '../src/components/Button';
import DateStamp from '../src/components/DateStamp';
import ScheduleInformation from '../src/components/ScheduleInformation';
import TwitchWatchNow from '../src/components/TwitchWatchNow';
import AuthModal from '../src/components/AuthModal';
import TokenModal from '../src/components/TokenModal';
import Divider from '../src/components/Divider';

// assets
import LogoPrincipal from '../public/images/logos/logo_principal_vertical.svg';
import borda from '../public/images/borda2.png';
import speakerPicture from '../public/images/logos/logo_principal_horizontal.svg';

const supporters = [
    { title: 'ELO7', url: 'https://www.elo7.com.br/' },
    { title: 'EY', url: 'https://www.ey.com/pt_br' },
    { title: 'GITHUB', url: 'https://github.com/' },
    { title: 'GLOBO', url: 'https://www.globo.com/' },
    { title: 'REVELO', url: 'https://www.revelo.com.br/' },
    { title: 'PET-SI', url: 'http://www.each.usp.br/petsi/' },
    { title: 'EACH-USP', url: 'http://www5.each.usp.br/' }
].sort((a, b) => a.title > b.title ? 1 : -1);

const Home = () => {

    const router = useRouter();
    const { user, signOut } = useAuth();

    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isModalTokenOpen, setIsModalTokenOpen] = useState(false);
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleModalTokenIsOpen = () => {
        setIsModalTokenOpen(!isModalTokenOpen);
    }

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

    const current = new Date();
    const day = `${current.getDate()}`;
    const month = `${current.getMonth()}`;
    const year = `${current.getFullYear()}`;
    const weekDayNames = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const weekDay = weekDayNames[`${current.getDay()}`];
    const simpleWeekDayNames = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
    const simpleWeekDay = simpleWeekDayNames[`${current.getDay()}`];
    
    const description = "Nesta "+weekDay+", teremos mais um dia de palestras recheadas de informações sobre tecnologia e carreira para você. Não deixe de participar!";
    const sentenceTitle = "E com mais palestras incríveis!";
    const title = sentenceTitle.slice(0,2)+simpleWeekDay.replace(/.$/, "ou")+sentenceTitle.slice(1,);

    return (
        <>
            <Meta title='SSI 2023 | Início' />

            <BannerSection>

                <figure>
                    <img className='logo' src={LogoPrincipal} alt="Logo SSI 2023" />
                </figure>

                <div className='content'>
                    <div className='content-title'>
                        <h3>Semana de Sistemas de Informação</h3>
                        <h5>Palestras do dia 21/08 ao dia 25/08</h5>
                    </div>

                    {!isLoading ?
                        <>
                            <div className='content-login'>
                                {user ?
                                    <WelcomeComponent>Olá {user.name ? `, ${user.name.split(' ')[0]}!` : '!'}</WelcomeComponent>
                                    :
                                    <Link href="#modal-root"><Button className="btn-entrar" onClick={handleShowAuthModal}>Entrar</Button></Link>
                                }
                            </div>

                            {showAuthModal &&
                                <AuthModal
                                onClose={() => setShowAuthModal(false)}
                                show={showAuthModal}
                                />
                            }

                            <div className='content-token'>
                                {user && /*isUserRegistered &&*/ !isModalTokenOpen &&
                                    <Button onClick={toggleModalTokenIsOpen}> Registrar Presença </Button>
                                }

                                {user && isModalTokenOpen &&
                                    <TokenModal toggleVisibility={toggleModalTokenIsOpen} />
                                }

                                {/* <div className="complete-register-btns">
                                    {user && !isUserRegistered &&
                                        <Button className="btn-complete-register" onClick={() => router.push('/user')}> Conclua seu cadastro </Button>
                                    }
                                    {user && !isUserRegistered &&
                                        <Button className="btn-sair" onClick={() => signOut()}> Sair </Button>
                                    }
                                </div> */}
                            </div>
                            <TwitchWatchNow />
                        </>
                        :
                        <Loading>
                            <img src='./loading.svg' alt='SSI 2023 - Loading' />
                        </Loading>
                    }
                </div>
            </BannerSection>

            <Divider dividerSize="large" />

            <EventInfoSection>
                <h2 className="section-title">ONDE VAI ACONTECER?</h2>
                <div className='content'>
                    <div className="details">
                        <p>As palestras ocorrerão entre os dias <span>21 e 25 de agosto</span>, nos <span>auditórios da EACH</span>.</p>
                        <p>Além disso, elas também serão compartilhadas na <span>Twitch</span>. Então, já deixe o nosso canal anotado no seu caderninho! </p>
                        <Button onClick={() => router.push('/about')}>Saiba Mais</Button>
                    </div>

                    <div className="logos">
                        <a target="blank" href="http://www.each.usp.br/">
                            <img src="/images/logos/EACH-USP.svg" alt="EACH USP" />
                        </a>
                        <a target="blank" href="https://www.twitch.tv/each_ssi">
                            <img src="/images/social_media/TwitchTextLogo.svg" alt="Twitch" />
                        </a>
                    </div>
                </div>
            </EventInfoSection>

            <Divider dividerSize="large" />

            <ScheduleSection>
                <h2 className="section-title">Programação</h2>
                <div className='schedule-content'>
                    <div className='first-section-schedule'>
                        
                        {/* Filtro para atualização diária do texto durante os dias do evento: */}
                        {(day>=21 && day<=25 && month==7 && year==2023) ? 
                            (   
                                <>
                                    <Link href={`/schedule/${weekDay.slugify()}`}>
                                        <div className='date'>
                                            <DateStamp day={day} weekDay={weekDay} size="small" />
                                        </div>
                                    </Link>
                                    <ScheduleInformation
                                        speakerPicture={speakerPicture}
                                        title={title}
                                        overview={description}
                                    />
                                </>
                            ) : (
                                <>
                                    <div className='date'>
                                        <DateStamp day={day} weekDay={weekDay} size="small" />
                                    </div>
                                    <ScheduleInformation
                                        speakerPicture={speakerPicture}
                                        title="Palestras imperdíveis para você!"
                                        overview="Durante o evento, cada dia terá diversas palestras recheadas de informações sobre tecnologia e carreira para você. Fique de olho para não perder!"
                                    />
                                </>
                            )
                        }
                    </div>

                    <div className='sechedule-text'>
                        <p>Confira o conteúdo detalhado das nossas palestras, para poder se organizar e decidir quais você mais quer assistir!</p>
                    </div>
                </div>
                <Button onClick={() => router.push('/schedule')}>Confira</Button>
            </ScheduleSection>

            <Divider dividerSize="large" />

            <SupportersSection>
                <h2 className="section-title">Apoio</h2>
                <ul>
                    {supporters.map((supporter, index) => (
                        <li key={index}>
                            <a
                                href={supporter.url}
                                target="_blank"
                                onClick={() => handleClickSuporter(supporter)}
                            >
                                {supporter.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="background-blur" />
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
const BannerSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    .logged-msg {
        text-align: center;
        margin: 2rem 0;
        padding: 0 10%;
    }

    .logo {
        width: 11.5em;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content-token {
        width: 100%;
        text-align: center;
        flex-direction: column;
        margin-block: 30px 50px;
    }

    .btn-entrar{
        margin: 40px 0;
    }

    .btn-sair {
        max-width: 150px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .btn-complete-register {
        max-width: 400px;
    }

    .complete-register-btns {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        text-align: center;
        margin: 16px 0;
        padding: 0 16px;
    }

    @media (min-width:1281px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 100vh;
        max-height: 680px;
        padding-top: 50px;

        .logo {
            width: 15.5em;
            align-self: flex-start;
        }

        /* button {
            margin: 0;
        } */

        .content-title {
            text-align: center;
            height: 140px;
            width: 700px;
        }

        .content-login {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            width: 500px;
        }

        .content-token {
            margin-top: 40px;
            flex-direction: column
        }
    }
`

const EventInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        display: flex;
        flex-direction: column;
        width: clamp(0px, 67%, 600px);
        align-items: center;
        gap: 10rem;

        .details {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            p {
                text-indent: 3rem;
                text-align: justify;

                span {
                    color: #BC73FF;
                }
            }

            button {
                width: 15rem;
            }
        }

        .logos {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
            width: clamp(0px, 100%, 400px);
            gap: 2rem;

            img {
                width: 100%;
            }

            h1 {
                transition: all .1s;
            }

            a:nth-child(2):hover {

                h1{
                    color: var(--color-tertiary);
                    filter: brightness(120%);
                }
            }
        }
    }

    @media (min-width:1281px) {
      padding-bottom: 150px;

        .content {
            flex-direction: row;
            width: clamp(0px, 75%, 1920px);
            position: relative;

            .details {

                button {
                    margin-top: 0;
                    position: absolute;
                    align-self: flex-start;
                    transform: translateX(-50%);
                    left: 50%;
                    bottom: -150px;
                }
            }
        }
    }
`

const ScheduleSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .schedule-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70vw;
        max-width: 1000px;
        position: relative;
        margin-top: 120px;
        margin-bottom:5rem;
    }

    .first-section-schedule {
        position: relative;
        width: 60vw;
        max-width: 500px;
    }

    .date {
        position: absolute;
        width: 120px;
        height: 120px;
        right: -20px;
        top:-110px;
    }

    .sechedule-text {
        margin-top: 5rem;
        border-style: solid;
        border-image-source: url(${borda});
        border-image-slice: 35%;
        border-image-width: 50px;
        border-image-outset: 10px;
        border-image-repeat: stretch;
        text-align: center;
        max-width: 300px;
        transition: border-image-width 1s;
    }

    .sechedule-text:hover {
        border-image-width: 100px;
        transition: border-image-width 0.5s;
    }

    @media (min-width:600px) {

        .date{
            right: -70px;
            top: -70px;
        }
    }

    @media (min-width:1021px) {

        .schedule-content{
            flex-direction: row;
            justify-content: space-around;
        }

        .first-section-schedule {
            min-width: 400px;
        }

        .sechedule-text {
            margin-top: 0px;
            margin-left: 100px;
        }
    }
`

const SupportersSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
    padding: 1em 0;
    position: relative;

    .background-blur {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #371F52;
        opacity: 0.7;
        filter: blur(50px);
        z-index: -1;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        max-width: 800px;
        margin: auto;

        li {

            text-align: center;
            margin: 1rem 0;

            a {
                color: #FFFFFF;
                text-decoration: none;
                border-color: #8744C2;

                &:hover {
                    color: #8744C2;
                    border-bottom: 2px solid #8744C2;
                    transition: color 0.2s;
                }
            }
        }
    }

    @media (min-width:600px) {

        h2 {
            padding: 0.1em 1em;
        }

        ul {
            grid-template-columns: repeat(2, 1fr);
            gap: 1em 15vw;
            flex-direction: unset;
        }
    }

    @media (min-width:1021px) {

        ul {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5em 15vw;
        }
    }

    @media (min-width:1400px) {

        ul {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5em 5vw;
        }
    }
`