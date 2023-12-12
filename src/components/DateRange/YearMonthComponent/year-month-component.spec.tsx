import { render } from '@testing-library/react'
import CurrentYearComponent from '.'
import DateUtils from 'src/utils/date'
import type { DateSelection } from 'src/types'
import YearMonthComponent from '.'

describe('custom-button-component', () => {
  let mockOnDateRangeChange: jest.Mock<void>
  const currentYear = DateUtils.getCurrentYear()
  const payload: DateSelection = {
    from: { year: currentYear, month: 1 },
    to: { year: currentYear, month: 12 },
  }

  beforeEach(() => {
    mockOnDateRangeChange = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('', () => {
    // Arrange
    // Act
    render(<YearMonthComponent onDateRangeChange={mockOnDateRangeChange} />)

    // Assert
  })
})
