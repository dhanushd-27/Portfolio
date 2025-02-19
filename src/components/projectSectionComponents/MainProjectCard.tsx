import React from 'react'
import MainDescriptionAndBtns from './MainDescriptionAndBtns'
import Image from 'next/image'

interface Props {
  Date: string,
  Name: string,
  Description: string,
  GithubLink: string,
  LiveLink: string,
  ProjectImage: string
}

export default function MainProjectCard({ Date, Name, Description, GithubLink, LiveLink, ProjectImage }: Props) {
  return (
    <div className='flex gap-8 p-8'>
      <MainDescriptionAndBtns Date={ Date } Name={ Name } Description={ Description } GithubLink={ GithubLink } LiveLink={ LiveLink } />
      <Image className='border border-solid border-black rounded-3xl' src={ ProjectImage } alt='#' height={256} width={480}/>
    </div>
  )
}
