import './App.css';
import NewMovie from './components/NewMovie';
import NowPlaying from './components/NowPlaying';
import UpcomingMovie from './components/UpcomingMovie';

function App() {
  return (
    <>
    <div className="bg">
        
        </div>
      <div className="App">
      <h1>Hello Worlds</h1>
      <h4>What You Wanna Watch Today</h4>
      <NewMovie />
      <NowPlaying />

      <UpcomingMovie />
    </div>
    </>
    
  );
}

export default App;
