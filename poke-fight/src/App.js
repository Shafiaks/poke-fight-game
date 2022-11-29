
import './App.css';
import { Routes, Route } from 'react-router-dom';

import PokemonList from './components/PokemonList';
import SinglePokemon from './components/SinglePokemon';
import SuperDetailedView from './components/SuperDetailedView';


function App() {
  return (
    <div className="App">
      <div className='router-wrapper'>
        <Routes>
          <Route path='/' element={<PokemonList />} ></Route>
          <Route path='/pokemon/:id/' element={<SinglePokemon />}></Route>
          <Route path='/pokemon/:id/:info' element={<SuperDetailedView />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
