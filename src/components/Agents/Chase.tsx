import React from 'react'
import Image from 'next/image'

export default function Chase() {
  return (
    <div className='box-nohover col-start-7 col-end-10 row-start-7 row-end-11'>
      <p className='header'>Chase</p>
      <div className='relative w-full h-[200px] flex items-center justify-center'>
        <div className='relative w-32 h-32'>
          <Image
            src="/agents/chase.gif"
            alt="Chase Character"
            fill
            className='object-contain'
            priority
          />
        </div>
        <div className='absolute bottom-0 left-0 right-0 text-center'>
          <p className='text-default text-sm'>Your AI Assistant</p>
        </div>
      </div>
    </div>
  )
} 