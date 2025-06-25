'use client';

import React, { useState, useEffect } from 'react';
import {
  Github,
  Mail,
  Menu,
  X,
  Briefcase,
  Phone,
} from 'lucide-react';
import {
  FaBook,
  FaFilm,
  FaGamepad,
  FaLanguage,
  FaMusic,
  FaUsers,
  FaWalking,
} from 'react-icons/fa';
import { projects, skills } from '@/data';

export default function Portfolio() {
  // State for menu toggle, active nav section, typing effect role and typed text
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Full Stack Developer', 'Frontend Specialist', 'React Expert'];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentRole]);

  // Scroll detection to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  // Scroll to section function (also closes menu on mobile)
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Projects Component
  const Projects = () => (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 border-b-4 border-blue-400 w-fit mx-auto pb-2">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description }) => (
          <div
            key={title}
            className="bg-gray-900 rounded-2xl p-6 border border-transparent hover:border-blue-400 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-white dark:bg-gray-900 py-10 px-6 shadow-inner">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Sonam Developer
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Crafting sleek interfaces and seamless user experiences with React and Tailwind CSS — bringing your digital vision to life with style and precision.
        </p>
        <div className="flex justify-center space-x-8 text-gray-500 dark:text-gray-400">
          <a
            href="https://github.com/putus17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12a12 12 0 008.207 11.44c.6.11.82-.258.82-.577 0-.286-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.332-1.758-1.332-1.758-1.09-.744.082-.73.082-.73 1.204.085 1.836 1.236 1.836 1.236 1.07 1.832 2.81 1.303 3.495.996.108-.775.42-1.303.762-1.603-2.665-.304-5.466-1.336-5.466-5.94 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 016.003 0c2.29-1.552 3.295-1.23 3.295-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.633-5.48 5.93.43.37.815 1.096.815 2.21 0 1.595-.015 2.88-.015 3.274 0 .32.21.694.825.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Sonam Developer — Blending art and code to create vibrant web experiences powered by React and styled with Tailwind CSS.
        </p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                      : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/20">
            <div className="flex flex-col space-y-4 py-4 px-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-lg font-semibold text-white hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

          {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6">
              <img 
                src="sonam.jpeg" 
                alt="Profile" 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400/50 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
             👋 Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sonam Dorji</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
              I&apos;m a <span className="text-blue-400 font-semibold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional web experiences that solve real-world problems. 
              I specialize in modern web technologies and love bringing ideas to life through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Briefcase className="inline mr-2" size={20} />
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="inline mr-2" size={20} />
                Get In Touch
              </button>
             
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/putus17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Github size={28} />
              </a>
              <a href="mailto:eejrod17@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Mail size={28} />
              </a>
              
            </div>
          </div>
        </div>
      </section>

          {/* About & Hobbies Section */}

<section id="about" className="max-w-4xl mx-auto py-20 px-6 md:px-0">
  <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-500 tracking-wide">About Me</h2>

  <div className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
    <p className="mb-6">
      I&apos;m a passionate Full Stack Developer with experience in building high-quality web applications. I love working on projects that challenge me and allow me to learn new skills. My favorite technologies include <span className="font-semibold text-blue-400">React</span>, <span className="font-semibold text-blue-400">Next.js</span>, <span className="font-semibold text-blue-400">Node.js</span>, and <span className="font-semibold text-blue-400">TypeScript</span>.
    </p>
    <p>
      When I&apos;m not coding, I enjoy simple hobbies and spending quality time with people I care about.
    </p>
  </div>

  <h3 className="text-3xl font-semibold mb-10 text-center text-blue-400 tracking-wide">Hobbies & Interests</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
    <div className="flex items-start space-x-4">
      <FaBook className="text-blue-400 text-3xl mt-1" />
      <div>
        <h4 className="font-semibold text-blue-300 mb-1">Reading books</h4>
        <p className="text-gray-300 leading-snug">I enjoy diving into different worlds and expanding my knowledge.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FaMusic className="text-blue-400 text-3xl mt-1" />
      <div>
        <h4 className="font-semibold text-blue-300 mb-1">Listening to music</h4>
        <p className="text-gray-300 leading-snug">Music helps me relax and stay motivated throughout the day.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FaWalking className="text-blue-400 text-3xl mt-1" />
      <div>
        <h4 className="font-semibold text-blue-300 mb-1">Going for walks</h4>
        <p className="text-gray-300 leading-snug">Walking is a great way to clear my mind and stay active.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FaFilm className="text-blue-400 text-3xl mt-1" />
      <div>
        <h4 className="font-semibold text-blue-300 mb-1">Watching movies</h4>
        <p className="text-gray-300 leading-snug">I love watching films to unwind and get inspired.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FaGamepad className="text-blue-400 text-3xl mt-1" />
      <div>
        <h4 className="font-semibold text-blue-300 mb-1">Playing board games</h4>
        <p className="text-gray-300 leading-snug">Board games are a fun way to connect with friends and challenge my mind.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FaUsers className="text-blue-400 text-3xl mt-1" />
      <div>
        <h4 className="font-semibold text-blue-300 mb-1">Spending time with family and friends</h4>
        <p className="text-gray-300 leading-snug">I value quality time and meaningful conversations with loved ones.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FaLanguage className="text-blue-400 text-3xl mt-1" />
      <div>
        <h4 className="font-semibold text-blue-300 mb-1">Learning new languages</h4>
        <p className="text-gray-300 leading-snug">Exploring new languages opens up opportunities and broadens my perspective.</p>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-16 border-b-4 border-blue-400 w-fit mx-auto pb-2">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {skills.map(({ name, icon: Icon, items }) => (
            <div key={name} className="bg-gray-900 rounded-2xl p-6 border border-transparent hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4 space-x-3 text-blue-400">
                <Icon size={24} />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <ul className="list-disc list-inside text-white/90 text-sm leading-relaxed max-h-52 overflow-y-auto">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-400 w-fit mx-auto pb-2">
          Contact
        </h2>
        <p className="text-lg mb-6">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
        >
          Send Email
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
