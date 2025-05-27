import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArrowUpIcon from "../../public/images/icons/arrow-up.svg";
import { InstagramLogo, LinkedInLogo } from "./SocialMediaLogos";

// Componente principal que exibe o card do palestrante
const PalestranteCard = ({ palestrante = {
    nomePalestrante: "Nome do Palestrante",
    fotoPalestrante: "https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b",
    pronomePalestrante: "ele/dele",
    cargoPalestrante: "Cargo do Palestrante",
    descricaoPalestrante: "Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis.",
    redesSociais: {
        linkedin: "https://www.linkedin.com/in/username",
        instagram: "https://www.instagram.com/username"
    },
    palestras: [
        {
            dataPalestra: "Segunda-Feira, 11 de Agosto, 9:40-10:40h",
            tituloPalestra: "Título da palestra gigante que pega duas linhas ou mais",
            metadata: {
                presencial: true
            }
        }
    ]
} }) => {
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
            <PalestranteHeader onClick={() => setOpen(!open)}>
                <PalestranteImageWrapper>
                    <PalestranteImage src={palestrante.fotoPalestrante} alt={palestrante.nomePalestrante} />
                </PalestranteImageWrapper>
                <PalestranteInfo>
                    <PalestranteName>
                        {palestrante.nomePalestrante}
                        {
                            open && (
                                <PalestranteArrowUp src={ArrowUpIcon} alt="Fechar" />
                            )
                        }
                    </PalestranteName>
                    <PalestranteRole>{palestrante.cargoPalestrante}</PalestranteRole>
                </PalestranteInfo>
            </PalestranteHeader>
            {/* Wrapper do corpo do card, controla a altura para animação de abrir/fechar */}
            <PalestranteWrapper style={{
                height: open ? `${bodyHeight}px` : "0px",
            }}>
                {/* Corpo do card, contém informações detalhadas */}
                <PalestranteBody ref={bodyRef}>
                    <PalestranteLeftBody>
                        <PalestrantePronome>
                            {
                                palestrante.pronomePalestrante
                            }
                        </PalestrantePronome>
                    </PalestranteLeftBody>
                    <PalestranteMiddleBody>
                        <PalestranteDescription>
                            {
                                palestrante.descricaoPalestrante
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
                                    palestrante.redesSociais.linkedin && (
                                        <PalestranteSocialMediaItem
                                            icon={
                                                <LinkedInLogo />
                                            }
                                            link={palestrante.redesSociais.linkedin}
                                            alt="LinkedIn"
                                        />
                                    )
                                }

                                {
                                    palestrante.redesSociais.instagram && (
                                        <PalestranteSocialMediaItem
                                            icon={
                                                <InstagramLogo />
                                            }
                                            link={palestrante.redesSociais.instagram}
                                            alt="Instagram"
                                        />
                                    )
                                }
                            </PalestranteSocialMedia>
                        </PalestranteSocialContainer>
                    </PalestranteRightBody>
                </PalestranteBody>
                
            </PalestranteWrapper>

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

// Componente para exibir informações de uma palestra
const Palestra = ({ dataPalestra, tituloPalestra, metadata }) => {
    return (
        <PalestraContainer>
            <PalestraData>
                {dataPalestra}
            </PalestraData>

            <PalestraTitulo>
                {tituloPalestra}
            </PalestraTitulo>

            <PalestraTags>
                {
                    metadata.presencial && (
                        <PalestraTag>
                            Presencial
                        </PalestraTag>
                    )
                }
            </PalestraTags>
        </PalestraContainer>
    )
}

const PalestranteArrowUp = styled.img`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`;

const PalestraTags = styled.div`
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
`;

const PalestraTag = styled.span`
    font-weight: 400;
    color: var(--color-neutral-50);
    background: var(--background-badge-brand-purple-500, #9638FF);
    padding: 0.25rem 0.5rem;
    // ALREADY EXISTS
`;

const PalestrantePalestras = styled.div`
    display: flex;
    flex-direction: column;
`;

export default PalestranteCard;

const PalestraContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border: 1px solid var(--outline-neutrals-primary, #808080);
`;

const PalestraData = styled.p`
    font-weight: 500;
`;

const PalestraTitulo = styled.h5`
    font-weight: 500;
    margin-top: 0;
`;

const PalestranteContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border-bottom: 1px solid var(--color-neutral-secondary);
    position: relative;
`;

const PalestranteInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width:1024px) {
        flex-direction: row;
    }
`;

const PalestranteHeader = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    padding-block: 1rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: #FFFFFF14;
    }

    @media (min-width:1024px) {
        padding: 1.5rem;
        gap: 1.5rem;

    }
`;

const PalestranteRole = styled.span`
    font-weight: 500;

    @media (min-width:1024px) {
        display: flex;
        align-items: flex-end;
        width: 30%;
    }
`;

const PalestranteImageWrapper = styled.div`
    width: 100%;
    display: flex;
    max-width: 8rem;
`

const PalestranteImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const PalestranteName = styled.h3`
    width: 100%;
`;

const PalestranteWrapper = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-in-out;
`;

const PalestranteBody = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    padding-block: 1.5rem;
    flex: 1;

    @media (min-width:1024px) {
        & {
            flex-direction: row;
            padding-inline: 1.5rem;
        }
    }
`;

const PalestranteLeftBody = styled.div` 
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px){
        width: 15%;
    }
`;

const PalestranteMiddleBody = styled.div`
    width: 100%;
`;

const PalestranteRightBody = styled.div`
    margin-left: auto;
    width: 30%;
`;

const PalestrantePronome = styled.span`
    font-weight: 400;
    border: 1px solid var(--color-neutral-50);
    width: fit-content;
    padding: 0.25rem 0.5rem;
    line-height: 1.5rem;
    // already existis
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
    font-weight: 500;
`;

const PalestranteSocialMedia = styled.div`
    display: flex;
    gap: 1rem;
`;