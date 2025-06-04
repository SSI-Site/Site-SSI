import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        color-scheme: dark light;   //Ajustada

        //  CONTENT NEUTRALS
            --content-neutrals-primary: #FFFFFF;
            --content-neutrals-secondary: #E6E6E6;
            --content-neutrals-tertiary: #CCCCCC;
            --content-neutrals-inverse: #1A1A1A;
            --content-neutrals-fixed-white: #FFFFFF;
            --content-neutrals-fixed-black: #000000;

        //  CONTENT ACCENT
            --content-accent-green: #046502;
            --content-accent-red: #DB0B14;

        //  BRAND PURPLE
            --brand-purple-200: #D0ACFF;
            --brand-purple-300: #BB86FF;
            --brand-purple-400: #A85FFF;
            --brand-purple-500: #9638FF;
            --brand-purple-600: #8414FD;
            --brand-purple-700: #7305E6;
            --brand-purple-800: #6206BF;
            --brand-purple-900: #510698;

        //  BRAND
            --brand-primary-light: #D0ACFF;
            --brand-primary: #9638FF;
            --brand-primary-dark: #3E0672;

        //  BACKGROUND  NEUTRALS
            --background-neutrals-primary: #1A1A1A;
            --background-neutrals-secondary: #333333;
            --background-neutrals-tertiary: #666666;
            --background-neutrals-inverse: #FFFFFF;

        // BACKGROUND   GREEN
            --background-accent-green: #B0E5A6;
            --background-accent-red: #FFEEEB;

        //OUTLINE   NEUTRALS
            --outline-neutrals-primary: #808080;
            --outline-neutrals-secondary: #999999;
        
        
        // STATE LAYERS BRAND
            --state-layers-brand-008: #9638FF14;
            --state-layers-brand-012: #9638FF1F;

        // STATE LAYERS NEUTRALS PRIMARY
            --state-layers-neutrals-primary-008: #FFFFFF14;
            --state-layers-neutrals-primary-012: #FFFFFF1F;
        
        // STATE LAYERS NEUTRALS TERTIARY
            --state-layers-neutrals-tertiary-008: #4B4B4B14;
            --state-layers-neutrals-tertiary-012: #4B4B4B1F;

        /* 16 pixels (100% = 16 pixels) */
        font-size: 100%;
    }

    #nprogress .bar {
        background: var(--brand-purple-700);
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
        background: var(--background-neutrals-primary);
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
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
        }
    }

    label {
        font: 700 1rem/1.25rem 'AT Aero';
    }
    
    input[type=text], select, option {
        font: 700 1rem/1.25rem 'AT Aero';
        color: var(--background-neutrals-primary-400);
        background-color: var(--background-neutrals-primary-50);
        border: 0;
    }

    button, h1, h2, h3, h4, h5, h6, body, p, span, a, label {
        color: var(--background-neutrals-primary-50);
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
        color: var(--background-neutrals-primary-400);
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