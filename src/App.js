import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
