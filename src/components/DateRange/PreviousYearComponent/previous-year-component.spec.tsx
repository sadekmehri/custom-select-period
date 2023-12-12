import { render } from '@testing-library/react'
import PreviousYearComponent from '.'

describe('custom-button-component', () => {
  let mockOnDateRangeChange: jest.Mock<void>

  beforeEach(() => {
    mockOnDateRangeChange = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should return the default range value', () => {
    // Arrange
    // Act
    // Assert
    render(<PreviousYearComponent onDateRangeChange={mockOnDateRangeChange} />)
  })
})
