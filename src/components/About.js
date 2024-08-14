import './about/About.css';
import { useEffect, useRef } from 'react';
import headShot from '../assets/images/headShot.jpg';
import resumeInfo from '../assets/resume-info.json';
import resume from '../assets/resume.pdf';

export default function About() {
  const { bio, email, phone, address } = resumeInfo.background;
  const { city, state } = address;
  const ref = useRef(null);
  useEffect(() => {
    const { current } = ref;
    const handleScroll = () => {
      current.style.setProperty('--from', ((window.scrollY / 2) % 360) + 'deg');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='about' ref={ref}>
      <div>
        <div id='profilePicBorder'>
          <img src={headShot} alt='professional headshot' />
        </div>
        <section>
          <h2>About Me</h2>
          <p>{bio}</p>
        </section>
      </div>
      <div>
        <section>
          <h3>Contact Details</h3>
          <p>phone: {phone}</p>
          <p>
            address: {city}, {state}
          </p>
          <p>email: {email}</p>
        </section>
        <section>
          <a href={resume} download>
            <button className='hover-highlight'>
              <span>Download Resume</span>
            </button>
          </a>
        </section>
      </div>
    </section>
  );
}
