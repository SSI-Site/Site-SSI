import styled, { css } from 'styled-components';


const DateStamp = ({ weekDay, dateStr, isActive }) => {

  return (
    <DateWrapper $isActive={isActive}>
      <div className='text'>
          <div className='day'>
            <h6> {weekDay} <br/> {dateStr}</h6>
          </div>
      </div>
    </DateWrapper>
  )
}

export default DateStamp;


const DateWrapper = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    gap: 0.5rem;
    transition: 0.15s all ease;
    background-image: ${props => props.$isActive ? 'linear-gradient(to right, var(--brand-primary) 50%, var(--content-neutrals-fixed-white) 50%)' : 'linear-gradient(to right, var(--background-neutrals-secondary) 50%, var(--content-neutrals-fixed-white) 50%)'};
    background-size: 200%;
    background-position-x: 200%;

    h6 {
        color: ${props => props.$isActive ? 'var(--content-neutrals-fixed-white)' : 'var(--background-neutrals-inverse)'};
    }

    &:hover, &:focus-visible {
        background-position-x: 100%;

        h6 {
            color: var(--brand-primary);
        }
        
    }

    &:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 4px;
    }

    .day {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    /* Visualização Desktop - Alinhado com o Novo Figma */
    @media (min-width: 840px) {
        width: 15.625rem;
        height: 7.6875rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem; 
        border-radius: 0.83331rem; 
        border: ${props => props.$isActive ? 'unset' : '2.5px solid var(--content-neutrals-primary)'}; 
        /* 2.5px solid var(--content-neutrals-primary) */
        transition: 0.2s ease-in-out; 
        
        /* efeito de slide quando passa o mouse */
        background-image: ${props => props.$isActive 
            ? 'linear-gradient(to right, var(--brand-primary, #9638FF) 50%, var(--content-neutrals-primary) 50%)' 
            : 'linear-gradient(to right, var(--background-neutrals-secondary) 50%, var(--content-neutrals-primary) 50%)'};
        background-size: 200%;
        background-position-x: 200%; /* Esconde a metade branca em repouso */

        .day {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        /* Estado de Repouso dos Textos (Sem Hover) */
        h6 {
            font-size: var(--Typograph-Heading-H6-size, 1.5rem);
            line-height: var(--Typograph-Heading-H6-height, 2rem);
            font-style: normal;
            font-weight: 700;

            transition: 0.2s ease-in-out;
            /* Se ativo: fundo limpo. Se inativo: aplica o gradiente lilás do Figma */
            background: ${props => props.$isActive 
            ? 'unset' 
            : `linear-gradient(
                180deg, 
                light-dark(var(--purple-purple, #6206BF), var(--backup-neutral-50, #FFF)) 0%, 
                light-dark(var(--backup-primary-800, #6618BB), var(--backup-primary-50, #FDEEFF)) 40%, 
                light-dark(var(--purple-dark-purple, #2B054D), var(--purple-light-purple, #D0ACFF)) 100%
            )`}; /* background que varia entre tema claro e escuro */

            background-clip: ${props => props.$isActive ? 'unset' : 'text'};
            -webkit-background-clip: ${props => props.$isActive ? 'unset' : 'text'};
            
            /* Se ativo: texto branco sólido. Se inativo: transparente para revelar o gradiente */
            -webkit-text-fill-color: ${props => props.$isActive ? '#FFF' : 'transparent'};
            color: ${props => props.$isActive ? '#FFF' : 'unset'};
        }

        /* Estado de Hover */
        &:hover, &:focus-visible {
            cursor: pointer;
            background-position-x: 100%; /* desliza e revelam o fundo branco */
            
            h6 {
                background: unset; 
                background-clip: unset;
                -webkit-background-clip: unset;
                
                
                -webkit-text-fill-color: light-dark(#FFFFFF, #000000); 
                color: light-dark(#FFFFFF, #000000); 
                // por algum motivo, essa parte tem que ser as cores puras, as variáveis
                // var(--content-neutrals-fixed-white) e var(--background-neutrals-inverse) não dão certo
            }
        }
    }
`
