import { ArrowCircleDown, ArrowCircleDown2 } from "iconsax-react";
import { CiLinkedin } from "react-icons/ci";
import { FaCode, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import BigWidgets from "../components/big-widgets";
import ProfileStats from "../components/profile-stats";
import CircuitBackground from "../components/circuit-background";
import CommandBox from "../components/command";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-10 gap-12 font-mono">
      
      <div className="flex flex-col lg:flex-row items-center gap-20 w-full px-5 lg:max-w-[75vw] lg:px-0 2xl:max-w-[60vw]">
        <div className="flex flex-col gap-6 items-center">
          <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[300px] xl:h-[300px]  rounded-full overflow-hidden border-4 border-accent-dark shadow-xl shadow-black/40 z-10">
            <Image
              src="/Photo3.png"
              width={100}
              height={100}
              alt="Eros Anthony Serrano"
              className="w-full h-full object-cover mix-blend-luminosity"
            />
            
            <div className="absolute inset-0 bg-gradient-to-br from-surface via-transparent to-surface-dark"></div>
          </div>
          
        </div>
        <div className="flex flex-col gap-8">
          {/* Basic Details */}
          <div className="flex flex-col items-start gap-4">
            <div className="z-10 px-2 py-0.5 w-fit border border-accent-dark bg-surface shadow-lg shadow-black/40 rounded-2xl flex flex-row items-center gap-2">
                <FaCode className="text-accent-dark w-4 h-4 drop-shadow-md drop-shadow-black" />
                <span className="text-subtle text-shadow-lg text-shadow-black/50">Software Engineer</span>
              </div>
            <span className="text-text text-4xl font-semibold text-shadow-lg text-shadow-black">
              {"Hello I'm"}
            </span>
            <span className="text-accent-hover text-5xl font-bold ">
              Eros Anthony Serrano
            </span>
          </div>
          <div className="flex flex-col gap-6">
            {/* Short Introduction */}
            <div className="text-subtle text-shadow-lg text-shadow-black/50">
              Frontend-focused software engineer who believes great code should
              be invisible to users but transformative in impact. I specialize
              in building responsive, accessible web applications while
              maintaining a strong foundation in backend architecture. My
              approach combines technical precision with user-centered thinking
              to deliver solutions that not only work flawlessly but feel
              effortless to use.
            </div>

            {/* Links and Download Button */}
            <div className="flex flex-row items-center justify-between z-10">
              <a
                href="/cv-eros-anthony-serrano.pdf"
                download="CV - Eros Anthony Serrano"
                className="bg-surface text-text hover:text-accent-hover border border-border shadow-lg shadow-black/30 rounded-lg px-3 py-1.5 w-max hover:border-accent-hover cursor-pointer flex flex-row items-center gap-2
               transition-all transform duration-150 active:scale-90 active:shadow-inner hover:-translate-y-1 font-bold"
              >
                <span className="text-shadow-lg text-shadow-black/50">Download CV</span>
                <FaDownload className="w-4 h-4 drop-shadow-md drop-shadow-black" />
              </a>
              <div className="flex flex-row items-center gap-4">
                <div className="border border-border bg-surface shadow-lg shadow-black/30 hover:-translate-y-1 hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer transition-all transform duration-150 active:scale-90 active:shadow-inner">
                  <FaLinkedinIn className="w-4 h-4 drop-shadow-md drop-shadow-black" />
                </div>
                <div className="border border-border bg-surface shadow-lg shadow-black/30 hover:-translate-y-1 hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer transition-all transform duration-150 active:scale-90 active:shadow-inner">
                  <FaGithub className="w-4 h-4 drop-shadow-md drop-shadow-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[75vw] 2xl:max-w-[60vw] px-5 lg:px-0 mb-6 flex flex-col gap-6">
        <ProfileStats />
        <CommandBox/>
      </div>
    </div>
  );
}
