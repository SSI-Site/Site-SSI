import Meta from '../src/infra/Meta';
import PalestranteCard from '../src/components/PalestranteCard';
import styled from 'styled-components';

const Palestrantes = () => {
    return (
        <PalestrantesContainer>
          <Meta title='Palestrantes | Semana de Sistemas de Informação' 
          description = 'Conheça os palestrantes da SSI 2025! Referências em tecnologia, inovação e mercado de TI que compartilharão suas experiências com o público.'
          keywords='palestrantes SSI, especialistas em TI, convidados SSI 2025, nomes da tecnologia, profissionais da tecnologia, lideranças em TI, conferencistas SSI, oradores evento TI'
          />
          <PalestrantesWrapper>
            <h1>Palestrantes</h1>

            <PalestranteCard/>
            <PalestranteCard/>

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

`

export default Palestrantes