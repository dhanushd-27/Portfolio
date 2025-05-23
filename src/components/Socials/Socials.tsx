import React from 'react'
import Icons from './Icons'
import socials from '@/assets/socials.json'

export default function Links() {
  return (
    <div className='box-nohover col-start-4 col-end-7 row-start-7 row-end-11'>
      <p className='header'>Socials</p>
      <Icons name={ socials.discord.name } logo={ socials.discord.logo } link={ socials.discord.link } bgColor='--color-social-discord' />
      <Icons name={ socials.github.name } logo={ socials.github.logo } link={ socials.github.link } bgColor='--color-social-github' />
      <Icons name={ socials.linkedin.name } logo={ socials.linkedin.logo } link={ socials.linkedin.link } bgColor='--color-social-linkedin' />
      <Icons name={ socials.peerlist.name } logo={ socials.peerlist.logo } link={ socials.peerlist.link } bgColor='--color-social-peerlist' />
      <Icons name={ socials.x.name } logo={ socials.x.logo } link={ socials.x.link } bgColor='--color-social-x' />
    </div> 
  )
}
