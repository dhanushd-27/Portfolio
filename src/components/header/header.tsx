import React from 'react'
import Time from './time'
import Visitors from './visitors'
import { ThemeHandler } from '../theme/theme-handler'

export default function Header() {
  return (
    <div className='flex items-center justify-between md:py-2'>
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
