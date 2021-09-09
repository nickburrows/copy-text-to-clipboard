import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ClipBoardExample from "../components/ClipBoardExample"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <ClipBoardExample />
  </Layout>
)

export default IndexPage
