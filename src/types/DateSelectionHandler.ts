import type { DateSelection } from './DateSelection'

export type DateSelectionHandler = {
  onDateRangeChange: (payload: DateSelection) => void
}
