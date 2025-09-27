import CommandBox from "@/src/components/command";
import ContactMe from "@/src/components/contact/contact-me";
import ContactForm from "@/src/components/contact/email-form";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-10 gap-12 font-mono">
      <div className="flex flex-col gap-10 items-center justify-center p-5 w-full h-full lg:max-w-[75vw] lg:p-0 2xl:max-w-[60vw]">
        {/* Intro */}
        <div className="flex flex-col items-center gap-6 mb-6">
            <h2 className="text-4xl md:text-4xl font-bold text-text text-shadow-lg text-shadow-black/30">
              {`Let's`}
              <span className="text-accent"> Connect</span>
            </h2>
            <p className="text-subtle text-shadow-lg text-shadow-black/30">
                {`Ready to collaborate on your next project? Let's discuss how can we bring your ideas to life.`}
            </p>
        </div>
        <div className="flex w-full flex-col gap-6">
            <ContactMe/>
            <ContactForm/>
        </div>
        <div className="flex w-full">
            <CommandBox/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
