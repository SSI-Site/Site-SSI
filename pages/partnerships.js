import { useState, useEffect } from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import Meta from '../src/infra/seo/Meta';
import Image from 'next/image';
import CountUp from 'react-countup';

// images
import bgMobile from '../public/images/partnerships/photos/bg_mobile.png';
import bgDesktop from '../public/images/partnerships/photos/bg_desktop.png';
import imgMotivation from '../public/images/partnerships/photos/motivation.png';
import imgPhotosExperience from '../public/images/partnerships/photos/experience.png';
import imgGroupExperience from '../public/images/partnerships/photos/experience2.png';

// dark mode: icons
import logoInstagram from '../public/images/partnerships/icons/logo_instagram_dark.svg';
import logoLinkedin from '../public/images/partnerships/icons/logo_linkedin_dark.svg';
import logoInPerson from '../public/images/partnerships/icons/logo_inPerson_dark.svg';
import logoPartner from '../public/images/partnerships/icons/partner_icon_dark.svg';
import logoSupporter from '../public/images/partnerships/icons/supporter_icon_dark.svg';

// dark mode: details
import detailBottonMobile from '../public/images/partnerships/details/detail_botton_mobile_dark.svg';
import detailUpMobile from '../public/images/partnerships/details/detail_up_mobile_dark.svg';
import detailBottonDesktop from '../public/images/partnerships/details/detail_botton_desktop_dark.svg';
import detailUpDesktop from '../public/images/partnerships/details/detail_up_desktop_dark.svg';

// light mode: icons
import logoInstagramLight from '../public/images/partnerships/icons/logo_instagram_light.svg';
import logoLinkedinLight from '../public/images/partnerships/icons/logo_linkedin_light.svg';
import logoInPersonLight from '../public/images/partnerships/icons/logo_inPerson_light.svg';
import logoPartnerLight from '../public/images/partnerships/icons/partner_icon_light.svg';
import logoSupporterLight from '../public/images/partnerships/icons/supporter_icon_light.svg';

//light mode: details
import detailBottonMobileLight from '../public/images/partnerships/details/detail_botton_mobile_light.svg';
import detailUpMobileLight from '../public/images/partnerships/details/detail_up_mobile_light.svg';
import detailBottonDesktopLight from '../public/images/partnerships/details/detail_botton_desktop_light.svg';
import detailUpDesktopLight from '../public/images/partnerships/details/detail_up_desktop_light.svg';

// components
import Button from '../src/components/ui/Button';
import PartnerCarousel from '../src/components/features/partners/PartnerCarousel';

