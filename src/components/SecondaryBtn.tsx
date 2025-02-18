import React from 'react'

interface props {
  BtnName: string,
  link: string
}

export default function SecondaryBtn({ BtnName, link }: props) {
  return (
    <a className='bg-white border border-solid border-black px-6 py-2 rounded-btn' href={link}>
      {BtnName}
    </a>
  )
}
