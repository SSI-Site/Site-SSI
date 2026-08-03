import Meta from '../src/infra/seo/Meta';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

// Components
import PalestranteCard from '../src/components/features/speakers/PalestranteCard';
import LoadingSvg from '../public/images/ui/loading.svg'

//saphira
import saphira from '../services/saphira';
import Image from 'next/image';

import { eventDetails } from '../data/eventDetails'; 

// TEMPORÁRIO
import { LinkedInLogo, InstagramLogo, YouTubeLogo } from '../src/components/ui/SocialMediaLogos';

const Palestrantes = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [speakers, setSpeakers] = useState([])

    const getSpeakers = async() => {
      setIsLoading(true)
      try{
        const { data } = await saphira.getSpeakers()
        if (data) setSpeakers(data)
      }
      catch(err){
        console.log("Houve um erro na hora de obter os dados dos palestrantes:", err)
      }
      finally{
        setIsLoading(false)
      }
    }

    useEffect(() => {
      getSpeakers()
    }, [])


    {/* 
        =====================================================
        CONTEÚDO TEMPORÁRIO. BASTA DELETAR ESSE RETURN ABAIXO
        ===================================================== 
    */}
    return (
        <section style={{padding: '15rem 0', textAlign: 'center', gap: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Em breve você poderá conferir os palestrantes</h3>
            <p>Acompanhe nossas redes sociais para receber as atualizações em primeira mão.<br/>Não perca nenhuma novidade!</p>
            <div style={{display: 'flex', gap: '1rem', transform: 'scale(1.5)', alignItems: 'center', justifyContent: 'center', marginTop: '1rem'}}>
                <a
                    href="https://www.instagram.com/semanadesi/"
                    target="_blank"
                    aria-label="Instagram da Semana de Sistemas de Informação"
                >
                    {/*Instagram Logo*/}
                    <InstagramLogo />
                </a>

                <a
                    href="https://www.linkedin.com/company/comissão-organizadora-da-semana-de-sistemas-de-informação"
                    target="_blank"
                    aria-label="Linkedin da Semana de Sistemas de Informação"
                >
                    {/*Linkedin Logo*/}
                    <LinkedInLogo />
                </a>

                <a
                    href="https://www.youtube.com/@semanadesi"
                    target="_blank"
                    aria-label="YouTube da Semana de Sistemas de Informação"
                >
                    {/* YouTube Logo */}
                    <YouTubeLogo />
                </a>
            </div>
        </section>
    )

    return (
        <PalestrantesContainer>
          <Meta title='Palestrantes | Semana de Sistemas de Informação' 
          description = {`Conheça os palestrantes da SSI ${eventDetails.year}! Referências em tecnologia, inovação e mercado de TI que compartilharão suas experiências com o público.`}
          keywords={`palestrantes SSI, especialistas em TI, convidados SSI ${eventDetails.year}, nomes da tecnologia, profissionais da tecnologia, lideranças em TI, conferencistas SSI, oradores evento TI`}
          />
          <PalestrantesWrapper>
            <h1>Palestrantes</h1>

          {
            !isLoading && speakers.sort((a, b) => a.name.localeCompare(b.name)).map((speaker) => {
              return(
                <PalestranteCard key = {speaker.id} palestrante={speaker}/>
              )
            })
          }
          {
            isLoading &&
            <Loading>
              <Image
              src = {LoadingSvg}
              width={200}
              height={300}
              alt = "Loading..."
              />
            </Loading>
          }
          </PalestrantesWrapper>
        </PalestrantesContainer>
    )
    
}

const PalestrantesContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 1.5rem 1rem; 
`

const PalestrantesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1328px; // MATCH WEBSITE PATTERN
    gap: 1.5rem;
    /* gap: 0.5rem; */

    h1 {
        font: 700 2rem/2.25rem 'AT Aero Bold';
    }
`

const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    max-width: 100%;
    height: auto;
  }
`

export default Palestrantes