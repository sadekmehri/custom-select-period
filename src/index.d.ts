import '@mui/material/styles'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    customTypographyOption: true
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
    xxxl: true
  }
}
