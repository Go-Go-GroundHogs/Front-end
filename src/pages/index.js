import { Button, Container } from "react-bootstrap"
import React from "react"

import BackgroundBlock from "../components/background-block"
import ContentBlock from "../components/content-block"
import EmailForm from "../components/email-form"
import Layout from "../components/layout"
import TextImgSection from "../components/text-img-section"
import CallToActionBanner from "../components/call-to-action-banner"

import IntroMDX from "../content/intro"
import Info1MDX from "../content/info1"
import TypesMDX from "../content/types"
import LiveGirlsMDX from "../content/live-girls"
import BenefactorsMDX from "../content/benefactors"
import GentlemansClubMDX from "../content/gentlemans-club"
import RoadmapMDX from "../content/roadmap"
import TeamMDX from "../content/team"

const SECTIONS = [
  { id: "intro",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: IntroMDX, img: "4-small", hColors: ['#FF99CC', '#8FAADC']}
      },
      {
        component: CallToActionBanner,
        attr: {
          id: "buy-on-open-sea-2",
          className: "blue-bg",
          text: <h2>MINT OUR HAREMS GIRLS NOW <br />COLLECTION ON OPEN SEA</h2>,
          cta: <Button href="https://mint.harems.io/" variant="primary" enabled><h1>Mint Now</h1></Button>
        }
      }
    ]
  },
  { id:"info1",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: Info1MDX, img: "8-small", hColors: ['#FFFF00', '#FFC000']}
      }
    ]
  },
  { id:"types",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: TypesMDX, img: "Rarity types", hColors: ['#8FAADC'], imgType:"wideRightImg"}
      }
    ]
  },
  { id:"live-girls",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: LiveGirlsMDX, img: "Live Girls", hColors: ['#C709C7'], imgType: "markdownImg"}
      }
    ]
  },
  { id:"benefactors",
    subSections: [
      {
        component: TextImgSection,
        attr: {markdown: BenefactorsMDX, img: "Benefactors", hColors: ['#FFC000'], imgType: "markdownImg"}
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
    <Layout dark title="Harems">
      <BackgroundBlock className="align-items-end d-flex justify-content-center" src="home-bg-lounge" minHeight="90vh">

        <CallToActionBanner
          id="buy-on-open-sea-1"
          className="blue-bg"
          text={<h2>MINT OUR HAREMS GIRLS NOW <br />COLLECTION ON OPEN SEA</h2>}
          cta={<Button href="https://mint.harems.io/" variant="primary" enabled><h1>Mint Now</h1></Button>}
        />
        {/**/}

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
