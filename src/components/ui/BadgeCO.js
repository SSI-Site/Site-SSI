import styled from "styled-components";

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
                borderColor: '#9638FF'
            };
        case 'Comercial e Financeiro':
        case 'Infraestrutura':
        case 'Sites':
            return {
                color: '#9638FF', 
                borderColor: 'var(--purple-light-purple, #D0ACFF)'
            };
        default:
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
 * @param {string} props.text 
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
        font-family: var(--Typograph-Main-Font-Family-At-Hauss-Aero, "At Hauss Aero", sans-serif); // essa fonte nao esta sendo 100% fiel ao que estamos esperando, precisamos investigar depois para ficar igual ao figma
        font-size: 0.875rem;                                                                            
        font-weight: 700;
        line-height: 1.5rem; 
        
        color: ${props => props.$color};
        margin: 0; 
    }
`;