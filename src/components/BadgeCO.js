import styled from "styled-components";

const colorSchemes = [
    {
        'badgeColor' : 'var(--color-neutral)',
        'textColor'  : 'var(--color-neutral-50)'
    },
    {
        'badgeColor' : 'var(--color-neutral-50)',
        'textColor'  : 'var(--color-neutral)'
    },
    {
        'badgeColor' : 'var(--color-primary-200)',
        'textColor'  : 'var(--color-primary-900)'
    },
    {
        'badgeColor' : 'var(--color-primary-300)',
        'textColor'  : 'var(--color-primary-900)'
    },
    {
        'badgeColor' : 'var(--color-primary-400)',
        'textColor'  : 'var(--color-primary-900)'
    },
    {
        'badgeColor' : 'var(--color-primary-500)',
        'textColor'  : 'var(color-neutral-50)'
    },
    {
        'badgeColor' : 'var(--color-primary-600)',
        'textColor'  : 'var(color-neutral-50)'
    },
    {
        'badgeColor' : 'var(--color-primary-700)',
        'textColor'  : 'var(color-neutral-50)'
    },    
    {
        'badgeColor' : 'var(--color-primary-800)',
        'textColor'  : 'var(color-neutral-50)'
    },    
    {
        'badgeColor' : 'var(--color-primary-900)',
        'textColor'  : 'var(color-neutral-50)'
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
        color: ${props => colorSchemes[props.$themeIndex].textColor};
        white-space: no;
    }
`
