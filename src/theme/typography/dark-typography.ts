import { CustomTypographyOptions } from '../types'
import mainTypography from './main-typography'
import { produce } from 'immer'

const darkTypography = produce(mainTypography, (draft: CustomTypographyOptions) => {})

export default darkTypography
