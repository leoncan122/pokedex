import React from 'react';
import './App.css';
import Logo from './Components/Logo'
import BestPokemon from './Components/BestPokemon'
import CaughtPokemon from './Components/CaughtPokemon'


function App () {
  return (
    <div>
    <Logo appName="Pokedex" />
    <BestPokemon pokemon='Pidgeot' abilities= {['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date={new Date().toLocaleDateString()}/>
   </div>
  );
}

export default App;
