import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import styled from "@emotion/styled"

import RasterImg from "../components/raster-img"

export const Carousel3D = ({images}) => {
  const [goToSlide, setGoToSlide] = useState(0)
  const [offsetRadius, setOffsetRadius] = useState(2)
  const [showNavigation, setShowNavigation] = useState(false)
  // const [config, setConfig] = useState(config.gentle)

  // const config = { mass: 1, tension: 120, friction: 14, frequency: 2 }

  const slides = images.map((image, i) => {
    return {
      key: uuidv4(),
      content: <img src={image} alt={`${image} ${i.toString()}`} />,
      onClick: () => setGoToSlide(i)
    }
  })

  // const onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.gently}
          autoPlay={false}
          interval={3}
        />
      </div>
  )
}

export default Carousel3D;
