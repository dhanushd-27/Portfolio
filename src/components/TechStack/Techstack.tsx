import React from 'react'
import Section from './Section'
import techStackData from '@/assets/techStack.json'

export default function Techstack() {
  return (
    <div className='box-nohover col-start-1 col-end-4 row-start-1 row-end-13 overflow-auto'>
      <h3 className='header'>Tech Stack</h3>
      <div className='flex flex-col gap-2'>
        {techStackData.categories.map((category) => (
          <Section 
            key={category.title}
            title={category.title} 
            items={category.items} 
          />
        ))}
      </div>
    </div>
  )
}
