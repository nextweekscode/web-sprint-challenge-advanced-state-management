import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { postSmurf} from '../actions/smurfActions'

const initialFormValues = {
    name: '',
    age: 0,
    height: '',
    id: uuid()
}

const SmurfForm = props => {
   const [formValues, setFormValues] = useState(initialFormValues)

   const onInputChange = e => {
       const { name, value } = e.target
       setFormValues({
           ...formValues,
           [name]: value,
       })
   }

   const addSmurf = e => {
       e.preventDefault()
     
        postSmurf(formValues)
       setFormValues(initialFormValues)
   }

   
    return (
        <div>
            <h2>Create a new Smurf</h2>
            <form >
                <label>Name:
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={onInputChange}
                    />
                </label>
                <label>Age:
                    <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={formValues.age}
                    onChange={onInputChange}
                    />
                </label>
                <label>Height:
                    <input
                    type="text"
                    name="height"
                    placeholder="height"
                    value={formValues.height}
                    onChange={onInputChange}
                    />
                </label>
                <button type='submit' onClick={addSmurf}>Submit Smurf</button>
            </form>

        </div>
    )

}

export default connect(null, {postSmurf})(SmurfForm)