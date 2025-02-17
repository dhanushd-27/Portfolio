import React from 'react'

interface props {
  BtnName: string
}


export default function PrimaryBtn({ BtnName }: props) {
  return (
    <button className='bg-black rounded-btn text-white py-2 px-6 text-center'>
      {BtnName}
    </button>
  )
}
