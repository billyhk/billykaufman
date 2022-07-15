import React, { useEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { ArrowNext, ArrowPrev, Indicator } from '../../atoms'

const carouselProps = {
  infiniteLoop: true,
  stopOnHover: true,
  showArrows: true,
  emulateTouch: true,
  useKeyboardArrows: true,
  autoPlay: true,
  showStatus: false,
  renderArrowPrev: ArrowPrev,
  renderArrowNext: ArrowNext,
  renderIndicator: Indicator,
}

const CarouselCard = ({ images }) => {
  let carousel = useRef(null)

  useEffect(() => {
    // Validation to set the slider to 0
    if (carousel && carousel?.state?.selectedItem > 0) {
      carousel.state.selectedItem = 0
    }
  }, [images])

  return (
    <Carousel ref={(el) => (carousel = el)} {...carouselProps}>
      {images.map((image, i) => (
        <img key={i} alt='' src={image} />
      ))}
    </Carousel>
  )
}

export default CarouselCard
