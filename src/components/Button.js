import styled from "styled-components";

const Button = styled.button`
    --padding: 0.75em 0;
    --out-space: 0.3em;
    --transition-duration: 500ms;
    --background: var(--color-primary);

    width: 100%;
    padding: var(--padding);
    border-radius: 9px;
    border: var(--color-primary);
    background-color: var(--background);
    transition: var(--transition-duration);

    :disabled {
        --background: RGBA(98,97,80,0.16);
        --border: 1px solid gray;
        cursor: unset;
    }

    &:hover {
        --background: #4C286C;
    }

    &:active {
        --background: #63358D;
    }
`

export default Button;