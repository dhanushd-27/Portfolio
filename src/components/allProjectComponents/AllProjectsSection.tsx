import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '@/config/projects'

export default function AllProjectsSection() {
  return (
    <div className='w-full h-auto px-[180px] py-8 mt-[120px] flex flex-col gap-8'>
      <h4 className='text-h4/h4'>All Projects</h4>
      <div className='flex flex-wrap justify-between gap-11 px-12'>
        { projects.map( project => (
          <ProjectCard key={ project.Name } Name={project.Name} Description={ project.Description} LiveLink={ project.LiveLink } ImageSrc={ project.ProjectImage } GithubLink={ project.GithubLink }/>
        ))}
      </div>
    </div>
  )
}
