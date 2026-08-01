import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { useState, useEffect } from "react";

//images
import logoEtecDark from "../../../../public/images/schedule/logo-etec-dark.png";
import logoEtecLight from "../../../../public/images/schedule/logo-etec-light.png";
import dividerMobileLight from "../../../../public/images/schedule/details/divider-mobile-light.svg";
import dividerDesktopLight from "../../../../public/images/schedule/details/divider-desktop-light.svg";
import dividerMobileDark from "../../../../public/images/schedule/details/divider-mobile-dark.svg";
import dividerDesktopDark from "../../../../public/images/schedule/details/divider-desktop-dark.svg";

const EtecItinerary = () => {

    return (
        <EtecDetails>
            <div className="summary">
                <picture>
                    <source srcSet={logoEtecLight} media="(prefers-color-scheme: light)" />
                    <Image
                        src={logoEtecDark}
                        alt="logo Etec"
                        width={200}
                        height={200}
                    />
                </picture>

                <h4>Teste Sumário</h4>
            </div>

            <div className="event">
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
                    alt="logo Etec"
                    width={200}
                    height={200}
                />
            </picture>

            <div className="event">
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
                    alt="logo Etec"
                    width={200}
                    height={200}
                />
            </picture>


            <div className="lunch">
                <h5>Pausa para o almoço</h5>
                <h5>10:40 - 12:00h</h5>
            </div>

            <picture>
                <source srcSet={dividerMobileLight} media="(prefers-color-scheme: light)" />
                <Image
                    src={dividerMobileDark}
                    alt="logo Etec"
                    width={200}
                    height={200}
                />
            </picture>

            <div className="event">
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
                    alt="logo Etec"
                    width={200}
                    height={200}
                />
            </picture>

            <div className="event">
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
                    alt="logo Etec"
                    width={200}
                    height={200}
                />
            </picture>

            <div className="event">
                <h5>Painel das nossas organizações estudantis</h5>
                <h5>14:40 - 15:30h</h5>

                <p>
                    Tratemos representantes dos grupos estudantis do curso de Sistemas de informação para esclarecer todas as suas dúvidas!
                </p>
            </div>
        </EtecDetails>
    )
}

export default EtecItinerary;

const EtecDetails = styled.article`

`