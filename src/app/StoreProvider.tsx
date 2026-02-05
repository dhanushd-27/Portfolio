"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/store/store'
import { useRef } from 'react'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}