import React from 'react'

export default function Photos() {
  return (
    <div className='grid grid-cols-4 grid-rows-4 gap-3 col-start-7 col-end-10 row-start-7 row-end-11'>
      <div className='col-span-1 row-span-4 box p-0 text-muted'></div>
      <div className='col-start-2 col-end-5 row-start-1 row-end-4 box text-default p-0'></div>
      <div className='col-start-2 col-end-5 row-start-4 row-end-5 box text-text-default p-0'></div>
    </div>
  )
}
