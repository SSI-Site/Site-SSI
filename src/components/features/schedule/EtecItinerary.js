import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import useAvailableWidth from "../../../../hooks/useAvailableWidth";

//images
import logoEtecDark from "../../../../public/images/schedule/logo-etec-dark.png";
import logoEtecLight from "../../../../public/images/schedule/logo-etec-light.png";
import Dots from "../../ui/Dots";

// Dados da apresentação para as Etecs
const SCHEDULE_THURSDAY = [
    {
        id: 1,
        title: "O que é a USP?",
        time: "09:40 - 10:40h",
        desc: "Venha saber sobre a maior universidade da América Latina pelos próprios professores e estudantes.",
        type: "lecture"
    },
    {
        id: 2,
        title: "Tour pelo Campus!",
        time: "10:50 - 11:40h",
        desc: "Já que só palavras não bastam, também veja com os seus próprios olhos o campus da USP Leste.",
        type: "lecture"
    },
    {
        id: 3,
        title: "Pausa para o almoço",
        time: "11:40 - 12:10h",
        desc: null,
        type: "lunch"
    },
    {
        id: 4,
        title: "Panorama sobre as Áreas de Tecnologia",
        time: "12:10 - 12:50h",
        desc: "Quais carreiras posso seguir na área tech? Quais são as diferenças entre os cursos? Venha descobrir!",
        type: "lecture"
    },
    {
        id: 5,
        title: "Vida Universitária",
        time: "13:00 - 13:40h",
        desc: "Viver a universidade é aprender, evoluir e descobrir caminhos que vão muito além da sala de aula.",
        type: "lecture"
    },
    {
        id: 6,
        title: "Ingresso na USP e Dicas para o Vestibular",
        time: "13:50 - 14:30h",
        desc: "Abordaremos os meios de ingresso na USP, e também dicas para arrasar nos vestibulares.",
        type: "lecture"
    },
    {
        id: 7,
        title: "Painel das nossas organizações estudantis",
        time: "14:40 - 15:20h",
        desc: "Traremos representantes dos grupos estudantis do curso de Sistemas de Informação para esclarecer todas as suas dúvidas!",
        type: "lecture"
    }
];

const SCHEDULE_TUESDAY = [
    {
        id: 1,
        title: "Almoço",
        time: "11:40 - 12:10h",
        desc: null,
        type: "lunch"
    },
    {
        id: 2,
        title: "O que é a USP?",
        time: "12:10 - 12:50h",
        desc: "Venha saber sobre a maior universidade da América Latina pelos próprios professores e estudantes.",
        type: "lecture"
    },
    {
        id: 3,
        title: "Tour pelo Campus!",
        time: "13:00 - 13:40h",
        desc: "Já que só palavras não bastam, também veja com os seus próprios olhos o campus da USP Leste.",
        type: "lecture"
    },
    {
        id: 4,
        title: "Panorama sobre a Área da Tecnologia",
        time: "14:00 - 14:40h",
        desc: "Quais carreiras posso seguir na área tech? Quais são as diferenças entre os cursos? Venha descobrir!",
        type: "lecture"
    },
    {
        id: 5,
        title: "Vida universitária",
        time: "14:50 - 15:30h",
        desc: "Viver a universidade é aprender, evoluir e descobrir caminhos que vão muito além da sala de aula.",
        type: "lecture"
    },
    {
        id: 6,
        title: "Ingresso na USP e Dicas para o Vestibular",
        time: "15:40 - 16:20h",
        desc: "Abordaremos os meios de ingresso na USP, e também dicas para arrasar nos vestibulares.",
        type: "lecture"
    },
    {
        id: 7,
        title: "Painel das Organizações Estudantis",
        time: "16:30 - 17:20h",
        desc: "Tratemos representantes dos grupos estudantis do curso de Sistemas de informação para esclarecer todas as suas dúvidas!",
        type: "lecture"
    }
];

