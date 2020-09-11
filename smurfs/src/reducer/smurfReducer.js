import { FETCH_SMURFS, FETCH_SMURF_ERROR, FETCH_SMURF_SUCCESS, POST_SMURF} from '../actions'

const initialState = {
    data: [],
    loadingSmurf: false,
    error: "",
    message: "",


    
}


const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
            return {
                ...state,
                loadingSmurf: true,
                
               
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                loadingSmurf: false,
                data: action.payload,

            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                loadingSmurf: false,
                message: action.payload

            }
        case POST_SMURF:
            return {
                ...state,
                loadingSmurf: false,
                data: [...state.data, action.payload],

            }
            default:
                return state
    }
}

export default smurfReducer
