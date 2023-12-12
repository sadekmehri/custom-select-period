import { render } from '@testing-library/react'
import CurrentYearComponent from '.'
import DateUtils from 'src/utils/date'
import type { DateSelection } from 'src/types'

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

  it('Should return the default range value', () => {
    // Arrange
    // Act
    render(<CurrentYearComponent onDateRangeChange={mockOnDateRangeChange} />)

    // Assert
    expect(mockOnDateRangeChange).toHaveBeenCalledTimes(1)
    expect(mockOnDateRangeChange).toHaveBeenCalledWith(payload)
  })
})
