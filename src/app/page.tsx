import Quote from "@/components/Quote"
import Techstack from "@/components/TechStack/Techstack"
import Profile from "@/components/Profile"
import Links from "@/components/Socials/Socials"
import About from "@/components/About"
import Photos from "@/components/Photos"
import Projects from "@/components/Projects"
import CopyMail from "@/components/CopyMail"
import React from "react"

export default function Home() {

  return (
    <>
      <div className="noise bg-bg-dark h-screen flex justify-center items-center p-5">
        <div className='grid grid-cols-12 grid-rows-12 gap-5 w-full h-full'>
          <Techstack />
          <Profile />
          <Links />
          <About />
          <Photos />
          <Projects />
          <CopyMail />
          <Quote />
        </div>
      </div>
    </>
  )
}
