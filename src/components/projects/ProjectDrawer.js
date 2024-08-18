import './ProjectDrawer.css';
import { useState, useEffect } from 'react';
import IMG from '../ui/IMG';

export default function ProjectDrawer({ project, isOpen, closeDrawer }) {
  if (!project) return <article></article>;
  const { title, short, description, contributors, tech, notes, links } =
    project;
  const drawerClass = isOpen ? 'open' : 'close';

  return (
    <article id='project-drawer' className={drawerClass} onClick={closeDrawer}>
      <h2>{project.title}</h2>
      <IMG folder='projects' filename={`${short}.gif`} alt='project demo' />
    </article>
  );
}
