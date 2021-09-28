import { Col, Row } from "react-bootstrap"
import React from "react"
import styled from "@emotion/styled"

import RasterImg from "../components/raster-img"

const CallToAction = ({ id, className, imgLeft, imgRight, markdown }) => {
  const ColoredCol = styled(Col)`
    background: linear-gradient(0deg, rgba(3, 158, 191, .788235), rgba(56, 120, 210, .788235));
    border: 1px solid #4a4a10;
    border-radius: 8px;
    color: #ffffff;
    margin: 20px;
    min-width: 300px;
    padding: 10px;

    h2 {
      color: #ffffff;
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

  const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100%;

    h1 {
      color: green;
      display: block;
    }

    @media(max-width:768px) {
      h1 {
        display: none !important;
      }
    }

  `;

  const Markdown = markdown;

  return (
    <Wrapper id={id}>
      <Row className="align-items-center d-flex justify-content-center mb-4 text-center w-100">
        <Col>
          <h1>Gogo<br />Groundhogs</h1>
        </Col>
      </Row>
      <Row className="align-items-center d-flex justify-content-center text-center w-100">
        <ImgCol sm="3"><RasterImg src={imgLeft} alt="Groundhog Image" /></ImgCol>
        <ColoredCol className="col-8" md="3">
          <Markdown />
        </ColoredCol>
        <ImgCol sm="3"><RasterImg src={imgRight} alt="Groundhog Image" /></ImgCol>
      </Row>
    </Wrapper>
  )
}

export default CallToAction;
