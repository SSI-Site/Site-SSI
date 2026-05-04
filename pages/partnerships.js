import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Meta from '../src/infra/Meta';
import Image from 'next/image';

// images
import bgMobile from '../public/images/partnerships/photos/bg_mobile.png';
import bgDesktop from '../public/images/partnerships/photos/bg_desktop.png';
import logoInstagram from '../public/images/partnerships/icons/logo_instagram.svg';
import logoLinkedin from '../public/images/partnerships/icons/logo_linkedin.svg';
import logoInPerson from '../public/images/partnerships/icons/logo_inPerson.svg';
import CountUp from 'react-countup';

import logoPartner from '../public/images/partnerships/icons/partner_icon.svg';
import logoSupporter from '../public/images/partnerships/icons/supporter_icon.svg';

import detailBottonMobile from '../public/images/partnerships/details/detail_botton_mobile.svg';
import detailUpMobile from '../public/images/partnerships/details/detail_up_mobile.svg';

import detailBottonDesktop from '../public/images/partnerships/details/detail_botton_desktop.svg';
import detailUpDesktop from '../public/images/partnerships/details/detail_up_desktop.svg';

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

            </MotivationSection>

            {/* Seção onde a logo de todos os parcerios rodam em um carrossel */}
            <SponsorsSection>
                {/* TODO: Criar um componente de carrossel com as logos dos patrocinadores */}
            </SponsorsSection>

            {/* Seção onde tem os planos de patrocínio e o que cada um oferece, com um botões para entrar em contato */}
            <PlansSection>
                <div className='parceiro'>
                    <div className='imgMobile'> 
                        <Image
                            src={detailUpMobile}
                            alt='detalhes'
                            width={196.65}
                            height={55.74}
                        />
                    </div>
                    <div className='imgDesktop'> 
                        <Image
                            src={detailUpDesktop}
                            alt='detalhes'
                            width={248}
                            height={352}
                        />
                    </div>

                    <div className='cardParceiro'>
                        <div className ='title'>
                            <h4>Parceiro</h4>
                            <Image
                                src={logoPartner}
                                alt='logo'
                                width={19.21}
                                height={21.33}
                                className='logoParceiro'
                            />
                        </div>
                        <div className='info-text'>
                            <p>
                                Como parceiro, aproximamos a sua empresa dos alunos e conectamos talentos, 
                                promovendo a divulgação de processos seletivos, programas de estágio e trainee e 
                                fortalecemos a imagem da marca perante os universitários. Nossos meios incluem:
                            </p>
                            <ul>
                                <li>Mailing aos alunos;</li>
                                <li>Posts e vídeos curtos em nossas redes sociais;</li>
                                <li>Divulgação em panfletos, cartazes, banners e no nosso site;</li>
                                <li>Atividade da empresa no evento;</li>
                                <li>Palestras e workshops com temática e conteúdo a critério da empresa;</li>
                                <li>Fortalecimento de branding via vídeos institucionais, sorteios e brindes.</li>
                            </ul>
                            <p>
                                Construíremos um relacionamento de longo prazo fortalecendo a presença da empresa 
                                na Universidade e a imagem da marca entre o corpo discente.
                            </p>
                        </div>
                        
                        <a href="/404">
                            <Button>
                                <b>Confira os planos</b>
                            </Button>
                        </a>
                    </div>
                </div>

                <div className='apoiador'>
                    <div className='imgMobileApoiador'>
                        <Image
                            src={detailBottonMobile}
                            alt='detalhes'
                            width={156.39}
                            height={55.74}
                        />
                    </div>
                    <div className='imgDesktopApoiador'>
                        <Image
                            src={detailBottonDesktop}
                            alt='detalhes'
                            width={248}
                            height={248}
                        />
                    </div>
                    <div className='cardApoiador'>
                        <div className ='title'>
                            <Image
                                src={logoSupporter}
                                alt='logo'
                                width={19.21}
                                height={21.33}
                                className = 'logoApoiador'
                            />
                            <h4>Apoiador</h4>
                        </div>
                        <div className='info-text'>
                            <p>
                                Como apoiador, promovemos sua marca ao nosso público e fornecemos o espaço para atividades da empresa no evento, 
                                podendo incluir palestras, workshops, sorteios, distribuição de brindes e material promocional, 
                                entre outros sem qualquer suporte monetário.
                            </p>
                           
                            <p>
                                Converse conosco e discuta os termos de apoio, fornecemos propostas personalizadas em acordo com o apoiador. 
                                Garantimos o alcance e fortalecimento da marca.   
                            </p>
                        </div>
                        <a href="/404">
                            <Button>
                                <b>Agende uma conversa</b>
                            </Button>
                        </a>
                    </div>
                </div>
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
    
