import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: 'hsl(168, 100%, 23%)',
    secondary: 'hsl(47, 19%, 85%)',
    extra: '#685369',
    bg: 'hsl(168, 20%, 75%)',
  },
  breakpoints: {
    phone: '599px',
    tabletPortait: '600px',
    tableLandscape: '900px',
    desktop: '1200px',
    desktopBig: '1800px',
  },
  margin: {
    sm: '1em',
    md: '2em',
    lg: '3em',
    xl: '4em',
  },
  sectionMixin:
    'background: white; border-radius: 5px; border: 1px solid blue;',
}

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
    background: ${theme.colors.bg};
    min-height: 100vh;
  }

  h1 {
    font-size: clamp(40px, 5vw, 70px);
  }

  h1,
  h2 {
    font-weight: 300;
    line-height: 1.2;
    margin: 10px 0;
    color: #333;
  }

  p {
    margin: 10px 0;
    color: #333;
  }

  a, a:visited {
    text-decoration: none;
    color: #333;
  }

  ::selection {
    background: ${theme.colors.primary};
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
