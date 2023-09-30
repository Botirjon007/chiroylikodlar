import React from 'react'

const Pets = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.animal}</h2>
        <h3>{props.breed}</h3>
    </div>
  )
}

export default Pets