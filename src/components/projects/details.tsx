import { BiLink } from "react-icons/bi"; 
import React from "react";
import SmallWidgets from "../small-widgets";
import Link from "next/link";
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
interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-6 w-full bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border p-6 rounded-2xl z-10">
      {/* Status */}
      <div className="flex justify-end w-full">
        <div className="flex flex-row items-center gap-4">
          {/* Link */}
          <div>
            {project.id === 'secgra' ? (
              <span className="text-subtle italic text-xs">{"Due to NDA restrictions, project screenshot and public links cannot be shared"}</span>
            ) : project.id === 'caffeine' ? (
              <Link href={"https://www.caffeinesolutions.sg/"} target="_blank" className="cursor-pointer rounded-full bg-surface text-subtle hover:text-accent border border-border hover:border-accent shadow-lg shadow-black/40 w-10 h-10 flex items-center justify-center hover:-translate-y-1 transition-all transform duration-150 active:scale-90 active:shadow-inner">
                <BiLink className="w-6 h-6 drop-shadow-md drop-shadow-black"/>
              </Link>
            ) : project.id === 'memorial' ? (
              <Link href={"https://mpimscapstoneproject.web.app/"} target="_blank" className="cursor-pointer rounded-full bg-surface text-subtle hover:text-accent border border-border hover:border-accent shadow-lg shadow-black/40 w-10 h-10 flex items-center justify-center hover:-translate-y-1 transition-all transform duration-150 active:scale-90 active:shadow-inner">
                <BiLink className="w-6 h-6 drop-shadow-md drop-shadow-black"/>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
          {/* Status */}
          <div className="border border-accent bg-surface-light shadow-lg shadow-black/40 text-accent px-3 py-1 rounded-full flex flex-row items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            {project.status}
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="flex flex-col gap-2">
        <span className="text-text text-4xl font-bold">{project.title}</span>
        <span className="text-accent ">{project.subtitle}</span>
        <span className="text-sm text-subtle">{project.timeline}</span>
      </div>
      {/* Description */}
      <p className="text-subtle">{project.description}</p>
      {/* Technology Stack */}
      <div className="flex flex-col gap-4">
        <span className="text-accent text-lg font-bold ">Technology Stack</span>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item: string, index) => (
            <SmallWidgets key={index} name={item} />
          ))}
        </div>
      </div>
      {/* Key Features */}
      <div className="flex flex-col gap-4">
        <span className="text-accent text-lg font-bold ">
          Key Features & Implementation
        </span>
        <div className="flex flex-col gap-4">
          {project.features.map((item: string, index) => (
            <div key={index} className="flex flex-row items-center gap-4">
              <div className="w-2 h-2 bg-accent rounded-full flex flex-shrink-0" />
              <span className="text-subtle">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Technical Challenges */}
      <div className="flex flex-col gap-4">
        <span className="text-accent text-lg font-bold ">
          Technical Challenges
        </span>
        <div className="flex flex-col gap-4">
          {project.challenges.map((item: string, index) => (
            <div key={index} className="flex flex-row items-center gap-4">
              <div className="w-2 h-2 bg-accent rounded-full flex flex-shrink-0" />
              <span className="text-subtle">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Outcomes */}
      <div className="flex flex-col gap-4">
        <span className="text-accent text-lg font-bold ">
          Outcomes & Results
        </span>
        <div className="flex flex-col gap-4">
          {project.outcomes.map((item: string, index) => (
            <div key={index} className="flex flex-row items-center gap-4">
              <div className="w-2 h-2 bg-accent rounded-full flex flex-shrink-0" />
              <span className="text-subtle">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
