import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html:root { 
    --main-background: hsl(222, 26%, 31%);
    --toggle-background: hsl(223, 31%, 20%);
    --screen-background: hsl(224, 36%, 15%);
    --key-background-dark-blue: hsl(225, 21%, 49%);
    --key-shadow-dark-blue: hsl(224, 28%, 35%);
    --key-background-red: hsl(6, 63%, 50%);
    --key-shadow-dark-red: hsl(6, 70%, 34%);
    --key-background-orange: hsl(30, 25%, 89%);
    --key-shadow-orange: hsl(28, 16%, 65%);
    --very-dark-grayish-blue: hsl(221, 14%, 31%);
    --white: #fff;
    --white-text: #fff;
}
body{
    min-width: 100vw;
    min-height: 100vh;
    background-color: var(--main-background);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Spartan', sans-serif;
}
`;