const EtecItinerary = ({ weekDay }) => {
    const [isOpen, setIsOpen] = useState(false);
    const SCHEDULE_DATA = weekDay === 'Quinta-feira' ? SCHEDULE_THURSDAY : SCHEDULE_TUESDAY;
    const { componentRef, availableWidth } = useAvailableWidth(SCHEDULE_DATA, '.dots-wrapper');

    // Clique da div inteira para mostrar o conteúdo (habilitado apenas para mobile)
    const handleChronogramClick = (event) => {
        if (
            window.innerWidth < 800 &&
            !event.target.closest(".toggleButton")
        ) {
            setIsOpen((prev) => !prev)
        }
    }

    return (
        <EtecDetails $isOpen={isOpen} ref={componentRef}>
            <div className="etecSchedule">
                <div className="etecChronogram" onClick={handleChronogramClick}>
                    <picture className="etecLogo">
                        <source srcSet={logoEtecLight} media="(prefers-color-scheme: light)" />
                        <Image
                            src={logoEtecDark}
                            alt="logo Etec"
                            width={270}
                            height={120}
                        />
                    </picture>

                    <h6>Cronograma Especial</h6>

                    <button
                        className="toggleButton"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-label="Abrir cronograma detalhado"
                    >
                        <svg
                            className="angleUp"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                        >
                            <path d="M2.18125 10.1812L8 4.3624L13.8187 10.1812L16 7.9999L8 -9.82285e-05L0 7.9999L2.18125 10.1812Z" />
                        </svg>
                    </button>
                </div>

                <div className="etecDetails" aria-hidden={!isOpen}>
                    {SCHEDULE_DATA.map((item, index) => {
                        const timeParts = item.time.split(' - ');
                        return (
                            <React.Fragment key={item.id}>
                                <div className={item.type === "lunch" ? "etecLunchPause" : "etecLecture"}>
                                    <div className="etecLectureTitle">
                                        <h6>{item.title}</h6>
                                        <p className="etecLectureTime">
                                            <time dateTime={timeParts[0].replace('h', '')}>{timeParts[0]}</time>
                                            {" - "}
                                            <time dateTime={timeParts[1].replace('h', '')}>{timeParts[1]}</time>
                                        </p>
                                    </div>
                                    {item.desc && <p>{item.desc}</p>}
                                </div>

                                {/* Adiciona os divisores corretamente */}
                                {index !== SCHEDULE_DATA.length - 1 && 
                                    <Dots dotSize={6} dotGap={18.2} availableWidth={availableWidth} numberLines={1}/>
                                }
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </EtecDetails>
    )
}

export default EtecItinerary;

const EtecDetails = styled.article`
    width: 100%; /* Garante que vai ocupar 100% d0 elemento raiz */

    .etecSchedule {
        width: 100%;
        max-width: 83.25rem;
        margin: 1rem auto;
        overflow: hidden;
        border: 1px solid var(--brand-purple-200);
        border-radius: 1.5rem;
    }

    .etecChronogram {
        display: flex;
        width: 100%;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;

        border-bottom: ${({ $isOpen }) => $isOpen ? "1px solid var(--brand-purple-200)" : "none"};
        background: linear-gradient(90deg, var(--background-brand-primary, rgba(150, 56, 255, 0.25)) 0%, transparent 100%), var(--content-neutrals-inverse);
    }

    .angleUp {
        width: 1rem;
        height: auto;
        flex-shrink: 0;
        aspect-ratio: 1/1;
        transition: transform 0.2s ease;
        transform-origin: center;
        transform: ${({ $isOpen }) => ($isOpen ? "rotate(0deg)" : "rotate(180deg)")};
        fill: white;
    }

    .toggleButton {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: auto;
        margin-left: auto;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
    }

    .etecLogo {
        display: contents;
    }

    .etecLogo img {
        width: 3.375rem;
        height: auto;
        margin-right: 0.3px;
        aspect-ratio: 9/4;
    }

    .etecDetails {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        overflow: hidden;
        max-height: ${({ $isOpen }) => ($isOpen ? "2000px" : "0")};
        opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
        padding-inline: 1rem;
        padding-block: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
        transition: max-height 240ms ease, opacity 240ms ease, padding-block 240ms ease;

        .gradient-stop-1 {
            stop-color: #75638c;
        }

        .gradient-stop-2 {
            stop-color: #75638c;
        }

        // Modificando o tamanho das bolinhas
        .dots {
            transform: scale(0.75);       

            @media (min-width: 801px) {
                transform: scale(1);
            }
        }
    }

    .etecLecture {
        display: flex;
        padding: 1rem 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        align-self: stretch;
    }

    .etecLectureTitle {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }

    .etecLectureTitle h6 {
        flex: 1;
    };

    .etecLunchPause {
        display: flex;
        padding: 1rem 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        align-self: stretch;
    }

    .etecLunchPause h6 {
        color: var(--brand-purple-200);
    }

    h6 {
        color: var(--content-neutrals-primary);

        font-size: 1rem;
        line-height: 1.5rem;
    }

    .etecLectureTime {
        color: var(--brand-primary-light);
        text-align: right;
        white-space: nowrap;

        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.5rem;
    }

    p {
        color: var(--content-neutrals-primary);

        font-size: 0.875rem;
        line-height: 1.5rem; 
    }

    @media (max-width: 360px) {
        h6 {
            font-size: 0.925rem;
            line-height: 1.5rem;
        }
    }

    @media (min-width: 801px) {
        .etecChronogram {
            padding: 2rem;
            border-bottom: ${({ $isOpen }) => $isOpen ? "3px solid var(--brand-purple-200)" : "none"};
        }

        .etecLectureTitle {
            gap: 0.5rem;
        }

        .etecSchedule {
            border: 3px solid var(--brand-purple-200);
            border-radius: 2rem;
        }

        .angleUp {
            width: 2rem;
            aspect-ratio: 1/1;
        }

        .etecLogo img{
            width: 5.625rem;
        }

        .etecDetails {
            padding: 1rem 2rem;
            padding-block: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
        }

        .etecLecture, .etecLunchPause {
            display: flex;
            padding: 1.33125rem 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.67rem;
            align-self: stretch;
        }

        h6 {
            font-size: 1.75rem;
            line-height: 2rem;
        }

        .etecLectureTime {
            font-size: 1.125rem;
            line-height: 1.5rem;
            margin-top: 0.25rem;
        }

        p {
            color: var(--content-neutrals-primary);

            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    @media (min-width: 1200px) {
        h6 {
            font-size: 2rem;
            line-height: 2.5rem;
        }
    }

    @media (prefers-color-scheme: light){
        .etecChronogram {
            background: linear-gradient(90deg, transparent 0%, var(--background-brand-primary, rgba(98, 6, 191, 0.25)) 100%), var(--content-neutrals-inverse);
        }

        .angleUp {
            fill: black;
        }

        .etecLectureTime {
            color: var(--brand-primary-dark);
        }

        .etecLunchPause h6 {
            color: var(--brand-primary-dark);
        }
    }
`