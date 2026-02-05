import React from 'react'
import Age from './age'

export default function Headline() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-xl text-text-primary font-bold tracking-tight">
          D Dhanush
        </h2>
        <p className="text-sm text-text-muted font-medium flex items-center gap-1">
          Applied AI and Full Stack Developer | <Age />
        </p>
      </div>
    </>
  )
}
