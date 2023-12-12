import { fireEvent, render } from '@testing-library/react'
import SearchInput from '.'

describe('custom-button-component', () => {
  let mockOnSearch: jest.Mock<void>

  beforeEach(() => {
    mockOnSearch = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render some values given as props', () => {
    // Arrange
    const value: string = 'my-value'
    // Act
    const { getByTestId } = render(
      <SearchInput type='text' value={value} onSearch={mockOnSearch} />,
    )
    const input = getByTestId('search-input-id')
    // Assert
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(value)
  })

  it("Should call 'onSearch' when the input value changes", () => {
    // Arrange
    const value: string = 'my-value'
    const { getByTestId } = render(
      <SearchInput type='text' value={value} onSearch={mockOnSearch} />,
    )
    const input = getByTestId('search-input-id')
    // Act
    fireEvent.change(input, { target: { value: 'new-value' } })
    // Assert
    expect(mockOnSearch).toHaveBeenCalledTimes(1)
  })
})
