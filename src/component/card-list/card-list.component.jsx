import React from 'react';
import './card-list.styles.css'


export const CardList = props => {
    
    return <div className='card-list'>
        { props.avengers.map(avenger => (
        <h1 key={avenger.id}> {avenger.name}</h1>
      ))}
    </div>;
};