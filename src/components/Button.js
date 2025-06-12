import styled from "styled-components";

const Button = styled.button`
    --padding: 0.75rem 1.5rem;
    --transition-duration: 0.15s;
    --background: var(--brand-primary);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    padding: var(--padding);
    gap: 0.5rem;
    border-radius: 0;
    border: var(--brand-primary);
    background-color: var(--background);
    transition: var(--transition-duration);
    white-space: nowrap;
    text-align: center;
    color: var(--content-neutrals-fixed-white);

    background-image: linear-gradient(var(--background-neutrals-inverse), var(--background-neutrals-inverse)); /* Coloca um background branco em cima do botão */
    background-size: 200%;                                                              /* faz o background-position com porcentagem funcionar */
    background-position-x: 200%;                                                        /* Tira o background branco do lugar */
    background-repeat: no-repeat;

    &:disabled, &:disabled:hover, &:disabled:focus-visible {
        --background: var(--background-neutrals-tertiary);
        color: var(--background-neutrals-primary);
        background-position-x: 200%; 
        cursor: not-allowed;
    }

    &:hover, &:focus-visible {
        background-position-x: 90%;     /* Coloca o background de volta no lugar */
        color: var(--content-neutrals-inverse);

        svg path {
            fill: var(--brand-primary);
        }
    }

    &:focus-visible {
        outline: 2px solid var(--brand-primary);
        outline-offset: 2px;
    }
`

export default Button;