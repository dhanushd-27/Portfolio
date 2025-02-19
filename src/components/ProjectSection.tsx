import React from 'react'
import projects from '@/config/projects'
import MainProjectCard from './projectSectionComponents/MainProjectCard'

export default function ProjectSection() {
  return (
    <div className='flex flex-col gap-16 items-center justify-center mt-[292px] mb-[128px]'>
      { projects.map(project => (
        <MainProjectCard key={ project.Name } Name={ project.Name } Date={ project.Date } Description={ project.Description } GithubLink={ project.GithubLink } LiveLink={ project.LiveLink } ProjectImage={ project.ProjectImage }/>
      ))}
    </div>
  )
}
