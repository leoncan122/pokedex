import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  function handleCitySelected(e) {
    setCity(e.target.value)
    
  } 

  return (
    <div>
      <input type="text" name="city" value={city} onChange={handleCitySelected}/>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
