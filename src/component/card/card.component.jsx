import React from 'react';

import './card.styles.css';

export const Card = props => (    
        <div className='card-container'>
        <img alt='avengers' src={`https://robohash.org/${props.avenger.id}?set=set2&size=180x180`} />
            <h2> {props.avenger.name}</h2>
            <p>{props.avenger.email}</p>
        </div>
);