import React, { createContext, useContext, useCallback, useState } from 'react'

import BannerNotification from '@/components/BannerNotification'

interface BannerContextData {
  addBanner(): void
  removeBanner(): void
}

const BannerContext = createContext<BannerContextData>({} as BannerContextData)

const BannerProvider: React.FC = ({ children }) => {
  // const

  const addBanner = () =>
    useCallback(() => {
      console.log(1)
    }, [])

  const removeBanner = () =>
    useCallback(() => {
      console.log(2)
    }, [])

  return (
    <BannerContext.Provider value={{ addBanner, removeBanner }}>
      {children}
      <BannerNotification
        toast="warning"
        title="This was a complete success"
        message="The tool AAAAAAAA was deleted with success."
      />

      <BannerNotification
        toast="error"
        title="This was a complete success"
        message="The tool AAAAAAAA was deleted with success."
      />
    </BannerContext.Provider>
  )
}

function useBanner(): BannerContextData {
  const context = useContext(BannerContext)

  if (!context) {
    throw new Error('useBanner must be used within a BannerProvider')
  }

  return context
}

export { BannerProvider, useBanner }
