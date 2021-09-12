import React from "react"
import { BiCheckbox } from "@react-icons/all-files/bi/BiCheckbox"
import ClipboardCopy from "./ClipboardCopy"

import { jsonData } from "../data"

const ClipBoardExample = () => {
  return (
    <div className="flex justify-center pt-8 w-full">
      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <div className="mt-1 text-sm sm:mt-0 sm:col-span-2">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {jsonData.map(({ id, name }) => (
              <ClipboardCopy copyText={name} id={id} key={id} />
            ))}
          </ul>
        </div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <BiCheckbox
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2 flex-1 w-0 truncate">
                  resume_back_end_developer.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  href="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Download
                </a>
              </div>
            </li>
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <BiCheckbox
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2 flex-1 w-0 truncate">
                  coverletter_back_end_developer.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Download
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ClipBoardExample
