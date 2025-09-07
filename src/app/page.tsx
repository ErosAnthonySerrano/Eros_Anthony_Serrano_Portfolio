import { ArrowCircleDown, ArrowCircleDown2 } from "iconsax-react";
import { CiLinkedin } from "react-icons/ci";
import { FaCode, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import BigWidgets from "../components/big-widgets";
import ProfileStats from "../components/profile-stats";
import CircuitBackground from "../components/circuit-background";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-10 gap-12 font-mono relative">
      <CircuitBackground intensity="subtle" color="multi" />
      <div className="flex flex-col lg:flex-row items-center gap-20 w-full px-10 lg:px-0 lg:max-w-[60vw]">
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-dark">
          <Image
            src="/Photo2.png"
            width={300}
            height={300}
            alt="Eros Anthony Serrano"
            className="w-full h-full object-cover mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-accent-dark"></div>
        </div>
        <div className="flex flex-col gap-8">
          {/* Basic Details */}
          <div className="flex flex-col items-start gap-2">
            <div className="px-2 py-0.5 border border-accent bg-surface rounded-2xl flex flex-row items-center gap-2">
              <FaCode className="text-accent-dark w-4 h-4" />
              <span className="text-subtle">Software Engineer</span>
            </div>
            <span className="text-text text-4xl font-semibold">
              {"Hello I'm"}
            </span>
            <span className="text-accent-hover text-5xl font-bold">
              Eros Anthony Serrano
            </span>
          </div>
          <div className="flex flex-col gap-6">
            {/* Short Introduction */}
            <div className="text-subtle">
              Frontend-focused software engineer who believes great code should
              be invisible to users but transformative in impact. I specialize
              in building responsive, accessible web applications while
              maintaining a strong foundation in backend architecture. My
              approach combines technical precision with user-centered thinking
              to deliver solutions that not only work flawlessly but feel
              effortless to use.
            </div>

            {/* Links and Download Button */}
            <div className="flex flex-row items-center justify-between">
              <a
                href="/cv-eros-anthony-serrano.pdf"
                download="CV - Eros Anthony Serrano"
                className="text-text hover:text-accent-hover border border-subtle rounded-lg px-3 py-1.5 w-max hover:border-accent-hover cursor-pointer flex flex-row items-center gap-2
               transition-all transform duration-150 active:scale-90 active:shadow-inner"
              >
                <span>Download CV</span>
                <FaDownload className="w-4 h-4" />
              </a>
              <div className="flex flex-row items-center gap-4">
                <div className="border border-subtle hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer transition-all transform duration-150 active:scale-90 active:shadow-inner">
                  <FaLinkedinIn className="w-4 h-4" />
                </div>
                <div className="border border-subtle hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer transition-all transform duration-150 active:scale-90 active:shadow-inner">
                  <FaGithub className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[60vw] px-10 lg:px-0 mb-6">
        <ProfileStats />
      </div>
    </div>
  );
}
