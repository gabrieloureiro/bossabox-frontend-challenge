import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BannerProvider } from '@/hooks/useBanner'

import store from '@/store'
import theme from '@/styles/theme'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BannerProvider>{children}</BannerProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default AppProvider
