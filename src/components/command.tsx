"use client";
import React, { useState } from "react";

const CommandBox = () => {
  const [commandInput, setCommandInput] = useState("");
  const [commandOutput, setCommandOutput] = useState("");

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

    clear: "",
  };

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    const response =
      commands[cmd] ||
      `Command '${cmd}' not found. Type 'help' for available commands.`;

    if (cmd === "clear") {
      setCommandOutput("");
    } else {
      setCommandOutput(response);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(commandInput);
      setCommandInput("");
    }
  };
  return (
    <div className="bg-gradient-to-b from-surface to-surface-dark border border-border rounded-2xl p-3 z-10 shadow-lg shadow-black/40">
      <div className="flex items-center mb-2">
        <span className="text-accent mr-2 text-shadow-lg text-shadow-black/30 animate-pulse">
          $
        </span>
        <input
          type="text"
          value={commandInput}
          onChange={(e) => setCommandInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Try: help, skills, contact, or experience"
          className="border-none outline-none text-accent font-mono text-sm flex-1 placeholder-accent-dark caret-accent"
          autoFocus// Prevents losing focus
        />
      </div>

      {commandOutput && (
        <div className="text-subtle text-sm whitespace-pre-line mt-3 border-t border-gray-600 pt-3 text-shadow-lg text-shadow-black/50">
          {commandOutput}
        </div>
      )}
    </div>
  );
};

export default CommandBox;
