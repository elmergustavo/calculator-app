import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html:root { 
    //BACKGROUND
    --main-background: hsl(268, 75%, 9%);
    --toggle-background: hsl(268, 71%, 12%);
    --screen-background:  hsl(268, 71%, 12%);
    //KEYS
    --key-background-dark-blue: hsl(281, 89%, 26%);
    --key-shadow-dark-blue: hsl(285, 91%, 52%);
    --key-background-red: hsl(176, 100%, 44%);
    --key-shadow-dark-red:   hsl(177, 92%, 70%);
    --key-background-orange: hsl(268, 47%, 21%);
    --key-shadow-orange:hsl(290, 70%, 36%);
    //TEXT
    --very-dark-grayish-blue: hsl(52, 100%, 62%);
    --white: #fff;
    --white-text: hsl(52, 100%, 62%);
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
