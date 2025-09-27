import { BsFacebook } from "react-icons/bs"; 
import { BiMessageRounded } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="bg-gradient-to-b from-surface to-surface-dark z-10 shadow-lg shadow-black/40 rounded-2xl border border-border p-8 flex flex-col gap-6">
      <h2 className="text-accent text-shadow-lg text-shadow-black/30 text-2xl font-bold">
        Get in Touch
      </h2>
      <div className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-accent shadow-lg shadow-black/30 p-4">
          <AiOutlineMail className="w-6 h-6 text-text" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-subtle">Email</p>
          <p className="text-text">{`erosanthonyserrano@gmail.com`}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-accent shadow-lg shadow-black/30 p-4">
          <CiLocationOn className="w-6 h-6 text-text" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-subtle">Location</p>
          <p className="text-text">{`Calabanga, Camarines Sur, Philippines`}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-accent shadow-lg shadow-black/30 p-4">
          <BiMessageRounded className="w-6 h-6 text-text" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-subtle">Response Time</p>
          <p className="text-text">{`Within 24 hours`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-border py-4">
        <p className="text-subtle">Follow me on</p>
        <div className="flex flex-row items-center gap-4">
            <div className="border border-border bg-surface shadow-lg shadow-black/30 hover:-translate-y-1 hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer transition-all transform duration-150 active:scale-90 active:shadow-inner">
              <FaLinkedinIn className="w-4 h-4 drop-shadow-md drop-shadow-black" />
            </div>
            <div className="border border-border bg-surface shadow-lg shadow-black/30 hover:-translate-y-1 hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer transition-all transform duration-150 active:scale-90 active:shadow-inner">
              <FaGithub className="w-4 h-4 drop-shadow-md drop-shadow-black" />
            </div>
            <div className="border border-border bg-surface shadow-lg shadow-black/30 hover:-translate-y-1 hover:border-accent-hover rounded-full p-2 text-text hover:text-accent-hover cursor-pointer transition-all transform duration-150 active:scale-90 active:shadow-inner">
              <BsFacebook className="w-4 h-4 drop-shadow-md drop-shadow-black" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
