"use client"
import { useEffect, useState } from "react";
import BigWidgets from "./big-widgets";
import SmallWidgets from "./small-widgets";

const ProfileStats = () => {

      const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [commandInput, setCommandInput] = useState('');
  const [commandOutput, setCommandOutput] = useState('');

  // Messages to cycle through
  const typingMessages = [
    'Transforming ideas into scalable web applications',
    'Building the future, one commit at a time...',
    'Currently crafting SaaS magic at Cloud Ready Technologies',
    'From Frontend React to Backend Python - I\'ve got you covered',
    'Based in Naga City, serving clients worldwide'
  ];

  // Command responses
  const commands: Record<string, string> = {
    help: `Available commands:
- skills: View my technical expertise
- experience: See my work history  
- contact: Get my contact information
- projects: Quick overview of what I've built
- clear: Clear the terminal`,
    
    skills: `Technical Skills:
Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Python, C#/.NET, Node.js
Mobile: Flutter/Dart
Databases: SQL Server, SQLite, Firebase`,
    
    experience: `Professional Experience:
 Cloud Ready Technologies Corp (Jan 2024 - Present)
  → Frontend Lead on Secgra SaaS Platform
  → Full-stack development with Next.js & Python`,
    
    contact: `Let's Connect:
Email: erosanthonyserrano@gmail.com
Phone: +63 966 391 1808
Location: Naga City, Philippines`,
    
    projects: `Notable Projects:
1. Secgra SaaS Platform - Next.js, TypeScript, Python
2. Memorial Park Management System - Flutter, Firebase
3. Reservation & Inventory System - C#, SQL Server`,
    
    clear: ''
  };
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

   const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    const response = commands[cmd] || `Command '${cmd}' not found. Type 'help' for available commands.`;
    
    if (cmd === 'clear') {
      setCommandOutput('');
    } else {
      setCommandOutput(response);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(commandInput);
      setCommandInput('');
    }
  };

  return (
    <div className=" bg-background rounded-2xl relative font-mono border border-border overflow-hidden p-6">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-subtle via-accent to-accent-dark rounded-2xl animate-pulse"/>
     
      <div className="relative z-10 flex flex-col gap-6">
          <div className="">
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
                <SmallWidgets key={index} name={item.name}/>
            ))}
          </div>
           <div className="bg-background border border-border rounded-2xl p-3">
              <div className="flex items-center mb-2">
                <span className="text-accent mr-2">$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Try: help, skills, contact, or experience"
                  className="bg-transparent border-none outline-none text-accent font-mono text-sm flex-1 placeholder-accent-dark"
                />
              </div>
          
              {commandOutput && (
                <div className="text-subtle text-sm whitespace-pre-line mt-3 border-t border-gray-600 pt-3">
                  {commandOutput}
                </div>
              )}
            </div>
      </div>
    </div>
  );
};

export default ProfileStats;
