import Quote from "@/components/Quote"
import Techstack from "@/components/TechStack/Techstack"
import Profile from "@/components/Profile/Profile"
import Links from "@/components/Socials/Socials"
import About from "@/components/About"
import Photos from "@/components/Photos"
import Projects from "@/components/Projects/Projects"
import CopyMail from "@/components/CopyMail"
import Switch from "@/components/Switch"
import React from "react"

export default function Home() {

  return (
    <>
      <div className="bg-bg-dark flex lg:h-screen justify-center items-center p-5">
        <div className='screen'>
          <Profile />
          <About />
          <Techstack />
          <Projects />
          <CopyMail />
          <Links />
          <Switch />
          <Photos />
          <Quote />
        </div>
      </div>
    </>
  )
}
