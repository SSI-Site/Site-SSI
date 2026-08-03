import { useRouter } from 'next/router';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import Meta from '../src/infra/seo/Meta';
import gifts from '../data/gifts';

import { eventDetails } from '../data/eventDetails';

// components
import Button from '../src/components/ui/Button';
import GiftCard from '../src/components/features/gifts/GiftCard';
import Accordion from '../src/components/ui/Accordion';

//Importe Imagem do Next
import Image from 'next/image';

// assets
import LogoCircularDark from '../public/images/logos/logo_circular_purple.svg';
import LogoCircularLight from '../public/images/logos/logo_circular_light.svg'

const About = () => {

    const router = useRouter();
    const { user, disableAuth } = useAuth();

    return (
        <>
            <Meta title='Sobre | Semana de Sistemas de Informação'
                description='Saiba mais sobre a Semana de Sistemas de Informação: objetivos, história, impacto e como o evento conecta estudantes e profissionais de TI.'
                keywords='o que é a SSI, história do evento, sobre a SSI, semana acadêmica tecnologia, evento de sistemas de informação, missão SSI, objetivos semana de tecnologia, contexto SSI'
            />

            <Background>
                <LogoTextSection>
                    <div className='logo-text-container'>
                        <div className='text'>
                            <h1>Sobre o Evento</h1>
                            <p>A <strong>Semana de Sistemas de Informação</strong> é um evento anual organizado por alunas e alunos do curso de Sistemas de Informação da Escola de Artes, Ciências e Humanidades da Universidade de São Paulo (EACH - USP).</p>
                            <a href={eventDetails.regulationLink} target="_blank" rel="noreferrer">
                                <Button>
                                    Conferir regulamento
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                        <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9Z" fill="white"/>
                                    </svg>
                                </Button>
                            </a>
                        </div>
                        <div className='logo'>
                            <picture>
                                <source srcSet={LogoCircularLight} media='(prefers-color-scheme: light)'/>
                                <Image
                                    src={LogoCircularDark}
                                    alt={`Gif SSI ${eventDetails.year}`}
                                    width={500}
                                    height={500}
                                    className='image'
                                />
                            </picture>
                        </div>
                    </div>
                </LogoTextSection>

                <BaitSection>
                    <div className='bait-in-columns'>
                        <BaitContent>
                            <div className='bait-header'>
                                <h5>Palestras</h5>
                                <p>A Semana de Sistemas de Informação {eventDetails.year} contará com diversas palestras de empresas e profissionais da <strong>área da tecnologia</strong>.</p>
                            </div>
                            <div className='bait-itens in-columns'>
                                <Accordion title="Temas">
                                    <p>
                                        Teremos apresentações que contemplam diversos temas, como Inteligência Artificial, Ciência de Dados, Liderança, UX Design, Segurança de Software, Desenvolvimento Cloud Native e muito mais.
                                    </p>
                                </Accordion>
                                <Accordion title="Empresas de Organizações">
                                    <p>
                                        Os nossos palestrantes fazem parte de empresas e organizações que estão presente em diferentes áreas do mercado de trabalho, como a BT Company, Itaú, Festo, DSec, TOTVS, 99, Fundação Estudar, Rocketseat, P&G, Ade Sampa, Hype e a Síntese Jr.
                                    </p>
                                </Accordion>
                            </div>
                        </BaitContent>

                        <BaitContent>
                            <div className='bait-header'>
                                <h5>Workshops</h5>
                                <p>Durante a Semana de Sistemas de Informação, alunos e profissionais oferecerão workshops interativos!</p>
                            </div>
                            <div className='bait-itens in-columns'>
                                <Accordion title="Atividades">
                                    <p>
                                        Participe de workshops que visam impulsionar as suas habilidades de programação, compreensão de ferramentas modernas e construção de aplicações embarcadas, Web e Desktop.
                                    </p>
                                </Accordion>
                            </div>
                        </BaitContent>
                    </div>

                    <BaitContent>
                        <div className='bait-header'>
                            <h5>Networking</h5>
                            <p>Não deixe de se conectar com os palestrantes e participantes, trocar ideias e aumentar a sua rede de contatos.</p>
                        </div>

                        <div className='bait-itens'>
                            <Accordion title="Alunos da EACH">
                                <p>
                                    Tenha contato com uma rede de pessoas interessadas em diversas áreas, não só estudantes de Sistemas de Informação da EACH, mas de diversos outros cursos e unidades da USP.
                                </p>
                            </Accordion>
                            <Accordion title="Palestrantes Experientes">
                                <p>
                                    Conecte-se com os palestrantes que possuem expertise em diversas áreas. Lembre-se de acioná-los no LinkedIn e anote os contatos de cada um para esclarecer eventuais dúvidas.
                                </p>
                            </Accordion>
                        </div>
                    </BaitContent>

                    <BaitContent>
                        <div className='bait-header'>
                            <h5>Prêmios e Brindes</h5>
                            <p>Não perca a oportunidade de ganhar prêmios e brindes incríveis ao participar das nossas atividades e palestras!</p>
                        </div>

                        <div className='bait-itens'>
                            <Accordion title="Sorteios">
                                <p>
                                    Participe das palestras e tenha a chance de ganhar gift cards de diversas lojas e brindes de diversas empresas.
                                </p>
                            </Accordion>
                            <Accordion title="Brindes por Presença">
                                <p>
                                    Assista as palestras e participe nos workshops para ganhar diversos prêmios exclusivos da SSI.
                                </p>
                            </Accordion>
                        </div>
                    </BaitContent>
                </BaitSection>
            </Background>

            <GiftsSection>
                <div className='gifts-container'>
                    <div className='gifts-cards'>
                        {Object.entries(gifts).map(([key, gift]) => {
                                return (
                                    <GiftCard key={key} index={key} name={gift.name} image={gift.image} minPresence={gift.minPresence} />
                                )
                        })}
                    </div>

                    {!disableAuth && user &&
                        <Button onClick={() => router.push('/user#meus-brindes')}>Resgatar brindes</Button>
                    }
                </div>
            </GiftsSection>
        </>
    )
}

