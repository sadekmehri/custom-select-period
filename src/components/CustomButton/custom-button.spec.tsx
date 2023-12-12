import { fireEvent, render } from '@testing-library/react'
import ButtonComponent from '.'

describe('custom-button-component', () => {
  let mockOnClick: jest.Mock<void>

  beforeEach(() => {
    mockOnClick = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should fire the onClick event', () => {
    // Arrange
    // Act
    const { getByTestId } = render(<ButtonComponent label='my-button' onClick={mockOnClick} />)
    const selectedButton = getByTestId('custom-button-id')
    fireEvent.click(selectedButton)
    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
