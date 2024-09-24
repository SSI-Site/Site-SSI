import styled, { css } from "styled-components";

const SecondaryButton = styled.button`
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
    border: 2px solid white;
    background-color: transparent;
    transition: var(--transition-duration);
    white-space: nowrap;
    text-align: center;

    background-image: linear-gradient(white, white); /* Coloca um background branco em cima do botão */
    background-size: 200%;
    background-position-x: 200%;
    background-repeat: no-repeat;

    &:disabled {
        --background: var(--color-neutral-800);
        color: var(--color-neutral-600);
        cursor: unset;
        pointer-events: none;
    }

    &:hover, &:focus-visible {
        background-position-x: 90%;
        color: var(--color-primary);

        ${(props) =>
          !props.$noSvgColorChange && css`
                svg path {
                    fill: var(--color-primary);
                }
        `}
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

    @media (min-width:560px) {
        height: 3rem;
    }
`

export default SecondaryButton;