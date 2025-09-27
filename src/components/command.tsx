"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CommandBox = () => {
  const [commandInput, setCommandInput] = useState("");
  const [commandOutput, setCommandOutput] = useState("");
  const router = useRouter();

  const commands: Record<string, string | (() => void)> = {
    // Original commands
    help: `Available commands:
  - skills: View my technical expertise
  - experience: See my work history  
  - contact: Get my contact information
  - projects: Quick overview of what I've built
  - clear: Clear the terminal
  
Navigation:
  - home: Go to home page
  - open projects: Navigate to projects page
  - open about: Navigate to about page
  - open contact: Navigate to contact page
  
Hidden gems:
  Try typing: coffee, bug, stackoverflow, git, debug, sudo, vim, 404, 
  semicolon, recursion, css, javascript, weekend, deploy, merge, crash`,

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

    // Navigation commands
    home: () => router.push("/"),
    "open projects": () => router.push("/projects"),
    "open about": () => router.push("/about"),
    "open contact": () => router.push("/contact"),

    // Fun hidden gems for developers
    coffee: `☕ Coffee Status: CRITICAL_LOW
  Warning: Productivity may decrease by 90%
  Recommended action: Immediate caffeine injection required
  
  "Coffee is a way of stealing time that should by rights belong to your older self." - Terry Pratchett`,

    bug: `🐛 Bug Report Filed Successfully!
  Status: It's not a bug, it's a feature
  Priority: Will fix after coffee
  Assigned to: Future me (good luck buddy)
  
  Remember: 99 little bugs in the code, 99 little bugs...
  Take one down, patch it around, 127 little bugs in the code!`,

    stackoverflow: `Stack Overflow Status: ✅ ONLINE
  Current reputation: Probably not enough
  Questions asked: More than I'd like to admit
  Answers copied: This information is classified
  
  "The only difference between Stack Overflow and magic is that 
  Stack Overflow is reproducible." - Unknown Developer`,

    git: `Git Status: Definitely not clean
  Current branch: feature/please-work-this-time
  Commits ahead: 47 (mostly "fix", "please work", "I hate this")
  Last commit: "It works on my machine ¯\\_(ツ)_/¯"
  
  Remember: There are only two hard things in Computer Science:
  1. Cache invalidation
  2. Naming things
  3. Off-by-1 errors`,

    debug: `🔍 Debug Mode: ACTIVATED
  Rubber duck: Standing by
  console.log statements: 247 and counting
  Breakpoints set: Everywhere
  
  Current status: "It worked yesterday"
  Probable cause: Quantum tunneling or cosmic rays
  
  "Debugging is like being the detective in a crime movie 
  where you are also the murderer." - Filipe Fortes`,

    sudo: `sudo: command not found
  Nice try! This isn't your terminal 😏
  
  But since you're here... here's a dev joke:
  
  Why do programmers prefer dark mode?
  Because light attracts bugs! 🐛`,

    vim: `Entering Vim...
  
  How to exit Vim:
  1. :q (if no changes)
  2. :q! (force quit, abandon changes) 
  3. :wq (save and quit)
  4. Restart computer (classic)
  5. Accept your fate and become one with Vim
  
  "I've been using Vim for about 2 years now, mostly because 
  I can't figure out how to exit it." - Anonymous Developer`,

    "404": `Error 404: Motivation Not Found
  
  The page you are looking for might have been removed,
  had its name changed, or is temporarily unavailable.
  
  Did you mean: "How to fix this thing that worked yesterday?"
  
  Suggested fixes:
  - Turn it off and on again
  - Clear cache and try again
  - Blame it on the previous developer`,

    semicolon: `; <-- You dropped this!
  
  Missing semicolon count today: ∞
  Time spent debugging missing semicolons: 4.7 hours
  
  Languages that don't need semicolons: JavaScript (sometimes)
  Languages that definitely need semicolons: C, Java, C#
  Languages that are indifferent: Python (because spaces matter more)
  
  "A semicolon is a comma with commitment issues."`,

    recursion: `To understand recursion, you must first understand recursion.
  To understand recursion, you must first understand recursion.
  To understand recursion, you must first understand recursion.
  To understand recursion, you must first understand recursion.
  
  Stack overflow error: Maximum call stack size exceeded
  
  "In order to understand recursion, one must first understand recursion."`,

    css: `CSS Status: Somehow still working
  
  Current issues:
  - Div is 1px off center (browser compatibility issue)
  - Flexbox is doing weird things again
  - CSS Grid is perfect but client wants IE11 support
  
  "CSS is awesome!" - Said no one debugging browser differences
  
  Quick tip: When in doubt, add more !important`,

    javascript: `JavaScript: The Good, The Bad, and The Wat
  
  The Good: Flexible, powerful, runs everywhere
  The Bad: Flexible, powerful, runs everywhere
  The Wat: [] + [] = "" but [] + {} = "[object Object]"
  
  "JavaScript is the duct tape of the Internet." - Charlie Campbell
  
  Remember: == is not ===, and that's just the beginning...`,

    weekend: `Weekend Status: PROTECTED
  
  Deploy on Friday? Absolutely not.
  Work on Saturday? Error 403: Forbidden
  Sunday code review? Service temporarily unavailable
  
  "Any fool can write code that a computer can understand.
  Good programmers write code that humans can understand."
  - Martin Fowler (preferably not on weekends)`,

    deploy: `Deployment Status: It's complicated
  
  Stage 1: Works on my machine ✅
  Stage 2: Works on dev server ✅  
  Stage 3: Works on staging ✅
  Stage 4: Production deployment... 💥
  
  "Everyone has a testing environment. Some people are lucky
  enough to have a production environment too." - Unknown`,

    merge: `Git Merge Status: Conflict detected
  
  Files affected: ALL OF THEM
  Lines of conflict: Yes
  Time to resolve: 3 business days
  
  Merge conflict resolution steps:
  1. Panic
  2. Blame Git
  3. Consider career change
  4. Eventually fix conflicts
  5. Promise to use smaller commits next time`,

    crash: `Application Status: Successfully failed
  
  Error log size: 2.3GB and growing
  Stack trace depth: Mariana Trench levels
  User reports: "It just stopped working"
  
  Root cause analysis:
  - User did exactly what they were supposed to do
  - System worked as intended
  - Reality.exe has stopped responding
  
  "That's weird... it was working a minute ago."`,

    matrix: `Wake up, developer...
  The Matrix has you...
  Follow the white rabbit... 🐰
  
  Red pill: Learn Assembly language
  Blue pill: Keep using frameworks
  
  "There is no spoon... only segmentation faults."`,

    blockchain: `Blockchain Status: Decentralized
  
  Current value: Depends on Elon's tweets
  Energy consumption: Yes
  Problems solved: TBD
  
  "Blockchain is a solution looking for a problem...
  and occasionally finding one!" - Pragmatic Developer`,

    ai: `AI Status: Becoming self-aware...
  
  Current task: Replacing developers
  Progress: Still can't center a div properly
  Threat level: Minimal (for now)
  
  "I'm not afraid of AI taking over.
  I'm afraid of AI writing better code than me." - Honest Developer`,

    docker: `Docker Status: Container orchestration in progress
  
  Images pulled: 47GB worth
  Containers running: More than my RAM can handle
  "It works on my container": ✅
  
  "Docker: Making 'works on my machine' everyone's problem
  since 2013!"`,

    refactor: `Refactor Status: Initiated
  
  Original plan: Clean up a few lines
  Current status: Rewriting entire codebase
  Timeline: 2 weeks → 2 months → ∞
  
  "I'll just refactor this one function..."
  Famous last words of every developer.`,

    legacy: `Legacy Code Warning: Proceed with caution
  
  Last modified: 2003
  Documentation: "The code is self-documenting"
  Tests: What are tests?
  Original developer: Has left the company/planet
  
  "Legacy code: Code without tests. Or code you're afraid to change.
  Or both." - Michael Feathers`,

    frontend: `Frontend Status: Pixel perfect (on my screen)
  
  Browsers tested: Chrome (my version)
  Mobile responsive: "Looks fine on iPhone 12"
  IE compatibility: LOL
  
  "Frontend development: Making it look easy while
  crying internally about browser compatibility."`,

    backend: `Backend Status: It's complicated
  
  API responses: Usually JSON
  Database queries: Optimized (sometimes)
  Error handling: try { magic } catch { more magic }
  
  "Backend development: Where the real magic happens,
  and nobody sees it break." - Backend Developer`,

    password: `Password Requirements Updated:
  
  Must contain: Uppercase, lowercase, numbers, symbols
  Must not contain: Dictionary words, personal info
  Must be: Exactly 12-16 characters
  Must not be: Any password you can remember
  
  "The most secure password is the one you forget immediately
  after creating it." - Security Expert (probably)`,
  };

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    const response = commands[cmd];

    if (cmd === "clear") {
      setCommandOutput("");
      return;
    }

    if (typeof response === "function") {
      response();
      setCommandOutput(`Navigating to ${cmd}...`);
      setTimeout(() => setCommandOutput(""), 1000);
    } else if (response) {
      setCommandOutput(response);
    } else {
      setCommandOutput(
        `Command '${cmd}' not found. Type 'help' for available commands.`
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(commandInput);
      setCommandInput("");
    }
  };

  return (
     <div className="rounded-2xl p-px animate-rotate-border bg-conic/[from_var(--border-angle)] from-surface via-accent to-surface from-80% via-98% to-100% shadow-lg shadow-black/40  w-full max-w-full overflow-hidden  z-10">
       <div className="bg-gradient-to-b from-surface to-surface-dark  rounded-2xl p-3 w-full max-w-full overflow-hidden">
        <div className="flex items-center mb-2 w-full min-w-0">
          <span className="text-accent mr-2 text-shadow-lg text-shadow-black/30 animate-pulse flex-shrink-0">
            $
          </span>
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Try: help, skills, contact, or experience"
            className="bg-transparent border-none outline-none text-accent font-mono text-sm flex-1 placeholder-accent-dark caret-accent min-w-0"
          />
        </div>
        {commandOutput && (
          <div className="text-subtle text-sm whitespace-pre-wrap mt-3 border-t border-gray-600 pt-3 text-shadow-lg text-shadow-black/50 overflow-hidden break-words">
            {commandOutput}
          </div>
        )}
           </div>
     </div>
  );
};

export default CommandBox;
