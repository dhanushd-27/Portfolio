import Image from 'next/image'
import React from 'react'
import AvailableForWork from './AvailableForWork'
import TextDetails from './TextDetails'

export default function Profile() {
  return (
    <div className='box col-start-4 col-end-6 row-start-1 row-end-7 flex items-center justify-center hide-scrollbar overflow-y-auto'>
      <div className='py-4 w-full flex flex-col gap-4 items-center justify-start'>
        <AvailableForWork />
        <Image src={'/profile-pfp.jpg'} alt='Profile Picture' height={200} width={200} className='rounded-lg'/>
        <TextDetails />
      </div>
    </div>
  )
}
