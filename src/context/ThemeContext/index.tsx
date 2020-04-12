import React from 'react'
import theme from 'theme'
import { useMediaQuery } from '@material-ui/core'

const ThemeContext = React.createContext<State | null>(null)

type State = {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

type ThemeContextProviderType = {
  children: React.ReactNode
}

const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'))
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'))
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const data = {
    isMobile: isDownSm,
    isTablet: isUpSm && isDownMd,
    isDesktop: isUpMd,
  }

  const loading = Object.values(data).find((value) => value) === undefined
  if (loading) {
    return null
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider')
  }

  return context
}

export { useThemeContext, ThemeContextProvider }
