import styled from "styled-components";

// Mapeamento direto pelos textos que a aplicação envia
const badgeThemeMap = {
    'Workshop': {
        badgeColor: 'var(--brand-purple-400)',
        textColor: 'var(--content-neutrals-fixed-white)'
    },
    'Palestra': {
        badgeColor: 'var(--brand-purple-fixed-500)',
        textColor: 'var(--content-neutrals-fixed-white)'
    },
    'Presencial': {
        badgeColor: 'var(--background-neutrals-primary)',
        textColor: 'var(--content-neutrals-primary)'
    },
    'Online': {
        badgeColor: 'var(--brand-purple-900)',
        textColor: 'var(--content-neutrals-fixed-white)'
    }
};

const defaultTheme = {
    badgeColor: 'var(--background-neutrals-inverse)',
    textColor: 'var(--content-neutrals-inverse)'
};

/**
 * Componente de etiqueta (Badge) para as palestras.
 * 
 * @param {Object} props
 * @param {string} props.text 
 */
const BadgeLecture = ({ text }) => {
    // Busca o tema baseado no texto ou usa o default
    const theme = badgeThemeMap[text] || defaultTheme;

    return (
        <BadgeWrapper $badgeColor={theme.badgeColor} $textColor={theme.textColor}>
            <p>{text}</p>
        </BadgeWrapper>
    )
}

export default BadgeLecture;

const BadgeWrapper = styled.div`
    width: fit-content;
    padding: 0.125rem 0.25rem;
    background-color: ${props => props.$badgeColor};
    display: inline-block;
    border-radius: 0.375rem;

    p {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${props => props.$textColor};
    }

    @media (min-width: 800px) {
        p {
            font-size: 0.875rem;
        }
    }
`;