  // Projects data

import {
  Code,
  Server,
  Book,
  Wrench,
  Smartphone,
} from 'lucide-react';
import {
  FaTools,
} from 'react-icons/fa';

  export const projects = [
    {
      title: 'MERN Stack Book Review Platform',
      description: `A robust full-stack Book Review Platform developed using the MERN stack, with Next.js and TypeScript enhancing both the frontend and backend performance.
This platform allows users to explore a wide library of books, write and read detailed reviews, rate titles, and interact with a community of readers.
Features include user authentication, personalized profiles, reading history, and curated recommendation lists based on genres and user preferences.
The admin dashboard offers tools for content moderation, review analytics, and user engagement tracking.
Optimized for all devices, the platform includes SEO-friendly routing, responsive design, and seamless scalability.
Built for book lovers, it fosters thoughtful discussions, supports comment threads, and allows integration with external APIs like Google Books for rich metadata.`,
    },
    {
      title: 'MERN Stack E-commerce',
      description: `A comprehensive full-stack e-commerce solution built on the MERN stack, incorporating Next.js and TypeScript for a robust, scalable frontend and backend.
It offers seamless Stripe payment integration, advanced inventory management, order processing, and an intuitive admin dashboard with real-time analytics.
Designed for performance and security, the platform supports multi-currency transactions, customer profiles, and product variation management, all optimized for both desktop and mobile devices.
This project emphasizes modularity and extensibility, allowing easy integration of new features like promotions and user reviews.`,
    },
    {
      title: 'Task Management',
      description: `A real-time task and project collaboration tool developed with React, Node.js, and Socket.io, facilitating efficient teamwork across remote and in-office environments.
It enables task creation, assignment, status tracking, and deadline management with instant notifications and live updates.
The app also supports team chat, file sharing, role-based permissions, and integration with calendar apps to keep projects on schedule.
Built for scalability, it enhances productivity by centralizing communication and providing transparent visibility into project progress and bottlenecks.`,
    },
    {
      title: 'Water Management System',
      description: `An innovative platform for monitoring and managing water resources efficiently. It aggregates real-time weather and water data using APIs and IoT sensors to provide accurate insights on water consumption, availability, and quality.
The system features interactive dashboards with visual analytics, automated alerts for water shortages or floods, and predictive models to help communities and local governments optimize usage and plan resource distribution sustainably.
Designed with user-friendly interfaces and offline capabilities, it supports remote monitoring in areas with limited connectivity.`,
    },
    {
      title: 'Explore Bhutan',
      description: `A sleek content management system (CMS) designed for portfolio websites, tailored to showcase creative work with ease.
Featuring a drag-and-drop page builder, it requires no coding skills and includes built-in SEO tools to boost discoverability.
Powered by Next.js and Sanity CMS, the platform ensures fast load times and smooth user experiences.
Hosting is streamlined via Vercel, allowing instant deployment and updates.
Additional features include customizable themes, social media integration, and analytics tracking to help creatives grow their online presence and connect with their audience effectively.`,
    },
    {
      title: 'Smart To-Do List App',
      description: `A sleek and intuitive task management application built with React, TypeScript, and Tailwind CSS, designed to boost productivity through simplicity and smart features.
The app allows users to create, edit, categorize, and prioritize tasks with drag-and-drop functionality and deadline reminders.
Tasks can be filtered by status, tags, or due date, and progress is visualized with real-time stats and charts using Recharts.
It includes support for recurring tasks, dark mode, offline access via service workers, and cloud sync using Firebase for seamless cross-device experience.
Designed with accessibility and responsiveness in mind, this project emphasizes clean UX and performance optimization, making it ideal for both personal and professional use.`,
    },
  ];


  export   // Skills data
    const skills = [
      {
        name: 'Frontend',
        icon: Code,
        items: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Tailwind CSS',
          'HTML',
          'CSS',
          'Redux',
          'Framer Motion',
        ],
      },
      {
        name: 'Backend',
        icon: Server,
        items: [
          'Node.js',
          'Express',
          'Python',
          'Django',
          'FastAPI',
          'SQL',
          'PostgreSQL',
          'MongoDB',
          'REST APIs',
        ],
      },
      {
        name: 'DevOps',
        icon: Wrench,
        items: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Netlify', 'Vercel'],
      },
      {
        name: 'Tools',
        icon: FaTools,
        items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'ESLint', 'Prettier'],
      },
      {
        name: 'Mobile',
        icon: Smartphone,
        items: [
          'React Native',
          'Expo',
          'Flutter',
          'Dart',
          'Progressive Web Apps (PWA)',
          'Responsive UI',
          'Mobile Performance Optimization',
        ],
      },
      {
        name: 'Other',
        icon: Book,
        items: [
          'Agile/Scrum',
          'SEO',
          'Performance Optimization',
          'Responsive Design',
          'Web Accessibility (a11y)',
        ],
      },
    ];
  