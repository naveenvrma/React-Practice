import axios from "axios";
import React from "react";

export default class User extends React.Component{

    state = {
        fName : "",
        lName : ""   
    }

    handleChange(event){
        event.preventDefault()
        this.setState.fName = this.refs.firstname.value;
        this.setState.lName = this.refs.lastname.value;
        console.log(this.setState.fName,)

        axios.post('https://reqres.in/api/users',{
            name : this.setState.fName,
            movies : [this.setState.lName]
        })
        .then((response) => console.log("posted", response))
        
    }

        

    render(){
        return(
            <form onSubmit={this.handleChange.bind(this)}>
                <label> First Name: <input  type="text" ref="firstname" placeholder="enter first name"/> </label><br></br>
                <label> Last Name: <input type="text" ref="lastname" placeholder="enter last name" /> </label><br></br>
                <input type="submit" value="Post"></input>
            </form>
        )

    }
}