import styled from "styled-components";

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

const BadgeLecture = ({ text, themeIndex}) => {
    return (
        <BadgeWrapper $themeIndex = {themeIndex}>
            <p>{text}</p>
        </BadgeWrapper>
    )
}

export default BadgeLecture;


const BadgeWrapper = styled.div`
    width: fit-content;
    padding: 0rem 0.25rem;
    background-color: ${props => colorSchemes[props.$themeIndex].badgeColor};
    display: inline-block;
    border-radius: 0.375rem;

    p {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${props => colorSchemes[props.$themeIndex].textColor};
    }

    @media (min-width: 800px) {
        padding: 0.125rem 0.325rem;

        p {
            font-size: 0.875rem;
        }
    }
`
