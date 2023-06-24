import React, { useEffect } from 'react';
import './Projects.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/ProjectsSlice';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
        Deployed 50+ scalable websites and cross-platform mobile applications.
        Collaborated in 100+ projects with 30+ clients all around the world. Looking for next project/role.
      </p>
      <div className="projects-container">
        {
          projects.map((project, id) => (
            <ProjectCard

              image={project.image_url}
              title={project.project_name}
              description={project.description}
              stacks={project.tech_stack}
              source_link={project.source_link}

            />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
