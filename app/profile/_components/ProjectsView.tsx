import { Pencil } from 'lucide-react'
import React from 'react'

const ProjectsView = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-5">

      <div className="group w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-between items-center">
          <p className="w-full text-lg border-black font-semibold">Collaborating Projects</p>
          <div className="flex justify-center items-center gap-1 text-gray-500 hover:text-black group-hover:opacity-100 opacity-100 lg:opacity-0 duration-300 transition-all cursor-pointer">
            <p className="text-xs font-normal">Edit</p>
            <Pencil size={12} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectsView