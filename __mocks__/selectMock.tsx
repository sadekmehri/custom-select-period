import React from 'react'
import { StringValuedKey } from './../src/types'

type SelectComponentProps = {
  onChange: (e: StringValuedKey) => void
  options: Array<StringValuedKey>
}

export const selectMock = jest.fn().mockImplementation((props: SelectComponentProps) => {
  const { onChange, options } = props

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const option: StringValuedKey = { key: value, value }
    onChange(option)
  }

  return (
    <select onChange={handleChange} role={'select-id'}>
      {options.map(({ key, value }) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  )
})

export default {
  selectMock,
}
