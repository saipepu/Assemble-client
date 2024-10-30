import { Button } from "@/components/ui/button";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar = ({ setShowRegistrationForm }: any) => {

  const { data: session } = useSession();
  console.log(session, 'data')

  return (
    <div className="w-full h-14 flex justify-between items-center">
      <h1 className="text-2xl md:text-4xl font-bold font-bricolage">
        Assemble
      </h1>
      <div className="flex justify-end items-center gap-2 h-full">
        <p className="text-base font-inter">{session?.user?.name}</p>
        <Button
        type="submit"
          className="text-base font-inter bg-transparent text-black hover:text-white h-10"
          // onClick={() => setShowRegistrationForm("login")}
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
    </div>
  );
};

export default Navbar;
