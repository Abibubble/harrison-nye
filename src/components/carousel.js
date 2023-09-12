import { React, useState } from 'react'
import styled from 'styled-components'
import imageData from './imageData'

// Need next / previous arrow buttons
// Need to add a fade in / out transition
// Need to fix the weird image flash when it changes after the second round

export default function Carousel() {
  let [currentImage, setCount] = useState(1)
  let finalImage = Object.keys(imageData).length

  setInterval(() => {
    if (currentImage === finalImage) {
      setCount(1)
    } else {
      setCount(currentImage + 1)
    }
  }, 5000)

  return (
    <Div>
      <CarouselImage
        src={require(`../images/${imageData[currentImage].src}`)}
        alt={imageData[currentImage].alt}
      />
    </Div>
  )
}

const Div = styled.div`
  margin: 16px;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin: 24px 0;
  }
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-height: 500px;
  }
`
