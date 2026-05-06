import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Meta from '../src/infra/Meta';
import Image from 'next/image';

// images
import bgMobile from '../public/images/partnerships/photos/bg_mobile.png'
import bgDesktop from '../public/images/partnerships/photos/bg_desktop.png'
import logoInstagram from '../public/images/partnerships/icons/logo_instagram.svg';
import logoLinkedin from '../public/images/partnerships/icons/logo_linkedin.svg';
import logoInPerson from '../public/images/partnerships/icons/logo_inPerson.svg';
import CountUp from 'react-countup';
import imgMotivation from '../public/images/partnerships/photos/motivation.png';

// components
import Button from '../src/components/Button';



const partnerships = () => {
    <Meta title='Para Empresas | Semana de Sistemas de Informação'
        description=''
        keywords=''
    /> // TODO: preencher descrição e keywords

    return (
        <>
            {/* Seção incial da pagina onde tem uma frase de impacto e um botão para entrar em contato */}
            <LandingSection>
                <div className='landingSection'>
                    <div>
                        <h1>CONECTE SUA MARCA AO FUTURO</h1>
                    </div>
                    <div className='landingSectionText'>
                        <p>
                            Esteja diante de um <strong>público altamente qualificado</strong>, fortaleça sua marca no ambiente universitário e compartilhe oportunidades. 
                        </p>
                        <p>
                            Impacte quem está pronto para transformar o mercado e <strong>conquiste hoje os talentos de amanhã</strong>
                        </p>
                    </div>
                    <a href="/404">
                        <Button>
                            <b>Quero marcar presença no evento</b>
                        </Button>
                    </a>
                </div>
            </LandingSection>

            {/* Seção que explica o porquê ser um parceiro da SSI */}
            <MotivationSection>
                <div className='motivationSection'>
                    <div className='motivationSectionImages'>
                        <Image
                            src={imgMotivation}
                            alt="Imagem de pessoas em um evento"
                            width={304}
                            height={252}
                        />
                    </div>
                    <div className='motivationSectionText'>
                        <div>
                            <h4>Por que <strong>ser um parceiro</strong> <br/> do evento?</h4>
                            <p>Colaborar com a Semana de SI te garante <strong>contato direto</strong> com centenas de estudantes da <strong>Universidade de São Paulo</strong> e de outras faculdades, compondo um público engajado e altamente qualificado.</p>
                        </div>
                        <div>
                            <h6>Perfil qualificado</h6>
                            <p>O público possui forte base em <strong>tecnologia, negócios e gestão.</strong> Além disso, há forte estímulo ao desenvolvimento de <strong>projetos práticos</strong> pela própria graduação e por meio de atividades de extensão. Se inserir no ecossistema universitário te garante como protagonista na formação dos novos profissionais.</p>
                        </div>
                        <div>
                            <h6>Interesses</h6>
                            <p>No curso de Sistemas de Informação, <strong>89,7% dos estudantes</strong> demonstram interesse em <strong>iniciar um estágio em 2026.</strong> De um total de 804 graduandos, essa parcela possui interesse em variadas áreas do mercado de tecnologia.</p>
                        </div>
                    </div>
                </div>
            </MotivationSection>

            {/* Seção onde a logo de todos os parcerios rodam em um carrossel */}
            <SponsorsSection>
                {/* TODO: Criar um componente de carrossel com as logos dos patrocinadores */}
            </SponsorsSection>

            {/* Seção onde tem os planos de patrocínio e o que cada um oferece, com um botões para entrar em contato */}
            <PlansSection>

            </PlansSection>

            {/* Seção com os numeros da última edição, como impacto nas redes sociais, número de participantes, etc */}
            <OurNumbersSection>
                <div className='our-numbers-title'>
                    <h3>Nossos Números</h3>
                </div>

                <div className='our-numbers-icons'>
                    <div className='icon-group'>
                        <picture>
                            <source srcSet={logoInstagram} media='(prefers-color-scheme: dark)' />
                            <Image
                                src={logoInstagram}
                                alt="Icone do instagram"
                                width={64}
                                height={64}
                                className='image'
                            />
                        </picture>
                        <div className="icon-counters">
                            <CountUp
                                start={0}
                                end={289}
                                delay={0}
                                decimals={0}
                                suffix=" mil+"
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>visualizações</p>
                                    </div>
                                )}
                            </CountUp>
                            <CountUp
                                start={0}
                                end={1.5}
                                delay={0}
                                decimals={1}
                                decimal=','
                                suffix=" mil+"
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>seguidores</p>
                                    </div>
                                )}
                            </CountUp>
                            <CountUp
                                start={0}
                                end={37491}
                                separator='.'
                                delay={0}
                                decimals={0}
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>contas alcançadas</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <p>Apresentamos engajamento crescente e conteúdo impulsionado</p>
                    </div>

                    <div className='icon-group'>
                        <picture>
                            <source srcSet={logoLinkedin} media='(prefers-color-scheme: dark)' />
                            <Image
                                src={logoLinkedin}
                                alt="Icone do Linkedin"
                                width={64}
                                height={64}
                                className='image'
                            />
                        </picture>
                        <div className="icon-counters">
                            <CountUp
                                start={0}
                                end={44.6}
                                delay={0}
                                decimals={1}
                                decimal=','
                                suffix=" mil+"
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>impressões</p>
                                    </div>
                                )}
                            </CountUp>
                            <CountUp
                                start={0}
                                end={1000}
                                delay={0}
                                separator=''
                                decimals={0}
                                suffix="%+"
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>de visitas à página</p>
                                    </div>
                                )}
                            </CountUp>
                            <CountUp
                                start={0}
                                end={40}
                                delay={0}
                                decimals={0}
                                suffix="%"
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>crescimento de seguidores</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <p>Página frequente em resultados de pesquisa e visitas recorrentes</p>
                    </div>

                    <div className='icon-group'>
                        <picture>
                            <source srcSet={logoInPerson} media='(prefers-color-scheme: dark)' />
                            <Image
                                src={logoInPerson}
                                alt="Icone do instagram"
                                width={64}
                                height={64}
                                className='image'
                            />
                        </picture>
                        <div className="icon-counters">
                            <CountUp
                                start={0}
                                end={40}
                                delay={0}
                                decimals={0}
                                suffix="+"
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>palestrantes</p>
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
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>de atividade no evento</p>
                                    </div>
                                )}
                            </CountUp>
                            <CountUp
                                start={0}
                                end={684}
                                delay={0}
                                decimals={0}
                                enableScrollSpy
                            >
                                {({ countUpRef }) => (
                                    <div className='our-numbers-contador'>
                                        <h5 ref={countUpRef} />
                                        <p>incrições no site</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <p>Público interessado e participativo, interações frequentes</p>
                    </div>
                </div>
                {/* TODO: Aplicar efeito de numeros crecendo igual na home esse efeito já existe */}
            </OurNumbersSection>

            {/* Seção que descreve como acontece a SSI, dias, periodos, temas abordados, etc */}
            <ExperienceSection>

            </ExperienceSection>
        </>
    )
}

