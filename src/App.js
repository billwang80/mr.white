import React from 'react';
import { 
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import AddPlayerView from './components/AddPlayerView';
import PlayGameView from './components/PlayGameView';

import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <div className='game_title'>Mr. White</div>
      <Router>
        <Routes>
          <Route exact path='/' element={<AddPlayerView />} />
          <Route exact path='/play' element={<PlayGameView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
