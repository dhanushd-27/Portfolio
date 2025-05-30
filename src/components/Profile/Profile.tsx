import Image from 'next/image'
import React from 'react'
import AvailableForWork from './AvailableForWork'
import TextDetails from './TextDetails'

export default function Profile() {
  return (
    <div className='box profile-container'>
      <div className='w-full h-11/12 hide-scrollbar overflow-y-auto profile-content'>
        <AvailableForWork />
        <Image src={'/profile-pfp.jpg'} alt='Profile Picture' height={200} width={200} className='rounded-lg'/>
        <TextDetails />
        <div className='hidden lg:block pb-3'></div>
      </div>
      <div className='hidden lg:block pointer-events-none absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-bg-card'></div>
    </div>
  )
}
