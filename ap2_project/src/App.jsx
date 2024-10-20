import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import CardList from './components/Cards/CardsList.jsx'; 
import Location from './components/location/Location'


function App() {

  return (
    <div className="App">
      <Header />
      <h1>Seja bem vindo a nossa AP2</h1>
      <CardList />
    </div>
  );
}

export default App;




