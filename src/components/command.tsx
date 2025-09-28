"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CommandBox = () => {
  const [commandInput, setCommandInput] = useState("");
  const [commandOutput, setCommandOutput] = React.useState<React.ReactNode>("");
  const router = useRouter();

  const commands: Record<string, React.ReactNode | (() => void)> = {
    help: (
      <div className="space-y-4">
        <div>
          <h3 className="text-accent font-semibold mb-2">
           {` Available commands:`}
          </h3>
          <ul className="space-y-1 ml-4">
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-24 font-bold">{`skills`}</span>
              <span className="text-subtle">{`View my technical expertise`}</span>
            </li>
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-24 font-bold">{`experience`}</span>
              <span className="text-subtle">{`See my work history`}</span>
            </li>
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-24 font-bold">{`contact`}</span>
              <span className="text-subtle">{`Get my contact information`}</span>
            </li>
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-24 font-bold">{`projects`}</span>
              <span className="text-subtle">
                {`Quick overview of what I've built`}
              </span>
            </li>
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-24 font-bold">{`clear`}</span>
              <span className="text-subtle">{`Clear the terminal`}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-accent font-semibold mb-2">{`Navigation`}:</h3>
          <ul className="space-y-1 ml-4">
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-28 font-bold">{`home`}</span>
              <span className="text-subtle">{`Go to home page`}</span>
            </li>
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-28 font-bold">
                open projects
              </span>
              <span className="text-subtle">{`Navigate to projects page`}</span>
            </li>
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-28 font-bold">{`open about`}</span>
              <span className="text-subtle">{`Navigate to about page`}</span>
            </li>
            <li className="flex flex-col sm:flex-row">
              <span className="text-accent font-mono min-w-28 font-bold">
                open contact
              </span>
              <span className="text-subtle">{`Navigate to contact page`}</span>
            </li>
          </ul>
        </div>
         <div className="border-t border-gray-600 pt-3 mt-4">
          <p className="text-subtle text-sm italic">
            {`💡 Tip: Try typing common developer terms... you might find some easter eggs`}
          </p>
        </div>
        {/* <div>
          <h3 className="text-accent font-semibold mb-2">Hidden gems:</h3>
          <div className="ml-4 text-subtle">
            <p>
              Try typing: <span className="text-accent font-mono">coffee</span>,{" "}
              <span className="text-accent font-mono">bug</span>,{" "}
              <span className="text-accent font-mono">stackoverflow</span>,{" "}
              <span className="text-accent font-mono">git</span>,{" "}
              <span className="text-accent font-mono">debug</span>,{" "}
              <span className="text-accent font-mono">sudo</span>,{" "}
              <span className="text-accent font-mono">vim</span>,{" "}
              <span className="text-accent font-mono">404</span>,{" "}
              <span className="text-accent font-mono">semicolon</span>,{" "}
              <span className="text-accent font-mono">recursion</span>,{" "}
              <span className="text-accent font-mono">css</span>,{" "}
              <span className="text-accent font-mono">javascript</span>,{" "}
              <span className="text-accent font-mono">weekend</span>,{" "}
              <span className="text-accent font-mono">deploy</span>,{" "}
              <span className="text-accent font-mono">merge</span>,{" "}
              <span className="text-accent font-mono">crash</span>,{" "}
              <span className="text-accent font-mono">matrix</span>,{" "}
              <span className="text-accent font-mono">blockchain</span>,{" "}
              <span className="text-accent font-mono">ai</span>,{" "}
              <span className="text-accent font-mono">docker</span>,{" "}
              <span className="text-accent font-mono">refactor</span>,{" "}
              <span className="text-accent font-mono">legacy</span>,{" "}
              <span className="text-accent font-mono">frontend</span>,{" "}
              <span className="text-accent font-mono">backend</span>,{" "}
              <span className="text-accent font-mono">password</span>
            </p>
          </div>
        </div> */}
      </div>
    ),

    skills: (
      <div className="space-y-4">
        <h3 className="text-accent font-semibold mb-3">{`Technical Skills:`}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-accent font-medium mb-2">{`Frontend:`}</h4>
            <ul className="space-y-1 ml-4">
              <li className="text-subtle">{`• Next.js, React, TypeScript`}</li>
              <li className="text-subtle">{`• Tailwind CSS`}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-medium mb-2">{`Backend:`}</h4>
            <ul className="space-y-1 ml-4">
              <li className="text-subtle">{`• Python, C#/.NET, Node.js`}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-medium mb-2">{`Mobile:`}</h4>
            <ul className="space-y-1 ml-4">
              <li className="text-subtle">{`• Flutter/Dart`}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-medium mb-2">{`Databases:`}</h4>
            <ul className="space-y-1 ml-4">
              <li className="text-subtle">{`• SQL Server, SQLite, Firebase`}</li>
            </ul>
          </div>
        </div>
      </div>
    ),

    experience: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold mb-3">
          {`Professional Experience:`}
        </h3>

        <div className="border-l-2 border-accent pl-4">
          <h4 className="text-accent font-medium">
            {`Cloud Ready Technologies Corp`}
          </h4>
          <p className="text-subtle text-sm mb-2">{`Jan 2024 - Present`}</p>
          <ul className="space-y-1">
            <li className="text-subtle">
              {`• Frontend Lead on Secgra SaaS Platform`}
            </li>
            <li className="text-subtle">
              {`• Full-stack development with Next.js & Python`}
            </li>
          </ul>
        </div>
      </div>
    ),

    contact: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold mb-3">{`Let's Connect:`}</h3>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-lg">📧</span>
            <div>
              <p className="text-subtle">{`Email`}</p>
              <p className="text-accent font-mono text-sm">
                {`erosanthonyserrano@gmail.com`}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-lg">📱</span>
            <div>
              <p className="text-subtle">{`Phone`}</p>
              <p className="text-accent font-mono text-sm">{`+63 966 391 1808`}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-lg">📍</span>
            <div>
              <p className="text-subtle">{`Location`}</p>
              <p className="text-accent font-mono text-sm">
                {`Naga City, Philippines`}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    projects: (
      <div className="space-y-4">
        <h3 className="text-accent font-semibold mb-3">{`Notable Projects:`}</h3>

        <ol className="space-y-4">
          <li className="border-l-2 border-accent pl-4">
            <h4 className="text-accent font-medium">{`Secgra SaaS Platform`}</h4>
            <p className="text-subtle text-sm">{`Next.js, TypeScript, Python`}</p>
          </li>

          <li className="border-l-2 border-accent pl-4">
            <h4 className="text-accent font-medium">
              {`Memorial Park Management System`}
            </h4>
            <p className="text-subtle text-sm">{`Flutter, Firebase`}</p>
          </li>

          <li className="border-l-2 border-accent pl-4">
            <h4 className="text-accent font-medium">
              {`Reservation & Inventory System`}
            </h4>
            <p className="text-subtle text-sm">{`C#, SQL Server`}</p>
          </li>
        </ol>
      </div>
    ),

    clear: "",

    // Navigation commands
    home: () => router.push("/"),
    "open projects": () => router.push("/projects"),
    "open about": () => router.push("/about"),
    "open contact": () => router.push("/contact"),

    // Fun hidden gems for developers
    coffee: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">☕</span>
          <h3 className="text-accent font-semibold">
            {`Coffee Status:`} <span className="text-red-400">{`CRITICAL_LOW`}</span>
          </h3>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 space-y-2">
          <p className="text-red-300 font-medium">
            {`⚠️ Warning: Productivity may decrease by 90%`}
          </p>
          <p className="text-subtle">
            {`Recommended action: Immediate caffeine injection required`}
          </p>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"Coffee is a way of stealing time that should by rights belong to your
          older self." - Terry Pratchett`}
        </blockquote>
      </div>
    ),

    bug: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🐛</span>
          <h3 className="text-accent font-semibold">
           {` Bug Report Filed Successfully!`}
          </h3>
        </div>

        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-accent">{`Status:`}</span>{" "}
              <span className="text-subtle">
                {`It's not a bug, it's a feature`}
              </span>
            </div>
            <div>
              <span className="text-accent">{`Priority:`}</span>{" "}
              <span className="text-subtle">{`Will fix after coffee`}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-accent">{`Assigned to:`}</span>{" "}
              <span className="text-subtle">{`Future me (good luck buddy)`}</span>
            </div>
          </div>
        </div>

        <div className="text-subtle text-sm">
          <p>{`Remember: 99 little bugs in the code, 99 little bugs...`}</p>
          <p>{`Take one down, patch it around, 127 little bugs in the code!`}</p>
        </div>
      </div>
    ),

    stackoverflow: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-accent text-xl">✅</span>
          <h3 className="text-accent font-semibold">
            {`Stack Overflow Status: ONLINE`}
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Current reputation:`}</span>
            <span className="text-subtle">{`Probably not enough`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Questions asked`}:</span>
            <span className="text-subtle">{`More than I'd like to admit`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Answers copied:`}</span>
            <span className="text-subtle">{`This information is classified`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"The only difference between Stack Overflow and magic is that Stack
          Overflow is reproducible." - Unknown Developer`}
        </blockquote>
      </div>
    ),

    git: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold">
          {`Git Status: `}<span className="text-red-400">{`Definitely not clean`}</span>
        </h3>

        <div className="bg-gray-900/40 border border-gray-600 rounded-lg p-3 font-mono text-sm space-y-1">
          <div>
            <span className="text-accent">{`Current branch:`}</span>{" "}
            <span className="text-subtle">{`feature/please-work-this-time`}</span>
          </div>
          <div>
            <span className="text-accent">{`Commits ahead`}:</span>{" "}
            <span className="text-subtle">
             {` 47 (mostly "fix", "please work", "I hate this")`}
            </span>
          </div>
          <div>
            <span className="text-accent">{`Last commit:`}</span>{" "}
            <span className="text-subtle">
              {`"It works on my machine ¯\_(ツ)_/¯"`}
            </span>
          </div>
        </div>

        <div className="text-subtle">
          <p className="mb-2">
            {`Remember: There are only two hard things in Computer Science:`}
          </p>
          <ol className="list-decimal ml-6 space-y-1">
            <li>{`Cache invalidation`}</li>
            <li>{`Naming things`}</li>
            <li>{`Off-by-1 errors`}</li>
          </ol>
        </div>
      </div>
    ),

    debug: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔍</span>
          <h3 className="text-accent font-semibold">
            {`Debug Mode: `}<span className="text-green-400">{`ACTIVATED`}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-accent">{`Rubber duck:`}</span>
            <span className="text-subtle">{`Standing by`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-accent">{`console.log statements:`}</span>
            <span className="text-subtle">{`247 and counting`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-accent">{`Breakpoints set:`}</span>
            <span className="text-subtle">{`Everywhere`}</span>
          </div>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
          <p className="text-yellow-300 font-medium">
            {`Current status: "It worked yesterday"`}
          </p>
          <p className="text-subtle text-sm">
            {`Probable cause: Quantum tunneling or cosmic rays`}
          </p>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle text-sm">
          {`"Debugging is like being the detective in a crime movie where you are
          also the murderer." - Filipe Fortes`}
        </blockquote>
      </div>
    ),

    sudo: (
      <div className="space-y-3">
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <p className="text-red-300 font-mono">{`sudo: command not found`}</p>
        </div>

        <p className="text-subtle">{`Nice try! This isn't your terminal 😏`}</p>

        <div className="border-t border-gray-600 pt-3">
          <p className="text-accent font-medium mb-2">
            {`But since you're here... here's a dev joke:`}
          </p>
          <div className="bg-gray-900/40 rounded-lg p-3">
            <p className="text-subtle mb-2">
             {` Why do programmers prefer dark mode?`}
            </p>
            <p className="text-accent">{`Because light attracts bugs! 🐛`}</p>
          </div>
        </div>
      </div>
    ),

    vim: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h3 className="text-accent font-semibold">{`Entering Vim...`}</h3>
          <span className="animate-pulse">_</span>
        </div>

        <div>
          <h4 className="text-accent font-medium mb-2">{`How to exit Vim:`}</h4>
          <ol className="list-decimal ml-6 space-y-1 text-subtle">
            <li>
              <span className="font-mono text-accent">{`:q`}</span> {`(if no changes)`}
            </li>
            <li>
              <span className="font-mono text-accent">{`:q!`}</span> {`(force quit,
              abandon changes)`}
            </li>
            <li>
              <span className="font-mono text-accent">{`:wq`}</span> {`(save and quit)`}
            </li>
            <li>{`Restart computer (classic)`}</li>
            <li>{`Accept your fate and become one with Vim`}</li>
          </ol>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle text-sm">
          {`"I've been using Vim for about 2 years now, mostly because I can't
          figure out how to exit it." - Anonymous Developer`}
        </blockquote>
      </div>
    ),

    "404": (
      <div className="space-y-3">
        <div className="text-center">
          <h3 className="text-accent font-bold text-2xl mb-2">{`404`}</h3>
          <h4 className="text-red-400 font-semibold">
            {`Error: Motivation Not Found`}
          </h4>
        </div>

        <p className="text-subtle text-sm">
          {`The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.`}
        </p>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
          <p className="text-blue-300">
            {`Did you mean: "How to fix this thing that worked yesterday?"`}
          </p>
        </div>

        <div>
          <h4 className="text-accent font-medium mb-2">{`Suggested fixes:`}</h4>
          <ul className="space-y-1 ml-4">
            <li className="text-subtle">{`• Turn it off and on again`}</li>
            <li className="text-subtle">{`• Clear cache and try again`}</li>
            <li className="text-subtle">
             {` • Blame it on the previous developer`}
            </li>
          </ul>
        </div>
      </div>
    ),

    semicolon: (
      <div className="space-y-3">
        <div className="text-center">
          <span className="text-4xl text-accent font-mono">{`;`}</span>
          <p className="text-accent font-medium">{`You dropped this!`}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-accent">{`Missing semicolon count today`}:</span>
            <span className="text-subtle ml-2">{`∞`}</span>
          </div>
          <div>
            <span className="text-accent">{`Time spent debugging:`}</span>
            <span className="text-subtle ml-2">{`4.7 hours`}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="text-accent">
              {`Languages that don't need semicolons:`}
            </span>
            <span className="text-subtle">{`JavaScript (sometimes)`}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="text-accent">
              {`Languages that definitely need semicolons:`}
            </span>
            <span className="text-subtle">{`C, Java, C#`}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="text-accent">{`Languages that are indifferent:`}</span>
            <span className="text-subtle">
              {`Python (because spaces matter more)`}
            </span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
         {` "A semicolon is a comma with commitment issues."`}
        </blockquote>
      </div>
    ),

    recursion: (
      <div className="space-y-3">
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 space-y-1 font-mono text-sm">
          <p className="text-yellow-300">
            {`To understand recursion, you must first understand recursion.`}
          </p>
          <p className="text-yellow-300">
            {`To understand recursion, you must first understand recursion.`}
          </p>
          <p className="text-yellow-300">
            {`To understand recursion, you must first understand recursion.`}
          </p>
          <p className="text-yellow-300">
           {` To understand recursion, you must first understand recursion.`}
          </p>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <p className="text-red-300 font-mono text-sm">
            {`Stack overflow error: Maximum call stack size exceeded`}
          </p>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"In order to understand recursion, one must first understand
          recursion."`}
        </blockquote>
      </div>
    ),

    css: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold">
         {` CSS Status:{" "}`}
          <span className="text-green-400">{`Somehow still working`}</span>
        </h3>

        <div>
          <h4 className="text-accent font-medium mb-2">{`Current issues:`}</h4>
          <ul className="space-y-1 ml-4">
            <li className="text-subtle">
              {`• Div is 1px off center (browser compatibility issue)`}
            </li>
            <li className="text-subtle">
              {`• Flexbox is doing weird things again`}
            </li>
            <li className="text-subtle">
              {`• CSS Grid is perfect but client wants IE11 support`}
            </li>
          </ul>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"CSS is awesome!" - Said no one debugging browser differences`}
        </blockquote>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
          <p className="text-blue-300 font-medium">{`Quick tip:`}</p>
          <p className="text-subtle">{`When in doubt, add more !important`}</p>
        </div>
      </div>
    ),

    javascript: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold">
          {`JavaScript: The Good, The Bad, and The Wat`}
        </h3>

        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <span className="text-green-400">The Good:</span>
            <span className="text-subtle">
              {`Flexible, powerful, runs everywhere`}
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-red-400">{`The Bad:`}</span>
            <span className="text-subtle">
              {`Flexible, powerful, runs everywhere`}
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-yellow-400">{`The Wat:`}</span>
            <span className="text-subtle font-mono">
              {`[] + [] = "" but [] + {} = "[object Object]"`}
            </span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"JavaScript is the duct tape of the Internet." - Charlie Campbell`}
        </blockquote>

        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
          <p className="text-yellow-300">
           {` Remember: `}<span className="font-mono">{`==`}</span> {`is not{" "}`}
            <span className="font-mono">===</span>{`, and that's just the
            beginning...`}
          </p>
        </div>
      </div>
    ),

    weekend: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold">
          {`Weekend Status: `}<span className="text-green-400">{`PROTECTED`}</span>
        </h3>

        <div className="space-y-2">
          <div className="flex justify-between items-center bg-red-900/20 border border-red-500/30 rounded p-2">
            <span className="text-accent">{`Deploy on Friday?`}</span>
            <span className="text-red-400 font-bold">{`Absolutely not`}</span>
          </div>
          <div className="flex justify-between items-center bg-red-900/20 border border-red-500/30 rounded p-2">
            <span className="text-accent">{`Work on Saturday?`}</span>
            <span className="text-red-400 font-bold">{`Error 403: Forbidden`}</span>
          </div>
          <div className="flex justify-between items-center bg-red-900/20 border border-red-500/30 rounded p-2">
            <span className="text-accent">{`Sunday code review?`}</span>
            <span className="text-red-400 font-bold">
              {`Service temporarily unavailable`}
            </span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle text-sm">
          {`"Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand."`}
          <br />{`- Martin Fowler (preferably not on weekends)`}
        </blockquote>
      </div>
    ),

    deploy: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold">
          {`Deployment Status:{" "}`}
          <span className="text-yellow-400">{`It's complicated`}</span>
        </h3>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-green-900/20 border border-green-500/30 rounded">
            <span className="text-accent">{`Stage 1: Works on my machine`}</span>
            <span className="text-green-400">{`✅`}</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-green-900/20 border border-green-500/30 rounded">
            <span className="text-accent">{`Stage 2: Works on dev server`}</span>
            <span className="text-green-400">{`✅`}</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-green-900/20 border border-green-500/30 rounded">
            <span className="text-accent">{`Stage 3: Works on staging`}</span>
            <span className="text-green-400">{`✅`}</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-red-900/20 border border-red-500/30 rounded">
            <span className="text-accent">
              {`Stage 4: Production deployment...`}
            </span>
            <span className="text-red-400 text-xl">{`💥`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"Everyone has a testing environment. Some people are lucky enough to
          have a production environment too." - Unknown`}
        </blockquote>
      </div>
    ),

    merge: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold">
          {`Git Merge Status:{" "}`}
          <span className="text-red-400">{`Conflict detecte`}d</span>
        </h3>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-accent">{`Files affected:`}</span>{" "}
              <span className="text-red-300">{`ALL OF THEM`}</span>
            </div>
            <div>
              <span className="text-accent">{`Lines of conflict:`}</span>{" "}
              <span className="text-red-300">{`Yes`}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-accent">{`Time to resolve:`}</span>{" "}
              <span className="text-red-300">{`3 business days`}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-accent font-medium mb-2">
            {`Merge conflict resolution steps:`}
          </h4>
          <ol className="list-decimal ml-6 space-y-1 text-subtle">
            <li>{`Panic`}</li>
            <li>{`Blame Git`}</li>
            <li>{`Consider career change`}</li>
            <li>{`Eventually fix conflicts`}</li>
            <li>{`Promise to use smaller commits next time`}</li>
          </ol>
        </div>
      </div>
    ),

    crash: (
      <div className="space-y-3">
        <h3 className="text-accent font-semibold">
          {`Application Status:{" "}`}
          <span className="text-red-400">{`Successfully failed`}</span>
        </h3>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Error log size:`}</span>
            <span className="text-red-300">{`2.3GB and growing`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Stack trace depth:`}</span>
            <span className="text-red-300">{`Mariana Trench levels`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`User reports:`}</span>
            <span className="text-red-300">{`"It just stopped working"`}</span>
          </div>
        </div>

        <div>
          <h4 className="text-accent font-medium mb-2">{`Root cause analysis:`}</h4>
          <ul className="space-y-1 ml-4">
            <li className="text-subtle">
             {` • User did exactly what they were supposed to do`}
            </li>
            <li className="text-subtle">{`• System worked as intended`}</li>
            <li className="text-subtle">
              {`• Reality.exe has stopped responding`}
            </li>
          </ul>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
         {` "That's weird... it was working a minute ago."`}
        </blockquote>
      </div>
    ),

    matrix: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🕶️</span>
          <h3 className="text-accent font-semibold">
           {` Wake up, developer...`}
          </h3>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 space-y-2">
          <p className="text-red-300 font-medium">{`The Matrix has you...`}</p>
          <p className="text-subtle">{`Follow the white rabbit... 🐰`}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-red-900/20 border border-red-500/30 rounded">
            <span className="text-accent">{`Red pill:`}</span>
            <span className="text-subtle">{`Learn Assembly language`}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-blue-900/20 border border-blue-500/30 rounded">
            <span className="text-accent">{`Blue pill:`}</span>
            <span className="text-subtle">{`Keep using frameworks`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"There is no spoon... only segmentation faults."`}
        </blockquote>
      </div>
    ),

    blockchain: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`⛓️`}</span>
          <h3 className="text-accent font-semibold">
            {`Blockchain Status: `}<span className="text-green-400">{`Decentralized`}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-accent">{`Current value:`}</span>
            <span className="text-subtle">{`Depends on Elon's tweets`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-accent">{`Energy consumption`}:</span>
            <span className="text-subtle">{`Yes`}</span>
          </div>
          <div className="flex justify-between sm:col-span-2">
            <span className="text-accent">{`Problems solved:`}</span>
            <span className="text-subtle">{`TBD`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"Blockchain is a solution looking for a problem... and occasionally finding one!" - Pragmatic Developer`}
        </blockquote>
      </div>
    ),

    ai: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`🤖`}</span>
          <h3 className="text-accent font-semibold">
            {`AI Status: `}<span className="text-yellow-400">{`Becoming self-aware...`}</span>
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Current task:`}</span>
            <span className="text-subtle">{`Replacing developer`}s</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Progress:`}</span>
            <span className="text-subtle">{`Still can't center a div properly`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Threat level:`}</span>
            <span className="text-green-400">{`Minimal (for now)`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"I'm not afraid of AI taking over. I'm afraid of AI writing better code than me." - Honest Developer`}
        </blockquote>
      </div>
    ),

    docker: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`🐳`}</span>
          <h3 className="text-accent font-semibold">
            {`Docker Status: `}<span className="text-blue-400">{`Container orchestration in progress`}</span>
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Images pulled:`}</span>
            <span className="text-subtle">{`47GB worth`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Containers running:`}</span>
            <span className="text-subtle">{`More than my RAM can handle`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`"It works on my container":`}</span>
            <span className="text-green-400">{`✅`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"Docker: Making 'works on my machine' everyone's problem since 2013!"`}
        </blockquote>
      </div>
    ),

    refactor: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`🔧`}</span>
          <h3 className="text-accent font-semibold">
            {`Refactor Status:`} <span className="text-yellow-400">{`Initiated`}</span>
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Original plan:`}</span>
            <span className="text-subtle">{`Clean up a few lines`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Current status:`}</span>
            <span className="text-red-300">{`Rewriting entire codebase`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Timeline:`}</span>
            <span className="text-subtle">{`2 weeks → 2 months → ∞`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"I'll just refactor this one function..."`}<br />
          {`Famous last words of every developer.`}
        </blockquote>
      </div>
    ),

    legacy: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`⚠️`}</span>
          <h3 className="text-accent font-semibold">
            {`Legacy Code Warning: `}<span className="text-red-400">{`Proceed with caution`}</span>
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Last modified:`}</span>
            <span className="text-subtle">{`2003`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">Documentation:</span>
            <span className="text-subtle">{`"The code is self-documenting"`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Tests`}:</span>
            <span className="text-red-300">{`What are tests?`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Original developer`}:</span>
            <span className="text-subtle">{`Has left the company/planet`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"Legacy code: Code without tests. Or code you're afraid to change. Or both." - Michael Feathers`}
        </blockquote>
      </div>
    ),

    frontend: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`🎨`}</span>
          <h3 className="text-accent font-semibold">
            {`Frontend Status: `}<span className="text-green-400">{`Pixel perfect (on my screen`})</span>
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Browsers tested:`}</span>
            <span className="text-subtle">{`Chrome (my version)`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Mobile responsive:`}</span>
            <span className="text-subtle">{`"Looks fine on iPhone 12"`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`IE compatibility:`}</span>
            <span className="text-red-300">{`LOL`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"Frontend development: Making it look easy while crying internally about browser compatibility."`}
        </blockquote>
      </div>
    ),

    backend: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`⚙️`}</span>
          <h3 className="text-accent font-semibold">
            {`Backend Status:`} <span className="text-yellow-400">{`It's complicate`}d</span>
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`API responses`}:</span>
            <span className="text-subtle">{`Usually JSON`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Database queries:`}</span>
            <span className="text-subtle">{`Optimized (sometimes)`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-accent">{`Error handling:`}</span>
            <span className="text-subtle font-mono">{`try { magic } catch { more magic }`}</span>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"Backend development: Where the real magic happens, and nobody sees it break." - Backend Developer`}
        </blockquote>
      </div>
    ),

    password: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{`🔐`}</span>
          <h3 className="text-accent font-semibold">
            {`Password Requirements `}<span className="text-yellow-400">{`Updated`}</span>
          </h3>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 space-y-2">
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-accent">{`Must contain`}:</span>
              <span className="text-subtle">{`Uppercase, lowercase, numbers, symbols`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-accent">{`Must not contain:`}</span>
              <span className="text-subtle">{`Dictionary words, personal info`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-accent">{`Must be:`}</span>
              <span className="text-subtle">{`Exactly 12-16 characters`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-accent">{`Must not be`}:</span>
              <span className="text-red-300">{`Any password you can remember`}</span>
            </div>
          </div>
        </div>

        <blockquote className="border-l-2 border-accent pl-4 italic text-subtle">
          {`"The most secure password is the one you forget immediately after creating it." - Security Expert (probably)`}
        </blockquote>
      </div>
    ),
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
            placeholder="Type here! Start with 'help' to see what I can do."
            className="bg-transparent border-none outline-none text-accent font-mono text-sm flex-1 placeholder-accent-dark caret-accent min-w-0"
          />
        </div>
        {commandOutput && (
          <ul className="text-subtle text-sm whitespace-pre-wrap mt-3 border-t border-gray-600 pt-3 overflow-hidden break-words">
            {commandOutput}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommandBox;
