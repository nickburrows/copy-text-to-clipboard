import React from "react"

import ClipboardCopy from "./ClipboardCopy"

import { jsonData } from "../data"

const ClipBoardExample2 = () => {
  // const evenNumbers = (n) => n % 2 == 0
  // const oddNumbers = (n) => Math.abs(n % 2) == 1

  const evenNumbers = jsonData.filter(function (number) {
    return number.id % 2 === 0
  })

  const oddNumbers = jsonData.filter(function (number) {
    return number.id % 2 === 1
  })

  // console.log(oddNumbers)
  return (
    <div className="min-w-0 flex-auto xl:px-8 pt-4 lg:pt-10">
      <h1 className="text-xl">聖光魔龍 - 領取能量</h1>
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
