import React from "react";

const MyStory = () => {
  return (
    <div className="flex flex-col gap-6 p-8 bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border rounded-2xl overflow-hidden w-full z-10">
      <span className="text-2xl text-accent font-bold text-shadow-lg text-shadow-black/20">My Story</span>
      <div className="space-y-4 text-subtle text-shadow-lg text-shadow-black/50 leading-relaxed">
        <p>
          {` I'm a passionate software engineer with a strong foundation in both frontend and backend development. 
                  My journey began at the University of Nueva Caceres, where I graduated and developed 
                  a deep appreciation for creating solutions that make a real difference.`}
        </p>
        <p>
          {`Currently working at Cloud Ready Technologies Corp, I specialize in building responsive, 
                  scalable web applications using modern technologies like Next.js, TypeScript, and Python. 
                  I believe great code should be invisible to users but transformative in impact.`}
        </p>
        <p>
          {`When I'm not coding, you'll find me exploring new technologies, optimizing performance, 
                  or working on creative projects that combine my technical skills with my passion for 
                  design and user experience.`}
        </p>
        <p>
          {` My approach combines technical precision with user-centered thinking to deliver solutions 
                  that not only work flawlessly but feel effortless to use.`}
        </p>
      </div>
    </div>
  );
};

export default MyStory;
