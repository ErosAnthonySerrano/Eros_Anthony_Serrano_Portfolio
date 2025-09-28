"use client";
import { useEffect, useState } from "react";
import BigWidgets from "./big-widgets";
import SmallWidgets from "./small-widgets";

const ProfileStats = () => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  

  // Messages to cycle through
  const typingMessages = [
    "Transforming ideas into scalable web applications",
    "Building the future, one commit at a time...",
    "Currently crafting SaaS magic at Cloud Ready Technologies",
    "From Frontend React to Backend Python - I've got you covered",
    "Based in Naga City, serving clients worldwide",
  ];

  // Command responses
  
  const bigWidgetsData = [
    { value: "1+", label: "Year Professional" },
    { value: "3", label: "Major Projects" },
    { value: "7+", label: "Technical Skills" },
    { value: "5", label: "Industry Certifications" },
  ];

  const techStack = [
    { name: "Next.js", delay: 1000 },
    { name: "TypeScript", delay: 1100 },
    { name: "Python", delay: 1200 },
    { name: "C#/.NET", delay: 1300 },
    { name: "Java", delay: 1700 },
    { name: "Flutter/Dart", delay: 1400 },
    { name: "SQL Server", delay: 1500 },
    { name: "Firebase", delay: 1600 },
    { name: "Tailwind CSS", delay: 1700 },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const targetText = typingMessages[textIndex];

      if (currentText.length < targetText.length) {
        // Typing forward
        timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, 40);
      } else {
        // Pause then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 20);
      } else {
        // Move to next message
        setTextIndex((prev) => (prev + 1) % typingMessages.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, textIndex, typingMessages]);

 

  return (
    <div className=" rounded-2xl relative font-mono border border-border overflow-hidden p-6 bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-surface-light via-accent to-accent-dark rounded-2xl animate-pulse" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="h-17">
          <div className="text-lg text-subtle min-h-[1.5rem]">
            {currentText}
            <span className="animate-pulse text-accent-dark">|</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bigWidgetsData.map((item, index) => (
            <BigWidgets key={index} value={item.value} label={item.label} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((item, index) => (
            <SmallWidgets key={index} name={item.name} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProfileStats;
