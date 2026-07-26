import styled from "styled-components";

/**
 * Paleta de temas disponíveis para o Badge.
 * Utiliza variáveis CSS do Design System global para garantir consistência.
 * O índice (0 a 9) deste array é utilizado na prop 'themeIndex' do componente.
 */
const colorSchemes = [
    {
        'badgeColor' : 'var(--background-neutrals-inverse)',
        'textColor'  : 'var(--content-neutrals-inverse)'
    },
    {
        'badgeColor' : 'var(--background-neutrals-primary)',
        'textColor'  : 'var(--content-neutrals-primary)'
    },
    {
        'badgeColor' : 'var(--brand-purple-200)',
        'textColor'  : 'var(--content-neutrals-inverse)'
    },
    {
        'badgeColor' : 'var(--brand-purple-300)',
        'textColor'  : 'var(--content-neutrals-fixed-white)'
    },
    {
        'badgeColor' : 'var(--brand-purple-400)',
        'textColor'  : 'var(--content-neutrals-fixed-white)'
    },
    {
        'badgeColor' : 'var(--brand-purple-500)',
        'textColor'  : 'var(--content-neutrals-fixed-white)'
    },
    {
        'badgeColor' : 'var(--brand-purple-600)',
        'textColor'  : 'var(--content-neutrals-fixed-white)'
    },
    {
        'badgeColor' : 'var(--brand-purple-700)',
        'textColor'  : 'var(--content-neutrals-fixed-white)'
    },    
    {
        'badgeColor' : 'var(--brand-purple-800)',
        'textColor'  : 'var(--content-neutrals-fixed-white)'
    },    
    {
        'badgeColor' : 'var(--brand-purple-900)',
        'textColor'  : 'var(--content-neutrals-fixed-white)'
    },
]

/**
 * Componente de etiqueta (Badge) flexível para categorização e status.
 * 
 * @param {Object} props
 * @param {string} props.text - O texto que será exibido dentro do badge.
 * @param {number} props.themeIndex - Índice numérico (0 a 9) que seleciona a combinação de cores do colorSchemes.
 * @param {boolean} props.rounded - Define o formato: 'true' aplica bordas arredondadas e fonte menor; 'false' aplica bordas retas e fonte padrão.
 * 
 * @example
 * <BadgeCO text="Novo" themeIndex={3} rounded={true} />
 */
const BadgeCO = ({ text, themeIndex, rounded }) => {
    return (
        // Utilizamos o prefixo '$' (Transient Props) para evitar que essas propriedades vazem para o HTML final
        <BadgeWrapper $themeIndex={themeIndex} $rounded={rounded}>
            <p>{text}</p>
        </BadgeWrapper>
    )
}

export default BadgeCO;


const BadgeWrapper = styled.div`
    /* Ajusta a largura para envolver perfeitamente o texto e permite renderização lado a lado */
    width: fit-content;
    display: inline-block;
    padding: 0rem 0.25rem;

    /* A cor de fundo é recuperada dinamicamente do array utilizando o índice recebido via prop */
    background-color: ${props => colorSchemes[props.$themeIndex].badgeColor};
    
    /* Alterna o arredondamento (border-radius) baseado na prop $rounded */
    border-radius: ${props => props.$rounded ? '0.375rem' : '0'};

    p {
        /* A prop $rounded também influencia o tamanho da fonte */
        font-size: ${props => props.$rounded ? '0.75rem' : '0.875rem'};
        font-weight: 400;
        
        /* A cor do texto também acompanha a paleta selecionada pelo themeIndex */
        color: ${props => colorSchemes[props.$themeIndex].textColor};
    }
`