import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        /* paleta de cores */
        --color-primary: #3A006E;
        --color-secondary: #FF82FF;
        --color-tertiary: #8A45C6; // excluir posteriormente
        --color-neutral: #0A0A0A;

        /* variações da paleta */
        --color-primary-900: #4C286C;
        --color-primary-800: #63358D;
        --color-primary-700: #7B44AB;
        --color-primary-600: #9256C5;
        --color-primary-500: #A86BDA;
        --color-neutral-900: #121212;
        --color-neutral-800: #272727;
        --color-neutral-700: #3C3C3C;
        --color-neutral-600: #545454;
        --color-neutral-500: #6C6C6C;
        --color-neutral-400: #858585;
        --color-neutral-300: #A0A0A0;
        --color-neutral-100: #D7D7D7;
        --color-neutral-50: #F3F3F3;

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
            max-width: 1224px;
            margin: 0;
            padding: 0;
        }
    }

    button {
        font: 400 1rem/1.25rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
        cursor: pointer;

        :disabled {
            cursor: not-allowed;
        }
    }

    h1 {
        font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
        text-align: center;
    }

    h2 {
        font: 400 3rem/3.5rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
    }

    h3 {
        font: 400 2.5rem/3rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
        text-align: left;
    }

    h4 {
        font: 400 2rem/2.5rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
    }

    h5 {
        font: 400 1.5rem/1.75rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
    }

    h6 {
        font: 400 1.25rem/1.5rem 'Space_Mono_Bold';
        color: var(--color-neutral-100);
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    body, p, span, a {
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-50);
    }

    a {
        text-decoration: none;
    }

    label {
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-50);
    }

    input[type=text] {
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-400);
        background-color: var(--color-neutral-50);
        border: 0;
        
        :disabled {
            cursor: not-allowed;
        }
    }
    
    select, option {
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-400);
        background-color: var(--color-neutral-50);
        border: 0;
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
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-400);
    }

    @media (min-width:480px) {

    }

    @media (min-width:560px) {

        input[type=text], select, option { 
            font: 700 1.125rem/1.75rem 'Space_Mono';
            
            ::placeholder {
                font: 700 1.125rem/1.75rem 'Space_Mono';
            }
        }

        button {
            font: 400 1.125rem/1.5rem 'Space_Mono_Bold';
        }
    }

    @media (min-width:600px) {

    }

    @media (min-width:801px) {

    }

    @media (min-width:1021px) {
       
    }

    @media (min-width:1365px) {

    }

    @media (min-width:2200px) {

    }
`