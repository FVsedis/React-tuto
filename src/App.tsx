import React , { useEffect, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon'
  
const App: React.FC = () => {
const [pokemons, setPokemons] = useState<Pokemon[]>([])    
useEffect(() =>{
    setPokemons(POKEMONS)
}, [])
 return (
  <div>
    <h1>Pokédex</h1>
    <p> Il y a {pokemons.length} pokémons dans le pokédex</p>
  </div>
 )
}
  
export default App;