import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { useState } from "react";

//images
import logoEtecDark from "../../../../public/images/schedule/logo-etec-dark.png";
import logoEtecLight from "../../../../public/images/schedule/logo-etec-light.png";
import dividerMobileLight from "../../../../public/images/schedule/details/divider-mobile-light.svg";
import dividerDesktopLight from "../../../../public/images/schedule/details/divider-desktop-light.svg";
import dividerMobileDark from "../../../../public/images/schedule/details/divider-mobile-dark.svg";
import dividerDesktopDark from "../../../../public/images/schedule/details/divider-desktop-dark.svg";


// Dados da apresentação para as Etecs
const SCHEDULE_DATA = [
    {
        id: 1,
        title: "O que é a USP?",
        time: "10:00 - 10:40h",
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
        time: "12:10 - 13:40h",
        desc: "Quais carreiras posso seguir na área tech? Quais são as diferenças entre os cursos? Venha descobrir!",
        type: "lecture"
    },
    {
        id: 5,
        title: "Oportunidades da USP + Dicas para o Vestibular",
        time: "13:50 - 14:30h",
        desc: "Abordaremos as oportunidades que só a USP proporciona, e também dicas para arrasar no vestibular.",
        type: "lecture"
    },
    {
        id: 6,
        title: "Painel das nossas organizações estudantis",
        time: "14:40 - 15:30h",
        desc: "Traremos representantes dos grupos estudantis do curso de Sistemas de Informação para esclarecer todas as suas dúvidas!", // Erro corrigido
        type: "lecture"
    }
];

// Subcomponente para os divisores
const Divider = () => (
    <picture className="etecDivider">
        {/* Tela Desktop */}
        <source srcSet={dividerDesktopLight} media="(prefers-color-scheme: light) and (min-width: 786px)" />
        <source srcSet={dividerDesktopDark} media="(prefers-color-scheme: dark) and (min-width: 786px)" />

        {/* Tela Mobile */}
        <source srcSet={dividerMobileLight} media="(prefers-color-scheme: light)" />
        <Image
            src={dividerMobileDark}
            alt="Linha divisória"
            width={296}
            height={2}
        />
    </picture>
);

const EtecItinerary = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <EtecDetails $isOpen={isOpen}>
            <div className="etecSchedule">
                <div className="etecChronogram">
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
                    {SCHEDULE_DATA.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <div className={item.type === "lunch" ? "etecLunchPause" : "etecLecture"}>
                                <div className="etecLectureTitle">
                                    <h6>{item.title}</h6>
                                    <label>{item.time}</label>
                                </div>
                                {item.desc && <p>{item.desc}</p>}
                            </div>

                            {/* Adciona os divisores corretamente */}
                            {index !== SCHEDULE_DATA.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </EtecDetails>
    )
}

export default EtecItinerary;

const EtecDetails = styled.article`

    .etecSchedule{
        width: 100%;
        max-width: 67rem;
        margin: 1rem auto;
        overflow: hidden;
        border: 1px solid var(--purple-light-purple, #D0ACFF);
        border-radius: 1.70rem;
    }

    .etecChronogram{
        display: flex;
        width: 100%;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;

        border-bottom: ${({ $isOpen }) => $isOpen ? "1px solid var(--purple-light-purple, #D0ACFF)" : "none"};
        background: linear-gradient(90deg, var(--background-brand-primary, rgba(150, 56, 255, 0.25)) 0%, rgba(150, 56, 255, 0.00) 100%), var(--background-neutrals-primary, #1A1A1A);
    }

    .angleUp{
        width: 1.5rem;
        height: 1.5rem;
        flex-shrink: 0;
        aspect-ratio: 1/1;

        transition: transform 0.2s ease;
        transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
        fill: white;
    }

    .toggleButton {
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

    .etecLectureTitle label {
        white-space: nowrap;
    };

    .etecDivider {
        display: contents;
    }

    .etecDivider img{
        width: 100%;
        height: auto;
        object-fit: contain;
        opacity: 0.5;
        margin: 0.5rem 0;
    }

    .etecLunchPause {
        display: flex;
        padding: 1rem 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        align-self: stretch;
    }

    .etecLunchPause h6 {
        color: var(--content-brand-primary-light, #D0ACFF);
    }

    h6 {
        color: var(--content-neutrals-primary, #FFF);

        font-size: var(--Typograph-Heading-H6-size, 1rem);
        line-height: var(--Typograph-Heading-H6-height, 1.5rem); /* 150% */
    }

    label {
        color: var(--content-brand-primary-light, #D0ACFF);
        text-align: right;

        font-size: var(--Typograph-Label-Medium-size, 0.875rem);
        line-height: var(--Typograph-Label-Medium-height, 1.5rem); /* 171.429% */
    }

    p {
        color: var(--content-neutrals-primary, #FFF);

        font-size: var(--Typograph-Paragraph-Medium-size, 0.875rem);
        line-height: var(--Typograph-Paragraph-Medium-height, 1.5rem); /* 171.429% */
    }

    @media (min-width: 768px) {
        .etecChronogram {
            padding: 2rem;
            border-bottom: ${({ $isOpen }) => $isOpen ? "3px solid var(--purple-light-purple, #D0ACFF)" : "none"};
        }

        .etecSchedule {
            border: 3px solid var(--purple-light-purple, #D0ACFF);
        }

        .angleUp{
            width: 2rem;
            height: 2rem;
            aspect-ratio: 1/1;
        }

        .etecLogo img{
            width: 5.625rem;
        }

        .etecDetails {
            padding: 1rem 2rem;
            padding-block: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
        }

        .etecDivider {
            width: 100%;
            height: 0.375rem;
            opacity: 0.5;
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
            color: var(--content-neutrals-primary, #FFF);

            font-size: var(--Typograph-Heading-H5-size, 2rem);
            line-height: var(--Typograph-Heading-H5-height, 2.5rem);
        }

        label {
            color: var(--content-brand-primary-light, #D0ACFF);
            text-align: right;

            font-size: var(--Typograph-Label-Large-size, 1.125rem);
            line-height: var(--Typograph-Label-Large-height, 1.5rem); /* 133.333% */
        }

        p {
            color: var(--content-neutrals-primary, #FFF);

            font-size: var(--Typograph-Paragraph-Medium-size, 1rem);
            line-height: var(--Typograph-Paragraph-Medium-height, 1.5rem); /* 150% */
        }
    }

    @media (prefers-color-scheme: light){
        
        .etecSchedule {
            border: 3px solid var(--purple-light-purple, #2B054D);
        }

        .etecChronogram {
            border-bottom: ${({ $isOpen }) => $isOpen ? "3px solid var(--purple-dark-purple, #2B054D)" : "none"};
            background: linear-gradient(90deg, rgba(150, 56, 255, 0.00) 0%, var(--background-brand-primary, rgba(98, 6, 191, 0.25)) 100%), var(--background-neutrals-primary, #E6E6E6);
        }

        .angleUp {
            fill: black;
        }

        label {
            color: var(--content-brand-primary-dark, #2B054D);
        }

        .etecLunchPause h6 {
            color: var(--content-brand-primary-light, #2B054D);
        }
    }
`