export default About;

const Background = styled.div`
    @media (min-width: 800px) {
        background-image: url('/images/about/bg-desktop.svg');
        background-repeat: no-repeat;
        background-position: top center; 
        background-size: 1250px;
    }
`

const LogoTextSection = styled.section`
    .logo-text-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 2rem 0rem;
        max-width: 68.5rem;
    }

    .text, .logo {
        display: flex;
        flex-direction: column;
        align-self: stretch;
    }

    .text {
        gap: 1.5rem;

        h1 {
            font-size: 2.5rem;
            line-height: 3rem;
        }

        p {
            font-size: 0.875rem;
            font-weight: 400;
        }

        strong {
            font-size: 1rem;
            color: var(--backup-primary-300, #D98DFF);
        }

        button {
            width: 100%;
        }
    }

    .logo {
        align-items: center; 
        justify-content: center;
    
        .image {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }

    @media (min-width:801px) {   
        .logo-text-container {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
        }
    
        .logo, .text {
            padding: 3.5rem 1rem;
        }

        .logo {
            align-items: center;
            justify-content: center;
        }

        .text {
            justify-content: center;
            align-items: flex-start;
            padding: 4.5rem 1.5rem;

            h1 { 
                font-size: 3.5rem;
            }
            p {
                font: 400 1rem/1.5rem 'AT Aero';
            }
        }
    }
`

const BaitSection = styled.section`
    width: 100%;
    padding-inline: 0;

    .bait-in-columns {
        max-width: 68.5rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
    }

    @media (min-width: 800px) {
        .bait-in-columns {
            grid-template-columns: 1fr 1fr;
        }
    }
`

const BaitContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    padding: 1rem;
    
    p {
        font-weight: 400;
    }

    .bait-header {
        max-width: 32rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        h5 {
            width: fit-content;
            padding: 0.3125rem 0.625rem;
            border-radius: 0.625rem;
            color: var(--content-neutrals-fixed-white);
            background: linear-gradient(90deg, var(--background-brand-primary, #9638FF) 0%, #5A2299 100%);
        }

        p {
            font-size: 0.875rem;
        }

        strong {
            color: var(--backup-primary-300);
            font-size: 1rem;
        }
    }

    .bait-itens {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @media (max-width: 801px) {
            background-image: url('/images/about/bg-mobile-white.svg');
            background-repeat: no-repeat;
            background-position: top center; 
        }
    }

    @media (min-width: 801px) {
        .bait-header {
            align-items: center;
            gap: 1rem;

            h5 {
                padding: 0.1875rem 1rem;
                border-radius: 1rem;
            }

            p {
                text-align: center;
                font-size: 1rem;
            }

            strong {
                color: var(--backup-primary-300);
                font-size: 1.125rem;
            }
        }
        
        .bait-itens {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .in-columns {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

`

const GiftsSection = styled.section`
    .gifts-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem 0rem;

        .gifts-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
            gap: 1rem;
            justify-items: center;
            align-items: stretch;
            width: 100%;
            margin: 0 auto;
        }
    }

    @media (min-width:1000px) {
        .gifts-container {
            padding: 4.5rem 1.5rem;
            gap: 1rem;

            .gifts-cards {
                gap: 1rem;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                max-width: 1328px;
            }

            button {
                width: fit-content;
                margin-top: 0.5rem;
            }
        }
    }
`