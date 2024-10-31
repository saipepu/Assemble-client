"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = ({ setShowRegistrationForm }: any) => {

  const { data: session } = useSession();

  useEffect(() => {
    console.log(session)
    console.log(session?.accessToken, 'user session token')
  }, [session])

  return (
    <div className="w-full h-14 flex justify-between items-center">
      <h1 className="text-2xl md:text-4xl font-bold font-bricolage">
        Assemble
      </h1>
      {session?.user ? (
        <div className="flex justify-end items-center gap-2 h-full">
          <div className="flex justify-center items-center">
            <Image
              src={session?.user?.image || 'https://avatar.vercel.sh/unknown'}
              alt="user"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full"
            />
          </div>
          <p className="text-base font-inter">{session?.user?.name}</p>
          <Button
            className="text-base bg-orange-500 h-10"
            onClick={() => signOut()}
          >
            Log Out
          </Button>
        </div>
      ) : (
        <div className="flex justify-end items-center gap-2 h-full">
          <Button
          type="submit"
            className="text-base font-inter bg-transparent text-black hover:text-white h-10"
            onClick={() => setShowRegistrationForm("login")}
          >
            Log In
          </Button>
          <Button
            className="text-base bg-orange-500 h-10"
            onClick={() => setShowRegistrationForm("signup")}
          >
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
