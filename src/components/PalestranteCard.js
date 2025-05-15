import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
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
                            {
                                palestrante.palestras.map((palestra, index) => (
                                    <Palestra
                                        key={index}
                                        dataPalestra={palestra.dataPalestra}
                                        tituloPalestra={palestra.tituloPalestra}
                                        metadata={palestra.metadata}
                                    />
                                ))
                            }
                        </PalestrantePalestras>
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
                                                <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn da Semana de Sistemas de Informação">
                                                    <mask id="mask0_2776_492" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                                        <path fillRule="evenodd" d="M36.34 6.70333V32.6267V36.33H32.6356H6.70444H3V32.6267V6.70333V3H6.70444H32.6356H36.34V6.70333ZM31.7094 21.887V31.7008H26.5417V22.5721C26.5417 21.8846 26.2685 21.2252 25.7822 20.7391C25.2959 20.2529 24.6364 19.9798 23.9486 19.9798C22.5224 19.9798 21.374 21.1463 21.374 22.5721V31.7008H16.2063V16.2024H21.374V18.2577C22.2631 16.8134 24.0968 15.8506 25.6712 15.8506C27.2726 15.8506 28.8085 16.4865 29.9409 17.6186C31.0733 18.7506 31.7094 20.286 31.7094 21.887ZM12.387 12.3841C11.8034 12.9675 11.0119 13.2953 10.1866 13.2953C8.46406 13.2953 7.05637 11.9065 7.05637 10.1845C7.05637 9.35452 7.38616 8.55857 7.9732 7.97171C8.56023 7.38484 9.35643 7.05515 10.1866 7.05515C11.9092 7.05515 13.2984 8.46242 13.2984 10.1845C13.2984 11.0095 12.9705 11.8007 12.387 12.3841ZM12.7612 16.2024V31.7008H7.63056V16.2024H12.7612Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_2776_492)">
                                                        <rect width="40" height="40" fill="white" />
                                                    </g>

                                                    {/*Mask utilizada para realizar a animação */}
                                                    <g mask="url(#mask0_2776_492)">
                                                        <rect className="fillAnimation" fill="#9638FF" width="40" height="50" />
                                                    </g>
                                                </svg>
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
                                                <svg className="animation" width="40" height="40" viewBox="0 0 40 40" fill='none' xmlns="http://www.w3.org/2000/svg" aria-label="Instagram da Semana de Sistemas de Informação">
                                                    <mask id="mask0_2776_488" maskUnits="userSpaceOnUse" x="3" y="3" width="34" height="34">
                                                        <path d="M3.33105 3.33008V36.6634H36.6644V3.33008H3.33105ZM16.7727 12.2652C17.7973 11.8535 18.8936 11.6495 19.9977 11.6651C22.2079 11.6651 24.3275 12.5414 25.8903 14.1042C27.4531 15.667 28.3311 17.7866 28.3311 19.9967C28.3311 22.2069 27.4531 24.3265 25.8903 25.8893C24.3275 27.4521 22.2079 28.3301 19.9977 28.3301C18.8936 28.3457 17.7973 28.1417 16.7727 27.73C15.748 27.3182 14.8155 26.7069 14.0291 25.9317C13.2428 25.1564 12.6184 24.2325 12.1922 23.2138C11.766 22.1951 11.5465 21.1018 11.5465 19.9976C11.5465 18.8933 11.766 17.8001 12.1922 16.7813C12.6184 15.7626 13.2428 14.8388 14.0291 14.0635C14.8155 13.2882 15.748 12.6769 16.7727 12.2652ZM27.3287 9.80336C27.7015 9.41533 28.21 9.1866 28.7477 9.16508V9.16174C29.3003 9.16174 29.8302 9.38124 30.2209 9.77194C30.6116 10.1626 30.8311 10.6925 30.8311 11.2451C30.8311 11.7976 30.6116 12.3275 30.2209 12.7182C29.8302 13.1089 29.3003 13.3284 28.7477 13.3284C28.21 13.3069 27.7015 13.0782 27.3287 12.6901C26.9559 12.3021 26.7477 11.7849 26.7477 11.2467C26.7477 10.7086 26.9559 10.1914 27.3287 9.80336Z" fill="white" />
                                                        <path d="M19.9977 14.9984C20.6619 14.9862 21.3219 15.1064 21.939 15.3521C22.5562 15.5978 23.1183 15.964 23.5924 16.4293C24.0664 16.8947 24.443 17.4498 24.7001 18.0623C24.9572 18.6748 25.0897 19.3324 25.0898 19.9967C25.0899 20.661 24.9577 21.3187 24.7008 21.9313C24.4439 22.5439 24.0675 23.0991 23.5935 23.5646C23.1196 24.0301 22.5577 24.3965 21.9406 24.6424C21.3235 24.8883 20.6636 25.0088 19.9994 24.9967C18.6733 24.9967 17.4015 24.47 16.4639 23.5323C15.5262 22.5946 14.9994 21.3228 14.9994 19.9967C14.9994 18.6707 15.5262 17.3989 16.4639 16.4612C17.4015 15.5235 18.6733 14.9967 19.9994 14.9967L19.9977 14.9984Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_2776_488)">
                                                        <rect x="0.330078" y="0.330078" width="40" height="40" fill="white" />
                                                    </g>
                                                    {/*Mask utilizada para realizar a animação */}
                                                    <g mask="url(#mask0_2776_488)">
                                                        <rect className="fillAnimation" fill="#9638FF" width="40" height="40" />
                                                    </g>
                                                </svg>
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

const PalestranteArrowUp = styled.img`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`;

// Componente para exibir um ícone de rede social com link
const PalestranteSocialMediaItem = ({ icon, link, alt }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
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
`;

const PalestrantePalestras = styled.div`
    display: flex;
    flex-direction: column;
`;

export {
    PalestranteCard
}

const PalestraContainer = styled.div`
    padding: 0.9rem 1rem;
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
    margin-top: 0px;
`;

const PalestranteContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
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
            padding: 0.9rem 0px;
        }
    }
`;

const PalestranteHeader = styled.div`
    display: flex;
    padding: 1.5rem 0px;
    gap: 1.5rem;

    @media (max-width:1000px) {
        & {
            gap: 1rem;
        }
    }
`;

const PalestranteRole = styled.span`
    font-weight: 500;
    margin-top: auto;
    margin-left: auto;
    width: calc((100% + 8rem + 1.5rem)* 0.3);

    @media (max-width:1000px) {
        & {
            margin-left: 0px;
            width: fit-content;
        }
    }
`;

const PalestranteImage = styled.img`
    width: 8rem;
    height: 8rem;
    object-fit: cover;

    @media (max-width:1000px) {
        & {
            width: 9rem;
            height: 9rem;
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
    gap: 1.5rem;
    padding: 1.5rem 0px;
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
    gap: 1.5rem;
    width: 8rem;
`;

const PalestranteMiddleBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
`;

const PalestranteRightBody = styled.div`
    width: 30%;
`;

const PalestrantePronome = styled.span`
    font-weight: 400;
    border: 1px solid var(--color-neutral-50);
    width: fit-content;
    padding: 0.25rem 0.5rem;
    line-height: 1.5rem;
`;

const PalestranteDescription = styled.p`
    font-weight: 400;
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

    .fillAnimation {
        transform: translateX(-100%);
        transition: all 0.15s ease-out;
    }

    .animation:hover, a:focus-visible {
        cursor: pointer;
        transition: all 0.15s ease-out;

        .fillAnimation {
            transform: translateX(0);
        }
    }
`;