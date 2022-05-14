import React from 'react'
import Card from '../Card/Card'
import './Card-list.scss'

export default function Cardlist(props) {
  return (
    <div className='card-list'>
        {props.monsters.map((monster, idx) => <Card key={idx} id={idx} monster={monster.name} email={monster.email}/>)}

    </div>
  )
}
