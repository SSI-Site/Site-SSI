import styled from "styled-components";

const Button = styled.button`
    --padding: 0.75rem 1.5rem;
    --transition-duration: 500ms;
    --background: var(--color-primary);

    width: 100%;
    height: 2.75rem;
    padding: var(--padding);
    border-radius: 0;
    border: var(--color-primary);
    background-color: var(--background);
    transition: var(--transition-duration);
    white-space: nowrap;

    :disabled {
        --background: var(--color-neutral-800);
        color: var(--color-neutral-600);
        cursor: unset;
        pointer-events: none;
    }

    &:hover {
        --background: var(--color-neutral-50);
        color: var(--color-primary);
    }

    &:active {
        --background: var(--color-neutral-50);
        color: var(--color-primary);
    }

    @media (min-width:560px) {
        height: 3rem;
    }
`

export default Button;