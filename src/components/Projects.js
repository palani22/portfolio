import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const projectList = [
    {
      title: 'PitchMatch – AI-Powered Email Personalization',
      description: 'A personalized bulk email platform leveraging AI for unique, targeted campaigns, resulting in higher engagement.',
      technologies: 'ReactJS, NextJS, Tailwind CSS, TypeScript, Supabase, Dify, Chakra UI'
    },
    {
      title: 'MCLAP – Legal Management System',
      description: 'A legal management system managing cases, victims, and defendants, with a focus on responsive design and full-stack development.',
      technologies: 'NodeJS, NextJS, Tailwind CSS, TypeScript, PostgreSQL'
    },
    {
      title: 'HealthBase – Healthcare Connection Platform',
      description: 'A platform connecting organizations and professionals with secure user authentication via JWT, enabling access to treatment data.',
      technologies: 'NodeJS, ReactJS, Tailwind CSS, JavaScript, PostgreSQL'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="px-6 py-20 text-white">
      <h2 className={`text-3xl font-semibold mb-20 text-center mt-4 transition-transform duration-500 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-10 opacity-0'}`}>
        Projects
      </h2>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 transform ${isVisible ? 'scale-100' : 'scale-90 opacity-0'}`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
