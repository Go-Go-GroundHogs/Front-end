import { Col, Row } from "react-bootstrap"
import React from "react"

import RasterImg from "./raster-img"

import styled from "@emotion/styled"

const TextImgSection = ({ markdown, img, hColors, imgType, children }) => {
  const Markdown = markdown;
  const Image = styled(RasterImg)`
    height: auto;
    width: 100%;
  `

  let hStyles = {};

  hColors.forEach((color, i) => {
    hStyles[`h1:nth-of-type(${i+1})`] = {
      color: color
    }
  })

  const StyledRow = styled(Row)`
    ${hStyles}
  `;

  let markdownWidth = 7
  let imageWidth = 4

  switch (imgType) {
    case 'markdownImg':
      markdownWidth = 12
      break;
    case 'wideRightImg':
      markdownWidth = 5
      imageWidth = 6
      break;
    default:
  }

  return (
    <StyledRow className="sub-block justify-content-center pb-4" >
      <Col lg={markdownWidth}>
        <Markdown />
      </Col>
      {
        imgType === "markdownImg" || <Col lg={imageWidth} className="offset-lg-1">
                                 <Image src={img} alt={img} />
                               </Col>
      }
    </StyledRow>
  )
}

export default TextImgSection;
