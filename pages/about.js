import { useState, useEffect } from 'react';
import Meta from '../src/infra/Meta';
import styled from 'styled-components';
import saphira from '../services/saphira';

//assets
import LogoPrincipal from '../public/images/logos/logo_sem_estrela.svg'
import ActivityComponent from '../src/components/ActivityComponent';

const About = () => {

    const [example, setExample] = useState("");

    async function fetchExample() {
        const res = await saphira.getCatFact();
        setExample(res.fact);
    }

    useEffect(() => {
        fetchExample();
    }, []);

    return (
        <>
            <Meta title='SSI 2022 | Sobre' />
            <BackgroundWrapper>
                <div className='padrao-background'></div>

                <LogoTextSection>
                    <img className='logo' src={LogoPrincipal} alt="Logo SSI 2022" />
                    <div className='content'>
                        <div className='content-title'>
                            <h1>O que é SSI?</h1>
                        </div>

                        <div className='content-text'>
                            <h4>A Semana de Sistemas de Informação é um evento anual organizado pelas alunas e pelos alunos do curso de Sistemas de Informação da Escola de Artes, Ciências e Humanidades da Universidade de São Paulo (EACH - USP).</h4>
                            <p>Nesta semana são apresentadas diversas palestras, workshops e outras atividades voltadas para o mundo de TI, abordando assuntos sobre tecnologia, mercado de trabalho, empreendedorismo, entre outros.</p>
                        </div>

                    </div>
                </LogoTextSection>

                <ActivitiesSection>
                    <h2 className='section2-title'>O que teremos no evento?</h2>
                    <div className='activities'>

                        <ActivityComponent
                            color='#4A46C5'
                            image='./images/logo_capture_the_flag.svg'
                            alt='Imagem Capture the Flag'
                            title='Capture the Flag'
                            description='Juntamente com o grupo EACHinTheShell_, a SSI promoverá um Capture the Flag! Com o auxílio do grupo, terão diversos desafios sobre segurança da informação que abordam criptografia, redes, web e outros assuntos da área!'
                        />
                        <ActivityComponent
                            color='#8744C2'
                            image='./images/logo_palestras.svg'
                            alt='Imagem Palestras'
                            title='Palestras'
                            description='A SSI 2022 terá um total de X palestras que acontecerão de segunda à sexta. Elas abordarão vários assuntos dentro do universo da tecnologia, empreendedorismo e mercado de trabalho com diversos especialistas da área!'
                        />
                        <ActivityComponent
                            color='#FF7F5C'
                            image='./images/logo_minicursos.svg'
                            alt='Imagem Minicursos'
                            title='Minicursos'
                            description='A SSI Online 2.0 terá um total de 34 palestras que acontecerão de segunda à sexta. Elas abordarão vários assuntos dentro do universo da tecnologia, empreendedorismo e mercado de trabalho com diversos especialistas da área!'
                        />
                    </div>
                </ActivitiesSection>

            </BackgroundWrapper>

            <LectureSection>

                <div className='lecture-sample background-spotlight background-spotlight-1'>
                    <div className='lecture-image justify-left'>
                        <img src='./images/palestra.png' alt='Foto Palestra' />
                    </div>
                    <div className='lecture-sample-description'>
                        <h3>Palestras com experts da área</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor ultricies risus, vel elementum tortor gravida ut. Donec ultrices felis sodales tempor condimentum. Praesent sollicitudin est massa, mollis tempor ante condimentum a. Vivamus sed mi faucibus arcu fermentum auctor sit amet sed nunc. </p>
                    </div>
                </div>
            </LectureSection>

            <EventNumbersBanner>
                <div className='event-info-container background-spotlight background-spotlight-2'>
                    <h3><span className='purple-plus'>&#43;</span>2.6k</h3>
                    <div className='orange-separator'></div>
                    <p>Espectadores</p>
                </div>

                <div className='event-info-container'>
                    <h3><span className='purple-plus'>&#43;</span>800</h3>
                    <div className='orange-separator'></div>
                    <p>Participantes</p>
                </div>

                <div className='event-info-container'>
                    <h3><span className='purple-plus'>&#43;</span>34h</h3>
                    <div className='orange-separator'></div>
                    <p>De conteúdo</p>
                </div>
            </EventNumbersBanner>

            <LectureSection>
                <div className='lecture-sample middle-lecture background-spotlight background-spotlight-3'>
                    <div className='lecture-image justify-right'>
                        <img src='./images/workshop.png' alt='Foto Palestra' />
                    </div>
                    <div className='lecture-sample-description'>
                        <h3>Workshops em laboratórios de informática</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor ultricies risus, vel elementum tortor gravida ut. Donec ultrices felis sodales tempor condimentum. Praesent sollicitudin est massa, mollis tempor ante condimentum a. Vivamus sed mi faucibus arcu fermentum auctor sit amet sed nunc. </p>
                    </div>
                </div>
            </LectureSection>

            <LectureSection>
                <div className='lecture-sample'>
                    <div className='lecture-image justify-left'>
                        <img src='./images/networking.png' alt='Foto Palestra' />
                    </div>
                    <div className='lecture-sample-description'>
                        <h3>Networking com participantes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor ultricies risus, vel elementum tortor gravida ut. Donec ultrices felis sodales tempor condimentum. Praesent sollicitudin est massa, mollis tempor ante condimentum a. Vivamus sed mi faucibus arcu fermentum auctor sit amet sed nunc. </p>
                    </div>
                </div>
            </LectureSection>
        </>
    )
}

