import { amber, deepPurple } from '@mui/material/colors'
import { CustomPaletteOptions } from '../types'

const lightPalette: CustomPaletteOptions = {
  mode: 'light',
  primary: amber,
  divider: amber[200],
  background: {
    default: deepPurple[900],
    paper: deepPurple[900],
  },
  text: {
    primary: '#000',
    secondary: '#000',
  },
}

export default lightPalette
