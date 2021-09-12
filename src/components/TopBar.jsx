import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: #20232a;
  color: #ffffff;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
`
const HeaderBlock = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`

const TopBar = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <HeaderBlock>
        <div className="h-16 w-10/12">
          <Link to="/" className="titleLink">
            {siteTitle}
          </Link>
        </div>
      </HeaderBlock>
    </StyledHeader>
  )
}

export default TopBar