export default partnerships;

const LandingSection = styled.section`
    background-image: url(${bgMobile});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    min-height: 75vh;

    margin-top: -5rem;
    padding: 10rem 1rem 5rem 1rem;
    
    .landingSection { 
        display: flex;
        gap: 2.25rem;
        flex-direction: column;
        align-items: center;


        h1 {
            font-size: 2rem; 
            line-height: 2.5rem;
            text-align: center;
            
        }

        .landingSectionText {
            max-width: 20rem;
        }

        p {
            text-align: center;
            font-size: 0.875rem;
            font-weight: 400;
        }
    }

    @media (min-width: 800px) {
        background-image: url(${bgDesktop});
        margin-top: -6rem;
        padding: 16rem 18.5rem 11rem 18.5rem;
        
        .landingSection {
            gap: 4rem; 

            h1 {
                font-size: 4rem;
                line-height: 4.5rem;
            }

            .landingSectionText {
                max-width: none;
            }
            
            p {
                font-size: 1.125rem;
                line-height: 1.75rem;
            }
        }
    }
`

const MotivationSection = styled.section`
    padding: 2.25rem 1rem;

    .motivationSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.25rem;
    }

    .motivationSectionImages {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
            max-width: 610px;
            height: auto;
        }
    }

    .motivationSectionText {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        
        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem
        }
        
        h4 {
            font-weight: 400;
            strong{
                background: linear-gradient(90deg, #4A148C 0%, #310C61 100%);
                padding: 1px 4px; 
            }
        }
        
        h6 {
            font-weight: 400;
        }

        p{
            font-weight: 400;
        }
    }

    @media (min-width: 800px) { 
        gap: 0.75rem;

        .motivationSectionText {
            padding: 0;
            gap: 1.5rem;    

            div {
                gap: 1rem;
            }

            h4{
                font-size: 2.5rem;
                line-height: 3.3rem;
            }
            h6{
                font-size: 1.5rem;
            }
            p{
                font-size: 1.125rem;
            }
        }
    }

    @media (min-width: 1180px) {
        padding: 4.5rem 1rem;

        .motivationSection {
            flex-direction: row;
            gap: 3rem;

            img{
                width: 610px;
                max-width: auto;
            }
        }
    }
`

const SponsorsSection = styled.section`
    
`

const PlansSection = styled.section`
    
`

const OurNumbersSection = styled.section`
    background: var(--background-neutrals-secondary, #333);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    padding: 2.25rem 1rem;
    gap: 1.5rem;
    
    .our-numbers-title{
        background: linear-gradient(90deg, var(--background-brand-primary, #9638FF) 0%, #5A2299 100%);
        display: flex;
        width: fit-content;
        padding: 0.75rem 1.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .our-numbers-icons{
        display: flex;
        padding: 0 0.625rem;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .icon-counters{
       display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: .5rem;
    }
    
    .icon-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1.5rem;

        p {
            color: var(--content-neutrals-primary, #FFF);
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            text-align: center;
        }

        h5 {
            font-size: 1.25rem;
        }

    }

    .our-numbers-contador {
        display: flex;
        gap: .3rem;
        align-items: baseline;
    }

    @media (min-width: 1100px) {
        padding: 4.5rem 3rem;

        .our-numbers-icons {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 1rem 0 3rem 0;
            gap: 2.5rem;
        }
        
        .icon-group {
            align-items: center; 
            text-align: center;
            padding: 0 1rem 0 1rem;
        }

        .icon-group p {
            max-width: 20rem;
        }

        .icon-counters{
            gap: .5rem;
            padding-top: 2.1rem;
            padding-bottom: 1rem;
        }

        h5 {
            font-size: 1.5rem;
            line-height: 1;
        }
        
        p {
            font-size: 1.25rem;
            line-height: 1;
        }
    }
`

const ExperienceSection = styled.section`

`