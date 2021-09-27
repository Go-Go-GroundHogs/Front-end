import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from "react"

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
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );

  const image = data.allFile.edges.find(
    edge => edge.node.name === src).node.childImageSharp.fluid;

  return <Img Tag="div" alt={src} fluid={image} />
}

export default RasterImg;
