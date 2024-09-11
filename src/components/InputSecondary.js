import styled from "styled-components";

const InputSecondary = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.75rem;
    padding: var(--padding);
    gap: 0.5rem;
    border-radius: 0;
    border: 2px solid white !important;
    background: var(--color-neutral-800) !important;
    color: white !important; 
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
    text-align: center;
    font-family: 'AT Aero Bold';

    /* Remove setas do input number em navegadores */
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Remove setas do input number no Firefox */
    &[type="number"] {
        -moz-appearance: textfield;
    }

    &:focus-visible {
        border: 2px solid var(--color-primary) !important;
    }

    @media (min-width:560px) {
        height: 3rem;
    }
`;

export default InputSecondary;
