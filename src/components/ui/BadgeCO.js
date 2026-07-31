import styled from "styled-components";

/**
 * Retorna as cores da borda e do texto com base no nome do setor.
 * As cores foram mapeadas conforme o Figma atualizado.
 */
const getBadgeColors = (text) => {
    switch (text) {
        case 'Diretoria':
        case 'Parcerias':
            return {
                color: 'var(--content-neutrals-primary, #FFF)',
                borderColor: 'var(--content-neutrals-primary, #FFF)'
            };
        case 'Criação e Comunicação':
        case 'Palestrantes':
            return {
                color: '#9638FF',
                borderColor: '#9638FF' // var(--brand-primary) ou equivalente, se existir no projeto
            };
        case 'Comercial e Financeiro':
        case 'Infraestrutura':
        case 'Sites':
            return {
                // A cor do texto para esses setores no Figma também era #9638FF,
                // mas a borda é mais clara
                color: '#9638FF', 
                borderColor: 'var(--purple-light-purple, #D0ACFF)'
            };
        default:
            // Cor de fallback caso adicionem um novo setor no futuro
            return {
                color: 'var(--content-neutrals-primary, #FFF)',
                borderColor: 'var(--content-neutrals-primary, #FFF)'
            };
    }
};

/**
 * Componente de etiqueta (Badge) para setores da Comissão Organizadora.
 * 
 * @param {Object} props
 * @param {string} props.text - O texto/setor que será exibido dentro do badge.
 */
const BadgeCO = ({ text }) => {
    const { color, borderColor } = getBadgeColors(text);

    return (
        <BadgeWrapper $color={color} $borderColor={borderColor}>
            <p>{text}</p>
        </BadgeWrapper>
    )
}

export default BadgeCO;

const BadgeWrapper = styled.div`
    width: fit-content;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.3125rem 0.625rem; 
    border-radius: 0.1875rem; 
    background-color: transparent;
    border: 2px solid ${props => props.$borderColor};

    p {
        font-family: var(--Typograph-Main-Font-Family-At-Hauss-Aero, "At Hauss Aero", sans-serif);
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.5rem; 
        
        color: ${props => props.$color};
        margin: 0; 
    }
`;