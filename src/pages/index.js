import { Button, Container } from "react-bootstrap"
import React from "react"

import BackgroundBlock from "../components/background-block"
import CallToAction from "../components/call-to-action"
import CallToActionBanner from "../components/call-to-action-banner"
import Carousel3D from "../components/carousel-3d"
import ContentBlock from "../components/content-block"
import EmailForm from "../components/email-form"
import Layout from "../components/layout"
import RasterImg from "../components/raster-img"
import TextImgSection from "../components/text-img-section"


import CallToActionMDX from "../content/call-to-action"
import IntroMDX from "../content/intro"
import Info1MDX from "../content/info1"
import TypesMDX from "../content/types"
import LiveGirlsMDX from "../content/live-girls"
import BenefactorsMDX from "../content/benefactors"
import GentlemansClubMDX from "../content/gentlemans-club"
import RoadmapMDX from "../content/roadmap"
import TeamMDX from "../content/team"

const CAROUSEL_IMAGES = [
  '241180858_210173591097713_3254127091026144355_n.jpg',
  '242413246_198117819082822_2512234783661161239_n.png',
  '242662278_351131996792436_3164517192214611283_n.png',
  '242662684_556932562187658_793506315002072693_n.png',
  '242690115_389067659501615_205551625228433586_n.png',
  '242877457_159365253038369_8722042843496788759_n.png'
]

const SECTIONS = [
  { id: "intro",
    subSections: [
      {
        component: Carousel3D,
        attr: { images: CAROUSEL_IMAGES }
      }
    ]
  },
  { id:"gentlemans-club",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: GentlemansClubMDX, img: "24-small", hColors: ['#7030A0', '#FFC000']}
      }
    ]
  },
  { id:"roadmap",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: RoadmapMDX, img: "7-small", hColors: ['#FF99CC']}
      }
    ]
  },
  { id:"team",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: TeamMDX, img: "9-small", hColors: ['#FFFF00']}
      }
    ]
  }
]

const HomePage = () => {
  return (
    <Layout light title="Harems">
      <BackgroundBlock className="d-flex justify-content-center" src="home-bg" minHeight="100vh">
        <CallToAction
          imgLeft={"Groundhog Profile"}
          imgRight={"Groundhog Scope"}
          markdown={CallToActionMDX} />
      </BackgroundBlock>
      <CallToActionBanner className="black-bg border-bottom border-top" text={<h1>Get the Latest</h1>} cta={<EmailForm id="top-email-form" hideLabel />} ctaFirst />
      <Container fluid className="black-bg pt-4 px-4 text-left">
        {
          SECTIONS.map((section) => {
            return(
              <ContentBlock id={section.id} key={section.id}>
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
