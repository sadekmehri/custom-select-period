import { useEffect, type FC } from 'react'
import SearchInput from './components/SearchInput'
import { DateSelection } from './types'
import CurrentYearComponent from './components/DateRange/CurrentYearComponent'
import PreviousYearComponent from './components/DateRange/PreviousYearComponent'
import SelectYearComponent from './components/DateRange/SelectYearComponent'
import { mainOptions } from './constants/date-range'
import DateRangeUtils from './utils/date-range'
import YearMonthComponent from './components/DateRange/YearMonthComponent'
import useDebounceSearchCriteria from './hooks/useDebouncedSearchCriteria'
import PeriodRangeFacade from './components/PeriodRangeFacade'
import useGenericState from './hooks/useGenericState'
import useSnack from './hooks/useSnack'
import { Alert } from '@mui/material'

const App: FC = () => {
  const initialPeriod = DateRangeUtils.getDefaultDateRangeValue()
  const { getGenericValue, handleValueChange } = useGenericState<DateSelection>(initialPeriod)
  const { getDebounceSearchCriteria, handleSearch, getSearchCriteria } = useDebounceSearchCriteria()
  const { SnackbarComponent, onDismissSnackBar, onOpenSnackBar } = useSnack()

  return (
    <>
      <h1>React TypeScript Template</h1>
      <p>Debounce Search: {JSON.stringify(getDebounceSearchCriteria(), null, 2)}</p>
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
      App: {JSON.stringify(getGenericValue(), null, 2)}
      <PeriodRangeFacade<DateSelection>
        initialValue={initialPeriod}
        onPeriodChange={handleValueChange}
        mainOptions={mainOptions}
        componentsMap={{
          '0': CurrentYearComponent,
          '1': PreviousYearComponent,
          '2': SelectYearComponent,
          '3': YearMonthComponent,
        }}
      />
      <br />
      <button onClick={onOpenSnackBar}>Open Snack</button>
      <button onClick={onDismissSnackBar}>Dissmiss Snack</button>
      <br />
      <SnackbarComponent autoHideDuration={3000} onClose={onDismissSnackBar}>
        <Alert onClose={onDismissSnackBar} severity='success'>
          This is a success message!
        </Alert>
      </SnackbarComponent>
    </>
  )
}

export default App
