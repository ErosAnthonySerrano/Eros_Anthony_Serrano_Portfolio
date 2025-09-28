import { FiAward } from "react-icons/fi"; 
import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence Award - 2nd Honors",
      description: "GWA of 1.3",
      date: "June 2023",
      icon: <FiAward className="w-5 h-5" />,
    },
    {
      title: "Top 3 in Best Capstone Project",
      description: "Memorial Park Information Management System",
      date: "June 2023",
      icon: <FiAward className="w-5 h-5" />,
    },
    {
      title: "English Immersive Environment - 5 Minute Champ",
      description: "2nd Year Achievement",
      date: "December 2019",
      icon: <FiAward className="w-5 h-5" />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full z-10">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-surface rounded-lg text-accent shadow-lg border border-border shadow-black/40">
              {achievement.icon}
            </div>
            <span className="text-sm text-text">{achievement.date}</span>
          </div>
          <h3 className="font-bold mb-2 text-accent">{achievement.title}</h3>
          <p className="text-subtle text-sm">{achievement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
