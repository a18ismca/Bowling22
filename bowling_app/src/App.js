
import './App.css';
import {Player} from './Player.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <h2>Hello world!</h2>
    
    <Player></Player>
    <Routes>
      <Route path='/' element={<Player/>} exact />
    </Routes>

    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
