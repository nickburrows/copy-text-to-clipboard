import React from "react"
import { Link } from "gatsby"
import { Disclosure } from "@headlessui/react"
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"
import { HiX } from "@react-icons/all-files/hi/HiX"
// import ClipboardCopy from "../ClipboardCopy"
// import { jsonData } from "../data"
import classNames from "classnames"
// import TailwindSvg from "./tailwind.svg"

// const navLinks = [
//   { name: "預約活動", link: "/" },
//   { name: "聖光魔龍", link: "/event/" },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ")
// }

const DarkHeader = ({ title, siteTitle, menuLinks }) => {
  const navClass = "px-3 py-2 rounded-md text-sm font-medium"
  const isCurrentClass = "bg-gray-900 text-white"
  const notCurrentClass = "text-gray-300 hover:bg-gray-700 hover:text-white"
  const mobileNavClass = "block px-3 py-2 rounded-md text-base font-medium"

  // navLinks.map((item, index) =>
  //   console.log(index + " = " + item.name + " = " + item.link)
  // )

  return (
    <div id="topNavigate">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link
                      className="text-lg font-bold leading-relaxed flex items-center space-x-4 py-2 uppercase text-white"
                      to="/"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="fill-current w-8 h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                      </svg>
                      <span>{title}</span>
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {menuLinks.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className={classNames(
                            item.current ? isCurrentClass : notCurrentClass,
                            navClass
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuLinks.map(({ link, name, current }, index) => (
                  <Link
                    key={index}
                    to={link}
                    className={classNames(
                      current ? isCurrentClass : notCurrentClass,
                      mobileNavClass
                    )}
                    aria-current={current ? "page" : undefined}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default DarkHeader
