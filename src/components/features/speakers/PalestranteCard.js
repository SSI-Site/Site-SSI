import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// IMAGES
import speakersImages from "../../../../data/speakers";
import ArrowUpIcon from "../../../../public/images/icons/arrow-up.svg";
import { InstagramLogo, LinkedInLogo } from "../../ui/SocialMediaOutlinedLogos";
import BackgroundPicture from "../../../../public/images/partnerships/photos/bg_desktop.jpg";

import BadgeLecture from "../schedule/BadgeLecture";
import formatActivityDateTime from "../../../../utils/formatActivityDateTime";
import { borderGradient } from "../../../../styles/global";
import Dots from "../../ui/Dots";

// Variável para controlar a exibição do badge de modo "Presencial"/"Online"
const exibirBadgePresencial = false; 

/**
 * Componente principal que exibe o card do palestrante.
 * 
 * @param {Object} palestrante - Objeto contendo os dados do palestrante (nome, descrição, redes sociais, etc).
 * @param {number} availableWidth - Largura disponível calculada dinamicamente para renderizar os pontinhos (Dots).
 */
const PalestranteCard = ({ palestrante, availableWidth }) => {
    // Estado simples para controlar se o card (acordeão) está aberto ou fechado
    const [open, setOpen] = useState(false);

    return (
        <PalestranteContainer>
            {/* 
              Cabeçalho do card: 
              Contém foto, nome e cargo. Ao clicar em qualquer lugar do cabeçalho, a visualização se expande.
            */}
            <PalestranteHeader onClick={() => setOpen(!open)} $active={open}>
                <PalestranteImageWrapper>
                    <Image 
                        src={speakersImages[palestrante.id.slice(0,3).toUpperCase()]} 
                        alt={`Foto de ${palestrante.name}`} 
                        width={80} 
                        height={80} 
                    />
                </PalestranteImageWrapper>
                
                <PalestranteInfo>
                    <PalestranteName $active={open}>
                        {palestrante.name}
                        {/* Ícone de seta que gira quando o card é aberto */}
                        <PalestranteArrowUp src={ArrowUpIcon} alt="Expandir ou retrair card" className="arrow" $active={open}/>   
                    </PalestranteName>
                </PalestranteInfo>

                <PalestranteOcuppation>
                    <PalestranteRole $active={open}>{palestrante.role}</PalestranteRole>
                </PalestranteOcuppation>
            </PalestranteHeader>

            <PalestranteWrapper $active={open}>
                {/* Corpo do card: contém pronomes, descrição, redes sociais e atividades relacionadas */}
                <PalestranteBody>
                    <PalestranteTopWrapperBody>
                        {/* Seção Esquerda: Pronomes */}
                        <PalestranteLeftBody>
                            {palestrante.pronouns && (
                                <PalestrantePronome>
                                    {palestrante.pronouns.toLowerCase()}
                                </PalestrantePronome>
                            )}
                        </PalestranteLeftBody>

                        {/* Seção Central: Minibio/Descrição */}
                        <PalestranteMiddleBody>
                            <PalestranteDescription>
                                {palestrante.description}
                            </PalestranteDescription>
                        </PalestranteMiddleBody>

                        {/* Seção Direita: Redes sociais do palestrante */}
                        <PalestranteRightBody>
                            {(palestrante.linkedin_link || palestrante.instagram_link) && (
                                <PalestranteSocialContainer>
                                    <PalestranteSocialHeader>
                                        Redes Sociais
                                    </PalestranteSocialHeader>
                                    <PalestranteSocialMedia>
                                        {palestrante.linkedin_link && (
                                            <PalestranteSocialMediaItem
                                                icon={<LinkedInLogo />}
                                                link={palestrante.linkedin_link}
                                                alt="LinkedIn"
                                            />
                                        )}
                                        {palestrante.instagram_link && (
                                            <PalestranteSocialMediaItem
                                                icon={<InstagramLogo />}
                                                link={palestrante.instagram_link}
                                                alt="Instagram"
                                            />
                                        )}
                                    </PalestranteSocialMedia>
                                </PalestranteSocialContainer>
                            )}
                        </PalestranteRightBody>
                    </PalestranteTopWrapperBody>

                    {/* Atividades (Palestras, Workshops, etc) vinculadas a este palestrante */}
                    <PalestranteLectureBody>
                        {palestrante.events && palestrante.events.map((event, index) => (
                            <PalestranteLecture key={index}>
                                <PalestranteLectureHeader>
                                    {formatActivityDateTime(event.start_time, event.end_time)}
                                </PalestranteLectureHeader>
                                
                                <PalestranteLectureTitle>
                                    {event.title}
                                </PalestranteLectureTitle>
                                
                                <PalestranteLectureBadge>
                                    <BadgeLecture
                                        text={event.activity_type === 'WS' ? "Workshop" : "Palestra"}
                                        themeIndex={event.activity_type === 'WS' ? 4 : 5}
                                    />
                                    {exibirBadgePresencial && (
                                        <BadgeLecture
                                            text={event.mode === 'ON' ? 'Online' : 'Presencial'}
                                            themeIndex={event.mode === 'ON' ? 9 : 1}
                                        />
                                    )}
                                </PalestranteLectureBadge>
                            </PalestranteLecture>
                        ))}
                    </PalestranteLectureBody>
                </PalestranteBody>
            </PalestranteWrapper>
            
            {/* Efeito decorativo visual da página */}
            <Dots dotSize={4} dotGap={10} availableWidth={availableWidth}/>
        </PalestranteContainer >
    )
}

