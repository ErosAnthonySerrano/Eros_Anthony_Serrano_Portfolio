import React from "react";

const Expertise = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["Next.js", "TypeScript", "React", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Python", "C#/.NET", "Java", "RESTful APIs"],
    },
    {
      category: "Database",
      items: ["Microsoft SQL Server", "SQLite", "Firebase"],
    },
    { category: "Mobile", items: ["Flutter", "Dart"] },
    {
      category: "Tools & Others",
      items: ["Git", "Bitbucket", "WordPress", "Adobe Creative Suite"],
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full z-10">
      {skills.map((skillCategory, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border rounded-2xl p-8 overflow-hidden"
        >
          <h3 className="text-lg font-semibold mb-4 text-accent">
            {skillCategory.category}
          </h3>
          <div className="space-y-2">
            {skillCategory.items.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
