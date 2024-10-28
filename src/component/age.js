import React, { Component } from "react";

class Age extends Component{
    render(){
        return(
            <>
            <h2>You are {this.props.age} years old.</h2>
            </>
        )
    }
}

export default Age;