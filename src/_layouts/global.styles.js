import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Raleway, sans-serif;
    font-weight: 600;
    font-size: 12px;
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`