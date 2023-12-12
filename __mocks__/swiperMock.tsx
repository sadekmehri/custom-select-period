// @ts-nocheck
import type { PropsWithChildren } from 'react'
import { SwiperProps, SwiperSlideProps } from 'swiper/react'

type SwiperPropsMock = PropsWithChildren<{}> & SwiperProps
type SwiperSlidePropsMock = PropsWithChildren<{}> & SwiperSlideProps

export const mockSwiper = jest.fn().mockImplementation((props: SwiperPropsMock) => {
  const { children, onSlideChange, onSwiper, ...other } = props
  const handleClick = () => {
    if (onSlideChange) onSlideChange()
    if (onSwiper) onSwiper()
  }

  return (
    <button data-testid='swiper-id' onClick={handleClick} {...other}>
      {children}
    </button>
  )
})

export const mockSwiperSlide = jest.fn().mockImplementation((props: SwiperSlidePropsMock) => {
  const { children, ...other } = props
  return (
    <button data-testid='swiper-slide-id' {...other}>
      {children}
    </button>
  )
})

export default {
  Swiper: mockSwiper,
  SwiperSlide: mockSwiperSlide,
}
