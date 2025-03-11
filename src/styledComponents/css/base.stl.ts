import { createGlobalStyle, css } from "styled-components";
import { lightTheme } from '@/styledComponents/css/theme.stl.ts'



export const GlobalStyles = createGlobalStyle`
    
    
    :root{
            --bruze-color: #93ADBD;
            --base-space:20px;
            --dark-gray: #0f0f17;
            --gray:#27272E;
        }

    #root {
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        max-width: 100%;
        margin: 0 auto;
        /* padding: 2rem; */
        text-align: center;
    }
    html, body {
        background: ${props => props.theme.background.white};
        height: 100%;
    }

    main{
        background-color: transparent;
        width: 100%;
        height: 100%;
    }


`
