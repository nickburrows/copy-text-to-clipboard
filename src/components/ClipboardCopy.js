import React, { useState } from "react"
import classNames from "classnames"
import { BiCopy } from "@react-icons/all-files/bi/BiCopy"
import styled from "styled-components"
// import { BiCheckbox } from "@react-icons/all-files/bi/BiCheckbox"
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble"

const StyledTooltip = styled.span`
  color: #ffffff;
  background-color: #171616;
`

function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false)
  const [tooltip, setTooltip] = useState(false)
  // const [copySuccess, setCopySuccess] = useState("")

  // This is the function we wrote earlier
  const copyTextToClipboard = async (text) => {
    // if ("clipboard" in navigator) {
    // if (navigator.clipboard) {
    //   return await navigator.clipboard.writeText(text)
    // } else {
    //   return document.execCommand("copy", true, text)
    // }
    try {
      await navigator.clipboard.writeText(text)
      console.log("Copied!")
    } catch (e) {
      console.log(`Can't copy to clipboard`)
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        setTooltip(true)
        setTimeout(() => {
          setIsCopied(false)
          setTooltip(false)
        }, 2000)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const inputClass = `text-lg border-none ring-0`

  return (
    <>
      <li className="pr-4 py-2 flex items-center justify-between text-sm">
        <div className="w-0 flex-1 flex items-center">
          <span className="flex-1 w-0 truncate">
            <input
              className={classNames(inputClass, {
                "text-red-500 line-through": isCopied,
              })}
              type="text"
              value={copyText}
              readOnly
            />
          </span>
        </div>
        <div className="ml-2 flex-shrink-0">
          <span className="tooltip">
            <button className="font-medium" onClick={handleCopyClick}>
              {isCopied ? (
                <>
                  <BiCheckDouble className="h-6 w-6 text-green-500" />
                  <StyledTooltip className="tooltip-message on-top">
                    {copyText}
                  </StyledTooltip>
                </>
              ) : (
                <BiCopy className="h-6 w-6" />
              )}
            </button>
          </span>
        </div>
      </li>
    </>
  )
}

export default ClipboardCopy
