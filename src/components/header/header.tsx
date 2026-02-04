import React from 'react'
import Time from './time'
import Visitors from './visitors'
import { ThemeHandler } from '../theme/theme-handler'

export default function Header() {
  return (
    <div className='flex items-center justify-between px-2 md:px-4 md:py-2 absolute top-0 left-0 right-0'>
      <div className='flex items-center gap-2'>
        <Visitors />
      </div>
      <div className='flex items-center gap-2'>
        <Time />
        <ThemeHandler />
      </div>
    </div>
  )
}
