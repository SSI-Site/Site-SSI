import Meta from '../src/infra/Meta';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

// Components
import PalestranteCard from '../src/components/PalestranteCard';
import LoadingSvg from '../public/loading.svg'

//saphira
import saphira from '../services/saphira';
import Image from 'next/image';

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

    return (
        <PalestrantesContainer>
          <Meta title='Palestrantes | Semana de Sistemas de Informação' 
          description = 'Conheça os palestrantes da SSI 2025! Referências em tecnologia, inovação e mercado de TI que compartilharão suas experiências com o público.'
          keywords='palestrantes SSI, especialistas em TI, convidados SSI 2025, nomes da tecnologia, profissionais da tecnologia, lideranças em TI, conferencistas SSI, oradores evento TI'
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

`

const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    max-width: 100%;
  }
`

export default Palestrantes