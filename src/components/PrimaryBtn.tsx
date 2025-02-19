import React from 'react'

interface props {
  BtnName: string
  link: string
}


export default function PrimaryBtn({ BtnName, link }: props) {
  return (
    <a className='bg-black rounded-btn text-white py-2 px-6 text-center w-min h-min text-nowrap' href={ link }>
      {BtnName}
    </a>
  )
}
