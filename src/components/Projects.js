import './projects/Projects.css';
import resumeInfo from '../assets/resume-info.json';
import ProjectCard from './projects/ProjectCard';

export default function Projects() {
  const projects = resumeInfo.projects.map((project, idx) => {
    project.id = idx + '_' + project.title.replaceAll(' ', '_');
    return project;
  });
  console.log(projects);
  return (
    <section id='projects'>
      <h2>projects</h2>
      <div id='project-cards'>
        {projects
          ? projects.map(project => {
              const { id, title, tech } = project;
              return <ProjectCard id={id} title={title} tech={tech} />;
            })
          : ''}
      </div>
    </section>
  );
}
