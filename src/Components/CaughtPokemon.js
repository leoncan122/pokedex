import React, {useState} from 'react';



function CaughtPokemon (props) {

  const [caught, setCaught] = useState([])

  function getPokemon () {
    const number = Math.floor(Math.random() * 897)
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.json())
    .then(data => {
      const name = data.name
      const sprit = data.sprites.front_default
      const pokemon = {'name': name, 'sprit': sprit}
     
      setCaught([pokemon, ...caught])
      
    })
  }

    return (
      <div>
        <p>Caught {caught.length} Pokemon on {props.date}</p>
        <button onClick={() => { getPokemon()}}>Catch a Pokemon</button>
        <ul>
          {caught.map((pokemon, index) => (
            <div>
              <li key={index}>{pokemon.name}</li>
              <img key={index} src={pokemon.sprit}></img>
            </div>
          ) )}
        </ul>
      </div>
    )
}

export default CaughtPokemon;