export default About;

const BackgroundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .padrao-background {
        width: calc(100vw - 10px);
        height: 100%;
        display: flex;
        position: absolute;
        top: 0; /** match navbar height */
        mask-image: linear-gradient(to top, transparent 0%, black 60%);
        background: url('./images/padrao_background_mobile.svg') no-repeat;
        background-position: top left;
        background-size: cover;
        z-index:-2;

        @media (min-width:1000px) {
            background: url('./images/padrao_background_desktop.svg');
        }
        @media (min-width:1500px) {
            left: calc((1500px - 100vw - 10px)/2); /** compensa o max-width do SiteWrapper/main */
        }
    }
`

const LogoTextSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    .logo {
        width: 90%;
        max-width: 320px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: left;
        padding-inline: 1rem;
        width: 90%;
        max-width: 550px;
    }

    h1 {
        font-weight: normal;
        font-size: 64px;
        text-align: center;
        line-height: 1.2;
        margin: 110px 0 70px;
    }

    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        text-align: left;
        margin-bottom: 40px;
    }

    p {
        text-align: left;
        font-size: 22px;
    }

    @media (min-width: 800px) {

        .logo {
            max-width: 400px;
        }

        .content {
            max-width: 700px;
        }

        h1 {
            line-height: unset;
        }
    }

    @media (min-width:1281px) {
        flex-direction: row;
        justify-content: space-around;

        .logo {
            max-width: 464px;
        }

        .content {
            max-width: 747px;
        }

        h1 {
            margin-top: 0;
            text-align: left;
        }

        h4 {
            margin-bottom: 60px;
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
        font-size: 48px;
    }

    .activities {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 10rem;
        overflow: hidden;
    }


    @media (min-width: 800px) {
        margin-block: 12rem;

        .activities {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 96px;
            padding-top: 10rem;
        }
    }
`

const LectureSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .lecture-sample {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        padding-inline: 2rem;
        margin-block: 5rem;
    }

    .lecture-image {
        border-radius: 8px;
        display: flex;
        width: 322px;
        height: 258px;
        align-items: center;
        justify-items: flex-end;
        background: linear-gradient(90deg, rgba(146,76,208,1) 0%, rgba(66,64,168,1) 100%);
    }

    .justify-left {
        justify-content: left;
    }

    .justify-right {
        justify-content: right;
    }

    .lecture-sample-description {
        margin: 8rem 2.5rem;
    }

    h3 {
        font-size: 30px;
        font-weight: 700;
        line-height: 35px;
        margin-bottom: 5rem;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }

    @media (min-width:600px) {

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
            width: 450px;
            height: 370px;
        }

        img {
            width: 420px;
        }

        .background-spotlight::after {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            z-index: -3;
            opacity: 75%;
            background: radial-gradient(50% 50% at 50% 50%, rgba(138, 69, 198, 0.3) 0%, rgba(51, 0, 0, 0) 100%);
        }

        .background-spotlight-1::after {
            top: 15rem;
            right: 0;
        }

        .background-spotlight-2::after {
            top: 50rem;
            right: 90%;
        }

        .background-spotlight-3::after {
            top: 85rem;
            top: 65%;
            right: 10rem;
        }

    }

    @media (min-width: 1021px) {
        padding-inline: 5rem;

        .lecture-sample {
            max-width: 1500px;
            flex-direction: row;
            justify-content: space-between;
            gap: 3rem;
            margin-bottom: 8rem;
        }

        .middle-lecture {
            flex-flow: row-reverse;
        }

        .lecture-sample-description {
            margin-block: 5rem;
            max-width: 45%;
            margin-inline: 0;
        }

        .lecture-image {
            max-width: 650px;
            max-height: 500px;
            width: 39vw;
            height: 31vw;
        }

        img {
            max-width: 600px;
            width: 37vw;
        }
    }

`

const EventNumbersBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .event-info-container {
        width: 98vw;
        padding-inline: 4rem;
        margin-bottom: 80px;
    }

    .purple-plus {
        color: #8744C2;
    }

    h3, .purple-plus {
        margin: 0;
        font-size: 65px;
        font-weight: 700;
        line-height: 75px;
    }

    .orange-separator {
        height: 2px;
        width: 100%;
        max-width: 340px;
        background-color: #FF7F5C;
        margin-top: 20px;
    }

    p {
        font-size: 25px;
        line-height: 75px;
        font-weight: 600;
    }

    @media (min-width: 600px) {
        margin-block: 5rem 8rem;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 7rem;

        .event-info-container {
            width: 340px;
            margin: 0;
        }
    }

    @media (min-width: 1021px) {
        margin-block: 3rem 8rem;

        .event-info-container {
            padding: 0;
        }

        .orange-separator {
            width: 340px;
        }
    }
`