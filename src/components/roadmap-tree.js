import { Col, Row } from "react-bootstrap"
import React from "react"

import styled from "@emotion/styled"

const ROADMAP_STEPS = [
  { pct: 0, text: "250 Groundhog Day NFTs will be reserved specifically for giveaways to Discord members! One Groundhog Day NFT will be airdropped to 10 of our earliest Discord members." },
  { pct: 10, text: "Groundhog Day Discord server will be revamped and updated to facilitate top-notch communication in our community. Rarity tools and listing will be added and updated." },
  { pct: 25, text: "One Groundhog Day NFT will be airdropped to 5 lucky winners who were early minters!" },
  { pct: 50, text: "Ten lucky minters will be airdropped 1 Groundhog Day NFT. Official Groundhog Day merchandise store will be launched – full of limited edition plushies, t-shirts, hoodies, and various other fun goodies! Community members will be eligible to vote on a 1 ETH donation to a charity of the community’s choosing." },
  { pct: 75, text: "An additional 5 lucky minters will be airdropped 1 Groundhog Day NFT." },
  { pct: 100, text: "Groundhog holders will receive 30% APR interest on their NFTs from the original mint price - in the form of a DAI! This means if you spend $1000, you get back $300 in the form of DAI, straight to the wallet where your Groundhogs are! We will also begin work on a 3D collection, as well as the possibility of a Groundhogs game with the help of the community!" },
]

const RoadmapTree = () => {
  const HeadingCol = styled(Col)`
    color: #ffffff;
    display:flex;
    justify-content: center;
    padding:0;

    h3 {
      background-color: #de9100;
      border-radius: .5rem;
      margin: 0 5px;
      padding: 10px;
      min-width: 120px;
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
    margin-right: 12px;
  }
  .row:nth-child(odd) {
    margin-left: 12px;
  }
    .row:nth-child(even) .col:nth-child(1) {
      border-right: 2px dashed #4a4a10;
    }

    .row:nth-child(odd) .col:nth-child(2) {
      border-left: 2px dashed #4a4a10;
    }


    .row:nth-child(odd) .col:nth-child(1) {
      div:nth-of-type(2) {
        border-top: 2px dashed #4a4a10;
      }
    }

    .row:nth-child(even) .col:nth-child(2) {
      div:nth-of-type(1) {
        border-top: 2px dashed #4a4a10;
      }
    }



  `;

  return (
    <RoadmapWrapper>
      {
        ROADMAP_STEPS.map((step, i) => {
          const heading = <HeadingCol><div /><h3>{`${step.pct}% sold`}</h3><div /></HeadingCol>
          const desc = <DescCol><p>{step.text}</p></DescCol>

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
