import axios from 'axios'

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURFS_ERROR'
export const POST_SMURF = 'POST_SMURF'

const fetchSmurfs = () => {
    return (dispatch) => {
    dispatch({ type: FETCH_SMURFS })

    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FETCH_SMURF_ERROR, payload: { message: 'Sorry no Smurfs today.'}})
    })
  
}
}

const postSmurf = (newSmurf) => {
    return(dispatch) => {
    dispatch({ type: FETCH_SMURFS })

    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        dispatch({ type: POST_SMURF, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FETCH_SMURF_ERROR, payload: { message: "Sorry cannot add your smurf."}})
    })
}}

export { fetchSmurfs, postSmurf }