import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-14 flex justify-between items-center">
      <h1 className='text-2xl md:text-4xl font-bold font-bricolage'>Assemble</h1>
      <div className='flex justify-end items-center gap-2 h-full'>
        <Button className='text-base font-inter bg-transparent text-black hover:text-white h-10'>Log In</Button>
        <Button className='text-base bg-orange-500 h-10'>Sign Up</Button>
      </div>
    </div>
  )
}

export default Navbar