import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <Info />
      </header>
      <main className='main'>
        <About />
        <Interests />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
