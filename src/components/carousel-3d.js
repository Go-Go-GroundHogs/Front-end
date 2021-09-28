import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
// import styled from "@emotion/styled"

const CAROUSEL_IMAGES = [
  '241180858_210173591097713_3254127091026144355_n.jpg',
  '242413246_198117819082822_2512234783661161239_n.png',
  '242662278_351131996792436_3164517192214611283_n.png',
  '242662684_556932562187658_793506315002072693_n.png',
  '242690115_389067659501615_205551625228433586_n.png',
  '242877457_159365253038369_8722042843496788759_n.png'
]
const CONFIG = config.gently
const SLIDE_OFFSET = 2
const INTERVAL_SECONDS = 3

export const Carousel3D = () => {
  const [goToSlide, setGoToSlide] = useState(0)
  // const [autoPlay, setAutoPlay] = useState(true)

  const slides = CAROUSEL_IMAGES.map((image, i) => {
    return {
      key: uuidv4(),
      content: <img src={image} alt={`${image} ${i.toString()}`} />,
      onClick: () => setGoToSlide(i)
    }
  })

  return (
    <div className="carousel-wrapper">
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={SLIDE_OFFSET}
        showNavigation={false}
        animationConfig={CONFIG}
        autoPlay={true}
        interval={INTERVAL_SECONDS}
      />
    </div>
  )
}

export default Carousel3D;
