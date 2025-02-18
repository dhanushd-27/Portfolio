import React from 'react'

interface props {
  BtnName: string
}

export default function SecondaryBtn({ BtnName }: props) {
  return (
    <button className='bg-white border border-solid border-black px-6 py-2 rounded-btn'>
      {BtnName}
    </button>
  )
}
