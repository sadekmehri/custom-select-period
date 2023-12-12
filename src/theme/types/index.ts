import { PaletteMode, PaletteOptions, Theme } from '@mui/material'
import { CSSProperties, TypographyOptions } from '@mui/material/styles/createTypography'

/**
 *  Ressources:
 *  // https://dev.to/fredrikbergqvist/extending-the-theme-in-material-ui-with-typescript-lba
 *
 * */
type Modify<T, R> = Omit<T, keyof R> & R

export type CustomTypographyOptions = Modify<TypographyOptions, {}>
export type CustomPaletteOptions = Modify<PaletteOptions, {}>

export type CustomTheme = Modify<
  Theme,
  {
    typography: CustomTypographyOptions
    palette: CustomPaletteOptions
  }
>

// Map of the custom options for each palette mode
export type PaletteModeMap = Record<PaletteMode, CustomPaletteOptions>
export type TypographyModeMap = Record<PaletteMode, CustomTypographyOptions>
