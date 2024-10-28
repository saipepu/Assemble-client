import Image from 'next/image'
import React from 'react'
import backgroundImage from '@/public/HeroBackground.png'
import { Button } from '@/components/ui/button'
import person1 from '@/public/person1.png'
import ProjectList from './_components/ProjectList'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {/* HERO SECTION */}
      <div className='z-10 w-full max-w-[1000px] flex flex-col justify-start items-center'>
        <div className="w-full h-14 flex justify-between items-center">
          <h1 className='text-4xl font-bold font-bricolage'>Assemble</h1>
          <div className='flex justify-end items-center gap-2 h-full'>
            <Button className='text-base font-inter bg-transparent text-black hover:text-white h-10'>Log In</Button>
            <Button className='text-base bg-orange-500 h-10'>Sign Up</Button>
          </div>
        </div>
        <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-5">
          <div className='flex justify-center items-center gap-1 rounded-full border-2 border-gray-300 bg-gray-100 p-2 pr-4'>
            <div className='flex justify-start items-center pr-4'>
              {Array(5).fill('').map((item, index) => {
                return (
                  <Image
                    key={index}
                    alt="person"
                    src={person1}
                    layout="cover"
                    className="w-10 h-10 rounded-full -mr-4 border-2 border-white"
                  />
                )
              })}
            </div>
            <p className='text-2xl font-normal font-inter'>
              Join 1000+ Projects
            </p>
          </div>
          <p className='text-[40px] md:text-[80px] text-center font-medium font-bricolage leading-tight'>
            Build your <span className="font-bold">Best</span> Team for your <span className="font-bold">Biggest</span> Idea.
          </p>
          <p className='text-2xl font-normal font-inter text-center max-w-[80%]'>
            A platform where talent meets opportunity. Connect with skilled individuals, join meaningful projects, and build the team that brings your biggest ideas to life.
          </p>
        </div>
      </div>

      {/* PROJECT LIST */}
      <div className='z-10 w-full max-w-[1000px] flex flex-col justify-start items-center'>
        <ProjectList />
      </div>


      {/* <Image
        alt="grid"
        src={backgroundImage}
        layout="cover"
        className='w-full h-full absolute top-0 left-0 z-0 object-cover'
      /> */}
    </div>
  )
}

export default Home