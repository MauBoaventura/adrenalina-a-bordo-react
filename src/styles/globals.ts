import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    hr {
        opacity: 0.3;
        cursor: pointer;
    }

    html, body, #__next {
        height: 100%;
    }


    body {
        background-color: #F6F6F6;
    }

    .ReactModal__Overlay {
        z-index:9999;
    }

    .ReactModal__Content{
        @media screen and (max-width: 1024px) {
            width: 80% !important;
        }

        @media screen and (max-width: 580px) {
            width: 90% !important;
        }
    }

    .link-black {
        color: black;
        text-decoration: none;
        .link-icon {
            display: inline-block;
            margin-left: 5px;
        }
    }

`

export default GlobalStyles
