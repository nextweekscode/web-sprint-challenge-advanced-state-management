import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { fetchSmurfs } from '../actions/smurfActions'

import Smurf from './Smurf'

const SmurfList = props => {
  
   

    return (
        <div>
            <p>Smurfs Are Here</p>
        {props.data.map((item) => {
            return (
                <Smurf key={item.id} details={item}/>
            )
        })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)