import React from 'react'

export default function Section({ title, description, repo, link, demo, deployed }: { title: string, description: string, repo: string, link: string, demo: string, deployed: boolean }) {
  return (
    <div className='flex flex-col gap-4 px-2'>
      <div className="flex w-full justify-between">
        <h3 className='section-title'>{title}</h3>
        <div className='flex w-2/6 justify-around text-left text-xs text-accent-light items-center'>
          <a href={repo} target='_blank' className='underline-offset-2 hover:underline hover:text-accent-white transition-all duration-300 ease-in-out'>Repo</a>
          <a 
            href={deployed ? link : demo} 
            target='_blank' 
            className='underline-offset-2 hover:underline hover:text-accent-white transition-all duration-300 ease-in-out'
          >
            {deployed ? 'Live' : 'Demo'}
          </a>
        </div>
      </div>
      <p className='section-description'>{description}</p>
    </div>
  )
}
