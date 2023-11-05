import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url: 'https://media.licdn.com/dms/image/D4D22AQHWNurBHx5agw/feedshare-shrink_2048_1536/0/1698890666671?e=1701907200&v=beta&t=HtHNiCx6ObMenPWLbkSgs4nV6pn-R8T_-c-QfRjkb8E',
      project_name: 'ARespiratory',
      description: 'Application is developed in collaboration with Faculty Medical & Health Science, UPM. The application has Augmented Reality(AR) features to assist medical students in learning the anatomy and physiology of the respiratory system. \n This application has obtained copyright by MyIPO.',
      tech_stack: ['Unity', 'Vuforia', 'Blender', 'Adobe XD'],
      source_link: 'https://www.linkedin.com/posts/hfzkdr_arlearning-medicaleducation-innovation-activity-7125663966193758208-TGvP?utm_source=share&utm_medium=member_desktop',
    },
    {
      image_url: 'path-to-image2.jpg',
      project_name: 'Project 2',
      description: 'Description for Project 2',
      tech_stack: ['Tech 3', 'Tech 4'],
      source_link: 'https://project2.com',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
        Deployed 50+ scalable websites and cross-platform mobile applications.
        Collaborated in 100+ projects with 30+ clients all around the world. Looking for the next project/role.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  )
};

export default Projects;
