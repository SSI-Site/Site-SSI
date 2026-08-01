import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import PalestranteBolinhas from "./SpeakerDots";

//IMAGES
import speakersImages from "../../../../data/speakers";
import ArrowUpIcon from "../../../../public/images/icons/arrow-up.svg";
import { InstagramLogo, LinkedInLogo } from "../../ui/SocialMediaOutlinedLogos";
import BackgroundPicture from "../../../../public/images/partnerships/photos/bg_desktop.png";
import DividerMobile from "../../../../public/images/ui/divider-speakers-mobile.svg";
import DividerDesktop from "../../../../public/images/ui/divider-speakers-desktop.svg";

// Componente principal que exibe o card do palestrante
const PalestranteCard = ({palestrante}) => {
    // Estado para controlar se o card está aberto ou fechado (expandido)
    const [open, setOpen] = useState(false);
    // Estado para armazenar a altura do corpo do card (usado para animação)
    const [bodyHeight, setBodyHeight] = useState(0);
    // Referência ao elemento do corpo do card
    const bodyRef = useRef(null);

    // Função para atualizar a altura do corpo do card
    const handleBodyHeight = (e) => {
        if (!e) return;
        const { height } = e.getBoundingClientRect();
        setBodyHeight(height);
    }

    // Atualiza a altura do corpo do card ao redimensionar a janela
    useEffect(() => {
        const onResize = () => {
            if (bodyRef.current) {
                handleBodyHeight(bodyRef.current);
            }
        }

        window.addEventListener("resize", onResize);

        // Remove o event listener ao desmontar o componente
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, [bodyRef])

    // Atualiza a altura do corpo do card ao montar o componente ou quando bodyRef mudar
    useLayoutEffect(() => {
        if (bodyRef.current) {
            handleBodyHeight(bodyRef.current);
        }
    }, [bodyRef]);
    
    return (
        <PalestranteContainer>
            {/* Cabeçalho do card, ao clicar alterna entre aberto e fechado */}
            <PalestranteHeader onClick={() => setOpen(!open)} $active = {open}>
                <PalestranteImageWrapper>
                    <Image src={speakersImages[palestrante.id.slice(0,3).toUpperCase()]} alt={palestrante.name} width={80} height={80} />
                </PalestranteImageWrapper>
                <PalestranteInfo>
                    <PalestranteName $active = {open}>
                        {palestrante.name}
                        <PalestranteArrowUp src={ArrowUpIcon} alt="Fechar" className="arrow" $active = {open}/>   
                    </PalestranteName>
                </PalestranteInfo>
                <PalestranteOcuppation>
                    <PalestranteRole $active={open}>{palestrante.role}</PalestranteRole>
                </PalestranteOcuppation>
            </PalestranteHeader>
            {/* Wrapper do corpo do card, controla a altura para animação de abrir/fechar */}
            <PalestranteWrapper $active={open} $height={bodyHeight}>
                {/* Corpo do card, contém informações detalhadas */}
                <PalestranteBody ref={bodyRef}>
                    <PalestranteLeftBody>
                        <PalestrantePronome>
                            {
                                palestrante.pronouns ? palestrante.pronouns.toLowerCase() : palestrante.pronouns
                            }
                        </PalestrantePronome>
                    </PalestranteLeftBody>
                    <PalestranteMiddleBody>
                        <PalestranteDescription>
                            {
                                palestrante.description
                            }
                        </PalestranteDescription>
                    </PalestranteMiddleBody>
                    <PalestranteRightBody>
                        {/* Seção de redes sociais */}
                        <PalestranteSocialContainer>
                            <PalestranteSocialHeader>
                                Redes Sociais
                            </PalestranteSocialHeader>
                            <PalestranteSocialMedia>
                                {
                                    palestrante.linkedin_link && (
                                        <PalestranteSocialMediaItem
                                            icon={
                                                <LinkedInLogo />
                                            }
                                            link={palestrante.linkedin_link}
                                            alt="LinkedIn"
                                        />
                                    )
                                }

                                {
                                    palestrante.instagram_link && (
                                        <PalestranteSocialMediaItem
                                            icon={
                                                <InstagramLogo />
                                            }
                                            link={palestrante.instagram_link}
                                            alt="Instagram"
                                        />
                                    )
                                }
                            </PalestranteSocialMedia>
                        </PalestranteSocialContainer>
                    </PalestranteRightBody>
                </PalestranteBody>
                
            </PalestranteWrapper>
            <PalestranteBolinhas />
        </PalestranteContainer >
    )
}

// Componente para exibir um ícone de rede social com link
const PalestranteSocialMediaItem = ({ icon, link, alt }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
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
    transition: all 300ms ease-in-out;
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

    @media screen and (min-width: 801px){
        /* max-width: fit-content */
    }

    @media screen and (max-width:1024px){
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
    ${props => props.$active && `
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url(${BackgroundPicture});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            filter: blur(0.8px) saturate(0.8);
            opacity: 0.8;
            z-index: 1;
            
            @media (prefers-color-scheme: light) {
                opacity: 0.8;
            }
        }
    `}

    &:hover{
        background-color: var(--background-neutrals-secondary);

        .arrow {
            display: initial;
        }
    }

    @media (min-width:801px) {
        grid-template-areas: "image info occupation";
        grid-template-columns: min-content auto 25%;
    }

    @media (min-width:1024px) {
        padding: 1.5rem;
        gap: 1.5rem;
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

    @media (min-width: 801px) {
        
    }

    @media (min-width:1024px) {
        display: flex;
        align-items: flex-end;
        font: 400 1.125rem/1.5rem 'AT Aero';
    }
`;

const PalestranteImageWrapper = styled.div`
    grid-area: image;
    width: 100%;
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

const PalestranteWrapper = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    will-change: height;
    height: 0px;

    ${props => props.$active && `
        height: ${props.$height}px;
    `}
`;

const PalestranteBody = styled.div`
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