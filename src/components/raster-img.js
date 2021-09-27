import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from "react"
import styled from "@emotion/styled"
const RasterImg = ({src}) => {

  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );

  const image = data.allFile.edges.find(
    edge => edge.node.name === src)?.node?.childImageSharp?.fluid;

  const NewImg = styled(Img)`
    img {
      /* position: static !important; */
    }
  `;
  return <NewImg Tag="div" alt={src} fluid={image} />
}

export default RasterImg;
