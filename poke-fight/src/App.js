
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path='/pokemon/:id /*' element={<SinglePokemon />}>
            <Route path=':info' element={<SuperDetailedView />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
