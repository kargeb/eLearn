import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Poiret+One&display=swap&subset=latin-ext');

*, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-size: 62.5%
}

body {
    font-size: 1.6 rem;
    font-family:'Open Sans', sans-serif;
}

ul {
    list-style-type: none;
}

`;

export default GlobalStyle;
