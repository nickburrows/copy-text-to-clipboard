import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledTooltip = styled.span`
  color: #ffffff;
  background-color: #171616;
`

const Page3 = () => {
  const title = "Page 3"

  return (
    <Layout title={title}>
      <Seo title={title} />
      <div className="mt-10">
        <span className="tooltip">
          <button>Button</button>
          <StyledTooltip className="tooltip-message on-top">
            This is Tooltip
          </StyledTooltip>
        </span>

        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="cursor-pointer relative inline-block border-b border-gray-400 w-28 text-center">
            <div className="w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
              Tooltip center
              <svg
                className="absolute text-black h-2 w-full left-0 top-full"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                xmlSpace="preserve"
              >
                <polygon
                  className="fill-current"
                  points="0,0 127.5,127.5 255,0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page3
