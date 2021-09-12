import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroComponent from "../components/HeroComponent"

import CopyText from "../components/CopyText"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div className="relative bg-white overflow-hidden">
      <div className="">
        <HeroComponent />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link className="btn btn-primary" to="/">
          Go back to the homepage
        </Link>
        <div className="overflow-hidden sm:rounded-lg">
          <div className="-mx-1 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4">
            <div className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pr-4 py-3 flex items-center justify-between text-sm">
                  <CopyText copyText="https://www.google.com" />
                </li>
                <li className="pr-4 py-3 flex items-center justify-between text-sm">
                  <CopyText copyText="https://tailwindcss.com/" />
                </li>
                <li className="pr-4 py-3 flex items-center justify-between text-sm">
                  <CopyText copyText="https://www.gatsbyjs.com/" />
                </li>
                <li className="pr-4 py-3 flex items-center justify-between text-sm">
                  <CopyText copyText="https://csb-6bc4r.netlify.app/" />
                </li>
                <li className="pr-4 py-3 flex items-center justify-between text-sm">
                  <CopyText copyText="https://csb-6bc4r.netlify.app/page-2" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="section">
          <label htmlFor="paste-text-test">Paste Text From Clipboard</label>
          <textarea
            className="mt-4"
            name="copy-and-paste"
            id="paste-text-test"
            cols="22"
            rows="3"
          />
        </section>
      </div>
    </div>
  </Layout>
)

export default SecondPage
