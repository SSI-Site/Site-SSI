import styled from "styled-components";

const Button = styled.button`
    --padding: 0.75rem 1.5rem;
    --transition-duration: 100ms;
    --background: var(--color-primary);

    width: 100%;
    height: 2.75rem;
    padding: var(--padding);
    border-radius: 0;
    border: var(--color-primary);
    background-color: var(--background);
    transition: var(--transition-duration);
    white-space: nowrap;

    background-image: linear-gradient(var(--color-neutral-50), var(--color-neutral-50)); /* Coloca um background branco em cima do botão */
    background-size: 200%;                                                              /* faz o background-position com porcentagem funcionar */
    background-position-x: 200%;                                                        /* Tira o background branco do lugar */
    background-repeat: no-repeat;

    :disabled {
        --background: var(--color-neutral-800);
        color: var(--color-neutral-600);
        cursor: unset;
        pointer-events: none;
    }

    &:hover, &:focus {
        background-position-x:100%;     /* Coloca o background de volta no lugar */
        color: var(--color-primary);
    }

    &:active, &:focus {
        background-position-x:100%;
        color: var(--color-primary);
    }

    @media (min-width:560px) {
        height: 3rem;
    }
`

export default Button;