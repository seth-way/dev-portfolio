import './DarkModeToggle.css';
import { useState } from 'react';
import { ReactComponent as MoonSVG } from '../../assets/images/moon.svg';
import { ReactComponent as SunSVG } from '../../assets/images/sun.svg';

export default function DarkModeToggle() {
  const [darkmode, switchMode] = useState('dark');
  function handleChange() {
    const newMode = darkmode === 'dark' ? 'light' : 'dark';
    const styleUpdates = {
      '--bg_C': `var(--bg-${newMode}1)`,
      '--bg-2_C': `var(--bg-${newMode}2)`,
      '--text_C': `var(--text-${newMode})`,
      '--text-2_C': `var(--text-${newMode}-alt)`,
      '--primary_C': `var(--primary-${newMode})`,
      '--secondary_C': `var(--secondary-${newMode})`,
      '--accent_C': `var(--accent-${newMode})`,
      '--gradient': `var(--bg-${newMode}-gradient)`,
    };

    Object.entries(styleUpdates).forEach(([prop, val]) => {
      document.body.style.setProperty(prop, val);
    });

    switchMode(newMode);
  }
  return (
    <label id='darkmode-toggle' className='switch'>
      <input
        type='checkbox'
        onChange={handleChange}
        checked={darkmode === 'dark'}
      ></input>
      <span className='slider'>
        <SunSVG />
        <MoonSVG />
      </span>
    </label>
  );
}
