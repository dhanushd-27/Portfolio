import React from 'react'

export default function About() {
  return (
    <div className='box col-start-6 col-end-10 row-start-1 row-end-7 flex flex-col gap-6 relative'>
      <p className='header'>About</p>
      <div className='text-text-default tracking-wide text-sm leading-6 text-justify px-4 flex flex-col gap-1 overflow-y-auto hide-scrollbar relative'>
        <p>
          I&apos;m a 21-year-old Computer Science graduate from Sai Vidya Institute of Technology, Bengaluru (class of 2025), with a strong interest in <span className='text-accent-white underline'>Web development and DevOps</span>.
        </p>
        <p>
          I&apos;m currently <span className='text-accent-white underline'>open to internship or full-time opportunities</span> in web development or DevOps.
        </p>
        <p>
          I&apos;m currently exploring Go, vertical scaling, containerization, and kubernetes to deepen my backend and DevOps knowledge.
        </p>
        <p>
          Outside of tech, I enjoy watching anime and cricket, playing FPS games like Valorant, and reading fiction. A book I recommend is A Man Called Ove by Fredrik Backman.
        </p>
        <p>
          You can find my projects and contributions on my <a href="https://github.com/dhanushd-27" className="text-accent-white hover:underline">GitHub</a>.
        </p>
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-bg-card'></div>
    </div>
  )
}
