import { useState, useEffect } from 'react';
import Meta from '../src/infra/Meta';
import styled from 'styled-components';
import saphira from '../services/saphira';

//assets
import LogoPrincipal from '../public/images/logos/logo_sem_estrela.svg'
import ActivityComponent from '../src/components/ActivityComponent';

const About = () => {

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
                            image='./images/about/icon_capture_the_flag.svg'
                            alt='Imagem Capture the Flag'
                            title='Capture the Flag'
                            description='Juntamente com o grupo EACHinTheShell_, a SSI promoverá um Capture the Flag! Com o auxílio do grupo, terão diversos desafios sobre segurança da informação que abordam criptografia, redes, web e outros assuntos da área!'
                        />
                        <ActivityComponent
                            color='#8744C2'
                            image='./images/about/icon_palestras.svg'
                            alt='Imagem Palestras'
                            title='Palestras'
                            description='Teremos diversas palestras incíveis ao longo da semana. Elas abordarão vários assuntos dentro do universo da tecnologia, empreendedorismo e mercado de trabalho com diversos especialistas da área!'
                        />
                        <ActivityComponent
                            color='#FF7F5C'
                            image='./images/about/icon_minicursos.svg'
                            alt='Imagem Minicursos'
                            title='Workshops'
                            description='Este ano, estamos trabalhando para oferecer a você, workshops que ajudarão a conhecer na prática ferramentas que pode encontrar ao iniciar sua carreira na área de tecnologia. Não deixe de participar!'
                        />
                    </div>
                </ActivitiesSection>

            </BackgroundWrapper>

            <section>
                <LectureContent>
                    <div className='lecture-sample background-spotlight background-spotlight-1'>
                        <div className='lecture-image justify-left'>
                            <img src='./images/about/palestras.jpg' alt='Foto Palestra' />
                        </div>
                        <div className='lecture-sample-description'>
                            <h3>Palestras com experts da área</h3>
                            <p>
                                Venha participar de conversas com as melhores referências de cada assunto nas áreas. Desde assuntos relacionados a empreendedorismo na área de TI, até jogos, IOT, segurança da informação é muito mais!
                                Não perca a oportunidade de conhecer e perguntar para direcionar  a sua carreira.
                            </p>
                        </div>
                    </div>
                </LectureContent>

                <LectureContent>
                    <div className='lecture-sample middle-lecture background-spotlight background-spotlight-3'>
                        <div className='lecture-image justify-right'>
                            <img src='./images/about/workshops.jpg' alt='Foto Palestra' />
                        </div>
                        <div className='lecture-sample-description'>
                            <h3>Workshops em laboratórios de informática</h3>
                            <p>
                                Já pensou em aplicar o que vemos e ouvimos nas palestras?
                                As empresas apoiadoras da Semana de Sistemas de Informação estarão realizando workshops para que você não só saía da palestra conhecendo do assunto, mas sim, já dominando um pouco na prática!
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
                                Não perca a oportunidade de se conectar com os palestrantes e participantes, trocar ideias e aumentar a sua rede de contatos.
                                Dica; conecte com os palestrantes no LinkedIn e anote os contatos de cada um para eventuais dúvidas.
                            </p>
                        </div>
                    </div>
                </LectureContent>
            </section>

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
        height: 40%;
        display: flex;
        position: absolute;
        top: -4.5rem;
        mask-image: linear-gradient(to top, transparent 0%, black 10%);
        background: url('./images/padrao_background_mobile.svg') no-repeat;
        background-position: top center;
        background-size: cover;
        z-index:-2;

        @media (min-width:1000px) {
            background: url('./images/padrao_background_desktop.svg');
            background-size: cover;
            height: 60%;
            mask-image: linear-gradient(to top, transparent 0%, black 5%);

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

const   LectureContent = styled.div`
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
            padding: 20px 20px 20px 0;
        }
    }

`

const EventNumbersBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8rem auto;

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
        width: 95%;

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