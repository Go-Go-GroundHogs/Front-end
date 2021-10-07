import { Col, Row } from "react-bootstrap"
import React from "react"

import styled from "@emotion/styled"

const ROADMAP_STEPS = [
  { pct: 0, text: "250 Genesis GoGo Groundhog NFTs will be reserved specifically for giveaways to Discord members! One Genesis GoGo Groundhog NFT will be airdropped to 10 of our earliest Discord members." },
  { pct: 10, text: "The GoGo Groundhog Discord server will be revamped and updated to facilitate top-notch communication in our community. Rarity tools and listing will be added and updated." },
  { pct: 25, text: "One Genesis GoGo Groundhog Collection NFT will be airdropped to 5 lucky winners who were early minters!" },
  { pct: 50, text: "Ten lucky minters will be airdropped 1 Genesis GoGo Groundhog Collection NFT. Official Genesis GoGo Groundhog Collection merchandise store will be launched – full of limited edition plushies, t-shirts, hoodies, and various other fun goodies! Community members will be eligible to vote on a 1 ETH donation to a charity of the community’s choosing." },
  { pct: 75, text: "An additional 5 lucky minters will be airdropped 1 Genesis GoGo Groundhog Collection NFT." },
  { pct: 100, text: "Groundhog holders will receive 30% APR interest on their NFTs from the original mint price - in the form of a DAI! This means if you spend $1000, you get back $300 in the form of DAI, straight to the wallet where your Groundhogs are! We will also begin work on a 3D collection, as well as the possibility of a Groundhogs game with the help of the community!" },
]

const RoadmapTree = () => {
  const HeadingCol = styled(Col)`
    color: #ffffff;
    display:flex;
    justify-content: center;
    padding:0 !important;

    h3 {
      background-color: #de9100;
      border-radius: .5rem;
      margin: 0 5px;
      padding: 10px;
      min-width: 120px;
      text-align: center;
      z-index: 1;

      @media (max-width: 400px) {
        min-width: auto;
      }
    }

    div {
      z-index:11111;
      position: relative;
      width: 100%;
      top: 20px;
    }
  `;

  const DescCol = styled(Col)`
    p {
      font-size: 18px;
      padding: 20px;
    }
  `;

  const WrapperRow = styled(Row)`
    align-items: center;
  `;

  const RoadmapWrapper = styled.div`
    .row:nth-child(even) {
      margin-right: -4px;
    }
    .row:nth-child(odd) {
      margin-right: 0px;
    }
    .row:nth-child(even) div[class*="col-"]:nth-child(1) {
      border-right: 2px dashed #4a4a10;
    }
    .row:nth-child(odd) div[class*="col-"]:nth-child(2) {
      border-left: 2px dashed #4a4a10;
    }
    .row:nth-child(odd) div[class*="col-"]:nth-child(1) {
      div:nth-of-type(2) {
        border-top: 2px dashed #4a4a10;
      }
    }
    .row:nth-child(even) div[class*="col-"]:nth-child(2) {
      div:nth-of-type(1) {
        border-top: 2px dashed #4a4a10;
      }
    }

    @media (max-width: 600px) {
      div  {
        border-top: none !important;
      }
    }
  `;

  return (
    <RoadmapWrapper>
      {
        ROADMAP_STEPS.map((step, i) => {
          const heading = <HeadingCol xs={3} sm={6}>
                            <div />
                            <h3>{`${step.pct}% sold`}</h3>
                            <div />
                          </HeadingCol>
          const desc = <DescCol xs={9} sm={6}><p>{step.text}</p></DescCol>

          const leftEl = i % 2 ? desc : heading
          const rightEl = i % 2 ? heading : desc

          return (
            <WrapperRow>
              {leftEl}
              {rightEl}
            </WrapperRow>
          )
        })
      }
    </RoadmapWrapper>
  )
}

export default RoadmapTree;
