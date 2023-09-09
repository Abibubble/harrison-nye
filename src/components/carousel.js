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
  }, 3000)

  return (
    <Wrapper>
      <CarouselImage
        src={require(`../images/${imageData[currentImage].src}`)}
        alt={imageData[currentImage].alt}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 8px 24px;
  border-radius: 8px;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
`
