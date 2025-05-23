import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type SocialName = 'discord' | 'linkedin' | 'peerlist' | 'x' | 'github';

const bgColors: Record<SocialName, string> = {
  'discord': 'hover:bg-social-discord',
  'linkedin': 'hover:bg-social-linkedin',
  'peerlist': 'hover:bg-social-peerlist',
  'x': 'hover:bg-social-x',
  'github': 'hover:bg-social-github',
}

export default function Icons({ name, logo, link }: { name: string, logo: string, link: string }) {
  const socialName = name.toLowerCase() as SocialName;
  const hoverClass = bgColors[socialName] || '';

  return (
    <button className={`flex items-center justify-center p-4 bg-surface-primary rounded-lg ${hoverClass} transition-colors duration-300 ease-in-out`}>
      <Link
        href={link} 
        target='_blank'
      >
        <Image src={logo} alt={name} width={20} height={20} />
      </Link>
    </button>
  )
}
