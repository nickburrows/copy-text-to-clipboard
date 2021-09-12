import React, { useState } from "react"
import classNames from "classnames"
import { BiCopy } from "@react-icons/all-files/bi/BiCopy"

const CopyText = ({ copyText }) => {
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

  const inputClass = `hidden text-lg border-none`

  const spanClass = `ml-4 text-lg flex-1 w-0 truncate`

  return (
    <div className="w-0 flex-1 flex items-center">
      <span
        className={classNames(spanClass, {
          "text-red-500 line-through": isCopied,
        })}
      >
        {copyText}
        <input className={inputClass} type="text" value={copyText} readOnly />
      </span>
      {/* Bind our handler function to the onClick button property */}
      <div className="ml-2 flex-shrink-0">
        <button className="font-medium text-lg" onClick={handleCopyClick}>
          {isCopied ? (
            <span className="text-red-500">Copied!</span>
          ) : (
            <BiCopy className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  )
}

export default CopyText
