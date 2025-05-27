import Image from 'next/image'
import React from 'react'

export default function AvailableForWork() {
  return (
    <div className='w-full flex justify-start px-2'>
      <div className='bg-surface-primary rounded-full text-xs px-2 text-center text-default flex items-center justify-center hover:bg-surface-secondary transition-colors duration-300 ease-in-out w-max'>
        {/* Add Animation here, like a loader and then available to work shows up */}
        <p>Available for work</p>
        <Image src={'/available.gif'} height={20} width={20} alt='Available for work' unoptimized={true}/>
      </div>
    </div>
  )
}
