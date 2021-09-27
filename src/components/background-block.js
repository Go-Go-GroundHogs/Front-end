import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import React from "react"

/*
  this component is essentially a wrapper for Gatsby's BackgroundImage component
  which has a bunch of built in features to optimally load normally-expensive images.

  it is explained here https://www.gatsbyjs.com/plugins/gatsby-background-image/

  there is also a corresponding https://www.gatsbyjs.com/plugins/gatsby-image/ for
  regular images (<img />) that pretty much does the same thing, but it is not
  installed in this app.
*/
const BackgroundBlock = (props) => {
  const fileName = props.src;
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
      }`
    );

  const image = data.allFile.edges.find(
    edge => edge.node.name === fileName).node.childImageSharp.fluid;

  return(
    <BackgroundImage
      Tag="div"
      className={props.className}
      fluid={image}
      style={{
        backgroundPosition: props.position || "top",
        minHeight: props.minHeight,
        maxHeight: props.maxHeight,
        width: "auto"
      }}
    >
      {props.children}
    </BackgroundImage>
  )
}

export default BackgroundBlock;
