import './ProjectDrawer.css';

export default function ProjectDrawer({ project, isOpen, closeDrawer }) {
  const { title } = project;
  const drawerClass = isOpen ? 'open' : 'close';
  return (
    <article id='project-drawer' className={drawerClass} onClick={closeDrawer}>
      <h2>{title}</h2>
    </article>
  );
}
