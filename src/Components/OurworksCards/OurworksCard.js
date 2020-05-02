import React from 'react';
import '../OurworksCards/OurworksCards.css';
export default function ServicesCards(props) {
    return (
        <div className="Cardwork">
            <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        </div>
    )
}
