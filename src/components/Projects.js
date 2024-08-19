import './projects/Projects.css';
import { useState, useRef } from 'react';
import resumeInfo from '../assets/resume-info.json';
import ProjectCard from './projects/ProjectCard';
import ProjectDrawer from './projects/ProjectDrawer';

export default function Projects() {
  const [drawerProject, setProject] = useState(null);
  const [isOpen, setDrawer] = useState(false);

  const projects = resumeInfo.projects.map((project, idx) => {
    project.id = idx + '_' + project.short;
    return project;
  });

  const getProject = id => projects.find(project => project.id === id);

  const closeDrawer = () => {
    setDrawer(false);
    setTimeout(
      () => document.body.style.setProperty('--sw', '--sw-default'),
      1000
    );
  };

  const openDrawer = id => {
    const project = getProject(id);
    setProject(() => project);
    setDrawer(true);
    document.body.style.setProperty('--sw', '0');
  };

  return (
    <section id='projects'>
      <h2>projects</h2>
      <div id='project-cards'>
        {projects
          ? projects.map(project => {
              const { id, title, tech } = project;
              return (
                <ProjectCard
                  id={id}
                  title={title}
                  tech={tech}
                  key={id}
                  openDrawer={openDrawer}
                />
              );
            })
          : ''}
      </div>
      <ProjectDrawer
        project={drawerProject}
        isOpen={isOpen}
        closeDrawer={closeDrawer}
      />
    </section>
  );
}