`

const SponsorsSection = styled.section`
    
`

const PlansSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem 1rem;
    align-item: center;
    align-self: stretch;
    justify-content: center;

    .parceiro{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .imgDesktop{
            display: none;
        }

        .cardParceiro {
            display: flex;
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            align-self: stretch;

            border-radius: 1.5rem;
            border: 1px solid var(--outline-neutrals-secondary, #999999);
            background: var(--background-neutrals-primary, #1A1A1A);

            ul {
                list-style-type: square;
                padding-left: 1.2rem; 
            }

            .title {
                display: flex;
                flex-direction: row;
                gap: 0.75rem;
                align-items: center;
            }

            .info-text{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                p, ul {
                    color: var(--content-neutrals-primary, #FFF);
                    font-size: var(--Typograph-Paragraph-Medium-size, 0.875rem);
                    font-style: normal;
                    font-weight: 400;
                    line-height: var(--Typograph-Paragraph-Medium-height, 1.5rem);
                }

            }

        }    
    }

    .apoiador {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.5rem;

        .imgDesktopApoiador {
            display: none;
        }

        .cardApoiador{
            display: flex;
            padding: 1rem;
            flex-direction: column;
            align-items: flex-end;
            gap: 1rem;
            align-self: stretch;

            border-radius: 1.5rem;
            border: 1px solid var(--outline-neutrals-secondary, #999);
            background: var(--background-neutrals-primary, #1A1A1A);

            .title {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.75rem;
            }

            .info-text {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                p {
                    color: var(--content-neutrals-primary, #FFF);
                    text-align: right;
                    font-size: var(--Typograph-Paragraph-Medium-size, 0.875rem);
                    font-style: normal;
                    font-weight: 400;
                    line-height: var(--Typograph-Paragraph-Medium-height, 1.5rem); /* 171.429% */
                }

            }
        }
    }

    @media(min-width: 1100px) {
        padding: 4.5rem 18.5rem;
        gap: 1rem;

        .parceiro{
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: 1.5rem;

            .imgMobile {
                display: none;
            }

            .imgDesktop{
                display: block;
            }

            .title{
                .logoParceiro{
                    width: 2.43569rem;
                    height: 2.75rem;
                }
            }

            .cardParceiro{
                padding: 2.25rem;
                width: 49.25rem;
                border-radius: 3rem;
                gap: 1rem;

                .info-text {
                    p, ul {
                        font-size: 1rem;
                    }
                }
            }


        }

        .apoiador {
            flex-direction: row;
            justify-content: space-between;
            padding: 1.5rem;

            .cardApoiador{
                padding: 2.25rem;
                width: 49.25rem;
                border-radius: 3rem;
                gap: 1rem;

                .title {
                    .logoApoiador{
                        width: 2.43569rem;
                        height: 2.75rem;
                    }
                }

                .info-text {
                    p, ul {
                        font-size: 1rem;
                    }
                }
            }

            .imgDesktopApoiador{
                display: block;
            }

            .imgMobileApoiador {
                display: none;
            }
        }
    }

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