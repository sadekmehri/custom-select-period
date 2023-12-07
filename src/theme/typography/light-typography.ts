import mainTypography from './main-typography'
import { produce } from 'immer'

const lightTypography = produce(mainTypography, (draft) => {
  draft.customTypographyOption.color = '#000'
})

export default lightTypography
