import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Login from './Login'
import {connect} from 'react-redux'

class Appnew extends Component {
    
    render() { 

        if(this.props.isAuth){
            return <Redirect to ='/EmployeeList' />
        }
        return <Login />
    }
}


const mapStateToProps=state=>{
    // console.log(state)
    return {
        isAuth:state.validate.isAuth
    }
}
 
export default connect(mapStateToProps,null)(Appnew);