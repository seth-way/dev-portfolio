import './header/Header.css';
//import ParticlesBG from './header/ParticlesBG';
import HexBG from './header/HexBG';

import gitHubLogo from '../assets/images/github.svg';
import linkedinLogo from '../assets/images/linkedin.svg';
import resumeInfo from '../assets/resume-info.json';

export default function Header() {
  const { name, role } = resumeInfo.background;
  const { github, linkedIn } = resumeInfo.socials;
  const firstName = name.split(' ')[0];
  const githubURL = `https://github.com/${github}`;
  const linkedInURL = `https://www.linkedin.com/in/${linkedIn}`;

  return (
    <header id='home'>
      <h1 data-name={firstName}>{firstName}</h1>
      <p>{role}.</p>
      <div id='social-links'>
        <a
          href={githubURL}
          target='_blank'
          rel='noreferrer'
          aria-label={`Visit ${name}'s GitHub profile`}
        >
          <img src={gitHubLogo} alt='github logo' />
        </a>
        <a
          href={linkedInURL}
          target='_blank'
          rel='noreferrer'
          aria-label={`Visit ${name}'s LinkedIn profile`}
        >
          <img src={linkedinLogo} alt='linkedIn logo' />
        </a>
      </div>
      <HexBG />
    </header>
  );
}
