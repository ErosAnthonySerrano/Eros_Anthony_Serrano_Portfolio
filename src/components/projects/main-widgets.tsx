"use client";
import { SlGraduation } from "react-icons/sl";
import { TfiBag } from "react-icons/tfi";
import React, { useState } from "react";
import SmallWidgets from "../small-widgets";
import ProjectDetails from "./details";
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  impact: {
    label: string;
    value: string;
  }[];
  status: "live" | "completed" | "development";
  category: "professional" | "academic";
  timeline: string;
  challenges: string[];
  outcomes: string[];
}
interface projects {
  projects: any[];
}

const MainWidgets: React.FC<projects> = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  const handleSelectProject = (project: Project) => {
    setCurrentProject(project);
  };
  return (
    <div className="flex flex-col gap-10 md:gap-20">
        {/* Select Project */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-10">
          {projects.map((item: any) => (
            <div
              key={item.id}
              onClick={() => handleSelectProject(item)}
              className={`flex flex-col justify-between p-6  rounded-2xl min-h-[50vh] z-10 bg-gradient-to-r from-black  to-background-color-
              cursor-pointer ${currentProject.id === item.id ? 'border-accent border-2' : 'border border-border'}
              transform transition-all duration-500 group ${
                currentProject.id === item.id 
                  ? 'scale-105 z-20' : 'scale-100 hover:scale-102'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="p-2 bg-surface-light rounded-lg text-accent w-min">
                  {item.category === "professional" ? (
                    <TfiBag className="w-6 h-6 text-accent" />
                  ) : (
                    <SlGraduation className="w-6 h-6 text-accent" />
                  )}
                </div>
                <span className="text-text text-lg font-bold">{item.title}</span>
                <span className="text-subtle">{item.subtitle}</span>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((item: string) => (
                    <SmallWidgets name={item} />
                  ))}
                </div>
              </div>
              <div className="px-3 py-1 text-xs rounded-full bg-surface-light w-min text-subtle flex flex-row items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                {item.status}
              </div>
            </div>
          ))}
        </div>
        {/* Project Details */}
        <ProjectDetails project={currentProject}/>
    </div>
  );
};

export default MainWidgets;
