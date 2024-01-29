
import Arrow from '@/components/Arrow'
import Down from '@/components/Down'
import React from 'react'

const About = () => {
  return (
    <div className='bg-[#637338]/60 pb-4' id='about'>
  <Arrow/>
<div className='max-w-7xl mx-auto -mt-2 space-y-2'>
<div className='bg-green-300/35 p-2 animate-slideL rounded-md'>
  <p>Today&apos;s Matches</p>
  <div className='bg-white p-5 rounded-xl'>live matches</div>
</div>
<div className='bg-yellow-100 p-2 animate-slideR'>
  <p>Tomorrow&apos;s Matches</p>
  <div className='bg-white p-5 rounded-xl'>live matches</div>
</div>
</div>

    </div>
  )
}

export default About