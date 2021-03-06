import type { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 body{
   margin: 0;
 }
`
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
export default MyApp
