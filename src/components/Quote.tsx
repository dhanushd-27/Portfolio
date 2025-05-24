"use client"

import React, { useEffect, useState } from 'react'
import { getRandomQuote } from '@/actions/getRandomQuote'

type Quote = {
  quote: string
  author: string
}

export default function Quote() {
  const [quote, setQuote] = useState<Quote>()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomQuote().then(setQuote).then(() => setIsLoading(false));

  }, []);

  if (isLoading) {
    return (
      <div className='box box-hover col-start-4 col-end-10 row-start-11 row-end-13 overflow-auto gap-1 flex items-center justify-center'>
        <div className='w-8 h-8 rounded-full border-4 border-t-transparent animate-spin border-accent-cursor'>
        </div>
      </div>
    )
  }

  return (
    <div className='box box-hover col-start-4 col-end-10 row-start-11 row-end-13 overflow-auto gap-1 group'>
        <p className='text-default text-start group-hover:blur-none blur-xs transition-all duration-300'>{quote?.quote}</p>
        <p className='text-default text-end group-hover:blur-none blur-xs transition-all duration-300'>- {quote?.author}</p>
    </div>
  )
}
