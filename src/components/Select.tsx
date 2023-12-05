import type { ChangeEvent, FC } from 'react'
import { StringValuedKey } from '../types'
import OptionComponent from './Option'

type SelectProps = {
  options: Array<StringValuedKey>
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      {options.map((option) => (
        <OptionComponent key={option.key} option={option} />
      ))}
    </select>
  )
}

export default Select
