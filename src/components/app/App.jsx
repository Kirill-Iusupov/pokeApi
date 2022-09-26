import './App.css';
import React from 'react';
import { Routes , Route, useParams } from 'react-router-dom'
import Header from '../header';
import Footer from '../footer';
import PokemonsList from '../pokemonsList'
import Pokemon from '../pokemonInfo/pokemoninfo';

function App() {

let {pokemon} = useParams();

  return (
    <div className="app">
      <Header />   
      <Routes>
        <Route path = '/' exact element = {<PokemonsList />} />
        <Route path = '/pokemon/:pokemon' exact element = {<Pokemon />} />
        <Route path = '/help' element = {<h1>help page</h1>} />
        <Route path = '/contacts' element = {<h1>contact page</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
