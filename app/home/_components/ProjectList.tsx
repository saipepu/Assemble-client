"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const ProjectList = () => {

  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('Sustainability')
  const [formattedProjectList, setFormattedProjectList] = useState<any[]>([])
  let categoryList = ["Sustainability", "Innovation", "Fintech", "AI", "Design"];

  let projectList = [
    {
      _id: 1,
      title: "Ecotech",
      tagLine: "Tracking the carbon footprint by leveraging the power of gamification.",
      categories: ['Sustainability','Innovation','Green Tech'],
      creator: "PePu",
      members: '2/5',
      comment: 6,
      rating: 21,
      requiredSkills: [{
        title: "React",
        experience: "Intermediate",
      },
      {
        title: "Node",
        experience: "Intermediate",
      }]
    },
    {
      _id: 2,
      title: "InnovateX",
      tagLine: "Revolutionizing the tech industry with cutting-edge solutions.",
      categories: ['Innovation', 'AI', 'Fintech'],
      creator: "TechCorp",
      members: '4/6',
      comment: 12,
      rating: 34,
      requiredSkills: [{
      title: "Python",
      experience: "Advanced",
      },
      {
      title: "Machine Learning",
      experience: "Advanced",
      }]
    },
    {
      _id: 3,
      title: "Fintech Future",
      tagLine: "Bringing the future of finance to today.",
      categories: ['Fintech', 'Innovation'],
      creator: "FinanceGuru",
      members: '3/5',
      comment: 8,
      rating: 27,
      requiredSkills: [{
      title: "Blockchain",
      experience: "Intermediate",
      },
      {
      title: "React",
      experience: "Intermediate",
      }]
    },
    {
      _id: 4,
      title: "AI Assistant",
      tagLine: "Your personal AI assistant for everyday tasks.",
      categories: ['AI', 'Innovation'],
      creator: "AI Inc.",
      members: '5/5',
      comment: 15,
      rating: 40,
      requiredSkills: [{
      title: "Python",
      experience: "Advanced",
      },
      {
      title: "NLP",
      experience: "Advanced",
      }]
    },
    {
      _id: 5,
      title: "DesignHub",
      tagLine: "Collaborative platform for designers.",
      categories: ['Design', 'Innovation'],
      creator: "DesignPro",
      members: '2/4',
      comment: 5,
      rating: 18,
      requiredSkills: [{
      title: "Figma",
      experience: "Intermediate",
      },
      {
      title: "UI/UX",
      experience: "Intermediate",
      }]
    },
    {
      _id: 6,
      title: "GreenTech",
      tagLine: "Innovative solutions for a sustainable future.",
      categories: ['Sustainability', 'Green Tech'],
      creator: "EcoWarriors",
      members: '3/5',
      comment: 10,
      rating: 25,
      requiredSkills: [{
      title: "JavaScript",
      experience: "Intermediate",
      },
      {
      title: "Node",
      experience: "Intermediate",
      }]
    },
    {
      _id: 7,
      title: "HealthTech",
      tagLine: "Improving healthcare with technology.",
      categories: ['Innovation', 'Health'],
      creator: "Health Innovators",
      members: '4/6',
      comment: 9,
      rating: 30,
      requiredSkills: [{
      title: "React",
      experience: "Intermediate",
      },
      {
      title: "Python",
      experience: "Intermediate",
      }]
    },
    {
      _id: 8,
      title: "EduTech",
      tagLine: "Transforming education through technology.",
      categories: ['Innovation', 'Education'],
      creator: "Edu Innovators",
      members: '3/5',
      comment: 7,
      rating: 22,
      requiredSkills: [{
      title: "JavaScript",
      experience: "Intermediate",
      },
      {
      title: "React",
      experience: "Intermediate",
      }]
    },
    {
      _id: 9,
      title: "SmartHome",
      tagLine: "Making homes smarter with IoT.",
      categories: ['Innovation', 'IoT'],
      creator: "Smart Solutions",
      members: '2/4',
      comment: 6,
      rating: 19,
      requiredSkills: [{
      title: "IoT",
      experience: "Intermediate",
      },
      {
      title: "Python",
      experience: "Intermediate",
      }]
    },
    {
      _id: 10,
      title: "AgriTech",
      tagLine: "Innovative solutions for modern agriculture.",
      categories: ['Innovation', 'Agriculture'],
      creator: "Agri Innovators",
      members: '3/5',
      comment: 8,
      rating: 24,
      requiredSkills: [{
      title: "JavaScript",
      experience: "Intermediate",
      },
      {
      title: "Node",
      experience: "Intermediate",
      }]
    },
    {
      _id: 11,
      title: "TravelTech",
      tagLine: "Revolutionizing the travel industry.",
      categories: ['Innovation', 'Travel'],
      creator: "Travel Innovators",
      members: '4/6',
      comment: 11,
      rating: 28,
      requiredSkills: [{
      title: "React",
      experience: "Intermediate",
      },
      {
      title: "Node",
      experience: "Intermediate",
      }]
    },
    {
      _id: 12,
      title: "RetailTech",
      tagLine: "Innovative solutions for the retail industry.",
      categories: ['Innovation', 'Retail'],
      creator: "Retail Innovators",
      members: '3/5',
      comment: 7,
      rating: 23,
      requiredSkills: [{
      title: "JavaScript",
      experience: "Intermediate",
      },
      {
      title: "React",
      experience: "Intermediate",
      }]
    },
    {
      _id: 13,
      title: "FoodTech",
      tagLine: "Innovative solutions for the food industry.",
      categories: ['Innovation', 'Food'],
      creator: "Food Innovators",
      members: '2/4',
      comment: 5,
      rating: 20,
      requiredSkills: [{
      title: "JavaScript",
      experience: "Intermediate",
      },
      {
      title: "Node",
      experience: "Intermediate",
      }]
    }
  ]

  useEffect(() => {
    function splitIntoThree(arr: any[]) {
      let part1 = []
      let part2 = []
      let part3 = []

      for(let i=0; i<arr.length; i=i+3) {
        if(arr.length>2) {
          if(arr[i]) part1.push(arr[i])
          if(arr[i+1]) part2.push(arr[i+1])
          if(arr[i+2]) part3.push(arr[i+2])
        }
      }

      return [part1, part2, part3]
    }
    setFormattedProjectList(splitIntoThree(projectList))
  }, [])

  const getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const brightValue = Math.floor(Math.random() * 128 + 128).toString(16);
      color += brightValue.length === 1 ? '0' + brightValue : brightValue;
    }
    return color + "50";
  }

  function getPastelGradient() {
    const pastelColor1 = getPastelColor();
    const pastelColor2 = getPastelColor();
  
    return `linear-gradient(135deg, ${pastelColor1}, ${pastelColor2})`;
  }
  
  function getPastelColor() {
    const red = Math.floor((Math.random() * 56) + 200); // High red value for warm tones
    const green = Math.floor((Math.random() * 128) + 128); // High green value
    const blue = Math.floor((Math.random() * 56) + 100); // Low blue for yellow-green range
  
    return `rgb(${red}, ${green}, ${blue}, 0.25)`;
  }
  

  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <div className="w-full flex justify-start items-center gap-2 overflow-x-scroll">
        {categoryList.map((item, index) => {
          return (
            <Button
              key={index}
              className={`h-10 md:hover:bg-gray-100 font-normal duration-300 ${selectedCategory == item ? 'bg-gray-300 hover:bg-gray-300' : 'bg-transparent'} text-black text-base md:text-xl`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </Button>
          )
        })}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {formattedProjectList.map((item, index) => {
          return (
            <div key={index} className="col-span-1 flex flex-col justify-start items-start gap-4">
              {
                item.map((item: any, index: any) => {
                  let categoriesWithColor = item.categories.map((category: any) => {
                    return (
                      {
                        category: category,
                        color: getRandomColor()
                      }
                    )
                  })
                  return (
                    <div
                      key={index}
                      className="col-span-1 w-full"
                      // onClick={() => router.push(`/project/${item._id}`)}
                    >
                      <ProjectCard bgColor={getPastelGradient()} item={{...item, categories: categoriesWithColor}} />
                    </div>
                  )
                })
              }
            </div>
          )}
        )}
      </div>
    </div>
  );
};

export default ProjectList;
