"use client";

import Navbar from "../home/_components/Navbar"
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ProfileView from "./_components/ProfileView";
import ProjectsView from "./_components/ProjectsView";
import SettingsView from "./_components/SettingsView";
import { useRouter } from "next/navigation";
 
const Profile = () => {

  const { data: session } = useSession();
  const router = useRouter()

  useEffect(() => {

    if(!session) {
      router.push('/home')
    }

  }, [session])

  const tabs = ['Profile', 'Projects', 'Competitions', 'Settings']
  const [selectedTab, setSelectedTab] = useState('Profile')

  return (
    <div className="relative w-full h-full flex flex-col justify-start items-center overflow-x-hidden px-4 md:px-8 gap-2 md:gap-5 overflow-hidden">

      <Navbar />
      {/* <div className="w-full h-[1px] bg-gray-200 flex justify-start items-start"></div> */}

      <div className="w-full h-full flex justify-start items-start py-2">
        {/* Sidebar */}
        <div className="max-w-[200px] md:min-w-[150px] h-full hidden md:flex flex-col justify-start items-start border-r-[1px] border-gray-200">

          {tabs.map((tab, index) => {
            return (
              <p
                key={index}
                className={`w-full ${selectedTab == tab ? 'text-lg border-black font-semibold' : 'text-sm opacity-50 hover:text-lg hover:opacity-100 hover:border-black border-transparent'} font-medium p-1 px-2 duration-300 transition-all cursor-pointer border-r-[1px] pr-2`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </p>
            )
          })}
          
        </div>

        <div className="w-full h-full flex flex-col justify-start items-start px-0 md:px-5 py-1 overflow-hidden overflow-y-scroll">
          {selectedTab == 'Profile' && (
            <ProfileView />
          )}
          {selectedTab == 'Projects' && (
            <ProjectsView />
          )}
          {selectedTab == 'Settings' && (
            <SettingsView />
          )}
          
        </div>

      </div>

    </div>
  )
}
export default Profile