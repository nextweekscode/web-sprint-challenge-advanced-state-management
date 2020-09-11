import React from 'react'

const Smurf = (props) => {
    const { details } = props
    return(
        <div>
        <p>{details.name}</p>
        <p>{details.age}</p>
        <p>{details.height}</p>
        </div>
    )
}

export default Smurf