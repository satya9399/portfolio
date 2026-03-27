'use client';
import { useState, useRef, FormEvent, useEffect } from 'react';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'success' | 'error' | ''>('');
  const [imageError, setImageError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          setIsMenuOpen(false);
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("from_name") as string,
      email: formData.get("from_email") as string,
      message: formData.get("message") as string
    };

    // Validate form data
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setSendStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setSendStatus('error');
      return;
    }

    setIsSending(true);
    setSendStatus('');

    // Your EmailJS credentials
    const serviceID = 'service_2dsl3i4';
    const templateID = 'template_dvtz08k';
    const publicKey = 'qzQNhyLbvssOJ0XGp';

    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SATYAM PORTFOLIO
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium hover:text-blue-600 transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="font-medium hover:text-blue-600 transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#projects" className="font-medium hover:text-blue-600 transition-colors relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="font-medium hover:text-blue-600 transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 py-2 shadow-lg border-t border-slate-100">
            <a href="#home" className="block py-3 font-medium hover:text-blue-600 hover:bg-blue-50 px-3 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-3 font-medium hover:text-blue-600 hover:bg-blue-50 px-3 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="block py-3 font-medium hover:text-blue-600 hover:bg-blue-50 px-3 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="block py-3 font-medium hover:text-blue-600 hover:bg-blue-50 px-3 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Satyam Singh Shrivas</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              Frontend Developer & UI/UX Enthusiast passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all">
                Contact Me
              </a>
            </div>
            
            {/* Social Links - Hero */}
            
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group">
              
              {/* Animated Background Circle */}
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-80 animate-pulse group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Second Circle for Hover Effect */}
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-lg opacity-60 animate-ping"></div>

              {/* Profile Image */}
              {!imageError ? (
                <img
                  src="/336635642_bc9fd4bd-de9b-4555-976c-8360576c6708.svg"
                  className="relative w-60 h-60 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  alt="Satyam Singh Shrivas - Frontend Developer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="relative w-60 h-60 md:w-72 md:h-72 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <span className="text-5xl font-bold text-white">SS</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-6xl mx-auto bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Hi, I'm Satyam Singh Shrivas, a Computer Science Engineer and passionate Software Developer. I love turning ideas into reality through clean, modern, and efficient code.
            </p>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              I specialize in Web Development using React, Tailwind CSS, Node.js, and MongoDB, and I've built projects like an Online Examination System, a Job Portal website, and a Ludo King-style Android app.
              I've also gained hands-on experience in Cybersecurity, working with Linux, Kali tools, and VirtualBox during my internship.
            </p>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Along with my technical journey, I worked at upDt Education Technology Pvt. Ltd. as part of the Business Development team, learning how technology connects with real-world impact.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm always exploring new technologies, cloud platforms, and AI tools while preparing myself to contribute as a skilled software developer.
            </p>
            
            {/* Skills Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">React</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">Next.js</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">Tailwind</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">JavaScript</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">Python</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">C&C++</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">Node.js</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">Java</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">HTML & CSS</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">MySQL</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">MongoDB</h3>
                </div>
                <div className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-600">.NET</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl px-4 text-center">Online Exam Management System</span>
              </div>
              <a href="https://github.com/satya9399/onlineExamCondoctor" target="_blank" rel="noopener noreferrer">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Online Exam</h3>
                  <p className="text-slate-600 mb-4">A modern Exam platform built with Next.js and Stripe integration.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Stripe</span>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">PDF Doctor</span>
              </div>
              <a href="https://pdf-doctor-7zd254waz-satyam-s-projects-2d165f3a.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Productivity Tool</h3>
                  <p className="text-slate-600 mb-4">A PDF doctor application help to convert pdfs to other all types.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">PDF.js</span>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">ATM System</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">ATM System</h3>
                <p className="text-slate-600 mb-4">A simple banking software allowing users to manage accounts, deposit and withdraw funds, and check balances.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-2xl shadow-lg">
            {/* Status Messages */}
            {sendStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              </div>
            )}
            {sendStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <span>Failed to send message. Please try again or contact me directly via email.</span>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="from_name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="from_email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full py-3 rounded-xl font-medium transition-all transform hover:-translate-y-0.5 ${
                  isSending 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'
                } text-white`}
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-semibold mb-4 text-center text-slate-700">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a href="mailto:satyamsingh.shriram0929@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <span className="sr-only">Email</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </a>
                <a href="https://github.com/satya9399" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/satyam922" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.790-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">© {new Date().getFullYear()} Satyam Singh Shrivas. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/satya9399" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/satyam922" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="https://www.instagram.com/____satyam0" className="hover:text-blue-400 transition-colors">Instagram</a>
             <a href="https://drive.google.com/file/d/1tlALY0EDkUYM8mx7iMy3ZFjeE1Id02YK/view?usp=drivesdk" className="hover:text-blue-400 transition-colors">View Resume</a>
            <a href="https://github.com/satya9399" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/satyam922" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/____satyam0" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Instagram</a>
            <a href="https://drive.google.com/file/d/1tlALY0EDkUYM8mx7iMy3ZFjeE1Id02YK/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">View Resume</a>
          </div>
        </div>
      </footer>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}