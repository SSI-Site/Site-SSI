import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InstagramIcon from "../../public/images/social/instagram.svg";
import LinkedInIcon from "../../public/images/social/linkedin.svg";
import ArrowUpIcon from "../../public/images/icons/arrow-up.svg";

// Componente principal que exibe o card do palestrante
const PalestranteCard = ({ palestrante = {
    nomePalestrante: "Nome do Palestrante",
    fotoPalestrante: "https://via.placeholder.com/128",
    pronomePalestrante: "ele/dele",
    cargoPalestrante: "Cargo do Palestrante",
    descricaoPalestrante: "Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis.",
    redesSociais: {
        linkedin: "https://www.linkedin.com/in/username",
        instagram: "https://www.instagram.com/username"
    }
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
    useEffect(() => {
        if (bodyRef.current) {
            handleBodyHeight(bodyRef.current);
        }
    }, [bodyRef]);

    return (
        <PalestranteContainer>
            {/* Cabeçalho do card, ao clicar alterna entre aberto e fechado */}
            <PalestranteHeader onClick={() => setOpen(!open)}>
                <PalestranteImage src={palestrante.fotoPalestrante} alt={palestrante.nomePalestrante} />
                <PalestranteInfo>
                    <PalestranteName>
                        {palestrante.nomePalestrante}
                        {
                            /* Ícone de seta para cima, muda de direção dependendo do estado do card
                            open && (
                                <PalestranteArrowUp src={ArrowUpIcon} alt="Fechar" />
                            )
                            */
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

                        {/* Lista de palestras do palestrante */}
                        <PalestrantePalestras>
                            <Palestra dataPalestra={
                                "Segunda-Feira, 11 de Agosto, 9:40-10:40h"
                            }
                                tituloPalestra={
                                    "Título da palestra gigante que pega duas linhas ou mais"
                                }
                                metadata={
                                    {
                                        presencial: true
                                    }
                                }

                            />
                        </PalestrantePalestras>
                    </PalestranteMiddleBody>
                    <PalestranteRightBody>
                        {/* Seção de redes sociais */}
                        <PalestranteSocialContainer>
                            <PalestranteSocialHeader>
                                Rede Sociais
                            </PalestranteSocialHeader>
                            <PalestranteSocialMedia>
                                {
                                    palestrante.redesSociais.linkedin && (
                                        <PalestranteSocialMediaItem
                                            icon={LinkedInIcon}
                                            link={palestrante.redesSociais.linkedin}
                                            alt="LinkedIn"
                                        />
                                    )
                                }

                                {
                                    palestrante.redesSociais.instagram && (
                                        <PalestranteSocialMediaItem
                                            icon={InstagramIcon}
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

const PalestranteArrowUp = styled.img`
    width: 48px;
    height: 48px;
    cursor: pointer;
`;

// Componente para exibir um ícone de rede social com link
const PalestranteSocialMediaItem = ({ icon, link, alt }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={alt} />
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

const PalestraTags = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const PalestraTag = styled.span`
    font-weight: 400;
    color: var(--color-neutral-50);
    background: var(--background-badge-brand-purple-500, #9638FF);
    padding: 2px 4px;
`;

const PalestrantePalestras = styled.div`
    display: flex;
    flex-direction: column;
`;

export {
    PalestranteCard
}

const PalestraContainer = styled.div`
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 1px solid var(--outline-neutrals-primary, #808080);
`;

const PalestraData = styled.p`
    font-weight: 500;
`;

const PalestraTitulo = styled.h5`
    font-weight: 500;
    margin-top: 0px;
`;

const PalestranteContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    flex: 1;
    border-bottom: 1px solid var(--color-neutral-secondary);
    position: relative;
`;

const PalestranteInfo = styled.div`
    display: flex;
    flex: 1;

    @media (max-width:1000px) {
        & {
            flex-direction: column;
            padding: 10px 0px;
        }
    }
`;

const PalestranteHeader = styled.div`
    display: flex;
    padding: 24px 0px;
    gap: 24px;

    @media (max-width:1000px) {
        & {
            gap: 16px;
        }
    }
`;

const PalestranteRole = styled.span`
    font-weight: 500;
    margin-top: auto;
    margin-left: auto;
    width: calc((100% + 128px + 24px)* 0.3);

    @media (max-width:1000px) {
        & {
            margin-left: 0px;
            width: fit-content;
        }
    }
`;

const PalestranteImage = styled.img`
    width: 128px;
    height: 128px;
    object-fit: cover;

    @media (max-width:1000px) {
        & {
            width: 100px;
            height: 100px;
        }
    }
`;

const PalestranteName = styled.h3`
    margin-top: auto;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width:1000px) {
        & {
            margin-top: 0px;
        }
    }
`;

const PalestranteWrapper = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-in-out;
`;

const PalestranteBody = styled.div`
    display: flex;
    gap: 24px;
    padding: 24px 0px;
    flex: 1;

    @media (max-width:1000px) {
        & {
            flex-direction: column;
        }
    }
`;

const PalestranteLeftBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 128px;
`;

const PalestranteMiddleBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
`;

const PalestranteRightBody = styled.div`
    width: 30%;
`;

const PalestrantePronome = styled.span`
    font-weight: 400;
    border: 1px solid var(--color-neutral-50);
    width: fit-content;
    padding: 2px 4px;
    line-height: 24px;
`;

const PalestranteDescription = styled.p`
    font-weight: 400;
`;

const PalestranteSocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const PalestranteSocialHeader = styled.p`
    font-weight: 500;
`;

const PalestranteSocialMedia = styled.div`
    display: flex;
    gap: 16px;
`;