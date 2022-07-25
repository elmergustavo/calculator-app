import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html:root { 
    //BACKGROUND
    --main-background: hsl(0, 0%, 90%);
    --toggle-background: hsl(0, 5%, 81%);
    --screen-background:hsl(0, 0%, 93%);
    //KEYS
    --key-background-dark-blue: hsl(185, 42%, 37%);
    --key-shadow-dark-blue: hsl(185, 58%, 25%);
    --key-background-red: hsl(25, 98%, 40%);
    --key-shadow-dark-red:  hsl(25, 99%, 27%);
    --key-background-orange: hsl(45, 7%, 89%);
    --key-shadow-orange: hsl(35, 11%, 61%);
    //TEXT
    --very-dark-grayish-blue:  hsl(60, 10%, 19%);
    --white: #fff;
    --white-text: #000;
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