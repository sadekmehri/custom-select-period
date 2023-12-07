import { useState, type FC } from 'react'
import { StringValuedKey } from './types'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material'

type SelectProps = {
  options: Array<StringValuedKey>
  onChange: (selectedOption: StringValuedKey) => void
}

const SelectComponent: FC<SelectProps> = ({ options, onChange }) => {
  const [currentOption, setCurrentOption] = useState<StringValuedKey>(options[0])

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedOption: StringValuedKey = {
      key: event.target.value,
      value: event.target.value,
    }

    onChange(selectedOption)
    setCurrentOption(selectedOption)
  }

  return (
    <Select<string> onChange={handleChange} value={currentOption.key}>
      {options.map((option) => (
        <MenuItem value={option.key} key={option.key}>
          {option.value}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectComponent
