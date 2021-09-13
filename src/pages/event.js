import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ClipBoardExample from "../components/ClipBoardExample"

const EventPage = () => {
  const title = "預約活動"
  return (
    <Layout title={title}>
      <Seo title={title} />
      <ClipBoardExample />
    </Layout>
  )
}

export default EventPage
