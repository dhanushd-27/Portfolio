import React from 'react'

type SectionProps = {
    title: string;
    items: string[];
}

export default function Section({ title, items }: SectionProps) {
  return (
    <div className='flex flex-col gap-2 m-2'>
        <h3 className='section-title'>{title}</h3>
        <ul className='list-inside flex flex-wrap gap-1'>
            {items.map((item) => (
                <li key={item} className='section-content'>{item}</li>
            ))}
        </ul>
    </div>
  )
}
