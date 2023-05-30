import MenuBar from './components/menu-bar/menu-bar';
import ContentSection from './components/content-section/content-section';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-content">
        <div className='grid_container'>
          <MenuBar />
          <ContentSection />
        </div>
      </main>
    </div>
  );
}

export default App;
