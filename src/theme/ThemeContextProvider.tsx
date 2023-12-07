import { PaletteMode } from '@mui/material'
import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { useColorTheme } from './use-color-theme'
import { createMyTheme } from './theme'
import { CustomTheme } from './types'

type ThemeContextType = {
  toggleColorMode: () => void
  theme: CustomTheme
  getMode: () => PaletteMode
  isDarkMode: () => boolean
}

export const ThemeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
  theme: createMyTheme('light'),
  getMode: () => 'light',
  isDarkMode: () => false,
})

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme()
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
