import React from 'react'

export default function Home() {
  return (
    <>
      <div className="bg-bg-dark h-screen flex justify-center items-center p-16">
        <div className='grid grid-cols-12 grid-rows-12 gap-5 w-full h-full'>
          <div className="box col-start-1 col-end-8 row-start-1 row-end-6 flex items-center justify-center">
            <p className='text-default'>1</p>
          </div>
          <div className="box col-start-1 col-end-5 row-start-6 row-end-13 flex items-center justify-center">
            <p className='text-default'>2</p>
          </div>
          <div className="box col-start-8 col-end-13 row-start-1 row-end-8 flex items-center justify-center">
            <p className='text-default'>3</p>
          </div>
          <div className="box col-start-5 col-end-8 row-start-6 row-end-9 flex items-center justify-center">
            <p className='text-default'>4</p>
          </div>
          <div className="box col-start-5 col-end-8 row-start-9 row-end-13 flex items-center justify-center">
            <p className='text-default'>5</p>
          </div>
          <div className='box col-start-8 col-end-13 row-start-8 row-end-13 flex items-center justify-center'>
            <p className='text-default'>6</p>
          </div>
        </div>
      </div>
    </>
  )
}
