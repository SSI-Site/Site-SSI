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
    <picture>
        <source srcSet={dividerMobileLight.src} media="(prefers-color-scheme: light)" />
        <Image
            src={dividerMobileDark}
            alt="Linha divisória"
            width={200}
            height={200} // Cuidado: verifique se esse height não distorce o SVG
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

                    <h4>Cronograma Especial</h4>

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
                            <path d="M2.18125 10.1812L8 4.3624L13.8187 10.1812L16 7.9999L8 -9.82285e-05L0 7.9999L2.18125 10.1812Z" fill="white" />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="etecDetails">
                        {SCHEDULE_DATA.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <div className={item.type === "lunch" ? "etecLunchPause" : "etecLecture"}>
                                    <h5>{item.title}</h5>
                                    <h5>{item.time}</h5>
                                    {item.desc && <p>{item.desc}</p>}
                                </div>

                                {/* Adciona os divisores corretamente */}
                                {index !== SCHEDULE_DATA.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </EtecDetails>
    )
}

export default EtecItinerary;

const EtecDetails = styled.article`

    .etecSchedule{
        border: 1px solid var(--purple-light-purple, #D0ACFF);
    }

    .etecChronogram{
        display: flex;
        width: 20.5rem;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid var(--purple-light-purple, #D0ACFF);
        background: linear-gradient(90deg, var(--background-brand-primary, rgba(150, 56, 255, 0.25)) 0%, rgba(150, 56, 255, 0.00) 100%), var(--background-neutrals-primary, #1A1A1A);
    }

    .angleUp{
        cursor: pointer;
        transition: transform 0.2s ease;
        transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    }

    .toggleButton {
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        /* padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center; */
    }
    
    .etecLogo img {
        width: 3.375rem;
        align-self: stretch;
        aspect-ratio: 9/4;
        height: auto;
    }

    .etecDetails {
        display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

        padding: 1rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        align-self: stretch;
    }

    .etecLecture{}

    .etecLunchPause{}
`