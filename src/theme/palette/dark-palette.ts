import { deepOrange } from '@mui/material/colors'
import { CustomPaletteOptions } from 'src/types'
import DarkColorsConfig from '../color/dark-color-config'

const darkPalette: CustomPaletteOptions = {
  mode: 'dark',
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: deepOrange[900],
    paper: deepOrange[900],
  },
  text: {
    primary: 'white',
    secondary: 'black',
  },
  tableHeader: {
    color: DarkColorsConfig.tableHeader.text,
    backgroundColor: DarkColorsConfig.tableHeader.background,
  },
}

export default darkPalette
