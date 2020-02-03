import React from 'react';
import Dashboard from './Dashboard'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Appnew from './Appnew'

class App extends React.Component{
    
    
render(){
    return(
        <div>
        <BrowserRouter>
        <Switch>
        <Route exact path={"/"} component={Appnew}  />}
        <Route exact path={"/EmployeeList"} component={Dashboard} />}
        </Switch>  
        </BrowserRouter>
        </div>

       
    )
}}


export default App