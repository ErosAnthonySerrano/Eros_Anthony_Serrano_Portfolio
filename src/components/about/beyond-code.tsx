import { FiUsers } from "react-icons/fi"; 
import { BiVideo } from "react-icons/bi"; 
import { IoColorPaletteOutline } from "react-icons/io5";
import React from "react";

const BeyondCode = () => {
  return (
    <div className="flex flex-col gap-4 w-full z-10">
      <div className="bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border rounded-2xl p-8 overflow-hidden flex flex-col items-center justify-center text-center">
        <IoColorPaletteOutline className="w-8 h-8 text-accent mx-auto mb-4" />
        <h3 className="font-bold mb-2 text-text">Graphic Design</h3>
        <p className="text-subtle text-sm">Adobe Photoshop & Illustrator</p>
      </div>
      <div className="bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border rounded-2xl p-8 overflow-hidden flex flex-col items-center justify-center text-center">
        <BiVideo className="w-8 h-8 text-accent mx-auto mb-4" />
        <h3 className="font-semibold mb-2 text-text">Media Production</h3>
        <p className="text-subtle text-sm">Video editing & audio mixing</p>
      </div>
      <div className="bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border rounded-2xl p-8 overflow-hidden flex flex-col items-center justify-center text-center">
        <FiUsers className="w-8 h-8 text-accent mx-auto mb-4" />
        <h3 className="font-semibold mb-2 text-text">Team Collaboration</h3>
        <p className="text-subtle text-sm">
          Agile environments & leadership
        </p>
      </div>
    </div>
  );
};

export default BeyondCode;
