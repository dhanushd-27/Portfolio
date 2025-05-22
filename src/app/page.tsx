import React from 'react'

export default function Home() {
  return (
    <>
      <div className="bg-bg-dark h-screen flex justify-center items-center p-24">
        <div className='grid grid-cols-12 grid-rows-12 gap-5 w-full h-full'>
          <div className='box col-start-1 col-end-4 row-start-1 row-end-13 flex items-center justify-center'>
            <p className='text-default'>Tech Stack</p>
          </div>
          <div className='box col-start-4 col-end-6 row-start-1 row-end-7 flex items-center justify-center'>
            <p className='text-default'>Pfp With Name</p>
          </div>
          <div className='box col-start-6 col-end-10 row-start-1 row-end-7 flex items-center justify-center'>
            <p className='text-default'>About me</p>
          </div>
          <div className='box col-start-10 col-end-13 row-start-1 row-end-10 flex items-center justify-center'>
            <p className='text-default'>Projects</p>
          </div>
          <div className='box col-start-8 col-end-10 row-start-7 row-end-10 flex items-center justify-center'>
            <p className='text-default'>Photo</p>
          </div>
          <div className='box col-start-4 col-end-7 row-start-7 row-end-11 flex items-center justify-center'>
            <p className='text-default'>Links</p>
          </div>
          <div className='box col-start-10 col-end-13 row-start-10 row-end-13 flex items-center justify-center'>
            <p className='text-default'>Copy Mail</p>
          </div>
        </div>
      </div>
    </>
  )
}
