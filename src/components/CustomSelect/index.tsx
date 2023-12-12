import { useState, type FC } from 'react'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import type { StringValuedKey } from 'src/types'

type SelectComponentProps = {
  options: Array<StringValuedKey>
  onChange: (selectedOption: StringValuedKey) => void
}

const SelectComponent: FC<SelectComponentProps> = ({ options, onChange }) => {
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
    <Select<string>
      onChange={handleChange}
      inputProps={{ 'data-testid': 'custom-select-id' }}
      value={currentOption.key}
    >
      {options.map((option) => (
        <MenuItem value={option.key} key={option.key}>
          {option.value}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectComponent
