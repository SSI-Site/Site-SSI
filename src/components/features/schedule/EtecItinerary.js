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

const EtecItinerary = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <EtecDetails $isOpen={isOpen}>
            <div className="etecSchedule">
                <div className="etecChronogram">
                    <h4>Cronograma Especial</h4>

                    <picture>
                        <source srcSet={logoEtecLight} media="(prefers-color-scheme: light)" />
                        <Image
                            src={logoEtecDark}
                            alt="logo Etec"
                            width={200}
                            height={200}
                        />
                    </picture>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                        onClick={() => setIsOpen((prev) => !prev)}
                        style={{ cursor: "pointer", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                    >
                        <path d="M2.18125 10.1812L8 4.3624L13.8187 10.1812L16 7.9999L8 -9.82285e-05L0 7.9999L2.18125 10.1812Z" fill="white" />
                    </svg>

                </div>

                {isOpen && (
                    <div className="etecDetails">
                        <div className="etecLecture">
                            <h5>O que é a USP?</h5>
                            <h5>10:00 - 10:40h</h5>
                            <p>
                                Venha saber sobre a maior universidade da América Latina pelos próprios professores e estudantes.
                            </p>
                        </div>
                        <picture>
                            <source srcSet={dividerMobileLight} media="(prefers-color-scheme: light)" />
                            <Image
                                src={dividerMobileDark}
                                alt="Linha divisória"
                                width={200}
                                height={200}
                            />
                        </picture>
                        <div className="etecLecture">
                            <h5>Tour pelo Campus!</h5>
                            <h5>10:50 - 11:40h</h5>
                            <p>
                                Já que só palavras não bastam, também veja com os seus próprios olhos o campus da USP Leste.
                            </p>
                        </div>
                        <picture>
                            <source srcSet={dividerMobileLight} media="(prefers-color-scheme: light)" />
                            <Image
                                src={dividerMobileDark}
                                alt="Linha divisória"
                                width={200}
                                height={200}
                            />
                        </picture>
                        <div className="lunchPause">
                            <h5>Pausa para o almoço</h5>
                            <h5>10:40 - 12:00h</h5>
                        </div>
                        <picture>
                            <source srcSet={dividerMobileLight} media="(prefers-color-scheme: light)" />
                            <Image
                                src={dividerMobileDark}
                                alt="Linha divisória"
                                width={200}
                                height={200}
                            />
                        </picture>
                        <div className="etecLecture">
                            <h5>Panorama sobre as Àreas de Tecnologia</h5>
                            <h5>12:10 - 13:40h</h5>
                            <p>
                                Quais carreiras posso seguir na área tech? Quais são as diferenças entre os cursos? Venha descobrir!
                            </p>
                        </div>
                        <picture>
                            <source srcSet={dividerMobileLight} media="(prefers-color-scheme: light)" />
                            <Image
                                src={dividerMobileDark}
                                alt="Linha divisória"
                                width={200}
                                height={200}
                            />
                        </picture>
                        <div className="etecLecture">
                            <h5>Oportunidades da USP + Dicas para o Vestibular</h5>
                            <h5>13:50 - 14:30h</h5>
                            <p>
                                Abordaremos as oportunidades que só a USP proporciona, e também dicas para arrasar no vestibular.
                            </p>
                        </div>
                        <picture>
                            <source srcSet={dividerMobileLight} media="(prefers-color-scheme: light)" />
                            <Image
                                src={dividerMobileDark}
                                alt="Linha divisória"
                                width={200}
                                height={200}
                            />
                        </picture>
                        <div className="etecLecture">
                            <h5>Painel das nossas organizações estudantis</h5>
                            <h5>14:40 - 15:30h</h5>
                            <p>
                                Tratemos representantes dos grupos estudantis do curso de Sistemas de informação para esclarecer todas as suas dúvidas!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </EtecDetails>
    )
}

export default EtecItinerary;

const EtecDetails = styled.article`
    .etecDetails {
        display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    }
`