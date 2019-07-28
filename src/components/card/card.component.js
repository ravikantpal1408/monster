import React from 'react'
import './card.component.css';

export const Card = (props) => {
  return (
    <div className="card-container text-center">
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
      <h3 className="display-6">{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  )
}
