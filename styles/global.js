import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        --color-primary: #9638FF;   //Ajustada
        --color-secondary: #DDA6FF; //Ajustada
        --color-tertiary: #8A45C6;  //excluir posteriormente
        --color-neutral: #161616;   //Ajustada
        --color-neutral-secondary: #4B4B4B;
        --color-background-neutrals-secondary: #252525;
        --color-background-neutrals-tertiary: #4B4B4B;
        --color-content-neutrals-tertiary: #CACACA;

        /* variações da paleta - ainda tenho que dar uma olhada melhor nas cores que são usadas */
        --color-primary-900: #390078; 
        --color-primary-800: #6618BB; 
        --color-primary-700: #7E25E1; 
        --color-primary-600: #9638FF; 
        --color-primary-500: #AF52FF; 
        --color-primary-400: #C66EFF;
        --color-primary-300: #D98DFF;
        --color-primary-200: #DDA6FF;
        --color-neutral-900: #000000; 
        --color-neutral-800: #252525; 
        --color-neutral-700: #3C3C3C; // Ainda não usou
        --color-neutral-600: #545454; // Ainda não usou
        --color-neutral-500: #6C6C6C; // Ainda não usou
        --color-neutral-400: #858585; // Ainda não usou
        --color-neutral-300: #A0A0A0; // Ainda não usou
        --color-neutral-100: #D7D7D7; // Ainda não usou
        --color-neutral-50: #FFFFFF;  

        /* 16 pixels (100% = 16 pixels) */
        font-size: 100%;
    }

    #nprogress .bar {
        background: var(--color-primary-700);
        filter: brightness(110%)
    }

    html {
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: var(--color-neutral);
        -webkit-tap-highlight-color:  transparent; // evita highlight ao toque para mobile
    }

    section {
        width: 100%;
        height: fit-content;
        padding-inline: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > div {
            width: 100%;
            max-width: 1328px;
            margin: 0;
            padding: 0;
        }
    }

    h1 {
        font: 700 2.5rem/3rem 'AT Aero Bold';
    }

    h2 {
        font: 700 2rem/2.5rem 'AT Aero Bold';
    }

    h3 {
        font: 700 1.5rem/1.75rem 'AT Aero Bold';
    }

    h4 {
        font: 700 1.25rem/1.5rem 'AT Aero Bold';
    }

    h5 {
        font: 700 1.125rem/1.5rem 'AT Aero Bold';
    }

    h6 {
        font: 700 1rem/1.5rem 'AT Aero Bold';
    }

    button {
        font: 700 1rem/1.25rem 'AT Aero Bold';
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    body, p, span, a {
        font: 700 0.875rem/1.5rem 'AT Aero';
    }

    a {
        text-decoration: none;
        
        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }
    }

    label {
        font: 700 1rem/1.25rem 'AT Aero';
    }
    
    input[type=text], select, option {
        font: 700 1rem/1.25rem 'AT Aero';
        color: var(--color-neutral-400);
        background-color: var(--color-neutral-50);
        border: 0;
    }

    button, h1, h2, h3, h4, h5, h6, body, p, span, a, label {
        color: var(--color-neutral-50);
        text-align: left;
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        text-transform: none;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        text-transform: none;
    }
    
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        text-transform: none;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        text-transform: none;
    }

    ::placeholder { /* Recent browsers */
        text-transform: none;
        font: 700 1rem/1.25rem 'AT Aero';
        color: var(--color-neutral-400);
    }

    @media (min-width:480px) {

    }

    @media (min-width:560px) {
        
    }

    @media (min-width:600px) {

    }

    @media (min-width:801px) {
        h1 {
            font: 700 4rem/4.5rem 'AT Aero Bold';
        }

        h2 {
            font: 700 3.5rem/4.5rem 'AT Aero Bold';
        }

        h3 {
            font: 700 3rem/3.5rem 'AT Aero Bold';
        }

        h4 {
            font: 700 2.5rem/3.5rem 'AT Aero Bold';
        }

        h5 {
            font: 700 2rem/2.5rem 'AT Aero Bold';
        }

        h6 {
            font: 700 1.5rem/2rem 'AT Aero Bold';
        }

        button {
            font: 700 1rem/1.25rem 'AT Aero Bold';
            cursor: pointer;
        }

        body, p, span, a {
            font: 700 1rem/1.5rem 'AT Aero';
        }

        label {
            font: 700 1rem/1.25rem 'AT Aero';
        }

        input[type=text] {
            font: 700 1rem/1.25rem 'AT Aero';
            
            :disabled {
                cursor: not-allowed;
            }
        }
        
        select, option {
            font: 700 1rem/1.25rem 'AT Aero';
        }

        ::placeholder { /* Recent browsers */
            font: 700 1rem/1.25rem 'AT Aero';
        }
    }

    @media (min-width:1021px) {
       
    }

    @media (min-width:1365px) {

    }

    @media (min-width:2200px) {

    }
`