import styled, { css } from "styled-components";

const SecondaryButton = styled.button`
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
    border: 2px solid var(--background-neutrals-inverse);
    background-color: transparent;
    transition: var(--transition-duration);
    white-space: nowrap;
    text-align: center;

    background-image: linear-gradient(var(--background-neutrals-inverse), var(--background-neutrals-inverse)); /* Coloca um background branco em cima do botão */
    background-size: 200%;
    background-position-x: 200%;
    background-repeat: no-repeat;

    &:disabled {
        --background: var(--background-neutrals-tertiary);
        color: var(--background-neutrals-primary);
        cursor: unset;
        pointer-events: none;
        border: 2px solid var(--outline-neutrals-secondary);
    }

    &:hover, &:focus-visible {
        background-position-x: 90%;
        color: var(--content-neutrals-inverse);

        ${(props) =>
          !props.$noSvgColorChange && css`
                svg path {
                    fill: var(--content-neutrals-inverse);
                }
        `}
    }

    &:focus-visible {
        outline: 2px solid var(--background-neutrals-inverse);
        outline-offset: 2px;
    }
`

export default SecondaryButton;