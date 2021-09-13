import React, { useState } from "react"
import useClipboard from "../hooks/useClipboard"
import Tooltip from "./Tooltip"
import ClipboardCopy from "./ClipboardCopy"
// import useCopyToClipboard from "../hooks/useCopyToClipboard"
import { jsonData } from "../data"
import { BiCopy } from "@react-icons/all-files/bi/BiCopy"
// import { classNames } from "classnames"

// const TextCopy = props => {
//   const [copied, copy] = useCopyToClipboard("Lorem ipsum")

//   return (
//     <div>
//       <button onClick={copy}>Click to copy</button>
//       <span>{copied && "Copied!"}</span>
//     </div>
//   )
// }

const ClipBoardExample2 = () => {
  // const evenNumbers = (n) => n % 2 == 0
  // const oddNumbers = (n) => Math.abs(n % 2) == 1

  const evenNumbers = jsonData.filter(function (number) {
    return number.id % 2 === 0
  })

  const oddNumbers = jsonData.filter(function (number) {
    return number.id % 2 === 1
  })

  const [tooltip, setTooltip] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const handleCopyClick = text => {
    
    setTooltip(true)
    setTimeout(() => {
      setTooltip(false)
    }, 2000)
  }

  // console.log(oddNumbers)
  return (
    <div className="max-w-screen-sm min-w-0 flex-auto xl:px-8 pt-4 lg:pt-10">
      <h1 className="text-xl">聖光魔龍 - 領取能量</h1>
      <span
        className="tooltip-message on-top"
        style={{
          color: "#ffffff",
          backgroundColor: "#171616",
        }}
      >
        Tooltip
      </span>
      
      <div className="block my-6">
        <Tooltip text="Simple tooltip">
          <button>Hover me!</button>
        </Tooltip>
        <button onClick={handleCopyClick}>Click to show tooltip!</button>
        <span className="tooltip">
          {tooltip && (
            <span
              className="tooltip-message on-top"
              style={{
                color: "#ffffff",
                backgroundColor: "#171616",
              }}
            >
              <BiCopy />
            </span>
          )}
        </span>
      </div>
      <div className="px-2 py-5 grid grid-rows-1 grid-flow-col gap-2 auto-cols-auto">
        <div className="mt-1 text-sm">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {oddNumbers.map(({ id, name }) => (
              <ClipboardCopy copyText={name} id={id} key={id} />
            ))}
          </ul>
        </div>
        <div className="mt-1 text-sm">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {evenNumbers.map(({ id, name }) => (
              <ClipboardCopy copyText={name} id={id} key={id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ClipBoardExample2
