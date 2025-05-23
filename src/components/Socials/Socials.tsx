import React from 'react'
import Icons from './Icons'
import socials from '@/assets/socials.json'

export default function Links() {
  return (
    <div className='box col-start-4 col-end-6 row-start-7 row-end-11 flex flex-col gap-6'>
      <p className='header'>Find me on</p>
      <div className='flex flex-wrap w-full px-2 gap-5 justify-start'>
        <Icons name={ socials.x.name } logo={ socials.x.logo } link={ socials.x.link } />
        <Icons name={ socials.github.name } logo={ socials.github.logo } link={ socials.github.link } />
        <Icons name={ socials.discord.name } logo={ socials.discord.logo } link={ socials.discord.link } />
        <Icons name={ socials.linkedin.name } logo={ socials.linkedin.logo } link={ socials.linkedin.link } />
        <Icons name={ socials.peerlist.name } logo={ socials.peerlist.logo } link={ socials.peerlist.link } />
      </div>
    </div> 
  )
}
