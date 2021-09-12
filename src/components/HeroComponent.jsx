import React from "react"
import { Link } from "gatsby"

const HeroComponent = ({ title1, title2 }) => {
  return (
    <>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hero Sections</span>{" "}
            <span className="block text-cyan-500 xl:inline">
              With angled image on right
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
              >
                Go back to the Homepage
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-300 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="lg:w-full lg:h-full"
          src="https://www.apple.com/v/apple-events/home/s/images/overview/hero__d6adldydsqye_large.jpg"
          alt=""
        />
      </div>
    </>
  )
}

export default HeroComponent
