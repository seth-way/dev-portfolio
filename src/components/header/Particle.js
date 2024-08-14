import './Particle.css';
import { useEffect, useRef } from 'react';

export default function Particle({ row, col }) {
  const ref = useRef(null);
  const delay = Math.floor(Math.random() * 50) / 20;
  const animation1 = `350ms animateParticleIn ${
    (col + row) * 10
  }ms ease-in-out both`;
  const animation2 = `1s fader ${delay}s ease-in-out alternate infinite`;
  useEffect(() => {
    const { current } = ref;
    // current.style.animation = `${animation1}, ${animation2}`;
    current.style.animation = `${animation2}`;
  });

  return <div className='particle' ref={ref}></div>;
}
