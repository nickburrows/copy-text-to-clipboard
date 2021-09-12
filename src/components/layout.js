/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// import Header from "./header"
import TopBar from "./TopBar"

const MainDiv = styled.div`
  margin-top: 50px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="theme-dark bg-primary text-primary top-0">
      <TopBar siteTitle={data.site.siteMetadata.title || `Hello`} />
      <MainDiv className="w-full max-w-8xl mx-auto">
        <main>{children}</main>
        <footer
          className="hidden"
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </MainDiv>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
