import React from 'react';

function Logo (props) {
  const pokemonNames = ['Pidgeot', 'Pikachu']
    console.log(props)
    return (
      <header>
        <h1>Welcome to the {props.appName}</h1>
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'></img>
      </header>
      )
  }

  export default Logo