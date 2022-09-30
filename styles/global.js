import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        /* paleta de cores */
        --color-primary: #151023;
        --color-secondary: #8744C2;
        --color-tertiary: #8A45C6;
        --color-text: #ffffff;


        /*10 pixels (100% = 16 pixels)*/
        font-size: 62.5%;
    }

    #nprogress .bar {
        background: var(--color-tertiary);
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
        background: var(--color-primary);
    }

    body, input {
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
    }

    button{
        color: var(--color-text);
        font-family: 'Bebas Neue', cursive;
        font-size: 2rem;
        font-weight: 400;
        letter-spacing: 1px;
    }

    h1{
        font-family: 'Plaza';
        font-size: 3.6rem;
        color: var(--color-text);
    }

    h2{
        color: var(--color-text);
        font-family: 'Bebas Neue', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 3.2rem;
    }

    h3, h4, h5, p, span{
        color: var(--color-text);
        font-family: 'Roboto', sans-serif;
        font-style: normal;
    }

    h3{
        font-weight: 500;
        font-size: 2.2rem;
        line-height: 140%;
    }

    p{
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 121%;
    }

    span{
        font-style: normal;
        font-weight: 300;
        font-size: 1.2rem;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    .section-title {
        padding: .5rem 1rem;
        margin-bottom: 5rem;
        border-bottom: 3px solid #FFFFFF;
    }

    @media (min-width:480px) {
         :root{
             font-size: 70%;
         }
    }

    @media (min-width:600px) {
        :root{
             font-size: 80%;
         }

         button{
            font-size: 1.8rem;
         }
    }

    @media (min-width:801px) {
        :root{
             font-size: 90%;
        }
    }

    @media (min-width:1021px) {
        :root{
             font-size: 100%;
         }

        p{
            font-weight: normal;
            font-size: 1.2rem;
            line-height: 141%;
        }
    }

    @media (min-width:1365px) {

    }


    @media (min-width:2200px) {

    }

`