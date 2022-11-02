import './App.css';
import React from 'react';
import { Routes , Route } from 'react-router-dom'
import Header from '../header';
import Footer from '../footer';
import PokemonsList from '../pokemonsList'
import Pokemon from '../pokemonInfo/pokemoninfo';
import Help from '../help/help';
import Contact from "../contact/contact"

function App() {

  return (
    <div className="app">
      <Header />  
      <Routes>
        <Route path = '/' exact element = {<PokemonsList />} />
        <Route path = '/pokemon/:pokemon' exact element = {<Pokemon />} />
        <Route path = '/help' element = { <Help /> } />
        <Route path = '/contacts' element = { <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
