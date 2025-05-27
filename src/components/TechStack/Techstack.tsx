import React from 'react'
import Section from './Section'
import techStackData from '@/assets/techStack.json'

export default function Techstack() {
  return (
    <div className='box col-start-1 col-end-4 row-start-1 row-end-13 overflow-auto flex flex-col gap-6 relative'>
      <h3 className='header'>Tech Stack</h3>
      <div className='flex flex-col gap-2 hide-scrollbar overflow-y-auto'>
        {techStackData.categories.map((category) => (
          <Section 
            key={category.title}
            title={category.title} 
            items={category.items} 
          />
        ))}
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-bg-card'></div>
    </div>
  )
}
