import React from 'react'

export default function Breakpoints() {
  return <></>
}

// TODO: Implement breakpoints
// import { css } from 'styled-components'

// export default (
//   cssProp = 'padding', // the CSS property to apply to the breakpoints
//   cssPropUnits = 'px', // the units of the CSS property (can set equal to "" and apply units to values directly)
//   values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
//   mediaQueryType = 'max-width' // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
// ) => {
//   const breakpointProps = values.reduce((mediaQueries, value) => {
//     const [screenBreakpoint, cssPropBreakpoint] = [
//       Object.keys(value)[0],
//       Object.values(value)[0],
//     ]
//     const query = `
//       ${mediaQueries} @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
//         ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
//       }
//     `
//     return query
//   }, '')
//   return css([breakpointProps])
// }
