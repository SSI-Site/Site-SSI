import styled from "styled-components";

const Button = styled.button`
    --padding: 0.75rem 1.5rem;
    --transition-duration: 100ms;
    --background: var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.75rem;
    padding: var(--padding);
    gap: 0.5rem;
    border-radius: 0;
    border: var(--color-primary);
    background-color: var(--background);
    transition: var(--transition-duration);
    white-space: nowrap;
    text-align: center;

    background-image: linear-gradient(var(--color-neutral-50), var(--color-neutral-50)); /* Coloca um background branco em cima do botão */
    background-size: 200%;                                                              /* faz o background-position com porcentagem funcionar */
    background-position-x: 200%;                                                        /* Tira o background branco do lugar */
    background-repeat: no-repeat;

    &:disabled, &:disabled:hover, &:disabled:focus-visible {
        --background: var(--color-neutral-800);
        color: var(--color-neutral-600);
        background-position-x: 200%; 
        cursor: not-allowed;
    }

    &:hover, &:focus-visible {
        background-position-x: 90%;     /* Coloca o background de volta no lugar */
        color: var(--color-primary);

        svg path {
            fill: var(--color-primary);
        }
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

    @media (min-width:560px) {
        height: 3rem;
    }
`

export default Button;