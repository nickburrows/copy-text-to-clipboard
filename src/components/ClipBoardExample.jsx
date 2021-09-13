import React from "react"
// import { BiCheckbox } from "@react-icons/all-files/bi/BiCheckbox"
import ClipboardCopy from "./ClipboardCopy"

// import { jsonData } from "../data"

const sharingCode = [
  { id: 1, code: "AOVA2ET9B6KCV" },
  { id: 2, code: "AOVN6ZYA6AUGN" },
  { id: 3, code: "AOVXZBQU9PW6N" },
  { id: 4, code: "AOV67K9NP2D7Z" },
  { id: 5, code: "AOVWN4C6RCQRY" },
  { id: 6, code: "AOV5X53CC76GQ" },
  { id: 7, code: "AOVGWCUGW7C63" },
  { id: 8, code: "AOVC3RH2DZ9W3" },
  { id: 9, code: "AOV6NZNPSK6ZX" },
  { id: 10, code: "AOV55TF246UCZ" },
  { id: 11, code: "AOVWDUAHYVG7J" },
]

const ClipBoardExample = () => {
  return (
    <div className="max-w-screen-sm min-w-0 flex-auto xl:px-8 pt-4 lg:pt-10">
      <h1 className="text-xl">預約活動 - 分享碼</h1>
      <div className="px-2 py-5 grid grid-flow-col grid-rows-1 auto-cols-auto gap-2">
        <div className="mt-1 text-sm grid grid-flow-col grid-rows-1 auto-cols-auto gap-2">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {sharingCode.map(({ id, code }) => (
              <ClipboardCopy copyText={code} id={id} key={id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ClipBoardExample
