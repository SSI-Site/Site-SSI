import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Meta from '../src/infra/Meta';
import Image from 'next/image';

// images
import logoInstagram from '../public/images/partnerships/icons/logo_instagram.svg';
import logoLinkedin from '../public/images/partnerships/icons/logo_linkedin.svg';
import logoInPerson from '../public/images/partnerships/icons/logo_inPerson.svg';
import CountUp from 'react-countup';

// components


const partnerships = () => {
    <Meta title='Para Empresas | Semana de Sistemas de Informação'
        description=''
        keywords=''
    /> // TODO: preencher descrição e keywords

    return (
        <>
            {/* Seção incial da pagina onde tem uma frase de impacto e um botão para entrar em contato */}
            <LandingSection>
                <h1>Pagina em desenvolvimento</h1>
            </LandingSection>

            {/* Seção que explica o porquê ser um parceiro da SSI */}
            <MotivationSection>

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

`

const MotivationSection = styled.section`
    
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