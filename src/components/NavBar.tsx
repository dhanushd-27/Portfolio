import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='flex gap-7 px-4 py-2'>
      <Link href={'/'} className='nav-option'>Home</Link>
      <Link href={'/projects'} className='nav-option'>Projects</Link>
      <Link href={'https://x.com/intent/follow?screen_name=orca_x27'} className='nav-option' target='_blank'>Twitter</Link>
    </div>
  )
}
