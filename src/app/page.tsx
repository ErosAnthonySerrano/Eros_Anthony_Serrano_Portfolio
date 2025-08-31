import { ArrowCircleDown, ArrowCircleDown2 } from "iconsax-react";
import { CiLinkedin } from "react-icons/ci";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex w-full h-full items-center justify-center pt-20">
      <div className="flex flex-col lg:flex-row items-center gap-20 w-full px-10 lg:px-0 lg:max-w-[60vw]">
          <Image
            src="/2.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            className="rounded-full"
          />
        <div className="flex flex-col gap-8">
          {/* Basic Details */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-subtle">Software Developer</span>
            <span className="text-text text-4xl font-semibold">Hello I'm</span>
            <span className="text-accent-hover text-5xl font-bold">
              Eros Anthony Serrano
            </span>
          </div>
          <div className="flex flex-col gap-6">
            {/* Short Introduction */}
            <div className="text-subtle">
              Frontend-focused software engineer who believes great code should be
              invisible to users but transformative in impact. I specialize in
              building responsive, accessible web applications while maintaining a
              strong foundation in backend architecture. My approach combines
              technical precision with user-centered thinking to deliver solutions
              that not only work flawlessly but feel effortless to use.
            </div>
            {/* Links and Download Button */}
            <div className="flex flex-row items-center justify-between">
              <button className="text-text hover:text-accent-hover border border-subtle rounded-lg px-3 py-1.5 w-max hover:border-accent-hover cursor-pointer flex flex-row items-center gap-2">
                <span>Download CV</span>
                <FaDownload className="w-4 h-4" />
              </button>
              <div className="flex flex-row items-center gap-4">
                <div className="border border-subtle hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer">
                  <FaLinkedinIn className="w-4 h-4" />
                </div>
                <div className="border border-subtle hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer">
                  <FaGithub className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
