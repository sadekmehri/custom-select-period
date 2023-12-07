import { CustomTypographyOptions } from 'src/types'
import { GlobalFonts } from '../font/global-font'

const mainTypography: CustomTypographyOptions = {
  fontFamily: GlobalFonts.FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 900,
  h1: {
    fontWeight: 400,
    fontFamily: GlobalFonts.FONT_SECONDARY,
    fontSize: '22px',
    wordWrap: 'break-word',
  },
  h2: {
    fontWeight: 400,
    fontFamily: GlobalFonts.FONT_SECONDARY,
    fontSize: '17px',
    wordWrap: 'break-word',
  },
  h3: {
    fontWeight: 600,
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '18px',
    wordWrap: 'break-word',
    color: '#000000',
  },
  h4: {
    fontWeight: 500,
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '1rem',
  },
  h5: {
    fontSize: '1rem',
    lineHeight: '1.438rem',
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontWeight: 400,
    textTransform: 'none',
    '&:first-letter': {
      textTransform: 'Uppercase',
    },
  },
  h6: {
    fontWeight: 300,
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '1rem',
  },
  body1: {
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '0.938rem',
  },
  body2: {
    fontWeight: 400,
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '0.813rem',
  },
  subtitle2: {
    fontWeight: 300,
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '0.9rem',
  },
  caption: {
    fontWeight: 600,
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '15px',
    wordWrap: 'break-word',
  },
  button: {
    fontSize: '1rem',
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontWeight: 400,
    textTransform: 'none',
    '&:first-letter': {
      textTransform: 'Uppercase',
    },
  },
  customTypographyOption: {
    fontFamily: GlobalFonts.FONT_PRIMARY,
    fontSize: '1rem',
    backgroundColor: 'gold',
    color: 'red',
    fontWeight: 400,
    textTransform: 'none',
    '&:first-letter': {
      textTransform: 'Uppercase',
    },
  },
}

export default mainTypography
