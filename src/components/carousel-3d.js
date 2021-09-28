import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import styled from "@emotion/styled"

import RasterImg from "../components/raster-img"

export const Carousel3D = ({images}) => {
  const [goToSlide, setGoToSlide] = useState(0)
  const [offsetRadius, setOffsetRadius] = useState(3)
  const [showNavigation, setShowNavigation] = useState(false)

  const slides = images.map((image, i) => {
    return {
      key: uuidv4(),
      content: <img src={image} alt={`${image} ${i.toString()}`} />,
      onClick: () => setGoToSlide(i)
    }
  })

  const CarouselWrapper = styled.div`
    height: 500px;
    margin: 0 auto;
    width: 80%;

    img {
      border: white solid 5px;
    }
  `;

  return (
    <CarouselWrapper>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={config.gently}
        autoPlay={false}
        interval={3}
      />
    </CarouselWrapper>
  )
}

export default Carousel3D;
