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
import withLocation from "../hooks/withLocation"
// import Header from "./header"
// import TopBar from "./TopBar"
import DarkHeader from "./DarkHeader"

const StyledMain = styled.main`
  margin-top: 50px;
`

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className="theme-dark bg-primary text-primary top-0">
      {/* <Header siteTitle={data.site.siteMetadata.title || `Gatsby`} /> */}
      <DarkHeader menuLinks={data.site.siteMetadata.menuLinks} title={title} />
      <StyledMain>
        <div className="w-full max-w-4xl mx-auto py-6 px-4 lg:px-8">
          {children}
        </div>
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
      </StyledMain>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withLocation(Layout)
