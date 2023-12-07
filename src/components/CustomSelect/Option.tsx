import { FC } from 'react'
import MenuItem from '@mui/material/MenuItem'
import type { StringValuedKey } from './types'

type OptionProps = {
  option: StringValuedKey
}

const OptionComponent: FC<OptionProps> = ({ option }) => {
  const { key, value } = option
  return (
    <MenuItem key={key} value={key}>
      {value}
    </MenuItem>
  )
}

export default OptionComponent
