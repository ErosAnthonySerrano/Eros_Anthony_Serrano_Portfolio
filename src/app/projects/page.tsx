"use client";
import CommandBox from "@/src/components/command";
import MainWidgets from "@/src/components/projects/main-widgets";
import React, { useState } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  impact: {
    label: string;
    value: string;
  }[];
  status: "live" | "completed" | "development";
  category: "professional" | "academic";
  timeline: string;
  challenges: string[];
  outcomes: string[];
}

const Projects = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const projects: Project[] = [
    {
      id: "secgra",
      title: "Secgra SaaS Platform",
      subtitle: "Enterprise-Grade Web Application",
      description:
        "Leading frontend architecture for a scalable SaaS platform serving multiple enterprise clients with responsive, high-performance interfaces.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "RESTful APIs",
      ],
      features: [
        "Server-side rendering with Next.js for optimal performance",
        "Type-safe development with comprehensive TypeScript integration",
        "Responsive design system using Tailwind CSS utilities",
        "Seamless backend integration through Python APIs",
        "Cross-functional Agile development collaboration",
      ],
      impact: [
        { label: "Active Duration", value: "12+ Months" },
        { label: "Scale", value: "Enterprise" },
        { label: "Uptime", value: "99.9%" },
      ],
      status: "live",
      category: "professional",
      timeline: "Jan 2024 - Present",
      challenges: [
        "Architecting scalable frontend components for multiple client deployments",
        "Implementing consistent design patterns across complex user workflows",
        "Optimizing performance for enterprise-level traffic and data loads",
      ],
      outcomes: [
        "Successfully deployed production-ready SaaS application",
        "Established reusable component library for rapid feature development",
        "Achieved seamless integration with backend services and APIs",
      ],
    },
    {
      id: "caffeine",
      title: "Caffeine Solutions Optimization",
      subtitle: "International Client Performance Enhancement",
      description:
        "Complete website optimization project for Singapore-based client, focusing on performance, mobile responsiveness, and user experience improvements.",
      techStack: [
        "WordPress",
        "PHP",
        "Performance Optimization",
        "Mobile Responsive",
      ],
      features: [
        "Comprehensive site performance audit and optimization",
        "Mobile-first responsive design implementation",
        "Database optimization and query performance tuning",
        "Advanced caching strategies and CDN integration",
        "SEO enhancements and technical improvements",
      ],
      impact: [
        { label: "Speed Boost", value: "65%" },
        { label: "Mobile Score", value: "95/100" },
        { label: "Client Location", value: "Singapore" },
      ],
      status: "completed",
      category: "professional",
      timeline: "2024",
      challenges: [
        "Optimizing legacy WordPress codebase without breaking functionality",
        "Achieving cross-device compatibility for international audience",
        "Balancing performance improvements with existing design requirements",
      ],
      outcomes: [
        "Delivered 65% improvement in page load speeds",
        "Achieved excellent mobile performance scores",
        "Enhanced user experience across all device types",
      ],
    },
    {
      id: "memorial",
      title: "Memorial Park Management System",
      subtitle: "Award-Winning Web & Mobile Application",
      description:
        "Top 3 capstone project featuring comprehensive memorial park information management through innovative technology and real-time data synchronization.",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase",
        "Mobile Development",
        "Real-time Database",
      ],
      features: [
        "Cross-platform mobile application (iOS & Android)",
        "Real-time database synchronization with Google Firebase",
        "Advanced search and filtering for memorial plot data",
        "Offline functionality with automatic data sync",
        "Secure authentication and role-based access control",
      ],
      impact: [
        { label: "Recognition", value: "Top 3" },
        { label: "Platform", value: "Cross-Platform" },
        { label: "Database", value: "Real-time" },
      ],
      status: "completed",
      category: "academic",
      timeline: "June 2023",
      challenges: [
        "Designing intuitive mobile interface for complex data management",
        "Implementing offline-first architecture with seamless sync",
        "Creating scalable database structure for memorial park operations",
      ],
      outcomes: [
        "Recognized as Top 3 Best Capstone Project",
        "Demonstrated innovation in mobile application development",
        "Created practical solution for real-world memorial park management",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-10 gap-12 font-mono">
      <div className="flex flex-col gap-10 items-center justify-center p-5 w-full h-full lg:max-w-[75vw] lg:p-0 2xl:max-w-[60vw]">
        <h1 className="text-4xl md:text-4xl font-bold mb-6 text-text text-shadow-lg text-shadow-black/30">
          Project
          <span className="text-accent">
            {" "}
            Laboratory
          </span>
        </h1>
        <div className="w-full mt-10">
            <MainWidgets projects={projects}/>
        </div>
        <div className="flex w-full">
          <CommandBox/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
