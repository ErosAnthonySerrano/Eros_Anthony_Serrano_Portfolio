import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col gap-6 p-8 bg-gradient-to-b from-surface to-surface-dark border border-border rounded-2xl overflow-hidden w-full z-10 shadow-lg shadow-black/40">
      <div className="flex flex-col gap-6">
        <span className="text-accent text-2xl font-bold text-shadow-lg text-shadow-black/20">Personal Info</span>
        <div className="flex flex-col gap-4">
          <span className="flex flex-row items-center gap-4">
            <HiOutlineLocationMarker className="w-5 h-5 text-accent drop-shadow-md drop-shadow-black" />
            <span className="text-text text-shadow-lg text-shadow-black/50">
              Zone 1, San Francisco, Calabanga, Camarines Sur
            </span>
          </span>
          <span className="flex flex-row items-center gap-4">
            <SlGraduation className="w-5 h-5 text-accent drop-shadow-md drop-shadow-black" />
            <span className="text-text text-shadow-lg text-shadow-black/50">BS Information Technology</span>
          </span>
          <span className="flex flex-row items-center gap-4">
            <MdOutlineDateRange className="w-5 h-5 text-accent drop-shadow-md drop-shadow-black" />
            <span className="text-text text-shadow-lg text-shadow-black/50">Graduated June 2023</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-accent text-2xl font-bold text-shadow-lg text-shadow-black/20">Current Role</span>
        <div className="bg-surface shadow-lg shadow-black/40 border border-border rounded-2xl overflow-hidden p-4 flex flex-col gap-2">
          <span className="text-text font-bold text-shadow-lg text-shadow-black/50">Software Engineer</span>
          <span className="text-accent text-shadow-lg text-shadow-black/30">Cloud Ready Technologies Corp</span>
          <span className="text-subtle text-xs text-shadow-lg text-shadow-black/50">January 2024 - Present</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
