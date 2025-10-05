import { useState } from 'react'
import {cientificas} from '/data.js';
import Card from './card.jsx';
import './App.css'

export default function App() {
  const listaCientificas = cientificas.map(cientifica => (
    <Card
      key = {cientifica.id}
      person = {cientifica}
    />
  ));
  
  return (
    <div>
      <h2>Científicos Notables</h2>
      <div className = "cientificosLista">
        {listaCientificas}
      </div>
    </div>
  );
}
