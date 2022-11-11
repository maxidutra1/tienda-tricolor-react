import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
 height: 100%;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #0f0728;
    color: #fafafa;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

a {
    text-decoration: none;
    color: #dfdaf3;
    font-weight: 600;
}

li {
    list-style: none;
}

::placeholder {
    color: white;
}
`;
