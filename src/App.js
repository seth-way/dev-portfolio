import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);
  const handleScroll = e => {
    const { current } = ref;
    console.log('asdf', current.scrollTop);
  };
  return (
    <div className='App' ref={ref} onScrollCapture={handleScroll}>
      <NavBar />
      <Header />
      <About />
    </div>
  );
}

export default App;
