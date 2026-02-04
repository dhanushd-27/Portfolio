import Link from 'next/link'
import React from 'react'

export default function SocialLinks() {
  const links = [
    { href: 'https://github.com/dhanushd-27', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/dhanush27/', label: 'LinkedIn' },
    { href: 'https://x.com/orcatwt', label: 'Twitter' },
  ]

  return (
    <div className="flex gap-4 h-full items-center justify-center">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-xs md:text-sm opacity transition-colors hover:text-gray-600"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
