import { React, useState } from 'react'
import styled from 'styled-components'
import styles from '../data/styles'

import imageData from '../data/image-data'

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
  margin: ${styles.spacer.small}};
  border-radius: ${styles.spacer.tiny};

  @media (min-width: ${styles.breakpoint.medium}}) {
    margin: ${styles.spacer.medium} 0;
  }
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: ${styles.spacer.tiny};

  @media (min-width: ${styles.breakpoint.medium}}) {
    max-height: 500px;
  }
`
