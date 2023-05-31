import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    body{
        background: ${(props) => props.theme.background};
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        border: none;
    }

    .title-xl{
        font-family: 'Baloo 2', sans-serif;
        font-weight: bolder;
        line-height: 130%;
        font-size: 3rem;
    }

    .title-l{
        font-family: 'Baloo 2', sans-serif;
        font-weight: bolder;
        line-height: 130%;
        font-size: 2rem;
    }

    .title-m{
        font-family: 'Baloo 2', sans-serif;
        font-weight: bolder;
        line-height: 130%;
        font-size: 1.5rem;
    }

    .title-s{
        font-family: 'Baloo 2', sans-serif;
        font-weight: bold;
        line-height: 130%;
        font-size: 1.25rem;
    }

    .title-xs{
        font-family: 'Baloo 2', sans-serif;
        font-weight: bold;
        line-height: 130%;
        font-size: 1.125rem;
    }

    .text-l{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 130%;
        font-size: 1.25rem;
    }
    
    .text-l-bold{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        line-height: 130%;
        font-size: 1.25rem;
    }

    .text-m{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 130%;
        font-size: 1rem;
    }

    .text-m-bold{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        line-height: 130%;
        font-size: 1rem;
    }

    .text-s{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 130%;
        font-size: 0.875rem;
    }

    .text-xs{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        line-height: 130%;
        font-size: 0.75rem;
    }
`
