import './ProjectCard.css';
import TechIcon from './TechIcon';

export default function ProjectCard({ id, title, tech }) {
  return (
    <section id={id} className='card'>
      <div className='inside'>
        <h3>{title}</h3>
        <div className='tech-used'>
          {tech.map(type => (
            <TechIcon tech={type} />
          ))}
        </div>
      </div>
    </section>
  );
}
