import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DescriptionLists from "../components/DescriptionLists"

const ListPage = () => (
  <Layout>
    <Seo title="Description Lists" />

    <DescriptionLists />
  </Layout>
)

export default ListPage
