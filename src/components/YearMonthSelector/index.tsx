import type { StringValuedKey } from 'src/types'
import SelectComponent from '../CustomSelect'

type YearMonthSelectorProps<T> = {
  label: string
  selectors: T[]
  monthOptions: Array<StringValuedKey>
  yearOptions: Array<StringValuedKey>
  onChange: (e: StringValuedKey, field: T) => void
}

function YearMonthSelector<T>(props: YearMonthSelectorProps<T>) {
  const { label, monthOptions, onChange, yearOptions, selectors } = props

  return (
    <>
      <h1>{label}</h1>
      <SelectComponent
        options={yearOptions}
        onChange={(e) => {
          onChange(e, selectors[0])
        }}
      />
      <SelectComponent options={monthOptions} onChange={(e) => onChange(e, selectors[1])} />
    </>
  )
}

export default YearMonthSelector
