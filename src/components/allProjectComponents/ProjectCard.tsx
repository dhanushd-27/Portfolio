import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  Name: string,
  Description: string,
  LiveLink: string
  ImageSrc: string,
  GithubLink: string
}

export default function ProjectCard({ LiveLink, ImageSrc, Name, Description, GithubLink }: Props) {
  return (
    <div className='w-[470px] flex flex-col border border-black rounded-3xl'>
      <Image src={'/Portfolio.png'} alt={ ImageSrc } height={232} width={470} className='rounded-t-3xl border-b-[1px]'/>
      <div className='flex px-8 py-4 gap-5'>
        <div className='w-full gap-2 flex flex-col items-start justify-start'>
          <h5 className='text-h5/h5 tracking-h5 text-black w-full text-wrap'>{ Name }</h5>
          <p className='w-full text-button/button text-wrap tracking-button text-black text-opacity-60'>{ Description }</p>
          <div className='flex gap-4 h-min'>
            <Link href={ LiveLink }><Image src={'/assets/Link.svg'} alt='link svg' height={16} width={16}/></Link>
            <Link href={ GithubLink }><Image src={'/assets/tools/Github.svg'} alt='link svg' height={16} width={16}/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
