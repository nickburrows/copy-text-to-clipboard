import React, { useState } from "react"
import classNames from "classnames"
import { BiCopy } from "@react-icons/all-files/bi/BiCopy"

function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false)

  // This is the function we wrote earlier
  const copyTextToClipboard = async text => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const inputClass = `text-center max-w-2/3 w-1/2`

  return (
    <div className="w-full inline-block space-x-2 justify-center">
      <input
        className={classNames(inputClass, {
          "text-red-500 line-through": isCopied
        })}
        type="text"
        value={copyText}
        readOnly
      />
      {/* Bind our handler function to the onClick button property */}
      <button className="inline-flex" onClick={handleCopyClick}>
        {isCopied ? <span className="text-red-500">Copied!</span> : <BiCopy />}
      </button>
    </div>
  )
}

export default ClipboardCopy
