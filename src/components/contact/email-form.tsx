"use client"
import { BiSend } from "react-icons/bi"; 
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineClose } from "react-icons/ai"; 


interface ContactFormProps {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


export default function ContactForm({ 
  serviceId = 'service_m1dicgd',
  templateId = 'template_jlhcevf', 
  publicKey = 'cCEwLy8fPUcdo9o9b',
  className = '' 
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setStatus('');
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Eros', // Your name
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message. Please try again later.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className={`bg-gradient-to-b from-surface to-surface-dark shadow-lg shadow-black/40 font-mono flex flex-col w-full rounded-2xl p-6 border border-border ${className} z-10`}>
      <h2 className="text-2xl font-bold mb-6 text-accent">Send a Message</h2>
      
      <div className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-subtle mb-2 ">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-surface shadow-lg shadow-black/20  border border-border rounded-lg px-4 py-3 text-text placeholder-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-subtle  mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-surface shadow-lg shadow-black/20 border border-border rounded-lg px-4 py-3 text-text placeholder-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-subtle  mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full bg-surface shadow-lg shadow-black/20 border border-border rounded-lg px-4 py-3 text-text placeholder-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Project Collaboration"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-subtle  mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full bg-surface shadow-lg shadow-black/20 border border-border rounded-lg px-4 py-3 text-text placeholder-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
            placeholder="Tell me about your project or just say hello..."
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full  bg-accent-dark hover:bg-accent shadow-lg shadow-black/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-text font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <BiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Status Message */}
        {status && (
          <div className={`p-4 rounded-lg transition-all duration-300 shadow-lg shadow-black/20 flex flex-row items-center justify-between ${status.includes('successfully') 
            ? 'bg-green-900 text-green-300 border border-green-700' 
            : 'bg-red-900 text-red-300 border border-red-700'
          }`}>
            {status}
            <div onClick={() => setStatus('')} className="cursor-pointer">
                <AiOutlineClose className="text-subtle hover:text-subtle drop-shadow-md drop-shadow-black"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}