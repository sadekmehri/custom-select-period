import { fireEvent, render } from '@testing-library/react'
import SwiperComponent from '.'

jest.mock('swiper/react', () => {
  const { mockSwiper, mockSwiperSlide } = jest.requireActual('../../../__mocks__/swiperMock')
  return {
    Swiper: mockSwiper,
    SwiperSlide: mockSwiperSlide,
  }
})

jest.mock('swiper/css', () => ({
  __esModule: true,
  default: jest.fn(),
}))

describe('swipper-component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render successfully', () => {
    // Arrange
    const { getByTestId } = render(<SwiperComponent />)
    const swiperItem = getByTestId('swiper-id')
    // Act
    fireEvent.click(swiperItem)
    // Assert
    expect(swiperItem).toBeTruthy()
  })
})
