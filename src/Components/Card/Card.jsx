import React from 'react'
import './Card.scss'

export default function Card(props) {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.id}?set=set2&size=180x180`} alt="monster" />
        <h2>{props.monster}</h2>
        <p> {props.email}</p>
    </div>
  )
}
