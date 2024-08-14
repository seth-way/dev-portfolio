import './navbar/NavBar.css';
import { useState, useEffect, useRef } from 'react';
import DarkModeToggle from './navbar/DarkModeToggle';

const links = ['home', 'about', 'projects'];

function getActiveSection() {
  const sections = links.map(link => {
    const element = document.getElementById(link);
    const top = element.getBoundingClientRect().top;
    return { id: link, top };
  });

  const sortedNearestFirst = sections.sort(
    (a, b) => Math.abs(a.top) - Math.abs(b.top)
  );

  return sortedNearestFirst[0].id;
}

export default function NavBar() {
  const [currentSection, updateCurrent] = useState('home');
  const ref = useRef(null);

  useEffect(() => {
    updateCurrent(getActiveSection());
    const { current } = ref;
    const hideNav = () => {
      if (window.scrollY) current.classList.add('hidden');
    };

    const unhideNav = () => {
      current.classList.remove('hidden');
    };

    const handleScroll = () => {
      unhideNav();
      updateCurrent(getActiveSection());
    };

    const handleMouseMove = e => {
      if (e.clientY < 100) unhideNav();
      else hideNav();
    };

    window.onscroll = handleScroll;
    window.onscrollend = hideNav;
    window.onmousemove = handleMouseMove;

    return () => {
      window.removeEventListener('scroll', hideNav);
      window.removeEventListener('scrollend', unhideNav);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = e => {
    const id = e.target.value;
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav ref={ref}>
      {links.map(link => (
        <button
          onClick={handleClick}
          value={link}
          key={link}
          className={link === currentSection ? 'current' : ''}
        >
          {link}
        </button>
      ))}
      <DarkModeToggle />
    </nav>
  );
}
