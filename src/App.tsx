import { useState, type FC } from 'react'
import SearchInput from './components/SearchInput'
import SelectComponent from './components/CustomSelect'
import { DateSelection, StringValuedKey } from './types'
import CurrentYearComponent from './components/DateRange/CurrentYearComponent'
import PreviousYearComponent from './components/DateRange/PreviousYearComponent'
import SelectYearComponent from './components/DateRange/SelectYearComponent'
import { mainOptions } from './constants/date-range'
import DateRangeUtils from './utils/date-range'
import YearMonthComponent from './components/DateRange/YearMonthComponent'
import useDebounceSearchCriteria from './hooks/useDebouncedSearchCriteria'
import useGenerateDateRange from './hooks/use-generate-date-range'

const App: FC = () => {
  const { getPeriodRange, renderDateRangeComponent } = useGenerateDateRange<DateSelection>({
    initialValue: DateRangeUtils.getDefaultDateRangeValue(),
    componentsMap: {
      '0': CurrentYearComponent,
      '1': PreviousYearComponent,
      '2': SelectYearComponent,
      '3': YearMonthComponent,
    },
  })
  const [mainOption, setMainOption] = useState<string>('0')
  const { getDebounceSearchCriteria, handleSearch, getSearchCriteria } = useDebounceSearchCriteria()

  const handleChangeMainOption = (selectedOption: StringValuedKey) => {
    setMainOption(selectedOption.key)
  }

  return (
    <>
      <h1>React TypeScript Template</h1>
      <p>Main Option: {JSON.stringify(mainOption, null, 2)}</p>
      <p>Debounce Search: {JSON.stringify(getDebounceSearchCriteria(), null, 2)}</p>
      <p>Date Range: {JSON.stringify(getPeriodRange(), null, 2)}</p>
      <SearchInput
        key={'search-criteria-input'}
        value={getSearchCriteria()}
        onSearch={handleSearch}
        placeholder='Search...'
        name='search-input'
        id='search-input'
        autoComplete='off'
      />
      <br />
      <SelectComponent
        key={'select-main-option'}
        onChange={handleChangeMainOption}
        options={mainOptions}
      />
      {renderDateRangeComponent(mainOption)}
    </>
  )
}

export default App
