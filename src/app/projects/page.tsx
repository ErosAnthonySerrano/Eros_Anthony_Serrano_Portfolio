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
        "A scalable enterprise SaaS platform where I lead major frontend initiatives, build core components, and implement cross-system integrations used by multiple enterprise clients. Responsible for long-term development, UI/UX consistency, and feature delivery across the application.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "RESTful APIs",
      ],
      features: [
        "Developed reusable, scalable component architecture (tables, forms, graphs, charts, modals, dynamic layouts)",
        "Led major UI/UX redesigns to improve responsiveness, accessibility, and visual consistency",
        "Implemented multi-theme support including full dark mode system",
        "Created data visualizations and interactive graph structures backed by real API data",
        "Integrated complex backend services via Python APIs with seamless frontend communication",
      ],
      impact: [
        { label: "Active Duration", value: "Almost 2 Years (Ongoing)" },
        { label: "Scale", value: "Enterprise Multi-Tenant SaaS" },
        { label: "Uptime", value: "99.9%" },
      ],
      status: "live",
      category: "professional",
      timeline: "Jan 2024 - Present",
      challenges: [
        "Transforming legacy UI into reusable and maintainable components",
        "Maintaining strict design uniformity across dozens of pages and modules",
        "Handling large-scale data loads while keeping UI performance smooth",
        "Managing multiple third-party integrations with both frontend and backend requirements",
      ],
      outcomes: [
        "Built and maintained core component library ensuring consistent UX across the entire platform",
        "Redesigned multiple pages and flows to match the Secgra design environment",
        "Implemented integrations with Salesforce, Odoo, Palo Alto, DockerHub, Okta, and Microsoft 365",
        "Created PDF reporting features, custom graphs, and performance-optimized visual dashboards",
      ],
    },
    {
      id: "caffeine",
      title: "Caffeine Solutions Website Optimization & QA",
      subtitle: "International Client Frontend Performance Enhancement",
      description:
        "Spearheaded the frontend optimization and quality assurance (QA) for a Singapore-based client's production WordPress website. The primary focus was resolving critical mobile responsiveness failures and numerous visual layout bugs, resulting in significant improvements to performance and overall user experience.",
      techStack: [
        "WordPress",
        "CSS/SASS",
        "Responsive Design",
        "Debugging & QA",
        "Performance Optimization",
      ],
      features: [
        "Executed a rigorous frontend QA audit to identify and resolve numerous layout and styling bugs, including unexpected dividers and broken alignments.",
        "Implemented precise CSS corrections to fix severe mobile rendering issues such as text/image overlapping, unreadable text, and stretched assets.",
        "Enhanced the mobile-first responsive design to ensure pixel-perfect consistency across all viewports.",
        "Conducted comprehensive site performance audits and optimization (e.g., caching, compression) to boost core web vitals.",
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
        "Diagnosing and rectifying critical mobile-specific rendering bugs across a complex, production WordPress codebase.",
        "Optimizing legacy code without introducing regressions or breaking existing functionality.",
        "Achieving flawless cross-device and cross-browser compatibility for an international client.",
      ],
      outcomes: [
        "Successfully resolved all critical mobile layout bugs, restoring the site's proper functionality and visual design on all devices.",
        "Delivered a 65% improvement in overall page load speeds, directly contributing to better user retention.",
        "Achieved excellent Google PageSpeed Insights mobile scores, validating the technical improvements.",
      ],
    },
    {
      id: "memorial",
      title: "Memorial Park Information Management System",
      subtitle: "Top 3 Award-Winning Cross-Platform Application",
      description:
        "Developed an award-winning (Top 3 Best Capstone) Information Management System for La Hermosa Resources and Development Corporation. This cross-platform (Web & Mobile) application centralized critical operational functions, including plot reservation, acquisition, inventory, and other core management tasks, utilizing real-time data synchronization.",
      techStack: [
        "Flutter/Dart",
        "Google Firebase",
        "Cross-Platform Development",
        "Real-time Database",
        "System Design",
      ],
      features: [
        "Full-stack implementation of core business logic for plot reservation and acquisition.",
        "Created a reservation and inventory management system to track plot status and availability[cite: 16].",
        "Cross-platform mobile and web application development using Flutter/Dart[cite: 18].",
        "Real-time database synchronization via Google Firebase for up-to-the-minute operational data[cite: 19].",
        "Advanced search and filtering capabilities for comprehensive memorial plot data.",
      ],
      impact: [
        { label: "Recognition", value: "Top 3 Best Capstone" },
        { label: "Platform", value: "Cross-Platform (Web & Mobile)" },
        { label: "Business Functions", value: "Reservation & Inventory" },
      ],
      status: "completed",
      category: "academic",
      timeline: "June 2023",
      challenges: [
        "Designing a cohesive, unified system architecture to handle multiple complex business operations (reservation, acquisition, inventory).",
        "Implementing secure, role-based access control for different user types within the management team.",
        "Managing real-time state and synchronization across web and mobile platforms using Firebase.",
      ],
      outcomes: [
        "Successfully delivered a functional, full-scale system and was recognized as the Top 3 Best Capstone Project.",
        "Provided the client with a practical, digital solution for streamlining plot reservation and management.",
        "Demonstrated mastery of Flutter, Dart, and Firebase for developing scalable, real-time applications.",
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-10 gap-12 font-mono">
      <div className="flex flex-col gap-10 items-center justify-center p-5 w-full h-full lg:max-w-[75vw] lg:p-0 2xl:max-w-[60vw]">
        <h1 className="text-4xl md:text-4xl font-bold text-text text-center leading-normal">
          Project
          <span className="text-accent"> Laboratory</span>
        </h1>
        <div className="w-full mt-10">
          <MainWidgets projects={projects} />
        </div>
        <div className="flex w-full">
          <CommandBox />
        </div>
      </div>
    </div>
  );
};

export default Projects;
