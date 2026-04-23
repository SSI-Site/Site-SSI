import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Meta from '../src/infra/Meta';

// images

// components


const forCompanies = () => {
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
                {/* TODO: Aplicar efeito de numeros crecendo igual na home esse efeito já existe */}
            </OurNumbersSection>

            {/* Seção que descreve como acontece a SSI, dias, periodos, temas abordados, etc */}
            <ExperienceSection>
            
            </ExperienceSection>
        </>
    )
}

export default forCompanies;

const LandingSection = styled.section`

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