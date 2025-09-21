// app/page.jsx

'use client';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">PORTFOLIO</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="font-medium hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="font-medium hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 py-2 shadow-lg">
            <a href="#home" className="block py-2 font-medium hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 font-medium hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="block py-2 font-medium hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="block py-2 font-medium hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Satyam Singh Shrivas</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
              Frontend Developer & UI/UX Enthusiast passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center p-2 shadow-xl animate-float">
              <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-center p-4">
                  <span className="text-blue-600 font-bold"><img src="../../public/thzM4IyIu3.gif" className="w-auto h-auto" alt="Animated Developer GIF"></img></span>
                  <p className="text-sm mt-2 text-slate-600"><img/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-6xl mx-auto bg-slate-50 p-8 rounded-xl shadow-md">
            <p className="text-lg text-slate-700 mb-4">
              Hi, I’m Satyam Singh Shrivas, a Computer Science Engineer and passionate Software Developer. I love turning ideas into reality through clean, modern, and efficient code.

 I specialize in Web Development using React, Tailwind CSS, Node.js, and MongoDB, and I’ve built projects like an Online Examination System, a Job Portal website, and a Ludo King–style Android app.
 I’ve also gained hands-on experience in Cybersecurity, working with Linux, Kali tools, and VirtualBox during my internship.
 Along with my technical journey, I worked at upDt Education Technology Pvt. Ltd. as part of the Business Development team, learning how technology connects with real-world impact.
I’m always exploring new technologies, cloud platforms, and AI tools while preparing myself to contribute as a skilled software developer.
            </p>
            <p className="text-lg text-slate-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good book on UI design principles. I believe in continuous learning and pushing the boundaries of what's possible on the web.
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                
                <h3 className="font-semibold text-blue-600">React</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">Next.js</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">Tailwind</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">JavaScript</h3>
              </div>
              
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">Python</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">C&C++</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">node</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">Java</h3>
              </div>
              
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">Html&css</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">MySql</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">MongoDB</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold text-blue-600">.net</h3>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-slate-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Online Exam Management System</span>
              </div>
              <a href="https://github.com/satya9399/onlineExamCondoctor">
              <div className="p-6" >
                <h3 className="text-xl font-semibold mb-2">Online Exam</h3>
                <p className="text-slate-600">A modern Exam platform built with Next.js and Stripe integration.</p>
              </div>
              </a>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">PDF Doctor</span>
              </div>
              <a href="https://github.com/satya9399/PdfDoctor">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Productivity Tool</h3>
                <p className="text-slate-600">A PDF doctor application help to convert pdfs to other all types.</p>
              </div>
              </a>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Weather Dashboard</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weather App</h3>
                <p className="text-slate-600">Real-time weather information with interactive charts and maps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-xl shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <h3 className="text-lg font-semibold mb-4">Or reach out directly:</h3>
              <div className="flex justify-center space-x-6">
                <a href="mailto:satyamsingh.shriram0929@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </a>
                <a href="https://github.com/satya9399" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/satyam922?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.790-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>© 2023 Satyam Singh Shrivas. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/satya9399" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/satyam922?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="https://www.instagram.com/____satyam0?igsh=cnFvcHBraDBmY3Jz" className="hover:text-blue-400 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}