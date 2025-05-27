import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        color-scheme: dark light;

        --color-primary: light-dark( #7305E6, #9638FF);
        --color-secondary: #DDA6FF; // NÃO USADA
        --color-tertiary: #8A45C6;  //excluir posteriormente NÃO USADA

        // essas 3 estão sendo usadas mas acho que faria mais sentido trocar elas pelas suas perctivas 
        --color-neutral: light-dark( #E6E6E6, #1A1A1A);
        --color-neutral-secondary: light-dark( #808080, #808080);
        --color-content-neutrals-tertiary: light-dark( #CCCCCC, #333333);


        /* variações da paleta - ainda tenho que dar uma olhada melhor nas cores que são usadas */

        // PRIMARY
        --color-primary-950: light-dark( #2B054D, #E5D3FF); // Ainda não usou
        --color-primary-900: light-dark( #3E0672, #D0ACFF); 
        --color-primary-800: light-dark( #510698, #BB86FF); 
        --color-primary-700: light-dark( #6206BF, #A85FFF); 
        --color-primary-600: light-dark( #7305E6, #9638FF); 
        --color-primary-500: light-dark( #8414FD, #8414FD); 
        --color-primary-400: light-dark( #9638FF, #7305E6);
        --color-primary-300: light-dark( #A85FFF, #6206BF);
        --color-primary-200: light-dark( #BB86FF, #510698);
        --color-primary-100: light-dark( #D0ACFF, #3E0672); // Ainda não usou
        --color-primary-50:  light-dark( #E5D3FF, #2B054D); // Ainda não usou

        // NEUTRALS
        --color-neutral-950: light-dark( #000000, #FFFFFF); // Ainda não usou
        --color-neutral-900: light-dark( #1A1A1A, #E6E6E6); // Ainda não usou
        --color-neutral-800: light-dark( #333333, #CCCCCC);
        --color-neutral-700: light-dark( #4D4D4D, #B3B3B3); // Ainda não usou
        --color-neutral-600: light-dark( #666666, #999999); 
        --color-neutral-500: light-dark( #808080, #808080); // Ainda não usou
        --color-neutral-400: light-dark( #999999, #666666); 
        --color-neutral-300: light-dark( #B3B3B3, #4D4D4D); // Ainda não usou
        --color-neutral-200: light-dark( #CCCCCC, #333333); // Ainda não usou
        --color-neutral-100: light-dark( #E6E6E6, #1A1A1A); // Ainda não usou
        --color-neutral-50:  light-dark( #FFFFFF, #000000);

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