import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const SettingsView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <div className="group w-full h-fit flex flex-col justify-start items-start">
        <Button
          className="h-10 text-base font-normal bg-red-500"
          onClick={() => signOut({ redirectTo: '/home' })}
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default SettingsView