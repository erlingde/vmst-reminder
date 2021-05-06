import { DefaultTheme } from 'styled-components'

export const globalStyles = `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif !important;
    color: #333;
    line-height: 1.6;
  }

  html { 
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }

  h1 {
    font-size: clamp(40px, 5vw, 70px);
  }

  h1,
  h2 {
    font-weight: 300;
    line-height: 1.2;
    margin: 10px 0;
  }

  p {
    font-size: clamp(1em, 2vw, 2em);
    font-weight: 400;
    margin: 10px 0;
  }

  a, a:visited {
    text-decoration: none;
    color: #333;
  }

  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`

export const theme: DefaultTheme = {
  colors: {
    primary: '#00765f',
  },
}
