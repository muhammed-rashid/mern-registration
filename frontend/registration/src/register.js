import React, { Component } from 'react';
import '../src/my.css';
import axios from 'axios'
class Register extends Component{
 
    state={
      Username:'',
      password:'',
      email:'',
      
      
      
    }

    onchange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onclick = (e)=>{
        e.preventDefault()
        //console.log(this.state)
        axios({
            method: 'post',
            url: 'http://localhost:4000/add',
            data: {
               username:this.state.Username,
               email:this.state.email,
               password:this.state.password

            }
          }).then((res)=>{
            alert(res.data);
            console.log(res.data)
          }).catch((err)=>{
              console.log('err');
          })

    }
    

    render(){
  return (
    <div className="container wi">
        
        <h2 className="my-tex">Register here</h2>
     <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control"  name="email"  onChange={this.onchange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">User name</label>
    <input type="text" className="form-control" name="Username"  onChange={this.onchange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Password</label>
    <input type="password" className="form-control" name="password" onChange={this.onchange}/>
  </div>
  <button type="submit" className="btn" onClick = {this.onclick}>Submit</button>

  </form>
    </div>
  );
}
}
export default Register;
