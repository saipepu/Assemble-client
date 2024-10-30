"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Dot,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";
import React from "react";
import ProjectJoinForm from "./ProjectJoinForm";

const ProjectCard = ({ item, bgColor }: any) => {
  const [showRequiredSkills, setShowRequiredSkills] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);

  return (
    <>
      {showForm && (
        <div
          className="z-50 fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-200/50 backdrop-blur-[3px] flex justify-center items-start pt-10"
          onClick={() => setShowForm(false)}
        >
          <div
            className="max-w-[500px] min-w-[300px] max-h-[80vh] min-h-[60vh] flex justify-start items-start bg-white overflow-hidden overflow-y-scroll rounded-lg"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}
          >
            <ProjectJoinForm setShowForm={setShowForm} />
          </div>
        </div>
      )}
      <div className="group relative w-full hover:shadow-lg duration-300 rounded-lg border-[1px] border-gray-100 cursor-pointer overflow-hidden">
        <div
          className="w-full h-32 border-b-[1px] border-gray-100"
          style={{ background: bgColor }}
        ></div>
        <div className="w-full px-3 py-2 flex flex-col justify-start items-start gap-1">
          <div className="w-full flex justify-between items-center">
            <p className="w-full text-2xl font-medium">{item.title}</p>
            <div
              className="p-2 rounded-md flex justify-center items-center border-[1px] border-gray-300 text-gray-500 md:hover:text-orange-500 md:hover:border-orange-300 md:hover:bg-orange-50 duration-300 gap-1"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                console.log("Bookmark");
              }}
            >
              <p className="text-sm font-normal leading-tight text-center top-10">
                {item.rating}
              </p>
              <div className="w-4 h-2 flex justify-center items-center relative">
                <ThumbsUp size={16} className="absolute -top-[6px]" />
              </div>
            </div>
          </div>
          <p className="w-full whitespace-normal leading-tight truncate text-lg font-normal">
            {item.tagLine}
          </p>
          <div className="w-full flex flex-wrap justify-start items-start gap-1">
            {item.categories.map((category: any, index: any) => {
              return (
                <div
                  key={index}
                  className={`flex justify-center items-center rounded-lg px-2 py-1 text-base font-normal`}
                  style={{ backgroundColor: category.color }}
                >
                  {category.category}
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-start items-center gap-1 text-gray-500 mb-2">
            <div className="flex justify-start items-center gap-1">
              <MessageCircle size={16} />
              <p className="text-sm font-normal leading-tight">
                {item.comment}
              </p>
            </div>
            <Dot size={16} />
            <p className="text-sm font-normal leading-tight">
              Created by {item.creator}
            </p>
          </div>
          <div
            className="w-full flex flex-col justify-start items-center gap-2 p-2 rounded-md bg-gray-50 border-[1px] border-gray-200"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setShowRequiredSkills(!showRequiredSkills);
            }}
          >
            <div className="w-full flex justify-between items-center">
              <p className="text-base font-normal leading-tight">
                Members {item.members}
              </p>
              {showRequiredSkills ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </div>
            {showRequiredSkills && (
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <p className="w-full text-center text-xs text-gray-400 font-normal leading-tight mt-2">
                  Welcoming Talents with Skill in
                </p>
                {item.requiredSkills.map((skill: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-start items-start"
                    >
                      <p className="text-base font-normal leading-tight">
                        {skill.title}
                      </p>
                      <p className="text-xs font-normal leading-tight text-gray-500">
                        {skill.experience}
                      </p>
                    </div>
                  );
                })}
                <Button
                  className="w-full h-10 text-base font-normal bg-orange-500"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    setShowForm(true);
                    console.log("Join Project");
                  }}
                >
                  Join Project
                </Button>
              </div>
            )}
          </div>
        </div>
        <BorderBeam
          className="group-hover:block hidden"
          size={300}
          duration={1}
          delay={9}
        />
      </div>
    </>
  );
};

export default ProjectCard;
