import BackgroundBlock from "../components/background-block"
import MissingPageMDX from "../content/missing"
import Layout from "../components/layout"
import React from "react"

const Page404 = () => {
  return (
    <Layout>
      <BackgroundBlock src="home-bg" minHeight="70vh">
        <MissingPageMDX />
      </BackgroundBlock>
    </Layout>
  )
}

export default Page404;
