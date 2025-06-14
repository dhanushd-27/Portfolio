import React from 'react'
import Section from './Section';
import projects from '@/assets/projects.json';

export default function Projects() {
  return (
    <div className='box projects-container'>
      <p className='header'>Projects</p>
      <div className='flex flex-col gap-8 overflow-y-auto hide-scrollbar'>
        {projects.map((project, index) => (
          <Section
            key={index}
            title={project.title}
            description={project.description}
            repo={project.repo}
            link={project.link}
            demo={project.demo}
            deployed={project.deployed}
          />
        ))}
      </div>
      <div className='hidden lg:block pointer-events-none absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-bg-card'></div>
    </div>
  )
}
