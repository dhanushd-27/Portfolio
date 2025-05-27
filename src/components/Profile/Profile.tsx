import Image from 'next/image'
import React from 'react'
import AvailableForWork from './AvailableForWork'
import TextDetails from './TextDetails'

export default function Profile() {
  return (
    <div className='box col-start-4 col-end-6 row-start-1 row-end-7 flex items-center justify-center relative py-4'>
      <div className='py-4 w-full h-11/12 flex flex-col gap-4 items-center justify-start hide-scrollbar overflow-y-auto'>
        <AvailableForWork />
        <Image src={'/profile-pfp.jpg'} alt='Profile Picture' height={200} width={200} className='rounded-lg'/>
        <TextDetails />
      </div>
      <div className='pointer-events-none absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-bg-card'></div>
    </div>
  )
}
