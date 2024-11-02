"use client";

import ProjectCreationFrom from "./_projectsViewComponents/ProjectCreationFrom";
import React, { useState } from "react";
import ProjectListView from "./_projectsViewComponents/ProjectListView";

const ProjectsView = ({ projects }: any) => {

  const [showCreateProjectForm, setShowCreateProjectForm] = useState(false);

  return (
    <div className="relative w-full h-full flex justify-start items-start">
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start gap-5 duration-300 ease-in-out transition-all ${
          !showCreateProjectForm && "scale-[1.1] opacity-0 pointer-events-none"
        } bg-white`}
      >
        <ProjectCreationFrom setShowCreateProjectForm={setShowCreateProjectForm} />
      </div>

      <div
        className={`w-full h-full flex flex-col justify-start items-start gap-5 duration-300 ease-in-out transition-all ${
          showCreateProjectForm && "scale-[0.8] opacity-0 pointer-events-none"
        } bg-white`}
      >
        <ProjectListView setShowCreateProjectForm={setShowCreateProjectForm} projects={projects} />
      </div>

    </div>
  );
};

export default ProjectsView;
