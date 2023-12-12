import { deepOrange } from '@mui/material/colors'
import { CustomPaletteOptions } from '../types'

const darkPalette: CustomPaletteOptions = {
  mode: 'dark',
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: deepOrange[900],
    paper: deepOrange[900],
  },
  text: {
    primary: '#000',
    secondary: '#000',
  },
}

export default darkPalette
