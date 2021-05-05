import React from 'react';

function BestPokemon (props) {
    return (
      <div>
        <p>My BestPokemon is {props.pokemon}</p>
          <ul> {props.abilities.map((ability, index) => 
            <li key={index}> {ability}</li>
            )}
        </ul>
      </div>
      
    )
}
export default BestPokemon;