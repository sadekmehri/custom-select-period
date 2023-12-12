import { Swiper, SwiperSlide } from 'swiper/react'
import type { FC } from 'react'
import 'swiper/css'

const SwiperComponent: FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <SwiperSlide
          style={{
            backgroundColor: 'red',
            width: '100px',
            height: '100px',
          }}
          key={i}
        >
          Slide {i}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponent
