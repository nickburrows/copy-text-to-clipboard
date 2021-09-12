import React from "react"

import ClipboardCopy from "./ClipboardCopy"

import { jsonData } from "../data"

const DescriptionLists = () => {
  // const evenNumbers = (n) => n % 2 == 0
  // const oddNumbers = (n) => Math.abs(n % 2) == 1

  const evenNumbers = jsonData.filter(function (number) {
    return number.id % 2 === 0
  })

  const oddNumbers = jsonData.filter(function (number) {
    return number.id % 2 === 1
  })

  console.log(oddNumbers)
  return (
    <div className="overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <div className="mt-1 text-sm sm:mt-0 sm:col-span-2">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {oddNumbers.map(({ id, name }) => (
              <ClipboardCopy copyText={name} id={id} key={id} />
            ))}
          </ul>
        </div>
        <div className="mt-1 text-sm sm:mt-0 sm:col-span-2">
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

export default DescriptionLists
