import { createGlobalStyle, css } from "styled-components";


const fonts = () => css`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,1000;1,6..12,1000&family=Roboto:ital,wght@0,900;1,900&display=swap');
`

const colors = () => css`
    --bruze-color: #93ADBD;
    --base-space:20px
`
export const GlobalStyles = createGlobalStyle`
        ${fonts()}
        :root{
            ${colors()}
        }   
`
