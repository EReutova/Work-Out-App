import { createGlobalStyle } from "styled-components";

import bg from "./title.jpeg"

export default createGlobalStyle`
:root {
    --color-eerie-black: #1E1F1E;
    --color-charlestone-green: #2A2B2A;
    --color-davys-grey: #474847;
    --color-silver: #C2C2C2;
    --color-platinum: #EAEBEA;
    --color-red-crayola: #F72E4C;
}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, select, input {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
        font-family: 'Raleway', sans-serif;
    }
    html, body {
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
        width: 100%;
        z-index: -1;
    }
`;