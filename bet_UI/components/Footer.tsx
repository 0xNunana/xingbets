import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black/40 ' id="contact">
        <div className='max-w-7xl mx-auto py-5'>
        <div className=''>
        <Link
       
       href="/"
       target="_blank"
       rel="noopener noreferrer"
     >
     
       <Image
         src="/xingblack.png"
         alt="Xing Logo"
         className="dark:invert rounded-2xl max-sm:w-[50px] max-md:w-[70px]"
         width={100}
         height={24}
         priority
       />
     </Link>
        </div>
        </div>
       </footer>
  )
}

export default Footer