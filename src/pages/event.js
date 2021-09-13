import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ClipBoardExample2 from "../components/ClipBoardExample2"

const EventPage = () => {
  const title = "聖光魔龍"
  return (
    <Layout title={title}>
      <Seo title={title} />
      <ClipBoardExample2 />
    </Layout>
  )
}

export default EventPage
