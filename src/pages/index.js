import { Container } from "react-bootstrap"
import React from "react"

import BackgroundBlock from "../components/background-block"
import CallToAction from "../components/call-to-action"
import ContentBlock from "../components/content-block"
import ImgSection from "../components/img-section"
import Layout from "../components/layout"

import BenefitsMDX from "../content/benefits"
import CallToActionMDX from "../content/call-to-action"
import ClubMDX from "../content/club"
import IntroMDX from "../content/intro"
import RoadmapMDX from "../content/roadmap"
import TeamMDX from "../content/team"

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
        component: ImgSection,
        attr: { markdown: ClubMDX, img: "Groundhog gif.gif", useImgTag: true }
      }
    ]
  },
  { id: "roadmap",
    subSections: [
      {
        component: RoadmapMDX
      }
    ]
  },
  { id: "team",
  subSections: [
    {
      component: TeamMDX
    }
  ]
  }
]

const HomePage = () => {
  return (
    <Layout light title="Gogo Groundhogs">
      <BackgroundBlock className="d-flex justify-content-center" src="home-bg" minHeight="">
        <CallToAction
          imgLeft={"Groundhog Profile"}
          imgRight={"Groundhog Terminator Small"}
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
