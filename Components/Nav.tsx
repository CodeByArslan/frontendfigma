'use client'
import T from '@/Components/T'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex justify-between flex-between w-full px-20 mb-10 pt-3'>
         <Link href="/" className='  dark:text-white text-2xl font-sans font-bold'>
            Logo
         </Link>

         <div className='flex gap-3 md:gap-5'>
                  <Link href="/create-prompt" className=' black_btn'>
                  Contact us
                  </Link>
                  <button className='outline_btn' 
                  >
                    En
                    </button>
                    <T/>
                   
                </div>
                

         


        
    
    
    
    
    </nav>
  )
}

export default Nav