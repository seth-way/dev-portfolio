import './ProjectCard.css';
import { useRef } from 'react';
import TechIcon from './TechIcon';

export default function ProjectCard({ id, title, tech, openDrawer }) {
  const ref = useRef(null);
  const clamp = (value, min = 0, max = 100) => {
    return Math.min(Math.max(value, min), max);
  };

  const handleMouseMove = e => {
    var pos = [e.clientX, e.clientY];
    e.preventDefault();
    if (e.type === 'touchmove') {
      pos = [e.touches[0].clientX, e.touches[0].clientY];
    }
    const { current } = ref;
    if (current) {
      var dimensions = current.getBoundingClientRect();
      var l = pos[0] - dimensions.left;
      var t = pos[1] - dimensions.top;
      var h = dimensions.height;
      var w = dimensions.width;
      var px = clamp(Math.abs((100 / w) * l), 0, 100);
      var py = clamp(Math.abs((100 / h) * t), 0, 100);

      current.style.setProperty('--pointer-x', `${px}%`);
      current.style.setProperty('--pointer-y', `${py}%`);
    }
  };

  return (
    <section
      id={id}
      className='card'
      onClick={() => openDrawer(id)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      ref={ref}
    >
      <div className='inside'>
        <h3>{title}</h3>
        <div className='tech-used'>
          {tech.map((type, i) => (
            <TechIcon tech={type} key={`${i}-${type}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
