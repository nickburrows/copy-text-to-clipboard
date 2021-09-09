import React, { useState, useRef } from "react"

import ClipboardCopy from "./ClipboardCopy"

import { jsonData } from "../data"

const ClipBoardExample = () => {
  return (
    <div className="flex justify-center pt-8">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 w-full my-4">
        {jsonData.map(({ id, name }) => (
          <ClipboardCopy copyText={name} key={id} />
        ))}
      </div>
    </div>
  )
}

export default ClipBoardExample
