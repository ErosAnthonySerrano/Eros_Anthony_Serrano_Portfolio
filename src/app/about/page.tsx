import Achievements from "@/src/components/about/achievements";
import BeyondCode from "@/src/components/about/beyond-code";
import Certificates from "@/src/components/about/certificates";
import Expertise from "@/src/components/about/expertise";
import MyStory from "@/src/components/about/my-story";
import PersonalInfo from "@/src/components/about/personal-info";
import CommandBox from "@/src/components/command";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-10 gap-12 font-mono">
      <div className="flex flex-col gap-10 items-center justify-center p-5 w-full h-full lg:max-w-[75vw] lg:p-0 2xl:max-w-[60vw]">
        {/* Intro */}
        <h1 className="text-4xl md:text-4xl font-bold mb-6 text-text text-shadow-lg text-shadow-black/30">
          Getting to know
          <span className="text-accent">
            {" "}
            Eros
          </span>
        </h1>
        {/* Personal Info */}
        <div className="flex flex-col gap-6 w-full">
          <PersonalInfo />
          <MyStory />
        </div>

        {/* Expertise */}
        <h2 className="text-3xl font-bold text-center text-text text-shadow-lg text-shadow-black/30">
          Technical <span className="text-accent">Expertise</span>
        </h2>

        <Expertise />

        {/* Achievements */}
        <h2 className="text-3xl font-bold text-center text-text text-shadow-lg text-shadow-black/30">
          Key <span className="text-accent">Achievements</span>
        </h2>

        <Achievements />

        {/* Certifications */}

        <h2 className="text-3xl font-bold text-center text-text text-shadow-lg text-shadow-black/30">
          Industry <span className="text-accent">Certifications</span>
        </h2>

        <Certificates />

        {/* Beyond Code */}
        <h2 className="text-3xl font-bold text-center text-text text-shadow-lg text-shadow-black/30">
          Beyond <span className="text-accent">Code</span>
        </h2>
        <BeyondCode />
        
        {/* Command Box */}
        <div className="flex w-full">
          <CommandBox/>
        </div>
      </div>
    </div>
  );
};

export default About;
