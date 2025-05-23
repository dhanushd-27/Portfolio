import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className='box-nohover col-start-4 col-end-6 row-start-1 row-end-7 flex flex-col gap-2 items-start justify-center'>
      <div className='bg-surface-primary rounded-full text-xs px-2 text-center text-default flex gap-1 items-center justify-center hover:bg-surface-secondary transition-colors duration-300 ease-in-out w-max'>
        <p>Available for work</p>
        <Image src={'/available.gif'} height={20} width={20} alt='Available for work'/>
      </div>
      <Image src={'/profile-pfp.jpg'} alt='Profile Picture' width={250} height={200} className='rounded-lg '/>
      <div className='flex flex-col gap-1 font-medium'>
        <p className='text-default font-semibold'>D Dhanush</p>
        <p className='text-sm text-text-muted'>21 | Full Stack Developer & DevOps Engineer</p>
      </div>
    </div>
  )
}