/**
 * Componente utilitário interno para renderizar ícones de redes sociais.
 */
const PalestranteSocialMediaItem = ({ icon, link, alt }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer nofollow" aria-label={alt}>
            {icon}
        </a>
    )
}

export default PalestranteCard;

const PalestranteArrowUp = styled.img`
    width: 100%;
    max-width: 2rem;
    max-height: 2rem;
    cursor: pointer;
    transition: transform 300ms ease-in-out;
    transform: rotate(180deg);
    display: none;
    aspect-ratio: 1/1;

    ${props => props.$active && `
        display: initial;
        transform: rotate(360deg);
    `}

    @media (prefers-color-scheme: light) {
        filter: invert(1);

        ${props => props.$active && `
            filter: invert(0);
        `}
    }

    @media (max-width:1024px){
        display: initial;
    }

    @media (min-width: 1024px){
        max-width: 2.5rem;
        max-height: 2.5rem;
    }
`;

const PalestranteContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;

    // Cores do gradiente das bolinhas (Tem a mesma cor no dark e light mode)
    .gradient-stop-1 {
        stop-color: #666666;
    }

    .gradient-stop-2 {
        stop-color: #666666;
    }
`;

const PalestranteInfo = styled.div`
    grid-area: info;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100%;
    align-self: stretch;
    justify-content: space-between;
    z-index: 5;

    @media (min-width:801px) {
        flex-direction: row;
        align-items: flex-end;
    }
`;

const PalestranteHeader = styled.div`
    display: grid;
    grid-template-areas: 
        "image info"
        "image occupation";
    grid-template-columns: min-content auto;
    column-gap: 1rem;
    align-items: flex-start;
    padding: 1rem 0.5rem 1rem 0.625rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    flex-wrap: nowrap;
    z-index: 5;
    position: relative;

    // Background do card de palestrante (foto roxa de fundo), mostrando quando o card está aberto
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        /* Recomenda-se pré-otimizar essa imagem de background para evitar lentidão */
        background-image: url(${BackgroundPicture.src || BackgroundPicture});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(0.8px) saturate(0.8);
        opacity: ${props => props.$active ? 0.8 : 0};
        transition: opacity 0.3s ease-in-out;
        z-index: 1;
        pointer-events: none;
    }

    &:hover{
        background-color: var(--background-neutrals-secondary);

        .arrow {
            display: initial;
        }
    }

    @media (min-width:801px) {
        grid-template-areas: "image info occupation";
        grid-template-columns: min-content auto 20%;
    }

    @media (min-width:1024px) {
        padding: 1.5rem;
        gap: 1.5rem;
    }

    @media (min-width:1200px) {
        grid-template-areas: "image info occupation";
        grid-template-columns: min-content auto 25%;
    }
`;

const PalestranteOcuppation = styled.div`
    grid-area: occupation;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    align-self: stretch;
    justify-content: space-between;
    z-index: 5;

    @media (min-width:801px) {
        flex-direction: row;
        align-items: flex-end;
    }
`

const PalestranteRole = styled.span`
    margin-top: 0.5rem;
    color: var(--brand-primary-light);
    font: 400 1rem/1.25rem 'AT Aero';


    @media (prefers-color-scheme: light) {
        color: var(--brand-purple-200);

        ${props => props.$active && `
            color: var(--content-neutrals-fixed-white);
        `}
    }

    ${props => props.$active && `
        color: var(--content-neutrals-fixed-white);
    `}

    @media (min-width:1024px) {
        display: flex;
        align-items: flex-end;
        font: 400 1.125rem/1.5rem 'AT Aero';
    }
