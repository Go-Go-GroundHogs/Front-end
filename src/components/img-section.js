import { Col, Row } from "react-bootstrap"
import React from "react"

import RasterImg from "./raster-img"

import styled from "@emotion/styled"

const ImgSection = ({ markdown, img, smallImage = false, useImgTag = false, children }) => {
  const Markdown = markdown;

  let Image = styled(RasterImg)`
    height: auto;
    width: 100%;
  `

  if (useImgTag) {
    Image = styled.img`
     height: auto;
     width: 100%;
   `
 }

  const StyledRow = styled(Row)`
  `;

  return (
    <StyledRow className="justify-content-center sub-block pb-4" >
      <Col lg={smallImage ? 6 : 6}>
        { Markdown && <Markdown />}
        { children }
      </Col>
      <Col lg={smallImage ? 3 : 5} className="d-flex flex-column justify-content-center offset-lg-1 mt-3 mt-md-0">
        <Image src={img} alt={img} />
      </Col>
    </StyledRow>
  )
}

export default ImgSection;
