import React from 'react'

interface SectionHeaderProps {
    title: string;
    className?: string;
}

export default function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={className}>
        <h2 className='text-text-muted text-sm md:text-md font-normal'>{title}</h2>
    </div>
  )
}
