import { TbCertificate } from "react-icons/tb"; 
import React from 'react'

const Certificates = () => {
     const certificates = [
    {
      title: "Introduction to Networks",
      issuer: "Cisco",
      date: "January 31, 2022",
      type: "networking"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco", 
      date: "July 22, 2022",
      type: "security"
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "November 13, 2022", 
      type: "security"
    },
    {
      title: "Fundamentals of GIT and GitHub",
      issuer: "University of Nueva Caceres",
      date: "October 05, 2022",
      type: "development"
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      date: "April 29, 2023",
      type: "cloud"
    }
  ];
  return (
    <div className='flex flex-col gap-4 w-full z-10'>
      {certificates.map((cert, index) => (
              <div key={index} className="bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 border border-border rounded-2xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-surface border border-accent shadow-lg shadow-black/40 text-shadow-lg text-shadow-black/30 text-accent-dark`}>
                    {cert.type}
                  </div>
                  <TbCertificate className="w-5 h-5 text-accent drop-shadow-md drop-shadow-black" />
                </div>
                <h3 className="font-bold mb-2 text-text text-shadow-lg text-shadow-black/50">
                  {cert.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-1 text-shadow-lg text-shadow-black/20">{cert.issuer}</p>
                <p className="text-subtle text-sm text-shadow-lg text-shadow-black/50">{cert.date}</p>
              </div>
            ))}
    </div>
  )
}

export default Certificates
