import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Meta from '../src/infra/Meta';

// images
import bgMobile from '../public/images/partnerships/photos/bg_mobile.png'
import bgDesktop from '../public/images/partnerships/photos/bg_desktop.png'
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
            
            </PlansSection>

            {/* Seção com os numeros da última edição, como impacto nas redes sociais, número de participantes, etc */}
            <OurNumbersSection>
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
    
`

const OurNumbersSection = styled.section`
    
`

const ExperienceSection = styled.section`
    
`