import React from 'react'

function Character(props) {
  return (
    <div className='text-center p-5'>
    <h3>{props.character.name}</h3>
  
      <img className='img-fluid rounded-pill' src={props.character.image}alt={props.character.name}></img>
      <p>{props.character.origin.name}</p>
    </div>
   
  )
}

export default Character
