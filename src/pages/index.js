import { Button, Container } from "react-bootstrap"
import React from "react"

import BackgroundBlock from "../components/background-block"
import CallToAction from "../components/call-to-action"
import ContentBlock from "../components/content-block"
import Layout from "../components/layout"
import RasterImg from "../components/raster-img"

import BenefitsMDX from "../content/benefits"
import CallToActionMDX from "../content/call-to-action"
import ClubMDX from "../content/club"
import IntroMDX from "../content/intro"
import RoadmapMDX from "../content/roadmap"

const SECTIONS = [
  { id: "intro",
    subSections: [
      {
        component: IntroMDX
      }
    ]
  },
  { id:"benefits",
    subSections: [
      {
        component: BenefitsMDX,
      }
    ]
  },
  { id:"club",
    subSections: [
      {
        component: ClubMDX,
      }
    ]
  },
  { id: "roadmap",
    subSections: [
      {
        component: RoadmapMDX
      }
    ]
  }
]

const HomePage = () => {
  return (
    <Layout light title="Gogo Groundhogs">
      <BackgroundBlock className="d-flex justify-content-center" src="home-bg" minHeight="100vh">
        <CallToAction
          imgLeft={"Groundhog Profile"}
          imgRight={"Groundhog Scope"}
          markdown={CallToActionMDX} />
      </BackgroundBlock>
      <Container fluid className="main-content-wrapper pt-4 px-4 text-left">
        {
          SECTIONS.map((section) => {
            return(
              <ContentBlock id={section.id} key={section.id} className={section.className}>
                {
                  section.subSections.map((subSection, i) => {
                    const Section = subSection.component;
                    return <Section key={i} {...subSection.attr} />
                  })
                }
              </ContentBlock>
            )
          })
        }
      </Container>
    </Layout>
  )
}

export default HomePage;