`;

const PalestranteImageWrapper = styled.div`
    grid-area: image;
    width: 5rem;
    height: 5rem;
    display: flex;
    z-index: 5;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 801px){
        width: 6.5rem;
        height: 6.5rem;
    }

    @media (min-width: 1024px){
        width: 8rem;
        height: 8rem;
    }
`

const PalestranteName = styled.h3`
    width: 100%;
    display: flex;
    font: 700 1.5rem/1.75rem 'AT Aero Bold';

    ${props => props.$active && `
        color: var(--content-neutrals-fixed-white);
    `}

    @media (min-width: 801px) {
        font: 700 2rem/2.25rem 'AT Aero Bold';
        width: auto;
        align-items: flex-end;
    }

    @media (min-width: 1024px) {
        font: 700 2.5rem/3rem 'AT Aero Bold';
    }
`;

/*
  ANIMAÇÃO OTIMIZADA COM CSS GRID:
  A transição de grid-template-rows 0fr -> 1fr cria o efeito de acordeão
  sem a necessidade de medir o DOM com JavaScript, poupando a linha de execução.
*/
const PalestranteWrapper = styled.div`
    display: grid;
    grid-template-rows: ${props => props.$active ? '1fr' : '0fr'};
    transition: grid-template-rows 0.3s ease-in-out;

    /* 
      A div filha direta (PalestranteBody) precisa ter overflow hidden para 
      garantir que seu conteúdo seja cortado durante a animação visual de colapso.
    */
    > div {
        overflow: hidden;
    }
`;

const PalestranteBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
`;

const PalestranteTopWrapperBody = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    padding-block: 1.5rem;
    flex: 1;

    @media (min-width:1024px) {
        flex-direction: row;
        justify-content: flex-start;
        padding: 1.5rem;
    }
`;

const PalestranteLeftBody = styled.div` 
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px){
        min-width: 8rem;
        width: 8rem;
    }
`;

const PalestranteMiddleBody = styled.div`
    flex: 1;
`;

const PalestranteRightBody = styled.div`
    @media (min-width: 1024px){
        width: 20%;
    }

    @media (min-width: 1200px){
        width: 25%;
    }
`;

const PalestrantePronome = styled.span`
    border: 1px solid var(--outline-neutrals-primary);
    width: fit-content;
    padding: 0.15rem 0.375rem;
    font: 400 0.8rem/1.125rem 'AT Aero';
    border-radius: 0.5rem;
    background: var(--content-neutrals-primary);
    color: var(--content-neutrals-inverse);

    @media (min-width: 1024px){
        font: 400 0.875rem/1.25rem 'AT Aero';
    }
`;

const PalestranteDescription = styled.p`
    font-weight: 400;
    max-width: 45rem;
`;

const PalestranteSocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PalestranteSocialHeader = styled.p`
    font: 400 1rem/1.5rem 'AT Aero';
`;

const PalestranteSocialMedia = styled.div`
    display: flex;
    gap: 1rem;

    a {
        line-height: 0;
    }
`;

const PalestranteLectureBody = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 1024px){
        padding-left: 11rem;
        max-width: calc(75% - 3rem);
    }
`;

const PalestranteLecture = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    flex: 1 0 0;
    border-radius: 1.5rem;
    ${borderGradient('1px', '--border-gradient-secondary-dark', '90deg')};
    margin-bottom: 1.5rem;

    @media (prefers-color-scheme: light) {
        ${borderGradient('1px', '--border-gradient-secondary-light', '90deg')};
    }
`;

const PalestranteLectureHeader = styled.h5`
    font: 400 1rem/1.5rem 'AT Aero';

    @media (min-width: 801px) {
        font: 400 1rem/1.75rem 'AT Aero';
    }

    @media (min-width: 1024px) {
        font: 400 1.125rem/1.75rem 'AT Aero';
    }
`;

const PalestranteLectureTitle = styled.h4`
    font: 700 1.125rem/1.5rem 'AT Aero Bold';

    @media (min-width: 801px) {
        font: 700 1.25rem/1.75rem 'AT Aero Bold';
    }

    @media (min-width: 1024px) {
        font: 700 1.75rem/2.25rem 'AT Aero Bold';
    }

    @media (min-width: 1200px) {
        font: 700 2.25rem/2.5rem 'AT Aero Bold';
    }
`;

const PalestranteLectureBadge = styled.span`
    display: flex;
    width: fit-content;
    gap: 1rem;
`;