import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ClipBoardExample2 from "../components/ClipBoardExample2"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="min-w-0 flex-auto px-4 xl:px-8 pt-4 lg:pt-10">
      <ClipBoardExample2 />
    </div>
  </Layout>
)

export default IndexPage
