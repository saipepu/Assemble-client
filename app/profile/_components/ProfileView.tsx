"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BioSection from "./BioSection";
import { Pencil } from "lucide-react";
import { getPastelGradient } from "@/app/utils/colorGenerator";
import { Button } from "@/components/ui/button";

const ProfileView = () => {

  const { data: session } = useSession();
  const [bgColor, setBgColor] = useState('')
  let bio = "A passionate Machine Learning Engineer with over 5 years of experience in developing and deploying scalable machine learning models. Skilled in Python, TensorFlow, and PyTorch, with a strong background in data analysis and statistical modeling. Enthusiastic about leveraging AI to solve real-world problems and continuously learning about the latest advancements in the field."
  let skills = [
    { title: "Python", experience: "Advanced" },
    { title: "TensorFlow", experience: "Advanced" },
    { title: "PyTorch", experience: "Advanced" },
    { title: "Data Analysis", experience: "Advanced" }
  ]
  let experience = [
    { title: "Machine Learning Engineer", company: "TechCorp", duration: "2 years", description: "Developed and deployed machine learning models for various projects." },
    { title: "Data Scientist", company: "DataTech", duration: "3 years", description: "Analyzed and visualized data to derive actionable insights." },
    { title: "Software Engineer", company: "TechSolutions", duration: "2 years", description: "Developed and maintained software solutions for clients." }
  ]

  useEffect(() => {
    setBgColor(getPastelGradient())
  }, [])
  
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-5">

      <div
        className="w-full min-h-32 border-gray-100"
        style={{ background: bgColor }}
      ></div>
      <div className="w-full flex justify-start items-center gap-2">
        <Image
          src={session?.user?.image || 'https://fakeimg.pl/100x100?text=.'}
          alt="user"
          width={100}
          height={100}
          className="w-14 h-14 rounded-full"
        />
        <p className="text-4xl font-semibold">{session?.user?.name}</p>
      </div>

      <div className="group w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-between items-center">
          <p className="w-full text-lg border-black font-semibold">Skills</p>
          <div className="flex justify-center items-center gap-1 text-gray-500 hover:text-black group-hover:opacity-100 opacity-100 lg:opacity-0 duration-300 transition-all cursor-pointer">
            <p className="text-xs font-normal">Edit</p>
            <Pencil size={12} />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-start items-start gap-1">
          {skills.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`flex justify-center items-center rounded-lg px-2 py-1 text-base font-normal bg-gray-100`}
                // style={{ backgroundColor: category.color }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="group w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-between items-center">
          <p className="w-full text-lg border-black font-semibold">Bio</p>
          <div className="flex justify-center items-center gap-1 text-gray-500 hover:text-black group-hover:opacity-100 opacity-100 lg:opacity-0 duration-300 transition-all cursor-pointer">
            <p className="text-xs font-normal">Edit</p>
            <Pencil size={12} />
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <BioSection bio={bio} />
        </div>
      </div>

      <div className="group w-full h-fit flex flex-col justify-start items-start">
        <div className="w-full flex justify-between items-center">
          <p className="w-full text-lg border-black font-semibold">Experience</p>
          <div className="flex justify-center items-center gap-1 text-gray-500 hover:text-black group-hover:opacity-100 opacity-100 lg:opacity-0 duration-300 transition-all cursor-pointer">
            <p className="text-xs font-normal">Edit</p>
            <Pencil size={12} />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-2 border-[1px] border-gray-200 rounded-md p-2 pb-0">
          {experience.map((item: any, index: any) => {
            return(
              <div key={index} className={`w-full flex flex-col justify-start items-start p-2 ${index+1 != experience.length && 'border-b-[1px]'} border-gray-200`}>
                <div className="w-full flex justify-between items-center gap-1">
                  <p className="text-sm font-light text-gray-500">{item.company}</p>
                  <p className="text-sm font-light text-gray-500">{item.duration}</p>
                </div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm font-normal">{item.description}</p>
              </div>
            )})
          }
        </div>
      </div>

      <div className="w-full min-h-[200px] flex"></div>

    </div>
  )
}

export default ProfileView