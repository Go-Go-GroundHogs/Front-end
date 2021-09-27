import { Col, Row } from "react-bootstrap"
import React from "react"
import styled from "@emotion/styled"

import RasterImg from "../components/raster-img"

const CallToAction = ({ id, className, imgLeft, imgRight, text }) => {
  const ColoredCol = styled(Col)`
    background: linear-gradient(0deg, rgba(3, 158, 191, .788235), rgba(56, 120, 210, .788235));
    border: 1px solid #4a4a10;
    border-radius: 8px;
    color: #ffffff;
    margin: 20px;
    padding: 10px;

    h2 {
      padding-bottom: 10px;
      text-transform: uppercase;
    }
    p {
      margin: 0 auto;
    }
  `;

  const ImgCol = styled(Col)`
    @media(max-width:768px) {
      display: none;
    }
  `;

  const TextComponent = text;

  return (
    <Row id={id} className="align-items-center d-flex justify-content-center position-absolute text-center w-100" style={{height: "100vh"}}>
        <ImgCol sm="3"><RasterImg src={imgLeft} alt="Groundhog Image" /></ImgCol>
        <ColoredCol className="col-8" md="3">
          <TextComponent />
        </ColoredCol>
        <ImgCol sm="3"><RasterImg src={imgRight} alt="Groundhog Image" /></ImgCol>
    </Row>

  )
}

export default CallToAction;
