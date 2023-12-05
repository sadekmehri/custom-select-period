import type { ChangeEvent } from 'react'
import type { StringValuedKey } from '../types'
import Select from './Select'

type YearMonthSelectorProps<T> = {
  label: string
  selectors: T[]
  monthOptions: Array<StringValuedKey>
  yearOptions: Array<StringValuedKey>
  onChange: (e: ChangeEvent<HTMLSelectElement>, field: T) => void
}

function YearMonthSelector<T>(props: YearMonthSelectorProps<T>) {
  const { label, monthOptions, onChange, yearOptions, selectors } = props

  return (
    <>
      <h1>{label}</h1>
      <Select
        options={yearOptions}
        onChange={(e) => {
          onChange(e, selectors[0])
        }}
      />
      <Select options={monthOptions} onChange={(e) => onChange(e, selectors[1])} />
    </>
  )
}

export default YearMonthSelector
