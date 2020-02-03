import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        res:[]
      }
    componentDidMount(){
        import('../Data.json').then(res=>{
            console.log(res)
            this.setState({res:res.default.user})
        })
    }
    render() { 
        return ( 
        <div>
        EmployeeList
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
        
            <tbody>
            {this.state.res.map((r)=>(
            <tr key={r.id}>
                <td >{r.id}</td>
                <td>{r.name}</td>
                <td>{r.age}</td>
                <td>{r.gender}</td>
                <td>{r.email}</td>
                <td>{r.phoneNo}</td>
                </tr>
                
        ))}
        </tbody>
        </table>
        </div>  );
    }
}
 
export default Dashboard;