// Data
import { socials } from '../data/socials';



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
                    <a href={socials.parcerias.landing} target="_blank" rel="noopener noreferrer">
                        <Button>
                            <strong>Quero marcar presença no evento</strong>
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
                <section className='partnerCarousel'>
                    {/* Uso do componente PartnerCarousel */}
                    {/* <PartnerCarousel /> */}
                    <h6 style={{textAlign: 'center'}}>Em breve você poderá conferir nossos apoiadores e parceiros aqui!</h6>
                </section>
            </SponsorsSection>

            {/* Seção onde tem os planos de patrocínio e o que cada um oferece, com um botões para entrar em contato */}
            <PlansSection>
                <div className='parceiro'>
                
                    <AdaptiveImageWrapper>
                        <div className='imgMobile'>
                            <Image
                                src={detailUpMobile}
                                alt='detalhes'
                                className='show-dark'
                                width={197}
                                height={56}
                            />
                            <Image
                                src={detailUpMobileLight}
                                alt='detalhes'
                                className='show-light'
                                width={197}
                                height={56}
                            />
                        </div>

                        <div className='imgDesktop'> 
                            <Image
                                src={detailUpDesktop}
                                alt='detalhes'
                                className='show-dark'
                                width={248}
                                height={352}
                            />
                            <Image
                                src={detailUpDesktopLight}
                                alt='detalhes'
                                className='show-light'
                                width={248}
                                height={352}
                            />
                        </div>
                    </AdaptiveImageWrapper>

                    <div className='cardParceiro'>
                        <div className ='title'>
                            <h4>Parceiro</h4>
                            <AdaptiveImageWrapper>
                                <Image
                                    src={logoPartner}
                                    alt='logo'
                                    width={19}
                                    height={21}
                                    className='logoParceiro show-dark'
                                />
                                <Image
                                    src={logoPartnerLight}
                                    alt='logo'
                                    width={19}
                                    height={21}
                                    className='logoParceiro show-light'
                                />
                            </AdaptiveImageWrapper>
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
                        
                        <a href={socials.parcerias.planos} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <strong>Confira os planos</strong>
                            </Button>
                        </a>
                    </div>
                </div>

                <div className='apoiador'>
                    <AdaptiveImageWrapper>
                        <div className='imgMobileApoiador'>
                            <Image
                                src={detailBottonMobile}
                                alt='detalhes'
                                className='show-dark'
                                width={157}
                                height={56}
                            />
                            <Image
                                src={detailBottonMobileLight}
                                alt='detalhes'
                                className='show-light'
                                width={157}
                                height={56}
                            />
                        </div>
                        <div className='imgDesktopApoiador'>
                            <Image
                                src={detailBottonDesktop}
                                alt='detalhes'
                                className='show-dark'
                                width={248}
                                height={248}
                            />
                            <Image
                                src={detailBottonDesktopLight}
                                alt='detalhes'
                                className='show-light'
                                width={248}
                                height={248}
                            />
                        </div>
                    </AdaptiveImageWrapper>

                    <div className='cardApoiador'>
                        <div className ='title'>
                            <AdaptiveImageWrapper>
                                <Image
                                    src={logoSupporter}
                                    alt='logo'
                                    width={19}
                                    height={21}
                                    className = 'logoApoiador show-dark'
                                />
                                <Image
                                    src={logoSupporterLight}
                                    alt='logo'
                                    width={19}
                                    height={21}
                                    className = 'logoApoiador show-light'
                                />
                            </AdaptiveImageWrapper>
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
                        <a href={socials.parcerias.apoio} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <strong>Agende uma conversa</strong>
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
                            <source srcSet={logoInstagramLight} media='(prefers-color-scheme: light)' />
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
                            <source srcSet={logoLinkedinLight} media='(prefers-color-scheme: light)' />
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
                            <source srcSet={logoInPersonLight} media='(prefers-color-scheme: light)' />
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
                <div className='experienceSection'>
                    <div className='experiencePanel experienceTitlePhotosPanel'>
                        <div className='experienceTitle'>
                            <h3>Experiência SSI</h3>
                        </div>
                        <Image
                            src={imgPhotosExperience}
                            alt='Coleção de três imagens do evento'
                            width={248}
                            height={323}
                            className='experiencePhotos'
                        />
                    </div>
                    <div className='experiencePanel experienceDescriptionPanel'>
                        <div className='experienceDescriptionTexts'>
                            <p>São <strong>5 dias</strong> de programação intensa, com atividades distribuídas pela manhã, tarde e noite, de segunda a sexta-feira.</p>
                            <p>A grade aborda temas atuais de tecnologia e mercado, como <strong>IA, Dados, Cybersegurança, Criptoativos, Computação Quântica, Empreendedorismo, Processos Seletivos, Game Dev</strong>, entre outros assuntos relevantes para a formação dos alunos. O evento conta com palestras, workshops práticos, painéis de carreira e momentos de interação com empresas, criando um ambiente dinâmico de aprendizado e networking.</p>
                            <p>Durante a semana da SSI, as aulas da graduação em Sistemas de Informação são suspensas, direcionando <strong>integralmente a atenção dos estudantes para o evento!</strong></p>
                        </div>
                        <Image
                            src={imgGroupExperience}
                            alt='Fotografia em grupo ao final de uma palestra'
                            width={280}
                            height={157.5}
                            className='experienceGroupPhoto'
                        />
                        <p className='experienceInfo'>A Semana de Sistemas de Informação 2026 ocorrerá <strong>entre os dias 24 e 28 de agosto</strong>!!!</p>
                        <a href={socials.parcerias.experiencia} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <strong>Quero marcar presença no evento</strong>
                            </Button>
                        </a>
                    </div>
                </div>
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

    color: var(--content-neutrals-fixed-white);
    
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
                background: var(--brand-purple-900);
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
    display: flex;
    padding: 1.5rem 0rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    border-top: 1px solid var(--outline-neutrals-secondary, #999);
    border-bottom: 1px solid var(--outline-neutrals-secondary, #999);

    .partnerCarousel {
        padding: 0;
    }
    
    @media(min-width: 1000px) {
        padding: 3rem 0rem;
    }
    
`

const PlansSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.25rem 1rem;
    align-items: center;
    align-self: stretch;
    justify-content: center;

    .parceiro{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;


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
                gap: 0.5rem;

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
        padding: 4.5rem 0;
        gap: 1rem;

        .parceiro{
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: 1.5rem;

            .cardParceiro{
                padding: 2.25rem;
                width: 49.25rem;
                border-radius: 3rem;
                gap: 1rem;

                .title{
                    gap: 1.5rem;
                }

                .info-text {
                    gap: 1rem;
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
                    gap: 1.5rem;
                }

                .info-text {
                    gap: 1rem;
                    p, ul {
                        font-size: 1rem;
                    }
                }
            }
        }
    }

`

/* Esse wrapper serve para selecionar as Image que aparecerá para o usuário, dependendo do tema*/
const AdaptiveImageWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .show-light {
        display: block; /* Padrão: Modo Claro exibe Light */
    }
    .show-dark {
        display: none;  /* Padrão: Modo Claro esconde Dark */
    }


    /* Media responsável pela escolha de cores */
    @media (prefers-color-scheme: dark) {
        .show-light {
            display: none;  /* Modo Escuro esconde Light */
        }
        .show-dark {
            display: block; /* Modo Escuro exibe Dark */
        }
    }

    /* Esse wrapper serve para selecionar as Image que aparecerá para o usuário*/
    
    .imgMobile {
        display: block;
    }
    
    .imgDesktop {
        display: none;
        
    }
    
    .imgDesktopApoiador{
        display: none;
    }
    
    .imgMobileApoiador {
        display: block;
    }

    /* Media responsavel por alterar as imagens visíveis*/ 
    @media (min-width: 1100px) {
        .imgMobile {
            display: none;
        }
            
        .imgDesktop {
            display: block;
        }

        .imgDesktopApoiador{
            display: block;
        }

        .imgMobileApoiador {
            display: none;
        }

        /* Ajuste de tamanho das logos para telas maiores */
        
        .logoApoiador{
            width: 2.43569rem;
            height: 2.75rem;
        }
            
        .logoParceiro{
            width: 2.5rem;
            height: 2.75rem;
        }
    }
`;

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
        color: var(--content-neutrals-fixed-white);
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
    p {
        font-size: 1rem;
        font-weight: 400;
        text-align: left;
    }

    .experienceSection {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .experiencePanel {
        display: flex;
        padding: 2.25rem 0;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .experienceTitle {
        color: var(--content-neutrals-fixed-white);
        display: flex;
        padding: 0.75rem 1.5rem;
        justify-content: center;
        align-items: center;
        background: linear-gradient(90deg, var(--background-brand-primary, #9638FF) 0%, #5A2299 100%);
    }

    .experienceDescriptionTexts {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .experienceInfo {
        text-align: center;
    }

    .experiencePhotos {
        width: 100%;
        max-width: 25rem;
        height: auto;
    }

    .experienceGroupPhoto {
        width: 100%;
        max-width: 35rem;
        height: auto;
        border-radius: 1.5rem;
    }

    @media (min-width: 800px) {
        .experiencePhotos {
            max-width: 31rem;
        }
    }

    @media (min-width: 1100px) {
        .experienceSection {
            flex-direction: row;
            align-items: flex-start;
            gap: 3rem;
        }

        .experiencePanel {
            padding: 4.5rem 0;
            gap: 3rem;
        }

        .experienceTitlePhotosPanel {
            align-items: flex-start;
            width: fit-content;
            max-width: fit-content;
            flex: 0 0 auto;
            align-self: flex-start;
        }
    }
`
