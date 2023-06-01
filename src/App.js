import MenuBar from './components/menu-bar/menu-bar';
import ContentSection from './components/content-section/content-section';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-content">
        <BrowserRouter>
          <div className='grid_container'>
            <MenuBar />
            <ContentSection />
          </div>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
