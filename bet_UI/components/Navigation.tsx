import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navigation = () => {
  return (
<nav className=' sticky top-0  backdrop-blur-[2px]  text-white '>
<div className='flex justify-between items-center p-4 font-semibold max-w-7xl mx-auto   z-50'>
<div className=" ">
          <Link
       
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            <Image
              src="/xingwhite.png"
              alt="Xing Logo"
              className="dark:invert rounded-2xl max-sm:w-[50px] max-md:w-[70px]"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>

        <div className='flex justify-between items-center  gap-5 text-white'>
        <ul className='hidden sm:flex gap-5 '>
          <Link href='#home'>
          <li>Home</li>
          </Link>
<Link href='#about'>
<li>About Us</li>
</Link>
<Link href='#contact'>
<li>Contact</li>
</Link>
     
    </ul>
    <p className='sm:hidden  text-gray-600'>Menu</p>
    <button className='hidden sm:flex bg-white rounded-full px-3 py-2  text-gray-600'>
        Sign Up
    </button>
        </div>
   
    </div>
</nav>


  
  )
}

export default Navigation