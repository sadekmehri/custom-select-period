import { CustomTypographyOptions } from '../types'
import mainTypography from './main-typography'
import { produce } from 'immer'

const lightTypography = produce(mainTypography, (draft: CustomTypographyOptions) => {})

export default lightTypography
