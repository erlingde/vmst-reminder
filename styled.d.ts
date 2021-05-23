import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      extra: string
      bg: string
    }
    breakpoints: {
      phone: string
      tabletPortait: string
      tableLandscape: string
      desktop: string
      desktopBig: string
    }
    margin: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    sectionMixin: string
  }
}
