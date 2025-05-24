import Image from 'next/image'
import React from 'react'

export default function Photos() {
  return (
    <div className='grid grid-cols-9 grid-rows-8 gap-3 col-start-6 col-end-10 row-start-7 row-end-11'>
      <div className='col-span-3 row-span-8 box box-hover p-0 text-muted relative'>
        <Image src={'/luffy-vertical.jpeg'} alt='luffy' fill className='object-cover rounded-lg'/>
      </div>
      <div className='col-start-4 col-end-11 row-start-1 row-end-6 box box-hover text-default p-0 relative'>
        <Image src={'/banner.jpg'} alt='Banner' fill className='object-cover rounded-lg'/>
      </div>
      <div className='col-start-4 col-end-11 row-start-6 row-end-9 box box-hover text-text-default p-0 relative'>
        <Image src={'/law-luffy.jpeg'} alt='nakama' fill className='object-cover rounded-lg'/>
      </div>
    </div>
  )
}
