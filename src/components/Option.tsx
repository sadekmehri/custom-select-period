import { FC } from 'react'
import type { StringValuedKey } from '../types'

type OptionProps = {
  option: StringValuedKey
}

const Option: FC<OptionProps> = ({ option }) => {
  const { key, value } = option
  return (
    <option key={key} value={key}>
      {value}
    </option>
  )
}

export default Option
