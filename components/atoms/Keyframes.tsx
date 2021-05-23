import { keyframes } from 'styled-components'

export const slideInFromLeft = keyframes`
    from {
      transform: translateX(-100%);
    }
  
    to {
      transform: translateX(0);
    }
`

export const slideInFromRight = keyframes`
    from {
      transform: translateX(100%);
    }
  
    to {
      transform: translateX(0);
    }
`

export const bounce = keyframes`
    0% {
      transform: translateY(0);
    }
  
    25% {
      transform: translateY(-20px);
    }
  
    50% {
      transform: translateY(0);
    }
  
    75% {
      transform: translateY(-10px);
    }
  
    100% {
      transform: translateY(0);
    }
`

export const BgColor = keyframes`
  from {
      transform: scale(0)
  }

  to {
    transform: scale(60)
  }
`

export const Alert = keyframes`
  from {
    transform: translateY(0)
  }

  50% {
    transform: translateY(-2px)
  }

  to {
    transform: translateY(0)
  }
`

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
