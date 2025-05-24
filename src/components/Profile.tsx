import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className='box col-start-4 col-end-6 row-start-1 row-end-7 flex items-center justify-center'>
      <div className='w-[250px] flex flex-col gap-2 items-start justify-center'>
        <div className='bg-surface-primary rounded-full text-xs px-2 text-center text-default flex items-center justify-center hover:bg-surface-secondary transition-colors duration-300 ease-in-out w-max'>
          {/* Add Animation here, like a loader and then available to work shows up */}
          <p>Available for work</p>
          <Image src={'/available.gif'} height={20} width={20} alt='Available for work' unoptimized={true}/>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className='relative w-11/12 h-[210px]'>
            <Image src={'/profile-pfp.jpg'} alt='Profile Picture' fill className='rounded-lg'/>
          </div>
        </div>
        <div className='flex flex-col gap-1 font-medium w-full'>
          <p className='text-default font-semibold'>D Dhanush</p>
          <p className='text-sm text-text-muted'>21 | Full Stack Developer & DevOps Engineer</p>
          <p className='text-sm text-text-muted'>Bengaluru, India</p>
        </div>
      </div>
    </div>
  )
}
