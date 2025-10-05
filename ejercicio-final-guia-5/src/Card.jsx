import { useState } from 'react'
import './Card.css';

export default function Card({person}) {
    return (
        <div className = "card">
            <h2>{person.nombre}</h2>
            <div className = "cardContent">
                <img className = "avatar"
                    src = {person.imageUrl}
                    width = {100}
                    height = {100}
                    alt = {person.nombre}
                />
                <ul>
                    <li><strong>Profesión:</strong> {person.profesion}</li>
                    <li><strong>Premios:</strong> {person.premios.length} ({person.premios.join(', ')})</li>
                    <li><strong>Descubrió: </strong> {person.descubrimiento}</li>
                </ul>
            </div>
        </div>
    );
}


