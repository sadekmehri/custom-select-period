import mainTypography from './main-typography'
import { produce } from 'immer'

const darkTypography = produce(mainTypography, (draft) => {
  draft.h1!.color = '#fff'
  draft.customTypographyOption.color = 'red'
  draft.customTypographyOption.fontSize = '1rem'
})

export default darkTypography
