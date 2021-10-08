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
    /* margin: 20px; */
    margin: 0 auto;
    margin-top: 30px !important;
    /* min-width: 300px; */
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

  const LogoCol = styled(Col)`
  > * {
    margin: 0px auto;
    max-width: 250px;
    /* width: 30%; */
  }

    @media(max-width:768px) {
      display: none;
    }
  `;

  const ImgCol = styled(Col)`
    img {
      background-color: white;
      border: black solid 2px;
      padding: 5px;
    }

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
      <Row className="align-items-center d-flex justify-content-center text-center w-100">
        <ImgCol sm="3"><RasterImg src={imgLeft} alt="Groundhog Image" /></ImgCol>
        <Col className="col-10 mx-5" sm="6" md="3">
          <Row className="flex-column align-items-center">
            <LogoCol><RasterImg src="Groundhog Logo" alt="Go-go Groundhogs Logo" /></LogoCol>
            <ColoredCol>
              <Markdown />
            </ColoredCol>
          </Row>
        </Col>
        <ImgCol sm="3"><RasterImg src={imgRight} alt="Groundhog Image" /></ImgCol>
      </Row>
    </Wrapper>
  )
}

export default CallToAction;
