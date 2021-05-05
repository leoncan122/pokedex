import React from 'react';
import './App.css';
import Logo from './Components/Logo'
import BestPokemon from './Components/BestPokemon'
import CaughtPokemon from './Components/CaughtPokemon'

function logWhenClick () {
  console.log('Rendering...')
}

function App () {
  return (
    <div>
    <Logo appName="Pokedex" handleClick={logWhenClick}/>
    <BestPokemon pokemon='Pidgeot' abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date={new Date().toLocaleDateString()}/>
   </div>
  );
}

export default App;
