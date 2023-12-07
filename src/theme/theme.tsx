import { PaletteMode, ThemeOptions, createTheme } from '@mui/material'
import darkPalette from './palette/dark-palette'
import lightPalette from './palette/light-palette'
import darkTypography from './typography/dark-typography'
import lightTypography from './typography/light-typography'
import { CustomTheme, PaletteModeMap, TypographyModeMap } from 'src/types'

const customBreakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
    xxxl: 1600,
  },
}

const paletteModeMap: PaletteModeMap = {
  dark: darkPalette,
  light: lightPalette,
}

const typographyModeMap: TypographyModeMap = {
  dark: darkTypography,
  light: lightTypography,
}

const getDesign = (mode: PaletteMode): ThemeOptions => ({
  palette: paletteModeMap[mode],
  typography: typographyModeMap[mode],
  breakpoints: customBreakpoints,
})

export const createMyTheme = (mode: PaletteMode): CustomTheme => {
  const baseTheme = createTheme(getDesign(mode))
  return baseTheme as unknown as CustomTheme
}
