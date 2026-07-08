import styled, { css } from 'styled-components';
import semana from '../../utils/semana';
import { eventDetails } from '../../data/eventDetails';

const DateStamp = ({ dayIndex, weekDay, dateStr, isActive }) => {

  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth() + 1;
  const currentDay = current.getDate();
  const todayStr = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
  const thisBlockDate = eventDetails.logic.dayFull[dayIndex - 1];


  return (
    <DateWrapper $isActive={isActive}>
      <div className='day-emoji'>
        <h6 className='day'> {weekDay}</h6>
      </div>
      {/* Texto exibido no bloco de forma totalmente dinâmica */}
      <div className='day-emoji'>
        <h6 className='week-day'>{dateStr}</h6>
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

    svg path {
            fill: ${props => props.$isActive ? 'var(--content-neutrals-fixed-white)' : 'var(--content-neutrals-primary)'};
    }

    h6 {
        color: ${props => props.$isActive ? 'var(--content-neutrals-fixed-white)' : 'var(--background-neutrals-inverse)'};
    }

    &:hover, &:focus-visible {
        background-position-x: 100%;

        h6 {
            color: var(--brand-primary);
        }

        svg path {
            fill: var(--brand-primary);
        }
        
    }

    &:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 4px;
    }

    .day-emoji {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    p {
        font-family: 'AT Aero Bold'; 
    }

    /* Visualização Desktop - Alinhado com o Novo Figma */
    /* Visualização Desktop - Alinhado com o Novo Figma */
    @media (min-width: 840px) {
        width: 15.625rem;
        height: 7.6875rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.625rem; /* Mantém o gap do figma */
        border-radius: 0.83331rem; /* Mantém o arredondamento do figma */
        border: 2.5px solid #FFF; /* Mantém a borda branca */
        transition: 0.15s all ease;
        
        /* 1. Definição do Fundo Base do Card */
        background-image: ${props => props.$isActive ?
    'linear-gradient(98deg, var(--background-brand-primary, #9638FF) 0.52%, #5A2299 97.73%)' :
    'linear-gradient(to right, var(--background-neutrals-secondary) 50%, var(--content-neutrals-fixed-white) 50%)'};
        background-size: 200%;
        background-position-x: 200%;

        /* 2. Configuração Base dos Containers de Texto */
        .day-emoji {
            display: flex;
            align-items: center;
            justify-content: center;
            background: unset !important;
            background-clip: unset !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
        }

        /* 3. LÓGICA DO CARD SELECIONADO (ATIVO) */
        ${props => props.$isActive && css`
            h6 {
                color: #FFF !important; /* Texto sempre branco no fundo roxo */
                background: unset !important;
                -webkit-text-fill-color: unset !important;
            }
            
            &:hover {
                background-position-x: 200%; /* Mantém o fundo roxo travado sem mover */
                h6 {
                    color: #FFF !important;
                }
            }
        `}

        /* 4. LÓGICA DO CARD NÃO SELECIONADO (INATIVO) */
        ${props => !props.$isActive && css`
            /* Aplica o gradiente colorido DIRETAMENTE nas tags h6 */
            h6 {
                background: var(--brand-gradient-purple-bg-primary-foreground, linear-gradient(180deg, var(--backup-neutral-50, #FFF) 0%, var(--backup-primary-50, #FDEEFF) 40%, var(--purple-light-purple, #D0ACFF) 100%)) !important;            
                background-clip: text !important;
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important; /* Faz o texto exibir o gradiente */
                transition: 0.15s all ease;
            }

            /* Quando passar o mouse (Com Hover) */
            &:hover {
                background-position-x: 100%; 
                
                h6 {
                    background: unset !important; 
                    background-clip: unset !important;
                    -webkit-background-clip: unset !important;
                    -webkit-text-fill-color: unset !important;
                    color: #000000 !important; /* Força o texto a ficar PRETO sobre o slide branco */
                }
            }
        `}
    }
}
`
