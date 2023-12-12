import DateUtils from './date'

describe('date utils', () => {
  it('Returns the current year', () => {
    // Arrange
    // Act
    const currentYear = DateUtils.getCurrentYear()
    const expectedYear = new Date().getFullYear()
    // Assert
    expect(currentYear).toBe(expectedYear)
  })

  it('Returns the current month', () => {
    // Arrange
    // Act
    const currentMonth = DateUtils.getCurrentMonth()
    const expectedMonth = new Date().getMonth() + 1
    // Assert
    expect(currentMonth).toBe(expectedMonth)
  })

  it('Generates an array of month options', () => {
    // Arrange
    // Act
    const monthOptions = DateUtils.generateMonths()
    // Assert
    expect(monthOptions).toContainEqual({ key: '9', value: 'October' })
  })
})
