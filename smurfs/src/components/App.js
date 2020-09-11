import React, { useEffect} from 'react';
import {connect} from 'react-redux'

import './App.css';
import SmurfList from '../components/smurfList'
import SmurfForm from '../components/smurfForm'
import { fetchSmurfs } from '../actions/smurfActions';



function App({fetchSmurfs, loadingSmurf, message}) {

  useEffect(() => {
    fetchSmurfs()
  }, [fetchSmurfs])
return (
    <div className="App">
      <SmurfList />
      <SmurfForm />
      
      
    </div>
  );
}
function mapStateToProps(state){
  return {
    loadingSmurf: state.loadingSmurf,
    message: state.messsage
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
