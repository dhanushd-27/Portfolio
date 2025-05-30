'use client'

import React, { useState } from 'react'
import { MdContentCopy, MdDone } from 'react-icons/md'

export default function CopyMail() {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText('dhanushd.work@gmail.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div className='box copy-mail-container hide-scrollbar' onClick={handleCopy}>
      <h3 className='text-default text-lg pt-5 pb-2'>Got Ideas? Let&apos;s Collaborate</h3>
      {
        isCopied ? (
          <div className='bg-surface-primary p-4 rounded-lg text-center text-default flex gap-2 items-center justify-center hover:bg-surface-secondary transition-colors duration-300 ease-in-out'>
            <p>Copied!</p>
            <MdDone className='text-default'/>
          </div>
        ) : (
          <div className='bg-surface-primary p-4 rounded-lg text-center text-default flex gap-2 items-center justify-center hover:bg-surface-secondary transition-colors duration-300 ease-in-out'> 
            <p>Copy email</p>
            <MdContentCopy className='text-default'/>
          </div>
        )
      }
    </div>
  )
}
