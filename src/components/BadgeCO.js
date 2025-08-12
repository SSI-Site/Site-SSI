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

const BadgeCO = ({ text, themeIndex }) => {

    return (
        <BadgeWrapper $themeIndex = {themeIndex}>
            <p>{text}</p>
        </BadgeWrapper>
    )
}

export default BadgeCO;


const BadgeWrapper = styled.div`
    width: fit-content;
    padding: 0.125rem 0.25rem;
    //max-width: 170px;
    background-color: ${props => colorSchemes[props.$themeIndex].badgeColor};
    display: inline-block;

    p {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => colorSchemes[props.$themeIndex].textColor};
        white-space: no;
    }
`
