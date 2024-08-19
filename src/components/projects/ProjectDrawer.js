import './ProjectDrawer.css';
import { useState, useEffect } from 'react';
import IMG from '../ui/IMG';
import resumeInfo from '../../assets/resume-info.json';
const { co_contributors } = resumeInfo;

export default function ProjectDrawer({ project, isOpen, closeDrawer }) {
  if (!project) return <article></article>;
  const { title, short, description, contributors, tech, notes, links } =
    project;

  const displayTech = tech =>
    tech.length ? (
      <div id='project-tech'>
        <h3>Tech</h3>
        <ul>
          {tech.map((type, i) => (
            <li key={`${i}-${type}`}>
              <IMG
                folder='tech'
                filename={`${type}.svg`}
                alt={`${type} badge logo`}
              />
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <></>
    );

  const displayNotes = notes =>
    notes.length ? (
      <div id='project-notes'>
        <h3>notes</h3>
        <ul>
          {notes.map((note, i) => (
            <li key={`note-${i}`}>{note}</li>
          ))}
        </ul>
      </div>
    ) : (
      <></>
    );

  const displayLinks = links =>
    Object.keys(links).length ? (
      <div id='project-links'>
        <h3>Links</h3>
        <ul>
          {links.live && (
            <li>
              <a
                href={links.live}
                target='_blank'
                rel='noreferrer'
                aria-label={`Visit a live demo of this project`}
              >
                live link
              </a>
            </li>
          )}
          {links.live && links.repo && <li>·</li>}
          {links.repo && (
            <li>
              <a
                href={links.repo}
                target='_blank'
                rel='noreferrer'
                aria-label={`See the github repo for this project`}
              >
                code repo
              </a>
            </li>
          )}
        </ul>
      </div>
    ) : (
      <></>
    );

  const displayContributor = contributor => {
    console.log('co:', co_contributors);
    console.log('con:', contributor);
    if (!co_contributors[contributor]) return <li>{contributor}</li>;
    const github = `https://github.com/${co_contributors[contributor]}`;
    return (
      <li>
        <a
          href={github}
          target='_blank'
          rel='noreferrer'
          aria-label={`Visit ${contributor}'s GitHub profile`}
        >
          {contributor}
        </a>
      </li>
    );
  };

  const displayContributors = contributors =>
    contributors.length ? (
      <div id='project-contributors'>
        <h3>Contributors</h3>
        <ul>
          {contributors.map(contributor => displayContributor(contributor))}
        </ul>
      </div>
    ) : (
      <></>
    );

  const drawerClass = isOpen ? 'open' : 'close';

  return (
    <article id='project-drawer' className={drawerClass}>
      <h2>{title}</h2>
      <div className='content'>
        <div id='project-summary'>
          <IMG folder='projects' filename={`${short}.gif`} alt='project demo' />
          <div id='project-description'>
            <h3>summary</h3>
            <p>{description}</p>
          </div>
        </div>
        {tech && displayTech(tech)}
        {notes && displayNotes(notes)}
        {links && displayLinks(links)}
        {contributors && displayContributors(contributors)}
      </div>
      <button onClick={closeDrawer}>X</button>
    </article>
  );
}
