import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <About />
    </div>
  );
}

export default App;

// ex. image
// import logo from './logo.svg';
// <img src={logo} className='App-logo' alt='logo' />
