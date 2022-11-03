import { React, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import Meta from '../src/infra/Meta';
import saphira from '../services/saphira';

//components
import Button from '../src/components/Button'
import DateComponent from '../src/components/DateComponent';
import ScheduleInformation from '../src/components/ScheduleInformation';
import TwitchWatchNowComponent from '../src/components/TwitchWatchNowComponent'
import AuthModal from '../src/components/AuthModal'
import ModalTokenComponent from '../src/components/ModalTokenComponent'
import Divider from '../src/components/Divider';

//assets
import LogoPrincipal from '../public/images/logos/logo_sem_estrela.svg'
import borda from '../public/images/borda2.png';
import star from '../public/images/star.svg';
import speakerPicture from '../public/images/logos/logo_sem_estrela.svg';

const supporters = [
    { title: 'ELO7', url: 'https://www.elo7.com.br/' },
    { title: 'EY', url: 'https://www.ey.com/pt_br' },
    { title: 'GITHUB', url: 'https://github.com/' },
    { title: 'GLOBO', url: 'https://www.globo.com/' },
    { title: 'REVELO', url: 'https://www.revelo.com.br/' },
    { title: 'PET-SI', url: 'http://www.each.usp.br/petsi/' },
    { title: 'EACH-USP', url: 'http://www5.each.usp.br/' }
].sort((a, b) => a.title > b.title ? 1 : -1)

const Home = () => {

    const router = useRouter();
    const { user } = useAuth();

    const [showAuthModal, setShowAuthModal] = useState(false);
    const [isModalTokenOpen, setIsModalTokenOpen] = useState(false);

    const toggleModalTokenIsOpen = () => {
        setIsModalTokenOpen(!isModalTokenOpen);
    }

    const handleShowAuthModal = () => {
        if (window.pageYOffset != 0) {
            setTimeout(() => { handleShowAuthModal() }, 50)
        } else {
            setShowAuthModal(true);
        }
    }

    const handleClickSuporter = supporter => {
        // Coletar metricas de cliques
    }

    return (
        <>
            <Meta title='SSI 2022 | Início' />
            <BackgroundWrapper>
                <div className='padrao-background'></div>

                <BannerSection>
                    <figure>
                        <img className='logo' src={LogoPrincipal} alt="Logo SSI 2022" />
                    </figure>

                    <div className='content'>
                        <div className='content-title'>
                            <h1>Semana de Sistemas de Informação</h1>
                            <h3>Palestras do dia 07/11 ao dia 11/11</h3>
                        </div>

                        <div className='content-login'>
                            { user ?
                                <WelcomeComponent>Bem-vinde{user.name ? `, ${user.name.split(' ')[0]}!` : '!'}</WelcomeComponent>
                                : <Link href="#modal-root"><Button onClick={handleShowAuthModal}>Entrar</Button></Link>
                            }
                        </div>

                        {/* <WelcomeComponent>Bem-vinde!</WelcomeComponent>
                        <span id="#temp-span" style={{"marginBottom": "60px", "maxWidth": "70%", "textAlign": "center"}}>
                            O cadastro para o evento estará disponível em breve.</span> */}

                        {showAuthModal &&
                            <AuthModal
                                onClose={() => setShowAuthModal(false)}
                                show={showAuthModal}
                            />
                        }

                        <TwitchWatchNowComponent />

                        <div className='content-token'>
                            {user && !isModalTokenOpen &&
                                <Button onClick={toggleModalTokenIsOpen}>Registrar Presença</Button>
                            }

                            {user && isModalTokenOpen &&
                                <ModalTokenComponent toggleVisibility={toggleModalTokenIsOpen} />
                            }
                        </div>
                    </div>
                </BannerSection>


                <Divider dividerSize="large" />

                <EventInfoSection>

                    <h2 className="section-title">ONDE VAI ACONTECER?</h2>

                    <div className='content'>

                        <div className="details">
                            <p>As palestras ocorrerão entre os dias <span>07 e 11 de novembro</span>, nos <span>auditórios da EACH</span>.</p>
                            <p>Além disso, elas também serão compartilhadas na <span>Twitch</span>. Então, já deixe o nosso canal anotado no seu caderninho! </p>
                            <Button onClick={() => router.push('/about')}>Saiba Mais</Button>
                        </div>

                        <div className="logos">
                            <img src="/images/logos/EACH-USP.svg" alt="EACH USP" />
                            <img src="/images/social_media/TwitchTextLogo.svg" alt="Twitch" />
                            <h1>TWITCH.TV/EACH_SSI</h1>
                        </div>

                    </div>

                </EventInfoSection>
            </BackgroundWrapper>

            <Divider dividerSize="large" />

            <ScheduleSection>

                <h2 className="section-title">Programação</h2>

                <div className='schedule-content'>

                    <div className='first-section-schedule'>

                        <div className='date'>
                            <DateComponent day="7" weekDay="segunda feira" size="small" />
                        </div>

                        <ScheduleInformation
                            speakerPicture={speakerPicture} speakerName="Palestrante"
                            title="Em breve"
                            overview="Assim como todas as palestras do evento, esta será mais uma recheada de informações sobre tecnologia e carreira pra você."
                        />

                    </div>

                    <div className='sechedule-text'>
                        <p>Confira aqui o conteúdo detalhado das nossas palestras, para poder se programar e decidir quais você mais quer assistir!</p>
                    </div>
                    <div className='starr star-one'></div>
                    <div className='starr star-two'></div>
                    <div className='starr star-three'></div>
                    <div className='starr star-four'></div>

                </div>
                <Button disabled onClick={() => router.push('/schedule')}>Confira</Button>
                <span id="#temp-span" style={{ "marginTop": "15px", "maxWidth": "70%", "textAlign": "center" }}>As informações sobre a programação serão divulgadas em breve.</span>

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

const BackgroundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .padrao-background {
        width: calc(100vw - 10px);
        height: 80%;
        display: flex;
        position: absolute;
        top: -4.5rem;
        mask-image: linear-gradient(to top, transparent 0%, black 10%);
        background: url('./images/padrao_background_mobile.svg') no-repeat;
        background-position: top center;
        background-size: cover;
        z-index:-2;

        @media (min-width:1000px) {
            height: 60%;
            background: url('./images/padrao_background_desktop.svg');
            background-size: cover;
        }
        @media (min-width:1500px) {
            left: calc((1500px - 100vw - 10px)/2); /** compensa o max-width do SiteWrappe/main */
        }
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

    font-family: 'Plaza';
    font-weight: 400;
    font-size: 2rem;

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
        margin: 80px 0 25px 0;
    }
`
const BannerSection = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

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
    }

    h1 {
        font-family: 'Plaza';
        font-style: normal;
        font-weight: 400;
        font-size: 3.125rem;
        text-align: center;
        margin: 16px 0;
        padding: 0 16px;
    }

    h3 {
        font-family: 'Bebas Neue';
        font-weight: 400;
        font-size: 2.25rem;
        text-align: center;
        margin-bottom: 16px;
    }

    button {
        margin: 5rem 0;
    }

    @media (min-width:1281px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 100vh;
        max-height: 650px;
        padding-top: 50px;

        .logo {
            width: 15.5em;
            align-self: flex-start;
        }

        button {
            margin: 0;
        }

        .content-title {
            text-align: center;
            height: 140px;
            width: 700px;
        }

        .content-login {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 200px;
            width: 500px;
        }

        .content-token {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
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
             font-size: 2rem;
             text-indent: 3rem;
             text-align: justify;

             span {
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
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
          img {
             width: 100%;
          }
          gap: 2rem
       }

    }

    @media (min-width:1281px) {

      padding-bottom: 150px;

       .content {

           flex-direction: row;
           width: clamp(0px, 75%, 1920px);
            position: relative;
           .details {
              p {
                 font-size: 2rem;
              }

              button {
               margin-top: 0rem;
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

    .schedule-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70vw;
        max-width: 1000px;
        position: relative;
        margin-top: 120px;
        margin-bottom:5rem;
    }

    .first-section-schedule{
        position: relative;
        width: 60vw;
        max-width: 500px;
    }

    .date{
        position: absolute;
        width: 120px;
        height: 120px;
        right: -20px;
        top:-110px;
    }

    .sechedule-text{
        margin-top: 5rem;
        border-style: solid;
        border-image-source: url(${borda});
        border-image-slice: 35%;
        border-image-width: 50px;
        border-image-outset: 10px;
        border-image-repeat: stretch;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        max-width: 300px;
        transition: border-image-width 1s;
    }

    .sechedule-text:hover{
        border-image-width: 100px;
        transition: border-image-width 0.5s;
    }

    .starr{
        content: url(${star});
        position: absolute;
        width: 50px;
        height: 50px;
        z-index:-2;
    }

    .star-one{
        top: -100px;
        left:-10vw;
        transform: rotate(-20deg) scale(0.75);
    }

    .star-two{
        top: -75px;
        left: 5vw;
        transform: rotate(-45deg) scale(1.2);
    }

    .star-three{
        top: 100px;
        left:-15vw;
        transform: rotate(-45deg) scale(2);
    }

    .star-four{
        bottom: -40px;
        right:-10px;
        transform: rotate(-90deg) ;
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

        .first-section-schedule{
            min-width: 400px;
        }

        .sechedule-text{
            margin-top: 0px;
            margin-left: 100px;
        }

        .first-section-schedule:after{
            content: '';
            position: absolute;
            top: -125px;
            left: -50px;
            width: 500px;
            height: 500px;
            z-index: -2;
            opacity: 75%;
            background: radial-gradient(50% 50% at 50% 50%, rgba(138, 69, 198, 0.3) 0%, rgba(51, 0, 0, 0) 100%);
        }

        .schedule-content:after{
            content: '';
            position: absolute;
            top: -300px;
            right: -100px;
            width: 300px;
            height: 300px;
            z-index: -3;
            opacity: 75%;
            background: radial-gradient(50% 50% at 50% 50%, rgba(138, 69, 198, 0.3) 0%, rgba(51, 0, 0, 0) 100%);
        }

        .star-four{
            bottom: 0px;
            right:40%;
        }
    }
`;

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
                font-family: 'Bebas Neue';
                font-weight: 400;
                font-size: 3rem;
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

export default Home;
