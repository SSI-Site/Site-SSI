import styled from 'styled-components'; 

/**
 * Componente que renderiza um selo de data interativo (Desktop Only).
 * Exibe o dia da semana e a data, apresentando um efeito visual de preenchimento (slide) 
 * ao passar o mouse ou focar pelo teclado.
 * 
 * @TODO Acessibilidade: Este componente possui estados interativos que não são totalmente acessíveis.
 * 
 * @param {Object} props
 * @param {string} props.weekDay - Dia da semana a ser exibido (ex: "Sexta").
 * @param {string} props.dateStr - Data formatada a ser exibida (ex: "12/08").
 * @param {boolean} props.isActive - Define se o selo está no estado ativo/selecionado.
 */
const DateStamp = ({ weekDay, dateStr, isActive }) => {
  return (
    <DateWrapper $isActive={isActive}>
        <h6>{weekDay} <br /> {dateStr}</h6>
    </DateWrapper>
  )
}

export default DateStamp;

const DateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    /* Dimensões e espaçamentos fixos de Desktop */
    width: 15.625rem;
    height: 7.6875rem;
    padding: 0.75rem 1.5rem;
    gap: 1rem; 
    border-radius: 0.83331rem; 
    
    /* Borda transparente se ativo, sólida se inativo */
    border: ${props => props.$isActive ? 'unset' : '2.5px solid var(--content-neutrals-primary)'}; 
    
    /* 
       Trick de animação: o background tem o dobro do tamanho.
       A metade da ESQUERDA (0% a 50%) é Branca.
       A metade da DIREITA (50% a 100%) tem as cores do Figma (98deg) quando ativa.
    */
    background-image: ${props => props.$isActive
        ? 'linear-gradient(90deg, var(--content-neutrals-fixed-white) 0%, var(--content-neutrals-fixed-white) 50%, var(--brand-primary, #9638FF) 50%, #5A2299 100%)'
        : 'linear-gradient(90deg, var(--content-neutrals-fixed-white) 0%, var(--content-neutrals-fixed-white) 50%, var(--background-neutrals-secondary) 50%, var(--background-neutrals-secondary) 100%)'
    };
    
    background-size: 200% 100%;
    
    /* Posição inicial: mostra a metade da DIREITA (colorida/neutra) */
    background-position-x: 100%;
    transition: all 0.2s ease-in-out; 

    /* --- Textos no Estado de Repouso --- */
    h6 {
        margin: 0;
        text-align: center;
        font-size: var(--Typograph-Heading-H6-size, 1.5rem);
        line-height: var(--Typograph-Heading-H6-height, 2rem);
        font-style: normal;
        font-weight: 700;
        transition: 0.2s ease-in-out;

        /* Fundo limpo se ativo. Gradiente se inativo. */
        background: ${props => props.$isActive 
            ? 'unset' 
            : `linear-gradient(
                180deg, 
                light-dark(var(--purple-purple, #6206BF), var(--backup-neutral-50, #FFF)) 0%, 
                light-dark(var(--backup-primary-800, #6618BB), var(--backup-primary-50, #FDEEFF)) 40%, 
                light-dark(var(--purple-dark-purple, #2B054D), var(--purple-light-purple, #D0ACFF)) 100%
            )`}; 

        -webkit-background-clip: ${props => props.$isActive ? 'unset' : 'text'};
        background-clip: ${props => props.$isActive ? 'unset' : 'text'}; 
        
        -webkit-text-fill-color: ${props => props.$isActive ? '#FFF' : 'transparent'};
        color: ${props => props.$isActive ? '#FFF' : 'unset'};
    }

    /* --- Estados de Interação (Hover / Focus) --- */
    &:hover, 
    &:focus-visible {
        cursor: pointer;
        
        /* Desliza o background para 0%, revelando a metade ESQUERDA (Branca) */
        background-position-x: 0%;
        
        h6 {
            background: unset; 
            -webkit-background-clip: unset;
            background-clip: unset;
            
            /* Como o fundo fica branco, a cor da fonte assume esse valor: */
            color: light-dark(#ffffff, #000000); 
            -webkit-text-fill-color: currentColor; 
        }
    }

    &:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 4px;
    }
`