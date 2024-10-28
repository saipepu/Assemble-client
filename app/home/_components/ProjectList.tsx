"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import person1 from '@/public/person1.png'

const ProjectList = () => {

  const [selectedCategory, setSelectedCategory] = useState('Sustainability')
  let categoryList = ["Sustainability", "Innovation", "Fintech", "AI", "Design"];

  let projectList = [{
    title: "Ecotech",
    tagLine: "Tracking the carbon footprint by leveraging the power of gamification.",
    categories: ['Sustainability','Innovation','Green Tech'],
    creator: "PePu",
    members: [
      {
        photo: {person1},
      }
    ],
    comment: 6,
    rating: 21
  },
  {
    title: "Fintech Revolution",
    tagLine: "Revolutionizing the financial industry with cutting-edge technology.",
    categories: ['Fintech', 'Innovation'],
    creator: "FinTech Corp",
    members: [
      {
        photo: {person1},
      }
    ],
    comment: 10,
    rating: 35
  },
  {
    title: "AI Assistant",
    tagLine: "An AI assistant to help you manage your daily tasks efficiently.",
    categories: ['AI', 'Innovation'],
    creator: "AI Innovators",
    members: [
      {
        photo: {person1},
      }
    ],
    comment: 15,
    rating: 40
  },
  {
    title: "Design Hub",
    tagLine: "A platform for designers to collaborate and share their work.",
    categories: ['Design', 'Innovation'],
    creator: "Designers United",
    members: [
      {
        photo: {person1},
      }
    ],
    comment: 8,
    rating: 25
  }
  ]

  function splitIntoThree(arr: any) {
    const len = arr.length;
    const partSize = Math.ceil(len / 3);
  
    const part1 = arr.slice(0, partSize);
    const part2 = arr.slice(partSize, partSize * 2);
    const part3 = arr.slice(partSize * 2);
  
    return [part1, part2, part3];
  }
  console.log(splitIntoThree(projectList))

  let formattedProjectList = splitIntoThree(projectList)

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center items-center gap-2">
        {categoryList.map((item, index) => {
          return (
            <Button
              key={index}
              className={`h-12 hover:bg-gray-100 font-normal duration-300 ${selectedCategory == item ? 'bg-gray-300 hover:bg-gray-300' : 'bg-transparent'} text-black text-xl`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </Button>
          )
        })}
      </div>
      {/* <div className="w-full grid-cols-3 gap-4">
        {formattedProjectList.map((item, index) => 
            item.map((item: any, index: any) => {
              return (
                <div key={index}>
                  {item}
                </div>
              )
            })
        )}
      </div> */}
    </div>
  );
};

export default ProjectList;
