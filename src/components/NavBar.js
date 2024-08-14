import './navbar/NavBar.css';
import DarkModeToggle from './navbar/DarkModeToggle';

const links = ['home', 'about'];

export default function NavBar() {
  const handleClick = e => {
    const id = e.target.value;
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <nav>
      {links.map(link => (
        <button onClick={handleClick} value={link} key={link}>
          {link}
        </button>
      ))}
      <DarkModeToggle />
    </nav>
  );
}
