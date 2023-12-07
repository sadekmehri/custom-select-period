import { PaletteMode } from '@mui/material'
import { useMemo, useState } from 'react'
import { createMyTheme } from './theme'

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('light')

  const getMode = () => mode
  const isDarkMode = () => mode === 'dark'
  const toggleColorMode = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  const theme = useMemo(() => createMyTheme(mode), [mode])

  return {
    theme,
    isDarkMode,
    toggleColorMode,
    getMode,
  }
}
