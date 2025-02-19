import React from 'react'
import NavBar from './NavBar'
import PrimaryBtn from './PrimaryBtn'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-[1200px] border border-solid border-black py-6 flex justify-between items-center h-[88px] rounded-full fixed top-0 bg-white bg-opacity-30 shadow-inner shadow-black/10 backdrop-blur-sm mt-8 mx-[120px] px-[120px]'>
      <Link href={'/'} className='font-bold text-2xl text-gray-800'>Orca</Link>
      <div className='flex gap-7'>
        <NavBar />
        <PrimaryBtn BtnName='Get in Touch' link='mailto:dhanushd.work@gmail.com'/>
      </div>
    </header>
  )
}
