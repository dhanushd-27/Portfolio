import React from 'react'
import PrimaryBtn from '@/components/PrimaryBtn';
import SecondaryBtn from '@/components/SecondaryBtn';

export default function Main() {
  return (
    <div className='w-[842px] h-auto flex flex-col gap-6 items-center mt-[248px]'>
      <h1 className='text-center text-h1/h1 text-secondary tracking-h1 font-bold'><span className='text-black text-opacity-40 block'>Hey, I am Dhanush,</span> Full Stack Web Developer</h1>
      <p className='w-[518px] text-center text-h5/h5 tracking-h5 text-black text-opacity-60'>I build web applications using modern technologies, with a passion for creating fast, responsive, and accessible experiences for everyone.</p>
      <div className='flex gap-4'>
        <PrimaryBtn BtnName='Github'/>
        <SecondaryBtn BtnName='Resume'/>
      </div>
    </div>
  )
}
