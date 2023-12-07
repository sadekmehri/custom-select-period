import { amber, deepPurple } from '@mui/material/colors'
import { CustomPaletteOptions } from 'src/types'
import LightColorsConfig from '../color/light-color-config'

const lightPalette: CustomPaletteOptions = {
  mode: 'light',
  primary: amber,
  divider: amber[200],
  background: {
    default: deepPurple[900],
    paper: deepPurple[900],
  },
  text: {
    primary: 'black',
    secondary: 'white',
  },
  tableHeader: {
    color: LightColorsConfig.tableHeader.text,
    backgroundColor: LightColorsConfig.tableHeader.background,
  },
}

export default lightPalette
