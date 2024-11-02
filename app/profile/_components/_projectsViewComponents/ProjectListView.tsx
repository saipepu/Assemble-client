"use client";

import { getRandomColor } from '@/app/utils/colorGenerator';
import { Button } from '@/components/ui/button';
import { DotPatternLinearGradient } from '@/components/ui/dot-pattern-linear-gradient';
import { Pencil, PenTool } from 'lucide-react';
import React, { useState } from 'react'

const ProjectListView = ({ setShowCreateProjectForm, projects } : any) => {

  const [randomColor, setRandomColor] = useState("");
  const hoverTags = ["Create", "Collab", "Compete"];
  const [hoveredTag, setHoveredTag] = useState("Create");

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-5">
      <div className="relative w-full min-h-[200px] flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <DotPatternLinearGradient />
        </div>
        <p className="z-10 text-sm">
          Transform your concept into a reality with the right team.
        </p>
        <div className="z-10 w-full flex justify-center items-center gap-2">
          {hoverTags.map((tag, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center rounded-md px-3 py-1 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => {
                  setHoveredTag(tag);
                  setRandomColor(getRandomColor());
                }}
                onMouseLeave={() => {
                  setHoveredTag("");
                  setRandomColor("");
                }}
                style={{
                  backgroundColor:
                    hoveredTag == tag ? randomColor + "20" : "",
                }}
              >
                <p
                  className="text-3xl font-semibold duration-500"
                  style={{ color: hoveredTag == tag ? randomColor : "" }}
                >
                  {tag}.
                </p>
              </div>
            );
          })}
        </div>
        {/* <ParticlesDemo /> */}
        <Button
          className="relative z-10 mt-5"
          variant="outline"
          onClick={() => setShowCreateProjectForm(true)}
        >
          New Project
          <PenTool size={16} />
        </Button>
      </div>

      <div className="group w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-between items-center">
          <p className="w-full text-lg border-black font-semibold">
            Collaborating Projects
          </p>
          <div className="flex justify-center items-center gap-1 text-gray-500 hover:text-black group-hover:opacity-100 opacity-100 lg:opacity-0 duration-300 transition-all cursor-pointer">
            <p className="text-xs font-normal">Edit</p>
            <Pencil size={12} />
          </div>
        </div>
      </div>

      {projects.map((project: any, index: number) => {
        return (
          <div
            key={index}
            className="w-full flex flex-col justify-start items-start gap-5"
          >
            {project.title}
          </div>
        );
      })}
    </div>
  )
}

export default ProjectListView