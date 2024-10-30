"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import person1 from '@/public/person1.png'
import ProjectList from './_components/ProjectList'
import Navbar from './_components/Navbar'
import { PartnerReels } from './_components/Marquee'
import Footer from './_components/Footer'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import SignIn from './_components/Auth/SignUp';

const Home = () => {

  const [showRegistrationForm, setShowRegistrationForm] = React.useState('')

  return (
    <div className="relative w-full h-full flex flex-col justify-start items-center gap-20 overflow-x-hidden">

      {showRegistrationForm == 'login' && (
        <div
          className="z-50 fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-200/50 backdrop-blur-[3px] flex justify-center items-start pt-10"
          onClick={() => setShowRegistrationForm('')}
        >
          <div
            className="max-w-[500px] min-w-[300px] max-h-[80vh] min-h-[60vh] flex justify-start items-start bg-white overflow-hidden overflow-y-scroll rounded-lg p-5"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}
          >
            <SignIn setShowRegistrationForm={setShowRegistrationForm} />
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <div className='z-10 w-full max-w-[1000px] flex flex-col justify-start items-center px-5'>
        <Navbar setShowRegistrationForm={setShowRegistrationForm} />
        <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-5">
          <div className='flex justify-center items-center gap-1 rounded-full border-2 border-gray-300 bg-gray-100 p-1 pr-3 md:p-2 md:pr-4'>
            <div className='flex justify-start items-center pr-4'>
              {Array(5).fill('').map((item, index) => {
                return (
                  <Image
                    key={index}
                    alt="person"
                    src={person1}
                    // layout='cover'
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full -mr-3 md:-mr-4 border-2 border-white"
                  />
                )
              })}
            </div>
            <p className='text-base md:text-2xl font-normal font-inter'>
              Join 1000+ Projects
            </p>
          </div>
          <p className='text-[40px] md:text-[80px] text-center font-medium font-bricolage leading-tight'>
            Build your <span className="font-bold">Best</span> Team for your <span className="font-bold">Biggest</span> Idea.
          </p>
          <p className='text-base md:text-2xl font-normal font-inter text-center max-w-[80%]'>
            A platform where talent meets opportunity. Connect with skilled individuals, join meaningful projects, and build the team that brings your biggest ideas to life.
          </p>
        </div>
      </div>

      {/* PROJECT LIST */}
      <div className='z-10 w-full max-w-[1000px] flex flex-col justify-start items-center px-5'>
        <ProjectList />
      </div>

      {/* PARTNERS */}
      <div className='relative z-10 w-full max-w-[1000px] flex flex-col justify-start items-center gap-5 pt-5'>
        <div className="w-full flex flex-col justify-start items-center gap-5">
          <p className='w-full text-[40px] md:text-[80px] text-center font-medium font-bricolage leading-tight'>
            On a Mission with
          </p>
          <div className="w-full flex justify-center items-center overflow-x-scroll">
            <PartnerReels />
          </div>
        </div>
      </div>
        
      {/* FOOTER */}
      <div className='relative z-10 w-full max-w-[1000px] flex flex-col justify-start items-center gap-5 pt-5 px-5'>
        <div className='w-[100vw] min-h-[1px] flex bg-gray-100'></div>
        <Footer />
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />

    </div>
  )
}

export default Home