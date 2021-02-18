import React, { useState } from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/global'
import theme from '@/styles/theme'
import SearchToolContext from '@/context/SearchToolContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [searchableTool] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <SearchToolContext.Provider
        value={{
          searchValue: searchableTool
        }}
      >
        <Component {...pageProps} />
        <GlobalStyle />
      </SearchToolContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
