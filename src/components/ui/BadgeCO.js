import styled from "styled-components";

const badgeColorsMap = {
    'Diretoria' : { 
        color: 'var(--content-neutrals-primary)', 
        borderColor: 'var(--content-neutrals-primary)' 
    },
    'Parcerias' : { 
        color: 'var(--content-neutrals-primary)', 
        borderColor: 'var(--content-neutrals-primary)' 
    },
    'Criação e Comunicação': { 
        color: 'var(--brand-purple-500)', 
        borderColor: 'var(--brand-purple-500)' 
    },
    'Palestrantes': { 
        color: 'var(--brand-purple-500)', 
        borderColor: 'var(--brand-purple-500)' 
    },
    'Comercial e Financeiro': { 
        color: 'var(--content-neutrals-primary)', 
        borderColor: 'var(--content-neutrals-primary)' 
    },
    'Infraestrutura': { 
        color: 'var(--brand-purple-200)', 
        borderColor: 'var(--brand-purple-200)' 
    },
    'Sites': { 
        color: 'var(--brand-purple-200)', 
        borderColor: 'var(--brand-purple-200)' 
    }
};

const defaultColors = {
    color: 'var(--content-neutrals-primary)', 
    borderColor: 'var(--content-neutrals-primary)' 
};

/**
 * Componente de etiqueta (Badge) para setores da Comissão Organizadora.
 * 
 * @param {Object} props
 * @param {string} props.text 
 */
const BadgeCO = ({ text }) => {
    const { color, borderColor } = badgeColorsMap[text] || defaultColors;
    
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
    border: 3px solid ${props => props.$borderColor};

    p {
        font-size: 0.875rem;                                                                            
        font-weight: 700;
        line-height: 1.5rem; 
        
        color: ${props => props.$color};
        margin: 0; 
    }
`;